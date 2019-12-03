<template>
    <div>
        <!-- 直接使用被svg-sprite-loader处理 -->
        <svg>
            <use xlink:href="#icon-notFind"></use>
        </svg>

        <svg>
            <use xlink:href="#icon-notFind1"></use>
        </svg>

        <!-- 直接使用全局注册的组件 -->
        <SvgIcon
            iconClass="notFind"
            className="people"/>
    </div>
</template>

<script>

export default {
    name: 'fontSvg',
    mounted() {
        const obj1 = {
            a: 1,
            b: 2,
        };

        console.log(Object.keys(obj1).map((item) => item));
    },
}
</script>

<style>
    .svg-icon-people {
        width: 100px;
        height: 100px;
    }
</style>