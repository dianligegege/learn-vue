<template>
    <div>
        <button
            @click="openWindow"
        >打开弹窗</button>
    </div>
</template>

<script>
export default {
    methods: {
        openWindow() {
            const strWindowFeatures = `
                status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no',
                height=650,
                width=600,
                top=${(window.screen.height - 650) / 2},
                left=${(window.screen.width - 600) / 2},
            `;
            window.open(
                'about:blank',
                'dada',
                strWindowFeatures,
            );
        },
    },
}
</script>