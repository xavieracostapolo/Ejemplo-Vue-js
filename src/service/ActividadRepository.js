import Repository from './Repository'

const resource = '/Actividad'

export default {
  get (idEmpleado) {
    return Repository.get(`${resource}/${idEmpleado}`)
  },
  addActividad (actividad) {
    return Repository.post(`${resource}`, actividad)
  }
}
