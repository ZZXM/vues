<template>
  <div class="select">
    <div class="inner">
    <div class="inputWrapper" @click.stop="showOPtions = !showOPtions">
      <input v-if="inputs" type="text" placeholder="请选择菜品" v-model="selectChose">
      <input v-if="!inputs" type="text" readonly placeholder="请选择菜品" v-model="selectChose">
    </div>
    <ul class="options" v-show="showOPtions">
      <li v-for="(item, index) in optionss" :key="index" @click.stop="choose(item.text)">{{item.text}}</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['options', 'selectChose', 'inputs'], // 获取父组件的传值
  data () {
    return {
      showOPtions: false,
      optionss: []
    }
  },
  mounted() {
    let that = this
    document.addEventListener('click', function() {
      that.showOPtions = false
    })
  },
  methods: {
    selectValueHandle:function(item){
    
      this.$emit("receive",item);
    },
    start() {
      this.optionss = this.options
    },
    choose(val) {
      this.selectChose = val
      this.showOPtions = false
    }
  },
  created() {
    this.start()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.select {
  position: relative;
}
.inputWrapper {
  position:absolute;
}
.inputWrapper input {
  padding: 5px 8px
}
ul {
  position:absolute;
  list-style-type: none;
  padding: 0;
  width: 187px;
  border: 1px solid #272822;
  margin-top: 28px
}
li {
  margin: 0 10px;
  text-align: left;
  cursor: default
}
a {
  color: #42b983;
}
</style>
