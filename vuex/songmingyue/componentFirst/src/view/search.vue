<template>
<div>
  <dialogs 
  :tittle="tittles"
  :list="list"
  :btna="btna"
  :btnb="btnb"
  @icrease ='education.show = false'
  >
  <button>sdsdfdfsdf</button>
  Browserify 
  <button  @click="chuli">处理啦啦</button>
</dialogs>
<button @click='education.show = !education.show'>再弹出来</button>
</div> 
</template>
<style>
</style>

<script>
import dialog from '../components/dialog.vue'
import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        // shows: true,
        tittles: '标题',
        list: '内容',
        btna: '打一架',
        btnb: '和解吧'
      };
    },
    components: {
      'dialogs': dialog
    },
    computed: {
      ...mapState(['education']),
      ...mapGetters(['not_show'])
    },
    methods: {
      cancel() {
        this.$store.commit('swit_dialog')
        this.$store.dispatch('switch_dialog')
        console.log(this.$store.state.dialog.show)
        // this.shows = false
        console.log(this.education)
      },
      chuli() {
        console.log(1111111)
      }
    }
  }
  // 总结，总是喜欢把外面的值拿过来在组件的return里面赋值，冗余代码比较多
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
