<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  mounted() {
    const backgroundElement = this.$el.querySelector('.background');
    if (!backgroundElement || !(backgroundElement instanceof HTMLCanvasElement)) {
      return;
    }

    const widthPx = backgroundElement.getBoundingClientRect().width;
    const heightPx = backgroundElement.getBoundingClientRect().height;
    backgroundElement.width = widthPx;
    backgroundElement.height = heightPx;
    const context = backgroundElement.getContext('2d');
    if (!context) {
      return;
    }
    context.strokeStyle = 'rgba(0, 0, 0, 0.9)';
    for (let i = 0; i < heightPx; i += 1) {
      const y = i + 0.5;
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(
        widthPx / 100 * (100 - Math.random() * Math.random() * 40),
        y + (Math.random() * Math.random() * 4 - 2),
      );
      context.stroke();
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/variables.css';

.Modal {
  z-index: var(--z-lv-10);
  position: fixed;
  top: 5rem;
  left: 0;
  width: 80%;
  height: calc(100vh - 5rem);
  display: block;
  transition: all 0.6s var(--easeOut-expo);
}

.background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.inner {
  width: 100%;
  height: 100%;
}

.list {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 auto;
  align-items: flex-start;
  height: 100%;
  margin-left: 10vw;
}

.cell {
  display: inline-block;
  flex: 0 0 auto;
  background: #fff;
  padding: 0.2em 1em;
  font-size: 1.6rem;

  &:not(.first-of-type) {
    margin-top: 1.5em;
  }

  a {
    color: var(--color-text);

    &:not(:first-of-type) {
      margin-left: 1.5em;
    }
  }
}

.modal-enter,
.modal-leave-active {
  transform: translateX(-100%);
}
</style>

<template>
  <transition name="modal">
    <aside class="Modal">
      <canvas class="background" />
      <div class="inner">
        <ul class="list">
          <li class="cell">
            <router-link to="/about">about</router-link>
          </li>
          <li class="cell">
            <router-link to="/parties">parties</router-link>
          </li>
          <li class="cell">
            <router-link to="/how-to-join">How to join</router-link>
          </li>
          <li class="cell -sns">
            <a href="https://twwarr.slack.com" class="icon-link" target="_blank" rel="noopener">
              <i class="fab fa-slack-hash"></i>
            </a>
            <a href="https://github.com/twwarr/official-site" class="icon-link" target="_blank" rel="noopener">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </transition>
</template>
