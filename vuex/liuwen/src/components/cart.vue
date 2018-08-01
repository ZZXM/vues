<template>
    <div class="shop-list">
        <h4>购物车信息</h4>
        <table class="table table-hover table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               <tr v-for='shop in list.shop_list' :key="shop.id" v-if="shop.num !== 0">
                    <td>{{shop.id}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td>
                    <td>{{shop.num}}</td>
                    <td>{{shop.prices}}</td>
                    <td>
                        <div @click='add_db(shop)' class="btn btn-info">+</div>
                        <div @click='reduce_db(shop)' class="btn btn-warning">-</div>
                        <div @click='action_cart(shop)' class="btn btn-danger" title='删除'>x</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "cart-list",
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"])
   
  },
  created() {
  },
  mounted() {
    // console.log(this.list.shop_list);
  },
  methods: {
    add_db(shop) {
      var id = shop.id;
      this.$store.dispatch("add_sp", {
        id
      });
    },
    reduce_db(shop) {
      var id = shop.id;
      this.$store.dispatch("reduce_sp", {
        id
      });
    },
    action_cart(shop) {
      var id = shop.id;
      this.$store.dispatch("delete_sp", {
        id
      });
    },
  }
};
</script>
</script>
<style scoped lang="less">
.table-shop {
  th {
    text-align: center;
  }
}
</style>
