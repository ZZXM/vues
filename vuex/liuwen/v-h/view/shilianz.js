 //用闭包形式来写，前面加;是防止跟其他js压缩时报错
 ;(function(global){
  //开启严格模式
  "use strict";
  //构造函数定义一个类    传参数
  function Scroll(el,options) {
      //some code

  };


  //原型链上提供方法
  Scroll.prototype = {
      //定义方法
      show: function() {
          //some code
      }
      
  };
  //兼容CommonJs规范 
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = Scroll;
  };
  //兼容AMD/CMD规范
  if (typeof define === 'function') define(function() { 
      return Scroll; 
  });
  //注册全局变量，兼容直接使用script标签引入插件
  global.Scroll = Scroll;
})
