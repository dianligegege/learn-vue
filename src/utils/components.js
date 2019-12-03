import Vue from "vue";

const component = require.context('@/components/public', false, /\.vue$/);

const requireAll = context => context.keys().map(context);

// 下面的传参相当于 {default: xxx} = {default:item} ,即item代表dafault导出的东西， 知识点：对象的解构赋值
requireAll(component).forEach(({default:item}) => {
    // 通用组件名字为vue export.default的name
    Vue.component(`Pub${item.name}`, item);
});