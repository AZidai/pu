import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {path: '/', component: Home},
        {path: '/home', component: Home}
    ]
})

new Vue({
    router
}).$mount('#app')
