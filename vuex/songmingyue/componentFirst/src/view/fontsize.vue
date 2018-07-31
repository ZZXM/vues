<template>
  <div>
    <button :style="{fontSize: postFontSize + 'em'}">12121</button>
    <button @click="add">+</button>
  </div>
</template>
<style>
.hello{
}
</style>

<script>
  name: 'fontsize'
  export default {
    data() {
      return {
        postFontSize: 0.1
      };
    },
    methods: {
      add() {
        this.postFontSize+=0.1
        console.log(this.postFontSize)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: inline-block;
}
.ipt-num {
  padding:3px;
  height: 25px;
  border-radius:3px;
  border: 1px solid #0d00ff33;
}
h1, h2 {
  font-weight: normal;
}
.add-num {
  display: inline-block;
  padding: 5px
}

</style>
