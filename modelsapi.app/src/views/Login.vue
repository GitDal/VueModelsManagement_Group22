<template>
    <div class="login">
        <h1>Login page</h1>
        <LoginForm/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import LoginForm from '@/components/LoginForm.vue'

    export default {
        name: 'Login',
        components: {
            LoginForm
        }
    }
</script>
