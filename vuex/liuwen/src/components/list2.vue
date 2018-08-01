<template>
    <div class="shop-list">
        <h4>商品信息</h4>
        <table class="table table-hover table-bordered table-shop">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for='shop in list.shop_list' :key="shop.id">
                    <td>{{shop.id}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td>
                    <td>{{shop.num}}</td>
                    <td>
                        <div @click='add_db(shop)' class="btn btn-info">{{shop.num ? '+' : '加入购物车'}}</div>
                        <div @click='reduce_db(shop)' class="btn btn-warning" v-if='shop.num && shop.num>0'>-</div>
                    </td>
              </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "shop-list",
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"])
  },
  mounted() {
    console.log(this.list.shop_list);
    // console.log(this.$store.state.list.cartList)
  },
  methods: {
    add_db(shop) {
      var id = shop.id;
      this.$store.dispatch("add_sp", {
        id
      })
    },
    reduce_db(shop){
      var id = shop.id;
      this.$store.dispatch("reduce_sp", {
        id
      })
    }
  }
};
</script>
<style scoped lang="less">
.table-shop {
  th {
    text-align: center;
  }
  // .table-bordered>tbody>th>td {
  td {
    vertical-align: middle;
  }
}
</style>
