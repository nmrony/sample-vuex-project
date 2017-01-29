import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[
      { id: 1, name: 'Nur', registered: false },
      { id: 2, name: 'Afifa', registered: false },
      { id: 3, name: 'Rana', registered: false },
      { id: 4, name: 'Raihan', registered: false },
      { id: 5, name: 'Farhad', registered: false },
    ]
  },
  getters: {
    unregisteredUsers(state) {
      return state.users.filter(user => !user.registered);
    },
    registeredUsers(state) {
      return state.users.filter(user => user.registered)
    }
  },
  mutations: {
    registerUser(state, userId) {
      const user = state.users.find(user => user.id === userId);
      user.registered = true;
    },
    unregisterUser(state, payload) {
      const user = state.users.find(user => user.id === payload.userId);
      user.registered = false;
    }
  },
  actions: {
    register(contex, userId) {
      console.log("I will call mutation after 3 seconds");
      setTimeout(() => {
        contex.commit('registerUser', userId)
      }, 3000);
    }
  }
});
