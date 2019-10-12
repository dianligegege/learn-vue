<template>
    <div>
        <button @click="btn">点击一下</button>
        
        <div ref="d1">d1: {{ message }}</div>
        <div ref="d2">d2: </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '我是message',
        };
    },
    methods: {
        btn() {
            console.log(this.message);
            this.message = '我被变更';
            this.$nextTick(() => {
                this.$refs.d2.innerHTML = this.$refs.d1.innerHTML;
            })
        }
    },
}
</script>