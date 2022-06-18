<template>
    <div :class="zClass">
        <button :class="zLeftButtonClass" @click="reduce"></button>
        <input type="text" class="z-input__inner" :value="modelVal" :disabled='disabled' :min="min" :max='max'
            :precision="precision" :step="step" :strict='strict' @input="input" @focus="focus" @blur="blur"
            @change="change" />
        <button :class="zRightButtonClass" @click="add"></button>

    </div>

</template>

<script>
export default {
    name: 'ZInputNumber'
};

</script>


<script setup>
import { computed, ref } from 'vue';

const focusValue = ref(false)

const modelVal = ref(props.modelValue || '')

const inputVal = ref('')

const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus', 'input'])

const props = defineProps({
    modelValue: Number,
    disabled: {
        type: Boolean,
        default: false
    },
    min: {
        type: Number,
        default: -Infinity
    },
    max: {
        type: Number,
        default: Infinity
    },
    step: {
        type: Number,
        default: 1
    },
    strict: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        default: ''
    },
    precision: {
        type: Number,
        default: 0
    },
})

const zClass = computed(() => {
    return [
        'z-input',
        !props.position ? '' : `z-input-${props.position}`,
        focusValue.value ? 'z-input-focus' : '',
        props.disabled ? 'z-input-disabled' : '',
    ]
})

const zLeftButtonClass = computed(() => {
    return [
        'iconfont',
        props.position == '' ? 'icon-sami-select' : 'icon-arrow-down',
        props.position != '' ? '' : 'z-button-left',
        modelVal.value > props.min && !props.disabled ? '' : 'z-button-left-disabled',
    ]
})

const zRightButtonClass = computed(() => {
    return [
        'iconfont',
        props.position == '' ? 'icon-add-select' : 'icon-arrow-up',
        props.position != '' ? '' : 'z-button-right',
        modelVal.value < props.max && !props.disabled ? '' : 'z-button-right-disabled',
    ]
})

const input = (e) => {
    emit('input', e.target.value)
    inputVal.value = e.target.value
}

const setPrecision = () => {
    if (props.precision) {
        modelVal.value = parseFloat(modelVal.value).toFixed(props.precision)
        console.log(modelVal.value)
    }
}

const change = (e) => {
    emit('change', e.target.value)
    if (e.target.value > props.max) {
        modelVal.value = props.max
    } else if (e.target.value < props.min) {
        modelVal.value = props.min
    } else {
        modelVal.value = e.target.value
        setPrecision()
    }
}
const blur = (e) => {

    focusValue.value = false
    emit('blur', e.target.value)

    if (!props.strict) {
        return
    }
    const _inputVal = (inputVal.value - props.modelValue) / props.step
    const newVal = Math.ceil(_inputVal) * props.step + props.modelValue
    if (inputVal.value != '' || _inputVal % 1 !== 0) {
        modelVal.value = newVal
        setPrecision()
    }
}

const focus = (e) => {
    focusValue.value = true
    emit('focus', e.target.value)

}
const add = (e) => {

    if (modelVal.value < props.max && !props.disabled) {
        modelVal.value = Number(modelVal.value) + Number(props.step)
        setPrecision()
    }

}
const reduce = (e) => {
    if (modelVal.value > props.min && !props.disabled) {
        modelVal.value -= props.step
        setPrecision()
    }
}


</script>


<style lang="scss" scoped>
.z-input {
    display: flex;
    width: 150px;
    height: 30px;
    border: 1px solid #dcdfe6f6;
    overflow: hidden;
    border-radius: 4px;
    transition: all .2s ease;
    position: relative;
    box-sizing: border-box;
    position: relative;

    button {
        width: 30px;
        height: 30px;
        border: none;

        &:hover {
            color: #c0c4cc;
        }
    }

    &:hover {
        border-radius: 4px;
        border: 1px solid #c0c4cc;
    }

    &__inner {
        width: 90px;
        font-size: 14px;
        outline: none;
        border: 0;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
        color: #606266;
        text-align: center;

        &::placeholder {
            color: #c6c8cc;
            font-size: 14px;
        }
    }
}

// 禁用
.z-input-disabled {
    border: 1px solid #c0c4cc;
    background: #f5f7fa;

    input {
        color: #c0c4cc;
        cursor: not-allowed;
    }
}

// 聚焦
.z-input-focus {
    border: 1px solid #409eff !important;
}


// +，-按钮
.z-button-left {
    border-right: 1px solid #dcdfe6f6 !important;
}

.z-button-right {
    border-left: 1px solid #dcdfe6f6 !important;
}

.z-button-left-disabled {
    cursor: not-allowed;
    color: #c6c8cc;
}

.z-button-right-disabled {
    cursor: not-allowed;
    color: #c6c8cc;
}

// 按钮位置

.z-input-right {
    position: relative;

    input {
        width: 120px;
    }

    button {
        position: absolute;
        border-bottom: 1px solid #dcdfe6f6 !important;
        border-left: 1px solid #dcdfe6f6 !important;
        height: 15px;

        &:first-child {
            top: 14px;
            right: 0;
        }

        &:last-child {
            right: 0;
        }
    }
}
</style>