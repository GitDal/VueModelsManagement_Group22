<template>
  <div class="manager">
    <h1>Manager page</h1>
      <!--Her skal der være links i think (måske navbar)-->
    <JobsList></JobsList>
    <ModelsList />
  </div>
</template>

<script>
    // @ is an alias to /src
    import ModelsList from '@/components/ModelsList.vue'
    import JobsList from '@/components/JobsListForManager.vue'

    export default {
        name: 'Manager',
        components: {
            ModelsList,
            JobsList
        }
    }
</script>