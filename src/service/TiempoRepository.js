import Repository from './Repository'

const resource = '/Tiempo'

export default {
  get (idActividad) {
    return Repository.get(`${resource}/${idActividad}`)
  },
  addTiempo (tiempo) {
    return Repository.post(`${resource}`, tiempo)
  }
}
