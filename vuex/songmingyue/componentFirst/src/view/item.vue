<template>
  <div class="test">
    <button @click="addName">添加</button>
    <div v-for="(item,index) in allObj">
        <input v-model="item.value"><button @click="reduce(index)">{{item.text}}</button>
    </div>
    <button @click="submits">提交</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      allObj: [
        {'text': '-', 'value': '', }
      ]
    }
  },
  methods: {
    addName() {
      var obj = {'text': '-', 'value': ''}
      this.allObj.unshift(obj)
    },
    reduce(item) {
      this.allObj.splice(item, 1)
    },
    submits() {t
      var query = []
      this.allObj.forEach(ele => {
        query.push(ele.value)
      })
      console.log(query)
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
