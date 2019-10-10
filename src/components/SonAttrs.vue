<template>
    <div>
        {{ fatherData }}
    </div>
</template>

<script>
export default {
    computed: {
        fatherData() {
            return this.$attrs.name;
        },
    },
    mounted() {
        console.log(this.$attrs);
    }
}
</script>

