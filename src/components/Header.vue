<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {}
</script>


<style lang="postcss" scoped>
@import '../styles/variables.css';

.Header {
  width: 100%;
  height: 5rem;
  border-bottom: solid 1px var(--color-text);
}

.inner {
  width: 100%;
  height: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  padding: 0 5%;
}

nav {
  width: 100%;
  height: 100%;
}

.list {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

.cell {
  &.-logo {
    margin-right: 1em;
  }

  &.-link {
    letter-spacing: 0.1em;

    & a::after {
      content: '';
    }
  }

  &:not(:first-of-type) {
    margin-left: 1.5em;
  }
}

h1 {
  font-size: 3.2rem;
  letter-spacing: -0.17em;
}

a {
  position: relative;
  display: block;
  color: var(--color-text);

  &:hover,
  &:focus {
    &::after {
      width: 100%;
    }
  }

  &::after {
    position: absolute;
    display: inline-block;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background: var(--color-text);
    transform: translate3d(0, 3px, 0);
    transition: width 0.6s var(--easeOut-expo);
    will-change: width;
  }
}
</style>

<template>
<header id="header" class="Header" role="banner">
  <div class="inner">
    <nav>
      <ul class="list">
        <li class="cell -logo">
          <h1>
            <router-link to="/">
              TWWARR
            </router-link>
          </h1>
        </li>
        <li class="cell -link">
          <router-link to="/about">about</router-link>
        </li>
        <li class="cell -link">
          <router-link to="/parties">parties</router-link>
        </li>
        <li class="cell -link">
          <router-link to="/how-to-join">How to join</router-link>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>
