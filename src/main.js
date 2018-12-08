// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from '@/mock/index'
import store from '@/vuex/store.js'
import Axios from 'axios'
import Loading from 'vue-loading-spin'
import 'vue-loading-spin/dist/loading.css'
import animate from 'animate.css'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Mock.start()

Vue.use(Loading)
Vue.use(animate)

Axios.interceptors.request.use(function (config) {
  store.dispatch('showLoading')
  return config
})
Axios.interceptors.response.use(function (config) {
  store.dispatch('hideLoading')
  return config
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
