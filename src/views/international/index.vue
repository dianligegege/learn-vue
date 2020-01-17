<template>
    <div>
        <p>{{ $t("message") }}</p>
        <p>{{ $t('hello', { name: '源氏' }) }}</p>

        <Select v-model="model1" style="width:200px">
            <Option
                v-for="item in localList"
                :value="item.value"
                :key="item.value"
            >{{ item.label }}</Option>
        </Select>
        <div class="div-bg-box">
            <div class="div-bg">123</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            localList: [
                {
                    value: 'zh',
                    label: '中文',
                },
                {
                    value: 'en',
                    label: '英文',
                }
            ],
            model1: ''
        }
    },
    mounted() {
        this.model1 = this.$i18n.locale;
    },
    watch: {
        model1(val) {
            this.$i18n.locale = val;
        }
    }
}
</script>

<style>
.div-bg {
    width: 100%;
    height: 500px;
    background-image: url('~@/assets/img/bg.png');
    background-repeat: no-repeat;
    background-size: 1920px;
    background-position: center;
}

.div-bg-box {
    margin: 0 auto;
    width: 1920px;
    background-image: radial-gradient(49% 20%, #02C4FF 55%, #011E30 80%);
}
</style>