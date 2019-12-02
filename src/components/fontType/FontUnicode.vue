<template>
    <div>
        <p>组件内引入iconfont.css</p>
        <!-- Unicode -->
        <span class="iconfont">&#xe644;</span>

        <!-- Class -->
        <span class="iconfont icon-jingdian"></span>

        <!-- Symbol -->
        <svg class="icon world" aria-hidden="true">
            <use xlink:href="#icon-duoyuyan"></use>
        </svg>

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

.world {
    width: 20px;
    height: 20px;
    background-color: red;
}
</style>