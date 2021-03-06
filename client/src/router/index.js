import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EfixApp from '@/components/EfixApp'
import EfixWebpage from '@/components/EfixWebpage'
import EfixPublish from '@/components/EfixPublish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'efix-app',
      component: EfixApp
    },
    {
      path: '/web-page',
      name: 'web-page',
      component: EfixWebpage
    },
    {
      path: '/publish',
      name: 'publish',
      component: EfixPublish
    }
  ]
})
