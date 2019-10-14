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
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            message1: '',
            numberArr: [1,3,2424,24,1,1],
        }
    },
    methods: {
        btn() {
            this.message = this.$myMethod();
        },
    },
}
</script>