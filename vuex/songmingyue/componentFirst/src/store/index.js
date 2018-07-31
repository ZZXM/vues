import Vue from 'vue'
import Vuex from 'vuex'
import tables from './modules/table.js'
import educations from './modules/education.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    education: educations,
    table: tables
  }
})
