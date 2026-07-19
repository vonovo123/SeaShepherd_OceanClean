<script setup>
import { storeToRefs } from 'pinia';
import { useCleanEventStore } from '@/stores/cleanEvent';
import { animateTo } from '@/util/gsapSafe.js';
import recyclingBag from '@/assets/images/recycling-bag.png';

const emit = defineEmits(['setIsAppear']);
const cleanEventStore = useCleanEventStore();
const { eventDetail, mapSnapshot } = storeToRefs(cleanEventStore);

function hideEventDetail() {
  animateTo(document.querySelector('.event-detail'), {
    duration: 0.45,
    top: '100%',
  });

  const body = document.querySelector('.event-detail__body');
  if (body) body.scrollTop = 0;
  emit('setIsAppear', false);
}

function scaleLabel(scale) {
  if (scale === 0) return '20KG 이하를 수거했습니다';
  if (scale > 0 && scale < 6) return `${20 * scale}KG 이상을 수거했습니다`;
  return '';
}
</script>

<template>
  <div
    v-if="eventDetail"
    class="event-detail"
    @click="hideEventDetail"
  >
    <div class="event-detail__header">
      <span>{{ eventDetail.userInfo.name }} 님의 청소리포트</span>
      <small>아래로 닫기</small>
    </div>

    <div class="event-detail__body" @click.stop>
      <section class="panel">
        <h3>활동 사진</h3>
        <div class="photos">
          <img
            v-for="(url, idx) in eventDetail.photoUrl"
            :key="idx"
            class="photos__item"
            :src="url"
            alt="활동 사진"
          />
        </div>
      </section>

      <div class="grid">
        <section class="panel">
          <h3>사용자 정보</h3>
          <div class="row">
            <font-awesome-icon :icon="['fas', 'user']" />
            <strong>{{ eventDetail.userInfo.name }}</strong>
          </div>
          <div class="row">
            <font-awesome-icon :icon="['fas', 'envelope-square']" />
            <strong>{{ eventDetail.userInfo.email }}</strong>
          </div>
        </section>

        <section class="panel">
          <h3>날짜와 위치</h3>
          <div class="row">
            <font-awesome-icon :icon="['fas', 'calendar-week']" />
            <span>
              {{ eventDetail.date.from }} 부터<br />
              {{ eventDetail.date.to }} 까지
            </span>
          </div>
          <div class="row">
            <font-awesome-icon :icon="['fas', 'globe-asia']" />
            <span>{{ eventDetail.address }}</span>
          </div>
          <img v-if="mapSnapshot" class="map-shot" :src="mapSnapshot" alt="위치 미리보기" />
        </section>

        <section class="panel">
          <h3>함께한 사람</h3>
          <div class="row">
            <font-awesome-icon :icon="['fas', 'users']" />
            <span>{{ eventDetail.companions.length }} 명과 함께 했습니다</span>
          </div>
          <div class="companions">
            <div
              v-for="(com, idx) in eventDetail.companions"
              :key="idx"
              class="row"
            >
              <font-awesome-icon :icon="['fas', 'user-tag']" />
              <span>{{ com }}</span>
            </div>
          </div>
        </section>

        <section class="panel">
          <h3>쓰레기 수거량</h3>
          <div class="bags">
            <img
              v-if="eventDetail.scale === 0"
              :src="recyclingBag"
              alt=""
              style="opacity: 0.45"
            />
            <img
              v-for="idx in eventDetail.scale"
              v-else
              :key="idx"
              :src="recyclingBag"
              alt=""
            />
          </div>
          <p class="bags__label">{{ scaleLabel(eventDetail.scale) }}</p>
        </section>

        <section class="panel panel--wide">
          <h3>청소 후기</h3>
          <textarea class="memo" :value="eventDetail.memo" readonly />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-detail {
  position: absolute;
  inset: auto 0 0;
  top: 100%;
  height: 100%;
  z-index: 20;
  background: var(--panel);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: var(--foam);
  overflow: hidden;
}

.event-detail__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 1rem 1.25rem 0.85rem;
  background: var(--panel-soft);
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 700;
}

.event-detail__header small {
  color: var(--foam-muted);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.75rem;
}

.event-detail__body {
  height: calc(100% - 70px);
  overflow: auto;
  padding: 1rem 1.15rem 2rem;
}

.panel {
  background: rgba(238, 245, 248, 0.05);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem;
  margin-bottom: 1rem;
}

.panel h3 {
  margin: 0 0 0.85rem;
  font-family: var(--font-display);
  font-size: 1rem;
}

.photos {
  display: flex;
  gap: 0.65rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}

.photos__item {
  width: min(42%, 220px);
  flex: 0 0 auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.panel--wide {
  grid-column: 1 / -1;
}

.row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
  padding: 0.75rem 0.85rem;
  border-radius: var(--radius-sm);
  background: rgba(4, 16, 24, 0.45);
  line-height: 1.45;
}

.companions {
  max-height: 220px;
  overflow: auto;
}

.map-shot {
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 14px;
}

.bags {
  display: flex;
  gap: 0.35rem;
  min-height: 72px;
  align-items: center;
}

.bags img {
  width: 18%;
  max-width: 64px;
}

.bags__label {
  margin: 0.75rem 0 0;
  text-align: center;
  font-weight: 600;
}

.memo {
  width: 100%;
  min-height: 220px;
  border: 0;
  border-radius: 14px;
  background: rgba(4, 16, 24, 0.45);
  color: var(--foam);
  padding: 1rem;
  resize: vertical;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .photos__item {
    width: 78%;
  }
}
</style>
