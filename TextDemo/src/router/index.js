import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/containers/Layout'

import Details from '@/containers/details'

import Golife from '@/containers/subpage/golife'
import Heigh from '@/containers/subpage/heigh'
import Logo from '@/containers/subpage/logo'
import Openproduct from '@/containers/subpage/Openproduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path:'/details',
      name:'Details',
      component:Details,
      redirect:'/details/open',
      children:[
        {
          path:'golife',
          component:Golife
        },
        {
          path:'heigh',
          component:Heigh
        },
        {
          path:'logo',
          component:Logo
        },
        {
          path:'open',
          component:Openproduct
        }
      ]
    }
  ]
})
