<template>
  <div>
    <b-card header-tag="header" footer-tag="footer" header-bg-variant="info" header-text-variant="white">
      <h6 slot="header" class="mb-0">Actividades.</h6>
      <crear-actividad/>
      <listar-actividad/>
    </b-card>
  </div>
</template>

<script>
import CrearActividad from './CrearActividad'
import ListarActividades from './ListarActividades'

export default {
  name: 'Actividad',
  props: {

  },
  data: function () {
    return {

    }
  },
  components: {
    'crear-actividad': CrearActividad,
    'listar-actividad': ListarActividades
  }
}
</script>
