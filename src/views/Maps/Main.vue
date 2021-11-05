<template>
  <div class="mapsMain">
    <div id="map"></div>
    <ErrorMessage v-show="isError" :errorMessage="errorMessage"></ErrorMessage>
    <CriticalErrorMessage
      v-show="isCriticError"
      :criticalErrorMessage="criticErrorMessage"
    ></CriticalErrorMessage>
  </div>
</template>

<script>
import ErrorMessage from '../../UI/ErrorMessage.vue';
import CriticalErrorMessage from '../../UI/CriticalErrorMessage.vue';

import { mapState } from 'vuex';
import store from '../../store/index.js';
export default {
  data() {
    return {
      map: null,
      infoWindow: null,
      curMarker: null,
      data: null,
    };
  },
  components: { ErrorMessage, CriticalErrorMessage },
  methods: {
    //구글맵 생성
    initMap() {
      console.log(this.currentPosition);
      this.infoWindow = new google.maps.InfoWindow();
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.currentPosition,
        zoom: 16,
      });
    },
    initMapDetail() {
      //현재위치마커 추가
      this.setMarker();
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
      store.commit('SET_SELECTED_POSITON', { lat, lng });
      this.setMarker();
    },
    //새로운 위치마커추가
    setMarker() {
      //기존 현재위치마커 삭제
      if (this.curMarker) {
        this.curMarker.setMap(null);
      }
      this.curMarker = new google.maps.Marker({
        position: this.selectedPosition,
        map: this.map,
        label: 'C',
      });
    },
    //현재위치로이동
    goToCurPosition() {
      this.map.setCenter(this.currentPosition);
      store.commit('SET_SELECTED_POSITON', this.currentPosition);
      this.setMarker();
    },
  },
  async mounted() {
    //지도생성
    this.initMap();
    //현재위치
    await store.dispatch('setCurPosition').catch(() => {});
    //해양정화활동 이벤트 로드
    await store.dispatch('cleanEventStore/fetchCleanEvents');
    //지도에 바인딩
    this.initMapDetail();
  },
  computed: {
    ...mapState([
      'cleanEventStore',
      'currentPosition',
      'selectedPosition',
      'isError',
      'errorMessage',
      'isCriticError',
      'criticErrorMessage',
    ]),
  },
};
</script>

<style></style>
