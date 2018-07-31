<template>
  <div class="test">
    <v-radio
    :radios="options"
    :values="selectChose"
    @change="selectValueHandle"
    ></v-radio>
  </div>
</template>

<script>
import test2 from '../components/test2.vue'
export default {
  name: 'test',
  data () {
    return {
      selectChose: 1,
      options: [
        {text:'炸酱面1', value: 1},
        {text:'小火锅', value: 2},
        {text:'旋转小火锅', value: 3},
        {text:'炸酱面4', value: 4}
      ]
    }
  },
  components: {
    'v-radio': test2
  },
  methods: {
    selectValueHandle (vals) { // 自定义事件修改text的值
      this.selectChose = vals
      console.log(this.selectChose)
      this.$store.state.type = 'aaa'
    }
  }
}
</script>

<style scoped>
title {
  width: 300px;
  height: 200px;
  background: #F6F6F6;
}
</style>
