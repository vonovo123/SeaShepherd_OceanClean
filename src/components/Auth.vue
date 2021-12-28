<template>
  <div class="auth">
    <div class="auth-header"></div>
    <div class="auth-body">
      <div class="close" @click="setAuthFlag($event)">닫기</div>
      <div class="auth-list">
        <div class="company google" @click="fncGMailAuth()">
          <img class="logo" src="../assets/images/gmail.png" alt="" />
          <div class="title">G-Mail로 인증하기</div>
        </div>
      </div>
    </div>
    <div class="auth-footer">
      <div class="auth-direct">
        <div class="direct-title-wrapper" @click="fncShowDirAuth()">
          <div class="title">다른 이메일로 인증하기</div>
        </div>
        <div class="direct-input-wrapper">
          <div class="direct-input">
            <input
              type="text"
              class="input"
              v-model="dirEmail"
              placeholder="이메일"
            />
          </div>
          <div class="direct-input">
            <input
              type="text"
              class="input"
              v-model="dirName"
              placeholder="이름"
            />
          </div>
          <div class="direct-text">{{ dirStatus }}</div>
          <div class="direct-btn" @click="fncDirAuth()">인증</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import gsap from 'gsap';
import { sendEmailAuth } from '../util/firebase.js';
import { emailRegExp } from '../util/regExp.js';
export default {
  data() {
    return {
      dirFlag: false,
      dirName: '',
      dirEmail: '',
      dirStatus: '',
    };
  },
  computed: {
    ...mapState(['authStore']),
    ...mapGetters({ authInfo: 'authStore/AuthInfo' }),
  },
  methods: {
    ...mapActions({
      setAuthInfo: 'authStore/setAuthInfo',
      googleSignIn: 'authStore/googleSignIn',
      googleSignOut: 'authStore/googleSignOut',
      setError: 'setError',
    }),
    setAuthFlag(e) {
      this.$emit('setShowAuthFlag', false);
    },
    //gmail로 인증 이벤트
    async fncGMailAuth() {
      if (this.authInfo.isAuth) {
        this.$store.dispatch('moveToMaps');
        this.$emit('setShowAuthFlag', false);
      } else {
        try {
          await this.googleSignIn();
          this.$emit('setShowAuthFlag', false);
          this.$store.dispatch('moveToMaps');
        } catch (e) {
          if (e.error) {
            //인증화면 닫은경우
            if (e.error === 'popup_closed_by_user') {
              this.setError({
                message: '사용자에 의해 gmail 인증이 취소됐습니다.',
                type: 'browser',
              });
            } else {
              this.setError({
                message: e.error,
                type: 'browser',
              });
            }
          } else {
            this.setError({
              message:
                '사용자인증 중 알 수 없는 문제가 발생했습니다. 잠시후 다시 시도바랍니다.',
              type: 'critical',
            });
          }
        }
      }
    },
    //직접입력한 이메일로 인증
    async fncDirAuth() {
      if (this.dirEmail === '') {
        this.dirStatus = '이메일을 입력해주세요';
        return;
      }

      if (this.dirName === '') {
        this.dirStatus = '이름을 입력해주세요';
        return;
      }

      if (emailRegExp.test(this.dirEmail)) {
        sendEmailAuth(this.dirEmail, this.dirName);
        this.dirStatus = '입력하신 이메일로 인증메일을 전송했습니다';
        document.querySelector('.direct-btn').style.display = 'none';
        setTimeout(() => {
          document.querySelector('.direct-btn').style.display = 'block';
          this.dirStatus = '';
        }, 3000);
      } else {
        this.dirStatus = '이메일 형식을 다시 확인해주세요';
      }
    },
    fncShowDirAuth() {
      const $target = document.querySelector('.auth-footer');
      const $directInputWrapper = document.querySelector(
        '.direct-input-wrapper'
      );
      if (!this.dirFlag) {
        gsap.to($target, {
          duration: 0.2,
          height: '50%',
        });
        gsap.to($directInputWrapper, {
          duration: 0.1,
          display: 'block',
        });
      } else {
        gsap.to($target, {
          duration: 0.2,
          height: '10%',
        });
        gsap.to($directInputWrapper, {
          duration: 0.1,
          display: 'none',
        });
      }
      this.dirFlag = !this.dirFlag;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.auth {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  padding: 5% 15%;
  font-size: 2em;
  color: var(--fontColor);
  font-weight: bold;
}

.auth .auth-header {
  position: relative;
  width: 100%;
  height: 10%;
}

.auth .auth-body {
  position: relative;
  width: 100%;
  height: 30%;
  background-color: var(--backgroundColor);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-top: 30px;
  padding-bottom: 5%;
}

.auth-body > .auth-list {
  position: relative;
  width: 100%;
  height: 100%;
  top: 30px;
}
.auth-body > .close {
  position: absolute;
  right: 30px;
  font-size: 0.5em;
}

.auth-body .company {
  position: relative;
  width: 90%;
  background-color: var(--objectColor);
  left: 50%;
  margin-left: calc(90% / -2);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}
.company > .title {
  position: relative;
  font-size: 0.8em;
}

.company > .logo {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  margin-right: 2%;
}

.auth .auth-footer {
  position: relative;
  width: 100%;
  height: 10%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: var(--backgroundColor);
}

.auth-footer > .auth-direct {
  position: relative;
  width: 100%;
  height: 100%;
}

.auth-footer > .auth-direct > .direct-title-wrapper {
  position: relative;
  width: 50%;
  height: 30px;
  left: 50%;
  margin-left: calc(50% / -2);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.direct-title-wrapper > .title {
  font-size: 0.5em;
}

.auth-footer > .auth-direct > .direct-input-wrapper {
  display: none;
}

.auth-direct > .direct-input-wrapper > .direct-input {
  position: relative;
  width: 90%;
  height: 40px;
  left: 50%;
  margin-left: calc(90% / -2);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--objectColor);
  border-radius: 15px;
  top: 10px;
}
.auth-direct > .direct-input-wrapper > .direct-text {
  position: relative;
  width: 90%;
  height: 20px;
  left: 50%;
  margin-left: calc(90% / -2);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  top: 5px;
}

.direct-input > input {
  padding-left: 5%;
  width: 80%;
  height: 100%;
  background-color: var(--objectColor);
  color: var(--fontColor);
  font-weight: lighter;
  font-size: 0.8em;
}

.direct-input > input:focus {
  outline: none;
}
.auth-direct > .direct-input-wrapper > .direct-btn {
  position: relative;
  margin-top: 50px;
  padding: 5px;
  width: 80px;
  font-size: 0.8em;
  background-color: var(--objectColor);
  border-radius: 15px;
  left: 50%;
  margin-left: calc(80px / -2);
  text-align: center;
}

@media only screen and (max-width: 414px) {
  .auth {
    font-size: 1.5em;
  }
  .company > .title {
    font-size: 0.8em;
  }
  .company > .logo {
    width: 1em;
    height: 1em;
  }
}
</style>
