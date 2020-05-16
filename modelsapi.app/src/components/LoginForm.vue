<template>
    <div class="loginForm">
        <table>
            <tr>
                <td><label>Name</label></td>
                <td><input v-model="username" class="input" type="text" placeholder="Enter Email"></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input v-model="password" class="input" type="password" placeholder="Enter Password"></td>
            </tr>
        </table>
        <button @click="formSubmit">Login</button>
        <p>{{statusMsg}}</p>

    </div>
</template>

<script>export default {
name: 'LoginForm',
    data(){
        return{
        username: '',
        password: '',
        statusMsg: '',
        modelId: ''
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
                {
                    let jwtJson = this.parseJwt(token.jwt);
                    this.statusMsg = 'Sucessful';
                    this.$store.commit('login', jwtJson.ModelId);
                    this.$router.push('/'); // Redirect to home ('/')
                }
            })
            .catch(error => console.error('Error:', error));
        },
        parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            console.log(jsonPayload);

            return JSON.parse(jsonPayload);
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table{
        text-align: left;
        margin: 2% auto 2% auto;
    }
</style>