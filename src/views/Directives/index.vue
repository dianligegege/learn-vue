<template>
    <div>
        <div
            v-changeColor="'red'"
            v-pin1:[bc]="'#ccc'"
        >
            我是div
        </div>
        <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
        <div v-demo:foo.a.b="message"></div>

        <button @click="$router.push('./plugins')">路由跳转</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            bc: 'backgroundColor',
            direction: 'left',
            message: '我是message',
        }
    },
    directives: {
        changeColor: {
            bind: function (el, bind) {
                el.style.color = bind.value;
            }
        },
        demo: {
            bind: function (el, binding, vnode) {
                var s = JSON.stringify
                el.innerHTML =
                'name: '       + s(binding.name) + '<br>' +
                'value: '      + s(binding.value) + '<br>' +
                'expression: ' + s(binding.expression) + '<br>' +
                'argument: '   + s(binding.arg) + '<br>' +
                'modifiers: '  + s(binding.modifiers) + '<br>' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
            }
        },
        pin1: {
            bind: function (el, binding) {
                // 动态绑定失败，binding.arg = '[bc]',应该为backgroundColor
                console.log(binding);
                el.style[binding.arg] = binding.value;
            },
            inserted: function (el, binding) {
                console.log(binding);
                el.style[binding.arg] = binding.value;
            }
        },
        pin: {
            bind: function (el, binding, vnode) {
                console.log(binding.arg);
                el.style.position = 'fixed'
                var s = (binding.arg == 'left' ? 'left' : 'top')
                el.style[s] = binding.value + 'px'
            }
        }
    }
}
</script>