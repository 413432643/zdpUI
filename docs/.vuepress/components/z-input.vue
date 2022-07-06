<template>
    <div :class="zClass" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <i :class="[{ leftIcon: !leftIcon }, 'iconfont', leftIcon]" style="padding:10px 0 10px 10px"></i>
        <textarea v-if="type === 'textarea'" class="z-input__inner" :value="modelValue" :autosize='autosize'
            :rows='rows' :placeholder="placeholder" :disabled='disabled' @input="input" @focus="focus" @blur="blur"
            @change="change" :style="{ height: tHeight }"></textarea>
        <input v-else class="z-input__inner" :value="modelValue" :placeholder="placeholder" :disabled='disabled'
            :type="type" :clearable='clearable' @input="input" @focus="focus" @blur="blur" @change="change" />
        <span @click="clear" class="iconfont icon-shanchu"></span>
        <i :class="[{ rightIcon: !rightIcon }, 'iconfont', rightIcon]"></i>
    </div>

</template>

<script>
export default {
    name: 'ZInput',
}
</script>

<script setup>
import { computed, ref } from 'vue';

const focusValue = ref(false)

const tHeight = ref('')

const chear = ref(false)

const emit = defineEmits(['update:modelValue', 'clear', 'change', 'focus', 'input', 'blur'])

const props = defineProps({
    modelValue: String | Number,
    placeholder: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    clearable: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'text',
        valdate() {
            return ['text', 'password', 'textarea'].indexOf(value) !== -1
        }
    },
    leftIcon: {
        type: String,
        default: ''
    },
    rightIcon: {
        type: String,
        default: ''
    },
    rows: {
        type: [Number, String],
        default: 1
    },
    autosize: {
        type: Boolean,
        default: false
    },

})


const zClass = computed(() => {
    return [
        'z-input',
        props.disabled ? 'z-input-disabled' : '',
        focusValue.value ? 'z-input-focus' : '',
        props.clearable && props.modelValue && chear.value ? '' : 'z-input-clearable',
    ]
})





const input = (e) => {
    emit('update:modelValue', e.target.value)
    emit('input', e.target.value)
    if (props.type === 'textarea' && props.autosize) {
        tHeight.value = e.target.scrollHeight + 'px'
    }
}
const clear = () => {
    emit('update:modelValue', '')
    focusValue.value = true
}

const focus = (e) => {
    focusValue.value = true
    emit('focus', e.target.value)
}

const blur = (e) => {
    focusValue.value = false
    emit('blur', e.target.value)
}

const change = (e) => {
    emit('change', e.target.value)
}
const mouseenter = () => {
    if (props.clearable) {
        chear.value = true
    }
}
const mouseleave = () => {
    if (props.clearable) {
        chear.value = false
    }
}


</script>

<style lang="scss" scoped>
.z-input {
    display: flex;
    width: 100%;
    border: 1px solid #dcdfe6;
    overflow: hidden;
    border-radius: 4px;
    transition: all .2s ease;
    position: relative;
    box-sizing: border-box;

    &:hover {
        border-radius: 4px;
        border: 1px solid #c0c4cc;
    }

    &__inner {
        width: 100%;
        font-size: 14px;
        outline: none;
        border: 0;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
        color: #606266;

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
        cursor: not-allowed;
    }
}

// 聚焦
.z-input-focus {
    border: 1px solid #409eff !important;
}


.iconfont {
    padding-top: 10px;
    padding-right: 10px;
}

.z-input-clearable {
    span {
        display: none;
    }
}

.icon-shanchu {
    color: #dcdfe6;
}

// 左侧图标
.rightIcon {
    display: none;
}

//右侧图标
.leftIcon {
    display: none;
}
</style>