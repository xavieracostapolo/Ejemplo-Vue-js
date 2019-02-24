<template>
  <div>
    <div class="row justify-content-center align-items-center">
      <label for="txtDate" class="col-sm-1 col-form-label">Fecha:</label>
      <div class="col-lg-4">
        <b-form-input v-model="txtFecha" ref="txtFecha" type="date" placeholder="Fecha" />
      </div>
      <label for="txtHora" class="col-sm-1 col-form-label">Horas:</label>
      <div class="col-lg-4">
        <b-form-input v-model="txtHora" ref="txtHora" type="number" :state="txtHoraState" placeholder="Hora" />
      </div>
      <div class="col-lg-2">
        <b-button variant="primary" v-on:click=add>Agregar Hora</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CrearTiempos',
  data: function () {
    return {
      txtFecha: '',
      txtHora: 0
    }
  },
  computed: {
    txtHoraState () {
      return (this.txtHora >= 1 && this.txtHora <= 8)
    }
  },
  methods: {
    add () {
      if (this.txtFecha === '' || this.txtHora === 0) {
        alert('Diligenciar toda la información')
      } else {
        this.$store.dispatch('agregarHora', { fecha: this.txtFecha, hora: this.txtHora, actividad: this.$route.params.id })
          .then((res) => {
            this.txtFecha = ''
            this.txtHora = 0
            this.$refs.txtFecha.focus()
            alert('Hora agregada')
          })
      }
    },
    ...mapActions(['agregarActividad'])
  }
}
</script>
