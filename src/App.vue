<template>
  <div id="app">
    <router-view></router-view>
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

<style>
* {
  margin: 0;
}
</style>
