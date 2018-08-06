import Vue from 'vue'
import Router from 'vue-router'
import dome1 from "../view/dome1.vue";
import fan from "../view/fan.vue";
// import list from "../components/list.vue";


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/dome1',
      component: dome1
    },
    {
      path: '/fan',
      component: fan
    },
    // {
    //   path: '/list',
    //   component: list
    // }
  ]
})
