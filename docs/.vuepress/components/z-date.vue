<template>
    <div class="container" v-down>
        <z-input v-model="defaultDay" class="input" leftIcon="icon-rili" :placeholder="placeholder" @focus="focus"
            clearable />
        <div v-show="dateShow" class="date">
            <!-- 选择日期 -->
            <div class="date-header" v-if="type == 'date' || type == 'dates'">
                <div><i class="iconfont icon-L2" @click="yearPrev"></i></div>
                <div v-show="dayListV"><i class="iconfont icon-L" @click="monthPrev"></i></div>
                <div>
                    <!-- 十年 -->
                    <span v-show="yearListV" class="date-header-year" @click="yearTitle">
                        {{ (year - year % 10) + '-' + (year - year % 10 + 10) }}
                    </span>
                    <!-- 年 -->
                    <span v-show="!yearListV" class="date-header-year" @click="yearTitle">{{ year }}</span>
                    <!-- 月 -->
                    <span v-show="dayListV" class="date-header-month" @click="monthTitle">
                        {{ (month < 9 ? "0" : "") + (month + 1) }} </span>
                </div>
                <div v-show="dayListV"><i class="iconfont icon-R" @click="monthNext"></i></div>
                <div><i class="iconfont icon-R2" @click="yearNext"></i></div>
            </div>
            <!-- 选择月 -->
            <div class="date-header" v-if="type == 'month'">
                <div><i class="iconfont icon-L2" @click="yearPrev"></i></div>
                <div>
                    <span v-show="yearListV" class="date-header-year" @click="yearTitle">
                        {{ (year - year % 10) + '-' + (year - year % 10 + 10) }}
                    </span>
                    <span v-show="!yearListV" class="date-header-year" @click="yearTitle">{{ year }}</span>
                    <span v-show="monthListV" class="date-header-month" @click="monthTitle">
                        {{ (month < 9 ? "0" : "") + (month + 1) }} </span>
                </div>
                <div><i class="iconfont icon-R2" @click="yearNext"></i></div>
            </div>
            <!-- 选择年 -->
            <div class="date-header" v-if="type == 'year'">
                <div><i class="iconfont icon-L2" @click="yearPrev"></i></div>
                <span class="date-header-year" @click="yearTitle">
                    {{ (year - year % 10) + '-' + (year - year % 10 + 10) }}
                </span>
                <div><i class="iconfont icon-R2" @click="yearNext"></i></div>
            </div>
            <div class="date-body">
                <!-- 选择日期 -->
                <div v-if="type == 'date' || type == 'dates'">
                    <!-- 星期 -->
                    <div v-show="dayListV" class="date-body-top">
                        <div v-for="i in weekData" :key="i">{{ i }}</div>
                    </div>
                    <!-- 天列表 -->
                    <div v-show="dayListV" class="date-body-content">
                        <div v-for="item in dateList" :key="item" @click="dayClick(item)" :class="dayListClass(item)">
                            {{ item.day }}
                        </div>
                    </div>
                    <!-- 月列表 -->
                    <div v-show="monthListV" class="date-body-month">
                        <div v-for="j in 12" :key="j" @click="monthList(j)" :class="monthListClass(j)">{{ j + '月' }}
                        </div>
                    </div>
                    <!-- 年列表 -->
                    <div v-show="yearListV" class="date-body-year">
                        <div v-for="k in 10" :key="k" @click="yearList(k)" :class="yearhListClass(k)">{{ year - year %
                                10 + k - 1
                        }}</div>
                    </div>
                </div>
                <!-- 选择月 -->
                <div v-if="type == 'month'">
                    <div v-show="monthListV" class="date-body-month">
                        <div v-for="j in 12" :key="j" @click="monthList(j)" :class="monthListClass(j)">{{ j + '月' }}
                        </div>
                    </div>
                    <div v-show="yearListV" class="date-body-year">
                        <div v-for="k in 10" :key="k" @click="yearList(k)" :class="yearhListClass(k)">{{ year - year %
                                10 + k - 1
                        }}</div>
                    </div>
                </div>
                <!-- 选择年 -->
                <div v-if="type == 'year'" class="date-body-year">
                    <div v-for="k in 10" :key="k" @click="yearList(k)" :class="yearhListClass(k)">{{ year - year % 10 +
                            k - 1
                    }}</div>
                </div>
            </div>
            <div v-if="type == 'dates'" class="date-foot">
                <div class="date-foot-ok" @click="ok">完成</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    components: { zInput },
    name: 'ZDate',
};

</script>

<script setup>
import { ref, computed, onMounted } from 'vue';
import zInput from './z-input.vue';

const emit = defineEmits(['update:modelValue', 'change', 'click'])
const props = defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: ''
    },
    currentSign: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'date'
    }
})

const dateShow = ref(false)

let date = new Date();
const year = ref(date.getFullYear())//年
const month = ref(date.getMonth())//月
const day = ref(date.getDate())//日

const yearListV = ref(false)
const monthListV = ref(props.type == 'month' ? true : false)
const dayListV = ref(true)

const weekData = ref(['日', '一', '二', '三', '四', '五', '六'])//每星期
const MonthDayList = ref([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]); //每月天数
const currentDay = year.value + "-"
    + (month.value < 9 ? "0" : "") + (month.value + 1) + "-"
    + (day.value < 10 ? "0" : "") + day.value //当天
const defaultDay = ref(props.modelValue || '')//选中天


const dayListClass = computed(() => (item) => {// 天列表样式
    return [
        currentDay == item.date && props.currentSign && item.class == 'currentMonth' ? 'currentDay' : '',
        defaultDay.value.indexOf(item.date) != -1 && item.class == 'currentMonth' ? 'active' : '',
        item.class == 'prevMonth' || item.class == 'nextMonth' ? 'disable' : '',
    ]
})

const monthListClass = computed(() => (item) => {// 月列表样式
    return [
        defaultDay.value.indexOf(year.value + '-' + (item <= 9 ? "0" : "") + item) != -1 ? 'select' : '',
    ]
})

const yearhListClass = computed(() => (item) => {// 年列表样式
    return [
        props.type != 'year' && (defaultDay.value.indexOf(year.value - year.value % 10 + item - 1) != -1) ? 'select' : '',
        defaultDay.value == (year.value - year.value % 10 + item - 1) ? 'select' : '',
    ]
})

//当前展示页面
const dateList = computed(() => {
    let monthDay = MonthDayList.value[month.value]; //本月天数
    let prevMonthDay = MonthDayList.value[month.value == 0 ? 11 : month.value - 1]//上月天数

    if (month.value == 1) {//判断闰月
        if ((year.value % 4 == 0 && year.value % 100 != 0) || year.value % 400 == 0) {
            monthDay = 29;
        }
    }

    let weekStar = new Date(year.value, month.value, 1).getDay();//本月第一天星期几
    let arr = []

    //上月日期
    for (let i = prevMonthDay - weekStar; i < prevMonthDay; i++) {
        let completeDate = year.value + "-"
            + (month.value < 10 ? "0" : "") + (month.value) + "-"
            + (i < 9 ? "0" : "") + (i + 1)
        let obj = {
            class: ["prevMonth"],
            date: completeDate,
            day: i + 1,
            select: false
        };
        arr.push(obj);

    }

    // 当月日期
    for (let j = 1; j <= monthDay; j++) {
        let completeDate = year.value + "-"
            + (month.value < 9 ? "0" : "") + (month.value + 1) + "-"
            + (j < 10 ? "0" : "") + j
        let obj = {
            class: ["currentMonth"],
            date: completeDate,
            day: j,
            select: false
        };
        arr.push(obj);
    }

    //下月日期
    for (var k = 1; k <= 42 - weekStar - monthDay; k++) {
        let completeDate = year.value + "-"
            + (month.value < 8 ? "0" : "") + (month.value + 2) + "-"
            + (k < 10 ? "0" : "") + k
        let obj = {
            class: ["nextMonth"],
            date: completeDate,
            day: k,
            select: false
        };
        arr.push(obj);
    }
    return arr
})


const yearPrev = () => {
    if (yearListV.value || props.type == 'year') {//上十年
        year.value -= 10
    } else {
        year.value--//上一年
    }
}
const yearNext = () => {
    if (yearListV.value || props.type == 'year') {//下十年
        year.value += 10
    } else {
        year.value++//下一年
    }
}


const monthPrev = () => {//上一月
    if (month.value == 0) {
        month.value = 11
        yearPrev()
    } else {
        month.value--
    }
}
const monthNext = () => {//下一月
    if (month.value == 11) {
        month.value = 0
        yearNext()
    } else {
        month.value++
    }
}


const monthTitle = () => {// 点击月标题
    yearListV.value = false
    monthListV.value = true
    dayListV.value = false
}
const yearTitle = () => {// 点击年标题
    yearListV.value = true
    monthListV.value = false
    dayListV.value = false
}


const dayClick = (item) => {//点击天
    let currentDay = year.value + "-"
        + (month.value < 9 ? "0" : "") + (month.value + 1) + "-"
        + (item.day < 10 ? "0" : "") + item.day
    let reg = new RegExp(currentDay + ' ')

    if (defaultDay.value.indexOf(item.date) != -1) {//已选中设置为true
        item.select = true
    }

    if (props.type == 'date') {//单选
        defaultDay.value = currentDay
        dateShow.value = false
    }

    if (props.type == 'dates') {//多选
        item.select = !item.select
        item.select ? defaultDay.value += currentDay + ' ' : defaultDay.value = defaultDay.value.replace(currentDay + ' ', '')
    }

}
const monthList = (v) => {// 点击月
    let currentMonth = year.value + '-' + (v < 9 ? "0" : "") + v
    if (props.type == 'month') {
        defaultDay.value = currentMonth
        dateShow.value = false
    } else {
        monthListV.value = false
        dayListV.value = true
        month.value = v - 1
    }
}
const yearList = (v) => {// 点击年
    let yearV = year.value - year.value % 10 + v - 1
    if (props.type == 'year') {
        defaultDay.value = yearV
        dateShow.value = false
    } else {
        yearListV.value = false
        monthListV.value = true
        year.value = yearV
    }
}


const focus = () => { //元素获得焦点打开
    dateShow.value = true
}
const vDown = { //元素外收起
    beforeMount(el) {
        let hander = (e) => {
            if (props.disabled) return
            if (!el.contains(e.target)) {
                dateShow.value = false
            }
        }
        document.addEventListener('click', hander)
    }
}
const ok = () => { //完成按钮
    dateShow.value = false
}

</script>


<style lang="scss" scoped>
.container {
    width: 160px;

}

.input {
    margin-bottom: 10px;
}

.date {
    position: absolute;
    width: 280px;
    border: 1px solid #d4d3d3;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;
}

.date-header {
    display: flex;
    justify-content: space-between;
    padding: 12px;

    .date-header-month {
        margin-left: 10px;
    }

    i,
    span {
        cursor: pointer;
    }

    i:hover,
    span:hover {
        color: #409eff;
    }
}

.date-body {
    font-size: 12px;
    text-align: center;

    &-top,
    &-content {
        display: flex;


        div {
            width: 24px;
            height: 24px;
            line-height: 24px;
            margin: 8px;
            border-radius: 50%;
        }
    }

    &-top {
        border-bottom: 1px solid #eee;
    }

    &-content {
        flex-wrap: wrap;
        cursor: pointer;

        :hover {
            color: #409eff;
        }
    }

    &-year,
    &-month {
        flex-wrap: wrap;
        display: flex;

        div {
            width: 25%;
            padding: 20px 0;
            cursor: pointer;
        }

        :hover {
            color: #409eff;
        }
    }

}

.date-foot {
    font-size: 12px;
    padding: 8px 12px;
    display: flex;
    justify-content: right;
    border-top: 1px solid #eee;

    &-ok {
        padding: 2px 10px;
        border: 1px solid #eee;
        cursor: pointer;
        border-radius: 4px;
    }
}


.active {
    background: #409eff;
    color: #fff;

    &:hover {
        color: #fff;
    }
}

.disable {
    color: #a8abb2;
    cursor: not-allowed;

    &:hover {
        color: #a8abb2;
    }
}

.currentDay {
    background: orange;
    color: #fff;


    &:hover {
        color: #fff;
    }
}

.select {
    color: #409eff;
}
</style>