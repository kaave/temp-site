<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SiteHeader from '~/components/Header.vue';

@Component({ components: { SiteHeader } })
export default class extends Vue {}
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
  font-size: 1.6rem;
  text-decoration: underline;
}
</style>


<template>
<div>
  <site-header />
  <main id="main" class="Main" role="main">
    <div class="inner">
      <article>
        <p>現在、新規組合員の受付は行っておりません。</p>
      </article>
    </div>
  </main>
</div>
</template>
