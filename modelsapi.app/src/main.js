import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'


// VALIDATE FROM vee-validate FRAMEWORK //
// import { extend } from 'vee-validate';
// import { required } from 'vee-validate/dist/rules';
// import { ValidationProvider } from 'vee-validate';
// extend('required', {
//   ...required,
//   message: ' required'
// });
// Vue.component('ValidationProvider', ValidationProvider);
//////////////////////////////////////////

//Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
