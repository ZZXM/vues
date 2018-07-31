<template>
  <div>
    <div>
    <label v-for='item in radiosOpt' >
      <input type="radio" name="radios" :value="item.value" v-model="val">{{item.text}}
    </label>
    <div></div>
    </div>
  </div>
</template>

<script>
  name: 'dialog'
  export default {
    props: {
      radios: {
        type: Array,
        required: true
      },
      values: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        val: this.values,
        radiosOpt: this.radios
      }
    },
    watch: {
      'val': 'changes' 
    },
    methods: {
      changes() {
        console.log(this.val)
        this.$emit('change', this.val)
      }
    }
  }
</script>