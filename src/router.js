import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FatherProps from './views/transform/FatherProps.vue'
import FatherRef from './views/transform/FatherRef.vue'
import FatherEmit from './views/transform/FatherEmit.vue'
import RenderJsx from './views/rander/RenderJsx.vue'
import Life from './views/life/Life.vue'
import FatherSlot from './views/transform/FatherSlot.vue'
import Vuex from './views/vuex/Vuex.vue'
import State from './views/vuex/State.vue'
import Getter from './views/vuex/Getter.vue'
import Mutation from './views/vuex/Mutation.vue'

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
      name: 'props',
      component: FatherProps,
    },
    {
      path: '/refs',
      name: 'Ref',
      component: FatherRef,
    },
    {
      path: '/emit',
      name: 'Emit',
      component: FatherEmit,
    },
    {
      path: '/render&jsx',
      name: 'Emit',
      component: RenderJsx,
    },
    {
      path: '/life',
      name: 'life',
      component: Life,
    },
    {
      path: '/slot',
      name: 'slot',
      component: FatherSlot,
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex,
    },
    {
      path: '/vuex/state',
      name: 'state',
      component: State,
    },
    {
      path: '/vuex/getter',
      name: 'getter',
      component: Getter,
    },
    {
      path: '/vuex/mutation',
      name: 'mutation',
      component: Mutation,
    },
  ]
})
