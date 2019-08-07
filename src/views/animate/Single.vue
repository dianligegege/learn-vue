<template>
    <div>
        <!-- transition封装组件 -->
        <transition name="ani1">
            <div class="d1" v-if="show1">点击显示/消失</div>
        </transition>
        <button @click="show1 = !show1">点击transition显示/消失</button>

        <transition name="ani2">
            <div class="d1" v-if="show2">点击显示/消失</div>
        </transition>
        <button @click="show2 = !show2">点击animation显示/消失</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show1: true,
            show2: true,
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
        /* transition过渡从无到默认属性或从默认属性到无 */
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

    .ani2-enter-active {
        /* animation动画，可以突破默认属性的限制，然后动画结束的下一时刻变成默认属性 */
        animation: showHidden 2s;
    }

    .ani2-leave-active {
        /* animation动画，可以突破默认属性的限制，然后动画结束的下一时刻变成默认属性 */
        animation: showHidden 2s reverse;
    }

    @keyframes showHidden {
        0% {
            transform: scale(0);
        }

        50% {
            transform: scale(2);
        }

        70% {
            transform: scale(4);
        }

        100% {
            transform: scale(1);
        }
    }
</style>
