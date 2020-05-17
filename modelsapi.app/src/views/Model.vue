<template>
    <div class="model">
        <h2>Model page</h2>
        <JobsListForModel v-if="hasAccess"></JobsListForModel>
    </div>
</template>

<script>
    // @ is an alias to /src
    import JobsListForModel from '@/components/JobsListForModel.vue'

    export default {
        name: 'Model',
        data() {
            return {
                hasAccess: false
            }
        },
        components: {
            JobsListForModel
        },
        mounted() {
            var id = this.$store.getters.userId;

            if (id == '-1') {
                this.$router.push('/');
            }
            else {
                this.hasAccess = true;
            }
        }
    }
</script>

<style scoped>

</style>