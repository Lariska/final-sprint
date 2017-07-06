import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {efixStore} from './Efix.store'

export default new Vuex.Store({
  modules: {
    efix: efixStore
  }
})