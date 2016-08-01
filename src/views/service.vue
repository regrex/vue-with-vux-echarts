<template>
    <div class="service">
        <div class="type-wrap">
            <checker :value.sync="serviceType" default-item-class="type-item" selected-item-class="type-item-selected">
                <checker-item v-for="(key, value) in serviceTypeMap" :value="key">{{value}}</checker-item>
            </checker>
        </div>
        <div class="service-chart" id="device-echart" style="width: 98%; height: 300px;"></div>
        <div class="service-chart" id="login-echart" style="width: 98%; height: 300px;"></div>
        <!-- <div class="service-chart" id="weekly-echart" style="width: 98%; height: 400px;"></div> -->
        <div class="service-chart" id="gender-echart" style="width: 98%; height: 300px;"></div>
        <div class="service-chart" id="age-echart" style="width: 98%; height: 300px;"></div>
        <div class="service-chart" id="time-echart" style="width: 98%; height: 400px;"></div>
        <table class="top-table">
            <caption>Top10需求资源</caption>
            <tr>
                <th>排名</th>
                <th>医院</th>
                <th>科室</th>
            </tr>
            <tr v-for="item in serviceTopList">
                <td>{{$index + 1}}</td>
                <td>{{item.hosp}}</td>
                <td>{{item.dept}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Checker from 'vux/src/components/checker'
import CheckerItem from 'vux/src/components/checker-item'
import Echarts from 'echarts/lib/echarts'
import EchartsLine from 'echarts/lib/chart/line'
import EchartsPie from 'echarts/lib/chart/pie'
import EchartsBar from 'echarts/lib/chart/bar'
import EchartsToolip from 'echarts/lib/component/tooltip'
import EchartsTitle from 'echarts/lib/component/title'

export default {
    components: {
        Checker,
        CheckerItem
    },
    ready () {
        this.renderChart();
    },
    methods: {
        'renderChart': function () {
            var deviceChart = Echarts.init(document.getElementById('device-echart'));
            deviceChart.setOption({
                title: {
                    text: '端分布',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name: '端分布',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        data: [{
                            name: 'Android',
                            value: 34443
                        }, {
                            name: 'iOS',
                            value: 120032
                        }, {
                            name: 'winPhone',
                            value: 3329
                        }, {
                            name: 'PC',
                            value: 123986
                        }]
                    }
                ]
            });

            /* var weeklyChart = Echarts.init(document.getElementById('weekly-echart'));
            weeklyChart.setOption({
                title: {
                    text: '一周用户数',
                    x: 'center'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'老用户数',
                        type:'bar',
                        data:[3200, 3325, 3051, 3354, 2390, 3330, 3320]
                    },
                    {
                        name:'新增用户数',
                        type:'bar',
                        data:[1220, 1232, 1201, 1434, 950, 2630, 2510]
                    },
                    {
                        name:'推广用户数',
                        type:'bar',
                        data:[1220, 1282, 1913, 2334, 2390, 3430, 3010]
                    }
                ]
            }); */

            var loginChart = Echarts.init(document.getElementById('login-echart'));
            loginChart.setOption({
                title: {
                    text: '登录占比',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name:'登录状态',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '60%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:435, name:'登录', selected:true},
                            {value:679, name:'未登录'}
                        ]
                    }
                ]
            });

            var genderChart = Echarts.init(document.getElementById('gender-echart'));
            genderChart.setOption({
                title: {
                    text: '性别占比',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name:'用户性别',
                        type:'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:333435, name:'男'},
                            {value:302110, name:'女'}
                        ]
                    }
                ]
            });

            var ageChart = Echarts.init(document.getElementById('age-echart'));
            ageChart.setOption({
                title : {
                    text: '年龄分布',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'年龄段',
                        type:'pie',
                        radius : [40, 100],
                        center : ['50%', '50%'],
                        roseType : 'area',
                        data:[
                            {value:10, name:'18岁以下'},
                            {value:5, name:'18岁-24岁'},
                            {value:15, name:'25岁-34岁'},
                            {value:25, name:'35岁-44岁'},
                            {value:20, name:'45岁-54岁'},
                            {value:35, name:'55岁-64岁'},
                            {value:30, name:'64岁以上'}
                        ]
                    }
                ]
            });

            var timeChart = Echarts.init(document.getElementById('time-echart'));
            timeChart.setOption({
                title: {
                    text: '时段分布',
                    x: 'center'
                },
                tooltip : {
                    trigger: 'axis'
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
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['0点','3点','6点','9点','12点','15点','18点','21点','24点']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[380, 23, 401, 1234, 590, 1030, 1098, 2012, 399]
                    }
                ]
            });
        }
    },
    data () {
        return {
            serviceTypeMap: {
                'appoint': '预约',
                'consult': '咨询',
                'infomation': '资讯'
            },
            serviceType: 'appoint',
            serviceTopList: [{
                hosp: '无锡市第九人民医院',
                dept: '皮肤科'
            }, {
                hosp: '四川大学华西医院',
                dept: '眼科'
            }, {
                hosp: '中国人民解放军总医院',
                dept: '产科'
            }, {
                hosp: '复旦大学附属华山医院',
                dept: '男科'
            }, {
                hosp: '北京大学第三医院',
                dept: '外科'
            }, {
                hosp: '上海交通大学附属第九人民医院',
                dept: '儿科'
            }, {
                hosp: '中南大学湘雅医院',
                dept: '妇产科'
            }, {
                hosp: '中日友好医院',
                dept: '耳鼻喉科'
            }, {
                hosp: '西京医院',
                dept: '口腔科'
            }, {
                hosp: '北京人民医院',
                dept: '神经内科'
            }]
        }
    }
}

</script>

<style>
.service .type-wrap {
    text-align: center;
    padding: 20px 0;
}
.service .type-item {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
}
.service .type-item-selected {
    border-color: green;
}
.service .service-chart {
    margin: 20px 0;
}
.service .top-table {
    width: 100%;
    border-collapse: collapse;
    color: #333;
    margin: 20px auto;
}
.service .top-table tbody {
    background: #fff;
}
.service .top-table th {
    text-align: left;
}
.service .top-table th,
.service .top-table td {
    padding: 8px;
    line-height: 1.5;
    vertical-align: top;
    border-top: 1px solid #f4f4f4;
    font-size: 0.8em;
}
.service .top-table caption {
    margin: 10px 0;
}
</style>
