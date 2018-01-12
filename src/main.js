// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Main from './components/Main.vue'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)
Vue.config.productionTip = false
Vue.component('Main', Main)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
