<template>
    <div>
        <p>测试国际化:{{ $t('hello', {name: '源氏'}) }}</p>
        <PubFooter/>
    </div>
</template>

<script>
export default {
    name: 'require',
}
</script>