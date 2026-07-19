## SEA SHEPHERD — Ocean Clean

해양환경 NGO **시셰퍼드 코리아**의 환경정화 활동을 지도에 기록·공유하는 웹앱입니다.

[DEMO](https://vonovo123.github.io/SeaShepherd_OceanClean/)

---

### 구현 기능

#### 랜딩
- 전국 해양청소 활동 지점을 **Google Maps + deck.gl Scatterplot**으로 시각화
- 클릭/자동 전환으로 소개 → 참여·수거 통계 → CTA 슬라이드 전환
- 인증 상태에 따라 **등록하기 / 로그아웃** 제공

#### 인증
- **Gmail(Firebase Google 로그인)** 또는 **이메일 링크 인증**
- 인앱 브라우저(카카오·네이버 등)에서는 구글 로그인 제한 안내, 이메일 인증으로 우회
- 인증된 사용자만 지도·등록 화면으로 이동

#### 지도
- 현재 위치 기준 지도 표시, 지도 클릭으로 등록 위치 변경
- 등록된 청소 활동을 커스텀 마커로 표시
- **현재위치 / 나가기** 컨트롤 제공
- 현재 위치 마커 클릭 시 활동 등록 패널 오픈
- 활동 마커 클릭 시 상세 리포트 패널 오픈

#### 활동 등록
- 활동 사진 업로드 (최대 10장, Firebase Storage)
- 사용자 정보·주소·기간·동행자·수거량·후기 입력
- 수거량은 쓰레기봉투 아이콘으로 시각적 선택
- Firestore에 이벤트·마커를 트랜잭션으로 동시 저장 (실패 시 업로드 이미지 롤백)

#### 활동 상세
- 사진, 작성자, 기간·주소, 지도 스냅샷, 동행자, 수거량, 후기 조회
- Static Maps로 해당 위치 미리보기 표시

#### 공통
- GPS·네트워크·API 오류에 대한 일반/치명 에러 UI
- 모바일·데스크톱 반응형 레이아웃
- GSAP 기반 슬라이드·패널 전환 모션

---

### 화면 구성 상세

| 화면 | 문서 |
|------|------|
| 랜딩 | [LANDING](./devNote/LANDING.md) |
| 인증 | [AUTH](./devNote/AUTH.md) |
| 지도 | [MAP](./devNote/MAP.md) |
| 등록 | [REGIST](./devNote/REGIST.md) |
| 상세 | [DETAIL](./devNote/DETAIL.md) |
| 에러 | [ERROR](./devNote/ERROR.md) |

---

### 기술 스택

Vue 3 · Vite · Pinia · Vue Router 4 · Firebase (Auth / Firestore / Storage) · Google Maps · deck.gl · GSAP
