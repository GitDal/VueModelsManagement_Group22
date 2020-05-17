<template>
  <div class="manager">
    <h1>Manager page</h1>
      <!--Her skal der være links i think (måske navbar)-->
      <div>
          <router-link to="/manager/createModel">Create Model</router-link> <br />
          <router-link to="/manager/createManager">Create Manager</router-link>
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
        }
    }
</script>

<style scoped>
    #manager {
        margin: 5px;
    }
</style>