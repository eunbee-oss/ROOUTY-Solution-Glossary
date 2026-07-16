# 배차 계획

배차 옵션을 설정하고 배차할 주문과 차량을 선택하여 배차를 계획하는 메뉴입니다.

> 기준 화면: `tms.roouty.io/manage/route/*`

## 배차 계획 유형

| 용어 | English | 정의 |
|---|---|---|
| 자동 최적화 | Optimization | AI 엔진이 주문과 차량에 맞춰 가장 최적의 배차를 제공하는 방식 |
| 다회전 | Multi Round (Beta) | 출발지 기준으로 차량의 1회전과 다회전 주문 처리가 가능한 방식 |
| 수동 | Manual | 배차 담당자가 지정한 순서와 차량으로 배차를 실행하는 방식 |

## 배차 진행 단계

| 용어 | English | 정의 |
|---|---|---|
| 배차 옵션 설정 | Dispatch Options | 1단계 — 주행 정보와 배차 기준을 설정 |
| 주문 선택 | Order Selection | 2단계 — 배차할 주문을 체크하여 선택 |
| 차량 선택 | Vehicle Selection | 3단계 — 배차할 차량을 체크하여 선택 |
| 다음으로/이전으로 이동 | Next / Back | 단계 간 이동 |
| 배차 결과 보기 | View Dispatch Result | 최적화 실행 후 배차 결과 화면으로 이동 |

## 배차 옵션

| 용어 | English | 정의 |
|---|---|---|
| 주행 일자 | Route Date | 주행이 이루어지는 날짜 |
| 주행 이름 | Route Name | 배차(주행) 건의 이름 (예: 2026.07.16 (목) 배차 #1) |
| 주행 시작 시간 지정 | Route Start Time | 주행 시작 시간을 지정 (선택) |
| 주행 종료 시간 지정 | Route End Time | 주행 종료 시간을 지정 (선택) |
| 배차 기준 | Dispatch Criteria | 차량 수 최소 또는 업무 시간 최소 중 선택 |
| 차량 수 최소 | Minimize Vehicles | 최소 차량으로 배차 |
| 업무시간 최소 | Minimize Work Time | 총 업무시간을 최소화하여 배차 |
| 균등 배차 | Balanced Dispatch | 배차 균등화 기준 — 선택 안함 / 균등 업무 시간 / 균등 주문 개수 |
| 균등 업무 시간 | Balanced Work Time | 차량 업무 시간을 균등하게 배차 |
| 균등 주문 개수 | Balanced Order Count | 차량 주문 개수를 균등하게 배차 |
| 권역 | Zone | 권역 내의 주문을 담당 차량에게 배차 (1개 필수 선택) |
| 권역 무관 | Zone-agnostic | 권역과 무관하게 차량을 최적화 |
| 기본 권역 | Fixed Zone | 설정한 권역을 기준으로 배차 |
| 유연한 권역 | Flexible Zone | 설정한 권역 간 인근 차량을 활용 |
| 유류비 · 통행료 | Fuel & Toll Cost | 이동 거리에 따라 예상 유류비·통행료를 계산 (선택 안 함 / 자동 계산) |
| 선택한 주문 / 선택한 차량 | Selected Orders / Vehicles | 현재 배차 계획에 포함된 주문 건수·차량 대수 |

## 차량 선택 필터 · 컬럼

| 용어 | English | 정의 |
|---|---|---|
| 주행 상태 | Route Status | 임시저장 / 주행대기 / 주행중 / 주행종료 / 미배정 |
| 운영 유형 | Operation Type | 고정차 / 지입차 / 고정용차 / 용차 |
| 주문 대기 건수 | Pending Orders | 해당 차량에 배정되어 대기 중인 주문 수 |
| 주문 종료 건수 | Completed Orders | 해당 차량이 처리 완료한 주문 수 |
| 담당 권역 | Assigned Zone | 차량이 담당하는 권역 |
| 출발지 주소 | Start Address | 차량이 주행을 시작하는 출발지 |

## 수동 배차

| 용어 | English | 정의 |
|---|---|---|
| 배차 설정 | Dispatch Settings | 주행 일자·주행 이름을 설정하는 좌측 패널 |
| 수동 배차 요약 | Manual Dispatch Summary | 선택된 주문 수·차량 수 요약 |
| 주문 엑셀 업로드 | Order Excel Upload | 엑셀 양식으로 배차할 주문을 업로드 |
| 배차 계획 저장 | Save Dispatch Plan | 작성한 배차 계획을 저장 (저장하지 않고 나가면 배차결과 삭제) |
