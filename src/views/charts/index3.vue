<template>
    <div class="charts-wrap">
        <v-chart
            class="my-chart"
            :options="polar"
        />
    </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

export default {
    components: {
        'v-chart': ECharts
    },
    data() {
        return {
            all: "121313",
            polar: {
                title: {
                    text: '堆叠区域图3'
                },
                // tooltip: {
                //     show: true,
                //     trigger: 'axis',
                //     // renderMode: 'html',
                //     // confine: false,
                //     // appendToBody: true,
                //     axisPointer: {
                //         type: 'none',
                //         label: {
                //             backgroundColor: '#6a7985'
                //         }
                //     },
                //     formatter: `a0: {a0} a1: {a1} a2: {a2}<br/>b0: {b0} b1: {b1}<br/>c0: {c0} c1: {c1}`,
                //     // formatter: (params) => {
                //     //     let text = '平台 发行量 占比<br/>';
                //     //     params.forEach((item) => {
                //     //         const text1 = `${item.seriesName} ${item.data} <br/>`;
                //     //         text = text + text1;
                //     //     });
                //     //     return text;
                //     // },
                // },
                tooltip: {},
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
                    // 文字未选择样式
                    inactiveColor: 'red',
                    textStyle: {
                        color: 'black',
                        fontWeight: 'bold',
                    },
                    icon: 'circle',
                    selectorLabel: {
                        show: true,
                        color: 'red',
                    },
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            // 刻度标签与轴线的距离
                            margin: 8,
                            formatter: (value, index) => {
                                if (value > 1000) {
                                    return `${value / 10} 十`;
                                }
                            },
                        },
                    }
                ],
                dataset: {
                    source: [
                        ['product', '邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
                        ['周一', 120, 220, 150, 320, 820],
                        ['周二', 132, 182, 232, 332, 932],
                        ['周三', 101, 191, 201, 301, 901],
                        ['周四', 134, 234, 154, 334, 934],
                        ['周五', 90, 290, 190, 390, 1290],
                        ['周六', 230, 330, 330, 330, 1330],
                        ['周七', 210, 310, 410, 320, 1320],
                    ],
                },
                series: [
                    { type: 'line', areaStyle: {}, stack: '总量', encode: { x: 'product', y: '邮件营销', tooltip: ['邮件营销', 'product'] }},
                    { type: 'line', areaStyle: {}, stack: '总量', encode: { x: 'product', y: '联盟广告', tooltip: ['邮件营销', 'product', '联盟广告'] }},
                    { type: 'line', areaStyle: {}, stack: '总量', encode: { x: 'product', y: '视频广告', tooltip: '视频广告', seriesName: [0, 1] } },
                    { type: 'line', areaStyle: {}, stack: '总量', encode: { x: 'product', y: '直接访问', tooltip: '直接访问' } },
                    { type: 'line', areaStyle: {}, stack: '总量', encode: { x: 'product', y: '搜索引擎', tooltip: '搜索引擎' } },
                ],
                visualMap: [
                    {
                        type: 'piecewise',
                    }
                ],
            }
        }
    }
}
</script>

<style lang="scss">
.charts-wrap {
    margin: 0 auto;
    width: 800px;
}
</style>