import Vue from 'vue'
import Router from 'vue-router'
import HeardNav from '@/components/HeardNav'
import PopUp from '@/components/pop/PopUp'
import PopUpTop from '@/components/pop/PopUpTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeardNav',
      component: HeardNav
    },
    {
      path: '/pop',
      name: '/pop/PopUp',
      component: PopUp
    },
    {
      path: '/pop',
      name: '/pop/PopUpTop',
      component: PopUpTop
    }
  ]
})
