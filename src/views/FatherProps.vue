<template>
    <div>
        <Son 
            fts1 = '父组件传的字符串值'
            :fts2 = 'activevalue'
            fts3 = 'red'
            :fts4 = 'fts4'
            :fts5 = 'fts5'
            :fts6 = 'fts6'
        ></Son>
    </div>
</template>

<script>
import Son from '@/components/SonProps.vue'
export default {
    name: 'Father',
    components: {
        Son
    },
    data() {
        return {
            activevalue: '父组件传的动态值',
            fts4: {
                color: 'green',
                // 横杠变大写
                fontSize: '25px'
            },
            fts5: {
                fontWeight: 900,
            },
            fts6: 'fts6'
        }
    }
}
</script>