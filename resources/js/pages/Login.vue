<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    id="email"
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="auth.data.email"
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    id="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="auth.data.password"
                />
            </div>
            <button type="button" class="btn btn-primary" @click="LOGIN(auth)">Login</button>
        </form>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data () {
            return {
                auth: {
                    method: 'post',
                    url: '/auth/login',
                    data: {
                        email: '',
                        password: ''
                    }
                }
            }
        },
        computed: mapGetters([
            'isLoggedIn'
        ]),
        methods: {
            ...mapActions(['LOGIN'])
        },
        mounted () {
            this.$nextTick( () => {
                if (this.isLoggedIn) {
                    this.$router.push('/')
                }
            })
        }
    }
</script>
