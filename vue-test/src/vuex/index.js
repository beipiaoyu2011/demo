import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import {VueLocalSync} from 'vuex-local-sync';


const LocalSyncPlugin = new VueLocalSync({
  key: 'test',
  storage: localStorage
});


const key = 'alex';

const myPlugin = store => {
  const count = JSON.parse(localStorage.getItem(key)) || {};
  store.replaceState(count);
  store.subscribe((mutation, state) => {
    console.log(mutation, state);
    localStorage.setItem(key, JSON.stringify(state));
  });
};


const mutations = {
  setName: (state, payload) => {
    state.b = payload;
  }
}

const store = new Vuex.Store({
  state: {},
  plugins: [myPlugin, LocalSyncPlugin.plugin],
  mutations
});

export default store;
