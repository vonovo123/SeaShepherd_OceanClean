<template>
  <div class="map-main">
    <div class="body"></div>
    <ErrorMessage v-show="isError" :errorMessage="errorMessage"></ErrorMessage>
    <CriticalErrorMessage
      v-show="isCriticError"
      :criticalErrorMessage="criticErrorMessage"
    ></CriticalErrorMessage>
  </div>
</template>

<script>
import ErrorMessage from '../../components/ErrorMessage.vue';
import CriticalErrorMessage from '../../components/CriticalErrorMessage.vue';
import CurLocMaker from '../../util/CurLocMarker.js';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      map: null,
      infoWindow: null,
      curMarker: null,
      data: null,
      eventMarkers: [],
    };
  },
  components: { ErrorMessage, CriticalErrorMessage },
  methods: {
    //store Action
    ...mapActions({
      setCurPosition: 'setCurPosition',
      setSelectedPosition: 'setSelectedPosition',
      fetchCleanEvents: 'cleanEventStore/fetchCleanEvents',
    }),
    //구글맵 생성
    initMap() {
      this.map = new google.maps.Map(document.querySelector('.body'), {
        center: this.currentPosition,
        zoom: 16,
      });
      this.infoWindow = new google.maps.InfoWindow();
      google.maps.event.addListener(this.infoWindow, 'click', function () {
        console.log(this);
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
    //맵 클릭하는 위치로  현재위치 마커 변경
    clickMapEvent(e) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this.setSelectedPosition({ lat, lng }).then(() => {
        this.setCurMarker();
      });
    },
    //새로운 위치마커추가
    setCurMarker() {
      //기존 현재위치마커 삭제
      if (this.curMarker) {
        this.curMarker.setMap(null);
      }
      const content = document.createElement('div');
      content.innerHTML = '현위치에</br> 등록하기';
      this.curMarker = new CurLocMaker(
        new google.maps.LatLng(
          this.selectedPosition.lat,
          this.selectedPosition.lng
        ),
        content
      );
      this.curMarker.setMap(this.map);
      this.curMarker.addClickEvent(() => {
        this.$store.dispatch('moveToRegistEvent');
      });
    },
    //정화활동 이벤트 모두 추가
    setEventMarkers() {
      const cleanEvents = this.cleanEvents;
      this.eventMarkers = cleanEvents.map(e => {
        const marker = new google.maps.Marker({
          position: e.location,
          map: this.map,
          label: 'E',
        });
        return marker;
      });
    },
    //현재위치마커위치 현재위치로 이동
    goToCurPosition() {
      this.map.setCenter(this.currentPosition);
      this.map.setZoom(16);
      this.setSelectedPosition(this.currentPosition);
      this.setCurMarker();
    },
  },
  async mounted() {
    //지도생성
    this.initMap();
    //현재위치
    await this.setCurPosition().catch(() => {});
    //해양정화활동 이벤트 로드
    await this.fetchCleanEvents();
    this.initMapDetail(); //지도에 바인딩
  },
  computed: {
    ...mapState([
      'currentPosition',
      'selectedPosition',
      'isError',
      'errorMessage',
      'isCriticError',
      'criticErrorMessage',
    ]),
    ...mapState({ cleanEvents: state => state.cleanEventStore.cleanEvents }),
  },
};
</script>

<style>
.map-main {
  /* 1em : 16px */
  width: 100%;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  font-size: 1em;
  height: 100%;
  --inputColor: rgb(3, 3, 3);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
}

.body {
  /* 1em : 16px */
  width: 100%;
  height: 100%;
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
}
.custom-map-control-button:hover {
  background: #ebebeb;
}
.gm-ui-hover-effect {
  display: none !important;
}

/* The popup bubble styling. */
.popup-bubble {
  /* Position the bubble centred-above its parent. */
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -100%);
  /* Style the bubble. */
  background-color: white;
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
}
.popup-bubble:hover {
  opacity: 0.4;
}

/* The parent of the bubble. A zero-height div at the top of the tip. */
.popup-bubble-anchor {
  /* Position the div a fixed distance above the tip. */
  position: absolute;
  width: 100%;
  bottom: 8px;
  left: 0;
}

/* This element draws the tip. */
.popup-bubble-anchor::after {
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
  border-top: 8px solid white;
}

/* JavaScript will position this div at the bottom of the popup tip. */
.popup-container {
  cursor: auto;
  height: 0;
  position: absolute;
  /* The max width of the info window. */
  width: 200px;
}
</style>
