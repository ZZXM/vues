<template>
  <div id="app">
    <carouselT :initSpeed="20" :initialInterval="3" :itemWidth="375" :itemheight="667" :carouselImg="sliders"></carouselT>
  </div>
</template>

<script>
import carouselT from "../components/carousel2.vue";
export default {
  name: "App",
  components: {
    carouselT: carouselT
  },
  data() {
    return {
      sliders: [
        {
          img: require("../assets/gaokaoh5.jpg")
        },
        {
          img: require("../assets/gaokaoh5.jpg")
        },
        {
          img: require("../assets/gaokaoh5.jpg")
        },
        {
          img: require("../assets/gaokaoh5.jpg")
        },
        {
          img: require("../assets/gaokaoh5.jpg")
        }
      ]
    };
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
