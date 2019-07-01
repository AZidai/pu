<template>
    <div>
        Home Page -> Is Logged In: {{ isLoggedIn }} >>>
        <span style="cursor: pointer;" @click="logout()">{{ user.name }} ---</span>
        -> <span @click="getMe()">me = {{ me }}</span>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'

    export default {
        data () {
            return {
                me: 'NOBODY',
                auth: {
                    method: 'post',
                    url: '',
                    data: {}
                }
            }
        },
        computed: {
            ...mapGetters([
                'isLoggedIn'
            ]),
            ...mapState(['user'])
        },
        methods: {
            ...mapActions(['LOGOUT', 'API']),
            getMe () {
                this.auth.url = 'api/me'

                this.API(this.auth).then((response) => {
                    this.me = response.data.data.name
                })
            },
            logout () {
                this.auth.url = 'api/logout'

                this.LOGOUT(this.auth).then((response) => {
                    this.me = ''
                    console.log('logout r=', response)
                })
            }
        }
    }
</script>
