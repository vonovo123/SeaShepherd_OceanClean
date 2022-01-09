<template>
  <div class="map-main">
    <div class="body"></div>
    <div class="block" v-show="showBlock"></div>
    <event-detail @setIsAppear="setIsAppear"></event-detail>
    <event-regist
      @setIsAppear="setIsAppear"
      @successUpload="successUpload"
      v-if="render"
    ></event-regist>
  </div>
</template>

<script>
import CurLocMaker from '../../util/CurLocMarker.js';
import EventDetail from '../../components/EventDetail.vue';
import EventRegist from '../../components/EventRegist.vue';
import { mapGetters, mapActions, mapState } from 'vuex';
import gsap from 'gsap';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
const VUE_APP_GOOGLE_MAP = process.env.VUE_APP_GOOGLE_MAP;
export default {
  data() {
    return {
      map: null,
      infoWindow: null,
      curMarker: null,
      data: null,
      eventMarkers: [],
      //리포트 올라왔을때 지도 블락
      showBlock: false,
      render: true,
    };
  },
  components: { EventDetail, EventRegist },
  methods: {
    //store Action
    ...mapActions({
      setCurPosition: 'setCurPosition',
      setCurAddress: 'setCurAddress',
      setError: 'setError',
      getCleanEvent: 'cleanEventStore/getCleanEvent',
      getEventMarkers: 'cleanEventStore/getEventMarkers',
      setMapSnapshot: 'cleanEventStore/setMapSnapshot',
      setEventDetail: 'cleanEventStore/setEventDetail',
      googleSignOut: 'authStore/googleSignOut',
      loadGoogleAuthClient: 'authStore/loadGoogleAuthClient',
      loadDirAuthClient: 'authStore/loadDirAuthClient',
    }),
    //구글맵 생성
    initMap() {
      try {
        this.map = new google.maps.Map(document.querySelector('.body'), {
          center: this.currentPosition,
          zoom: 16,
        });
        //mounted에서 최종예외처리
      } catch (e) {
        throw new Error(
          '구글 지도 불러오기에 실패했습니다.</br>잠시후 다시 시도 바랍니다.'
        );
      }
    },
    //지도위의 요소추가
    initMapDetail() {
      //현재위치마커 추가
      //mounted에서 최종예외처리
      this.setCurMarker();
      this.setEventMarkers();
      //이벤트 마커 추가
      this.map.setCenter(this.currentPosition);
      //현재위치 마커 클릭 이벤트리스너 추가
      this.map.addListener('click', e => this.clickMapEvent(e));
      // 현재위치로 이동 버튼
      const locationBtn = document.createElement('button');
      locationBtn.textContent = '현재위치';
      locationBtn.classList.add('custom-map-control-button');
      locationBtn.classList.add('curLoc');
      locationBtn.addEventListener('click', this.clickCurPosition);
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        locationBtn
      );
      //나가기 버튼
      const logoutBtn = document.createElement('button');
      logoutBtn.textContent = '나가기';
      logoutBtn.classList.add('custom-map-control-button');
      logoutBtn.classList.add('home');
      logoutBtn.addEventListener('click', this.goToHome);
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(logoutBtn);
    },
    //현재위치마커
    async setCurMarker() {
      try {
        const content = document.createElement('div');
        content.innerHTML = '등록하기';
        content.classList.add('custom-marker-text');
        const geocoder = new google.maps.Geocoder();
        const address = await geocoder.geocode({
          location: this.currentPosition,
        });
        this.setCurAddress(address.results[0].formatted_address);
        //기존 현재위치마커 삭제
        if (this.curMarker) {
          this.curMarker.setMap(null);
        }
        this.curMarker = new CurLocMaker(
          new google.maps.LatLng(
            this.currentPosition.lat,
            this.currentPosition.lng
          ),
          content
        );
        this.curMarker.setMap(this.map);
        this.curMarker.addClickEvent(this.fncClickCurMarker);
      } catch (e) {
        throw new Error(
          '현재위치 조회에 실패했습니다.<br/>브라우저의 위치정보 제공상태를 확인하세요.'
        );
      }
    },
    //현재위치마커 클릭시 이벤트
    fncClickCurMarker() {
      this.showBlock = true;
      this.snapShot(this.currentPosition);
      const $target = document.querySelector('.event-regist');
      gsap.to($target, {
        duration: 0.5,
        top: '-1%',
      });
    },
    setIsAppear(flag) {
      this.showBlock = flag;
    },
    //등록완료 후 emit 이벤트
    successUpload(event) {
      this.render = false;
      this.setEventMarker(event);
      this.$nextTick(() => {
        this.render = true;
      });
    },
    //등록완료후 하나만 추가
    setEventMarker(e) {
      const content = document.createElement('img');
      content.classList.add('custom-marker-img');
      content.src = require('@/assets/images/pngwing.png');
      const marker = new CurLocMaker(
        new google.maps.LatLng(e.position.lat, e.position.lng),
        content
      );
      marker.setMap(this.map);
      marker.addClickEvent(() => {
        this.clickEventMarker(e);
      });
      this.clickEventMarker(e, 'dir');
    },
    //정화활동 이벤트 모두 추가
    setEventMarkers() {
      this.eventMarkers = this.eventMarkerData.map(e => {
        const content = document.createElement('img');
        content.classList.add('custom-marker-img');
        content.src = require('@/assets/images/pngwing.png');
        const marker = new CurLocMaker(
          new google.maps.LatLng(e.position.lat, e.position.lng),
          content
        );
        marker.setMap(this.map);
        marker.addClickEvent(() => {
          this.clickEventMarker(e);
        });
      });
    },
    snapShot(position) {
      var staticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap';

      //Set the Google Map Center.
      staticMapUrl += '?center=' + position.lat + ',' + position.lng;

      //Set the Google Map Size.
      staticMapUrl += '&size=220x220';

      //Set the Google Map Zoom.
      staticMapUrl += '&zoom=16';
      staticMapUrl +=
        '&markers=color:black|' + position.lat + ',' + position.lng;
      staticMapUrl += `&key=${VUE_APP_GOOGLE_MAP}`;
      this.setMapSnapshot(staticMapUrl);
    },
    async clickEventMarker(event, type) {
      //처음 조회하거나 다른 event를 조회하는 경우
      let result = null;
      if (!type) {
        if (
          !this.eventDetail ||
          (this.eventDetail && event.id != this.eventDetail.id)
        ) {
          try {
            result = await this.getCleanEvent(event.id);
            this.snapShot(result.position);
            this.showBlock = true;
            const $target = document.querySelector('.event-detail');
            gsap.to($target, {
              duration: 0.5,
              top: '0',
            });
          } catch (e) {
            if (e.message === 'noData') {
              this.setError({
                message: '조회할 데이터가 존재하지않습니다.',
                type: 'browser',
              });
            } else {
              const message = e.message;
              this.setError({
                message,
                type: 'critical',
              });
            }
          }
        } else {
          this.snapShot(this.eventDetail.position);
          this.showBlock = true;
          const $target = document.querySelector('.event-detail');
          gsap.to($target, {
            duration: 0.5,
            top: '0',
          });
        }
      } else {
        await this.setEventDetail(event);
        result = event;
        this.snapShot(result.position);
        this.showBlock = true;
        const $target = document.querySelector('.event-detail');
        gsap.to($target, {
          duration: 0.5,
          top: '0',
        });
      }

      //이미 조회한 데이터를 다시 조회하는 경우 화면만 올리기
    },
    //현재위치로이동 버튼을 통해 현재위치마커를 현재위치로 이동
    async clickCurPosition() {
      try {
        await this.setCurPosition();
        await this.setCurMarker();
        this.map.setCenter(this.currentPosition);
        this.map.setZoom(16);
      } catch (e) {
        let message = e.message;
        this.setError({
          message,
          type: 'critical',
        });
      }
    },
    //맵 클릭하는 위치로  현재위치 마커 변경
    async clickMapEvent(e) {
      try {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        await this.setCurPosition({ lat, lng });
        await this.setCurMarker();
      } catch (e) {
        let message = e.message;
        this.setError({
          message,
          type: 'critical',
        });
      }
    },
    async goToHome() {
      this.$store.dispatch('moveToRealHome');
    },
  },
  async mounted() {
    let loader = this.$loading.show({
      isFullPage: true,
      canCancel: false,
      onCancel: null,
      color: '#ffffff',
      backgroundColor: '#000000',
      opacity: 0.5,
    });
    try {
      //지도생성
      await this.loadGoogleAuthClient();
      await this.loadDirAuthClient();
      this.initMap();
      //현재위치
      await this.setCurPosition();
      //해양정화활동 이벤트 로드
      await this.getEventMarkers();
      this.initMapDetail(); //지도에 바인딩
    } catch (e) {
      console.log(e);
      let message = e.message;
      this.setError({
        message,
        type: 'critical',
      });
    } finally {
      loader.hide();
    }
  },
  computed: {
    ...mapState([]),
    ...mapGetters({
      eventMarkerData: 'cleanEventStore/EventMarkerData',
      eventDetail: 'cleanEventStore/EventDetail',
      currentPosition: 'CurPosition',
    }),
  },
};
</script>

<style>
.map-main {
  /* 1em : 16px */
  width: 100%;
  font-size: 1em;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: rgba(49, 48, 48, 1);
}

.body {
  /* 1em : 16px */
  position: absolute;
  width: 100%;
  height: 100%;
}

.block {
  /* 1em : 16px */
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.custom-map-control-button {
  background-color: rgb(255, 255, 255);
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  padding: 0 0.5em;
  font: 400 18px Roboto, Arial, sans-serif;
  overflow: hidden;
  height: 40px;
  cursor: pointer;
  width: 90px;
}

.curloc {
  left: 0 !important;
}

.home {
  right: 0 !important;
}
.custom-map-control-button:hover {
  background: #ebebeb;
}
.gm-ui-hover-effect {
  display: none !important;
}
.gmnoprint {
  display: none;
}
/* The popup bubble styling. */
.custom-marker-text {
  /* Position the bubble centred-above its parent. */
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  /* Style the bubble. */
  background-color: rgba(0, 0, 0, 1);
  padding: 0.5em;
  border-radius: 5px;
  font-size: 1.5em;
  font-weight: bold;
  overflow-y: auto;
  max-height: 60px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: 0.5s;
  cursor: pointer;
  color: white;
  text-align: center;
}
.custom-marker-text:hover {
  opacity: 0.4;
}

.custom-marker-img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 1);
  width: 50px;
  border-radius: 25px;
}

/* The parent of the bubble. A zero-height div at the top of the tip. */
.custom-marker-anchor {
  position: absolute;
  width: 100%;
  bottom: 8px;
  left: 0;
}

/* This element draws the tip. */
.custom-marker-anchor::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  /* Center the tip horizontally. */
  transform: translate(-50%, 0);
  width: 0;
  height: 0;
  /* The tip is 8px high, and 12px wide. */
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid rgba(0, 0, 0, 1);
}

/* JavaScript will position this div at the bottom of the popup tip. */
.custom-marker-container {
  cursor: auto;
  height: 0;
  position: absolute;
  width: 200px;
}
</style>
