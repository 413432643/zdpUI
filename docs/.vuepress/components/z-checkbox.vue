<template>
    <div :class="ZInlineClass">
        <label v-for="(item, index) in checkOptions" :key="index" class="z-checkbox"
            :class="[{ 'active': item.checked && item.disabled != true }, { 'z-checkbox-disabled': item.disabled }]"
            @click="checkChange(item, index)">
            <span class="z-checkbox-selectbox" :class="zSizeClass"></span>
            {{ item[titleFiled] }}
        </label>
    </div>
</template>
<script>
export default {
    name: "mCheckbox"
}
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
    titleFiled: {
        type: String,
        default: "title"
    },
    valueFiled: {
        type: String,
        default: "value"
    },
    size: {
        type: String,
        default: 'default'
    },
    inline: Boolean,

})
const checkOptions = ref(props.options || [])

// 默认值
checkOptions.value.forEach((item) => {
    item.checked = false
    props.modelValue.forEach((item1) => {
        if (item[props.valueFiled] === item1) {
            item.checked = true
        }
    })
})


const ZInlineClass = computed(() => {
    return [
        props.inline ? '' : 'z-checkbox-row',
    ]
})

const zSizeClass = computed(() => {
    return [
        props.size == 'small' ? 'z-radio-small' : '',
        props.size == 'large' ? 'z-radio-large' : '',
    ]
})

const checkChange = (item, index) => {
    let checkData = []
    if (!item.disabled) {
        item.checked = !item.checked
    }
    checkOptions.value.forEach((item, index) => {
        if (item.checked) {
            checkData.push(item[props.valueFiled])
        }
    })
    emit('update:modelValue', checkData)
    emit('change', { "value": checkData, "index": index })
}
</script>

<style lang="scss" scoped>
.z-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    margin-right: 20px;
    user-select: none;

    .z-checkbox-selectbox {
        width: 14px;
        height: 14px;
        border-radius: 4px;
        display: inline-block;
        border: 1px solid #b9b9b9;
        margin: 3.2px 8px 0 0;
        background: #fff;
        position: relative;
        font-size: 14px;
        box-sizing: border-box;
        transition: transform 0.15s ease-in;

        &::after {
            box-sizing: content-box;
            content: "";
            display: inline-block;
            width: 3px;
            height: 7.5px;
            transform: rotate(45deg);
            border-style: solid;
            border-color: #fff;
            border-width: 0 2px 2px 0;
            position: absolute;
            left: 4px;
            transition: transform 0.15s ease-in;
        }
    }
}

.active {
    .z-checkbox-selectbox {
        border: 1px solid #0e80eb;
        background: #0e80eb;

        &::after {
            border-color: #fff;
        }
    }
}
.z-checkbox-disabled{
    cursor: not-allowed;
    .z-checkbox-selectbox {
        border: 1px solid #b9b9b9;
        background: #f5f7fa;
        &::after {
            border-color: #f5f7fa;
        }
    }   
}

.z-checkbox-row {
    display: flex;
}


.z-radio-small {
    width: 12px !important;
    height: 12px !important;
}

.z-radio-large {
    width: 16px !important;
    height: 16px !important;
}
</style>