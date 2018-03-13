<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SiteHeader from '~/components/Header.vue';

@Component({ components: { SiteHeader } })
export default class extends Vue {}
</script>

<template>
<div>
  <site-header />
  <main id="main" class="Main" role="main">
    contact
  </main>
</div>
</template>
