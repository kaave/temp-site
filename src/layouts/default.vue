<style lang="postcss">
@import 'prismjs/themes/prism-okaidia.css';
@import '../styles/variables.css';
@import '../styles/reset.css';

html {
  font-size: 62.5%;
}

body {
  font-family: var(--fontFamily-base);
  font-size: 1.4rem;
  font-feature-settings: 'palt';
  letter-spacing: 0.05em;
  line-height: 1.5;
  color: var(--color-text);
  background-image: url('../assets/001-Basik-Paper.png');
  background-repeat: repeat;
  background-color: var(--color-bg);
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

.-hidden-pc {
  @media (--not-sp) {
    display: none !important;
  }
}

.-hidden-sp {
  @media (--sp) {
    display: none !important;
  }
}

.-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>

<template><nuxt/></template>
