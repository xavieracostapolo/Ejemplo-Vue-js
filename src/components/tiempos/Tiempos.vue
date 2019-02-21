<template>
  <div>
    <h1>Tiempos</h1>
    <crear-tiempo />
    <listar-tiempo />
  </div>
</template>

<script>
import CrearTiemposVue from './CrearTiempos.vue'
import ListarTiemposVue from './ListarTiempos.vue'

export default {
  name: 'Tiempos',
  components: {
    'crear-tiempo': CrearTiemposVue,
    'listar-tiempo': ListarTiemposVue
  }
}
</script>
