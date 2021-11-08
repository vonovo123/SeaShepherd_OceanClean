<template>
  <div>
    <p>People API Quickstart</p>
    <button id="authorize_button" style="display: none">Authorize</button>
    <button id="signout_button" style="display: none">Sign Out</button>
    <pre id="content" style="white-space: pre-wrap"></pre>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import store from '../../store/index.js';
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
    ...mapMutations({ setAuthState: 'googleAuthStore/SET_AUTH_STATE' }),
    handleClientLoad() {
      gapi.load('client:auth2', this.initClient);
    },
    initClient() {
      this.authorizeButton = document.querySelector('#authorize_button');
      this.signoutButton = document.querySelector('#signout_button');
      gapi.client.init(this.googleAuthStore.apiAuthInfo).then(
        () => {
          const isAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
          this.updateSigninStatus(isAuth);
          //인증상태 변화에 따라 updateSigninStatus 실행하도록
          gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(this.updateSigninStatus);
          //로그인여부 검사
          this.authorizeButton.onclick = this.handleAuthClick;
          this.signoutButton.onclick = this.handleSignoutClick;
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
      if (this.getAuthState) {
        this.authorizeButton.style.display = 'none';
        this.signoutButton.style.display = 'block';
        this.listConnectionNames();
      } else {
        this.authorizeButton.style.display = 'block';
        this.signoutButton.style.display = 'none';
      }
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
