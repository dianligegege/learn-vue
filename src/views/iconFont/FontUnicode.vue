<template>
    <div>
        <p>组件内引入iconfont.css</p>
        <!-- Unicode -->
        <span class="iconfont unicode">&#xe644;</span>

        <!-- Class -->
        <span class="iconfont icon-jingdian class"></span>

        <!-- Symbol -->
        <svg class="icon symbol" aria-hidden="true">
            <use xlink:href="#icon-duoyuyan"></use>
        </svg>

        <!-- 使用svg 使用了svg-sprite-loader被过滤掉了没处理-->
        <img src="../../assets/icons/svg/notFind.svg" alt="">

    </div>
</template>

<script>
// symbol
import '@/assets/fonts/iconfont.js'

export default {
    name: 'fontUnicode'
}
</script>

<style>
@import '../../assets/fonts/iconfont.css';

.unicode {
    color: red;
}

.class {
    color: red;
}

.symbol {
    width: 20px;
    height: 20px;
    /* 无效，因为他是svg */
    color: red;
}

img {
    width: 200px;
    height: 200px;
}
</style>