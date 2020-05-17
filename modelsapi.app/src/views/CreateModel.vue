<template>
<div>
    <h2>Create Model</h2>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(CreateModel)">
        <table>
            <tr>
                <td><label>Firstname*</label></td>
                <td>
                    <ValidationProvider name="firstname" rules="required" v-slot="{ errors }">
                        <input v-model="Firstname" class="input" type="text" placeholder="Enter Firstname">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Lastname*</label></td>
                <td>
                    <ValidationProvider name="lastname" rules="required" v-slot="{ errors }">
                        <input v-model="Lastname" class="input" type="text" placeholder="Enter Lastname">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Email*</label></td>
                <td>
                    <ValidationProvider name="email" rules="email|required" v-slot="{ errors }">
                        <input v-model="Email" class="input" type="text" placeholder="Enter Email">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>PhoneNo*</label></td>
                <td>
                    <ValidationProvider name="phone number" rules="required" v-slot="{ errors }">
                        <input v-model="PhoneNo" class="input" type="text" placeholder="Enter PhoneNo">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>AddresLine1*</label></td>
                <td>
                    <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                        <input v-model="AddresLine1" class="input" type="text" placeholder="Enter AddresLine1">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>AddresLine2</label></td>
                <td><input v-model="AddresLine2" class="input" type="text" placeholder="Enter AddresLine2"><p></p></td>
            </tr>
            <tr>
                <td><label>Zip*</label></td>
                <td>
                    <ValidationProvider name="zip" rules="min:4|required" v-slot="{ errors }">
                        <input v-model="Zip" class="input" type="text" placeholder="Enter Zip">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>City*</label></td>
                <td>
                    <ValidationProvider name="city" rules="required" v-slot="{ errors }">
                        <input v-model="City" class="input" type="text" placeholder="Enter City">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Country*</label></td>
                <td>
                    <ValidationProvider name="country" rules="required" v-slot="{ errors }">
                        <input v-model="Country" class="input" type="text" placeholder="Enter Country">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>BirthDate*</label></td>
                <td>
                    <ValidationProvider name="birthdate" rules="required" v-slot="{ errors }">
                        <input v-model="BirthDate" class="input" type="date">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Nationality*</label></td>
                <td>
                    <ValidationProvider name="nationality" rules="required" v-slot="{ errors }">
                        <input v-model="Nationality" class="input" type="text" placeholder="Enter Nationality">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Height*</label></td>
                <td>
                    <ValidationProvider name="height" rules="required" v-slot="{ errors }">
                        <input v-model="Height" class="input" type="number" placeholder="Enter Height">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>ShoeSize*</label></td>
                <td>
                    <ValidationProvider name="shoe size" rules="required" v-slot="{ errors }">
                        <input v-model="ShoeSize" class="input" type="number" placeholder="Enter ShoeSize">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>HairColor*</label></td>
                <td>
                    <ValidationProvider name="haircolor" rules="required" v-slot="{ errors }">
                        <input v-model="HairColor" class="input" type="text" placeholder="Enter HairColor">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>EyeColor*</label></td>
                <td>
                    <ValidationProvider name="eye color" rules="required" v-slot="{ errors }">
                        <input v-model="EyeColor" class="input" type="text" placeholder="Enter EyeColor">
                        <p>{{errors[0]}}</p>
                    </ValidationProvider>
                </td>
            </tr>
            <tr>
                <td><label>Comments*</label></td>
                <td><input v-model="Comments" class="input" type="text" placeholder="Enter Comments"><p></p></td>
            </tr>
            <tr>
                <td><label>Password*</label></td>
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
name: 'ModelData',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
        Firstname: '',
        Lastname: '',
        Email: '',
        PhoneNo: '',
        AddresLine1: '',
        AddresLine2: '',
        Zip: '',
        City: '',
        Country: '',
        BirthDate: Date,
        Nationality: '',
        Height: Number,
        ShoeSize: Number,
        HairColor: '',
        EyeColor: '',
        Comments: '',
        Password: '',
        statusMsg: ''
        }
    },
    methods:{
        CreateModel(){
            fetch('https://localhost:44368/api/Models', { 
                method: 'POST',
                body: JSON.stringify({
                    firstname: this.Firstname,
                    lastname: this.Lastname,
                    email: this.Email,
                    phoneNo: this.PhoneNo,
                    addresLine1: this.AddresLine1,
                    addresLine2: this.AddresLine2,
                    zip: this.Zip,
                    city: this.City,
                    country: this.Country,
                    birthDate: this.BirthDate,
                    nationality: this.Nationality,
                    height: parseInt(this.Height),
                    shoeSize: parseInt(this.ShoeSize),
                    hairColor: this.HairColor,
                    eyeColor: this.EyeColor,
                    comments: this.Comments,
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
                    this.statusMsg = 'Succesfully created model';
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