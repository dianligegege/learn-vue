<template>
<div>
  <div>
    <h1>我是子页面</h1>
    <p>name: {{ myName }}</p>
    <p>input1Value 值：{{ input1Value }}</p>
  </div>
  <hr>
  <div>
      name: <el-input v-model="sonName" />
      <el-button @click="postMessage">
        发送信息
      </el-button>
  </div>
  <hr>
  当前语言： {{ language }}
</div>
</template>

<script>
export default {
  data() {
    return {
      input1Value: '',
      myName: '',
      sonName: '',
      language: '',
    }
  },
  methods: {
    handleMessage(event) {
      const data = event.data;

      if (data.cmd === 'input1Value') {
        this.input1Value = data.params;
        this.myName = data.myName;
      } else if (data.cmd === 'changeLanguage') {
        this.language = data.params.language;
      }

    },
    postMessage() {
      window.parent.postMessage({
        cmd: 'returnValue',
        params: {
          sonName: this.sonName,
        },
      }, '*');
    },
  },
  mounted() {
    window.addEventListener('message', this.handleMessage);
  },
}
</script>