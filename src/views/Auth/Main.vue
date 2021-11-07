<template>
  <div>
    <p>People API Quickstart</p>
    <button id="authorize_button" style="display: none">Authorize</button>
    <button id="signout_button" style="display: none">Sign Out</button>
    <pre id="content" style="white-space: pre-wrap"></pre>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      CLIENT_ID:
        '819954997763-50ogor1sa12gthhqr0gc1to9th02orvk.apps.googleusercontent.com',
      API_KEY: 'AIzaSyCXVH4IUV06E6o_wtJjllitCNf99XT2B8E',
      DISCOVERY_DOCS: [
        'https://www.googleapis.com/discovery/v1/apis/people/v1/rest',
      ],
      SCOPES: 'email',
      authorizeButton: null,
      signoutButton: null,
    };
  },
  methods: {
    handleClientLoad() {
      gapi.load('client:auth2', this.initClient);
    },
    initClient() {
      console.log(`init`);
      this.authorizeButton = document.querySelector('#authorize_button');
      this.signoutButton = document.querySelector('#signout_button');
      gapi.client
        .init({
          apiKey: this.API_KEY,
          clientId: this.CLIENT_ID,
          discoveryDocs: this.DISCOVERY_DOCS,
          scope: this.SCOPES,
        })
        .then(
          () => {
            // Listen for sign-in state changes.
            gapi.auth2
              .getAuthInstance()
              .isSignedIn.listen(this.updateSigninStatus);
            // Handle the initial sign-in state.
            //로그인여부 검사
            this.updateSigninStatus(
              gapi.auth2.getAuthInstance().isSignedIn.get()
            );
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
      if (isSignedIn) {
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
          personFields: 'emailAddresses',
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
