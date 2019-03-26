<template>
    <div>
        <div><b>count:</b>{{ count }}</div>
        <div><b>count+n:</b>{{ countn }}</div>
        <div><b>count+obj.amount:</b>{{ countobj }}</div>

    </div>
</template>

<script>
export default {
    computed: {
        count() {
            this.$store.commit('increment');
            return this.$store.state.count;
        },

        // 载荷是一个值
        countn() {
            // this.$store.commit('incrementn', 10);
            return this.$store.state.countn;
        },

        // 载荷是一个对象
        countobj() {
            this.$store.commit('incrementobj', {
                amount: 20
            })
            return this.$store.state.countobj;
        }
        // 或者这样写
        // countobj() {
        //     type: 'increamentobj',
        //     amount: 20
        // }


    }
}
</script>


