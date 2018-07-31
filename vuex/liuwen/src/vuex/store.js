
export default {
  state: {
    userName: 'liu',
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
 
  mutations: {
    showUserName(state, msg) {
      state.userName = msg;
    },
    increment: state => state.count++,
    decrement: state => state.count--,
  },
  computed: {
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
}

