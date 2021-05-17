<template>
    <div>
        <canvas id="canvas" width="400" height="400" />
    </div>
</template>

<script>
export default {
    mounted() {
        const top = 5;
        const left = 5;
        const right = 5;
        const canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');

        // let ctx1 = canvas.getContext('2d');
        // let ctx2 = canvas.getContext('2d');

        // ctx1.fillStyle = "rgb(200,0,0)";
        // ctx1.fillRect (10, 10, 55, 50);

        // ctx2.beginPath();
        // ctx2.moveTo(100, 10);
        // ctx2.lineTo(100, 50);
        // ctx2.lineTo(200, 30);
        // // ctx2.fill();
        // ctx2.closePath();
        // ctx2.stroke();

        ctx.moveTo(200, 200);
        ctx.moveTo(200, 200 - top);
        ctx.lineTo();
    },
};
</script>

<style lang="scss">
    canvas {
        border: 1px solid #ccc;
    }
</style>
