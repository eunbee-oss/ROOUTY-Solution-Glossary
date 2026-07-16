# ROOUTY Solution Glossary

Official glossary of terms used in ROOUTY, WeMeet Mobility's route optimization solution.

위밋모빌리티 경로 최적화 솔루션 ROOUTY(루티)의 공식 용어집입니다.
ROOUTY TMS 화면(주문관리 > 자동 배차 > 미배차 주문)을 기준으로 수집한 용어를 정리했습니다.

> 📌 기준 화면: `tms.roouty.io/manage/order/auto/unassigned` · 최종 수집일: 2026-07-15

---

## 목차

1. [메인 메뉴 (GNB)](#1-메인-메뉴-gnb)
2. [배차 방식](#2-배차-방식)
3. [주문 상태](#3-주문-상태)
4. [주문 정보 필드](#4-주문-정보-필드)
5. [아이템 · 용적 정보](#5-아이템--용적-정보)
6. [고객 · 거래처 정보](#6-고객--거래처-정보)
7. [조회 · 필터](#7-조회--필터)
8. [주문 관련 기능](#8-주문-관련-기능)

---

## 1. 메인 메뉴 (GNB)

| 용어 | English | 정의 |
|---|---|---|
| 주문관리 | Order Management | 주문의 등록, 조회, 수정, 취소 등 주문 전반을 관리하는 메뉴 |
| 배차 계획 | Dispatch Planning | 수집된 주문을 차량에 배정하고 경로를 계획하는 메뉴 |
| 모니터링 | Monitoring | 배차된 차량의 운행 현황을 실시간으로 확인하는 메뉴 |
| 보고서 | Report | 배송 실적, 운행 결과 등 운영 데이터를 집계·조회하는 메뉴 |
| 정산 | Settlement | 운송 비용 및 정산 내역을 관리하는 메뉴 |
| 메시지 관리 | Message Management | 고객 알림 등 발송 메시지를 관리하는 메뉴 |

## 2. 배차 방식

| 용어 | English | 정의 |
|---|---|---|
| 자동 배차 | Auto Dispatch | 시스템이 최적화 알고리즘으로 주문을 차량에 자동 배정하는 방식 |
| 자동 최적화 | Auto Optimization | 경로·배차를 시스템이 자동으로 최적화하는 기능 |
| 다회전 | Multi-trip | 한 차량이 하루에 여러 번 회차를 돌며 배송하는 운영 방식 |
| 회전 | Trip / Rotation | 차량이 거점에서 출발해 배송 후 복귀하는 1회 운행 단위 |
| 밀크런 | Milk Run | 한 차량이 여러 지점을 순회하며 수거·배송을 함께 수행하는 운송 방식 |
| 자가 배송 | Self Delivery | 배차 시스템을 거치지 않고 화주가 직접 배송을 수행하는 방식 |

## 3. 주문 상태

| 용어 | English | 정의 |
|---|---|---|
| 전체 주문 | All Orders | 상태와 무관한 모든 주문 |
| 미배차 주문 | Unassigned Orders | 아직 차량에 배정되지 않은 주문 |
| 배차 완료 주문 | Assigned Orders | 차량 배정이 완료된 주문 |
| 처리 완료 주문 | Completed Orders | 배송/수거 작업까지 완료된 주문 |
| 보류 주문 | On-hold Orders | 처리 대기 상태로 보류된 주문 |
| 취소 주문 | Cancelled Orders | 취소 처리된 주문 |
| 자가 배송 주문 | Self-delivery Orders | 자가 배송으로 처리되는 주문 |

## 4. 주문 정보 필드

| 용어 | English | 정의 |
|---|---|---|
| 주문 ID | Order ID | 시스템이 부여하는 주문 고유 식별자 |
| 업체 주문 번호 | Client Order Number | 화주(업체) 측 시스템에서 사용하는 주문 번호 |
| 주문 상태 | Order Status | 주문의 현재 처리 단계 (미배차/배차 완료/처리 완료 등) |
| 주문 유형 | Order Type | 주문의 작업 성격 구분 — 배송 또는 수거 (주문 1개당 하나만 설정 가능) |
| 배송 | Delivery | 물품을 고객에게 전달하는 주문 유형 |
| 수거 | Pickup | 물품을 고객으로부터 회수하는 주문 유형 |
| 주문 접수일 | Order Received Date | 주문이 시스템에 접수된 날짜 |
| 작업 희망일 | Requested Work Date | 고객이 배송/수거를 희망하는 날짜 |
| 배차 우선순위 | Dispatch Priority | 주문이 배차되어야 하는 우선순위 (높음/보통/낮음) |
| 담당 차량 지정 | Assigned Vehicle | 특정 차량이 해당 주문을 처리하도록 미리 지정하는 기능 |
| 희망 시간 (이후) | Preferred Time (From) | 작업이 시작 가능한 가장 이른 시각 |
| 희망 시간 (이전) | Preferred Time (Until) | 작업이 완료되어야 하는 가장 늦은 시각 |
| 예상 작업 시간(분) | Estimated Work Time (min) | 현장에서 배송/수거 작업에 소요될 것으로 예상되는 시간 |
| 특수 조건 | Special Condition | 냉장 등 주문 처리에 필요한 특수 요건 — 조건에 맞는 차량에만 배차됨 |
| 하위 구분 | Sub-category | 주문을 세부 분류하기 위한 사용자 정의 구분 값 |
| 배송 첨부 서류 | Delivery Attachment | 주문에 첨부하는 문서 파일 (거래명세서 등) |
| 비고1~5 | Remarks 1–5 | 자유 입력 가능한 추가 메모 필드 (최대 5개) |
| 수정자 | Modified By | 주문 정보를 마지막으로 수정한 사용자 |

## 5. 아이템 · 용적 정보

| 용어 | English | 정의 |
|---|---|---|
| 아이템명 | Item Name | 배송/수거 대상 물품의 이름 |
| 아이템 코드 | Item Code | 물품의 고유 식별 코드 |
| 아이템 수량 | Item Quantity | 물품의 수량 |
| 합산 용적량1~3 | Total Volume 1–3 | 주문에 포함된 아이템의 용적 합계 — 무게/부피/수량 등 최대 3개 기준으로 관리 |
| 팔레트 용적량1~3 | Pallet Volume 1–3 | 팔레트 단위 기준 용적량 (최대 3개 기준) |

## 6. 고객 · 거래처 정보

| 용어 | English | 정의 |
|---|---|---|
| 고객명 | Customer Name | 배송/수거 대상 고객의 이름 |
| 고객 연락처 | Customer Contact | 고객 전화번호 |
| 주소 | Address | 배송/수거지 기본 주소 |
| 상세주소 | Detailed Address | 동·호수 등 기본 주소 외 상세 주소 |
| 고객 전달사항 | Customer Note | 고객이 기사에게 전달하는 요청사항 |
| 화주사명 | Shipper Name | 운송을 의뢰한 화주사의 이름 |
| 화주사 연락처 | Shipper Contact | 화주사 전화번호 |
| 중개사명 | Broker Name | 운송을 중개하는 업체의 이름 |
| 중개사 연락처 | Broker Contact | 중개사 전화번호 |

## 7. 조회 · 필터

| 용어 | English | 정의 |
|---|---|---|
| 조회하기 | Search | 설정한 조건으로 주문 목록을 검색 |
| 초기화 | Reset | 검색 조건을 기본값으로 되돌림 |
| 조회 기간 | Search Period | 조회 기준 날짜 범위 — 주문 접수일 또는 작업 희망일 기준 (오늘/1주일/1개월/3개월) |
| 조회 항목 | Search Results Count | 검색 결과로 조회된 주문 건수 |
| N개씩 보기 | Rows per Page | 한 페이지에 표시할 주문 수 (10/20/30/40/50/300/500) |
| 표 항목 조회 설정 | Table Column Settings | 목록에 표시할 컬럼을 노출/미노출로 관리하는 설정 |
| 노출 목록 | Visible Columns | 테이블에 표시되는 컬럼 목록 |
| 미노출 목록 | Hidden Columns | 테이블에 표시되지 않는 컬럼 목록 |

## 8. 주문 관련 기능

| 용어 | English | 정의 |
|---|---|---|
| 주문 추가 | Add Order | 신규 주문을 등록하는 기능 — 4가지 방식 지원 |
| 여러 건 엑셀로 추가 | Bulk Add via Excel | 엑셀 파일 업로드로 여러 주문을 한 번에 등록 |
| 여러 건 붙여넣기 | Bulk Add via Paste | 데이터를 복사·붙여넣기하여 여러 주문을 한 번에 등록 |
| 한 건 직접 추가 | Add Single Order | 입력 폼에서 주문 1건을 직접 등록 |
| 시스템 연결로 추가 | Add via System Integration | 외부 시스템 연동(API 등)으로 주문을 자동 등록 |
| 배차 계획 (버튼) | Create Dispatch Plan | 선택한 미배차 주문으로 배차 계획을 생성 |
| 주문 일괄 수정 | Bulk Edit Orders | 선택한 여러 주문의 정보를 한 번에 수정 |
| 주문 취소 | Cancel Order | 선택한 주문을 취소 처리 |
| 다운로드 | Download | 조회된 주문 목록을 파일로 내려받기 |

---

## Contributing

용어 추가·수정은 Pull Request로 제안해 주세요. 각 용어는 `용어 | English | 정의` 형식을 따릅니다.

© WeMeet Mobility. All rights reserved.
