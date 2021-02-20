<template>
    <div class="barage">
        <!-- 1. 固定数量循环弹幕 -->
        <div class="list">
            <div
                v-for="(item, index) in itemList"
                :key="index"
                class="item"
            >
                {{ item }}
            </div>
        </div>
        <!-- 2. 实时弹幕 -->
        <div class="list2" id="danmu2"/>
    </div>
</template>
<script>

export default {
    name: 'Barrage',
    data() {
        return {
            itemList: [
                '弹幕1',
                '弹幕2',
                '弹幕3',
                '弹幕4',
                '弹幕5',
                '弹幕6',
                '弹幕7',
            ],
            danmuList: [

            ],
            flag: 0,
            newTime: 0,
        };
    },
    mounted() {
        const box = document.getElementById('danmu2');
        let width = box.offsetWidth;
        const runkeyframes =` @keyframes barrage {
            from {
                -webkit-transform: translate3d(${width}px,0,0);
            }
            to {
                -webkit-transform: translate3d(${-width}px,0,0);
            }
        }`
        // 创建style标签
        const style = document.createElement('style');
        // 设置style属性
        style.type = 'text/css';
        // 将 keyframes样式写入style内
        style.innerHTML = runkeyframes;
        // 将style样式存放到head标签
        document.getElementsByTagName('head')[0].appendChild(style);

        this.startDanmu();
        this.clearDom();
    },
    methods: {
        startDanmu() {
            setTimeout(() => {
                const box = document.getElementById('danmu2');
                const dom = document.createElement('div');
                const text = `弹幕${this.flag}`;
                const myClass = (this.flag) % 2 !== 0 ? 'odd-item' : 'even-item';
                dom.innerText = text;
                dom.classList.add("danmu-item", myClass);
                this.flag += 1;
                this.danmuList.push(text);
                // 检验是否可以发射弹幕
                let go = false;
                let showDanmu = true;
                
                let check = (immediate) => {
                    // 根据距离校验
                    // const lastChild = box.childNodes[box.childNodes.length - 1];
                    // if (lastChild) {
                    //     const transform = window.getComputedStyle(lastChild, null)['transform'];
                    //     const left = transform.split(',')[4];
                    //     showDanmu = left < box.offsetLeft + box.offsetWidth - 700;
                    // }
                    // 根据时间校验
                    const now =new Date().getTime();
                    showDanmu = now - this.newTime > 500;
                    setTimeout(() => {
                        if (!go) {
                            if (showDanmu) {
                                box.appendChild(dom);
                                this.newTime = new Date().getTime();
                                go = true;
                            }
                        } else {
                            check();
                        }
                    }, immediate ? 0 : 1);
                };
                check(true);
                // const lastChild = box.childNodes[box.childNodes.length - 1];
                // // console.log(box.childNodes);
                // if (lastChild) {
                //     const transform = window.getComputedStyle(lastChild, null)['transform'];
                //     const left = transform.split(',')[4];
                //     console.log(left);
                // }
                // const left = transform.
                // console.log(lastChild.offsetLeft);

                box.appendChild(dom);
                this.startDanmu();
                this.clearDom();
            }, 2000);
        },
        clearDom() {
            const box = document.getElementById('danmu2');
            const child = box.childNodes;
            child.forEach(item => {
                const left = window.getComputedStyle(item, null)['transform'];
                if (left.indexOf(`-${box.offsetWidth}`) !== -1) {
                    box.removeChild(item);
                    this.danmuList.shift();
                }
            });
        }
    },
};
</script>
<style lang='scss'>
.barage {
    margin: 20px auto;
    width: 800px;
    height: 800px;
    background: #ccc;
    overflow: hidden;

    .list {
        width: max-content;
        display: flex;
        transform: translateX(600px);
        animation: danmu 5s infinite linear;
        height: 100px;

        .item {
            width: 80px;

            &:nth-child(even) {
                position: relative;
                top: 30px;
            }
        }
    }

    @keyframes danmu {
        from {
            transform: translateX(800px);
        }
        to {
            transform: translateX(-800px);
        }
    }

    .list2 {
        background: rgb(119, 117, 117);
        height: 100px;
        display: flex;
        position: relative;

        .danmu-item {
            position: absolute;
            transform: translate3d(800px, 0, 0);
            visibility: visible;
            width: 100px;
            animation: barrage 10s linear forwards;
            border: 1px solid skyblue;

            &.odd-item {
                top: 30px;
            }
        }
    }
}
</style>
