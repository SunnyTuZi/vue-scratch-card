import Vue from 'vue'
import App from './App.vue'
import VueScratchCard from './lib/index.js' 
Vue.use(VueScratchCard)

new Vue({
  el: '#app',
  render: h => h(App)
})
