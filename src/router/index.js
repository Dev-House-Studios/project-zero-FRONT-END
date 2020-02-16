import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '*',
  //   redirect: '/404',
  //   name: '404'
  // },
  {
    path: '/',
    component: () => import('../components/partials/TheBase'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
