// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Bulma from 'bulma'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Bulma)
Vue.use(Buefy)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
