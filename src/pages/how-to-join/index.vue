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
  padding: 100px 0;
  font-size: 1.6rem;
  text-decoration: underline;
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
        <article>
          <p>主催kaaveに遭遇した際、声をかけてくださいませ。</p>
        </article>
      </div>
    </div>
  </main>
</div>
</template>
