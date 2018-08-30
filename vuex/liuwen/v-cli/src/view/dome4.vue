<template>
    <button v-on:click="showAlert">Hello</button>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        showAlert(){
            this.$swal('Hello Vue world!!!');
        }
    }
}
</script>