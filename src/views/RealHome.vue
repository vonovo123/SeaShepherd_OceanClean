<template>
  <div class="home-main">
    <div class="body"></div>
    <div class="cover">
      <div class="title">SEASHEOHERD_OCEANCLEN</div>
    </div>
  </div>
</template>

<script>
import { ScatterplotLayer } from '@deck.gl/layers';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import mapStyle from '../assets/style/map-style.js';
import { mapActions, mapState, mapGetters } from 'vuex';
import gsap from 'gsap';
export default {
  name: 'ReadHome',
  computed: {
    ...mapGetters({
      eventMarkerData: 'cleanEventStore/EventMarkerData',
    }),
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
      getEventMarkers: 'cleanEventStore/getEventMarkers',
    }),
    initMap() {
      console.log(this.eventMarkerData);
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
    },
  },
  created() {
    console.log('created');
  },
  async mounted() {
    const $title = document.querySelector('.title');
    console.log($title);
    $title.style.transfrom = 'translateY(-60px)';
    $title.style.opacity = 0;
    gsap.to($title, {
      duration: 1,
      y: 0,
      opacity: 1,
    });
    console.log('mounted');
    await this.setCurPosition().catch(() => {});
    await this.getEventMarkers();
    this.initMap();
    const $cover = document.querySelector('.cover');
    gsap.to($cover, {
      duration: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    });
    // setTimeout(() => {
    //   $cover.style.
    // }, 2000);
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
  height: 100%;
  overflow: hidden;
  background-color: black;
}

.body {
  /* 1em : 16px */
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
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
  text-align: center;
  font-size: 7vw;
  font-weight: bold;
}
</style>
