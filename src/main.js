import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import './plugins/iview.js'
import MyPlugin from './plugins/myPlugin'
import i18n from './i18n'

// svg 处理
import '@/assets/icons/index.js'

// 全局通用组件
import '@/utils/components.js'

Vue.use(iView);
Vue.use(MyPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
