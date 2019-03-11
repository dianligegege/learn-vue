import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FatherProps from './views/FatherProps.vue'
import FatherRef from './views/FatherRef.vue'
import FatherEmit from './views/FatherEmit.vue'
import RenderJsx from './views/RenderJsx.vue'
import Life from './views/Life.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/props',
      name: 'fatherprops',
      component: FatherProps,
    },
    {
      path: '/refs',
      name: 'fatherRef',
      component: FatherRef,
    },
    {
      path: '/emit',
      name: 'fatherEmit',
      component: FatherEmit,
    },
    {
      path: '/render&jsx',
      name: 'fatherEmit',
      component: RenderJsx,
    },
    {
      path: '/life',
      name: 'life',
      component: Life,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
