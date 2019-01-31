// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'

import App from './App'
import router from './router'

Vue.config.productionTip = false

let app = ''

const config = {
  apiKey: 'AIzaSyCCpWMTwpeUCL2mpXgpTZiRCwOa9Q7Xve8',
  authDomain: 'auth-firebase-34f48.firebaseapp.com',
  databaseURL: 'https://auth-firebase-34f48.firebaseio.com',
  projectId: 'auth-firebase-34f48',
  storageBucket: 'auth-firebase-34f48.appspot.com',
  messagingSenderId: '968315599925'
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
