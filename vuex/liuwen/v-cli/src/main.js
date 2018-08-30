// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// npm install -s vue-sweetalert2
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './vuex/index.js'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuex)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
