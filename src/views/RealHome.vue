<template>
  <div class="home-main">
    <div class="home-header">
      <!-- <div class="home-header-btn-wrapper">
        <div class="button">등록하기</div>
        <div class="button">로그아웃</div>
      </div> -->
      <div class="home-header-title">SEASHEPHERD_KOREA</div>
    </div>
    <div class="home-body" @click="click">
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
import { authWithEmailLink, signOutEmailAuth } from '../util/firebase.js';
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
    };
  },
  methods: {
    ...mapActions({
      setCurPosition: 'setCurPosition',
      setError: 'setError',
      getEventMarkers: 'cleanEventStore/getEventMarkers',
      moveToMap: 'moveToMaps',
      googleSignOut: 'authStore/googleSignOut',
      setAuthInfo: 'authStore/setAuthInfo',
      checkDirAuthLink: 'authStore/checkDirAuthLink',
      loadGoogleAuthClient: 'authStore/loadGoogleAuthClient',
      loadDirAuthClient: 'authStore/loadDirAuthClient',
    }),
    setShowAuthFlag(flag) {
      this.showAuth = flag;
    },
    click(event) {
      clearInterval(this.interval);
      if ([...event.target.classList].includes('button')) {
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
      //지도 설정
      const mapOptions = {
        center: this.currentPosition,
        zoom: 6,
        styles: mapStyle,
      };
      //지도 바인딩할 돔객체
      const mapDiv = document.querySelector('.home-content');
      //지도 생성
      try {
        this.map = new google.maps.Map(mapDiv, mapOptions);
        //시각화 지도 생성
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
      } catch (e) {
        throw new Error();
      }
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
      //직접입력한 이메일링크를 통해 들어온 상태인지 확인
      const isDirAuth = await this.checkDirAuthLink();
      //링크를 통했으면
      if (isDirAuth) {
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
        //사용자 정보 획득후 이벤트등록 화면으로 이동
        this.$store.dispatch('moveToMaps');
        return;
        //그냥 들어온상태면
      } else {
        await this.loadGoogleAuthClient();
        await this.loadDirAuthClient();
        //console.log(`google`, await this.loadGoogleAuthClient());
        //this.loadGoogleAuthClient();
        // if (isGoogleAuth) {
        //   this.updateGoogleAuthStatus();
        // }
      }
      //현재위치 조회
      await this.setCurPosition();
      //마커데이터 조회
      await this.getEventMarkers();
      //지도정보 초기화
      this.initMap();
    } catch (e) {
      console.log(e);
      const message = e.message;
      this.setError({
        message,
        type: 'critical',
      });
      return;
    } finally {
      loader.hide();
    }
    //지도로드 후 화면에 보여주기 animation
    const $cover = document.querySelector('.home-cover');
    setTimeout(() => {
      gsap.to($cover, {
        duration: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      });
    }, 2000);
    // 텍스트 보여주기 animation
    const $homeCoverContent = document.querySelector('.home-cover-content');
    $homeCoverContent.style.transfrom = 'translateY(-60px)';
    $homeCoverContent.style.opacity = 0;
    gsap.to($homeCoverContent, {
      duration: 1,
      y: 0,
      opacity: 1,
    });
    //5초후 텍스트 변경
    this.interval = setInterval(() => {
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
  min-height: 700px;
  height: 100%;
  overflow: hidden;
  background-color: black;
  color: var(--fontColor);
  font-size: 1.2em;
}

.home-main > .home-header {
  position: absolute;
  top: 0;
  height: 30%;
  width: 100%;
  z-index: 2;
}

.home-main > .home-header > .home-header-btn-wrapper {
  position: relative;
  top: 20%;
  left: 50%;
  display: flex;
  width: 50%;
}
.home-header-btn-wrapper > .button {
  position: relative;
  background-color: var(--objectColor);
  width: 50%;
  padding: 2%;
  margin: 2%;
  text-align: center;
  border-radius: 10px;
}
.home-main > .home-header > .home-header-title {
  position: relative;
  top: 70%;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
}

.home-main > .home-body {
  /* 1em : 16px */
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: rgba(0, 0, 0, 1);
}
.home-main > .home-body > .home-cover {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
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
  background-color: var(--objectColor);
  width: 250px;
  border-radius: 0.5em;
  padding: 2% 2%;
  top: 60%;
  left: 50%;
  margin-left: calc(250px / -2);
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
}
.home-body > .home-cover > .home-cover-content > .button:hover {
  background-color: rgba(43, 39, 39, 0.5);
}
</style>
