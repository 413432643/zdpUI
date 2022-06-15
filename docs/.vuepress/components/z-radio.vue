<template>
    <div :class="zClass">
        <label class="z-radio" v-for="(item, index) in options" :key="index"
            :class="{ 'z-radio-disabled': item.disabled }" @click="radioClick(item, index)">
            <span :class="[{ 'active': radioIndex == index && item.disabled ==flase },{'z-radio-small': size=='small'},{'z-radio-large': size=='large'}]"></span>
            {{ item.title }}
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

const props = defineProps({
    options: {
        type: Object,
        default: false
    },
    size: {
        type: String,
        default: 'default'
    },
    inline: Boolean,
})

const zClass = computed(() => {
    return [
        props.inline ? '' : `z-radio-row` ,
    ]
})

const radioIndex = ref(0)


const radioClick = (e, index) => {
    if (e.disabled) {
        return
    }
    radioIndex.value = index
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