<template>
    <div id="div1">
        <button @click="btn">添加实例方法</button>
        <div>{{ message }}</div>
        <div v-my-directive="'red'">我使用了全局自定义指令</div>

        <button @click="mixinMethod">全局混入mixin的方法</button>

        <div>
            <span v-for="(item, index) in numberArr" :key="index">
                {{ item | getBigNumber  }}
            </span>
        </div>

        <button @click="$toast('整个全局提醒')">全局插件</button>

        <button @click="tosome">dadada</button>
        <div>{{ message2 }}</div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            message1: '',
            numberArr: [1,3,2424,24,1,1],
            message2: '路由变化',
        }
    },
    methods: {
        btn() {
            this.message = this.$myMethod();
        },
        tosome() {
            this.$router.push('./plugins')
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('router-to', to);
        console.log('router-from', from);
        next(vm => {
            // vm.$set(this.$data, 'message2', '前置路由传的值');
            vm.$data.message2 = '前置路由传的值';
        });
    },
    beforeRouteUpdate (to, from, next) {
        console.log('update-to', to);
        console.log('update-from', from);
        next();
    },
    watch: {
        $route: {
            handler(val, from) {
                console.log('wach-to', val);
                console.log('wach-from', from);
            },
            immediate: true,
            deep: true,
        }
    },
}
</script>