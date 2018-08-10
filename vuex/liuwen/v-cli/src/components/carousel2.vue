<template>
   <div id="slider">
    <div class="container-content" @mouseover="stop" @mouseleave="play" :style="{width:imgWidth+'px',height:imgheight+'px'}">
      <ul class="container" :style="containerStyle">
        <li>
          <img :style="{width:imgWidth+'px',height:imgheight+'px'}" :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li  v-for="(item, index) in sliders" :key="index">
          <img :style="{width:imgWidth+'px',height:imgheight+'px'}" class="item-slider" :src="item.img" alt="">
        </li>
        <li>
          <img :style="{width:imgWidth+'px',height:imgheight+'px'}" :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(imgWidth, 1, speed)">
          <i class="left-ico">&#xe600;</i>
        </li>
        <li class="right" @click="move(imgWidth, -1, speed)">
          <i class="right-ico">&#xe601;</i>
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i"
        :class="{dotted: i === (currentIndex-1)}"
        @click = jump(i+1)
        >
        </li>
      </ul>

    </div>
  </div>
</template>


<script>
export default {
  name: "",
  props: {   
    initSpeed: {
      //控制速度
      type: Number,
      required: true
    },
    initialInterval: {
      //控制时间
      type: Number,
      required: true
    },
    itemWidth: {
      //图片宽
      type: Number,
      required: true
    },
    itemheight: {
      //图片高
      type: Number,
      required: true
    },
    carouselImg: {
      //图片高
      type: Array,
      required: true
    }
  },
  data() {
    // 数据对象
    return {
      sliders: this.carouselImg,
      imgWidth: this.itemWidth,
      imgheight: this.itemheight,
      distance: -this.itemWidth,
      speed: this.initSpeed,
      transitionEnd: true,
      currentIndex: 1
    };
  },
  computed: {
    //计算属性
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    interval() {
      return this.initialInterval * 1000;
    },
    slidersWidth() {
      return this.sliders.length * this.imgWidth;
    }
  },
  methods: {
    // 方法
    // 获取图片大小和总宽度

    move(offset, direction, speed) {
      //offset  每次要移动的距离  direction:方向  speed：时间
      // console.log(offset,direction,speed);
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / this.itemWidth)
        : (this.currentIndex -= offset / this.itemWidth);
      if (this.currentIndex > this.sliders.length) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = this.sliders.length;
      const destinations = this.distance + offset * direction;
      this.animate(destinations, direction, speed); //移动的距离  方向  速度
    },
    animate(des, direc, speed) {
      if (this.gardenitem) {
        window.clearInterval(this.gardenitem);
        this.gardenitem = null;
      }
      this.gardenitem = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.gardenitem);
          this.distance = des;
          if (des < -this.slidersWidth) this.distance = -this.itemWidth;
          if (des > -this.itemWidth) this.distance = -this.slidersWidth;
        }
      }, 20);
    },
    jump(i) {
      const direction = i - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(i - this.currentIndex) * this.itemWidth;
      const jumpSpeed =
        Math.abs(i - this.currentIndex) === 0
          ? this.speed
          : Math.abs(i - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(this.itemWidth, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  },
  watch: {
    // 观察
  },
  mounted() {
    // 生命钩子函数
  },
  directives: {
    // 自定义局部命令
  },
  components: {
    //组件注册
  },
  fllters: {
    //过滤器
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#slider {
  text-align: center;
}
#slider li {
  list-style: none;
}
#slider .container-content {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
#slider .container {
  padding: 0;
  display: flex;
  position: absolute;
}
.left,
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
.left {
  left: 3%;
}
.right {
  right: 3%;
}
@font-face {
  font-family: "iconfont"; /* project id 557119 */
  src: url("//at.alicdn.com/t/font_557119_kw6s5f90r5.eot");
  src: url("//at.alicdn.com/t/font_557119_kw6s5f90r5.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_557119_kw6s5f90r5.woff") format("woff"),
    url("//at.alicdn.com/t/font_557119_kw6s5f90r5.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_557119_kw6s5f90r5.svg#iconfont") format("svg");
}
.left-ico {
  font-family: "iconfont" !important;
  font-size: 21px;
  margin-left: 5px;
  color: #fff;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.right-ico {
  font-family: "iconfont" !important;
  font-size: 21px;
  margin-left: -5px;
  color: #fff;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
}
.dots .dotted {
  background-color: orange;
}
</style>
