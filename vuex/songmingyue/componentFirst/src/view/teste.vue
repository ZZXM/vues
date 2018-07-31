<template>
  <div class="hello">
    <inputs
      :num = 'numbers'
      @icrease='handleIcrease'
      @reduce='handleReduce'
    ></inputs>
    <dialog></dialog>
  </div>
</template>
<style>
.hello{
}
</style>

<script>
import input from '../components/list.vue'
import dialog from '../components/dialog.vue'
export default {
  data() {
    return {
      numbers: 1
    };
  },
  components: {
    'inputs': input,
    'dialogs': dialog
  },
  methods: {
    handleIcrease() {
      this.numbers++
    },
    handleReduce() {
      this.numbers--
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.hello{
  margin-top:200px;
}
</style>
