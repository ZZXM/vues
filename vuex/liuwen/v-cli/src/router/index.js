import Vue from 'vue'
import Router from 'vue-router'
import dome1 from "../view/dome1.vue";
import fan from "../view/fan.vue";
import dome2 from "../view/dome2.vue";
import dome3 from "../view/dome3.vue";
import dome4 from "../view/dome4.vue";
import dome5 from "../view/dome5.vue";

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
    {
      path: '/dome2',
      component: dome2
    },
    {
      path: '/dome3',
      component: dome3
    },
    {
      path: '/dome4',
      component: dome4
    },
    {
      path: '/dome5',
      component: dome5
    }
  ]
})
