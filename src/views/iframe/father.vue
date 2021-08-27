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
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: '/#/iframe-son',
      input1: '',
      myName: '',
      iframeWindow: {},
      sonName: '',
      selectVlaue: 'zh-cn',
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
  },
  mounted() {
    this.init();
    window.addEventListener('message', this.handleMessage);
  },
}
</script>