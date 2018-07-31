<template>
  <div>
    
  </div>
</template>
<style>
.hello{
}
</style>

<script>
  name: 'input'
  export default {
    props: {
      num: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        numb: this.num
      };
    },
    methods: {
      addNum() {
        this.numb++
        this.$emit('icrease')
      },
      reduceNum() {
        this.numb--
        this.$emit('reduce')
      },
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
