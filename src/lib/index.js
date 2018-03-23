import VueScratchCard from './vue-scratch-card'

const scratchCard = {
  install(Vue, options) {
    Vue.component(VueScratchCard.name, VueScratchCard)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueScratchCard);
}
export default scratchCard
