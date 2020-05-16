<template>
    <div class="loginForm">
    <section class="form">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input v-model="username" class="input" type="text" placeholder="Enter Email">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input v-model="password" class="input" type="password" placeholder="Enter Password">
            </div>
        </div>
        <div class="field">
            <button @click="formSubmit">Login</button>
        </div>
    </section>
    <p>{{statusMsg}}</p>

    </div>
</template>

<script>export default {
name: 'LoginForm',
    data(){
        return{
        username: '',
        password: '',
        statusMsg: ''
        }
    },
    methods:{
        formSubmit(){
            fetch('https://localhost:44368/api/Account/login', {
                method: 'POST',
                body: JSON.stringify({
                      email: this.username,
                       password: this.password}),
                headers: new Headers({
                    'Content-Type': 'application/json'})})
            .then(res => res.json())
            .then((token) => {
                localStorage.setItem("token", token.jwt);
                if(token.jwt == undefined)
                    this.statusMsg = 'Unsucessful';
                else
                    this.statusMsg = 'Sucessful';
            })
            .catch(error => console.error('Error:', error));
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>