<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import 'vue-router';

import * as Configs from '~/constants/configs';
import { PartyDetailEntity } from '~/interfaces/Party';
import SiteHeader from '~/components/Header.vue';

@Component({ components: { SiteHeader } })
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
  <site-header></site-header>
  <main id="main" class="Main" role="main">
    <div class="inner">
      <article v-if="party != null">
        <span class="article" v-html="party.bodyHtml"></span>
      </article>
    </div>
  </main>
</div>
</template>
