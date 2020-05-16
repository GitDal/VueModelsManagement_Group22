<template>
  <div class="manager">
    <h1>Manager page</h1>
    <ModelsList />
  </div>
</template>

<script>
    // @ is an alias to /src
    import ModelsList from '@/components/ModelsList.vue'

    export default {
        name: 'Manager',
        components: {
            ModelsList
        }
    }
</script>