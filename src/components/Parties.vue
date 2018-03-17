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
  font-size: 3rem;
  font-family: var(--fontFamily-oswald);

  &:not(:first-child) {
    margin: 2em 0 0;
  }
}

.link {
  display: inline-block;
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
  font-size: 3rem;
  background: var(--color-text);
  color: var(--color-bg);
}

.title {
  font-size: 4rem;
  background: #fff;
  transform: translateX(1em);
}

.overview {
  font-size: 2rem;
  background: #ccc;
  transform: translateX(1em);
}
</style>

<template>
  <section v-if="parties != null" class="Parties">
    <ul>
      <li class="party" v-for="party of parsedParties" :key="party.title">
        <router-link class="link" :to="showUrl(party.date)">
          <span class="date">{{party.date}}</span><br>
          <span class="title" v-html="party.title" /><br>
          <span class="overview">{{party.overview}}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>
