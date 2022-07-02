<template>
    <div class="swipe" :style="{
        width: width + 'px',
        height: height + 'px',
    }">
        <div class="leftBtn" :style="{
            top: height / 2 - 18 + 'px'
        }" @click="leftBtn">
            <i class="iconfont icon-arrow-left"></i>
        </div>
        <div class="swipe-box" :style="{
            width: options.length * width + 'px',
            left: -imgIndex * width + 'px'
        }">
            <div class="swipe-box-item" v-for="(item, index) in options" :key="index">
                <img :src="item[urlF]">
            </div>
        </div>
        <div class="rightBtn" :style="{
            top: height / 2 - 18 + 'px'
        }" @click="rightBtn">
            <i class="iconfont icon-arrow-right"></i>
        </div>
        <div class="pointer" :style="{
            left: width / 2 - 10 * options.length + 'px'
        }" @click="pointerClick">
            <div v-for="(item, index) in options" :key="index"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ZCarousel',
};

</script>

<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
    options: {
        type: Array,
        default: () => []
    },
    width: {
        type: Number,
        default: 300
    },
    height: {
        type: Number,
        default: 200
    },
    urlF: {
        type: String,
        default: 'url'
    },
    valueF: {
        type: String,
        default: 'value'
    }
})

// 当前图片索引
const imgIndex = ref(0);

let pointerLeft = ref(0)
pointerLeft.value

// 左按钮
const leftBtn = () => {
    let length = props.options.length
    if (imgIndex.value < length - 1) {
        imgIndex.value++
    } else {
        imgIndex.value = 0
    }
}

// 右按钮
const rightBtn = () => {
    let length = props.options.length
    if (imgIndex.value > 0) {
        imgIndex.value--
    } else {
        imgIndex.value = length - 1
    }
}

// 小圆点
const pointerClick = () => {

}

</script>


<style lang="scss" scoped>
.swipe {
    margin: 20px auto;
    overflow: hidden;
    position: relative;

    .leftBtn,
    .rightBtn {
        width: 36px;
        height: 36px;
        position: absolute;
        z-index: 5;
        border-radius: 50%;
        cursor: pointer;
        background: rgba(31, 45, 61, .11);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .leftBtn {
        left: 10px;
    }

    .rightBtn {
        right: 10px;
    }

    &-box {
        position: absolute;
        display: block;

        &-item {
            float: left;
        }
    }
}

.pointer {
    position: absolute;
    bottom: 20px;

    div {
        float: left;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        margin: 0 5px;
        background: rgba(255, 255, 255, .3);
    }
}

.icon-arrow-left,
.icon-arrow-right {
    color: rgba(255, 255, 255, .8);
}
</style>