<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import 'vue-router';

import * as Configs from '~/constants/configs';
import { PartyDetailEntity } from '~/interfaces/Party';
import SiteHeader from '~/components/Header.vue';
import Entry from '~/components/Entry.vue';

@Component({ components: { SiteHeader, Entry } })
export default class extends Vue {
  party: PartyDetailEntity | null = null;

  mounted() {
    fetch(`/parties/${this.$route.params.key}.json`)
      .then(data => data.json())
      .then((party: PartyDetailEntity) => (this.party = party));
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
  padding: 100px 5%;
}
</style>

<template>
<div>
  <site-header />
  <main id="main" class="Main" role="main">
    <div class="inner">
      <div class="inner-pad">
        <entry v-if="party" :party="party" />
      </div>
    </div>
  </main>
</div>
</template>
