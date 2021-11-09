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
import ErrorMessage from '../../components/ErrorMessage.vue';
import CriticalErrorMessage from '../../components/CriticalErrorMessage.vue';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      map: null,
      //infoWindow: null,
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
      this.map = new google.maps.Map(document.getElementById('map'), {
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
    //맵 클릭하는 위치로  현재위치 마커 변경
    clickMapEvent(e) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this.setSelectedPosition({ lat, lng });
      this.setCurMarker();
    },
    //새로운 위치마커추가
    setCurMarker() {
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

<style></style>
