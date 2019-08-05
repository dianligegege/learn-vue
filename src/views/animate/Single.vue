<template>
    <div>
        <!-- transition封装组件 -->
        <transition name="ani1">
            <div class="d1" v-if="show">点击显示/消失</div>
        </transition>
        <button @click="show = !show">点击显示/消失</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    },
}
</script>

<style>
    .d1 {
        font-size: 20px;
        color: red;
    }

    /* 这俩设置的是从无到有或从有到无的过程，所以设置transition来定义过程时间，延时，变化函数，变化的属性 */
    .ani1-enter-active {
        transition: all 2s;
    }

    .ani1-leave-active {
        transition: all 2s;
    }

    /* 这四个设置的是某一个时间节点的 状态，所以设置相关属性来定义样式 */

    /* 点击显示按钮的下一个瞬间的状态 */
    .ani1-enter {
        font-size: 12px;
        color: green;
    }

    /* 完全显示的前一个瞬间的状态,测试无效，元素会忽略设置的样式直接变为其默认样式 */
    .ani-enter-to {
        font-size: 40px;
    }

    /* 点击隐藏按钮的下一个瞬间的状态 */
    .ani1-leave {
        font-size: 40px;
    }

    /* 完全消失前一个瞬间的状态，测试无效, 元素会从默认样式开始变化 */
    .ani1-leave-to {
        font-size: 12px;
    }
</style>
