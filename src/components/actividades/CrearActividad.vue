<template>
  <div>
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-8">
        <b-form-input v-model="txtActividad" type="text" placeholder="Ingresar descripcion de la actividad" />
      </div>
      <div class="col-lg-4">
        <b-button variant="primary">Crear Actividad</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrearACtividad',
  data: function () {
    return {
      txtActividad: ''
    }
  }
}
</script>
