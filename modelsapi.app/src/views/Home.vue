<template>
    <div class="login">
        <h1>Home page</h1>
        <HomeInfo></HomeInfo>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeInfo from '@/components/HomeInfo.vue'

    export default {
        name: 'Login',
        components: {
            HomeInfo
        }
    }
</script>