<template>
    <div>
        <div class="i1">
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
            </el-input>
        </div>
        <div class="i2">
            <p> <strong>原始数据</strong></p>
            {{ sretextarea }}
        </div>
        <div class="i2">
            <p><strong>replace处理后传输数据</strong></p>
            {{ handlerInput }}
        </div>
        <div class="i2">
            <p><strong>前端展示数据</strong></p>
            <div v-html="handlerInput" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textarea: '',
        };
    },
    computed: {
        handlerInput() {
            return this.textarea.replace(/\n|\r/g, '</br>');
        }
    },
};
</script>

<style lang="scss">
.i1 {
    textarea {
        padding: 10px;
        width: 600px;
        height: 200px;
        font-size: 16px;
    }
}
</style>