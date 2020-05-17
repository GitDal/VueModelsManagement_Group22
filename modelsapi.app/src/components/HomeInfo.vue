<template>
    <div class="Home">
        <div>
            <h5 style="text-decoration: underline">About this project</h5>
            <p>This SPA-website was developed with Vue.js, and with the use of the following tools:</p>
            <div>
                <p><b>Vuex:</b><span> used in managing the state reg. logged-in users via a store</span></p>
                <p><b>Vee-Validate:</b><span> used in functionality reg. validating form-input</span></p>
                <p><b>moment.js:</b><span> used in creating/formatting dateTime-strings</span></p>
                <p><b>bootstrap (bootstrap-vue):</b><span> used in styling tables</span></p>
            </div>
        </div>
        <div>
            <h5 style="text-decoration: underline">How to use</h5>
            <p>
                Use Login-page to sign-in to either a Manager-account or Model-account. <br />
            </p>
            <p>
                The Manager-Account has access to the Manager-page, where you are able to create different entities;
                Models, Managers & Jobs, and are able to see a list of all jobs (on each job you can add/remove models as you wish)
            </p>
            <p>
                The Model-Accounts has access to the Model-page, where you are able to see a list of all the jobs the currently logged-in Model has.
                On each job you are able to add an expense (with an amount and a note).
            </p>
        </div>
    </div>
</template>

<style scoped>
    div {
        padding: 2% 10%
    }
</style>