<template>
    <div class="container">
        <div class="pagination">
            <div :class="nextClass" @click="first" :style="style"><i class="iconfont icon-L2"></i></div>
            <div :class="nextClass" @click="next" :style="style">
                <i class="iconfont icon-L"></i>
            </div>
            <div v-if="currentPage > 5" @click="doubleNext" :style="style">...</div>
            <div @click="page(i)" v-for="i in pageList" :key="i" :class="{ active: currentPage === i }" :style="style">
                {{ i }}</div>
            <div v-if="currentPage < pages - 4" @click="doublePrev" :style="style">...</div>
            <div :class="prevClass" @click="prev" :style="style">
                <i class="iconfont icon-R"></i>
            </div>
            <div :class="prevClass" @click="last" :style="style"><i class="iconfont icon-R2"></i></div>
            <z-input v-if="customPage" @input="input" class="input" />
        </div>
        <z-select v-if="pagesizeOption.length" :options='pagesizeOption' v-model="pagesize" class="select"></z-select>
    </div>
</template>


<script>
export default {
    components: { zSelect },
    name: 'ZPagination',
}
</script>
<script setup>
import { computed, ref } from 'vue'
import ZInput from './z-input.vue'

import zSelect from './z-select.vue'
const emit = defineEmits(['update:modelValue', 'change', 'change-input'])
const props = defineProps({
    modelValue: Number,
    total: { // 总条数
        type: Number,
        default: 0
    },
    pagesize: { // 每页条数
        type: Number,
        default: 10
    },
    jump: {
        type: Number,
        default: 5
    },
    pagesizeOption: {
        type: Array,
        default: () => []
    },
    customPage: {
        type: Boolean,
        default: false
    },
    selectColor: {
        type: String,
        default: '#409eff'
    },
    bgColor: {
        type: String,
        default: ''
    },
    bgActive: {
        type: String,
        default: ''
    },
    borderRadius: {
        type: Number,
        default: 0
    }

})




const prevClass = computed(() => {
    return [
        currentPage.value == pages.value ? 'disabled' : ''
    ]
})

const nextClass = computed(() => {
    return [
        currentPage.value == 1 ? 'disabled' : ''
    ]
})


const style = {
    '--selectColor': props.selectColor,
    '--bgColor': props.bgColor,
    '--borderRadius': props.borderRadius + 'px',
    '--bgActive': props.bgActive
}


const pages = computed(() => { // 总页数
    return Math.ceil(props.total / props.pagesize)
})

const currentPage = ref(props.modelValue || 1) // 当前页码

const pageList = computed(() => { // 页码列表
    const result = []
    if (pages.value <= 5) { // 总页数小于5
        for (let i = 1; i <= pages.value; i++) {
            result.push(i)
        }
    } else if (currentPage.value <= 3) {
        for (let i = 1; i <= 5; i++) {
            result.push(i)
        }
    } else if (currentPage.value >= pages.value - 2) {
        for (let i = pages.value - 4; i <= pages.value; i++) {
            result.push(i)
        }
    } else {
        for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            result.push(i)
        }
    }
    return result
})



const next = () => { //上一页
    if (currentPage.value === 1) return
    currentPage.value--
    emit('change', currentPage.value)
}
const prev = () => {//下一页
    if (currentPage.value === pages.value) return
    currentPage.value++
    emit('change', currentPage.value)
}

const page = (i) => {//按钮
    currentPage.value = i
    emit('change', currentPage.value)
}
const first = () => { //返回首页
    currentPage.value = 1
    emit('change', currentPage.value)
}

const last = () => {//返回尾页
    currentPage.value = pages.value
    emit('change', currentPage.value)
}

const doubleNext = () => {
    currentPage.value -= props.jump
    emit('change', currentPage.value)

}
const doublePrev = () => {
    currentPage.value += props.jump
    emit('change', currentPage.value)
}


const input = (e) => {
    if (Number(e) > pages.value) {
        currentPage.value = pages.value
    } else if (Number(e) < 1) {
        currentPage.value = 1
    } else {
        currentPage.value = Number(e)
    }
    emit('change-input', currentPage.value)
}

</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: left;

    .select {
        width: 80px;

        :global(.z-select) {
            height: auto !important;
        }
    }
}

.input {
    width: 60px;
    border-radius: 4px !important;

    ::v-deep(.z-input__inner) {
        text-align: center;
        padding: 0 !important;
    }
}
    
.pagination {
    display: flex;

    div {
        padding: 5px 10px;
        margin-right: 10px;
        cursor: pointer;
        background: var(--bgColor);
        border-radius: var(--borderRadius);

        &:hover {
            color: var(--selectColor);

        }

        &.active {
            color: var(--selectColor);
            background: var(--bgActive)
        }

        &.disabled {
            cursor: not-allowed;
            opacity: 0.4;

            &:hover {
                color: #000
            }
        }
    }
}
</style>