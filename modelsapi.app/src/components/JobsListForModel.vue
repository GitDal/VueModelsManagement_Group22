<template>
    <div>
        <div v-if="isLoading">
            <p>Loading content..</p>
        </div>
        <b-table-simple responsive="true" hover striped bordered>
            <b-thead>
                <b-tr>
                    <b-td>Customer</b-td>
                    <b-td>Start Date</b-td>
                    <b-td>Days</b-td>
                    <b-td>Location</b-td>
                    <b-td>Comments</b-td>
                    <b-td></b-td>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="job in jobs" :key="job.efJobId">
                    <b-td>{{ job.customer }}</b-td>
                    <b-td>{{ job.startDate }}</b-td>
                    <b-td>{{ job.days }}</b-td>
                    <b-td>{{ job.location }}</b-td>
                    <b-td>{{ job.comments }}</b-td>
                    <b-td>
                        <table>
                            <tr>
                                <td><label>Add Expense</label></td>
                                <td><input v-model="expenses[{{ job.efJobId }}]" class="input" type="number" placeholder="Enter Expense"></td>
                            </tr>
                        </table>
                        <button @click="addExpense({{ job.efJobId }})">Add Expense</button>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
export default {
    name: 'JobsListForModel',
    data() {
        return {
            isLoading: true,
            message: '',
            jobs: []
        }
    },
    methods: {
        addExpense(jobId) {
            let expenseAmount = this.expenses[jobId];

            fetch('https://localhost:44368/api/Expenses', { 
                method: 'POST',
                body: JSON.stringify({
                    modelId: this.getModelId(),
                    jobId: jobId,
                    date: new Date().toLocaleDateString,
                    text: "string",
                    amount: expenseAmount
                }),
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
                console.log(responseJson);
            })
            .catch(error => {
                this.message = 'Something bad happened ' + error;
            });

        }
    },
    computed: {
        getModelId() {
            return this.$store.getters.userId;
        }
    },
    mounted(){
        fetch('https://localhost:44368/api/Jobs', { 
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
                console.log(responseJson);
                this.jobs = responseJson;
                this.isLoading = false;
            })
            .catch(error => {
                this.isLoading = false;
                this.message = 'Something bad happened ' + error;
            });
    }
}
</script>

<style scoped>

    #table {
        text-decoration-color: aqua;
    }

</style>