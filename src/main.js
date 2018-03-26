import Vue from 'vue'
import App from './App.vue'
import ScratchCard from '../dist/vue-scratch-card.js' 

Vue.component('ScratchCard',ScratchCard)
new Vue({
  el: '#app',
  render: h => h(App)
})
