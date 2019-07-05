<template>
    <div>
        <div :class="propcss">
            {{ msg }}
        </div>
        <div>{{ computedMsg1 }}</div>
    </div>
</template>

<script>
export default {
    /* eslint-disable */
    name: 'LifeSon',
    data() {
        return {
            datamsg: 'datamsg值',
            getsomefun: this.getsome(),
            getotherfun: this.getother(),
        }
    },
    methods: {
        getsome() {
            setTimeout(() => {
                return "data中请求的函数返回值"
            }, 2000);
        },
        getother() {
            return "getother返回值";
        }
    },
    props: {
        msg: {
            type: String,
            default: '',
        },
        propcss: {
            type: String,
            default: '',
        }
    },
    computed: {
        computedMsg1: function () {
            return '计算属性值字符串';
        },
        computedMsg2: function () {
            return this.msg + 'this计算属性的值';
        }
    },
    watch: {
        msg(val) {
            console.log('触发watch',val);
            immediate: true;
        },
        datamsg(val) {
            console.log('created中触发watch',val);
        }
    },
    beforeCreate: function () {
        console.log('#####################beforeCreat#############################');
        // console.log('beforeCreate props', this.msg); // 报错
        console.log(this.$el); // undefined
        console.log('beforeCreatediv节点', document.getElementsByClassName('div1')[0]); // undefined
        console.log('beforeCreat 计算属性字符串值', this.computedMsg1); // undefined
        console.log('beforeCreat 计算属性this值', this.computedMsg2); // undefined
    },
    created: function () {
        console.log('########################created##########################');
        console.log(this.datamsg);//datamsg值
        console.log(this.getsomefun);//undefined
        console.log(this.getotherfun);//getother返回值
        console.log(this.$el); // undefined
        console.log('created props', this.msg); // 成功
        console.log('created div节点', document.getElementsByClassName('div1')[0]); // undefined
        console.log('created 计算属性字符串值', this.computedMsg1);// 成功
        console.log('created 计算属性this值', this.computedMsg2);// 成功
        this.datamsg = 'created改变watch检测的值'; // 没有触发watch回调
    },
    beforeMount: function() {
        console.log('#######################beforeMount###########################');
        console.log(this.getsomefun);//undefined
        console.log(this.$el); // undefined
        console.log('beforeMount props', this.msg); // 成功
        console.log('beforeMount div节点', document.getElementsByClassName('div1')[0]); // undefined
        console.log('beforeMount 计算属性字符串值', this.computedMsg1);// 成功
        console.log('beforeMount 计算属性this值', this.computedMsg2);// 成功
        this.datamsg = 'beforeMount改变watch检测的值'; // 没有触发回调
    },
    mounted: function() {
        console.log('######################mounted############################');
        console.log(this.getsomefun);//undefined
        console.log(this.$el); // 成功 可以操作真是dom
        console.log('mounted props', this.msg); // 成功
        console.log('mounted div节点', document.getElementsByClassName('div1')[0]); // undefined
        console.log('mounted 计算属性字符串值', this.computedMsg1);// 成功
        console.log('mounted 计算属性this值', this.computedMsg2);// 成功
        this.datamsg = 'mounted改变watch检测的值'; // 触发回调
        this.$nextTick(function() {
            console.log('所有子组件被挂载');
        })
    },
    beforeUpdate: function() {
        console.log('######################beforeUpdate############################');
        console.log('beforeUpdate,调用beforeUpdate');
    },
    updated: function() {
        console.log('######################updated############################');
        console.log(this.$el); // 成功
    },
}
</script>

<style>
    .propcss1 {
        background-color: skyblue;
    }

    .propcss2 {
        background-color: greenyellow;
    }

    .propcss3 {
        height: 50px;
    }
</style>

