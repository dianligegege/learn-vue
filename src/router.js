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
import Directives from './views/Directives'
import Plugins from './views/plugins'
import FormDemo from './views/formDemo'
import FontAuto from './views/fontAuto'
import IconFont from './views/iconFont'
import Require from './views/require'
import International from './views/international'
import Swiper from './views/swiper'
import Input from './views/input'
import Danmu from './views/danmu'
import Chart from './views/chart'
import Wallet from './views/wallet'
import Canvas from './views/canvas'
import Table from './views/table'
import IframeFather from './views/iframe/father'
import IframeSon from './views/iframe/son'

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
    {
      path: '/Directives',
      name: 'directives',
      component: Directives,
    },
    {
      path: '/form/plugins',
      name: 'plugins',
      component: Plugins,
    },
    {
      path: '/form-demo',
      name: 'formDemo',
      component: FormDemo,
    },
    {
      path: '/font-auto',
      component: FontAuto,
    },
    {
      path: '/icon-font',
      component: IconFont,
    },
    {
      path: '/require',
      component: Require,
    },
    {
      path: '/international',
      component: International,
    },
    {
      path: '/swiper',
      component: Swiper,
    },
    {
      path: '/input',
      component: Input,
    },
    {
        path: '/danmu',
        component: Danmu,
    },
    {
    path: '/chart',
    component: Chart,
    },
    {
        path: '/wallet',
        component: Wallet,
    },
    {
        path: '/canvas',
        component: Canvas,
    },
    {
      path: '/table',
      component: Table,
    },
    {
      path: '/iframe-father',
      component: IframeFather,
    },
    {
      path: '/iframe-son',
      component: IframeSon,
    },
  ]
})
