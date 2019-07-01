import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Login from './pages/Login'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/login', component: Login}
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
