import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

// Filtro que se ejecuta antes de ir al destino
router.beforeEach((to, from, next) => {
  // console.log(to.name) // Para donde voy
  // console.log(from.name) // De donde vengo
  next() // Funcion obligatoria para que siga el request
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
