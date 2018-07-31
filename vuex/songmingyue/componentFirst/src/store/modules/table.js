export default {
  state: {
    table: [
      {text: '衣服', money: 500, value: '1'},
      {text: '裤子', money: 500, value: '2'},
      {text: '鞋子', money: 500, value: '3'},
      {text: '帽子', money: 500, value: '4'}
    ],
    num: 0
  },
  mutations: {
    delete_shopping (state, sta) { // 这里的state对应着上面这个state
      for (let i in state.table) {
        if (sta === state.table[i].value) {
          state.table.splice(i, 1)
        }
      }
      // 你还可以在这里执行其他的操作改变state
    },
    add_shopping (state, sta) { // 这里的state对应着上面这个state
      state.table.push(sta)
      // 你还可以在这里执行其他的操作改变state
    }
  },
  actions: {
    addShopping (context, sta) { // 这里的context和我们使用的$store拥有相同的对象和方法
      console.log(sta)
      context.commit('add_shopping', sta)
      // 你还可以在这里触发其他的mutations方法
    },
    deletesShopping (context, sta) {
      console.log(sta)
      context.commit('delete_shopping', sta)
    }
  },
  getters: {
    table_num (state) { // 这里的state对应着上面这个state
      state.num = 0
      for (let j = 0; j < state.table.length; j++) {
        state.num += state.table[j].money - 0
      }
      return state.num
    }
  }
}
