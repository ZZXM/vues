import Vue from 'vue';
import Vuex from 'vuex';

import list from './cart/list';
import storeer from './cart/storeer';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    list:list,
    storeer:storeer
  }
})
