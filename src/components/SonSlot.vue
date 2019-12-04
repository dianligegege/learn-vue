<template>
    <div>
        <!-- 在子组件中设置prop值传给父组件对应slot -->
        <slot name="slot1" data="子slot传出的值">
        </slot>
    </div>
</template>

<script>
export default {
    name: 'SonSlot'
}
</script>