<template>
    <div class="z-select" v-down>
        <div class="z-select-input" @click="upbox" @mouseenter="mouseenter" @mouseleave="mouseleave">
            <input type="text" :readonly="!filterable" :value="modelValue" :class="{ 'z-input-focus': boxShow }"
                :disabled='disabled' :placeholder="placeholder" @input="input" />
            <i :class="iconClass" @click="clearSelect"></i>
        </div>

        <div class="z-box" :style="boxStyle" v-show="boxShow">
            <div v-for="(item, index) in _options" :key="index" @click="labelClick(item)" :class="labelClass(item)">
                {{ item[labelF] }}</div>
            <slot name="selectBox"></slot>
            <div class="notData" v-show="notData">not Data</div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ZSelect',
};

</script>

<script setup>
import { ref, computed, watch } from 'vue';
const emit = defineEmits(['update:modelValue', 'change', 'input',])
const props = defineProps({
    modelValue: String | Number,
    options: {
        type: Array,
        default: () => []
    },
    labelF: {
        type: String,
        default: 'label'
    },
    valueF: {
        type: String,
        default: 'value'
    },
    placeholder: {
        type: String,
        default: ''
    },
    clearable: {
        type: Boolean,
        default: false
    },
    filterable: {
        type: Boolean,
        default: false
    },
    widthBox: {
        type: String,
        default: '100%'
    },
    maxHeightBox: {
        type: String,
        default: '162px'
    },
    disabled: Boolean,
})

const boxShow = ref(props.boxShow)

const notData = ref(false)

const _options = ref(props.options || '')

const clear =ref(false)


const boxStyle = {
    '--width': props.widthBox,
    '--maxHeight': props.maxHeightBox
}

const iconClass = computed(() => {
    return [
        'iconfont',
        props.clearable && clear.value && props.modelValue ? 'icon-shanchu' : 'icon-arrow-down',
        boxShow.value ? 'icon-arrow-down-active' : ''
    ]
})
const labelClass = computed(() => (item) => {
    return [
        'z-box-label',
        item.disabled ? 'z-box-label-disabled' : '',
        item[props.labelF] == props.modelValue ? 'z-box-label-selected' : ''
    ]
})


const vDown = {
    beforeMount(el) {
        let hander = (e) => {
            if (props.disabled) return
            if(!el.contains(e.target)) return boxShow.value = false
        }
        document.addEventListener('click', hander)
    }
}

const upbox=()=>{
    if (props.disabled) return
    boxShow.value = true
}

const clearSelect = () => {
    if (props.modelValue == '') return
    if (!props.clearable) return
    emit('update:modelValue', '')
}

const labelClick = (item) => {
    if (item.disabled) return
    emit('update:modelValue', item[props.labelF])
    emit('change', item)
    boxShow.value = false
}


const input = (e) => {
    emit('update:modelValue', e.target.value)
    emit('input', e.target.value)
}

const mouseenter =()=>{
    clear.value=true
}
const mouseleave =()=>{
     clear.value=false
}


// 筛选

watch(() => props.modelValue, (newName, oldName) => {
    if (!props.filterable) return
    if (newName == '') {
        _options.value = props.options
    } else {
        let arr = []
        props.options.forEach(item => {
            if (item.label.indexOf(newName) == -1) return
            arr.push(item)
        });
        _options.value = arr
        _options.value.length == 0 ? notData.value = true : notData.value = false
    }
});


</script>


<style lang="scss" scoped>
.z-select {
    display: inline-block;
    height: 40px;
    position: relative;

    input {
        border-radius: 4px;
        border: 1px solid #d4d3d3;
        padding: 8px 10px;
        outline: none;
        box-sizing: border-box;
        width: 100%;
        cursor: pointer;

        &:hover {
            border: 1px solid #c0c4cc;
        }
    }
}

.z-input-focus {
    border: 1px solid #409eff !important;
}

.z-box {
    width: var(--width);
    max-height: var(--maxHeight);
    overflow-y: scroll;
    position: absolute;
    border: 1px solid #d4d3d3;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;
    top: 40px;

    &::-webkit-scrollbar {
        width: 5px;
        height: 1px;
    }

    &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 4px;

        background: #E5E5E5;
    }

    &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        background: #ffffff;
    }

    div {
        height: 40px;
        box-sizing: border-box;
        cursor: pointer;
        line-height: 40px;
        font-size: 14px;
        background: #fff;

        &:hover {
            background: #f0f0f0;
        }
    }
}

.z-box-label {
    padding: 0 10px;
}

.z-box-label-disabled {
    cursor: not-allowed !important;
    color: #a8abb2;
}

.z-box-label-selected {
    color: #409eff;
}

.icon-arrow-down {
    position: absolute;
    padding: 8px;
    right: 0;
    color: #d4d3d3;
    transition: transform .5s;
}

.icon-arrow-down-active {
    transform: rotate(180deg);
}

.icon-shanchu {
    position: absolute;
    padding: 8px;
    right: 0;
    color: #d4d3d3;
}

.notData {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a8abb2;
}
</style>