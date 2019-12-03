// 创建一个上下文环境，表示引用该代码相当于引用 './svg' 文件目录下的以 '.svg' 为结尾的问价，false 表示值搜索子文件，不在向下搜索

// req 是被导出的一个（require）函数，该函数有三个属性，resolve keys id
// resolve 是一个函数，它返回 request 被解析后得到的模块 id。
// keys 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的 request 组成。
const req = require.context("./svg", false, /\.svg$/);

// req 函数会接收 key 值，返回 key 值对应的上下文对象
// 相当于 Object.values() 没有这个方法，所以先 keys() 再 map()
req.keys().map(req);

// const cache = {};
// req.keys().forEach(item => {
//     cache[item] = req(item);// req 接收一个参数 request
// });


import Vue from "vue";
import SvgIcon from "@/components/common/SvgIcon";

// 全局注册 SvgIcon 组件
Vue.component("SvgIcon", SvgIcon);