import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './vuex'

// console.log(Vue.prototype);


new Vue({
  el:'#app',
  store,
  render: h => h(App),
})



