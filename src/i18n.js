import Vue from 'vue'
import VueI18n from 'vue-i18n'
import localMessage from './locales'

Vue.use(VueI18n)

// function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     // console.log(key); // ./en.json
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     // console.log(matched);// ["zh.", "zh", index: 2, input: "./zh.json", groups: undefined]
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       // locales(key)取得上下文中那个key对应的文件
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }


export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  // 方法一，使用上下文获取json文件
  // messages: loadLocaleMessages()
  // 方法二，语言包文件中使用js统一引入，然后在这里直接引入js文件
  messages: localMessage
})
