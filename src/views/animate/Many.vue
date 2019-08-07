<template>
    <div>
        <transition name="an1" mode="out-in">
            <!-- 同一transition下的不同组件通过key值来标记，所以可以通过改变key值来实现if else的效果 -->
            <button v-bind:key="state" @click="clickBtn">
                {{ state }}
            </button>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            state: true
        }
    },
    methods: {
        clickBtn () {
            this.state = !this.state;
        }
    },
}
</script>

<style>
.an1-enter-active .an1-leave-active {
    transition: all 2s;
}
</style>


