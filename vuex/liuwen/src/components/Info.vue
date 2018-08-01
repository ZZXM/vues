<template>
    <div class="cart-info">
        <div>
            <div class='item'>总数：<strong>{{list.cartInfos.total_nums}}</strong></div>
            <div class='item'>总价：<strong>{{list.cartInfos.total_price}}</strong></div>

            <div class="item pull-right btn btn-danger" @click='clear_db()'>清空购物车</div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Info-list",
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"]),
    ...mapGetters([
      "getInfos",
      "getCartList"
      // ...
    ])
  },
  created() {},
  mounted() {
    // console.log(this.list.cartInfos.total_price);
  },
  methods: {
    clear_db(){

    }
  }
};
</script>
<style scoped lang='less'>
.cart-info {
  font-size: 20px;
  text-align: left;

  .item {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
