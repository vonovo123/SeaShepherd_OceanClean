<template>
  <div class="auth">
    <div class="auth-header"></div>
    <div class="auth-body">
      <div class="auth-list">
        <div class="company google" @click="fncGMailAuth()">
          <img class="logo" src="../assets/images/gmail.png" alt="" />
          <div class="title">G-Mail로 인증하기</div>
        </div>
      </div>
    </div>
    <div class="auth-footer">
      <div class="auth-direct">
        <div class="direct" @click="fncShowDirAuth()">
          <div class="title">다른 이메일로 인증하기</div>
        </div>
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
        <div class="direct-btn" @click="fncDirAuth()">인증</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import gsap from 'gsap';
import { sendEmailAuth } from '../util/firebase.js';
export default {
  data() {
    return {
      dirFlag: false,
      dirName: '',
      dirEmail: '',
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
    }),
    async fncGMailAuth() {
      if (this.authInfo.isAuth) {
        this.$store.dispatch('moveToMaps');
      } else {
        try {
          await this.googleSignIn();
          this.$store.dispatch('moveToMaps');
        } catch (e) {
          alert(e);
        }
      }
    },
    async fncDirAuth() {
      sendEmailAuth(this.dirEmail, this.dirName);
      // await this.setAuthInfo({
      //   fullName: this.dirName,
      //   mail: this.dirEmail,
      //   isAuth: true,
      //   type: 'dir',
      // });
      // this.$store.dispatch('moveToMaps');
    },
    fncShowDirAuth() {
      const $target = document.querySelector('.auth-footer');
      const $input = document.querySelectorAll('.direct-input');
      const $btn = document.querySelector('.direct-btn');
      if (!this.dirFlag) {
        gsap.to($target, {
          duration: 0.2,
          height: '50%',
        });
        gsap.to([$input, $btn], {
          duration: 0.2,
          opacity: 1,
        });
      } else {
        gsap.to($target, {
          duration: 0.2,
          height: '10%',
        });
        gsap.to([$input, $btn], {
          duration: 0.2,
          opacity: 0,
        });
      }
      this.dirFlag = !this.dirFlag;
      console.log(this.dirFlag);
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
  height: 40%;
  background-color: var(--backgroundColor);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-top: 5%;
  padding-bottom: 5%;
}

.auth-body > .auth-list {
  position: relative;
  width: 100%;
  height: 100%;
  top: 15%;
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

.auth-footer > .auth-direct > .direct {
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

.direct > .title {
  font-size: 0.5em;
}

.auth-footer > .auth-direct > .direct-input {
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
  opacity: 0;
}

.auth-direct > .direct-input > input {
  padding-left: 5%;
  width: 80%;
  height: 100%;
  background-color: var(--objectColor);
  color: var(--fontColor);
  font-weight: lighter;
  font-size: 0.8em;
}

.auth-direct > .direct-input > input:focus {
  outline: none;
}
.auth-direct > .direct-btn {
  position: relative;
  margin-top: 50px;
  width: 80px;
  font-size: 0.8em;
  background-color: var(--objectColor);
  border-radius: 15px;
  left: 50%;
  margin-left: calc(80px / -2);
  text-align: center;
  opacity: 0;
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
