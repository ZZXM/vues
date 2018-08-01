
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



/*   
只能通过mutations改变store的state的状态，state相当于对外的只读属性。（commit）
computed计算属性获取（state）
mapState函数简化(this.$store)获取state的属性的过程
果然需要对state对象进行多次计算，可以用getters对象做集中处理，然后在用store.getters进行调用
mapGetters将store的getters映射到局部计算属性类似于辅助对象mapState，mapMutations
每一个mutation都有一个事件类型type和一个回调函数handler
*/