import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { revealDirective } from './composables/reveal.js'

const app = createApp(App)

app.use(router)
app.directive('reveal', revealDirective)

app.mount('#app')
