import Vue from 'vue'
import Vuex from 'vuex'
import { RepositoryFactory } from './service/RepositoryFactory'

Vue.use(Vuex)

export const MODIFICAR_USUARIO = 'MODIFICAR_USUARIO'
export const CARGAR_ACTIVIDADES = 'CARGAR_ACTIVIDADES'
export const ADD_ACTIVIDAD = 'ADD_ACTIVIDAD'
export const CARGAR_TIEMPOS = 'CARGAR_TIEMPOS'
export const ADD_TIEMPOS = 'ADD_TIEMPOS'

const ActividadRepository = RepositoryFactory.get('actividad')
const TiempoRepository = RepositoryFactory.get('tiempo')

export default new Vuex.Store({
  state: {
    usuario: 'xacosta',
    nombre: 'Xavier Acosta Polo',
    rol: 'Admin',
    actividadCurrent: {},
    actividadList: [],
    tiempoList: []
  },
  getters: {
    usuario (state) {
      return state.usuario
    },
    listaActividades (state) {
      return state.actividadList
    },
    listaTiempos (state) {
      return state.tiempoList
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
    },
    [ADD_ACTIVIDAD]: function (state, actividad) {
      state.actividadCurrent = actividad
    },
    [CARGAR_TIEMPOS]: function (state, listaTiempos) {
      state.tiempoList = listaTiempos
    }
  },
  actions: {
    modificarUsuario: (context, userName) => {
      setTimeout(() => {
        context.commit(MODIFICAR_USUARIO, { usuario: userName })
      }, 300)
    },
    async cargarActividades (context) {
      try {
        const { data } = await ActividadRepository.get(1)
        context.commit(CARGAR_ACTIVIDADES, data)
      } catch (error) {
        console.log('ERROR')
        console.log(error)
      }
    },
    agregarActividad: (context, actividad) => {
      return new Promise((resolve, reject) => {
        ActividadRepository.addActividad({ Descripcion: actividad, EmpleadoId: 1 })
          .then(res => {
            if (res.status === 200) {
              context.commit(ADD_ACTIVIDAD, actividad)
              context.dispatch('cargarActividades')
              resolve(res)
            } else {
              reject(res)
            }
          })
          .catch(e => {
            console.error(e)
            reject(e)
          })
      })
    },
    async cargarTiempos (context, idActividad) {
      try {
        const { data } = await TiempoRepository.get(idActividad)
        context.commit(CARGAR_TIEMPOS, data)
      } catch (error) {
        console.log('ERROR')
        console.log(error)
      }
    },
    agregarHora: (context, tiempo) => {
      return new Promise((resolve, reject) => {
        TiempoRepository.addTiempo({ Fecha: tiempo.fecha, Hora: tiempo.hora, ActividadId: tiempo.actividad })
          .then(res => {
            if (res.status === 200) {
              context.dispatch('cargarTiempos', tiempo.actividad)
              resolve(res)
            } else {
              reject(res)
            }
          })
          .catch(e => {
            console.error(e)
            reject(e)
          })
      })
    }
  }
})
