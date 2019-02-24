<template>
  <div>
    <div class="row pt-2">
      <div class="col-lg-12">
        <b-table bordered hover
          :items="listaTiempos"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
        />
      </div>
    </div>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="listaTiempos.length"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListarTiempos',
  data: function () {
    return {
      currentPage: 1,
      perPage: 5,
      fields: [
        {
          key: 'fecha',
          label: 'Fecha',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'hora',
          label: 'Horas',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        }]
    }
  },
  created: function () {
    // console.log('Creacion')
    this.$store.dispatch('cargarTiempos', this.$route.params.id)
  },
  mounted: function () {
    // console.log('Mounted')
  },
  computed: {
    ...mapGetters(['listaTiempos'])
  },
  methods: {
    ...mapActions(['cargarTiempos'])
  }
}
</script>
