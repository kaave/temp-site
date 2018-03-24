<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ModalMenu from '~/components/ModalMenu.vue';

@Component({ components: { ModalMenu } })
export default class Header extends Vue {
  isDetail = false;

  handleHambergerClick() {
    this.isDetail = !this.isDetail;
  }
}
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
  padding: 0;
}

.inner-pad {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 5%;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.list {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &:not(.-right) .cell {
    &.-logo {
      margin-right: 1em;
    }

    &:not(:first-of-type) {
      margin-left: 1.5em;
    }
  }

  &.-right .cell {
    &:not(:last-of-type) {
      margin-right: 1.5em;
    }
  }
}

.cell {
  &.-link {
    letter-spacing: 0.1em;

    & a::after {
      content: '';
    }
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

.icon-link,
.icon-link:active,
.icon-link:hover {
  color: #666;
  font-size: 2rem;
}

.hamberger {
  display: flex;
  flex-wrap: wrap;
  appearance: none;
  border: 0;
  background: 0;
  width: 21px;

  &:focus {
    outline: 0;
  }

  &.-active .hamberger-line {
    &.-center {
      opacity: 0;
      transform: translateX(20%);
    }

    &.-top {
      transform: translate3d(0, 3px, 0) rotate(calc(45deg + 360deg * 2));
    }

    &.-bottom {
      transform: translate3d(0, -3px, 0) rotate(calc(-45deg - 360deg * 2));
    }
  }
}

.hamberger-line {
  width: 100%;
  height: 1px;
  margin: 0;
  padding: 0;
  background: var(--color-text);
  transition: transform 0.6s var(--easeOut-expo), opacity 0.3s;

  &:not(:first-child) {
    margin-top: 2px;
  }

  &.-top,
  &.-bottom {
    transform-origin: center;
  }
}
</style>

<template>
<header id="header" class="Header" role="banner">
  <div class="inner">
    <div class="inner-pad">
      <nav>
        <ul class="list">
          <li class="cell -logo">
            <h1>
              <router-link to="/">
                TWWARR
              </router-link>
            </h1>
          </li>
          <li class="cell -link -hidden-sp">
            <router-link to="/about">about</router-link>
          </li>
          <li class="cell -link -hidden-sp">
            <router-link to="/parties">parties</router-link>
          </li>
          <li class="cell -link -hidden-sp">
            <router-link to="/how-to-join">How to join</router-link>
          </li>
        </ul>
        <ul class="list -right">
          <li class="cell -logo -hidden-sp">
            <a href="https://twwarr.slack.com" class="icon-link" target="_blank" rel="noopener">
              <i class="fab fa-slack-hash"></i>
            </a>
          </li>
          <li class="cell -logo -hidden-sp">
            <a href="https://github.com/twwarr/official-site" class="icon-link" target="_blank" rel="noopener">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="cell -logo -hamberger -hidden-pc">
            <button class="hamberger" :class="isDetail ? '-active': ''" @click="handleHambergerClick">
              <span class="hamberger-line -top"></span>
              <span class="hamberger-line -center"></span>
              <span class="hamberger-line -bottom"></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <modal-menu v-if="isDetail" />
</header>
</template>
