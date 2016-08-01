<template>
    <div class="personal">
        <search @result-click="resultClick" @on-change="getResult" :results="results" :value.sync="searchValue"></search>
        <user-card></user-card>
        <medical-log></medical-log>
        <medical-service></medical-service>
    </div>
</template>
<script>
    import Search from 'vux/src/components/search'
    import UserCard from '../components/user-card.vue'
    import MedicalLog from '../components/medical-log.vue'
    import MedicalService from '../components/medical-service.vue'
    
    export default {
        components: {
            Search,
            UserCard,
            MedicalLog,
            MedicalService
        },
        methods: {
            resultClick (item) {
                // 广播搜索开始搜索事件
                this.$broadcast('searchDone', item.searchID);
            },
            getResult () {
                this.results = [{
                    title: '用户ID：' + this.searchValue,
                    searchID: this.searchValue.trim()
                }];
            }
        },
        data () {
            return {
                results: [],
                searchValue: ''
            }
        }
    }
    
</script>
<style></style>