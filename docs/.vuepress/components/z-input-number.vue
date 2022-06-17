<template>
    <div :class="zClass">
        <button :class="zLeftButtonClass" @click="reduce"></button>
        <input type="text" class="z-input__inner" :value="modelVal" :disabled='disabled' :min="min" :max='max' :step="step" :strict='strict'
            @input="input" @focus="focus" @blur="blur" @change="change" />
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
})

const zClass = computed(() => {
    return [
        'z-input',
        focusValue.value ? 'z-input-focus' : '',
        props.disabled ? 'z-input-disabled' : '',
    ]
})

const zLeftButtonClass = computed(() => {
    return [
        'iconfont',
        'icon-sami-select',
        'z-button-left',
        modelVal.value > props.min && !props.disabled ? '' : 'z-button-left-disabled',
    ]
})

const zRightButtonClass = computed(() => {
    return [
        'iconfont',
        'icon-add-select',
        'z-button-right',
        modelVal.value < props.max && !props.disabled ? '' : 'z-button-right-disabled',
    ]
})

const input = (e) => {
    emit('input', e.target.value)
}

const change = (e) => {
    emit('change', e.target.value)
    if (e.target.value > props.max) {
        modelVal.value = props.max
    } else if (e.target.value < props.min) {
        modelVal.value = props.min
    } else {
        modelVal.value = e.target.value
    }
}
const blur = (e) => {
    focusValue.value = false
    emit('blur', e.target.value)
}

const focus = (e) => {
    focusValue.value = true
    emit('focus', e.target.value)
}
const add = (e) => {
    if (modelVal.value < props.max && !props.disabled) {
        modelVal.value=Number(modelVal.value)+Number(props.step)
        if(props.strict){
            modelVal.value = Math.round(modelVal.value)
        }
    }
}
const reduce = (e) => {
    if (modelVal.value > props.min && !props.disabled ) {
        modelVal.value-=props.step
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
</style>