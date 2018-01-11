<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from '@/components/Main.vue';
export default {
  name: 'app',
  components: {
    'Main': Main
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
  }
</style>

