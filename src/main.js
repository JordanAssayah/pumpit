// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import HttpHelper from 'vue-resource'

Vue.config.productionTip = false
Vue.use(HttpHelper)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
