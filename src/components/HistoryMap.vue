<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import format from 'date-fns/format';
import {} from '@types/googlemaps';

import * as Configs from '~/constants/configs';
import { PartySummary, PartySummaryEntity } from '~/interfaces/Party';
import { Marker } from '~/interfaces/GoogleMap';

@Component({})
export default class extends Vue {
  @Prop() option: google.maps.MapOptions;
  @Prop() markers: Marker[];
  map: google.maps.Map;

  mounted() {
    // マップを初期化
    const mountPoint = document.querySelector('.google-map');
    if (!mountPoint) {
      return;
    }

    this.map = new google.maps.Map(mountPoint, this.option);
    const bounds = new google.maps.LatLngBounds();
    this.markers.forEach((data, index) => {
      const marker = new google.maps.Marker({ map: this.map, position: data.location });
      const content = `
<a style="color: #000; font-size: 1.6rem; letter-spacing: 0.05em;" href="/parties/${format(data.date, 'YYYY-MM-DD')}">
  ${format(data.date, 'YYYY/MM/DD')}<br>${data.category} ${data.name}
</a>`.trim();
      const infowindow = new google.maps.InfoWindow({ content, maxWidth: 300 });
      bounds.extend(marker.getPosition());

      marker.addListener('click', () => infowindow.open(this.map, marker));
    });
    this.map.fitBounds(bounds);
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/variables.css';

.map {
  margin-bottom: 100px;
}

.inner {
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  padding: 0 0 50px;
}

.inner-pad {
  width: 100%;
  margin: 0;
  padding: 0 5%;
}

.header {
  display: inline-block;
  margin-bottom: 1.5em;
  padding: 0.1em 0.5em;
  letter-spacing: 0.15em;
  font-size: 2.4rem;
  font-family: var(--fontFamily-oswald);
  font-weight: var(--fontWeight-bold);
  background: var(--color-text);
  color: var(--color-bg);

  @media (--not-sp) {
    font-size: 3rem;
  }
}

.google-map {
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: calc(100vh / 16 * 9);

    @media (--not-sp) {
      padding-bottom: calc(100% / 16 * 9);
    }

    @media (--large-tb) {
      padding-bottom: calc(1000px / 16 * 9);
    }
  }
}
</style>

<template>
<section class="map">
  <div class="inner">
    <div class="inner-pad">
      <h2 class="header">HISTORY MAP</h2>
    </div>
  </div>
  <div class="google-map" />
</section>
</template>
