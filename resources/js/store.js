import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './routes.js'

Vue.use(Vuex)

const state = {
    token: '',
    user: {}
}

const getters = {
    isLoggedIn: state => {
        return state.token ? true : false
    }
}

const mutations = {
    setToken: (state, payload) => {
        state.token = payload.access_token
    },
    setUser: (state, payload) => {
        state.user = payload
    },
    logout: state => {
        state.token = ''
        state.user = {}
    }
}

const actions = {
    LOGIN ({ dispatch, commit, state }, payload) {
        return dispatch('API', payload).then((response) => {
            if (response.status === 200) {
                commit('setToken', response.data.data.auth)
                commit('setUser', response.data.data.user)
                router.push('/')
            }
        })
    },
    LOGOUT ({ commit }) {
        commit('logout')
    },
    API ({ state }, payload) {
        return axios({
            method: payload.method,
            url: payload.url,
            data: payload.data,
            headers: {
                Authorization: "Bearer " + state.token
            }
        }).then(response => {
            return response
        }).catch((error) => {
            console.log(error)
        })
    }
}

const store = new Vuex.Store({
    state, getters, mutations, actions
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
})

export function initializeState() {
    if (localStorage.getItem('store')) {
        store.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
    }
}

export default store
