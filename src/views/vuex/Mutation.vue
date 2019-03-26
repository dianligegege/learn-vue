<template>
    <div>
        <div><b>count:</b>{{ count }}</div>
        <input type="submit" name="Button1" value="按学期查询" id="Button1" class="button">
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    }
}
</script>


