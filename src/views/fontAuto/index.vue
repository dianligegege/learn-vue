<template>
    <div>
        <input
            type="text"
            v-model="input1"
        >
        <div
            class="d1">
            <span
                class="span1"
                style="font-size: 20px;"
                ref="fontContent">
                {{ input1 }}
            </span>
        </div>

        <button @click="getStyle">
            获取元素属性
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input1: '我是一个输入框1agalgdakng;ang;ahalghalg234',
        }
    },
    mounted() {
        this.changeFont();
    },
    watch: {
        input1:{
            handler(val) {
                this.changeFont();
            }
        }
    },
    methods: {
        changeFont() {
            this.num++;
            const fontContent = this.$refs.fontContent.clientWidth;
            const fs = parseInt(this.$refs.fontContent.style.fontSize);
            if (fontContent > 200 && fs > 2) {
                // 可以获取行内元素的属性，但是在style标签内定义的样式获取不到
                this.$refs.fontContent.style.fontSize = `${fs - 2}px`;
                this.changeFont(fontContent);
            } else {
                return;
            }
        },
        getStyle() {
            console.log(this.$refs.fontContent.style);
        }
    },
    
}
</script>

<style scoped>
.span1 {
    display: inline-block;
    font-size: 20px;
    word-break: keep-all;
}

.d1 {
    margin: 20px auto;
    width: 200px;
    word-wrap: keep-all;
    border: 1px solid #ccc;
}
</style>