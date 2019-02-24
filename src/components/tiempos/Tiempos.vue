<template>
  <div>
    <b-card header-tag="header" footer-tag="footer" header-bg-variant="info" header-text-variant="white">
      <h6 slot="header" class="mb-0">Tiempos.</h6>
      <crear-tiempo/>
      <listar-tiempo/>
    </b-card>
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
