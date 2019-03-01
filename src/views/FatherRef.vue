<template>
    <div>
        <div>
            <input type="text" ref="input1">
        </div>
        <Son ref="sonref1">

        </Son>
    </div>
</template>

<script>
import Son from '@/components/SonRef.vue';

export default {
    name: 'FatherRef',
    components: {
        Son
    },
    mounted: function(){
        this.$refs.input1.value = '使用ref获取dom元素',
        this.$refs.sonref1.setmessage('父组件通过ref设置子组件内容')
        console.log(this.$refs.sonref2)
    }
}
</script>
