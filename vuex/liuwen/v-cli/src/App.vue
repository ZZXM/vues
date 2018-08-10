<template>
  <div id="app">
     <router-view></router-view>
     <div class="route-content">
        <router-link to="/dome1" class="item-route">dome1</router-link>
        <router-link to="/fan" class="item-route">fan</router-link>
        <router-link to="/dome2" class="item-route">dome2</router-link>
        <router-link to="/dome3" class="item-route">dome3</router-link>
     </div>
   
  </div>
</template>

<script>
export default {
  name: "App"
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
.route-content{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    display:-webkit-flex;
    align-items: center;
    -wibkit-align-items: center;
    justify-content: center;
    -wibkit-justify-content: center;
}
.route-content .item-route{
  margin: 0 10px;
  min-height: 40px;
  display: inline-block;
  line-height: 40px;
}
</style>
