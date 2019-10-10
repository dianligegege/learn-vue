<template>
    <div>
        fatherAttrs
        <son-attrs
            :name="name"
            v-bind="$attrs"
        />
    </div>
</template>
<script>
import SonAttrs from '@/components/SonAttrs.vue';
export default {
    components: {
        SonAttrs,
    },
    data() {
        return {
            name: '使用$attrs',
        };
    },
}
</script>
