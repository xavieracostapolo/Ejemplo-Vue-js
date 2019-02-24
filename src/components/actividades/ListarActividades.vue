<template>
  <div>
    <div class="row pt-2">
      <div class="col-lg-12">
        <b-table bordered hover
          :items="listaActividades"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
        >
          <template slot="id" slot-scope="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <b-button variant="info" size="sm" :to="{ name: 'tiempos', params: { id: data.item.id } }">Registrar Tiempos</b-button>
          </template>
        </b-table>
      </div>
    </div>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="listaActividades.length"
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
  name: 'ListarActividades',
  data: function () {
    return {
      currentPage: 1,
      perPage: 5,
      fields: [
        {
          key: 'id',
          label: 'Acciones',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'descripcion',
          label: 'Descripción',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        }]
    }
  },
  created: function () {
    // console.log('Creacion')
    this.$store.dispatch('cargarActividades')
  },
  mounted: function () {
    // console.log('Mounted')
  },
  computed: {
    ...mapGetters(['listaActividades'])
  },
  methods: {
    ...mapActions(['cargarActividades'])
  }
}
</script>
