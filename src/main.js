import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.component('header', require('./components/webLayers/hero.vue').default)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
