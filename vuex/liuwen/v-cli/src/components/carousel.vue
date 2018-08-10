<template>
   <div id="slider">
    <div class="container-content" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li  v-for="(item, index) in sliders" :key="index">
          <img :style="{width:imgWidth+'px'}" class="item-slider" :src="item.img" alt="">
        </li>
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(600, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
        </li>
        <li class="right" @click="move(600, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
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
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    },
  },
  data() {
    // 数据对象
    return {
      sliders: [
        //  require("../assets/gaokaoh5.jpg")
        {
          img:
            "https://o061kmjss.qnssl.com/upload/2018-8-8/liu1.png"
        },
        {
          img:
            "https://o061kmjss.qnssl.com/upload/2018-8-8/liu2.png"
        },
        {
          img:
            "https://o061kmjss.qnssl.com/upload/2018-8-8/liu3.png"
        },
        {
          img:
            "https://o061kmjss.qnssl.com/upload/2018-8-8/liu4.png"
        },
        {
          img:
            "https://o061kmjss.qnssl.com/upload/2018-8-8/liu5.png"
        }
      ],
      imgWidth: 600,
      distance: -600,
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
    }
  },
  methods: {
    // 方法
    // 获取图片大小和总宽度

    move(offset, direction, speed) {
      //offset  direction:方向  speed：时间
      // console.log(offset,direction,speed);
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      // direction === -1 ? this.currentIndex++ : this.currentIndex--;
      direction === -1
        ? (this.currentIndex += offset / 600)
        : (this.currentIndex -= offset / 600);
      // console.log(this.currentIndex);
      if (this.currentIndex > 5) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 5;
      const destinations = this.distance + offset * direction;
      this.animate(destinations, direction, speed);
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
          if (des < -3000) this.distance = -600;
          if (des > -600) this.distance = -3000;
        }
      }, 20);
    },
    jump(i) {
      const direction = i - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(i - this.currentIndex) * 600;
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
        this.move(600, -1, this.speed);
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
  width: 600px;
  height: 400px;
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
}
.left {
  left: 3%;
  padding-left: 12px;
  padding-top: 10px;
}
.right {
  right: 3%;
  padding-right: 12px;
  padding-top: 10px;
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
