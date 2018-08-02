<template>
    <div>
        <input type="text" v-model="msg" />
        <input type="button" v-on:click="setName" value="点我" />
    </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    setName() {
      this.$store.commit("showUserName", this.msg);
    }
  }
};
</script>