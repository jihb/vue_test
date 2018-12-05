import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import address from '@/components/address'
import study1 from '@/components/study1'
import study2 from '@/components/study2'
import address1 from '@/components/address1'
import empty from '@/components/empty'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/address',
      name: 'address',
      component: address,
      children: [
        {
          path: 'empty',
          name: 'empty',
          component: empty
        },
        {
          path: 'address1',
          name: 'address1',
          component: address1
        }
      ]
    },
    {
      path: '/study1',
      name: 'study1',
      component: study1
    },
    {
      path: '/study2',
      name: 'study2',
      component: study2
    }
  ]
})