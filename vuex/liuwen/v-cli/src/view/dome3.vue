<template>
  <div id="app">
    <ZCarousel :initSpeed="20" :itemWidth="700"></ZCarousel>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import { mapState, mapMutations,mapGetters  } from "vuex";
export default {
  name: "App",
  components: {
    ZCarousel:carousel
  },
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
