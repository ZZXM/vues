<template>
  <div>
    <div class="js_dialog" id="iosDialog1" style="opacity: 1;" v-if='education.show'>
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{tittles}}</strong></div>
                <div class="weui-dialog__bd">{{list}}</div>
                <slot>Submit</slot>
               <!-- <slot name="buttons"></slot>-->
                <div class="weui-dialog__ft">
                    <a href="javascript:;" @click="btnaRtun" class="weui-dialog__btn weui-dialog__btn_primarydefault">{{btna}}</a>
                    <a href="javascript:;" @click="btnaCal" class="weui-dialog__btn weui-dialog__btn_default">{{btnb}}</a>
                </div>
            </div>
        </div>
  </div>
</template>
<style>
.hello{
}
</style>

<script>
  name: 'dialog'
  import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    props: {
      tittle: {
        type: String,
        required: false
      },
      btna: {
        type: String,
        required: true
      },
      btnb: {
        type: String,
        required: true
      },
      list: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        tittles: this.tittle,
        shows: this.show
      };
    },
    computed: {
      ...mapState(['education']),
    },
    methods: {
      btnaRtun() {
        // this.$store.state.dialog.show = true
        this.shows = false
        this.$emit('icreaseSure', this.counter)
        console.log(this.education.show)
      },
      btnaCal() {
        this.shows = false
        this.$emit('icrease', this.counter)
        console.log(this.education.show)        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
.weui-dialog {
    position: fixed;
    z-index: 5000;
    width: 40%;
    max-width: 392px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
}
.weui-dialog__hd {
    padding: 1.3em 1.6em 0.5em;
}
.weui-dialog__title {
    font-weight: 400;
    font-size: 18px;
}
.weui-dialog__bd {
    padding: 0 1.6em 0.8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #808080;
}
.weui-dialog__ft {
    position: relative;
    line-height: 48px;
    font-size: 18px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.weui-dialog__btn {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    color: #09BB07;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
}
.weui-dialog__btn_primary {
    color: #09BB07;
}
.weui-dialog__btn_default {
    color: #353535;
}
</style>
