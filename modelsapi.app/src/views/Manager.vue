<template>
  <div class="manager">
    <h1>Manager page</h1>
      <!--Her skal der v�re links i think (m�ske navbar)-->
    <div>
        <router-link to="/manager/createModel">Create Model</router-link> <br />
        <router-link to="/manager/createManager">Create Manager</router-link> <br />
        <router-link to="/manager/createJob">Create Job</router-link>
    </div>
    <JobsList></JobsList>
  </div>
</template>

<script>
    // @ is an alias to /src
    import JobsList from '@/components/JobsListForManager.vue'

    export default {
        name: 'Manager',
        components: {
            JobsList
        },
        mounted() {
            var id = this.$store.getters.userId;

            if (id !== '-1') {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    #manager {
        margin: 5px;
    }
</style>