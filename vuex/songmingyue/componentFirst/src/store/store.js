/**
 * Created by Administrator on 2017/9/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: ''
  },
  getters: {
    getType: function (state) {
      if (!state.type) {
        state.type = localStorage.getItem('type')
      }
      return state.type
    }
  },
  mutations: {
    // 格式：类型(名字)+处理函数
    // 加1
    changetype (state, type) {
      // console.log(state)//state对象
      state.type = type
    }
  },
  actions: {

  }
})

export default store
