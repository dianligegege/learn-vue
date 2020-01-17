<template>
    <div>
        <div class="swiper-box">
            <h1>realIndex:{{ realIndex1 }}</h1>
            <swiper
                ref="mySwiper1"
                :options="swiperOption1"
            >
                <swiper-slide
                    v-for="(item, index) in slideList"
                    :key="index"
                >
                    <!-- <div class="swiper-slide-item"> -->
                        {{ item }}
                    <!-- </div> -->
                </swiper-slide>
            </swiper>
        </div>
        <div class="swiper-box swiper-box2">
            <h1>realIndex:{{ realIndex2 }}</h1>
            <swiper
                ref="mySwiper2"
                :options="swiperOption2"
            >
                <swiper-slide
                    v-for="(item, index) in slideList"
                    :key="index"
                >
                    <div>
                        {{ item }}
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            realIndex1: 0,
            realIndex2: 0,
            slideList: [
                '第零张',
                '第一张',
                '第二张',
                '第三张',
                '第四张',
                '第五张',
                '第六张',
                '第七张',
            ],
            swiperOption1: {
                // 默认slide索引
                // initialSlide: 0,

                // active slide会居中
                centeredSlides: true,
                // 设置最左边的slide为active slide(centeredSlides为false)
                // normalizeSlideIndex: true,
                // 设置slider容器能够同时显示的sliders数量
                slidesPerView: 'auto',
                // 几个slider为一组
                // slidesPerGroup: 2,
                // slider之间的间距
                spaceBetween: 30,
                // 最后/最先一个slide与右边框的预偏移量
                slidesOffsetBefore: -164,
                // slidesOffsetAfter: 100,

                // loop循环模式
                loop: true,
                // loopAdditionalSlides: 1,
                // loopedSlides: 10,

                // progress进度
                // watchSlidesProgress: true,
                // 开启进度后给active slide添加class pre active next及 visible
                // watchSlidesVisibility: true,

                // 阻止点击默认事件
                // prevnetClicks: true,
                // 点击切换slide
                // slideToClickedSlide: true,

                // 触摸比例，0无法滑动
                touchRatio: 0,
                // 或下面这样, 点击也不会滑动
                // allowSlideNext: false,
                // allowSlidePrev: false,

                // observer: true,
                // observeParents: true,
                // observeSlideChildren: true,

                // direction : 'vertical',

                // 自动播放
                // autyplay: {
                //     delay: 3000,
                // },

                updateOnWindowResize: true,

                on: {
                    click: () => {
                        const mySwiper = this.$refs.mySwiper1.swiper;

                        // const mySwiper = this.$refs.mySwiper.swiper;
                        // const myRealIndex = Number(mySwiper.realIndex);
                        // this.activeSlide = myRealIndex < 9 ? `0${myRealIndex + 1}` : '10';
                        // mySwiper.updateSize();
                        // console.log('activeIndex', mySwiper.activeIndex);
                        // console.log('realIndex', mySwiper.realIndex);
                        // console.log('clickedIndex', mySwiper.clickedIndex);
                        if (mySwiper.clickedIndex > mySwiper.activeIndex + 1) {
                            mySwiper.slideNext();
                        } else if (mySwiper.clickedIndex < mySwiper.activeIndex) {
                            mySwiper.slidePrev();
                        }
                        const myRealIndex = Number(mySwiper.realIndex);
                        this.realIndex1 = myRealIndex;
                    },
                    // transitionEnd: () => {
                    //     alert('过渡结束');
                    // },
                },
            },
            swiperOption2: {
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 30,
                slidesOffsetBefore: -164,
                loop: true,
                touchRatio: 0,

                on: {
                    click: () => {
                        const mySwiper = this.$refs.mySwiper2.swiper;

                        if (mySwiper.clickedIndex > mySwiper.activeIndex + 1) {
                            mySwiper.slideNext();
                        } else if (mySwiper.clickedIndex < mySwiper.activeIndex) {
                            mySwiper.slidePrev();
                        }
                        const myRealIndex = Number(mySwiper.realIndex);
                        this.realIndex2 = myRealIndex;
                    },
                    
                },
            },
        };
    },
}
</script>

<style lang="scss">
.swiper-box {
    width: 1200px;
    margin: 100px auto;
    background-color: beige;
    height: 350px;

    &.swiper-box2 {
        width: 100%;
    }

    h1 {
        padding: 30px;
    }

    /deep/ .swiper-container {
        .swiper-slide {
            width: 300px;
            height: 200px;
            background-color: #fff;
            border: 1px solid rgb(82, 77, 77);
            font-size: 20px;
            line-height: 100px;
            opacity: 0.5;

            &.swiper-slide-next,
            // &.swiper-slide-prev,
            &.swiper-slide-active {
                opacity: 1;
                background-color: #ccc;
            }
                
        }
    }
}
</style>