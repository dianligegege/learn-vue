class PostMessage{
  constructor(iframeWindow) {
    this.iframeWindow = iframeWindow.contentWindow;

    this.initWatch();
  }

  /**
   * 母页面调取postMessage 方法封装
   * @param {string} type
   * @param {object} message
   */
  postFatherMessage = (type, message) => {
    this.iframeWindow.postMessage({
      cmd: type,
      params: message,
    }, '*');
  }

  /**
   * 子页面调取postMessage 方法封装
   * @param {string} type
   * @param {object} message
   */
  postSonMessage = (type, message) => {
    window.parent.papostMessage({
      cmd: type,
      params: message,
    }, '*');
  }
  
  /**
   * 传递当前语言
   * @param {object} language
   */
  postCurrentLanguage = (language) => {
    this.postFatherMessage('changeLanguage', {
      language,
    })
  }

  /**
   * 监听切换语言回调函数
   * @param {any} data 传送数据
   * @returns {any}
   */
  handlerLanguageMessage = (data) => {
    console.log('当前选中语言', data.params.language);
  }

  /**
   * 数据监听
   * @param {object} event
   * @returns {object}
   */
  handleMessage = (event) => {
    const data = event.data;
    if (data.cmd === 'changeLanguage') {
      this.handlerLanguageMessage(data);
    }
  }

  /**
   * 初始化监听
   */
  initWatch = () => {
    window.addEventListener('message', this.handleMessage);
  }
}

export default PostMessage;
