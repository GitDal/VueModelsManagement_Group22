<template>
    <div class="model">
        <h2>Model page</h2>
        <JobsListForModel></JobsListForModel>
    </div>
</template>

<script>
    // @ is an alias to /src
    import JobsListForModel from '@/components/JobsListForModel.vue'

    export default {
        name: 'Model',
        components: {
            JobsListForModel
        }
    }
</script>

<style scoped>

</style>