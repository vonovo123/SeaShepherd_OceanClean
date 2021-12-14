<template>
  <div
    class="home-main"
    @click="click"
    v-touch="{
      up: () => swipe('Up'),
      down: () => swipe('Down'),
    }"
  >
    <div class="home-header">
      <div class="home-header-title">SEASHEPHERD_KOREA</div>
    </div>
    <div class="home-body">
      <div class="home-cover">
        <div v-show="viewIdx === 0" class="home-cover-content" id="content0">
          <div class="two">시 셰퍼드 컨저베이션 소사이어티는</div>
          <div class="three">해양생물 보호를 위해 해양쓰레기를 수거합니다.</div>
        </div>
        <div v-show="viewIdx === 1" class="home-cover-content" id="content1">
          <div class="one">{{ today }} 까지 해양청소에 참여한 사람수</div>
          <div class="two" v-if="viewIdx === 1">
            <animated-number
              :value="231"
              :duration="1000"
              :formatValue="menFormat"
            ></animated-number>
          </div>
          <div class="three">청소를 통해 수거된 쓰레기의 무게</div>
          <div class="four" v-if="viewIdx === 1">
            <animated-number
              :value="5000"
              :duration="1000"
              :formatValue="kiloFormat"
            ></animated-number>
          </div>
        </div>
        <div v-show="viewIdx === 2" class="home-cover-content" id="content2">
          <div class="two">환경을 위한 나의 노력을 모두에게 공유해주세요.</div>
          <div class="button" @click="regist">해양청소 등록하기</div>
        </div>
      </div>
      <div class="home-content"></div>
      <!-- <div class="home-auth">
        <div class="home-auth-content">
          <div class="content google">
            <img src="../assets/images/gmail.png" alt="" />
            <div>G-MAIL로 인증하기</div>
          </div>
          <div class="content user">직접입력하기</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { ScatterplotLayer } from '@deck.gl/layers';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import mapStyle from '../assets/style/map-style.js';
import { mapActions, mapState, mapGetters } from 'vuex';
import AnimatedNumber from 'animated-number-vue';
import gsap from 'gsap';
export default {
  name: 'ReadHome',
  components: {
    AnimatedNumber,
  },
  computed: {
    ...mapGetters({
      eventMarkerData: 'cleanEventStore/EventMarkerData',
      authInfo: 'googleAuthStore/AuthInfo',
      apiAuthInfo: 'googleAuthStore/ApiAuthInfo',
    }),
    ...mapState(['currentPosition']),
  },
  data: function () {
    return {
      map: '',
      viewIdx: 0,
      today: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10),
      isAuth: false,
    };
  },
  methods: {
    ...mapActions({
      setCurPosition: 'setCurPosition',
      getEventMarkers: 'cleanEventStore/getEventMarkers',
      setAuthInfo: 'googleAuthStore/setAuthInfo',
      moveToMap: 'moveToMaps',
    }),
    click(event) {
      if ([...event.target.classList].includes('button')) {
        return;
      }
      console.log(this.viewIdx);
      if (this.viewIdx < 1) {
        this.viewIdx++;
      } else {
        this.viewIdx = 0;
      }
      const $homeCoverContent = document.querySelector(
        `#content${this.viewIdx}`
      );
      $homeCoverContent.style.transfrom = 'translateY(-60px)';
      $homeCoverContent.style.opacity = 0;
      gsap.to($homeCoverContent, {
        duration: 2,
        y: 0,
        opacity: 1,
      });
      if (this.viewIdx == 1) {
        console.log('test');
        setTimeout(() => {
          this.viewIdx++;
          const $homeCoverContent = document.querySelector(
            `#content${this.viewIdx}`
          );
          $homeCoverContent.style.transfrom = 'translateY(-60px)';
          $homeCoverContent.style.opacity = 0;
          gsap.to($homeCoverContent, {
            duration: 2,
            y: 0,
            opacity: 1,
          });
        }, 2500);
      }
    },
    swipe(dir) {
      if (dir === 'Up') {
        if (this.viewIdx < 2) {
          this.viewIdx++;
        }
      } else {
        if (this.viewIdx > 0) {
          this.viewIdx--;
        }
      }
      const $homeCoverContent = document.querySelector(
        `#content${this.viewIdx}`
      );
      $homeCoverContent.style.transfrom = 'translateY(-60px)';
      $homeCoverContent.style.opacity = 0;
      gsap.to($homeCoverContent, {
        duration: 2,
        y: 0,
        opacity: 1,
      });
    },
    menFormat(value) {
      return `${`${Number(value).toFixed(0)}`
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 명`;
    },
    kiloFormat(value) {
      return `${`${Number(value).toFixed(0)}`
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 킬로그램`;
    },
    initMap() {
      return new Promise((rs, rj) => {
        try {
          const mapOptions = {
            center: this.currentPosition,
            zoom: 6,
            styles: mapStyle,
          };
          const mapDiv = document.querySelector('.home-content');
          this.map = new google.maps.Map(mapDiv, mapOptions);
          const layerOptions = {
            id: 'scatterplot',
            data: this.eventMarkerData,
            getPosition: d => [
              parseFloat(d.position.lng),
              parseFloat(d.position.lat),
            ],
            getRadius: d => parseInt(d.scale),
            stroked: true,
            getFillColor: [255, 133, 27],
            getLineColor: [255, 38, 27],
            radiusMinPixels: 5,
            radiusMaxPixels: 50,
          };
          const scatterplotLayer = new ScatterplotLayer(layerOptions);
          const googleMapsOverlay = new GoogleMapsOverlay({
            layers: [scatterplotLayer],
          });
          googleMapsOverlay.setMap(this.map);
          rs('done');
        } catch (e) {
          rj(e);
        }
      });
    },
    handleClientLoad() {
      gapi.load('client:auth2', this.initClient);
    },
    updateSigninStatus() {
      console.log(this.isAuth);
      const isAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
      this.isAuth = isAuth;
      console.log(this.isAuth);
      if (isAuth) {
        gapi.client.people.people
          .get({
            resourceName: 'people/me',
            personFields: 'names,emailAddresses',
          })
          .then(res => {
            console.log(res.result);
            this.setAuthInfo({
              fullName: res.result.names[0].displayName,
              gMail: res.result.emailAddresses[0].value,
              isAuth: isAuth,
            });
          });
      }
    },
    initClient() {
      gapi.client.init(this.apiAuthInfo).then(
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
    regist() {
      //if (this.isAuth) {
      this.moveToMap();
      //}
    },
  },
  created() {},
  async mounted() {
    const $title = document.querySelector('.home-header-title');
    $title.style.transfrom = 'translateY(-60px)';
    $title.style.opacity = 0;
    gsap.to($title, {
      duration: 2,
      y: 0,
      opacity: 1,
    });
    await this.setCurPosition().catch(() => {});
    await this.getEventMarkers();
    const $cover = document.querySelector('.home-cover');
    setTimeout(() => {
      gsap.to($cover, {
        duration: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      });
    }, 2000);
    const result = await this.initMap();
    const $homeCoverContent = document.querySelector('.home-cover-content');
    $homeCoverContent.style.transfrom = 'translateY(-60px)';
    $homeCoverContent.style.opacity = 0;
    gsap.to($homeCoverContent, {
      duration: 3,
      y: 0,
      opacity: 1,
    });

    this.handleClientLoad();
    // setTimeout(() => {
    //   $cover.style.
    // }, 2000);
  },
};
</script>
<style>
/* 구글맵 기본요소 안보이기 start*/
.gmnoprint {
  display: none !important;
}
.gm-control-active {
  display: none !important;
}
/* 구글맵 기본요소 안보이기 end*/
.home-main {
  /* 1em : 16px */
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black;
}

.home-main > .home-header {
  position: fixed;
  top: 0;
  height: 30%;
  width: 100%;
  z-index: 2;
}

.home-main > .home-header > .home-header-title {
  color: white;
  position: relative;
  top: 70%;
  text-align: center;
  font-size: 7vw;
  font-weight: bold;
}

.home-main > .home-body {
  /* 1em : 16px */
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
}
.home-main > .home-body > .home-cover {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
  color: white;
  font-size: 4vw;
  z-index: 1;
}

.home-main > .home-body > .home-content {
  position: relative;
  height: 100%;
}

.home-body > .home-cover > .home-cover-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
}

.home-body > .home-cover > .home-cover-content > .one {
  position: relative;
  top: 40%;
  text-align: center;
}

.home-body > .home-cover > .home-cover-content > .two {
  position: relative;
  top: 45%;
  text-align: center;
}
.home-body > .home-cover > .home-cover-content > .three {
  position: relative;
  top: 55%;
  text-align: center;
}
.home-body > .home-cover > .home-cover-content > .four {
  position: relative;
  top: 60%;
  text-align: center;
}
.home-body > .home-cover > .home-cover-content > .button {
  position: relative;
  background-color: rgb(43, 39, 39);
  width: 40%;
  border-radius: 0.5em;
  padding: 2% 2%;
  top: 60%;
  left: 50%;
  font-size: 4vw;
  margin-left: calc(36vw / -2);
  text-align: center;
  color: white;
  cursor: pointer;
}
.home-body > .home-cover > .home-cover-content > .button:hover {
  background-color: rgba(43, 39, 39, 0.5);
}

.home-body > .home-auth {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
}

.home-body > .home-auth > .home-auth-content {
  position: relative;
  top: 20%;
  width: 50vw;
  height: 50%;
  left: 50%;
  margin-left: calc(50vw / -2);
  background-color: white;
  border-radius: 0.5em;
  padding: 7% 3vw;
}

.home-body > .home-auth > .home-auth-content > .content {
  margin-bottom: 15%;
  padding: 3%;
  background-color: rgb(43, 39, 39, 0.5);
  border-radius: 10px;
  color: white;
}

.home-body > .home-auth > .home-auth-content > .google {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
}

.home-body > .home-auth > .home-auth-content img {
  width: 5vw;
  object-fit: cover;
  margin-right: 3%;
}

.home-body > .home-auth > .home-auth-content > .user {
  text-align: center;
  font-size: 3vw;
}
</style>
