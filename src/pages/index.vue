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
}

.inner {
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  padding: 100px 5%;
}
</style>

<template>
<div>
  <site-header />
  <main id="main" class="Main" role="main">
    <!-- <div class="inner">
    </div> -->
    <history-map :option="mapOption" :markers="mapMarkers" />
  </main>
</div>
</template>
