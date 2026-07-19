<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { ScatterplotLayer } from '@deck.gl/layers';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import mapStyle from '@/assets/style/map-style.js';
import Auth from '@/components/Auth.vue';
import AnimatedNumber from '@/components/AnimatedNumber.vue';
import { useAppStore } from '@/stores/app';
import { useAuthStore } from '@/stores/auth';
import { useCleanEventStore } from '@/stores/cleanEvent';
import { loadGoogleMaps } from '@/util/loadGoogleMaps.js';
import { animateFromTo, animateTo } from '@/util/gsapSafe.js';
import logoImg from '@/assets/images/sea_shepherd-logo.png';

const DEFAULT_POSITION = { lat: 36.5, lng: 127.8 };

const appStore = useAppStore();
const authStore = useAuthStore();
const cleanEventStore = useCleanEventStore();

const { currentPosition } = storeToRefs(appStore);
const { authInfo } = storeToRefs(authStore);
const { eventMarkers } = storeToRefs(cleanEventStore);

const mapEl = ref(null);
const brandEl = ref(null);
const coverEl = ref(null);
const viewIdx = ref(0);
const showAuth = ref(false);
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .substring(0, 10);

let map = null;
let intervalId = null;
let veilTimerId = null;

function menFormat(value) {
  return `${Number(value)
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 명`;
}

function kiloFormat(value) {
  return `${Number(value)
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} kg`;
}

function animateSlide() {
  nextTick(() => {
    const content = document.querySelector(`#content${viewIdx.value}`);
    animateFromTo(
      content,
      { y: 28, opacity: 0 },
      { duration: 1.1, y: 0, opacity: 1, ease: 'power2.out' }
    );
  });
}

function nextSlide() {
  viewIdx.value = viewIdx.value < 2 ? viewIdx.value + 1 : 0;
  animateSlide();
}

function onCoverClick(event) {
  if (event.target.closest('button')) return;
  clearInterval(intervalId);
  nextSlide();
}

function setShowAuthFlag(flag) {
  showAuth.value = flag;
}

function regist() {
  if (authInfo.value.isAuth) {
    appStore.moveToMaps();
  } else {
    showAuth.value = true;
  }
}

async function logOut() {
  if (authInfo.value.type === 'gmail') {
    await authStore.googleSignOut();
  } else {
    await authStore.emailSignOut();
  }
}

function initMap() {
  const mapOptions = {
    center: currentPosition.value,
    zoom: 6,
    styles: mapStyle,
    disableDefaultUI: true,
    gestureHandling: 'none',
    keyboardShortcuts: false,
  };

  map = new google.maps.Map(mapEl.value, mapOptions);
  setGoogleMapsOverlay();
}

function setGoogleMapsOverlay() {
  const scatterplotLayer = new ScatterplotLayer({
    id: 'scatterplot',
    data: eventMarkers.value,
    getPosition: d => [parseFloat(d.position.lng), parseFloat(d.position.lat)],
    getRadius: d => parseInt(d.scale, 10) || 1,
    stroked: true,
    getFillColor: [244, 162, 97, 200],
    getLineColor: [214, 40, 40, 220],
    radiusMinPixels: 5,
    radiusMaxPixels: 50,
  });

  const googleMapsOverlay = new GoogleMapsOverlay({
    layers: [scatterplotLayer],
  });
  googleMapsOverlay.setMap(map);
}

onMounted(async () => {
  animateFromTo(
    brandEl.value,
    { y: -24, opacity: 0 },
    { duration: 1.2, y: 0, opacity: 1, ease: 'power2.out' }
  );

  appStore.setLoading(true);

  try {
    const isDirAuth = await authStore.checkDirAuthLink();
    if (isDirAuth) {
      const email = window.localStorage.getItem('emailForSignIn');
      const name = window.localStorage.getItem('nameForSignIn');
      authStore.setAuthInfo({
        fullName: name,
        mail: email,
        isAuth: true,
        type: 'dir',
      });
      window.localStorage.removeItem('emailForSignIn');
      window.localStorage.removeItem('nameForSignIn');
      appStore.moveToMaps();
      return;
    }

    await authStore.loadDirAuthClient();
    await loadGoogleMaps();

    try {
      await appStore.setCurPosition();
    } catch {
      // 랜딩은 GPS 없이도 지도 미리보기가 가능하도록 기본 좌표 사용
      await appStore.setCurPosition(DEFAULT_POSITION);
    }

    try {
      await cleanEventStore.getEventMarkers();
    } catch (e) {
      console.warn('마커 로드 실패:', e);
    }

    initMap();
  } catch (e) {
    appStore.setError({
      message: e.message,
      type: 'critical',
    });
    return;
  } finally {
    appStore.setLoading(false);
  }

  veilTimerId = setTimeout(() => {
    animateTo(coverEl.value, {
      duration: 1.2,
      backgroundColor: 'rgba(4, 16, 24, 0.42)',
    });
  }, 1200);

  animateSlide();

  intervalId = setInterval(() => {
    if (viewIdx.value < 2) {
      viewIdx.value += 1;
      animateSlide();
    } else {
      clearInterval(intervalId);
    }
  }, 4200);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
  clearTimeout(veilTimerId);
});
</script>

<template>
  <div class="home">
    <div class="home__map" ref="mapEl" />

    <div class="home__veil" ref="coverEl" @click="onCoverClick">
      <header class="home__brand" ref="brandEl">
        <img :src="logoImg" alt="Sea Shepherd" class="home__logo" />
        <p class="home__brand-name">SEA SHEPHERD</p>
        <p class="home__brand-sub">KOREA · OCEAN CLEAN</p>
      </header>

      <div class="home__stage">
        <section v-show="viewIdx === 0" id="content0" class="home__slide">
          <h1>바다가 숨을 쉴 수 있도록</h1>
          <p>시셰퍼드 컨저베이션 소사이어티는 해양생물 보호를 위해 해양쓰레기를 수거합니다.</p>
        </section>

        <section v-show="viewIdx === 1" id="content1" class="home__slide">
          <p class="home__meta">{{ today }} 기준</p>
          <h1>
            <AnimatedNumber
              v-if="viewIdx === 1"
              :value="231"
              :duration="1000"
              :format-value="menFormat"
            />
          </h1>
          <p>해양청소에 참여한 사람들</p>
          <h2>
            <AnimatedNumber
              v-if="viewIdx === 1"
              :value="5000"
              :duration="1000"
              :format-value="kiloFormat"
            />
          </h2>
          <p>수거된 쓰레기</p>
        </section>

        <section v-show="viewIdx === 2" id="content2" class="home__slide home__slide--cta">
          <h1>당신의 청소를 지도에 남겨주세요</h1>
          <p>환경을 위한 행동을 모두에게 공유합니다.</p>
          <div class="home__actions">
            <button type="button" class="btn btn--primary" @click="regist">
              해양청소 등록하기
            </button>
            <button
              v-show="authInfo.isAuth"
              type="button"
              class="btn btn--ghost"
              @click="logOut"
            >
              로그아웃
            </button>
          </div>
        </section>
      </div>

      <div class="home__dots" aria-hidden="true">
        <span :class="{ active: viewIdx === 0 }" />
        <span :class="{ active: viewIdx === 1 }" />
        <span :class="{ active: viewIdx === 2 }" />
      </div>
    </div>

    <Auth v-if="showAuth" @set-show-auth-flag="setShowAuthFlag" />
  </div>
</template>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--ocean-deep);
}

.home__map {
  position: absolute;
  inset: 0;
}

.home__veil {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: rgba(4, 16, 24, 0.88);
  cursor: pointer;
}

.home__brand {
  padding: clamp(1.5rem, 5vh, 3rem) 1.5rem 0;
  text-align: center;
}

.home__logo {
  width: clamp(56px, 10vw, 84px);
  height: auto;
  margin: 0 auto 0.85rem;
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.35));
}

.home__brand-name {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.1rem, 7vw, 4.2rem);
  letter-spacing: 0.08em;
  line-height: 0.95;
}

.home__brand-sub {
  margin: 0.55rem 0 0;
  color: var(--warm);
  letter-spacing: 0.28em;
  font-size: 0.72rem;
  font-weight: 600;
}

.home__stage {
  position: relative;
  display: grid;
  place-items: center;
  padding: 1rem 1.5rem 2rem;
}

.home__slide {
  max-width: 720px;
  text-align: center;
}

.home__slide h1 {
  margin: 0 0 0.85rem;
  font-family: var(--font-display);
  font-size: clamp(1.55rem, 4.5vw, 2.6rem);
  line-height: 1.2;
  font-weight: 700;
}

.home__slide h2 {
  margin: 1.2rem 0 0.4rem;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3.8vw, 2.1rem);
  color: var(--warm);
}

.home__slide p {
  margin: 0;
  color: var(--foam-muted);
  font-size: clamp(1rem, 2.4vw, 1.15rem);
  line-height: 1.6;
}

.home__meta {
  margin-bottom: 0.65rem !important;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.78rem !important;
  color: var(--accent-soft) !important;
}

.home__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 0.95rem 1.45rem;
  cursor: pointer;
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 0.02em;
}

.btn--primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 12px 30px rgba(214, 40, 40, 0.35);
}

.btn--ghost {
  background: rgba(238, 245, 248, 0.08);
  color: var(--foam);
  border: 1px solid var(--border);
}

.home__dots {
  display: flex;
  justify-content: center;
  gap: 0.45rem;
  padding-bottom: 1.5rem;
}

.home__dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(238, 245, 248, 0.28);
  transition: transform 0.25s ease, background 0.25s ease;
}

.home__dots span.active {
  background: var(--warm);
  transform: scale(1.25);
}
</style>
