<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { PartyDetailEntity } from '~/interfaces/Party';
@Component({})
export default class Entry extends Vue {
  @Prop() party: PartyDetailEntity;
}
</script>

<style lang="postcss">
@import '../styles/variables.css';

.Article {
  .header {
    font-size: 2.4rem;
    margin: auto auto 1em;

    @media (--not-sp) {
      font-size: 3rem;
    }
  }

  .date {
    display: table;
    padding: 0.2em 0.5em;
    letter-spacing: 0.15em;
    line-height: 1;
    font-family: var(--fontFamily-oswald);
    font-weight: var(--fontWeight-bold);
    background: var(--color-text);
    color: var(--color-bg);
  }

  .title {
    display: table;
    padding: 0.2em 0.5em;
    line-height: 1;
    font-size: 2rem;
    background: #fff;

    @media (--not-sp) {
      font-size: 3rem;
      transform: translateX(1em);
    }
  }

  .entry {
    font-size: 1.4rem;

    @media (--not-sp) {
      font-size: 1.6rem;
    }
  }

  h3,
  h4,
  h5,
  h6 {
    display: table;
    margin: 2em 0 1em;
    padding: 0.2em 0.5em;
    line-height: 1;
  }

  h3 {
    background: #666;
    font-size: 2rem;
    color: #fff;

    @media (--not-sp) {
      font-size: 2.4rem;
    }
  }

  h4 {
    background: #888;
    font-size: 1.8rem;
    color: #fff;

    @media (--not-sp) {
      font-size: 2rem;
    }
  }

  h5 {
    background: #aaa;
    font-size: 1.6rem;

    @media (--not-sp) {
      font-size: 1.8rem;
    }
  }

  h6 {
    font-size: 1.4rem;
    text-decoration: underline;

    @media (--not-sp) {
      font-size: 1.6rem;
    }
  }

  p {
    display: table;
    margin: 0.5em 0;
    background: #fff;
  }

  p + img {
    background: #000;
  }

  strong,
  b {
    font-weight: var(--fontWeight-bold);
  }

  em {
    font-style: italic;
  }

  p > code {
    background: #ddd;
    padding: 0 0.5em;
  }

  ul,
  ol {
    margin-left: 1.2em;
  }

  ul {
    list-style-type: square;

    ul {
      list-style-type: circle;

      ul {
        list-style-type: disc;
      }
    }
  }

  ol {
    list-style-type: decimal;
  }

  blockquote p {
    background: transparent;
    font-style: italic;
    padding-left: 0;
    padding-right: 0;
  }

  blockquote {
    margin: 2em 0;
    padding-left: 1.2em;
    border-left: solid 3px var(--color-text);
  }

  hr {
    appearance: none;
    border: 0;
    width: 3rem;
    margin: 3rem auto 3rem 0;
    padding: 0;
    height: 1px;
    background: #000;
  }

  img {
    max-width: 100%;
  }
}
</style>

<template>
<article class="Article" v-if="party != null">
  <h2 class="header">
    <span class="date" v-html="party.date" />
    <span class="title" v-html="party.title" />
  </h2>
  <div class="entry" v-html="party.html" />
</article>
</template>
