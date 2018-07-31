<template>
  <div class="test">
    <v-select
    :options="options"
    :v-model="selectChose"
    :inputs='true'
    ></v-select>
  </div>
</template>

<script>
import tests from '../components/tests.vue'
export default {
  name: 'test',
  data () {
    return {
      selectChose: '',
      text: '按键的name',
      tests: 'woxiugaine',
      options: [
        {text: '炸酱面1', value: 1},
        {text: '小火锅', value: 2},
        {text: '旋转小火锅', value: 3},
        {text: '炸酱面4', value: 4}
      ]
    }
  },
  components: {
    'v-select': tests
  },
  methods: {
    selectValueHandle (value) { // 自定义事件修改text的值
      this.text = value
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
