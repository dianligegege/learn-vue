let MyPlugin = {};
MyPlugin.install = function (Vue, options) {
    // 全局属性和方法是定义在Vue的静态方法和属性，不能在实例中使用
    Vue.myGlobalMethod = function () {
        return '我是被返回值';
    };
    Vue.myGlobalMessage = '我是全局属性';

    // 定义在实例上的方法
    Vue.prototype.$myMethod = function () {
        // 可以在这里使用Vue全局属性和方法
        return '我是实例返回值' + Vue.myGlobalMessage;
    };

    // 添加全局资源（自定义指令）
    Vue.directive('my-directive', {
        bind(el, binding) {
            el.style.color = binding.value;
        }
    });

    // 注入组件选项
    Vue.mixin({
        methods: {
            mixinMethod() {
                console.log('我是全局Mixin的方法');
            }
        },
    });

    // 全局过滤器
    Vue.filter('getBigNumber', function(value) {
        if (value > 5) return value;
        return '小于5';
    })
}

export default MyPlugin;