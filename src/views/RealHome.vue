<template>
  <div class="home-main">
    <div class="body"></div>
    <div class="cover">
      <div class="title">TEST</div>
    </div>
  </div>
</template>

<script>
import { ScatterplotLayer } from '@deck.gl/layers';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import mapStyle from '../assets/style/map-style.js';
import data from '../../db.json';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'ReadHome',
  computed: {
    ...mapState(['currentPosition']),
  },
  data: function () {
    return {
      map: '',
    };
  },
  methods: {
    ...mapActions({
      setCurPosition: 'setCurPosition',
    }),
    initMap() {
      console.log(this.currentPosition);
      const mapOptions = {
        center: this.currentPosition,
        zoom: 6,
        styles: mapStyle,
      };
      const mapDiv = document.querySelector('.body');
      this.map = new google.maps.Map(mapDiv, mapOptions);
      const layerOptions = {
        id: 'scatterplot',
        data: data.markers,
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
    },
  },
  async mounted() {
    await this.setCurPosition().catch(() => {});
    this.initMap();
    const $cover = document.querySelector('.cover');
    setTimeout(() => {
      $cover.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }, 2000);
  },
};
</script>
<style>
.gmnoprint {
  display: none !important;
}
.gm-control-active {
  display: none !important;
}
.home-main {
  /* 1em : 16px */
  width: 100%;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  font-size: 1em;
  height: 100%;
  overflow: hidden;
  background-color: black;
}

.body {
  /* 1em : 16px */
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
}
.home-main > .cover {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
  opacity: 1;

  color: white;
  transition: 1s;
}

.home-main > .cover > .title {
  position: relative;
  top: 30%;
  font-size: 8rem;
}
</style>
