import Vue from 'vue'
import Vuex from 'vuex'

import AuthStore from '@/modules/auth/auth.store'

Vue.use(Vuex)

const state = {
  isConnected: false,
  socketMessage: ''
}

const mutations = {
  SOCKET_connect (state) {
    state.isConnected = true
  },
  SOCKET_disconnect (state) {
    state.isConnected = false
  },
  SOCKET_messagechannel (state, message) {
    state.socketMessage = message
  },
  DISCONNECT (state) {
    this._vm.$socket.close()
  }
}

const actions = {
  disconnect ({ commit }) {
    commit('DISCONNECT')
  }
}

const getters = {}

export default new Vuex.Store({
  modules: {
    AuthStore
  },
  state,
  mutations,
  actions,
  getters
})
