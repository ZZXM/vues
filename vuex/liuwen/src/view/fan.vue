<template>
  <div id="app">
    <h3>Vuex购物车demo</h3>
    <shop-list></shop-list>
    <div>增加</div>
    <cart-list></cart-list>
    <Info-list></Info-list>
  </div>
</template>

<script>
import list from "../components/list.vue";
import cart from "../components/cart.vue";
import Info from "../components/Info.vue";

export default {
  name: "App",
  components: {
    'shop-list':list,
    'cart-list':cart,
    'Info-list':Info
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
