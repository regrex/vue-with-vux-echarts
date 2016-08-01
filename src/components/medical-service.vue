<template>
  <div class="medical-service">
    <group title="医疗服务">
        <cell title="远程就诊" value=""><img slot="icon" class="service-icon" src="../assets/icon/remote.png" alt="远程就诊"></cell>
        <timeline :color="color">
            <timeline-item v-for="item in medicalService.remote" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-head">
                        <flexbox>
                            <flexbox-item><span class="medical-label">患者：</span><span class="medical-user-name">{{item.f_patientName}}</span></flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-body">
                        <flexbox orient="vertical">
                            <flexbox-item><span class="medical-label">医生：</span><span class="medical-user-name">{{item.f_doctorName}}</span></flexbox-item>
                            <flexbox-item>{{item.f_yuancheng_hospital_name}}-{{item.f_department}}</flexbox-item>
                            <flexbox-item><span class="medical-label">症状：</span>{{item.f_description === '' ? '无' : item.f_description}}</flexbox-item>
                            <flexbox-item><span class="medical-label">疾病：</span>{{item.f_disease === '' ? '无' : item.f_disease}}</flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-foot">{{item.f_submitTime}}</flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
        <cell title="名医手术" value=""><img slot="icon" class="service-icon" src="../assets/icon/surgrey.png" alt="名医手术"></cell>
        <timeline :color="color">
            <timeline-item v-for="item in medicalService.surgrey" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-head">
                        <flexbox>
                            <flexbox-item><span class="medical-label">患者：</span><span class="medical-user-name">{{item.f_patientName}}</span></flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-body">
                        <flexbox orient="vertical">
                            <flexbox-item><span class="medical-label">医生：</span><span class="medical-user-name">{{item.f_doctorName}}</span></flexbox-item>
                            <flexbox-item>{{item.f_hospitalName}}-{{item.f_department}}</flexbox-item>
                            <flexbox-item><span class="medical-label">症状：</span>{{item.f_description === '' ? '无' : item.f_description}}</flexbox-item>
                            <flexbox-item><span class="medical-label">疾病：</span>{{item.f_disease === '' ? '无' : item.f_disease}}</flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-foot">{{item.f_updateTime}}</flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
        <cell title="保险商城" value=""><img slot="icon" class="service-icon" src="../assets/icon/insurance.png" alt="保险商城"></cell>
        <timeline :color="color">
            <timeline-item v-for="item in medicalService.insurance" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-head">
                        <flexbox>
                            <flexbox-item><span class="medical-label">投保人：</span><span class="medical-user-name">{{item.f_holderName}}</span></flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-body">
                        <flexbox orient="vertical">
                            <flexbox-item><span class="medical-label">被保人：</span><span class="medical-user-name">{{item.f_insurantName}}</span></flexbox-item>
                            <flexbox-item>{{item.f_productType}}</flexbox-item>
                            <flexbox-item><span class="medical-label">保费：</span>{{item.f_premium}}</flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-foot">{{item.f_submitTime}}</flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
        <cell title="药品购买" value=""><img slot="icon" class="service-icon" src="../assets/icon/drug.png" alt="药品购买"></cell>
        <timeline :color="color">
            <timeline-item v-for="item in medicalService.drug" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-head">
                        <flexbox>
                            <flexbox-item><span class="medical-label">购买时间：</span>{{item.f_updateTime}}</flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item>
                        <flexbox>
                            <flexbox-item v-for="drugItem in item.f_drugInfo">
                                <a href="{{drugItem.f_drugUrl}}" class="drug-wrap">
                                    <img v-bind:src="drugItem.f_originalUrl" alt="药品图片" />
                                    <p>{{drugItem.f_drugName}} &times; {{drugItem.count}}</p>
                                </a>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
        <cell title="慈善救助" value=""><img slot="icon" class="service-icon" src="../assets/icon/charitable.png" alt="慈善救助"></cell>
        <timeline :color="color">
            <timeline-item v-for="item in medicalService.charitable" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-head">
                        <flexbox>
                            <flexbox-item><span class="medical-label">救助人：</span><span class="medical-user-name">{{item.f_patientName}}</span></flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-body">
                        <flexbox orient="vertical">
                            <flexbox-item>{{item.f_product}}</flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-foot">{{item.f_updateTime}}</flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
        <cell title="影像解读" value=""><img slot="icon" class="service-icon" src="../assets/icon/readpic.png" alt="影像解读"></cell>
        <timeline :color="color">
            <timeline-item v-for="item in medicalService.readpic" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-body"><span class="medical-label">影像报告：</span><a href="{{item.bos_url}}" class="pdf-link"></a></flexbox-item>
                    <flexbox-item class="unit-foot">{{item.f_updateTime}}</flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
        <cell title="睡眠检测" value=""><img slot="icon" class="service-icon" src="../assets/icon/sleep.png" alt="睡眠检测"></cell>
        <timeline :color="color">
            <timeline-item v-for="item in medicalService.sleep" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-body"><span class="medical-label">睡眠质量报告：</span><a href="{{item.bos_url}}" class="pdf-link"></a></flexbox-item>
                    <flexbox-item class="unit-foot">{{item.f_updateTime}}</flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
    </group>
  </div>
</template>

<script>
import Group from 'vux/src/components/group'
import Panel from 'vux/src/components/panel'
import Cell from 'vux/src/components/cell'
import Timeline from 'vux/src/components/timeline/timeline'
import TimelineItem from 'vux/src/components/timeline/timeline-item'
import Flexbox from 'vux/src/components/flexbox'
import FlexboxItem from 'vux/src/components/flexbox-item'

export default {
    components: {
        Group,
        Cell,
        Timeline,
        TimelineItem,
        Flexbox,
        FlexboxItem
    },
    events: {
        'searchDone': function (searchID) {
            var self = this;

            self.$http.get('/xdata/thirdservice?userName=' + searchID).then(({data: {errno, errmsg, data}})=>{
                if (errno !== 0) {
                    alert(errmsg);
                } else {
                    self.$set('medicalService', data);
                }
            }, (res)=>{
                console.log('get thirdservice data fail');
            });
        }
    },
    data () {
        return {
            logTypeMap: {
                remote: '远程会诊',
                surgrey: '名医手术',
                insurance: '保险商城',
                drug: '药品购买',
                charitable: '慈善救助',
                readpic: '影像解读',
                sleep: '睡眠检测'
            },
            medicalService: {
                remote: [{
                    f_patientName: '崔明路',
                    f_status: '预约失败',
                    f_description: '高血压冠心病;高血压、冠心病，在俞大夫那里做了2个支架手术，已经一年的时间，目前血压基本能够控制，血糖还是偏高，现在计划找俞大夫f_进行一年复查。',
                    f_submitTime: '2016-03-29 10:18:20',
                    f_doctorName: '俞梦越',
                    f_department: '心血管内科',
                    f_yuancheng_hospital_name: '北京大学附属医院',
                    f_jiuzhen_hospital_name: '中国医学科学院阜外医院',
                    f_disease: '',
                }],
                surgrey: [{
                    f_updateTime: '2016-04-11 10:18:20',
                    f_patientName: '杨松',
                    f_title: '精神不好，晩上经常睡不着觉，脾气暴燥，易发火',
                    f_diseaseName: '无缘无固就发火，晚上睡不着觉',
                    f_description: 'asdfsdfasd',
                    f_doctorName: '周爱红',
                    f_department: '神经内科',
                    f_hospitalName: '首都医科大学宣武医院',
                }],
                insurance: [{
                    f_holderName: '邓希',
                    f_insurantName: '哈嘻嘻',
                    f_productType: '平安保险',
                    f_premium: '$1230.22',
                    f_submitTime: '2016-05-13 12:22',
                }],
                drug: [{
                    f_updateTime: '2016-05-27 17:05:16',
                    f_drugInfo: [{
                        count: 1,
                        f_drugName: '艾丽+奥利司他胶囊+0.12g*14粒',
                        f_drugUrl: 'http://m.111.com.cn/product/50083102.html',
                        f_originalUrl: 'http://p2.maiyaole.com/img/50083/50083102/100_100.jpg?a=744388325'
                    }, {
                        count: 1,
                        f_drugName: '王老吉润喉糖56g+铁盒',
                        f_drugUrl: 'http://m.111.com.cn/product/50315109.html',
                        f_originalUrl: 'http://p3.maiyaole.com/img/50315/50315109/100_100.jpg?a=1618730679'
                    }]
                }],
                charitable: [{
                    f_updateTime: '2016-05-27 17:05:16',
                    f_type: "1",
                    f_product: "赫赛汀",
                    f_isConfirm: "1",
                    f_cityId: "1",
                    f_status: "10",
                    f_updateTime: "2016-05-24 20:50:33",
                    f_enable: "1",
                    f_passid: "474179163",
                    f_patientName: "测试李泉"
                }],
                readpic: [{
                    f_description: "测试",
                    f_address: "",
                    f_doctorInfo: "",
                    f_status: "10",
                    f_updateTime: "2016-05-27 20:42:56",
                    f_enable: "1",
                    f_passid: "474179163",
                    bos_url: 'http://www.w3schools.com/tags/att_td_align.asp',
                    f_readHpName: ""
                }],
                sleep: [{
                    f_addressee: "李瑞",
                    f_address: "海淀区上地十街百度大厦c座",
                    f_status: "30",
                    f_createTime: "2016-06-21 17:47:14",
                    bos_url: 'http://www.w3schools.com/tags/att_td_align.asp',
                    f_updateTime: "2016-06-22 17:21:27"
                }]
            }
        }
    }
}
</script>

<style>
.medical-service .unit-wrap {
    color: #444;
    margin-left: 10px;
    border-top: 1px solid #04BE02;
}
.medical-service .unit-head,
.medical-service .unit-body,
.medical-service .unit-foot {
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
}
.medical-service .unit-head,
.medical-service .unit-body {
    border-bottom: 1px solid #f4f4f4;
}
.medical-service .unit-body,
.medical-service .unit-foot {
    padding-top: 2px;
}
.medical-service .unit-timeline-item {
    margin-right: 20px;
}
.medical-service .medical-user-name {
    font-weight: bold;
    font-size: 16px;
}
.medical-service .medical-label {
    color: #aaa;
}
.medical-service .vux-timeline-item-head-first {
    top: -8px;
    z-index: 1;
}
.medical-service .vux-timeline-item-head {
    top: -4px;
}
.medical-service .service-icon {
    width: 26px;
    margin-right: 6px;
}
.medical-service .pdf-link {
    display: inline-block;
    margin-top: 10px;
    width: 22px;
    height: 22px;
    background: url('../assets/icon/pdf.png') no-repeat 0 0;
    background-size: contain;
}
</style>
