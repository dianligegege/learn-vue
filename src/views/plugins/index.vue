<template>
    <div>
        <button @click="btn">添加实例方法</button>
        <div>{{ message }}</div>
        <div v-my-directive="'red'">我使用了全局自定义指令</div>

        <button @click="mixinMethod">全局混入的方法</button>

        <div v-for="(item, index) in numberArr" :key="index">
            {{ item | getBigNumber  }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            message1: '',
            numberArr: [1,3,5,6,7,2424,24,4,6,1,1,1],
        }
    },
    methods: {
        btn() {
            this.message = this.$myMethod();
        },
    },
}
</script>