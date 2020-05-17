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
                    <b-td>Add Expense</b-td>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="job in jobs" :key="job.efJobId">
                    <b-td>{{ job.customer }}</b-td>
                    <b-td>{{ job.startDate }}</b-td>
                    <b-td>{{ job.days }}</b-td>
                    <b-td>{{ job.location }}</b-td>
                    <b-td>{{ job.comments }}</b-td>
                    <b-td><AddExpense :jobId="job.efJobId"></AddExpense></b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
    import AddExpense from '@/components/AddExpense.vue'

export default {
    name: 'JobsListForModel',
    data() {
        return {
            isLoading: true,
            message: '',
            jobs: []
        }
    },
    components: {
        AddExpense
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

</style>