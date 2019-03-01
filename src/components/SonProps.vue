<template>
    <div>
        <p>{{ fts1 }}</p>
        <p>{{ fts2 }}</p>
        <hr>
        <p class="fts6">父组件传的类名 class="fts6"</p>
        <p :style="{color:fts3}">父组件传的颜色值方法1 :style="{color:fts3}"</p>
        <p :style="[fts4]">父组件传的对象属性方法2 :style="[fts4]"</p>
        <p :style="fts4">父组件传的对象属性方法3 :style="fts4"</p>
        <p :style="[fts4,fts5]">父组件传的对象属性方法4 :style="[fts4,fts5]"</p>
        <hr>
        <p class="slocal4">父组件传的类名 class="fts6"</p>
        <p :style="{color:slocal1}">子组件data传的颜色值方法1 :style="{color:slocal1}"</p>
        <p :style="[slocal2]">子组件data传的对象属性方法2 :style="[slocal2]"</p>
        <p :style="slocal2">子组件data传的对象属性方法3 :style="slocal2"</p>
        <p :style="[slocal2,slocal3]">子组件data传的对象属性方法4 :style="[fts2,fts3]"</p>
    </div>
</template>

<script>
export default {
    name: 'Son',
    props: {
        fts1: {
            type: String,
            default: '默认值'
        },
        fts2: {
            type: String,
            default: '默认值'
        },
        fts3: {
            type: String,
            default: '颜色默认值'
        },
        fts4: {
            type: Object,
            default: '默认值'
        },
        fts5: {
            type: Object,
            default: '默认值'
        },
        fts6: {
            type: String,
            default: '默认值'
        }
    },
    data() {
        return {
            slocal1: 'red',
            slocal2: {
                color: 'green',
                fontSize: '25px',
            },
            slocal3: {
                fontWeight: 900
            },
            slocal4: 'slocal4'
        }
        
    }
}
</script>
<style>
    .fts6 {
        color: blue;
    }

    .slocal4 {
        color: blue;
    }
</style>
