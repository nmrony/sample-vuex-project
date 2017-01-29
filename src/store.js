import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex({
  state: {
    users:[
      { id: 1, name: 'Nur', registered: false },
      { id: 2, name: 'Afifa', registered: false },
      { id: 3, name: 'Rana', registered: false },
      { id: 4, name: 'Raihan', registered: false },
      { id: 5, name: 'Farhad', registered: false },
    ]
  },

});
