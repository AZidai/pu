import Vue from 'vue'
import store, { initializeState } from './store.js'
import router from './routes.js'
import Main from './Main'

new Vue({
    store,
    router,
    mounted () {
        initializeState()
    },
    components: { Main },
    template: '<Main />'
}).$mount('#app')
