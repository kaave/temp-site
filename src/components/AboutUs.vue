<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AboutUs extends Vue {}
</script>

<style lang="postcss" scoped>
@import '../styles/variables.css';

.header {
  display: inline-block;
  margin-bottom: 1.5em;
  padding: 0.1em 0.5em;
  letter-spacing: 0.15em;
  font-size: 3rem;
  font-family: var(--fontFamily-oswald);
  font-weight: var(--fontWeight-bold);
  background: var(--color-text);
  color: var(--color-bg);
}

.desc {
  font-size: 1.6rem;
}

.desc-line {
  display: inline-block;
  padding: 0.1em 1em;
  background: #fff;
  margin-top: 0.5em;
}
</style>

<template>
  <section class="article-section">
    <h3 class="header">about TWWARR</h3>
    <p class="desc">
      <span class="desc-line">Tokai Web Worker's Association for Rare Restaurants.</span><br>
      <span class="desc-line">希少飲食店のための東海Web系業務者組合</span>
    </p>
  </section>
</template>
