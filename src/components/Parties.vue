<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import format from 'date-fns/format';

import { PartySummary } from '~/interfaces/Party';

@Component({})
export default class PartiesComponent extends Vue {
  @Prop() parties: PartySummary[];

  get parsedParties() {
    return this.parties.map(summary => ({ ...summary, date: format(summary.date, 'YYYY/MM/DD') }));
  }

  showUrl(date: string): string {
    return `/parties/${date.replace(/\//g, '-')}`;
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/variables.css';

.party {
  position: relative;
  font-size: 2.4rem;
  font-family: var(--fontFamily-oswald);

  @media (--not-sp) {
    font-size: 3rem;
  }

  &:not(:first-child) {
    margin: 3em 0 0;
  }
}

.link {
  display: inline-block;
  font-size: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media (--not-sp) {
    flex-direction: row;
  }
}

.image-panel {
  @media (--sp) {
    width: 100%;
  }
}

.thumbnail {
  max-width: 100%;

  @media (--not-sp) {
    margin-top: 5px;
    max-width: 200px;
    max-height: 200px;
  }
}

.title-overview {
  @media (--not-sp) {
    display: inline-flex;
    flex-direction: column;
  }
}

.date,
.title,
.overview {
  display: inline-block;
  padding: 0.1em 0.5em;
  font-family: var(--fontFamily-oswald);
  font-weight: var(--fontWeight-bold);
}

.title,
.overview {
  color: var(--color-text);
}

.date {
  letter-spacing: 0.15em;
  font-size: 2rem;
  background: var(--color-text);
  color: var(--color-bg);

  @media (--not-sp) {
    font-size: 2.4rem;
  }
}

.title {
  font-size: 2.4rem;
  background: #fff;

  @media (--not-sp) {
    font-size: 3rem;
    transform: translateX(1em);
  }
}

.overview {
  font-size: 1.6rem;
  background: #ccc;

  @media (--not-sp) {
    font-size: 2rem;
    transform: translateX(1em);
  }
}
</style>

<template>
  <section v-if="parties != null" class="Parties">
    <ul>
      <li class="party" v-for="party of parsedParties" :key="party.title">
        <router-link class="link" :to="showUrl(party.date)">
          <span class="date">{{party.date}}</span><br>
          <div class="layout">
            <div v-if="party.thumbnail" class="image-panel">
              <img class="thumbnail" :src="party.thumbnail" :alt="party.title">
            </div>
            <div class="title-overview">
              <span class="title" v-html="party.title" /><br>
              <span class="overview">{{party.overview}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>
