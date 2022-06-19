<template>
    <div>
        <div v-for="(item, index) in newOptions" :key="item.id" @click.stop="isOpen(item, index)">

            <div class="z-tree-label">
                <!-- 箭头 -->
                <div v-if="item[childrenF] && item[childrenF].length"
                    :class="[{ 'icon-youjiantou-click': item.isOpen }, 'iconfont', 'icon-youjiantou']"></div>
                <!-- 多选框 -->
                <span v-if="checkbox" class="z-tree-checkbox" @click.stop="checkboxClick(item, index)">
                    <span v-if="item.checkedAll" class="iconfont icon-dxbf"></span>
                    <span v-else-if="item.checked" class="iconfont icon-dxxz"></span>
                    <span v-else class="iconfont icon-dxwx"></span>
                </span>
                <!-- icon -->


                <!-- 文本 -->
                <div style="padding-left:10px">{{ item[labelF] }}</div>
            </div>

            <z-tree v-if="item.isOpen && item[childrenF] && item[childrenF].length" :options="item[childrenF]"
                style="padding-left:20px" :childrenF="childrenF" :checkbox="checkbox" :labelF="labelF"></z-tree>
        </div>
    </div>

</template>


<script>
export default {
    name: 'ZTree',
};

</script>


<script setup>
import { ref, computed } from 'vue'
const emit = defineEmits(['update:modelValue', 'change'])

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => {
            return []
        }
    },
    options: {
        type: Array,
        default: () => {
            return []
        }
    },
    childrenF: {
        type: String,
        default: 'children'
    },
    labelF: {
        type: String,
        default: 'label'
    },
    checkbox: {
        type: Boolean,
        default: false
    },
})


const newOptions = ref(props.options || [])


const isOpen = (item, index) => {
    item.isOpen = !item.isOpen
}


const checkboxClick = (item, index) => {
    let list=[]
    item.checked = !item.checked
    newOptions.value.forEach((item1) => {
        if (item.checked) {
            
        }
        
    })
     

    console.log(list)
    emit('update:modelValue', list)
    emit('change', { "value": list, "index": index })
}


</script>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.z-tree-label {
    padding-left: 10px;
    display: inline-block;
    width: 95%;

    div {
        display: inline-block;
    }

    &:hover {
        background-color: #f5f5f5;
    }
}

.z-tree-checkbox {
    padding-left: 10px;

    span {
        color: #409eff;

    }

    &:last-child {
        color: #cdd0d6;
    }

}


// icon
.icon-youjiantou {
    color: #a8abb2;
    font-size: 10px;
    transition: transform .3s;
    display: inline-block;
}

.icon-youjiantou-click {
    font-size: 10px;
    transform: rotate(90deg);
}

.icon-dxwx {
    color: #cdd0d6 !important;
}

.icon-dxwx:hover {
    color: #409eff !important;
}
</style>
