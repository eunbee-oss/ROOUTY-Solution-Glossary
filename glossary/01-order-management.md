---
title: 주문관리
parent: 메뉴별 용어집
nav_order: 2
---

# 주문관리

주문의 등록·조회·수정·취소를 담당하는 메뉴입니다. 좌측 상단 구분은 **자동 배차**이며, 배차 유형(자동 최적화 · 다회전 · 자가 배송)별로 주문을 관리합니다.

> 기준 화면: `tms.roouty.io/manage/order/auto/*`

## 주문 상태 탭

| 용어 | English | 정의 |
|---|---|---|
| 전체 주문 | All Orders | 상태와 무관한 모든 주문 |
| 미배차 주문 | Unassigned Orders | 아직 차량에 배정되지 않은 주문 |
| 배차 완료 주문 | Assigned Orders | 차량 배정이 완료된 주문 |
| 처리 완료 주문 | Completed Orders | 배송/수거 작업까지 완료된 주문 |
| 보류 주문 | On-hold Orders | 처리 대기 상태로 보류된 주문 |
| 취소 주문 | Cancelled Orders | 취소 처리된 주문 |
| 자가 배송 주문 | Self-delivery Orders | 자가 배송으로 처리되는 주문 |

## 조회 · 필터

| 용어 | English | 정의 |
|---|---|---|
| 검색 기준 | Search Key | 주문 검색 기준 선택 — 주문 ID, 업체 주문 번호, 담당 차량 지정, 아이템명, 고객명, 주소, 특수 조건, 비고1~5 |
| 조회 기간 기준 | Period Type | 조회 기간의 기준 날짜 — 주문 접수일 또는 작업 희망일 |
| 주문 유형 | Order Type | 전체 / 배송 / 수거 |
| 배차 우선순위 | Dispatch Priority | 전체 / 높음 / 보통 / 낮음 |

## 주문 목록 기능

| 용어 | English | 정의 |
|---|---|---|
| 주문 추가 | Add Order | 신규 주문 등록 — 4가지 방식 지원 |
| 여러 건 엑셀로 추가 | Bulk Add via Excel | 주문등록 양식(엑셀) 업로드로 여러 주문을 한 번에 등록 |
| 여러 건 붙여넣기 | Bulk Add via Paste | 데이터를 복사·붙여넣기하여 여러 주문을 한 번에 등록 |
| 한 건 직접 추가 | Add Single Order | 입력 폼에서 주문 1건을 직접 등록 |
| 시스템 연결로 추가 | Add via System Integration | 외부 시스템 연동(API 등)으로 주문을 자동 등록 |
| 배차 계획 (버튼) | Create Dispatch Plan | 선택한 미배차 주문으로 배차 계획을 생성 |
| 주문 일괄 수정 | Bulk Edit Orders | 선택한 여러 주문의 정보를 한 번에 수정 |
| 주문 취소 | Cancel Order | 선택한 주문을 취소 처리 |

## 주문 정보 필드

| 용어 | English | 정의 |
|---|---|---|
| 주문 ID | Order ID | 시스템이 부여하는 주문 고유 식별자 |
| 업체 주문 번호 | Client Order Number | 화주(업체) 측 시스템에서 사용하는 주문 번호 |
| 주문 상태 | Order Status | 주문의 현재 처리 단계 |
| 주문 유형 | Order Type | 배송 또는 수거 (주문 1개당 하나만 설정 가능) |
| 배송 | Delivery | 물품을 고객에게 전달하는 주문 유형 |
| 수거 | Pickup | 물품을 고객으로부터 회수하는 주문 유형 |
| 주문 접수일 | Order Received Date | 주문이 시스템에 접수된 날짜 |
| 작업 희망일 | Requested Work Date | 고객이 배송/수거를 희망하는 날짜 |
| 배차 우선순위 | Dispatch Priority | 주문이 배차되어야 하는 우선순위 (높음/보통/낮음) |
| 담당 차량 지정 | Assigned Vehicle | 특정 차량이 해당 주문을 처리하도록 미리 지정 |
| 희망 시간 (이후) | Preferred Time (From) | 도착을 희망하는 시간 범위의 시작 시간 |
| 희망 시간 (이전) | Preferred Time (Until) | 도착을 희망하는 시간 범위의 끝 시간 |
| 예상 작업 시간(분) | Estimated Work Time (min) | 도착 후 작업에 소요될 것으로 예상되는 시간 (10~150분 옵션) |
| 특수 조건 | Special Condition | 주문을 처리할 차량이 갖춰야 하는 조건 (예: 냉장) |
| 하위 구분 | Sub-category | 주문 세부 분류를 위한 사용자 정의 구분 값 |
| 밀크런 | Milk Run | 수거한 상품을 특정 주소에 배송할 때 사용하는 그룹 ID |
| 회전 | Round | 주문이 처리될 회전 차수 |
| 아이템명 | Item Name | 배송/수거 대상 물품의 이름 |
| 아이템 코드 | Item Code | 물품의 고유 식별 코드 |
| 아이템 수량 | Item Quantity | 물품의 수량 |
| 합산 용적량1~3 | Total Volume 1–3 | 하나의 주문에 대한 총 용적량 (최대 3개 기준) |
| 팔레트 용적량1~3 | Pallet Volume 1–3 | 팔레트 단위 기준 용적량 (최대 3개 기준) |
| 고객명 | Customer Name | 고객의 성함 또는 상호 |
| 고객 연락처 | Customer Contact | 고객 전화번호 |
| 주소 | Address | 배송/수거지 도로명 주소 |
| 상세주소 | Detailed Address | 동·호수 등 상세 주소 |
| 고객 전달사항 | Customer Note | 고객이 기사에게 전달하는 요청사항 |
| 화주사명 / 화주사 연락처 | Shipper Name / Contact | 운송을 의뢰한 화주사 정보 |
| 중개사명 / 중개사 연락처 | Broker Name / Contact | 주문을 중개하는 업체 정보 |
| 배송 첨부 서류 | Delivery Attachment | 주문에 첨부하는 문서 파일 |
| 비고1~5 | Remarks 1–5 | 자유 입력 메모 필드 (최대 5개) |
| 수정자 | Modified By | 주문 정보를 마지막으로 수정한 사용자 |
