<template>
  <div id="app">
      <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/manager" v-if="loggedIn && isManager">Manager</router-link>
          <router-link to="/model" v-if="loggedIn && isModel">Manager</router-link>|
          <router-link to="/login" v-if="!loggedIn">Login</router-link>
          <a to="/" v-if="loggedIn" @click="logout">Logout</a>
      </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        },
        computed: {
            loggedIn() {
                return this.$store.getters.isLoggedIn;
            },
            isManager() {
                let id = this.$store.getters.userId;

                return (id == '-1');
            },
            isModel() {
                let id = this.$store.getters.userId;

                return (id !== '-1' && id !== 'unknown');
            }
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
