<template>
    <div id="dept-echart" style="width: 98%; height: 400px;"></div>
</template>

<script>
import Echarts from 'echarts/lib/echarts'
import EchartsPie from 'echarts/lib/chart/pie'
import EchartsToolip from 'echarts/lib/component/tooltip'
import EchartsTitle from 'echarts/lib/component/title'

export default {
    props: ['dept'],
    ready () {
        this.renderChart();
    },
    methods: {
        'renderChart': function () {
            var chartData = {
                dept: [
                  {
                    id: "16567",
                    res_type: "2",
                    month: "201606",
                    res_id: "131",
                    res_name: "皮肤科",
                    appoint_count: "566",
                    search_count: "0",
                    psquery_count: "94299",
                    follow_count: "5821",
                    total_count: "100686",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16576",
                    res_type: "2",
                    month: "201606",
                    res_id: "90",
                    res_name: "眼科",
                    appoint_count: "341",
                    search_count: "0",
                    psquery_count: "96365",
                    follow_count: "2830",
                    total_count: "99536",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16560",
                    res_type: "2",
                    month: "201606",
                    res_id: "39",
                    res_name: "产科",
                    appoint_count: "201",
                    search_count: "0",
                    psquery_count: "64823",
                    follow_count: "3975",
                    total_count: "68999",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16563",
                    res_type: "2",
                    month: "201606",
                    res_id: "145",
                    res_name: "男科",
                    appoint_count: "70",
                    search_count: "0",
                    psquery_count: "63280",
                    follow_count: "776",
                    total_count: "64126",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16561",
                    res_type: "2",
                    month: "201606",
                    res_id: "15",
                    res_name: "外科",
                    appoint_count: "372",
                    search_count: "0",
                    psquery_count: "56398",
                    follow_count: "3174",
                    total_count: "59944",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16562",
                    res_type: "2",
                    month: "201606",
                    res_id: "47",
                    res_name: "儿科",
                    appoint_count: "269",
                    search_count: "0",
                    psquery_count: "51752",
                    follow_count: "3973",
                    total_count: "55994",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16564",
                    res_type: "2",
                    month: "201606",
                    res_id: "37",
                    res_name: "妇产科",
                    appoint_count: "229",
                    search_count: "0",
                    psquery_count: "45677",
                    follow_count: "6626",
                    total_count: "52532",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16573",
                    res_type: "2",
                    month: "201606",
                    res_id: "147",
                    res_name: "耳鼻喉科",
                    appoint_count: "311",
                    search_count: "0",
                    psquery_count: "41793",
                    follow_count: "3043",
                    total_count: "45147",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16587",
                    res_type: "2",
                    month: "201606",
                    res_id: "80",
                    res_name: "口腔科",
                    appoint_count: "115",
                    search_count: "0",
                    psquery_count: "37259",
                    follow_count: "2198",
                    total_count: "39572",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
                  },
                  {
                    id: "16569",
                    res_type: "2",
                    month: "201606",
                    res_id: "3",
                    res_name: "神经内科",
                    appoint_count: "264",
                    search_count: "0",
                    psquery_count: "35322",
                    follow_count: "3184",
                    total_count: "38770",
                    ext_info: "a:0:{}",
                    update_time: "1466060593"
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
            var data = this.dept.length === 0 ? chartData.dept : this.dept;
            var mapList = [];
            for (let i = 0; i < data.length; i++) {
                mapList.push({
                    name: data[i].res_name,
                    value: data[i][curRankType],
                });
            }

            var myDeptChart = Echarts.init(document.getElementById('dept-echart'));
            myDeptChart.setOption({
                title : {
                    text: 'Top10科室排名',
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
                        name: typeMap[curRankType],
                        type:'pie',
                        radius : [30, 110],
                        center : ['50%', 200],
                        roseType : 'area',
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
