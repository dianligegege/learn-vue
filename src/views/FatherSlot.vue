<template>
    <div>
        fatherslot
        <son-slot>
            <!-- 父组件设置slot-scope属性获取对应子组件传出的值 -->
            <div slot="slot1" slot-scope="sonprop">
                {{
                    sonprop
                }}
            </div>
        </son-slot>
    </div>
</template>
<script>
import SonSlot from '@/components/SonSlot.vue';
export default {
    components: {
        SonSlot,
    },
}
</script>
