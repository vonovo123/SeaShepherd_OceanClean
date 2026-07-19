## SEA SHEPHERD — Ocean Clean

해양환경 NGO '시셰퍼드 코리아'의 환경정화활동 지원 웹앱입니다.

[DEMO](https://vonovo123.github.io/SeaShepherd_OceanClean/)

### 기술 스택

- Vue 3 + Vite
- Pinia + Vue Router 4
- Firebase 11 (Auth / Firestore / Storage)
- Google Maps + deck.gl

### 시작하기

1. 의존성 설치

```bash
npm install
```

2. 프로젝트 루트에 `.env` 파일 생성 (`.env.example` 참고)

```env
VITE_FIREBASE_API_KEY=파이어베이스_API_키
VITE_GOOGLE_MAPS_API_KEY=구글맵_API_키
```

3. 개발 서버 실행

```bash
npm run serve
```

4. 빌드 (GitHub Pages용 `docs/` 출력)

```bash
npm run build
```

### 환경변수

| 변수 | 설명 |
|------|------|
| `VITE_FIREBASE_API_KEY` | Firebase Console > Project settings > Web API Key |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Cloud > Maps JavaScript API / Static Maps API 키 |
| `VITE_GOOGLE_CLIENT_ID` | (선택) Google OAuth Client ID |

Google 로그인은 Firebase Authentication의 **Google 제공자**를 사용합니다.  
Firebase Console에서 Google 로그인을 활성화해 주세요.

### 화면 구성

- [랜딩](./devNote/LANDING.md)
- [인증](./devNote/AUTH.md)
- [지도](./devNote/MAP.md)
- [등록](./devNote/REGIST.md)
- [상세](./devNote/DETAIL.md)
- [에러](./devNote/ERROR.md)
