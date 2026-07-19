<script setup>
import { reactive, ref, watch, onMounted, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { useAppStore } from '@/stores/app';
import { useCleanEventStore } from '@/stores/cleanEvent';
import TypeError from '@/util/TypeError.js';
import { animateTo } from '@/util/gsapSafe.js';
import recyclingBag from '@/assets/images/recycling-bag.png';

const emit = defineEmits(['setIsAppear', 'successUpload']);

const authStore = useAuthStore();
const appStore = useAppStore();
const cleanEventStore = useCleanEventStore();

const { authInfo } = storeToRefs(authStore);
const { currentPosition, currentAddress } = storeToRefs(appStore);
const { mapSnapshot } = storeToRefs(cleanEventStore);

const photoEl = ref(null);
const observeEl = ref(null);
const registBtn = ref(null);
const companionList = ref([]);
const btnLabel = ref('등록');

const event = reactive({
  id: '',
  address: '',
  userInfo: { name: '', email: '' },
  date: { from: '', to: '' },
  memo: '',
  photos: [],
  photoUrl: [],
  companions: [],
  position: { lat: 0, lng: 0 },
  scale: 0,
});

function todayISO() {
  return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substring(0, 10);
}

function syncUser() {
  event.userInfo.name = authInfo.value.fullName;
  event.userInfo.email = authInfo.value.mail;
}

function init() {
  syncUser();
  event.date.from = todayISO();
  event.date.to = todayISO();
  event.position = { ...currentPosition.value };
}

watch(authInfo, syncUser, { deep: true });

onMounted(() => {
  init();

  const btn = registBtn.value;
  const observe = observeEl.value;
  if (!btn || !observe) return;

  const observer = new IntersectionObserver(entries => {
    animateTo(btn, {
      duration: 0.6,
      y: entries[0].isIntersecting ? 0 : 100,
      opacity: entries[0].isIntersecting ? 1 : 0,
    });
  });
  observer.observe(observe);
});

function loadFile(e) {
  const files = [...e.target.files];
  if (files.length + event.photos.length > 10) {
    e.target.value = '';
    appStore.setError({
      message: '사진은 최대 10장까지 업로드 가능합니다.',
      type: 'browser',
    });
    return;
  }

  files.forEach(file => {
    event.photos.push(file);
  });
  e.target.value = '';
}

function removePhoto(index) {
  event.photos.splice(index, 1);
}

function photoPreview(file) {
  return URL.createObjectURL(file);
}

function addCompanion() {
  if (companionList.value.length >= 30) {
    appStore.setError({
      message: '같이간 사람은 최대 30명까지 등록 가능합니다.',
      type: 'browser',
    });
    return;
  }
  companionList.value.push('');
}

function removeCompanion() {
  companionList.value.pop();
}

function clickTrash(index) {
  if (event.scale === index) {
    event.scale = index - 1;
  } else {
    event.scale = index;
  }
}

function scaleLabel() {
  if (event.scale === 0) return '20KG 이하를 수거했습니다';
  if (event.scale < 5) return `${20 + 20 * event.scale}KG 이하를 수거했습니다`;
  return '100KG 이상을 수거했습니다';
}

function hideEventRegist(e) {
  let flag = false;
  if (e) {
    if (
      e.target.classList.contains('event-regist') ||
      e.target.classList.contains('event-regist__header')
    ) {
      flag = true;
    }
  } else {
    flag = true;
  }

  if (!flag) return;

  animateTo(document.querySelector('.event-regist'), {
    duration: 0.45,
    top: '100%',
  });
  emit('setIsAppear', false);
}

async function regist() {
  try {
    for (const email of companionList.value) {
      if (!email) {
        throw new TypeError(
          '추가하려는 함께한 사람의 <br/> 이메일을 입력해주세요.',
          'browser'
        );
      }
    }

    if (!event.userInfo.name || !event.userInfo.email) {
      throw new TypeError(
        '사용자정보가 존재하지 않습니다. <br/> 잠시후 다시 시도 바랍니다.',
        'critical'
      );
    }
  } catch (e) {
    appStore.setError({
      message: e.message,
      type: e.type || 'browser',
    });
    return;
  }

  appStore.setLoading(true);

  try {
    if (registBtn.value) {
      animateTo(registBtn.value, {
        duration: 0.6,
        y: 100,
        opacity: 0,
      });
    }

    event.id = `${Date.now()}${event.userInfo.email}`;
    event.address = currentAddress.value;
    event.position = { ...currentPosition.value };
    event.companions = [...companionList.value];

    const payload = {
      id: event.id,
      address: event.address,
      userInfo: { ...event.userInfo },
      date: { ...event.date },
      memo: event.memo,
      photos: [...event.photos],
      photoUrl: [],
      companions: [...event.companions],
      position: { ...event.position },
      scale: event.scale,
    };

    const { photoUrl } = await cleanEventStore.setCleanEvent(payload);
    btnLabel.value = '등록 성공';

    animateTo(registBtn.value, {
      duration: 0.6,
      y: 0,
      opacity: 1,
    });

    setTimeout(async () => {
      hideEventRegist(null);
      emit('successUpload', { ...payload, photoUrl, photos: undefined });
      await nextTick();
      btnLabel.value = '등록';
    }, 1600);
  } catch (e) {
    appStore.setError({
      message: e.message || '등록에 실패했습니다.',
      type: e.type || 'critical',
    });
  } finally {
    appStore.setLoading(false);
  }
}
</script>

<template>
  <div class="event-regist" @click="hideEventRegist">
    <div class="event-regist__header">등록화면 닫기</div>

    <div class="event-regist__body" @click.stop>
      <section class="panel">
        <div class="panel__head">
          <h3>활동 사진</h3>
          <p>최대 10장까지 가능합니다</p>
        </div>

        <div ref="photoEl" class="photos">
          <img
            v-for="(file, idx) in event.photos"
            :key="`${file.name}-${idx}`"
            class="photos__item"
            :src="photoPreview(file)"
            alt="미리보기"
            @click="removePhoto(idx)"
          />
          <label v-show="event.photos.length < 10" class="photos__add" for="photoFirst">
            <font-awesome-icon :icon="['fas', 'camera']" size="2x" />
            <span>사진 추가</span>
          </label>
          <input
            id="photoFirst"
            type="file"
            accept="image/*"
            multiple
            hidden
            @change="loadFile"
          />
        </div>
      </section>

      <div class="grid">
        <section class="panel">
          <h3>사용자 정보</h3>
          <div class="field">
            <font-awesome-icon :icon="['fas', 'user']" />
            <input v-model="event.userInfo.name" type="text" readonly />
          </div>
          <div class="field">
            <font-awesome-icon :icon="['fas', 'envelope-square']" />
            <input v-model="event.userInfo.email" type="text" readonly />
          </div>
        </section>

        <section class="panel">
          <h3>위치와 날짜</h3>
          <div class="field">
            <font-awesome-icon :icon="['fas', 'globe-asia']" />
            <input :value="currentAddress" type="text" readonly />
          </div>
          <img v-if="mapSnapshot" class="map-shot" :src="mapSnapshot" alt="위치 미리보기" />

          <label class="label">시작일</label>
          <div class="field">
            <font-awesome-icon :icon="['fas', 'calendar-week']" />
            <input v-model="event.date.from" type="date" />
          </div>

          <label class="label">종료일</label>
          <div class="field">
            <font-awesome-icon :icon="['fas', 'calendar-week']" />
            <input v-model="event.date.to" type="date" />
          </div>
        </section>

        <section class="panel">
          <div class="panel__head">
            <h3>함께한 사람</h3>
            <p>email 주소를 남겨주세요</p>
          </div>
          <div class="companion-actions">
            <button type="button" @click="addCompanion">
              <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
            <button type="button" @click="removeCompanion">
              <font-awesome-icon :icon="['fas', 'minus']" />
            </button>
          </div>
          <div class="companions">
            <div
              v-for="(_, idx) in companionList"
              :key="idx"
              class="field"
            >
              <font-awesome-icon :icon="['fas', 'user-tag']" />
              <input v-model="companionList[idx]" type="email" placeholder="companion@email.com" />
            </div>
          </div>
        </section>

        <section class="panel">
          <h3>쓰레기 수거량</h3>
          <div class="bags">
            <img
              v-for="idx in 5"
              :key="idx"
              :src="recyclingBag"
              :class="{ active: idx <= event.scale }"
              alt=""
              @click="clickTrash(idx)"
            />
          </div>
          <p class="bags__label">{{ scaleLabel() }}</p>
        </section>

        <section class="panel panel--wide">
          <h3>청소 후기</h3>
          <textarea
            v-model="event.memo"
            class="memo"
            placeholder="청소 후기를 공유해주세요"
          />
        </section>
      </div>

      <div ref="observeEl" class="observe" />
    </div>

    <button
      ref="registBtn"
      class="event-regist__submit"
      type="button"
      @click.stop="regist"
    >
      {{ btnLabel }}
    </button>
  </div>
</template>

<style scoped>
.event-regist {
  position: absolute;
  inset: auto 0 0;
  top: 100%;
  height: 101%;
  z-index: 20;
  background: var(--panel);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  overflow: hidden;
}

.event-regist__header {
  padding: 1rem 1.25rem 0.85rem;
  text-align: center;
  background: var(--panel-soft);
  font-family: var(--font-display);
  font-weight: 700;
  cursor: pointer;
}

.event-regist__body {
  height: calc(100% - 140px);
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

.panel h3,
.panel__head h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1rem;
}

.panel__head {
  margin-bottom: 0.85rem;
}

.panel__head p,
.label {
  margin: 0.35rem 0 0.55rem;
  color: var(--foam-muted);
  font-size: 0.88rem;
}

.photos {
  display: flex;
  gap: 0.65rem;
  overflow-x: auto;
  min-height: 180px;
}

.photos__item,
.photos__add {
  width: min(42%, 220px);
  flex: 0 0 auto;
  aspect-ratio: 4 / 5;
  border-radius: 14px;
}

.photos__item {
  object-fit: cover;
  cursor: pointer;
}

.photos__add {
  display: grid;
  place-content: center;
  gap: 0.5rem;
  background: rgba(4, 16, 24, 0.55);
  border: 1px dashed var(--border);
  color: var(--foam-muted);
  cursor: pointer;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.panel--wide {
  grid-column: 1 / -1;
}

.field {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-sm);
  background: rgba(4, 16, 24, 0.45);
}

.field input {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--foam);
  outline: none;
}

.map-shot {
  width: 100%;
  margin: 0.35rem 0 0.75rem;
  border-radius: 14px;
}

.companion-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
  margin-bottom: 0.75rem;
}

.companion-actions button {
  border: 0;
  border-radius: var(--radius-sm);
  background: rgba(4, 16, 24, 0.55);
  color: var(--foam);
  padding: 0.75rem;
  cursor: pointer;
}

.companions {
  max-height: 220px;
  overflow: auto;
}

.bags {
  display: flex;
  justify-content: space-between;
  gap: 0.35rem;
}

.bags img {
  width: 18%;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.bags img.active {
  opacity: 1;
  transform: translateY(-2px);
}

.bags__label {
  margin: 0.85rem 0 0;
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

.observe {
  height: 24px;
  visibility: hidden;
}

.event-regist__submit {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  border: 0;
  background: var(--accent);
  color: white;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .photos__item,
  .photos__add {
    width: 78%;
  }
}
</style>
