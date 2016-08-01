<template>
    <div class="rank">
        <rank-form></rank-form>
        <rank-hosp-chart :hosp="chartData.hosp"></rank-hosp-chart>
        <rank-dept-chart :dept="chartData.dept"></rank-dept-chart>
        <rank-disease-chart :disease="chartData.disease"></rank-disease-chart>
        <rank-doc-chart :doc="chartData.doc"></rank-doc-chart>
    </div>
</template>
<script>
    import RankForm from '../components/rank-form.vue'
    import RankHospChart from '../components/rank-hosp-chart.vue'
    import RankDeptChart from '../components/rank-dept-chart.vue'
    import RankDiseaseChart from '../components/rank-disease-chart.vue'
    import RankDocChart from '../components/rank-doc-chart.vue'
    
    export default {
        ready() {
            var now = new Date();
            var month = now.getMonth() + 1;
            var searchDate = now.getFullYear() + (month > 9 ? month : '0' + month); 
    
            this.getTopData(searchDate);
        },
        events: {
            'dateChange': function (searchDate) {
                this.getTopData(searchDate);
            },
            'rankTypeChange': function (rankType) {
                this.$broadcast('rankTypeChange', rankType);
            }
        },
        methods: {
            'getTopData': function (searchDate) {
                var self = this;
    
                self.$http.get('/xdata/top?date=' + searchDate).then(({data: {errno, errmsg, data}})=>{
                    if (errno !== 0) {
                        alert(errmsg);
                    } else {
                        self.$set('chartData', data);
                    }
                }, (res)=>{
                    console.log('get top Data fail');
                });
            }
        },
        components: {
            RankForm,
            RankHospChart,
            RankDeptChart,
            RankDiseaseChart,
            RankDocChart
        },
        data() {
            return {
                chartData: {
                    hosp: [],
                    dept: [],
                    disease: [],
                    doc: []
                }
            }
        }
    }
    
</script>
<style></style>