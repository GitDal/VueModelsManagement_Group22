<template>
    <div>
        <table>
            <tr>
                <td><label>Model:</label></td>
                <td><input v-model="modelId" class="input" type="number" placeholder="Enter Model-Id"></td>
            </tr>
        </table>
        <div style="margin: 5px">
            <button @click="addModel"> add </button>
            <button @click="deleteModel"> remove </button>
        </div>
        <p>{{ statusMsg }}</p>
        
    </div>
</template>

<script>
    export default {
        props: ['jobId'],
        data() {
            return {
                modelId: '',
                statusMsg: ''
            }
        },
        methods: {
            addModel() {
                fetch('https://localhost:44368/api/Jobs/' + this.jobId + '/model/' + this.modelId, { 
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                        }})
                .then(res => {
                    if (res.status == 200 || res.status == 201) {
                        this.statusMsg = res.status + ': Successfully added model with Id-' + this.modelId + ' to the job';
                    }
                    else if (res.status == 403)
                    {
                        this.statusMsg = res.status + ': Access Denied';
                    }
                    else {
                        this.statusMsg = res.status + ': Error';
                    }

                    return res.json();
                })
                .then(responseJson => { 
                    console.log(responseJson);
                })
                .catch(error => {
                    console.error('Something bad happened ', error);
                });
            },
            deleteModel() {
                fetch('https://localhost:44368/api/Jobs/' + this.jobId + '/model/' + this.modelId, { 
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json' 
                        }})
                .then(res => {
                    if (res.status == 200 || res.status == 202) {
                        this.statusMsg = res.status + ': Successfully deleted model with Id-' + this.modelId + ' from the job';
                    }
                    else if (res.status == 403)
                    {
                        this.statusMsg = res.status + ': Access Denied';
                    }
                    else {
                        this.statusMsg = res.status + ': Error';
                    }

                    return res.json();
                })
                .then(responseJson => { 
                    console.log(responseJson);
                })
                .catch(error => {
                    console.error('Something bad happened ', error);
                });
            }
        }
    }
</script>

<style scoped>

    p {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: small;
        margin: 5px;
    }

</style>