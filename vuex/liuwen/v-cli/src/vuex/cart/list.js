export default {
  state: {
    //购物车列表
    // cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cart')) : [],
    shop_list: [{
        id: 1,
        name: "鱼香肉丝",
        price: 12,
        num: 0,
        prices: 0
      },
      {
        id: 2,
        name: "宫保鸡丁",
        price: 14,
        num: 0,
        prices: 0
      },
      {
        id: 3,
        name: "土豆丝",
        price: 10,
        num: 0,
        prices: 0
      },
      {
        id: 4,
        name: "米饭",
        price: 2,
        num: 0,
        prices: 0
      }
    ],
    //当前购物车信息
    cartInfos: {
      total_price: 0,
      total_nums: 0
    },

    //当前菜品是否在购物车的状态。在则是对应的索引，不在则是-1
    curIndex: -1
  },
  mutations: {
    add_spNum(state, shop) {
      var indesp = shop.id - 1
      state.shop_list[indesp].num = parseInt(state.shop_list[indesp].num);
      state.shop_list[indesp].num++;
      state.shop_list[indesp].prices = state.shop_list[indesp].num * state.shop_list[indesp].price;
    },
    reduce_spNum(state, shop) {
      var indesp = shop.id - 1
      state.shop_list[indesp].num = parseInt(state.shop_list[indesp].num);
      state.shop_list[indesp].num--;
      state.shop_list[indesp].prices = state.shop_list[indesp].num * state.shop_list[indesp].price
    },
    action_cart(state, shop) {
      var indesp = shop.id - 1;
      state.shop_list[indesp].num = parseInt(state.shop_list[indesp].num);
      state.shop_list[indesp].num = 0;
      state.shop_list[indesp].prices = 0;
    },
    empty_cart(state){
      state.shop_list.forEach(function(item){
        item.num=0
        item.prices=0

      })
    }

  },
  actions: {
    add_sp: ({
      commit
    }, obj) => {
      commit('add_spNum', obj);
    },
    reduce_sp: ({
      commit
    }, obj) => {
      commit('reduce_spNum', obj);
    },
    delete_sp: ({
      commit
    }, obj) => {
      commit('action_cart', obj);
    },
    
  },
  getters: {
    getInfos(state) {
      state.cartInfos.total_price = 0;
      state.cartInfos.total_nums = 0;
      var list = state.shop_list;
      for (var i = 0; i < list.length; i++) {
        state.cartInfos.total_price += list[i].prices
        state.cartInfos.total_nums +=list[i].num
      }
      return state.cartInfos;
    }
  }

}
