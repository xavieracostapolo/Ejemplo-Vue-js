<template>
  <div>
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-8">
        <b-form-input v-model="txtActividad" @keyup.enter=add ref="txtActividad" type="text" placeholder="Ingresar descripcion de la actividad" />
      </div>
      <div class="col-lg-4">
        <b-button variant="primary" v-on:click=add>Crear Actividad</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CrearACtividad',
  data: function () {
    return {
      txtActividad: ''
    }
  },
  methods: {
    add () {
      if (this.txtActividad === '') {
        alert('La descripcion de la actividad no puede ser vacia')
      } else {
        this.$store.dispatch('agregarActividad', this.txtActividad)
          .then((res) => {
            this.txtActividad = ''
            this.$refs.txtActividad.focus()
            alert('Actividad agregada')
          })
      }
    },
    ...mapActions(['agregarActividad'])
  }
}
</script>
