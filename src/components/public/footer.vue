<template>
    <div class="footer-box">
        <p class="footer">
            我是通用全局组件
        </p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-box {
    height: calc(100vh - 68px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .footer {
        text-align: center;
        line-height: 100px;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-color: skyblue;
    }
}
</style>