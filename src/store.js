import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {
      nombre: 'Xavier Acosta Polo',
      rol: 'Admin'
    }
  },
  mutations: {
    test: function (state, payload) {
      state.usuario.nombre = payload.usuario
    }
  },
  actions: {

  }
})
