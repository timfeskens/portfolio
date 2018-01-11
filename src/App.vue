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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 40px;
}
</style>
