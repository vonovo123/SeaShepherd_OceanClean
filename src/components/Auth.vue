<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useAppStore } from '@/stores/app';
import { sendEmailAuth } from '@/util/firebase.js';
import { emailRegExp } from '@/util/regExp.js';
import gmailLogo from '@/assets/images/gmail.png';

const emit = defineEmits(['setShowAuthFlag']);

const authStore = useAuthStore();
const appStore = useAppStore();

const dirOpen = ref(false);
const dirName = ref('');
const dirEmail = ref('');
const dirStatus = ref('');
const sending = ref(false);

function close() {
  emit('setShowAuthFlag', false);
}

async function fncGMailAuth() {
  if (
    navigator.userAgent.match(
      /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i
    )
  ) {
    appStore.setError({
      message:
        '카카오/삼성/네이버등의 인앱브라우저의 경우 구글인증이 불가합니다. <br/> 크롬/사파리 브라우저로 접속 하시거나 </br> 다른 이메일로 인증하기를 이용해주세요.',
      type: 'browser',
    });
    return;
  }

  if (authStore.authInfo.isAuth) {
    emit('setShowAuthFlag', false);
    appStore.moveToMaps();
    return;
  }

  try {
    await authStore.googleSignIn();
    emit('setShowAuthFlag', false);
    appStore.moveToMaps();
  } catch (e) {
    if (e?.code === 'auth/popup-closed-by-user') {
      appStore.setError({
        message: '사용자에 의해 gmail 인증이 취소됐습니다.',
        type: 'browser',
      });
      return;
    }

    appStore.setError({
      message:
        e?.message ||
        '사용자인증 중 알 수 없는 문제가 발생했습니다. 잠시후 다시 시도바랍니다.',
      type: 'critical',
    });
  }
}

async function fncDirAuth() {
  if (!dirEmail.value) {
    dirStatus.value = '이메일을 입력해주세요';
    return;
  }
  if (!dirName.value) {
    dirStatus.value = '이름을 입력해주세요';
    return;
  }
  if (!emailRegExp.test(dirEmail.value)) {
    dirStatus.value = '이메일 형식을 다시 확인해주세요';
    return;
  }

  try {
    sending.value = true;
    await sendEmailAuth(dirEmail.value, dirName.value);
    dirStatus.value = '입력하신 이메일로 인증메일을 전송했습니다';
    setTimeout(() => {
      sending.value = false;
      dirStatus.value = '';
    }, 3000);
  } catch (e) {
    sending.value = false;
    appStore.setError({
      message: e.message,
      type: 'browser',
    });
  }
}

function toggleDirAuth() {
  dirOpen.value = !dirOpen.value;
}
</script>

<template>
  <div class="auth-backdrop" @click.self="close">
    <div class="auth-sheet">
      <button class="auth-sheet__close" type="button" @click="close">닫기</button>

      <div class="auth-sheet__brand">
        <p class="eyebrow">Join the cleanup</p>
        <h2>인증하고 활동을 기록하세요</h2>
        <p class="lead">해양정화 활동을 지도에 남기려면 로그인이 필요합니다.</p>
      </div>

      <button class="auth-google" type="button" @click="fncGMailAuth">
        <img :src="gmailLogo" alt="" />
        <span>Gmail로 인증하기</span>
      </button>

      <div class="auth-sheet__footer">
        <button class="auth-toggle" type="button" @click="toggleDirAuth">
          다른 이메일로 인증하기
        </button>

        <div v-show="dirOpen" class="auth-direct">
          <input
            v-model="dirEmail"
            type="email"
            class="auth-input"
            placeholder="이메일"
            autocomplete="email"
          />
          <input
            v-model="dirName"
            type="text"
            class="auth-input"
            placeholder="이름"
            autocomplete="name"
          />
          <p v-if="dirStatus" class="auth-status">{{ dirStatus }}</p>
          <button
            class="auth-submit"
            type="button"
            :disabled="sending"
            @click="fncDirAuth"
          >
            {{ sending ? '전송 중…' : '인증 메일 보내기' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-backdrop {
  position: absolute;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: end center;
  padding: 1rem;
  background: rgba(4, 16, 24, 0.62);
  backdrop-filter: blur(6px);
}

.auth-sheet {
  width: min(460px, 100%);
  margin-bottom: 4vh;
  padding: 1.5rem 1.35rem 1.35rem;
  border-radius: 24px 24px 18px 18px;
  background:
    linear-gradient(180deg, rgba(18, 58, 82, 0.95), rgba(6, 22, 34, 0.98));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  position: relative;
}

.auth-sheet__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 0;
  background: transparent;
  color: var(--foam-muted);
  cursor: pointer;
}

.auth-sheet__brand {
  margin-bottom: 1.5rem;
  padding-right: 2.5rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--warm);
  font-family: var(--font-display);
}

.auth-sheet__brand h2 {
  margin: 0 0 0.55rem;
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 4vw, 1.85rem);
  line-height: 1.2;
}

.lead {
  margin: 0;
  color: var(--foam-muted);
  line-height: 1.5;
  font-size: 0.95rem;
}

.auth-google {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.95rem 1rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(238, 245, 248, 0.06);
  color: var(--foam);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.auth-google:hover {
  background: rgba(238, 245, 248, 0.12);
  transform: translateY(-1px);
}

.auth-google img {
  width: 1.4rem;
  height: 1.4rem;
}

.auth-sheet__footer {
  margin-top: 1.25rem;
}

.auth-toggle {
  display: block;
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--foam-muted);
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.auth-direct {
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
}

.auth-input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(4, 16, 24, 0.55);
  color: var(--foam);
  padding: 0.9rem 1rem;
  outline: none;
}

.auth-input:focus {
  border-color: rgba(244, 162, 97, 0.55);
}

.auth-status {
  margin: 0;
  text-align: center;
  color: var(--warm);
  font-size: 0.88rem;
}

.auth-submit {
  width: 100%;
  border: 0;
  border-radius: 999px;
  padding: 0.95rem 1rem;
  background: var(--accent);
  color: white;
  font-weight: 700;
  cursor: pointer;
}

.auth-submit:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
