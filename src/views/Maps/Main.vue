<template>
  <div class="map-main">
    <div class="body"></div>
    <div class="block" v-show="showBlock"></div>
    <event-detail @setIsAppear="setIsAppear"></event-detail>
    <event-regist @setIsAppear="setIsAppear"></event-regist>
    <ErrorMessage v-show="isError" :errorMessage="errorMessage"></ErrorMessage>
    <CriticalErrorMessage
      v-show="isCriticError"
      :criticalErrorMessage="criticErrorMessage"
    ></CriticalErrorMessage>
  </div>
</template>

<script>
import ErrorMessage from '../../components/ErrorMessage.vue';
import CurLocMaker from '../../util/CurLocMarker.js';
import EventDetail from '../../components/EventDetail.vue';
import EventRegist from '../../components/EventRegist.vue';
import { mapGetters, mapActions, mapState } from 'vuex';
import gsap from 'gsap';
import CriticalErrorMessage from '../../components/CriticalErrorMessage.vue';
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
    };
  },
  components: { ErrorMessage, CriticalErrorMessage, EventDetail, EventRegist },
  methods: {
    //store Action
    ...mapActions({
      setCurPosition: 'setCurPosition',
      setCurAddress: 'setCurAddress',
      getCleanEvent: 'cleanEventStore/getCleanEvent',
      getEventMarkers: 'cleanEventStore/getEventMarkers',
      setMapSnapshot: 'cleanEventStore/setMapSnapshot',
    }),
    //구글맵 생성
    initMap() {
      this.map = new google.maps.Map(document.querySelector('.body'), {
        center: this.currentPosition,
        zoom: 16,
      });
    },
    initMapDetail() {
      //현재위치마커 추가
      this.setCurMarker();
      //이벤트 마커 추가
      this.setEventMarkers();
      this.map.setCenter(this.currentPosition);
      //현재위치 마커 클릭 이벤트리스너 추가
      this.map.addListener('click', e => this.clickMapEvent(e));
      //화면/마커 현재위치로 이동 버튼 추가
      const locationBtn = document.createElement('button');
      locationBtn.textContent = '현재위치로이동';
      locationBtn.classList.add('custom-map-control-button');
      locationBtn.addEventListener('click', this.goToCurPosition);
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        locationBtn
      );
    },
    //새로운 위치마커추가
    setCurMarker() {
      //이벤트 리포트 컴포넌트 초기화
      if (this.curMarker) {
        this.curMarker.setMap(null);
      }
      const content = document.createElement('div');
      content.innerHTML = '여기로 </br> 등록하기';
      content.classList.add('custom-marker-text');
      const geocoder = new google.maps.Geocoder();
      // eslint-disable-next-line vue/no-async-in-computed-properties
      geocoder
        .geocode({ location: this.currentPosition })
        .then(response => {
          this.setCurAddress(response.results[0].formatted_address);
        })
        .catch(e => {
          //this.event.address = '주소가 정확하지않습니다.';
        });
      this.curMarker = new CurLocMaker(
        new google.maps.LatLng(
          this.currentPosition.lat,
          this.currentPosition.lng
        ),
        content
      );
      this.curMarker.setMap(this.map);
      this.curMarker.addClickEvent(() => {
        this.showBlock = true;
        const $target = document.querySelector('.event-regist');
        //$target.childNodes[0].textContent = '눌러서 활동리포트 닫기';
        console.log($target);
        gsap.to($target, {
          duration: 0.5,
          top: '-1%',
        });
      });
    },
    //리포트 올라오면 지도 배경막도록
    setIsAppear(flag) {
      this.showBlock = flag;
    },
    //맵 클릭하는 위치로  현재위치 마커 변경
    clickMapEvent(e) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this.setCurPosition({ lat, lng }).then(() => {
        this.setCurMarker();
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

      //Set the Google Map Type.
      //staticMapUrl += '&maptype=' + mapOptions.mapTypeId;

      //Loop and add Markers.
      staticMapUrl +=
        '&markers=color:black|' + position.lat + ',' + position.lng;
      staticMapUrl += '&key=AIzaSyBa6g8Z_9Tm2vH7HG9j6YXgzJsUh3LgveI';
      console.log(staticMapUrl);
      this.setMapSnapshot(staticMapUrl);
    },
    //정화활동 이벤트 모두 추가
    setEventMarkers() {
      this.eventMarkers = this.eventMarkerData.map(e => {
        const content = document.createElement('img');
        content.classList.add('custom-marker-img');
        content.src = require('@/assets/images/pngwing.png');
        //content.innerHTML = '마커';
        const marker = new CurLocMaker(
          new google.maps.LatLng(e.position.lat, e.position.lng),
          content
        );
        marker.setMap(this.map);
        marker.addClickEvent(async () => {
          //처음 조회하거나 다른 event를 조회하는 경우
          if (
            !this.eventDetail ||
            (this.eventDetail && e.id != this.eventDetail.id)
          ) {
            const result = await this.getCleanEvent(e.id);

            if (!result) {
              alert('데이터 없음');
              return;
            }
            this.snapShot(result.position);
          }

          //이미 조회한 데이터를 다시 조회하는 경우 화면만 올리기
          this.showBlock = true;
          const $target = document.querySelector('.event-detail');
          // $target.childNodes[0].textContent = '눌러서 활동리포트 닫기';
          gsap.to($target, {
            duration: 0.5,
            top: '0',
            // borderTopLeftRadius: '0',
            // borderTopRightRadius: '0',
          });
        });
      });
    },
    //현재위치마커위치 현재위치로 이동
    async goToCurPosition() {
      await this.setCurPosition();
      this.map.setCenter(this.currentPosition);
      this.map.setZoom(16);
      this.setCurMarker();
    },
  },
  async mounted() {
    //지도생성
    this.initMap();
    //현재위치
    await this.setCurPosition().catch(() => {});
    //해양정화활동 이벤트 로드
    await this.getEventMarkers();
    this.initMapDetail(); //지도에 바인딩
  },
  computed: {
    ...mapState([
      'isError',
      'errorMessage',
      'isCriticError',
      'criticErrorMessage',
    ]),
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
  --inputColor: rgb(3, 3, 3);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
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
  left: 50% !important;
  margin-left: calc((8em) / -2);
  cursor: pointer;
}
.custom-map-control-button:hover {
  background: #ebebeb;
}
.gm-ui-hover-effect {
  display: none !important;
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
