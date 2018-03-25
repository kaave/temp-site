<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

import SiteHeader from '~/components/Header.vue';
import PartiesComponent from '~/components/Parties.vue';
import * as Configs from '~/constants/configs';
import { PartySummary, PartySummaryEntity } from '~/interfaces/Party';

@Component({ components: { SiteHeader, PartiesComponent } })
export default class extends Vue {
  parties: PartySummary[] | null = null;

  mounted() {
    fetch(Configs.parties.summary)
      .then(data => data.json())
      .then(
        (summary: PartySummaryEntity[]) =>
          (this.parties = summary.map(({ date, overview, title, thumbnail }) => ({
            thumbnail,
            overview,
            title,
            date: new Date(date),
          }))),
      );
  }
}
</script>


<style lang="postcss" scoped>
@import '../../styles/variables.css';

.Main {
  width: 100%;
}

.inner {
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  padding: 100px 0;
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
        <parties-component v-if="parties != null" :parties="parties" />
      </div>
    </div>
  </main>
</div>
</template>
