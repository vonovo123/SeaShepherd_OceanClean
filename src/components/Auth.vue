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
  <div class="auth" @click.self="close">
    <div class="auth__panel">
      <button class="auth__close" type="button" @click="close">닫기</button>

      <h2 class="auth__title">로그인</h2>

      <button class="auth__google" type="button" @click="fncGMailAuth">
        <img :src="gmailLogo" alt="" />
        Gmail로 인증하기
      </button>

      <button class="auth__link" type="button" @click="toggleDirAuth">
        다른 이메일로 인증하기
      </button>

      <div v-show="dirOpen" class="auth__form">
        <input
          v-model="dirEmail"
          type="email"
          placeholder="이메일"
          autocomplete="email"
        />
        <input
          v-model="dirName"
          type="text"
          placeholder="이름"
          autocomplete="name"
        />
        <p v-if="dirStatus" class="auth__status">{{ dirStatus }}</p>
        <button type="button" :disabled="sending" @click="fncDirAuth">
          {{ sending ? '전송 중…' : '인증' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth {
  position: absolute;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.55);
}

.auth__panel {
  position: relative;
  width: min(360px, 100%);
  padding: 2rem 1.5rem 1.5rem;
  background: #1a1a1a;
  color: #f2f2f2;
}

.auth__close {
  position: absolute;
  top: 0.85rem;
  right: 1rem;
  border: 0;
  background: transparent;
  color: #999;
  font-size: 0.85rem;
  cursor: pointer;
}

.auth__title {
  margin: 0 0 1.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
}

.auth__google {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem;
  border: 0;
  background: #2a2a2a;
  color: #f2f2f2;
  font-size: 0.95rem;
  cursor: pointer;
}

.auth__google:hover {
  background: #333;
}

.auth__google img {
  width: 1.25rem;
  height: 1.25rem;
}

.auth__link {
  display: block;
  width: 100%;
  margin-top: 1rem;
  border: 0;
  background: transparent;
  color: #aaa;
  font-size: 0.85rem;
  cursor: pointer;
  text-align: center;
}

.auth__form {
  display: grid;
  gap: 0.65rem;
  margin-top: 1rem;
}

.auth__form input {
  width: 100%;
  border: 0;
  background: #2a2a2a;
  color: #f2f2f2;
  padding: 0.8rem 0.9rem;
  outline: none;
}

.auth__form button {
  border: 0;
  background: #2a2a2a;
  color: #f2f2f2;
  padding: 0.8rem;
  cursor: pointer;
}

.auth__form button:hover:not(:disabled) {
  background: #333;
}

.auth__form button:disabled {
  opacity: 0.5;
  cursor: default;
}

.auth__status {
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
  color: #ccc;
}
</style>
