import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const MODIFICAR_USUARIO = 'MODIFICAR_USUARIO'
export const CARGAR_ACTIVIDADES = 'CARGAR_ACTIVIDADES'

export default new Vuex.Store({
  state: {
    usuario: 'xacosta',
    nombre: 'Xavier Acosta Polo',
    rol: 'Admin',
    actividadCurrent: '',
    actividadList: []
  },
  getters: {
    usuario (state) {
      return state.usuario
    },
    listaActividades (state) {
      return state.actividadList
    }
  },
  mutations: {
    [MODIFICAR_USUARIO]: function (state, payload) {
      state.usuario = payload.usuario
      // Vue.set(state.usuario, payload.usuario)
      // state.usuario = { ...state.usuario.nombre, ...payload.usuario }
    },
    [CARGAR_ACTIVIDADES]: function (state, listaActividades) {
      state.actividadList = listaActividades
    }
  },
  actions: {
    modificarUsuario: (context, userName) => {
      setTimeout(() => {
        context.commit('MODIFICAR_USUARIO', { usuario: userName })
      }, 300)
    },
    cargarActividades: (context) => {
      setTimeout(() => {
        var items = []
        items = [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
        context.commit('CARGAR_ACTIVIDADES', items)
      }, 300)
    }
  }
})
