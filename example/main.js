import Vue from 'vue'
import App from './App'

import 'assets/sass/app.scss'

Vue.config.devtools = true
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  }
})
