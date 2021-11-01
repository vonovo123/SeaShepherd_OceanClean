<template>
  <div id="map">지도</div>
</template>

<script>
const api = require('../../API/api.js');
export default {
  data() {
    return {
      map: null,
      infoWindow: null,
      curPos: { lat: 37.5510719, lng: 126.916324 },
      curMarker: null,
      data: null,
    };
  },
  methods: {
    async getData() {
      this.data = await api.getEvents('events');
      console.log(this.data);
    },
    //구글맵 생성
    init() {
      this.infoWindow = new google.maps.InfoWindow();
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.curPos,
        zoom: 16,
      });
      this.map.addListener('click', e => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        this.curMarker.setMap(null);
        this.curMarker = new google.maps.Marker({
          position: { lat, lng },
          map: this.map,
          label: 'C',
        });
      });
      //현재위치로 초기화
      this.goToCurPosition();
      //화면에 현재위치로 이동 버튼 추가
      const locationBtn = document.createElement('button');
      locationBtn.textContent = '현재위치로이동';
      locationBtn.classList.add('custom-map-control-button');
      locationBtn.addEventListener('click', this.goToCurPosition);
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        locationBtn
      );
    },
    //현재위치로이동
    goToCurPosition() {
      //기본위치는 현재위치
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          Object.entries(pos).forEach(([key, value]) => {
            this.curPos[key] = value;
          });
          this.curMarker = new google.maps.Marker({
            position: this.curPos,
            map: this.map,
            label: 'C',
          });
          this.map.setCenter(this.curPos);
        });
      } else {
        this.handleLocationError(false);
      }
    },
    handleLocationError(browserHasGeolocation) {
      this.infoWindow.setPosition(this.curPos);
      this.infoWindow.setContent(
        browserHasGeolocation
          ? '에러: 현재위치를 불러오는데 실패했습니다.'
          : '에러: 브라우저가 현재위치를 제공하지 않습니다.'
      );
      this.map.setCenter(this.curPos);
      this.infoWindow.open(this.map);
    },
  },
  mounted() {
    this.getData();
    this.init();
  },
};
</script>

<style></style>
