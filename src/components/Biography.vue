<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Biography extends Vue {}
</script>

<style lang="postcss" scoped>
@import '../styles/variables.css';

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

.desc {
  font-size: 1.4rem;

  @media (--not-sp) {
    font-size: 1.6rem;
  }
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
    <h3 class="header">BIOGRAPHY</h3>
    <p class="desc">
      <span class="desc-line">2016年12月、会員の転職に伴う新たな歩みの幸運を祈って発足。</span><br>
      <span class="desc-line">以後、おおよそ2,3ヶ月毎に開催。</span><br>
      <br>
      <span class="desc-line">メンバーをいたずらに増やさず、1台のテーブル、1枚の皿を全員で共有し、</span><br>
      <span class="desc-line">Webの現状・未来、ときどき想い出話を肴にあまり見かけない各国料理のレストランを食べ歩くことを存在意義としている。</span><br>
    </p>
  </section>
</template>
