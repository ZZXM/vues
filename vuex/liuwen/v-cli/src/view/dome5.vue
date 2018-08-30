<template>
    <div id="app">
        <button v-on:click="showAlert">Hello world</button>
         <label for="Name">Number:</label>
        <input type="text" name="Name" id="Name"/>
        <label>Date:<input type="text" name="B"/></label>
    </div>

</template>


<script>
export default {
  name:"",
  data(){
    // 数据对象
    return {}
  },
  computed:{
    //计算属性
  },
  methods:{
    // 方法
    showAlert(){
        // Use sweetalret2
        this.$swal('Hello Vue world!!!');
    }
  },
  watch:{
    // 观察
  },
  mounted(){
    // 生命钩子函数
  },
  directives:{
    // 自定义局部命令
  },
  components:{
    //组件注册
  },
  fllters:{
    //过滤器
  }

}
</script>


<style scoped>

</style>
