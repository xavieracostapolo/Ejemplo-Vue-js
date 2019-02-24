import ActividadRepository from './ActividadRepository'
import TiempoRepository from './TiempoRepository'

const repositories = {
  actividad: ActividadRepository,
  tiempo: TiempoRepository
  // Agregar otros repositorios
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
