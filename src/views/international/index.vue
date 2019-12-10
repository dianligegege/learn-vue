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