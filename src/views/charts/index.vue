<template>
    <div class="charts-wrap">
        <v-chart
            class="my-chart"
            :options="polar"
        />
        <Index1/>
        <Index2/>
    </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import Index1 from './index1';
import Index2 from './index2';

export default {
    components: {
        'v-chart': ECharts,
        Index1,
        Index2,
    },
    data() {
        return {
            all: "121313",
            polar: {
                title: {
                    text: '堆叠区域图'
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    // renderMode: 'html',
                    // confine: false,
                    // appendToBody: true,
                    axisPointer: {
                        type: 'none',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    formatter: `a0: {a0} a1: {a1} a2: {a2}<br/>b0: {b0} b1: {b1}<br/>c0: {c0} c1: {c1}`,
                    // formatter: (params) => {
                    //     console.log(params);
                    //     let text = '平台 发行量 占比<br/>';
                    //     params.forEach((item) => {
                    //         const text1 = `${item.seriesName} ${item.data} <br/>`;
                    //         text = text + text1;
                    //     });
                    //     return text;
                    // },
                },
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
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [120, 132, 101, 134, 90, 230, 210],
                        encode: {
                            x: [1,2,3],
                            y: [4,5,6],
                        },
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {},
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.charts-wrap {
    margin: 0 auto;
    width: 800px;
    height: 1000px;
}
</style>