<template>
    <div :class="zInlineClass">
        <label class="z-radio" v-for="(item, index) in options" :key="index"
            :class="{ 'z-radio-disabled': item.disabled }" @click="radioChange(item, index)">
            <span :class="[{ 'active': modelVal == item[valueFiled] && item.disabled != true }, zSizeClass]"></span>
            {{ item[titleFiled] }}
        </label>
    </div>
</template>
<script>
export default {
    name: 'ZRadio',
}
</script>

<script setup>
import { computed, ref } from 'vue';
// const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
    modelValue: String | Number,
    inline: Boolean,
    options: {
        type: Object,
        default: () => {
            return {}
        }
    },
    size: {
        type: String,
        default: 'default'
    },
    valueFiled: {
        type: String,
        default: "value"
    },
    titleFiled: {
        type: String,
        default: "title"
    },

})

const zInlineClass = computed(() => {
    return [
        props.inline ? '' : `z-radio-row`,
    ]
})

const zSizeClass = computed(() => {
    return [
        props.size == 'small' ? 'z-radio-small' : '',
        props.size == 'large' ? 'z-radio-large' : '',
    ]
})


const modelVal = ref(props.modelValue)

const radioChange = (item, index) => {
    if (!item.disabled) {
        modelVal.value = item[props.valueFiled]
        // emit('update:modelValue', item[props.valueFiled])
        // emit('change', { "value": item[props.valueFiled], "index": index })
    }
}


</script>


<style lang="scss" scoped>
.z-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    user-select: none;

    span {
        width: 14px;
        height: 14px;
        display: inline-block;
        position: relative;
        border: 1px solid rgb(128, 125, 125);
        border-radius: 50%;
        margin-right: 10px;
        background: #fff;
        transition: transform .15s ease-in;

        &::after {
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background: #fff;
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -2px 0 0 -2px;
            transition: transform .15s ease-in;
        }
    }


    span.active {
        background: #409eff;
        border: 1px solid #409eff;

    }


}

.z-radio-disabled {
    cursor: not-allowed;
    color: #c0c4cc;

    span {
        border: 1px solid #c0c4cc;
        background: #f5f7fa;

        &::after {
            background: #f5f7fa;
        }
    }
}

.z-radio-row {
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