import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/tailwind.css";
import "animate.css"

import './components/globleComponents.js'
// ICONs
import '@/assets/icons'

// VueX
import store from './store'

// Directive 
import '@/directives/index.js';

// Device-detector
import device from "vue-device-detector"
Vue.use(device)

// Lottie

// Filters
import * as filters from '@/filters' // global filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})



// Using Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  colors:{
    white:'rgba(255,255,255,1)',
    gray:'#F7F7F7'
  }
})



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
