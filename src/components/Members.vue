<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Member } from '../interfaces/Member';

@Component({})
export default class Members extends Vue {
  @Prop() members: Member[];

  get parsedMembers() {
    return this.members.map(member => ({ ...member, parsedDesc: member.desc.split('\n') }));
  }
}
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

.cell {
  &:not(:first-child) {
    margin-top: 3rem;
  }
}

.info {
  position: relative;
  display: inline-block;
  font-size: 2.2rem;
  padding: 0.1em 0.5em;
  background: #ccc;
  letter-spacing: -0.05em;
}

.name {
  font-size: 0.8em;
}

.job {
  font-size: 1.4rem;
  margin-left: 0.5em;
  padding: 0 0.2em;
  background: #f0f0f0;
  letter-spacing: 0;
}

.links {
  display: inline-block;
  font-size: 0.7em;

  @media (--not-sp) {
    font-size: 1.8rem;
  }
}

.icon {
  display: inline-block;
  margin-left: 0.5em;
}

.icon-link,
.icon-link:active,
.icon-link:hover {
  color: var(--color-text);
}

.desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.4rem;

  @media (--not-sp) {
    font-size: 1.6rem;
  }
}

.desc-line {
  margin-top: 0.5em;
  padding: 0.1em 1em;
  background: #fff;
}
</style>

<template>
  <section class="article-section">
    <h3 class="header">MEMBERS</h3>
    <ul class="list">
      <li class="cell" v-for="member of parsedMembers" :key="member.name">
        <div class="info">
          <span class="name">{{member.name}}</span>
          <span class="job">{{member.job}}</span>
          <ul class="links">
            <li v-if="member.website" class="icon -website">
              <a :href="member.website" class="icon-link" target="_blank" rel="noopener">
                <i class="fas fa-home"></i>
              </a>
            </li>
            <li v-if="member.github" class="icon -github">
              <a :href="member.github" class="icon-link" target="_blank" rel="noopener">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li v-if="member.twitter" class="icon -twitter">
              <a :href="member.twitter" class="icon-link" target="_blank" rel="noopener">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <p class="desc">
          <span v-for="(descLine, index) of member.desc.split('\n')" :key="index" class="desc-line">{{descLine}}</span>
        </p>
      </li>
    </ul>
  </section>
</template>
