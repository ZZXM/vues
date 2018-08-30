var vm = new Vue({
  el: "#app",
  data: {
    teacherName: "", //输入框name.value
    popError: "", //报错文字
    popErrorShow: false, //报错框显示隐藏
    indexShow: true, //首页显示隐藏
    loadingShow: false,
    totalArray: [], //totalArray 剩下的值
    randomArray: [], //randomArray 返回的值
    correctAnswer: {},
    questionsBackground1: { //背景图
      backgroundImage: "url(../img/jiaoshijie/page0201.jpg)",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    propsManyQuestions1: '第一题', //第几题
    examinationQuestions1: '对老师来说阅读是自然习惯，休息时你会看以下那本书来凸显你的书香气质', //题目
    questionsOptions1: [ //选项
      {
        option: "A 你的教科书",
      },
      {
        option: "B 《杀死一只知更鸟》",
      },
      {
        option: "C 《社会心理学》",
      }
    ],
    questionsBackground2: { //背景图
      backgroundImage: "url(../img/jiaoshijie/page0202.jpg)",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    propsManyQuestions2: '第二题', //第几题
    examinationQuestions2: '学生作业不能少！你能原谅那些不按时交作业的学生吗？', //题目
    questionsOptions2: [ //选项
      {
        option: "A 不能，会给到相应惩罚",
      },
      {
        option: "B 能，做个温柔的老师",
      },
      {
        option: "C 具体看学生情况",
      }
    ],
    questionsBackground3: { //背景图
      backgroundImage: "url(../img/jiaoshijie/page0203.jpg)",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    propsManyQuestions3: '第三题', //第几题
    examinationQuestions3: '学生作业不能少！你能原谅那些不按时交作业的学生吗？', //题目
    questionsOptions3: [ //选项
      {
        option: "A 信心不足的学生，很容易玻璃心",
      },
      {
        option: "B 非常懒的学生，但是有小聪明",
      },
      {
        option: "C 固执己见的学生，有自己思路",
      },
      {
        option: "D 以上都不喜欢",
      }
    ],
    questionsBackground4: { //背景图
      backgroundImage: "url(../img/jiaoshijie/page0204.jpg)",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    propsManyQuestions4: '第三题', //第几题
    examinationQuestions4: '如果可以变身，你想当男老师还是女老师？', //题目
    questionsOptions4: [ //选项
      {
        option: "A 男老师",
      },
      {
        option: "B 女老师",
      }
    ],
    // answer答案<span></span>
    answer: {
      maleTeacher: [ //  男生
        {
          genre: "../img/jiaoshijie/page3001b.png", //类型
          likeWho: "../img/jiaoshijie/page3001a.png", //像谁
          textone: "有点犯二犯傻，有点可爱。典型<span>人来疯</span>，很容易知足，就算再难过也会有自己的调节方式，<span>有自己的生活态度</span> ", //文案1
          texttwo: "<span>课堂上很有感染力</span>你是校长派来的逗比吗”！你可以和学生调侃玩笑， <span>大智若愚</span>，能轻松的化解和学生之间的很多问题，营造一个开心的学习氛围！",
          textthree: "让学生感觉有你这个老师是他们的“小幸运”，感受学习是件开心的事！",
          arrowhead: "../img/jiaoshijie/page06.png", //男生地标
        },
        {
          genre: "../img/jiaoshijie/page3002b.png", //类型
          likeWho: "../img/jiaoshijie/page3002a.png", //像谁
          textone: "在学生眼中，你不仅仅是一个老师，更是一个偶像，出现在韩剧中的霸道总裁，跟你的形象如出一辙，你做事的<span>目标清晰，行动力十足</span>，所以总给学生一种雷厉风行的感觉。", //文案1
          texttwo: "为了赶上你的进度，你的学生总是需要加倍努力，不过，相信你一定收到过这样的评价：精准高效。",
          textthree: "是的，你就是<span>教学能力中当之无愧的king！</span>",
          arrowhead: "../img/jiaoshijie/page06.png", //男生地标
        },
        {
          genre: "../img/jiaoshijie/page3003b.png", //类型
          likeWho: "../img/jiaoshijie/page3003a.png", //像谁
          textone: "谦谦公子，博学广知，课堂上的你，<span>吐字清晰，不紧不慢</span>，是因为你的胸有成竹。如果说学富五车太过夸张，那也绝对担得起才华横溢四个字。", //文案1
          texttwo: "在你的课堂上，学生总是<span>如沐春风</span>，仿佛再晦涩难懂的知识点在你眼中都是一杯精美包装值得细细品味的茶。",
          textthree: "<span>苦涩却有回甘</span>，恰如你的人一般。",
          arrowhead: "../img/jiaoshijie/page06.png", //男生地标
        }
      ],
      womanTeacher: [{
          genre: "../img/jiaoshijie/page3004b.png", //类型
          likeWho: "../img/jiaoshijie/page3004a.png", //像谁
          textone: "自己的兴趣爱好永远都放在第一位，基本上所有的事情都想<span>按照自己喜欢的节奏</span>去做，<span>冷静理智</span>。", //文案1
          texttwo: "学生很难搞，要么静观其变，要么嫌麻烦交给父母处理，学生会很怕你，但是父母很信赖你！",
          textthree: "一看你就是那种学生虐我千百遍，任你欢脱我“随便”的<span>佛系</span>型老师。",
          arrowhead: "../img/jiaoshijie/page07.png", //男生地标
        },
        {
          genre: "../img/jiaoshijie/page3005b.png", //类型
          likeWho: "../img/jiaoshijie/page3005a.png", //像谁
          textone: "天真灵动，活泼率真，并不是别人看来的“傻白甜”。你可以说是深藏不露，有<span>姣好的容颜</span>，同时<span>智慧非凡</span>。", //文案1
          texttwo: "作为老师的你会给学生带来很多新奇的教学方式，但也有作为<span>“仙女”的多愁善感</span>，感同身受般，你能细心观察到学生情绪。",
          textthree: "懂得照顾学生，所以学生很容易和你交心做朋友！",
          arrowhead: "../img/jiaoshijie/page07.png", //男生地标
        },
        {
          genre: "../img/jiaoshijie/page3006b.png", //类型
          likeWho: "../img/jiaoshijie/page3006a.png", //像谁
          textone: "凌厉的眼神，轻易不上扬的嘴角，<span>走路带风，气场爆表</span>的女王大人，学生看到你的第一反应是由衷地赞叹和敬仰。", //文案1
          texttwo: "然而，你高冷的外表下掩藏的是一颗最最柔软的心。你将所有的喜怒哀乐化作<span>理智与淡然</span>，与你朝夕相处的学生都能看到你<span>冷艳外表下的少女心。</span>",
          textthree: "没错，学生眼中的你，有一份藏也藏不住的天然萌。",
          arrowhead: "../img/jiaoshijie/page07.png", //男生地标
        },
        {
          genre: "../img/jiaoshijie/page3007b.png", //类型
          likeWho: "../img/jiaoshijie/page3007a.png", //像谁
          textone: "<span>蕙质兰心、气质如兰</span>这样的词就是为你量身定做的，当你站在讲台上，即使不说一句话，也会被你<span>高贵优雅</span>的style震慑，心甘情愿“吃”下每一个难解的知识点。", //文案1
          texttwo: "你的学生会为有你这样的<span>女神老师</span>感到幸福，而你也会用自己的体贴温柔感动每一个孩子。“太美”，可不是原罪。",
          textthree: "别怀疑，你就是老师中最亮眼的那一颗星！",
          arrowhead: "../img/jiaoshijie/page07.png", //男生地标
        }
      ]

    }

  },
  watch: {
    teacherName: function (val) {
      this.teacherName = val
    }
  },
  methods: {
    pageQuestion(res) {
      let self = this
      var pageQuestions = document.querySelector('.page0201');
      if (res[1] < 4) {
        vm.$children[res[1] - 1].detailShow = false
        vm.$children[res[1]].detailShow = true
      } else {
        vm.$children[res[1] - 1].detailShow = false;
        self.loadingShow = !self.loadingShow;
        setTimeout(function () {
          self.loadingShow = false;
          vm.$children[res[1]].answerShow = true
          if (res[0].option.indexOf("A") == 0) { //
            self.selRandomNum(vm.answer.maleTeacher.length, 1)
            self.correctAnswer = vm.answer.maleTeacher[self.randomArray]
          } else {
            self.selRandomNum(vm.answer.maleTeacher.length, 1)
            self.correctAnswer = vm.answer.womanTeacher[self.randomArray]
          }
        }, 2000)
      }
    },
    // pageQuestion:function(e){
    //   console.log(e)
    // },
    ActivityPermissions() {
      let self = this;
      if (!self.teacherName) {
        self.popError = "请输入姓名"
        self.popErrorShow = !self.popErrorShow
        setTimeout(function () {
          self.popErrorShow = false;
        }, 2000)
      } else if (!/^[\u4e00-\u9fa5a-zA-Z]*$/.test(self.teacherName)) {
        self.popErrorShow = false;
        self.popError = "请输入正确姓名"
        self.popErrorShow = !self.popErrorShow
        setTimeout(function () {
          self.popErrorShow = false
        }, 2000)
      } else {
        self.indexShow = !self.indexShow;
        self.$children[0].detailShow = true;
      }
    },
    selRandomNum(count, randomCount) {
      //count数组总数,randomCount取几个数
      //totalArray 剩下的值,randomArray 返回的值
      // console.log(count, randomCount)
      self = this;
      var count = count || 10;
      var randomCount = randomCount || 3;
      for (var i = 0, l = count; i < l; i++) {
        self.totalArray.push(i);
      }
      for (var i = 0, l = randomCount; i < l; i++) {
        var randomIndex = Math.floor(Math.random() * self.totalArray.length); //随机数*数组length然后在floor
        var selectIndex = self.totalArray.splice(randomIndex, 1)[0];
        self.randomArray.push(selectIndex);
      }
      console.log(self.totalArray, self.randomArray)
    }
  },
  computed: {

  },
  components: {
    // 试题组件
    "activity-answer": {
      template: "#measurement",
      data: function () {
        return {
          allQuestions: this.propsAllQuestions, //总共几题
          currQuestions: this.CurrQuestions, //圆点是第几个
          manyQuestions: this.propsManyQuestions, //第几题
          examinationQuestions: this.propsExaminationQuestions, //题目
          questionsOptions: this.propsQuestionsOptions, //选项
          questionsBackground: this.propsQuestionsBackground, //背景图
          detailShow: false,
          allQuestionsActive: "",
        }
      },
      props: {
        'propsAllQuestions': {
          //总共几题
          type: Number,
          required: true
        },
        'CurrQuestions': {
          //圆点是第几个
          type: Number,
          required: true
        },
        'propsManyQuestions': { //第几题
          type: String,
          required: true
        },
        'propsExaminationQuestions': { //题目
          type: String,
          required: true
        },
        'propsQuestionsOptions': { //选项
          type: Array,
          required: true
        },
        'propsQuestionsBackground': { //背景图
          type: Object,
          required: true
        }
      },
      methods: {
        selectStyle(item, index) {
          this.allQuestionsActive = index;
          this.$emit('question', [item, this.CurrQuestions]);
        }
      }
    },
    // 答案组件
    "announce-answer": {
      template: "#announceAnswer",
      data: function () {
        return {
          Tanswer: this.propsAnswer, //男女资料
          answerShow: false, //答案页
        }
      },
      props: {
        'propsAnswer': { //背景图
          type: Object,
          required: true
        },
        'propsTeacherName': {
          type: String,
          required: true,
          default: '某某某',
        }

      },
      methods: {}
    }
  },

})