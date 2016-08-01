<template>
    <div id="hosp-echart" style="width: 98%; height: 400px;"></div>
</template>

<script>
import Echarts from 'echarts/lib/echarts'
import EchartsBar from 'echarts/lib/chart/bar'
import EchartsToolip from 'echarts/lib/component/tooltip'
import EchartsTitle from 'echarts/lib/component/title'

export default {
  props: ['hosp'],
  ready () {
    this.renderChart();
  },
  methods: {
    'renderChart': function () {
      var chartData = {
          hosp: [
              {
                id: "8055",
                res_type: "1",
                month: "201606",
                res_id: "12478",
                res_name: "无锡市第九人民医院",
                appoint_count: "0",
                search_count: "0",
                psquery_count: "145192",
                follow_count: "2",
                total_count: "145194",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8064",
                res_type: "1",
                month: "201606",
                res_id: "1112",
                res_name: "四川大学华西医院",
                appoint_count: "48",
                search_count: "0",
                psquery_count: "125646",
                follow_count: "616",
                total_count: "126310",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8119",
                res_type: "1",
                month: "201606",
                res_id: "119",
                res_name: "中国人民解放军总医院",
                appoint_count: "57",
                search_count: "0",
                psquery_count: "61993",
                follow_count: "1128",
                total_count: "63178",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8065",
                res_type: "1",
                month: "201606",
                res_id: "125",
                res_name: "北京协和医院",
                appoint_count: "4",
                search_count: "0",
                psquery_count: "48801",
                follow_count: "3496",
                total_count: "52301",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8054",
                res_type: "1",
                month: "201606",
                res_id: "78",
                res_name: "复旦大学附属华山医院",
                appoint_count: "77",
                search_count: "0",
                psquery_count: "48775",
                follow_count: "2444",
                total_count: "51296",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8194",
                res_type: "1",
                month: "201606",
                res_id: "3075",
                res_name: "北京大学第三医院",
                appoint_count: "24",
                search_count: "0",
                psquery_count: "33887",
                follow_count: "1200",
                total_count: "35111",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8101",
                res_type: "1",
                month: "201606",
                res_id: "1060",
                res_name: "上海交通大学医学院附属第九人民医院",
                appoint_count: "50",
                search_count: "0",
                psquery_count: "32764",
                follow_count: "926",
                total_count: "33740",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8188",
                res_type: "1",
                month: "201606",
                res_id: "363",
                res_name: "中南大学湘雅医院",
                appoint_count: "15",
                search_count: "0",
                psquery_count: "30705",
                follow_count: "802",
                total_count: "31522",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8053",
                res_type: "1",
                month: "201606",
                res_id: "737",
                res_name: "上海交通大学医学院附属瑞金医院",
                appoint_count: "17",
                search_count: "0",
                psquery_count: "28729",
                follow_count: "432",
                total_count: "29178",
                ext_info: "a:0:{}",
                update_time: "1466060590"
              },
              {
                id: "8138",
                res_type: "1",
                month: "201606",
                res_id: "1068",
                res_name: "中日友好医院",
                appoint_count: "809",
                search_count: "0",
                psquery_count: "24950",
                follow_count: "3096",
                total_count: "28855",
                ext_info: "a:0:{}",
                update_time: "1466060590"
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
      var data = this.hosp.length === 0 ? chartData.hosp : this.hosp;
      var nameList = [];
      var weightList = [];
      for (let i = 0; i < data.length; i++) {
          nameList.push(data[i].res_name);
          weightList.push(data[i][curRankType]);
      }

      var myHospChart = Echarts.init(document.getElementById('hosp-echart'));
      myHospChart.setOption({
          title: {
              text: 'Top10医院排名',
              x: 'center'
          },
          tooltip : {
              trigger: 'axis',
              axisPointer : {
                  type : 'shadow'
              }
          },
          grid: {
              top: 80,
              bottom: 20
          },
          xAxis: {
              type : 'value',
              position: 'top',
              splitLine: {lineStyle:{type:'dashed'}},
          },
          yAxis: {
              type : 'category',
              axisLine: {show: false},
              axisLabel: {show: false},
              axisTick: {show: false},
              splitLine: {show: false},
              data: nameList
          },
          series : [
              {
                  name: typeMap[curRankType],
                  type:'bar',
                  stack: typeMap[curRankType],
                  label: {
                      normal: {
                          show: true,
                          formatter: ''
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
