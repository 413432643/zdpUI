    <template>
    <div class="date">
        <div class="date-header">
            <div><i class="iconfont icon-L2" @click="yearNext"></i></div>
            <div><i class="iconfont icon-L" @click="monthNext"></i></div>
            <div>
                <span class="date-header-year">{{ year + '年' }}</span>
                <span class="date-header-month">{{ month + '月' }}</span>
            </div>
            <div><i class="iconfont icon-R" @click="monthPrev"></i></div>
            <div><i class="iconfont icon-R2" @click="yearPrev"></i></div>
        </div>
        <div class="date-body">
            <div class="date-body-top">
                <div v-for="i in weekData" :key="i" >{{ i }}
                </div>
            </div>
            <div class="date-body-content">
                <div v-for="item in 42" :key="item" @click="dayClick(item)" :class="{ 'active': defaultDay == item }">{{ item }}</div>
            </div>
            <div class="date-body-bottom">
                <div class="new">此刻</div>
                <div class="ok">确定</div>
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
    modelValue: Number
})
var date = new Date();

const year = ref(date.getFullYear())
const month = ref(date.getMonth() + 1)
const day = ref(date.getDate())
const week = ref(date.getDay())
const weekData = ref(['日', '一', '二', '三', '四', '五', '六'])

const defaultDay = ref(props.modelValue || 1)


const yearNext = () => {
    year.value--
}
const yearPrev = () => {
    year.value++
}

const monthNext = () => {
    if (month.value == 1) {
        month.value = 12
        yearNext()
    } else {
        month.value--
    }
}
const monthPrev = () => {
    if (month.value == 12) {
        month.value = 1
        yearPrev()
    } else {
        month.value++
    }
}

const dayClick = (item) => {
    defaultDay.value = item
}


</script>


<style lang="scss" scoped>
.date {
    width: 280px;
}

.date-header {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
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
        border-bottom: 1px solid #eee;

        div {
            width: 24px;
            height: 24px;
            line-height: 24px;
            margin: 8px;
            border-radius: 50%;
        }
    }

    &-content {
        flex-wrap: wrap;
        cursor: pointer;

        :hover {
            color: #409eff;
        }
    }

    &-bottom {
        padding: 4px 12px;
        height: 30px;
        display: flex;
        justify-content: right;
        align-items: center;

        div {
            padding: 3px 11px;
            cursor: pointer;
            border-radius: 4px;
        }

        .ok {
            border: 1px solid #eee;
            margin-left: 10px;
        }

        .ok:hover {
            border: 1px solid #409eff;
            color: #409eff;
        }

        .new:hover {
            background: #eee;
        }
    }
}

.active {
    background: #409eff;
    color: #fff;
}
</style>