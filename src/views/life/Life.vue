<template>
    <div class="d1">
        <LifeSon
            :msg='msg'
            :propcss='propcss'
        >
        </LifeSon>
        <button @click="msg += 'prop传值变化';propcss = 'propcss2'">重绘：点击变化prop和propcss</button>
        <button @click="reflow">回流</button>

    </div>
</template>

<script>
import LifeSon from './LifeSon';

export default {
    /* eslint-disable */
    name: 'Life',
    components: {
        LifeSon,
    },
    data() {
        return {
            msg: 'prop传的值',
            propcss: 'propcss1',
        }
    },
    methods: {
        reflow() {
            let childdiv = document.createElement('div');
            childdiv.innerHTML='<h1>我是新加的div</h1>'
            document.getElementsByClassName('d1')[0].appendChild(childdiv);
        }
    }
}
</script>
