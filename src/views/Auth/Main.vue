<template>
  <div>
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
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      authorizeButton: null,
      signoutButton: null,
    };
  },
  computed: {
    ...mapState(['googleAuthStore']),
    ...mapGetters({ getAuthInfo: 'googleAuthStore/getAuthInfo' }),
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
            this.$store.dispatch('moveToRegistEvent');
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
  },
  mounted() {
    this.handleClientLoad();
  },
};
</script>

<style></style>
