<template>
    <div id="doc-echart" style="width: 98%; height: 400px;"></div>
</template>

<script>
import Echarts from 'echarts/lib/echarts'
import EchartsPie from 'echarts/lib/chart/pie'
import EchartsToolip from 'echarts/lib/component/tooltip'
import EchartsTitle from 'echarts/lib/component/title'

export default {
    props: ['doc'],
    ready () {
        this.renderChart();
    },
    methods: {
        'renderChart': function () {
            var chartData = {
                doc: [
                  {
                    id: "16860",
                    res_type: "4",
                    month: "201606",
                    res_id: "128117",
                    res_name: "冯龙",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "1861",
                    total_count: "1861",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "17071",
                    res_type: "4",
                    month: "201606",
                    res_id: "118875",
                    res_name: "李华",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "338",
                    total_count: "338",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "17063",
                    res_type: "4",
                    month: "201606",
                    res_id: "128301",
                    res_name: "闫聚禄",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "320",
                    total_count: "320",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "17060",
                    res_type: "4",
                    month: "201606",
                    res_id: "2125",
                    res_name: "张迎春",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "291",
                    total_count: "291",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "18507",
                    res_type: "4",
                    month: "201606",
                    res_id: "2110",
                    res_name: "黄玉兰",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "276",
                    total_count: "276",
                    ext_info: "a:0:{}",
                    update_time: "1466060594"
                  },
                  {
                    id: "17647",
                    res_type: "4",
                    month: "201606",
                    res_id: "201087",
                    res_name: "孔令广",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "265",
                    total_count: "265",
                    ext_info: "a:0:{}",
                    update_time: "1466060594"
                  },
                  {
                    id: "17378",
                    res_type: "4",
                    month: "201606",
                    res_id: "230100",
                    res_name: "李秀河",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "224",
                    total_count: "224",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "17547",
                    res_type: "4",
                    month: "201606",
                    res_id: "2982",
                    res_name: "易志环",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "208",
                    total_count: "208",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16786",
                    res_type: "4",
                    month: "201606",
                    res_id: "66434",
                    res_name: "蔡瑞康",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "206",
                    total_count: "206",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "17148",
                    res_type: "4",
                    month: "201606",
                    res_id: "4676",
                    res_name: "高进",
                    appoint_count: "0",
                    search_count: "0",
                    psquery_count: "0",
                    follow_count: "196",
                    total_count: "196",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  }
                ]
            };
            var typeMap = {
                appoint_count: '预约量',
                follow_count: '关注量',
                psquery_count: '百度搜索量',
                search_count: '搜索量',
                total_count: '总量'
            };
            var curRankType = this.curRankType;
            var data = this.doc.length === 0 ? chartData.doc : this.doc;
            var mapList = [];
            for (let i = 0; i < data.length; i++) {
                mapList.push({
                    name: data[i].res_name,
                    value: data[i][curRankType],
                });
            }

            var myDocChart = Echarts.init(document.getElementById('doc-echart'));
            myDocChart.setOption({
                title: {
                    text: 'Top10医生排名',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name: typeMap[curRankType],
                        type: 'pie',
                        radius: ['50%', '70%'],
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
                        data: mapList
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
