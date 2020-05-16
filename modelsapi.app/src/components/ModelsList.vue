<template>
<div>
    <div v-if="isLoading">
        <p>Loading content..</p>
    </div>
        <div v-for="model in models" :key="model.efModelId">
        <p>{{model.email}}</p>
    </div>
</div>
</template>

<script>export default {
name: 'ModelsList',
    data(){
        return{
        isLoading: true,
        message: '',
        models: []
        }
    },
    methods:{
        GetModels(){
            fetch('https://localhost:44368/api/Models', { 
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json' 
                    }})
            .then(res => {
                if(res.status == 200)
                {
                    return res.json();
                }
            })
            .then(responseJson => { 
                this.models = responseJson;
                this.isLoading = false;
            })
            .catch(error => {
                this.isLoading = false;
                this.message = 'Something bad happened ' + error;
            });
        }
    },
    mounted(){
        this.GetModels();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>