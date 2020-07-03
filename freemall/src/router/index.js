import Vue from 'vue'
import VueRouter from 'vue-router'
import cartInfo from '../views/cartInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'cartInfo',
    component: cartInfo
  },
  {
    path: '/addressInfo',
    name: 'addressInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "addressInfo" */ '../views/addressInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
