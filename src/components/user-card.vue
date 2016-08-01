<template>
    <div class="user-card">
        <flexbox>
            <flexbox-item>
                <flexbox orient="vertical">
                    <flexbox-item>
                        <flexbox>
                            <flexbox-item class="flex-initial">
                                <img v-if="userInfo.gender === '男'" class="user-avatar" src="../assets/avatar-man.png" alt="用户头像" />
                                <img v-if="userInfo.gender === '女'" class="user-avatar" src="../assets/avatar-woman.png" alt="用户头像" />
                            </flexbox-item>
                            <flexbox-item>
                                <span class="user-name">{{userInfo.userName}}</span>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                    <flexbox-item>
                        <span class="gender">{{userInfo.gender}}</span> | <span class="age">{{userInfo.age !== '' ? userInfo.age : userInfo.ageRange}}</span> | <span class="major">{{userInfo.major}}</span>
                    </flexbox-item>
                    <flexbox-item>
                        <p>从事{{userInfo.industry}}行业，常年驻扎在{{userInfo.address}}</p>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
            <flexbox-item class="flex-initial">
                <div style="width:100px;height:100px;">
                    <circle :percent=87 :stroke-width=6 :trail-width=6 :stroke-color="strokeColor" trail-color="#ececec">
                        <span :style="{color: strokeColor}">87%</span>
                        <p>健康度</p>
                    </circle>
                </div>
            </flexbox-item>
        </flexbox>
        <div v-if="false" class="medical-word">
            <ul class="word-list">
                <li class="word-item" v-for="item in keyWords">{{ item.name }}</li>
            </ul>
        </div>
    </div>
    <group>
        <cell title="关注的医院"></cell>
        <ul class="follow-list">
            <li class="follow-item" v-for="item in action.hosp">{{item}}</li>
        </ul>
    </group>
    <group>
        <cell title="关注的科室"></cell>
        <ul class="follow-list">
            <li class="follow-item" v-for="item in action.dept">{{item}}</li>
        </ul>
    </group>
    <group>
        <cell title="关注的疾病"></cell>
        <ul class="follow-list">
            <li class="follow-item" v-for="item in action.disease">{{item}}</li>
        </ul>
    </group>
    <group>
        <cell title="关注的医生"></cell>
        <ul class="follow-list">
            <li class="follow-item" v-for="item in action.doc">{{item}}</li>
        </ul>
    </group>
</template>
<script>
    import Group from 'vux/src/components/group'
    import Cell from 'vux/src/components/cell'
    import Flexbox from 'vux/src/components/flexbox'
    import FlexboxItem from 'vux/src/components/flexbox-item'
    import Circle from 'vux/src/components/circle'

    export default {
        components: {
            Group,
            Cell,
            Flexbox,
            FlexboxItem,
            Circle
        },
        events: {
            'searchDone': function(searchID) {
                var self = this;

                self.$http.get('/test/portait?userName=' + searchID).then(({
                    data: {
                        errno,
                        errmsg,
                        data
                    }
                }) => {
                    if (errno !== 0) {
                        alert(errmsg);
                    } else {
                        self.$set('userInfo', data.userInfo);
                        self.$set('keyWords', data.keyWords);
                        self.$set('action', data.action);
                    }
                }, (res) => {
                    console.log('get portait Data fail');
                });
            }
        },
        data() {
            return {
                userInfo: {
                    userId: '10202',
                    userName: '又耳希',
                    gender: '女',
                    ageRange: '25-34',
                    age: '25岁',
                    industry: 'IT通信电子',
                    edu: '本科及以上',
                    major: '专业技术人员',
                    address: '北京市北京市海淀区',
                    hometown: '',
                    home: '北京市北京市昌平区西关路',
                    company: '北京市北京市海淀区中关村软件园二区东北旺西一路'
                },
                keyWords: [{
                    name: '医疗健康',
                    weight: 93,
                    tag: 'erised'
                }, {
                    name: '挂号',
                    weight: 91,
                    tag: 'erised'
                }, {
                    name: '疾病',
                    weight: 91,
                    tag: 'erised'
                }, {
                    name: '内分泌疾病',
                    weight: 85,
                    tag: 'erised'
                }, {
                    name: '减肥塑身',
                    weight: 75,
                    tag: 'erised'
                }],
                action: {
                    hosp: ['北京协和医院', '海淀医院', '西京医院', '中国解放军总医院'],
                    dept: ['儿科', '内科', '皮肤科', '神经内科', '眼科', '骨科', '口腔科'],
                    disease: ['肥胖', '感冒', '口腔溃疡', '肩周炎', '颈椎病', '牙龈肿痛'],
                    doc: ['袁晓露', '刘春生'],
                },
                strokeColor: '#04BE02'
            }
        }
    }
</script>
<style>
    .user-card {
    background: #444a5a;
    color: #f1f4fd;
    padding: 4%;
    }
    .user-card .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    }
    .user-card .vux-flexbox-item.flex-initial {
    flex: initial;
    }
    .user-card .medical-word {
    padding-top: 10px;
    background-color: #444a5a;
    }
    .user-card .word-item {
    display: inline-block;
    border: 1px solid #688aaf;
    padding: 6px;
    margin: 6px;
    border-radius: 4px;
    line-height: 1;
    color: #b8c7da;
    font-size: 14px;
    }
    .follow-list {
    padding: 20px 15px 10px 15px;
    border-top: 1px solid #ededed;
    }
    .follow-item {
    display: inline-block;
    list-style: none;
    border: 1px solid #688aaf;
    padding: 4px 6px;
    border-radius: 2px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #b8c7da;
    }
</style>