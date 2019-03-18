<template>
    <div>
        <div>
            <input type="text" ref="input1">
        </div>
        <Son ref="sonref1">
        </Son>
        <ul ref="students">
            <li
                v-for="s in student"
                :key="s.index"
                ref="onestudent" 
            >{{ s.name }}</li>
        </ul>
    </div>
</template>

<script>
import Son from '@/components/SonRef.vue';

export default {
    /* eslint-disable */
    name: 'FatherRef',
    components: {
        Son
    },
    data() {
        return {
            student:[
                {name: 'zhangli', age: 32},
                {name: 'dadaf', age: 23},
                {name: 'aweae', age: 29}
            ]
        }
    },
    mounted: function(){
        this.$refs.input1.value = '使用ref获取dom元素',
        this.$refs.sonref1.setmessage('父组件通过ref设置子组件内容')
        console.log(this.$refs.onestudent); // 返回一个数组
        console.log(this.$refs.students); // 返回ul
    }
}
</script>
