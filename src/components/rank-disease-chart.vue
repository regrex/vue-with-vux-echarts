<template>
    <div id="disease-echart" style="width: 98%; height: 400px;"></div>
</template>

<script>
import Echarts from 'echarts/lib/echarts'
import EchartsBar from 'echarts/lib/chart/bar'
import EchartsToolip from 'echarts/lib/component/tooltip'
import EchartsTitle from 'echarts/lib/component/title'

export default {
    props: ['disease'],
    ready () {
        this.renderChart();
    },
    methods: {
        'renderChart': function () {
            var chartData = {
                disease: [
                  {
                    id: "38",
                    res_type: "3",
                    month: "201606",
                    res_id: "8462",
                    res_name: "感冒",
                    appoint_count: "17",
                    search_count: "0",
                    psquery_count: "302628",
                    follow_count: "0",
                    total_count: "302645",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "197",
                    res_type: "3",
                    month: "201606",
                    res_id: "9428",
                    res_name: "中毒",
                    appoint_count: "1",
                    search_count: "0",
                    psquery_count: "270718",
                    follow_count: "0",
                    total_count: "270719",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "137",
                    res_type: "3",
                    month: "201606",
                    res_id: "8524",
                    res_name: "过敏",
                    appoint_count: "12",
                    search_count: "0",
                    psquery_count: "210454",
                    follow_count: "0",
                    total_count: "210466",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "115",
                    res_type: "3",
                    month: "201606",
                    res_id: "8850",
                    res_name: "雀斑",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "203424",
                    follow_count: "0",
                    total_count: "203424",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "73",
                    res_type: "3",
                    month: "201606",
                    res_id: "8375",
                    res_name: "癫痫",
                    appoint_count: "10",
                    search_count: "0",
                    psquery_count: "186979",
                    follow_count: "0",
                    total_count: "186989",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "218",
                    res_type: "3",
                    month: "201606",
                    res_id: "8414",
                    res_name: "肺癌",
                    appoint_count: "26",
                    search_count: "0",
                    psquery_count: "159827",
                    follow_count: "0",
                    total_count: "159853",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "50",
                    res_type: "3",
                    month: "201606",
                    res_id: "9499",
                    res_name: "发烧",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "157188",
                    follow_count: "0",
                    total_count: "157188",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "10",
                    res_type: "3",
                    month: "201606",
                    res_id: "9148",
                    res_name: "乙肝",
                    appoint_count: "21",
                    search_count: "0",
                    psquery_count: "146926",
                    follow_count: "0",
                    total_count: "146947",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "12",
                    res_type: "3",
                    month: "201606",
                    res_id: "9306",
                    res_name: "咳嗽",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "145249",
                    follow_count: "0",
                    total_count: "145249",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  },
                  {
                    id: "78",
                    res_type: "3",
                    month: "201606",
                    res_id: "8961",
                    res_name: "水痘",
                    appoint_count: "2",
                    search_count: "0",
                    psquery_count: "139358",
                    follow_count: "0",
                    total_count: "139360",
                    ext_info: "a:0:{}",
                    update_time: "1466060587"
                  }
                ],
            };
            var typeMap = {
                appoint_count: '预约量',
                follow_count: '关注量',
                psquery_count: '百度搜索量',
                search_count: '搜索量',
                total_count: '总量'
            };
            var curRankType = this.curRankType;
            var data = this.disease.length === 0 ? chartData.disease : this.disease;
            var nameList = [];
            var weightList = [];
            for (let i = 0; i < data.length; i++) {
                nameList.push(data[i].res_name);
                weightList.push(data[i][curRankType]);
            }

            var myDiseaseChart = Echarts.init(document.getElementById('disease-echart'));
            myDiseaseChart.setOption({
                title: {
                    text: 'Top10疾病排行',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer : {
                        type : 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: 20,
                    containLabel: true
                },
                xAxis: [
                    {
                        type : 'value'
                    }
                ],
                yAxis : [
                    {
                        type : 'category',
                        axisTick : {show: false},
                        data : nameList
                    }
                ],
                series : [
                    {
                        name: typeMap[curRankType],
                        type: 'bar',
                        stack: typeMap[curRankType],
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        data: weightList
                    }
                ]
            });
        }
    },
    events: {
        'rankTypeChange': function (rankType) {
            this.curRankType = rankType;
            this.renderChart();
        }
    },
    data () {
        return {
            curRankType: 'total_count'
        }
    }
}
</script>

<style>
</style>
