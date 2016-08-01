<template>
  <div class="medical-word">
    <ul class="word-list">
        <li class="word-item" v-bind:style="{fontSize: (item.weight / 4) + 'px'}" v-for="item in medicalWords">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      medicalWords: 
        [
            {
                name: "医疗健康",
                weight: 93,
                tag: "erised"
            },
            {
                name: "挂号",
                weight: 91,
                tag: "erised"
            },
            {
                name: "疾病",
                weight: 91,
                tag: "erised"
            },
            {
                name: "内分泌疾病",
                weight: 85,
                tag: "erised"
            },
            {
                name: "减肥塑身",
                weight: 75,
                tag: "erised"
            },
            {
                name: "心脑血管疾病",
                weight: 75,
                tag: "erised"
            },
            {
                name: "整容整形",
                weight: 75,
                tag: "erised"
            },
            {
                name: "西医",
                weight: 74,
                tag: "erised"
            },
            {
                name: "综合医院",
                weight: 71,
                tag: "erised"
            },
            {
                name: "协和医院",
                weight: 66,
                tag: "erised"
            },
            {
                name: "肿瘤癌症",
                weight: 60,
                tag: "erised"
            },
            {
                name: "中国医学科学院阜外医院",
                weight: 0.171279,
                tag: "hosp"
            },
            {
                name: "北京大学第三医院",
                weight: 0.171279,
                tag: "hosp"
            },
            {
                name: "中国医科大学附属盛京医院",
                weight: 2.847062,
                tag: "hosp"
            },
            {
                name: "心血管内科",
                weight: 0.228373,
                tag: "dept"
            },
            {
                name: "糖尿病",
                weight: 35.910211,
                tag: "disease"
            },
            {
                name: "俞梦越",
                weight: 0.570932,
                tag: "doc"
            }
        ]
    }
  }
}
</script>

<style>
.medical-word {
    padding: 0 4% 4% 4%;
    background-color: #444a5a;
}

.medical-word .word-item {
    display: inline-block;
    border: 1px solid #688aaf;
    padding: 6px;
    margin: 6px;
    border-radius: 4px;
    line-height: 1;
    color: #b8c7da;
}
</style>
