<template>
  <div class="createModel">
        <table>
            <tr>
                <td><label>Firstname</label></td>
                <td><input v-model="Firstname" class="input" type="text" placeholder="Enter Firstname"></td>
            </tr>
            <tr>
                <td><label>Lastname</label></td>
                <td><input v-model="Lastname" class="input" type="text" placeholder="Enter Lastname"></td>
            </tr>
            <tr>
                <td><label>Email</label></td>
                <td><input v-model="Email" class="input" type="text" placeholder="Enter Email"></td>
            </tr>
            <tr>
                <td><label>PhoneNo</label></td>
                <td><input v-model="PhoneNo" class="input" type="text" placeholder="Enter PhoneNo"></td>
            </tr>
            <tr>
                <td><label>AddresLine1</label></td>
                <td><input v-model="AddresLine1" class="input" type="text" placeholder="Enter AddresLine1"></td>
            </tr>
            <tr>
                <td><label>AddresLine2</label></td>
                <td><input v-model="AddresLine2" class="input" type="text" placeholder="Enter AddresLine2"></td>
            </tr>
            <tr>
                <td><label>Zip</label></td>
                <td><input v-model="Zip" class="input" type="text" placeholder="Enter Zip"></td>
            </tr>
            <tr>
                <td><label>City</label></td>
                <td><input v-model="City" class="input" type="text" placeholder="Enter City"></td>
            </tr>
            <tr>
                <td><label>Country</label></td>
                <td><input v-model="Country" class="input" type="text" placeholder="Enter Country"></td>
            </tr>
            <tr>
                <td><label>BirthDate</label></td>
                <td><input v-model="BirthDate" class="input" type="date"></td>
            </tr>
            <tr>
                <td><label>Nationality</label></td>
                <td><input v-model="Nationality" class="input" type="text" placeholder="Enter Nationality"></td>
            </tr>
            <tr>
                <td><label>Height</label></td>
                <td><input v-model="Height" class="input" type="number" placeholder="Enter Height"></td>
            </tr>
            <tr>
                <td><label>ShoeSize</label></td>
                <td><input v-model="ShoeSize" class="input" type="number" placeholder="Enter ShoeSize"></td>
            </tr>
            <tr>
                <td><label>HairColor</label></td>
                <td><input v-model="HairColor" class="input" type="text" placeholder="Enter HairColor"></td>
            </tr>
            <tr>
                <td><label>EyeColor</label></td>
                <td><input v-model="EyeColor" class="input" type="text" placeholder="Enter EyeColor"></td>
            </tr>
            <tr>
                <td><label>Comments</label></td>
                <td><input v-model="Comments" class="input" type="text" placeholder="Enter Comments"></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input v-model="Password" class="input" type="text" placeholder="Enter Password"></td>
            </tr>
        </table>
        <button @click="CreateModel">Create</button>
    </div>
</template>

<script>export default {
name: 'ModelsList',
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
        Password: ''
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
                    height: this.Height,
                    shoeSize: this.ShoeSize,
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
                if(res.status == 200)
                {
                    console.log(res);
                    return res.json();
                }
            })
            .then(responseJson => { 
                console.log(responseJson);
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
</style>