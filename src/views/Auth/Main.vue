<template>
  <div class="auth-main" @click="showNavigation">
    <Navigation></Navigation>
    <div class="body">
      <p>People API Quickstart</p>
      <button
        id="authorize_button"
        v-show="!googleAuthStore.authInfo.isAuth"
        @click="this.handleAuthClick"
      >
        Authorize
      </button>
      <button
        id="signout_button"
        v-show="googleAuthStore.authInfo.isAuth"
        @click="this.handleSignoutClick"
      >
        Sign Out
      </button>
      <pre id="content" style="white-space: pre-wrap"></pre>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Navigation from '../../components/Navigation.vue';
export default {
  components: { Navigation },
  data() {
    return {
      authorizeButton: null,
      signoutButton: null,
    };
  },
  computed: {
    ...mapState(['googleAuthStore']),
    ...mapGetters({ authInfo: 'googleAuthStore/AuthInfo' }),
  },
  methods: {
    ...mapActions({ setAuthInfo: 'googleAuthStore/setAuthInfo' }),
    //peopleApi init
    handleClientLoad() {
      gapi.load('client:auth2', this.initClient);
    },
    initClient() {
      gapi.client.init(this.googleAuthStore.apiAuthInfo).then(
        () => {
          this.updateSigninStatus();
          //인증상태 변화에 따라 updateSigninStatus 실행하도록
          gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(this.updateSigninStatus);
          //로그인여부 검사
        },
        function (error) {}
      );
    },
    handleAuthClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    },
    handleSignoutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    },
    updateSigninStatus() {
      const isAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
      if (isAuth) {
        console.log('login');
        gapi.client.people.people
          .get({
            resourceName: 'people/me',
            personFields: 'names,emailAddresses',
          })
          .then(res => {
            this.setAuthInfo({
              fullName: res.result.names[0].displayName,
              gMail: res.result.emailAddresses[0].value,
              isAuth: isAuth,
            });
          });
      } else {
        console.log('logout');
        this.setAuthInfo({
          fullName: '',
          gMail: '',
          isAuth: isAuth,
        });
      }
    },
    showNavigation: function (e) {
      console.log(e);
      const targetClass = e.target.classList[0];
      console.log(targetClass);
      if (targetClass && (targetClass === 'body' || targetClass === 'column')) {
        const $navMain = document.querySelector('.nav-main');
        if ($navMain.classList.contains('nav-appear')) {
          $navMain.classList.add('nav-disappear');
          $navMain.classList.remove('nav-appear');
          setTimeout(function () {
            $navMain.style.display = 'none';
          }, 100);
        } else {
          $navMain.classList.add('nav-appear');
          $navMain.classList.remove('nav-disappear');
          setTimeout(function () {
            $navMain.style.display = 'flex';
          }, 100);
        }
      }
    },
  },
  mounted() {
    this.handleClientLoad();
  },
};
</script>

<style>
.regist-form {
  position: relative;
}
.body {
  /* 1em : 16px */
  width: 100%;
  padding: 1em 2em 3em;
  height: 100vw;
}
</style>
