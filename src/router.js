import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Actividad from './components/actividades/Actividad.vue'
import Tiempos from './components/tiempos/Tiempos.vue'
import NotFoundView from './views/NotFoundView.vue'
import Test from './components/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // Modificar la url para seo
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      component: NotFoundView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/actividad/:id?',
      name: 'actividad',
      component: Actividad,
      props: true
    },
    {
      path: '/tiempos',
      name: 'tiempos',
      component: Tiempos
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
