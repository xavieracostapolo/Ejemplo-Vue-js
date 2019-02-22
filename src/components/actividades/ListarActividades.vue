<template>
  <div>
    <div class="row pt-2">
      <div class="col-lg-12">
        <b-table bordered hover :items="listaActividades" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListarActividades',
  data: function () {
    return {

    }
  },
  created: function () {
    console.log('Creacion')
    this.$store.dispatch('cargarActividades')
  },
  mounted: function () {
    console.log('Mounted')
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate Start')
    this.$store.dispatch('cargarActividades')
    console.log('beforeRouteUpdate End')
  },
  methods: {
    ...mapActions(['cargarActividades']),
    ...mapGetters(['listaActividades'])
  }
}
</script>
