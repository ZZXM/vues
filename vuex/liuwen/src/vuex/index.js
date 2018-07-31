import Vue from 'vue';
import Vuex from 'vuex';

import state from './cart/state';
import mutations from './cart/mutations';
import getters from './cart/getters';
import actions from './cart/actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
