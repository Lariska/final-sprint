import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {wixerStore} from './wixer.store'

export default new Vuex.Store({
  modules: {
    wixer: wixerStore
  }
})