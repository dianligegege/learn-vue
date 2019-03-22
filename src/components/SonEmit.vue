<template>
    <div>
        <div @click="clickbtn">点击我传给父组件值</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sonmessage: '从子组件emit到父组件的数据'
        }
    },
    methods: {
        clickbtn() {
            this.$emit('stf', this.sonmessage)
        }
    }
}
</script>