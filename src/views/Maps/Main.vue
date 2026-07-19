<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import CurLocMarker from '@/util/CurLocMarker.js';
import EventDetail from '@/components/EventDetail.vue';
import EventRegist from '@/components/EventRegist.vue';
import { useAppStore } from '@/stores/app';
import { useAuthStore } from '@/stores/auth';
import { useCleanEventStore } from '@/stores/cleanEvent';
import { loadGoogleMaps, getGoogleMapsApiKey } from '@/util/loadGoogleMaps.js';
import { animateTo } from '@/util/gsapSafe.js';
import markerImg from '@/assets/images/pngwing.png';

const appStore = useAppStore();
const authStore = useAuthStore();
const cleanEventStore = useCleanEventStore();

const { currentPosition } = storeToRefs(appStore);
const { eventMarkers, eventDetail } = storeToRefs(cleanEventStore);

const mapEl = ref(null);
const showBlock = ref(false);
const renderRegist = ref(true);

let map = null;
let curMarker = null;

function initMap() {
  try {
    map = new google.maps.Map(mapEl.value, {
      center: currentPosition.value,
      zoom: 16,
      disableDefaultUI: true,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#0d1b26' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#8aa0b0' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#0d1b26' }] },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#041018' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#1a3142' }],
        },
      ],
    });
  } catch {
    throw new Error(
      '구글 지도 불러오기에 실패했습니다.</br>잠시후 다시 시도 바랍니다.'
    );
  }
}

async function initMapDetail() {
  await setCurMarker();
  setEventMarkers();
  map.setCenter(currentPosition.value);
  map.addListener('click', e => clickMapEvent(e));

  const locationBtn = document.createElement('button');
  locationBtn.textContent = '현재위치';
  locationBtn.className = 'map-chip';
  locationBtn.addEventListener('click', clickCurPosition);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationBtn);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = '나가기';
  homeBtn.className = 'map-chip map-chip--ghost';
  homeBtn.addEventListener('click', () => appStore.moveToRealHome());
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(homeBtn);
}

async function setCurMarker() {
  try {
    const content = document.createElement('div');
    content.innerHTML = '등록하기';
    content.classList.add('custom-marker-text');

    const geocoder = new google.maps.Geocoder();
    const address = await geocoder.geocode({
      location: currentPosition.value,
    });
    appStore.setCurAddress(address.results[0].formatted_address);

    if (curMarker) {
      curMarker.setMap(null);
    }

    curMarker = new CurLocMarker(
      new google.maps.LatLng(
        currentPosition.value.lat,
        currentPosition.value.lng
      ),
      content
    );
    curMarker.setMap(map);
    curMarker.addClickEvent(fncClickCurMarker);
  } catch {
    throw new Error(
      '현재위치 조회에 실패했습니다.<br/>브라우저의 위치정보 제공상태를 확인하세요.'
    );
  }
}

async function openPanel(selector, top) {
  await nextTick();
  animateTo(document.querySelector(selector), {
    duration: 0.45,
    top,
  });
}

function fncClickCurMarker() {
  showBlock.value = true;
  snapShot(currentPosition.value);
  openPanel('.event-regist', '-1%');
}

function setIsAppear(flag) {
  showBlock.value = flag;
}

async function successUpload(event) {
  renderRegist.value = false;
  setEventMarker(event);
  await nextTick();
  renderRegist.value = true;
}

function setEventMarker(e) {
  const content = document.createElement('img');
  content.classList.add('custom-marker-img');
  content.src = markerImg;
  const marker = new CurLocMarker(
    new google.maps.LatLng(e.position.lat, e.position.lng),
    content
  );
  marker.setMap(map);
  marker.addClickEvent(() => {
    clickEventMarker(e);
  });
  clickEventMarker(e, 'dir');
}

function setEventMarkers() {
  eventMarkers.value.forEach(e => {
    const content = document.createElement('img');
    content.classList.add('custom-marker-img');
    content.src = markerImg;
    const marker = new CurLocMarker(
      new google.maps.LatLng(e.position.lat, e.position.lng),
      content
    );
    marker.setMap(map);
    marker.addClickEvent(() => {
      clickEventMarker(e);
    });
  });
}

function snapShot(position) {
  const key = getGoogleMapsApiKey();
  let staticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap';
  staticMapUrl += `?center=${position.lat},${position.lng}`;
  staticMapUrl += '&size=220x220';
  staticMapUrl += '&zoom=16';
  staticMapUrl += `&markers=color:black|${position.lat},${position.lng}`;
  staticMapUrl += `&key=${key}`;
  cleanEventStore.setMapSnapshot(staticMapUrl);
}

async function clickEventMarker(event, type) {
  let result = null;

  if (!type) {
    if (!eventDetail.value || event.id !== eventDetail.value.id) {
      try {
        result = await cleanEventStore.getCleanEvent(event.id);
        snapShot(result.position);
        showBlock.value = true;
        await openPanel('.event-detail', '0');
      } catch (e) {
        if (e.message === 'noData') {
          appStore.setError({
            message: '조회할 데이터가 존재하지않습니다.',
            type: 'browser',
          });
        } else {
          appStore.setError({
            message: e.message,
            type: 'critical',
          });
        }
      }
    } else {
      snapShot(eventDetail.value.position);
      showBlock.value = true;
      await openPanel('.event-detail', '0');
    }
  } else {
    cleanEventStore.setEventDetail(event);
    result = event;
    snapShot(result.position);
    showBlock.value = true;
    await openPanel('.event-detail', '0');
  }
}

async function clickCurPosition() {
  try {
    await appStore.setCurPosition();
    await setCurMarker();
    map.setCenter(currentPosition.value);
    map.setZoom(16);
  } catch (e) {
    appStore.setError({
      message: e.message,
      type: 'critical',
    });
  }
}

async function clickMapEvent(e) {
  try {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    await appStore.setCurPosition({ lat, lng });
    await setCurMarker();
  } catch (err) {
    appStore.setError({
      message: err.message,
      type: 'critical',
    });
  }
}

onMounted(async () => {
  appStore.setLoading(true);
  try {
    await authStore.loadDirAuthClient();
    await loadGoogleMaps();
    initMap();
    await appStore.setCurPosition();
    await cleanEventStore.getEventMarkers();
    await initMapDetail();
  } catch (e) {
    appStore.setError({
      message: e.message,
      type: 'critical',
    });
  } finally {
    appStore.setLoading(false);
  }
});
</script>

<template>
  <div class="map-main">
    <div ref="mapEl" class="map-main__canvas" />
    <div v-show="showBlock" class="map-main__block" />
    <EventDetail @set-is-appear="setIsAppear" />
    <EventRegist
      v-if="renderRegist"
      @set-is-appear="setIsAppear"
      @success-upload="successUpload"
    />
  </div>
</template>

<style>
.map-main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--ocean-mid);
}

.map-main__canvas {
  position: absolute;
  inset: 0;
}

.map-main__block {
  position: absolute;
  inset: 0;
  background: rgba(4, 16, 24, 0.55);
  z-index: 10;
}

.map-chip {
  margin: 12px 6px;
  border: 0;
  border-radius: 999px;
  padding: 0.7rem 1.1rem;
  background: rgba(6, 22, 34, 0.92);
  color: var(--foam);
  font-family: var(--font-display);
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.map-chip--ghost {
  background: rgba(238, 245, 248, 0.12);
}

.custom-marker-text {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  background: var(--accent);
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: var(--font-display);
  box-shadow: var(--shadow);
  cursor: pointer;
  color: white;
  white-space: nowrap;
}

.custom-marker-text:hover {
  opacity: 0.85;
}

.custom-marker-img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  width: 48px;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
}

.custom-marker-anchor {
  position: absolute;
  width: 100%;
  bottom: 8px;
  left: 0;
}

.custom-marker-anchor::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, 0);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid var(--accent);
}

.custom-marker-container {
  cursor: auto;
  height: 0;
  position: absolute;
  width: 200px;
}
</style>
