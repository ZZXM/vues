<template>
    <div class="cart-info">
        <div>
            <div class='item'>总数：<strong>{{getInfos.total_nums}}</strong></div>
            <div class='item'>总价：<strong>{{getInfos.total_price}}</strong></div>

            <div class="item pull-right btn btn-danger" @click='empty_cart()'>清空购物车</div>
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
      "getInfos"
    ])
  },
  created() {},
  mounted() {
    // console.log(this.list.cartInfos.total_price);
    
  },
  methods: {
    ...mapMutations([
      'empty_cart'
    ]),
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
