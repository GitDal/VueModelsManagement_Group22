import Vue from 'vue';
import Vuex from 'vuex';

// Taget udgangspunkt i:
// medium.com/front-end-weekly/persisting-user-authentication-with-vuex-in-vue-b1514d5d3278

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        userId: 'unknown'
    },
    mutations: {
        login(state, id) {
            state.isLoggedIn = true;
            state.userId = id;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userId = 'unknown';
        }
    },
    actions: {
        logout({ commit }) {
            localStorage.removeItem('token');
            commit('logout');
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        userId: state => state.userId
    }
})