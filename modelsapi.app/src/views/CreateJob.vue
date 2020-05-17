<template>
    <div>
    <h2>Create Job</h2>
    <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(CreateJob)">
        <table>
            <tr>
                <td><label>Customer*</label></td>
                <td>
                    <ValidationProvider name="customer" rules="required" v-slot="{ errors }">
                        <input v-model="Customer" class="input" type="text" placeholder="Enter Customer">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>StartDate*</label></td>
                <td>
                    <ValidationProvider name="startDate" rules="required" v-slot="{ errors }">
                        <input v-model="StartDate" class="input" type="date" placeholder="Enter Start Date">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>   
            <tr>
                <td><label>Days*</label></td>
                <td>
                    <ValidationProvider name="days" rules="required" v-slot="{ errors }">
                        <input v-model="Days" class="input" type="number" placeholder="Enter Days">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Location*</label></td>
                <td>
                    <ValidationProvider name="location" rules="required" v-slot="{ errors }">
                        <input v-model="Location" class="input" type="text" placeholder="Enter Location">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Comments</label></td>
                <td><input v-model="Comments" class="input" type="text" placeholder="Enter Comments"><p></p></td>
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
import { required } from 'vee-validate/dist/rules';

// RULES
extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
name: 'JobData',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
        Customer: '',
        StartDate: '',
        Days: '',
        Location: '',
        Comments: '',
        statusMsg: ''
        }
    },
    methods:{
        CreateJob(){
            fetch('https://localhost:44368/api/Jobs', { 
                method: 'POST',
                body: JSON.stringify({
                    customer: this.Customer,
                    startDate: this.StartDate,
                    days: parseInt(this.Days),
                    location: this.Location,
                    comments: this.Comments
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
                    this.statusMsg = 'Succesfully created job';
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
    },
    mounted() {
            var id = this.$store.getters.userId;

            if (id !== '-1') {
                this.$router.push('/');
            }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p{
        color:red;
    }
    table{
        text-align: left;
        margin: 2% auto 2% auto;
    }
    td{
        min-width: 100px;
    }
</style>