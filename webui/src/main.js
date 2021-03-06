// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Bus from './Bus.js'
import VueLocalStorage from 'vue-localstorage'
import VueMarkdown from 'vue-markdown'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-awesome/icons/close'
import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)
Vue.component('VueMarkdown', VueMarkdown)

Vue.use(VueLocalStorage)

Vue.use(BootstrapVue)

Vue.prototype.$http = Axios

Vue.prototype.$bus = Bus

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
