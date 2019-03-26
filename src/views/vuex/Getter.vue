<template>
    <div>
        <div><b>this.$store.doneTodos</b> {{ doneTodos }}</div>
        <div><b>this.$store.getterlength</b> {{ getterlength[0] }}</div>
        <div><b>this.$store.getterById</b> {{ getterById }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        doneTodos() {
            return this.$store.getters.doneTodos;
        },
        getterlength() {
            return this.$store.getters.getterlength;
        },
        // 计算属性是例如this.$store.getters.getterById(1)发生变化时会重新执行getterById()函数，原来和watch还有点相似啊
        getterById() {
            return this.$store.getters.getterById(1);
        }
    },

    // 使用mapGetters
    // computed: {
        // 使用对象展开运算符将getter混入computed对象中
        // mapGetters(['doneTodos','getterlength',]) 应该是会生成一个数组，
        // 包含每个与getters同名的computed函数，所以使用展开运算符可以转为正常状态。
        // ...mapGetters([
        //     'doneTodos',
        //     'getterlength',
        // ])
        // 或者 可以不getters属性取另一个名字
        // mapGetters({
        //     donCount: 'donrTodos'
        // })
    // },
    mounted() {
        console.log(this.getterlength);
    },
}
</script>
