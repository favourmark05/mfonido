import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import firebase from 'firebase/compat/app'
// import { getFirestore } from 'firebase/compat/firestore'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'

require('firebase/firestore')

Vue.use(VueSweetalert2)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyB6EnlVFBmX71DT0dmL_JFvWwoXuLp7Jhg',
  authDomain: 'mfonidomark.firebaseapp.com',
  projectId: 'mfonidomark',
  storageBucket: 'mfonidomark.appspot.com',
  messagingSenderId: '501966213621',
  appId: '1:501966213621:web:de4ec8dca09f454e6190bc',
  measurementId: 'G-LSS3TPDPXZ'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export { db }

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

Vue.component('header', require('./components/webLayers/hero.vue').default)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
