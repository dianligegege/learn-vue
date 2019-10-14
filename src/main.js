import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import './plugins/iview.js'
import MyPlugin from './plugins/myPlugin'

Vue.use(iView);
Vue.use(MyPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
