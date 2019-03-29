<template>
    <div>
         {{ countobj }}
        <span @click="incrementobj(12)">加12</span>
        <span @click="incrementobj1(24)">加24</span>
        <div>
            count:{{ this.$store.state.count }}
            <span @click="incrementAsync">异步Actions</span>
        </div>
        <div>
            {{ this.$store.state.countAsync }}
            <span @click="incrementMutation()">mutation测试异步</span>
        </div>
        <div>
            {{ this.$store.state.count }}
            <span @click="actionA">promise actionA</span>
        </div>
        <div>
            count:{{ this.$store.state.count }}
            countn:{{ this.$store.state.countn }}
            <span @click="actionB">promise actionB</span>
        </div>
        <div>
            count: {{ this.$store.state.count }}
            <span @click="actionC">async/await</span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        countobj() {
            return this.$store.state.countobj;
        }
    },
    methods: {
        incrementobj(amount) {
            this.$store.dispatch('incrementobj', {
                // 使用ES6属性值简化写法1.同名省略，2.属性值使用变量
                amount
            })
        },
        // 或者
        incrementobj1(amount) {
            this.$store.dispatch({
                type: 'incrementobj',
                amount
            });
        },

        // 使用map映射
        ...mapActions([
            'incrementAsync',
            "incrementobj" // 带参数的
        ]),
        // 相当于
        // incrementAsync() {
        //     this.$store.dispatch('incrementAsync')
        // }
        // incrementobj(payload) {
        //     this.$store.dispatch('incrementobj', {
        //         // 使用ES6属性值简化写法1.同名省略，2.属性值使用变量
        //         payload
        //     })
        // },

        // 验证一下mutations实现异步操作，草，实现了！！
        incrementMutation() {
            this.$store.commit('incrementAsync');
        },

        // 使用promise
        actionA() {
            this.$store.dispatch('actionA');
        },

        actionB() {
            this.$store.dispatch('actionB');
        },

        actionC() {
            this.$store.dispatch('actionC');
        }

    }
}
</script>
