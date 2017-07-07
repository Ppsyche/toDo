import Vue from 'vue'
import Router from 'vue-router'
import TodoMain from '@/components/TodoMain'
import PopUp from '@/components/PopUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoMain',
      component: TodoMain
    },
    {
      path: '/',
      name: 'PopUp',
      component: PopUp
    }
  ]
})
