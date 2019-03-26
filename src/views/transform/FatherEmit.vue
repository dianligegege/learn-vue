<template>
    <div>
        <Son
            @stf='showmessage'
        ></Son>
        <div>
            {{ stfdata }}
        </div>
    </div>
</template>

<script>
import Son from '@/components/SonEmit.vue'
export default {
    components: {
        Son
    },
    data() {
        return {
            stfdata: '我要变了'
        }
    },
    methods: {
        showmessage(data) {
            this.stfdata = data
        },
    },
}
</script>