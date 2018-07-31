<template>
  <div class="test">
    <table border="1">
     <thead>
      <tr>
        <th>分类</th>
        <th>数字</th>
        <th>操作</th>
      </tr>
    </thead>
      <tr v-for="(item,index) in table.table" :key="index">
        <td>{{item.text}}</td>
        <td>{{item.money}}</td>
        <td @click='deletes(item.value)'>删除</td>
      </tr>
    </table>
    <dialogs 
      :tittle="tittles"
      :list="list"
      :btna="btna"
      :btnb="btnb"
      @icrease ='education.show = false'
      @icreaseSure = 'sureDlg'
      >
      <div style="margin-top:3px">
        买啥<input v-model="buyhow"></input><br>
        资金<input v-model="moneys"></input>
      </div>
    </dialogs>
    <button class='all_num' @click='addTable'>添加</button>
    <span class='all_num'>总计：{{table_num}}</span>
  </div>
</template>
<script>
import dialog from '../components/dialog.vue'
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      ass: 4,
      tittles: '提示',
      list: '选择要添加的',
      btna: '确定',
      btnb: '取消',
      buyhow: '',
      moneys: ''
    }
  },
  components: {
    'dialogs': dialog
  },
  computed: {
    ...mapState(['table', 'education']),
    ...mapGetters(['table_num'])
  },
  methods: {
    addTable() {
      this.$store.commit('swit_dialog')
    },
    deletes(money) {
      this.$store.dispatch('deletesShopping', money)
    },
    sureDlg() {
      var adds = {text: this.buyhow, money: this.moneys, value: '5'}
      this.ass++
      adds.value = this.ass
      this.$store.dispatch('addShopping', adds)
      // this.education.show = false
      this.$store.commit('swit_dialog')
    }
  }
}
</script>

<style scoped>
th {
  padding: 5px 15px
}
.all_num {
  float: left;
}
</style>
