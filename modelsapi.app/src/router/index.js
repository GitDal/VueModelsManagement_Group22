import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "manager" */ '../views/Login.vue')
    },
    {
        path: '/manager',
        name: 'Manager',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "manager" */ '../views/Manager.vue')
    },
    {
        path: '/model',
        name: 'Model',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "manager" */ '../views/Model.vue')
    },
    {
        path: '/createModel',
        name: 'CreateModel',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "createModel" */ '../views/CreateModel.vue')
    },
    {
        path: '/createManager',
        name: 'CreateManager',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "createManager" */ '../views/CreateManager.vue')
    },
    {
        path: '/createJob',
        name: 'CreateJob',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "createJob" */ '../views/CreateJob.vue')
    }
]

const router = new VueRouter({
    routes
});

export default router