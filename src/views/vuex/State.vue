<template>
    <div>
        <div><code>count: state => state.count,</code>{{ count }}</div>
        <div><code>countAlias: 'count',</code>{{ countAlias }}</div>
        <div><code>state.count + this.localcount;</code>{{ countThis }}</div>
    </div>
</template>

<script>
// 使用mapState要先引入
import { mapState } from 'vuex'

export default {

    data() {
        return {
            localcount: '我是data-localcount',
        }
    },

    // 方法一 引用全局this.$store
    // computed: {
    //     count() {
    //         return this.$store.state.count;
    //     }
    // }

    // 方法二
    computed: mapState({
        count: state => state.count,

        // 传入字符串相当于上面的写法
        countAlias: 'count',

        // 使用this不能使用箭头函数
        countThis (state) {
            return state.count + this.localcount;
        }
    }),

    // 方法三 计算属性名和state的属性名相等可以传一个字符串数组
    // computed: mapState([
    //     'count'
    // ])
}
</script>