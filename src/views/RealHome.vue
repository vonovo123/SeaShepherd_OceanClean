<template>
  <div class="home-main">
    <div class="body">RealHome</div>
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
        getRadius: d => parseInt(d.capacity),
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
  },
};
</script>
<style>
.home-main {
  /* 1em : 16px */
  width: 100%;
  font-family: 'Lato', Calibri, Arial, sans-serif;
  font-size: 1em;
  height: 100%;
  --inputColor: rgb(3, 3, 3);
  --inputHoverColor: rgb(206, 246, 244);
  --fontColor: rgb(55, 53, 47);
  overflow: hidden;
}

.body {
  /* 1em : 16px */
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
