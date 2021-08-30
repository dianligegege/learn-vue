<template>
  <div>
    <h1>我是父页面</h1>
    <iframe
        id="iframeContain"
        name="iframeContain"
        seamless
        scrolling="yes"
        :src="iframeSrc"
        width="600"
        height="400"
        ref="father"
      >
        您当前的浏览器不支持页面上的功能，请升级您当前的浏览器版本或使用谷歌浏览器访问当前页面
     </iframe>
     <div>
       inputValue1：<el-input v-model="input1" />
       name: <el-input v-model="myName" />
       <el-button @click="postMessage1">
         发送信息
       </el-button>
     </div>
     <hr>
     儿子传值: {{ sonName }}

     <el-select v-model="selectVlaue" placeholder="切换当前语言" @change="selectChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <p>使用post.js</p>
    <el-select v-model="selectVlauePost" placeholder="切换当前语言" @change="selectChangePost">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import PostMessage from './post';

export default {
  data() {
    return {
      iframeSrc: '/#/iframe-son',
      input1: '',
      myName: '',
      iframeWindow: {},
      fatherPost: {},
      sonName: '',
      selectVlaue: 'zh-cn',
      selectVlauePost: 'zh-cn',
      options: [
        {
          value: 'en-us',
          label: 'en-us',
        },
        {
          value: 'zh-cn',
          label: 'zh-cn',
        }
      ],
    }
  },
  methods: {
    init() {
      const dom = this.$refs.father;
      this.fatherPost = new PostMessage(dom);
      const iframeWindow = dom.contentWindow;
      this.iframeWindow = iframeWindow;
    },
    postMessage1() {
      this.iframeWindow.postMessage({
        cmd: 'input1Value',
        params: this.input1,
        myName: this.myName,
      }, '*');
    },
    handleMessage(event) {
      const data = event.data;

      if (data.cmd === 'returnValue') {
        this.sonName = data.params.sonName;
      }

    },
    selectChange() {
      this.iframeWindow.postMessage({
        cmd: 'changeLanguage',
        params: {
          language: this.selectVlaue,
        },
      }, '*');
    },
    selectChangePost() {
      this.fatherPost.postCurrentLanguage({
        language: this.selectVlauePost,
      });
    },
  },
  mounted() {
    this.init();
    window.addEventListener('message', this.handleMessage);
  },
}
</script>