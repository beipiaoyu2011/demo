import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './vuex'

console.log(App);


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
