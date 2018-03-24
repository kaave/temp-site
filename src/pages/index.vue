<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import {} from '@types/googlemaps';

import SiteHeader from '~/components/Header.vue';
import HistoryMap from '~/components/HistoryMap.vue';
import * as Configs from '~/constants/configs';
import * as HistoryMapConstants from '~/constants/historyMap';
import { PartySummary, PartySummaryEntity } from '~/interfaces/Party';

@Component({ components: { SiteHeader, HistoryMap } })
export default class extends Vue {
  mapOption = HistoryMapConstants.option;
  mapMarkers = HistoryMapConstants.markers;
}
</script>


<style lang="postcss" scoped>
@import '../styles/variables.css';

.Main {
  width: 100%;

  @media (--sp) {
    margin-top: 5rem;
  }
}

.inner {
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  padding: 40px 0 60px;

  @media (--not-sp) {
    padding: 100px 0 200px;
  }
}

.inner-pad {
  width: 100%;
  margin: 0;
  padding: 0 5%;
}
</style>

<template>
<div>
  <site-header />
  <main id="main" class="Main" role="main">
    <div class="inner">
      <div class="inner-pad">
        <svg class="main-visual" viewBox="0 0 320 120">
          <text font-family="Roboto">
            <tspan class="love" x="0" dy="1em" font-size="95" letter-spacing="-0.17em">TWWARR</tspan>
            <tspan x="0" dy="1.2em" font-size="17" letter-spacing="-0.1em" fill="#999">Tokai Web Worker's Association for Rare Restaurants.</tspan>
          </text>
        </svg>
      </div>
    </div>
    <history-map :option="mapOption" :markers="mapMarkers" />
  </main>
</div>
</template>
