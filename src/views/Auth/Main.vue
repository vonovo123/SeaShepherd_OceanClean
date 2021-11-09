<template>
  <div>
    <p>People API Quickstart</p>
    <button
      id="authorize_button"
      v-show="!googleAuthStore.isAuth"
      @click="this.handleAuthClick"
    >
      Authorize
    </button>
    <button
      id="signout_button"
      v-show="googleAuthStore.isAuth"
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
    ...mapGetters({ getAuthState: 'googleAuthStore/getAuthState' }),
  },
  methods: {
    ...mapActions({ setAuthState: 'googleAuthStore/setAuthState' }),
    //peopleApi init
    handleClientLoad() {
      gapi.load('client:auth2', this.initClient);
    },
    initClient() {
      gapi.client.init(this.googleAuthStore.apiAuthInfo).then(
        () => {
          //인증여부확인
          const isAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
          this.updateSigninStatus(isAuth);
          //인증상태 변화에 따라 updateSigninStatus 실행하도록
          gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(this.updateSigninStatus);
          //로그인여부 검사
        },
        function (error) {
          //appendPre(JSON.stringify(error, null, 2));
        }
      );
    },
    handleAuthClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    },
    handleSignoutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    },
    updateSigninStatus(isSignedIn) {
      this.setAuthState(isSignedIn);
      //this.listConnectionNames();
    },
    appendPre(message) {
      const pre = document.getElementById('content');
      const textContent = document.createTextNode(message + '\n');
      pre.appendChild(textContent);
    },
    listConnectionNames() {
      gapi.client.people.people
        .get({
          resourceName: 'people/me',
          personFields: 'names,emailAddresses',
        })
        .then(res => {
          console.log(res);
          let connections = res.result.connections;
          console.log(`connection : ${connections}`);
          this.appendPre('Connections:');
          if (connections.length > 0) {
            for (i = 0; i < connections.length; i++) {
              let person = connections[i];
              if (person.names && person.names.length > 0) {
                this.appendPre(person.names[0].displayName);
              } else {
                this.appendPre('No display name found for connection.');
              }
            }
          } else {
            this.appendPre('No connections found.');
          }
          console.log(res);
        });
    },
  },
  mounted() {
    this.handleClientLoad();
  },
};
</script>

<style></style>
