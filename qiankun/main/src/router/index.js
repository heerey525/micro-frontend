import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue'),
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404'
    },
    component: ErrorPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const LOGIN_PAGE_NAME = 'login'

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('self_token')
//   if (!token && to.name != LOGIN_PAGE_NAME) {
//     next({ name: LOGIN_PAGE_NAME })
//   } else {
//     next();
//   }
// })

export default router