import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FatherProps from './views/transform/FatherProps.vue'
import FatherRef from './views/transform/FatherRef.vue'
import FatherEmit from './views/transform/FatherEmit.vue'
import FatherAttrs from './views/transform/FatherAttrs.vue'
import RenderJsx from './views/rander/RenderJsx.vue'
import Life from './views/life/Life.vue'
import FatherSlot from './views/transform/FatherSlot.vue'
import Vuex from './views/vuex/Vuex.vue'
import State from './views/vuex/State.vue'
import Getter from './views/vuex/Getter.vue'
import Mutation from './views/vuex/Mutation.vue'
import Action from './views/vuex/Action.vue'
import Modules from './views/modules/Index.vue'
import Watch from './views/watch/Watch.vue'
import Animate from './views/animate/Animate.vue'
import Single from './views/animate/Single.vue'
import Many from './views/animate/Many.vue'
import Form from './views/form/Form.vue'
import Responsive from './views/responsive'

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
      path: '/attrs',
      name: 'Attrs',
      component: FatherAttrs,
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
    {
      path: '/vuex/action',
      name: 'action',
      component: Action,
    },
    {
      path: '/modules/index',
      name: 'index',
      component: Modules,
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch,
    },
    {
      path: '/animate',
      name: 'animate',
      component: Animate,
    },
    {
      path: '/animate/single',
      name: 'single',
      component: Single,
    },
    {
      path: '/animate/many',
      name: 'many',
      component: Many,
    },
    {
      path: '/form/form',
      name: 'form',
      component: Form,
    },
    {
      path: '/responsive',
      name: 'responsive',
      component: Responsive,
    },
  ]
})
