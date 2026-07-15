#!/usr/bin/env node
/**
 * 루티(Roouty) TMS 용어집 자동 추출 스크립트
 *
 * 두 가지 소스에서 UI 노출 텍스트를 수집합니다:
 *   1. i18n 로케일 파일 (locales/, i18n/, lang/ 폴더의 *.json, 또는 ko.json / ko-KR.json)
 *   2. 소스 코드에 하드코딩된 한글 문자열 (.js .jsx .ts .tsx .vue .svelte .html)
 *
 * 결과물: glossary/glossary.csv, glossary/glossary.md
 * 재실행 시 기존 CSV의 "정의" / "고객용 문구" 수기 입력 내용은 보존됩니다.
 *
 * 사용법:
 *   node extract-glossary.mjs [저장소 루트] [--src src] [--out glossary]
 */

import fs from "node:fs";
import path from "node:path";

// ---------- 설정 ----------
const args = process.argv.slice(2);
const positional = args.filter((a) => !a.startsWith("--"));
const getFlag = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] ? args[i + 1] : def;
};

const ROOT = path.resolve(positional[0] || ".");
const SRC_DIR = getFlag("src", "src");
const OUT_DIR = path.resolve(ROOT, getFlag("out", "glossary"));

const IGNORE_DIRS = new Set([
  "node_modules", "dist", "build", ".git", ".next", ".nuxt", "coverage",
  "out", "storybook-static", "__snapshots__", "public",
]);
const SOURCE_EXTS = new Set([".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte", ".html"]);
const LOCALE_DIR_NAMES = /(^|\/)(locales?|i18n|langs?|translations?|messages)(\/|$)/i;
const KO_FILE = /(^|[/_.-])(ko|ko-?kr|korean)([/_.-]|\.json$)/i;
const HAS_KOREAN = /[가-힣]/;
const MAX_OCCURRENCES = 3; // 출처 표기 최대 개수

// ---------- 유틸 ----------
function* walk(dir) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    if (e.name.startsWith(".") && e.name !== ".") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

const rel = (p) => path.relative(ROOT, p).replaceAll("\\", "/");

// ---------- 1) i18n 로케일 파일 수집 ----------
function flatten(obj, prefix = "", acc = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) flatten(v, key, acc);
    else if (typeof v === "string") acc[key] = v;
    else if (Array.isArray(v)) v.forEach((item, i) => {
      if (typeof item === "string") acc[`${key}[${i}]`] = item;
      else if (item && typeof item === "object") flatten(item, `${key}[${i}]`, acc);
    });
  }
  return acc;
}

function collectLocaleTerms() {
  const terms = new Map(); // text -> { keys:Set, files:Set }
  for (const file of walk(ROOT)) {
    if (!file.endsWith(".json")) continue;
    const r = rel(file);
    const inLocaleDir = LOCALE_DIR_NAMES.test(path.dirname(r) + "/");
    const isKoFile = KO_FILE.test(path.basename(r)) || KO_FILE.test(r);
    if (!inLocaleDir && !isKoFile) continue;
    let json;
    try { json = JSON.parse(fs.readFileSync(file, "utf8")); } catch { continue; }
    if (typeof json !== "object" || json === null) continue;
    const flat = flatten(json);
    for (const [key, text] of Object.entries(flat)) {
      if (!HAS_KOREAN.test(text)) continue; // 한글 포함 값만 (ko 로케일 대상)
      const t = text.trim();
      if (!t) continue;
      if (!terms.has(t)) terms.set(t, { keys: new Set(), files: new Set() });
      terms.get(t).keys.add(key);
      terms.get(t).files.add(r);
    }
  }
  return terms;
}

// ---------- 2) 하드코딩 한글 문자열 수집 ----------
function stripComments(code) {
  // 대략적 제거 (문자열 내부의 // 까지 지울 수 있으나 한글 수집 목적상 허용 범위)
  return code
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[^:"'`])\/\/[^\n]*/g, (m, p1) => p1 + " ".repeat(m.length - p1.length));
}

function collectHardcodedTerms() {
  const terms = new Map(); // text -> { occurrences: [file:line] }
  const srcRoot = path.join(ROOT, SRC_DIR);
  const scanRoot = fs.existsSync(srcRoot) ? srcRoot : ROOT;
  const stringRe = /(['"`])((?:\\.|(?!\1)[^\\\n])*?)\1/g;
  const jsxTextRe = />([^<>{}]*[가-힣][^<>{}]*)</g; // JSX/템플릿 태그 사이 텍스트

  for (const file of walk(scanRoot)) {
    if (!SOURCE_EXTS.has(path.extname(file))) continue;
    const r = rel(file);
    if (/\.(test|spec|stories)\./.test(r)) continue;
    let code;
    try { code = fs.readFileSync(file, "utf8"); } catch { continue; }
    if (!HAS_KOREAN.test(code)) continue;
    code = stripComments(code);
    const lines = code.split("\n");
    lines.forEach((line, i) => {
      const found = new Set();
      for (const re of [stringRe, jsxTextRe]) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(line)) !== null) {
          const text = (m[2] ?? m[1]).trim();
          if (HAS_KOREAN.test(text)) found.add(text);
        }
      }
      for (const text of found) {
        if (!terms.has(text)) terms.set(text, { occurrences: [] });
        const occ = terms.get(text).occurrences;
        if (occ.length < MAX_OCCURRENCES + 5) occ.push(`${r}:${i + 1}`);
      }
    });
  }
  return terms;
}

// ---------- 기존 수기 입력 보존 ----------
function parseCsv(content) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    if (inQuotes) {
      if (c === '"') {
        if (content[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && content[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some((f) => f !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field || row.length) { row.push(field); if (row.some((f) => f !== "")) rows.push(row); }
  return rows;
}

function loadExistingManualData(csvPath) {
  const manual = new Map(); // 용어 -> { def, customer }
  if (!fs.existsSync(csvPath)) return manual;
  const content = fs.readFileSync(csvPath, "utf8").replace(/^﻿/, "");
  const rows = parseCsv(content);
  if (rows.length < 2) return manual;
  const header = rows[0];
  const idx = (name) => header.indexOf(name);
  const [ti, di, ci] = [idx("용어"), idx("정의"), idx("고객용 문구")];
  if (ti === -1) return manual;
  for (const r of rows.slice(1)) {
    const term = r[ti];
    if (!term) continue;
    manual.set(term, {
      def: di !== -1 ? (r[di] || "") : "",
      customer: ci !== -1 ? (r[ci] || "") : "",
    });
  }
  return manual;
}

// ---------- 출력 ----------
const csvEscape = (s) => /[",\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
const mdEscape = (s) => s.replaceAll("|", "\\|").replaceAll("\n", " ");

function main() {
  console.log(`저장소 루트: ${ROOT}`);
  const localeTerms = collectLocaleTerms();
  const hardcodedTerms = collectHardcodedTerms();
  console.log(`i18n 용어: ${localeTerms.size}개, 하드코딩 용어: ${hardcodedTerms.size}개`);

  // 병합: text -> row
  const rows = new Map();
  for (const [text, info] of localeTerms) {
    rows.set(text, {
      term: text, type: "i18n",
      key: [...info.keys].slice(0, MAX_OCCURRENCES).join("; "),
      source: [...info.files].slice(0, MAX_OCCURRENCES).join("; "),
    });
  }
  for (const [text, info] of hardcodedTerms) {
    if (rows.has(text)) {
      rows.get(text).source += "; " + info.occurrences.slice(0, MAX_OCCURRENCES).join("; ");
    } else {
      rows.set(text, {
        term: text, type: "hardcoded", key: "",
        source: info.occurrences.slice(0, MAX_OCCURRENCES).join("; "),
      });
    }
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const csvPath = path.join(OUT_DIR, "glossary.csv");
  const manual = loadExistingManualData(csvPath);

  const sorted = [...rows.values()].sort((a, b) =>
    a.type.localeCompare(b.type) || a.term.localeCompare(b.term, "ko"));

  // CSV (BOM 포함 — 엑셀 한글 호환)
  const header = ["용어", "유형", "i18n 키", "출처", "정의", "고객용 문구"];
  const csvLines = [header.join(",")];
  for (const r of sorted) {
    const m = manual.get(r.term) || { def: "", customer: "" };
    csvLines.push([r.term, r.type, r.key, r.source, m.def, m.customer].map(csvEscape).join(","));
  }
  fs.writeFileSync(csvPath, "﻿" + csvLines.join("\n") + "\n", "utf8");

  // Markdown
  const mdPath = path.join(OUT_DIR, "glossary.md");
  const now = new Date().toISOString().slice(0, 10);
  const md = [
    `# 루티 TMS 용어집 (자동 생성)`,
    ``,
    `> 마지막 갱신: ${now} · 총 ${sorted.length}개 용어 · 이 파일은 \`extract-glossary.mjs\`가 자동 생성합니다.`,
    `> "정의"와 "고객용 문구"는 \`glossary.csv\`에서 수기로 관리하세요. 재생성 시 보존됩니다.`,
    ``,
    `| 용어 | 유형 | i18n 키 | 출처 | 정의 | 고객용 문구 |`,
    `|---|---|---|---|---|---|`,
    ...sorted.map((r) => {
      const m = manual.get(r.term) || { def: "", customer: "" };
      return `| ${mdEscape(r.term)} | ${r.type} | ${mdEscape(r.key)} | ${mdEscape(r.source)} | ${mdEscape(m.def)} | ${mdEscape(m.customer)} |`;
    }),
  ].join("\n");
  fs.writeFileSync(mdPath, md + "\n", "utf8");

  console.log(`완료: ${rel(csvPath)}, ${rel(mdPath)} (총 ${sorted.length}개 용어)`);
}

main();
