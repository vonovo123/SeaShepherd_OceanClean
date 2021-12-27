<template>
  <div class="home-main">
    <div class="home-header">
      <div class="home-header-title">SEASHEPHERD_KOREA</div>
    </div>
    <div
      class="home-body"
      @click="click"
      v-touch="{
        up: () => swipe('Up'),
        down: () => swipe('Down'),
      }"
    >
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
          <div class="two">환경을 위한 행동을 모두에게 공유해주세요.</div>
          <div class="button" @click="regist">해양청소 등록하기</div>
          <div class="button" v-show="authInfo.isAuth" @click="logOut">
            로그아웃
          </div>
        </div>
      </div>
      <div class="home-content"></div>
    </div>
    <auth v-show="showAuth" @setShowAuthFlag="setShowAuthFlag"></auth>
  </div>
</template>

<script>
import { ScatterplotLayer } from '@deck.gl/layers';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import mapStyle from '../assets/style/map-style.js';
import { mapActions, mapState, mapGetters } from 'vuex';
import AnimatedNumber from 'animated-number-vue';
import Auth from '../components/Auth.vue';
import {
  authWithEmailLink,
  checkEmailAuth,
  signOutEmailAuth,
} from '../util/firebase.js';
import gsap from 'gsap';

export default {
  name: 'ReadHome',
  components: {
    AnimatedNumber,
    Auth,
  },
  computed: {
    ...mapGetters({
      eventMarkerData: 'cleanEventStore/EventMarkerData',
      authInfo: 'authStore/AuthInfo',
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
      showAuth: false,
      interval: null,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      setCurPosition: 'setCurPosition',
      setError: 'setError',
      getEventMarkers: 'cleanEventStore/getEventMarkers',
      moveToMap: 'moveToMaps',
      loadGoogleAuthClient: 'authStore/loadGoogleAuthClient',
      googleSignOut: 'authStore/googleSignOut',
      setAuthInfo: 'authStore/setAuthInfo',
    }),
    setShowAuthFlag(flag) {
      this.showAuth = flag;
    },
    click(event) {
      clearInterval(this.interval);
      if ([...event.target.classList].includes('button')) {
        return;
      }
      if (!this.isLoading) {
        return;
      }
      if (this.viewIdx < 2) {
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
    },
    swipe(dir) {
      if (!this.isLoading) {
        return;
      }
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
    regist() {
      if (this.authInfo.isAuth) {
        this.moveToMap();
      } else {
        this.showAuth = true;
      }
    },
    async logOut() {
      if (this.authInfo.type === 'gmail') {
        await this.googleSignOut();
      } else {
        signOutEmailAuth();
      }
      this.setAuthInfo({
        fullName: '',
        mail: '',
        isAuth: false,
        type: '',
      });
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
    let loader = this.$loading.show({
      // Optional parameters
      isFullPage: true,
      canCancel: false,
      onCancel: null,
      color: '#ffffff',
      backgroundColor: '#000000',
      opacity: 0.5,
    });
    //현재위치
    try {
      await this.setCurPosition();
      await this.getEventMarkers();
    } catch (e) {
      if (e === 'curPosition') {
        this.setError({
          message: '현재위치를 불러오는데 실패했습니다',
          type: 'critical',
        });
      } else if (e === 'browserLocation') {
        this.setError({
          message: '브라우저 및 PC의 위치 엑세스를 허용해주세요.',
          type: 'critical',
        });
      } else if (e === 'browserVersion') {
        this.setError({
          message:
            '브라우저가 GPS정보를 제공하지 않습니다. 5.0버전 이상의 Chrome/Safari 브라우저로 이용바랍니다.',
          type: 'critical',
        });
      }
      return;
    } finally {
      loader.hide();
    }

    const $cover = document.querySelector('.home-cover');
    setTimeout(() => {
      gsap.to($cover, {
        duration: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      });
    }, 2000);

    //맵생성
    const result = await this.initMap();
    const $homeCoverContent = document.querySelector('.home-cover-content');
    $homeCoverContent.style.transfrom = 'translateY(-60px)';
    $homeCoverContent.style.opacity = 0;
    gsap.to($homeCoverContent, {
      duration: 1,
      y: 0,
      opacity: 1,
    });

    this.interval = setInterval(() => {
      console.log(`interval`);
      if (this.viewIdx < 2) {
        this.viewIdx++;
        const $homeCoverContent = document.querySelector(
          `#content${this.viewIdx}`
        );
        $homeCoverContent.style.transfrom = 'translateY(-60px)';
        $homeCoverContent.style.opacity = 0;
        gsap.to($homeCoverContent, {
          duration: 5,
          y: 0,
          opacity: 1,
        });
      } else {
        clearInterval(this.interval);
      }
    }, 4000);
    this.loadGoogleAuthClient();
    const ret = await aut`hWithEmailLink();
    if (ret) {
      const email = window.localStorage.getItem('emailForSignIn');
      const name = window.localStorage.getItem('nameForSignIn');
      await this.setAuthInfo({
        fullName: name,
        mail: email,
        isAuth: true,
        type: 'dir',
      });
      window.localStorage.removeItem('emailForSignIn');
      window.localStorage.removeItem('nameForSignIn');
      this.$store.dispatch('moveToMaps');
    } else {
      const curLogin = checkEmailAuth();
      if (curLogin) {
        console.log(curLogin.displayName);
        await this.setAuthInfo({
          fullName: curLogin.displayName,
          mail: curLogin.email,
          isAuth: true,
          type: 'dir',
        });
      }
      //signOutEmailAuth();
    }

    this.isLoading = true;
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
  margin-bottom: 20px;
}
.home-body > .home-cover > .home-cover-content > .button:hover {
  background-color: rgba(43, 39, 39, 0.5);
}
</style>
