<template>
    <div class="app wrapper">
        <tab>
            <tab-item v-link="{ path: '/personal' }" :selected="tabVal === 'personal'">画像</tab-item>
            <tab-item v-link="{ path: '/service' }" :selected="tabVal === 'service'">服务</tab-item>
            <tab-item v-link="{ path: '/rank' }" :selected="tabVal === 'rank'">排名</tab-item>
        </tab>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import XHeader from 'vux/src/components/x-header'
import Tab from 'vux/src/components/tab/tab'
import TabItem from 'vux/src/components/tab/tab-item'

export default {
    components: {
        XHeader,
        Tab,
        TabItem
    },
    data () {
        return {}
    }
}
</script>

<style>
@import 'assets/style/reset.css';
@import '~vux/dist/vux.css';
body {
    margin: 0;
    background-color: #fbf9fe;
}
</style>
