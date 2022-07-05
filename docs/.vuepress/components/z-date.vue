    <template>
    <div class="date">
        <div class="date-header">
            <div><i class="iconfont icon-L2" @click="yearPrev"></i></div>
            <div><i class="iconfont icon-L" @click="monthPrev"></i></div>
            <div>
                <span class="date-header-year">{{ year + '年' }}</span>
                <span class="date-header-month">{{ month + 1 + '月' }}</span>
            </div>
            <div><i class="iconfont icon-R" @click="monthNext"></i></div>
            <div><i class="iconfont icon-R2" @click="yearNext"></i></div>
        </div>
        <div class="date-body">
            <div class="date-body-top">
                <div v-for="i in weekData" :key="i">{{ i }}</div>
            </div>
            <div class="date-body-content">
                <div v-for="item in dateList" :key="item" @click="dayClick(item)"
                    :class="[{ 'active': defaultDay == item.date  }, { 'disable': item.class == 'prevMonth' || item.class == 'nextMonth' }]">
                    {{ item.day }}</div>
            </div>
        </div>
    </div>

</template>


    <script>
export default {
    name: 'ZDate',
};

</script>

<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
    modelValue: String
})

let date = new Date();
const year = ref(date.getFullYear())//年
const month = ref(date.getMonth())//月
const day = ref(date.getDate())//日

const weekData = ref(['日', '一', '二', '三', '四', '五', '六'])//每星期
const MonthDayList = ref([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]); //每月天数

const currentDay = year.value + "-"
    + (month.value < 9 ? "0" : "") + (month.value + 1) + "-"
    + (day.value < 10 ? "0" : "") + day.value //当天
const defaultDay = ref(props.modelValue || currentDay)//选中天

const dateList = computed(() => {//当前展示页面
    let monthDay = MonthDayList.value[month.value]; //本月天数
    let prevMonthDay = MonthDayList.value[month.value == 0 ? 11 : month.value - 1]//上月天数

    if (month.value == 1) {//判断闰月
        if ((year.value % 4 == 0 && year.value % 100 != 0) || year.value % 400 == 0) {
            monthDay = 29;
        }
    }

    date.setDate(1)
    let weekStar = date.getDay()//本月第一天星期几
    date.setDate(monthDay)
    let weekEnd = date.getDay()//本月最后一天星期几

    const arr = []

    //上月日期
    for (let i = prevMonthDay - weekStar; i < prevMonthDay; i++) {
        let obj = {
            date: year.value + "-"
                + (month.value < 10 ? "0" : "") + (month.value) + "-"
                + (i < 9 ? "0" : "") + (i + 1),
            class: ["prevMonth"],
            day: i + 1,
        };
        arr.push(obj);

    }

    // 当月日期
    for (let j = 1; j <= monthDay; j++) {
        let obj = {
            date: year.value + "-"
                + (month.value < 9 ? "0" : "") + (month.value + 1) + "-"
                + (j < 10 ? "0" : "") + j,
            day: j,
        };
        arr.push(obj);

    }

    //下月日期
    for (var k = 1; k <= 6 - weekEnd; k++) {
        let obj = {
            date: year.value + "-"
                + (month.value < 8 ? "0" : "") + (month.value + 2) + "-"
                + (k < 10 ? "0" : "") + k,
            class: ["nextMonth"],
            day: k,
        };
        arr.push(obj);

    }

    return arr
})


const yearPrev = () => {//上一年
    year.value--
}
const yearNext = () => {//下一年
    year.value++
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

    console.log(dateList.value)
}

const dayClick = (item) => {//点击天
    let currentDay = year.value + "-"
        + (month.value < 9 ? "0" : "") + (month.value + 1) + "-"
        + (item.day < 10 ? "0" : "") + item.day
    if (currentDay == item.date) {
        defaultDay.value = currentDay
    }
}


</script>


<style lang="scss" scoped>
.date {
    width: 280px;
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
</style>