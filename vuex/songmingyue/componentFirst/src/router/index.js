import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/view/test'
import teste from '@/view/teste'
import search from '@/view/search'
import radio from '@/view/radio'
import item from '@/view/item'
import shopping from '@/view/shopping'
import fontsize from '@/view/fontsize'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/teste',
      name: 'teste',
      component: teste
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/fontsize',
      name: 'fontsize',
      component: fontsize
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    }
  ]
})
