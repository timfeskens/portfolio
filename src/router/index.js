import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Tim from '@/assets/pages/tim/index'
import Olaf from '@/assets/pages/olaf/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/tim',
      name: 'Tim',
      component: Tim
    },
    {
      path: '/olaf',
      name: 'Olaf',
      component: Olaf
    }
  ]
})
