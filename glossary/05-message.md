# 메시지 관리

주문별 고객·기사·거래처에게 문자 메시지를 발송·예약하고, 상태 변화에 따른 알림메시지를 자동화하는 메뉴입니다.

> 기준 화면: `tms.roouty.io/manage/message/*`

## 하위 메뉴

| 용어 | English | 정의 |
|---|---|---|
| 메시지 수동 발송 | Manual Message Send | 주문별 고객에게 문자 메시지를 직접 발송하거나 예약 |
| 알림메시지 자동 설정 | Auto Notification Settings | 주문 상태·수신인 종류별 자동 발송 알림메시지를 작성·설정 |
| 발송 이력 조회 | Send History | 발송/예약한 메시지 내역 확인 |

## 메시지 수동 발송

| 용어 | English | 정의 |
|---|---|---|
| 주문 상태 필터 | Order Status Filter | 전체 / 미배차 / 배차완료 / 처리중 / 처리완료 / 보류 / 취소 |
| 담당 기사님 | Assigned Driver | 주문을 담당하는 기사 |
| 메시지 제목 | Message Title | 40byte 이내. 90byte 이하 단문메시지는 제목 미발송 |
| 메시지 내용 | Message Body | 90byte 초과 시 장문메시지(LMS)로 자동 변환 |
| 단문메시지 / 장문메시지 | SMS / LMS | 90byte 기준으로 구분되는 문자 유형 |
| 예약 날짜/시간 지정 | Scheduled Send | 메시지를 보낼 시간을 예약 |
| 즉시 발송하기 | Send Immediately | 예약 없이 바로 발송 |
| 수신인 | Recipient | 메시지를 받을 대상 (주문 목록에서 체크하여 선택) |
| 발송하기 | Send | 메시지 발송 실행 |

## 알림메시지 자동 설정

| 용어 | English | 정의 |
|---|---|---|
| 수신인 종류 | Recipient Type | 고객 / 기사 / 중개사 / 화주사 |
| 활성 상태 | Active Status | 해당 알림메시지의 사용 여부 |
| 진행 구분 | Stage | 준비중 / 진행중 / 완료 / 보고 — 알림이 발송되는 주문 진행 단계 |
| 발송 시간 | Send Timing | 알림메시지가 발송되는 조건·시점 |
| 서비스 일정 확정 안내 | Schedule Confirmation Notice | 배차 확정 시 고객·중개사에게 발송. 주행일 전일 16시 이전 확정 건은 16시 일괄 발송 |
| 경로 확정 안내 | Route Confirmation Notice | 배차 확정 시 기사에게 발송 |
| 서비스 예정 안내 | Service Upcoming Notice | 기사가 "주행 시작하기"를 누르면 고객·중개사에게 발송 |
| 서비스 완료 예정 안내 | Service Imminent Notice | 기사가 해당 주문을 "시작하기"하면 발송 |
| 서비스 완료 안내 | Service Completed Notice | 기사가 주문을 완료하면 발송 |
| 배차 업무 완료 보고 | Dispatch Completion Report | 완료·보류 건이 100%가 되면 화주사에게 발송 |
| 발송 내용 | Message Content | 선택한 알림메시지의 상세 내용 |

## 발송 이력 조회

| 용어 | English | 정의 |
|---|---|---|
| 자동 발송 | Auto Sent | 알림메시지 자동 설정으로 발송된 내역 |
| 수동(예약) 발송 | Manual (Scheduled) Sent | 수동·예약 발송 내역 |
| 발송 제외 | Excluded | 발송에서 제외된 내역 |
| 발송(예정)일/시간 | Send (Scheduled) Time | 발송되었거나 발송 예정인 일시 |
| 수신인 명 | Recipient Name | 메시지를 받은 대상의 이름 |
