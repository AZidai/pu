<template>
    <div>
        Home Page -> Is Logged In: {{ isLoggedIn }} >>>
        <span @click="LOGOUT()">{{ user.name }} ---</span>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'isLoggedIn'
            ]),
            ...mapState(['user'])
        },
        methods: {
            ...mapActions(['LOGOUT'])
        }
    }
</script>
