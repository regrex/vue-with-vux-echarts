<template>
  <div class="medical-log">
    <group title="就诊记录">
        <timeline :color="color" class="log-timeline">
            <timeline-item v-for="item in medicalLog" class="unit-timeline-item">
                <flexbox orient="vertical" class="unit-wrap" :margin-left=0>
                    <flexbox-item class="unit-head">
                        <flexbox>
                            <flexbox-item><span class="medical-label">就诊人：</span><span class="medical-user-name">{{item.patientName}}</span></flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item class="unit-body">
                        <flexbox orient="vertical">
                            <flexbox-item><span class="medical-label">医生：</span><span class="medical-user-name">{{item.doctorName}}</span></flexbox-item>
                            <flexbox-item>{{item.hospitalName}}-{{item.department}}</flexbox-item>
                            <flexbox-item><span class="medical-label">症状：</span>{{item.content === '' ? '无' : item.content}}</flexbox-item>
                            <flexbox-item><span class="medical-label">疾病：</span>{{item.disease === '' ? '无' : item.disease}}</flexbox-item>
                        </flexbox>
                        <flexbox-item v-if="item.replyInfo">
                            <flexbox orient="vertical" class="reply-list">
                                <flexbox-item v-for="replyItem in item.replyInfo" class="{{replyItem.role === '患者' ? 'left-reply' : 'right-reply'}}">
                                    <flexbox class="reply-item">
                                        <flexbox-item class="reply-role"></flexbox-item>
                                        <flexbox-item class="reply-text">{{replyItem.content}}</flexbox-item>
                                    </flexbox>
                                </flexbox-item>
                            </flexbox>
                        </flexbox-item>
                    </flexbox-item>
                    <flexbox-item class="unit-foot">
                        <flexbox>
                            <flexbox-item><span class="unit-type">{{logTypeMap[item.type]}}</span></flexbox-item>
                            <flexbox-item class="unit-time"><span class="time-icon"></span>{{item.addTime}}</flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
            </timeline-item>
        </timeline>
    </group>
  </div>
</template>

<script>
import Group from 'vux/src/components/group'
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

            self.$http.get('/xdata/duapp?userName=' + searchID).then(({data: {errno, errmsg, data}})=>{
                if (errno !== 0) {
                    alert(errmsg);
                } else {
                    self.$set('medicalLog', data);
                }
            }, (res)=>{
                console.log('get duapp data fail');
            });
        }
    },
    data () {
        return {
            logTypeMap: {
                appoint: '预约',
                consult: '咨询'
            },
            medicalLog: [{
                patientName: '崔明路',
                status: '预约失败',
                content: '高血压冠心病;高血压、冠心病，在俞大夫那里做了2个支架手术，已经一年的时间，目前血压基本能够控制，血糖还是偏高，现在计划找俞大夫进行一年复查。',
                addTime: '2016-03-29 10:18:20',
                doctorName: '俞梦越',
                department: '心血管内科',
                hospitalName: '中国医学科学院阜外医院',
                disease: '',
                type: 'appoint'
            }, {
                addTime: '2016-04-11 10:18:20',
                patientName: '杨松',
                title: '精神不好，晩上经常睡不着觉，脾气暴燥，易发火',
                disease: '无缘无固就发火，晚上睡不着觉',
                content: '',
                doctorName: '周爱红',
                department: '神经内科',
                hospitalName: '首都医科大学宣武医院',
                type: 'consult',
                replyInfo: [
                    {
                    content: "都做什么检查了？",
                    addTime: "2016-06-22 09:00",
                    role: "医生"
                    },
                    {
                    content: "体重增长正常吗？",
                    addTime: "2016-06-22 09:01",
                    role: "医生"
                    },
                    {
                    content: "现在还没做检查那",
                    addTime: "2016-06-22 09:02",
                    role: "患者"
                    },
                    {
                    content: "体重从10个月到现在还想没长什么",
                    addTime: "2016-06-22 09:03",
                    role: "患者"
                    },
                    {
                    content: "我也不知道该给孩子做什么检查",
                    addTime: "2016-06-22 09:04",
                    role: "患者"
                    },
                    {
                    content: "我想问一下王医生你是周几出诊是在三好街院区还是滑翔院区",
                    addTime: "2016-06-22 09:15",
                    role: "患者"
                    },
                    {
                    content: "周二五出诊，在南湖院区就是三好街院区",
                    addTime: "2016-06-22 09:27",
                    role: "医生"
                    }
                ]
            }, {
                patientName: '崔明路',
                status: '预约失败',
                content: '高血压冠心病;高血压、冠心病，在俞大夫那里做了2个支架手术，已经一年的时间，目前血压基本能够控制，血糖还是偏高，现在计划找俞大夫进行一年复查。',
                addTime: '2016-03-29 10:18:20',
                doctorName: '俞梦越',
                department: '心血管内科',
                hospitalName: '中国医学科学院阜外医院',
                disease: '',
                type: 'appoint'
            }]
        }
    }
}
</script>

<style>
.medical-log .log-timeline {
    margin-top: 20px;
}
.medical-log .unit-wrap {
    color: #444;
    margin-left: 10px;
    border-top: 1px solid #04BE02;
}
.medical-log .unit-head,
.medical-log .unit-body,
.medical-log .unit-foot {
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
}
.medical-log .unit-head,
.medical-log .unit-body {
    border-bottom: 1px solid #f4f4f4;
}
.medical-log .unit-body,
.medical-log .unit-foot {
    padding-top: 2px;
}
.medical-log .unit-foot .unit-time {
    flex: initial;
    background: #EEE;
    padding: 4px 8px;
    border-radius: 12px;
}
.medical-log .time-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('../assets/icon/clock.png') no-repeat center center;
    background-size: contain;
    vertical-align: middle;
    margin-right: 4px;
}
.medical-log .unit-type {
    color: #04BE02;
    border: 1px solid #04BE02;
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 2px;
}
.medical-log .unit-timeline-item {
    margin-right: 20px;
}
.medical-log .medical-user-name {
    font-weight: bold;
    font-size: 16px;
}
.medical-log .medical-label {
    color: #aaa;
}
.medical-log .vux-timeline-item-head-first {
    top: -8px;
}
.medical-log .vux-timeline-item-head {
    top: -4px;
}
.medical-log .reply-list {
    align-items: flex-start;    
}
.medical-log .reply-item {
    list-style-type: none;
    padding: 6px;
    align-items: center;
}
.medical-log .reply-item .reply-role {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 6px;
    flex: initial;
}
.medical-log .right-reply .reply-role {
    background: url('../assets/doctor.jpg') no-repeat 0 0;
    background-size: contain;
}
.medical-log .left-reply .reply-role {
    background: #aed url('../assets/user.png') no-repeat 0 0;
    background-size: contain;
}
.medical-log .reply-text {
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
}
.medical-log .reply-text::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border: 4px solid #eee;
    border-color: transparent #eee transparent transparent;
    left: -8px;
    top: 50%;
    margin-top: -4px;
}
.medical-log .right-reply .reply-text {
    background: #eee;
}

.medical-log .left-reply .reply-text {
}

</style>
