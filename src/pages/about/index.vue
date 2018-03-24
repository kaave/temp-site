<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Members from '../../constants/members';
import { Member } from '../../interfaces/Member';
import SiteHeader from '~/components/Header.vue';
import AboutUsComponent from '~/components/AboutUs.vue';
import BiographyComponent from '~/components/Biography.vue';
import MembersComponent from '~/components/Members.vue';

@Component({
  components: {
    SiteHeader,
    AboutUsComponent,
    MembersComponent,
    BiographyComponent,
  },
})
export default class extends Vue {
  members = Members;
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
  padding: 100px 0;
}

.inner-pad {
  width: 100%;
  margin: 0;
  padding: 0 5%;
}

.header {
  z-index: -1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  user-select: none;
  font-family: var(--fontFamily-oswald);
  font-weight: var(--fontWeight-bold);
  font-size: 3rem;
  margin-bottom: 1.5em;
}

.header-text {
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  font-size: 33vmin;
  font-family: var(--fontFamily-oswald);
  font-weight: var(--fontWeight-black);
  line-height: 0.8;
  letter-spacing: -0.15em;
  color: #ccc6;

  &:nth-of-type(2) {
    z-index: -1;
    transform: translateX(-0.1em);
    color: #d7d7d7;
  }

  &:nth-of-type(3) {
    z-index: -2;
    transform: translateX(-0.2em);
    color: #ddd;
  }
}

hr {
  display: inline-block;
  margin: 5rem 0;
  width: 3rem;
}
</style>

<template>
<div>
  <site-header />
  <main id="main" class="Main" role="main">
    <div class="inner">
      <div class="inner-pad">
        <h2 class="header" data-content="We are TWWARR.">
          <span v-for="index of [0]" :key="index" class="header-text">
            We<br>
            are<br>
            TWWARR.
          </span>
        </h2>
        <article>
          <about-us-component />
          <hr>
          <biography-component />
          <hr>
          <members-component :members="members" />
        </article>
      </div>
    </div>
  </main>
</div>
</template>
