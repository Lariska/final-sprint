import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {efixStore} from './efix.store'

export default new Vuex.Store({
  modules: {
    efix: efixStore
  }
})