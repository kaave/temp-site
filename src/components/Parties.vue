<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import format from 'date-fns/format';

import { Parties } from '~/interfaces/Party';

@Component({})
export default class PartiesComponent extends Vue {
  @Prop() parties: Parties;

  get parsedParties() {
    return Object.keys(this.parties)
      .map(key => ({
        ...this.parties[key],
        date: format(new Date(this.parties[key].base.replace(/\.json$/, '')), 'YYYY/MM/DD'),
      }))
      .reverse();
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

.date {
  display: inline-block;
  padding: 0.1em 0.5em;
  letter-spacing: 0.15em;
  font-size: 3rem;
  font-family: var(--fontFamily-oswald);
  font-weight: var(--fontWeight-bold);
  background: var(--color-text);
  color: var(--color-bg);
}

.title {
  display: inline-block;
  padding: 0.1em 0.5em;
  font-size: 4rem;
  font-family: var(--fontFamily-oswald);
  font-weight: var(--fontWeight-bold);
  background: #fff;
  color: var(--color-text);
  transform: translateX(1em);
}
</style>

<template>
  <section v-if="parties != null" class="Parties">
    <ul>
      <li class="party" v-for="party of parsedParties" :v-key="party.title">
        <router-link class="link" :to="showUrl(party.date)">
          <span class="date">{{party.date}}</span><br>
          <span class="title" v-html="party.title" />
        </router-link>
      </li>
    </ul>
  </section>
</template>
