import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/app'
import Bot from './modules/bot'
import state from './state'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
      App,
      Bot
  },
  getters
})

export default store
