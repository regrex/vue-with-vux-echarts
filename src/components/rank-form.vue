<template>
    <div class="rank-form">
        <group>
            <datetime title="选择年月" :min-year="2015" :max-year="2016" format="YYYY-MM" confirm-text="确认" cancel-text="取消" @change="dateChange"></datetime>
            <cell title="选择数据类型" :value="rankTypeMap[rankType]" is-link @click="showPopup=true"></cell>
        </group>
        <popup :show.sync="showPopup" class="checker-popup">
          <div class="rank-type-wrap">
            <p class="rank-type-title">数据类型</p>
            <checker
            :value.sync="rankType"
            default-item-class="rank-type-item"
            selected-item-class="rank-type-item-selected"
            disabled-item-class="rank-type-item-disabled"
            @on-change="rankTypeChange"
            @on-item-click="showPopup=false">
              <checker-item v-for="(key, value) in rankTypeMap" :value="key">{{value}}</checker-item>
            </checker>
          </div>
        </popup>
    </div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import Datetime from 'vux/src/components/datetime'
import Popup from 'vux/src/components/popup'
import Checker from 'vux/src/components/checker'
import CheckerItem from 'vux/src/components/checker-item'

export default {
  components: {
    Group,
    Datetime,
    Cell,
    Popup,
    Checker,
    CheckerItem
  },
  methods: {
      dateChange(val) {
          var searchDate = val.split('-').join('');
          this.$dispatch('dateChange', searchDate);
      },
      rankTypeChange(rankType) {
          this.$dispatch('rankTypeChange', this.rankType);
      }
  },
  data() {
      return {
          rankType: 'total_count',
          showPopup: false,
          rankTypeMap: {
              appoint_count: '预约量',
              follow_count: '关注量',
              psquery_count: '百度搜索量',
              search_count: '搜索量',
              total_count: '总量'
          }
      }
  }
}
</script>

<style>
.rank-form .rank-type-wrap {
    padding: 10px;
}
.rank-form .rank-type-title {
    color: #999;
    padding-bottom: 10px;
}
.rank-form .rank-type-item {
    display: inline-block;
    background-color: #ddd;
    color: #333;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    line-height: 18px;
    border-radius: 15px;
}
.rank-form .rank-type-item-selected {
    background-color: #04BE02;
    color: #faf1f4;
}
.rank-form .rank-type-item-disabled {
    color: #999;
}
</style>
