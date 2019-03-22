<template>
    <div>
        <h2>子组件</h2>
        <p>{{ sonref1 }}</p>
        <p ref="sonref2"></p>
    </div>
</template>

<script>
export default {
    name: 'SonRef',
    data() {
        return {
            sonref1: ''
        }
    },
    methods: {
        setmessage(v) {
            this.sonref1 = v
        }
    }
}
</script>
