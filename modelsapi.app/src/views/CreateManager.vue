<template>
<div>
    <h2>Create Manager</h2>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(CreateManager)">
        <table>
            <tr>
                <td><label>Firstname* </label></td>
                <td>
                    <ValidationProvider name="firstname" rules="min:1|required" v-slot="{ errors }">
                        <input v-model="Firstname" class="input" type="text" placeholder="Enter Firstname">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Lastname* </label></td>
                <td>
                    <ValidationProvider name="lastname" rules="min:1|required" v-slot="{ errors }">
                        <input v-model="Lastname" class="input" type="text" placeholder="Enter Lastname">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>   
            <tr>
                <td><label>Email* </label></td>
                <td>
                    <ValidationProvider name="email" rules="email|required" v-slot="{ errors }">
                        <input v-model="Email" class="input" type="text" placeholder="Enter Email">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Password* </label></td>
                <td>
                    <ValidationProvider name="password" rules="min:6|required" v-slot="{ errors }">
                        <input v-model="Password" class="input" type="text" placeholder="Enter Password">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
                
        </table>
        <button type="submit">Create</button>
        <p>{{statusMsg}}</p>
    </form>
  </ValidationObserver>
</div>
</template>

<script>
//Validation imports
import { ValidationObserver } from 'vee-validate'
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

// RULES
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', email);
extend('min', {
  ...min,
  message: 'Must have at least {length} characters'
});

export default {
name: 'ManagerData',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
        statusMsg: ''
        }
    },
    methods:{
        CreateManager(){
            fetch('https://localhost:44368/api/Managers', { 
                method: 'POST',
                body: JSON.stringify({
                    firstname: this.Firstname,
                    lastname: this.Lastname,
                    email: this.Email,
                    password: this.Password
                    }),
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json' 
                    }})
            .then(res => {
                if(res.status !== 201)
                {
                    this.statusMsg = 'Unsuccesful';
                }
                else{
                    this.statusMsg = 'Succesfully created manager';
                }
            })
            .catch(error => {
                console.error(error);
            });
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
    td{
        min-width: 100px;
    }
</style>