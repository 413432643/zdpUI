<template>
    <div class="z-select" v-upDown>
        <div class="z-select-input" @onmouseover="clear">
            <input type="text" :readonly="!filterable" :value="modelValue" :class="{ 'z-input-focus': boxShow }"
                :disabled='disabled' :placeholder="placeholder" @input="input">
            <i :class="iClass" @click="clearSelect"></i>
        </div>

        <div class="z-box" v-if="boxShow">
            <div v-for="(item, index) in options" :key="index"
                :class="['z-box-label', { 'z-box-label-disabled': item.disabled }, { 'z-box-label-selected': item[labelF] == modelValue }]"
                @click="labelClick(item)">
                {{ item[labelF] }}</div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ZSelect',
};

</script>

<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['update:modelValue', 'change', 'input'])


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
    disabled: Boolean,
})

const boxShow = ref(false)

const iClass = computed(() => {
    return [
        'iconfont',
        props.modelValue == '' ? 'icon-arrow-down' : (props.clearable ? 'icon-close1' : 'icon-arrow-down'),
        boxShow.value ? 'icon-arrow-down-active' : ''
    ]
})


const vUpDown = {
    beforeMount(el) {
        let hander = (e) => {
            if (props.disabled) return
            if (!el.contains(e.target)) return boxShow.value = false

            boxShow.value = !boxShow.value
        }
        document.addEventListener('click', hander)
    }
}

const clearSelect = () => {
    if (props.modelValue == '') return
    if (!props.clearable) return
    emit('update:modelValue', '')
}

const labelClick = (item) => {
    if (item.disabled) return
    emit('update:modelValue', item[props.labelF])
    boxShow.value = false
}


const input = (e) => {

    emit('update:modelValue', e.target.value)
    emit('input', e.target.value)
}

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
    width: 100%;
    overflow: hidden;
    height: auto;
    position: absolute;
    border: 1px solid #d4d3d3;
    top: 40px;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;

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

.icon-close1 {
    position: absolute;
    padding: 8px;
    right: 0;
    color: #d4d3d3;
}

.icon-arrow-down-active {
    transform: rotate(180deg);
}
</style>