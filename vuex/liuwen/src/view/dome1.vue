<template>
  <div id="app">
    <Headerc></Headerc>
    <Mainc></Mainc>
    <div>
        <p>{{ count }}</p>
        <p>
          <button @click="increment">+</button>
          <button @click="$store.commit('decrement')">-</button>
        </p>
    </div>
  </div>
</template>

<script>
import Headerc from "../components/Header.vue";
import Mainc from "../components/HelloWorld.vue";
import store from "../vuex/store";
// import {mapState} from 'vuex';
import { mapState, mapMutations,mapGetters  } from "vuex";
export default {
  name: "App",
  components: {
    Headerc,
    Mainc
  },
  // computed: {
  //   count() {
  //     return store.state.count;
  //   },
  // },
  // methods: {
  //   increment() {
  //     store.commit("increment");
  //   },
  // },
  computed: {
    ...mapState(["count"]),
    ...mapGetters([
      'doneTodosCount',
      'doneTodos'
    ]),
  },

  methods: mapMutations(["increment"]),

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
