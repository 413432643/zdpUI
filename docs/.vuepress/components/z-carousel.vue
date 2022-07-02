<template>
    <div class="swipe" :style="swipeStyle">
        <!-- 左按钮 -->
        <div class="leftBtn" :style="btnStyle" @click="leftBtn">
            <i class="iconfont icon-arrow-left"></i>
        </div>
        <div class="swipe-box" :style="{
            width: vertical ? '' : options.length * width + 'px',
            left: vertical ? '' : -imgIndex * width + 'px',
            height: vertical ? options.length * height + 'px' : '',
            top: vertical ? -imgIndex * height + 'px' : '',
        }">
            <div class="swipe-box-item" v-for="(item, index) in options" :key="index" :style="swipeBoxItemStyle">
                <img :src="item[urlF]">
            </div>
        </div>
        <!-- 右按钮 -->
        <div class="rightBtn" :style="btnStyle" @click="rightBtn">
            <i class="iconfont icon-arrow-right"></i>
        </div>
        <!-- 小圆点 -->
        <div v-if="showPointer" class="pointer" :style="pointerStyle">
            <div v-for="(n, i) in options" :key="i" @click="pointerClick(i)"
                :class="{ 'pointerActive': imgIndex == i }">
            </div>
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
    },
    auto: {//自动滚动
        type: Boolean,
        default: false
    },
    showPointer: {//显示小圆点
        type: Boolean,
        default: false
    },
    autoItem: {//控制滚动时间
        type: Number,
        default: 1000
    },
    vertical: {//垂直布局
        type: Boolean,
        default: false
    }
})

// 当前图片索引
const imgIndex = ref(0);


const swipeStyle = {
    width: props.width + 'px',
    height: props.height + 'px',
}
const swipeBoxItemStyle = {
    height: props.height + 'px',
}

const btnStyle = {
    top: props.height / 2 - 18 + 'px'
}
const pointerStyle = {
    left: props.width / 2 - 10 * props.options.length + 'px'
}



// 左按钮


const leftBtn = () => {
    let length = props.options.length
    if (imgIndex.value > 0) {
        imgIndex.value--
    } else {
        imgIndex.value = length - 1
    }
    clearInterval(auto)
}



// 右按钮
const rightBtn = () => {
    let length = props.options.length
    if (imgIndex.value < length - 1) {
        imgIndex.value++
    } else {
        imgIndex.value = 0
    }
    clearInterval(auto)
}


// 小圆点
const pointerClick = (i) => {
    imgIndex.value = i
    clearInterval(auto)
}

// 自动播放
const auto = setInterval(() => {
    if (!props.auto) return
    let length = props.options.length
    if (imgIndex.value < length - 1) {
        imgIndex.value++
    } else {
        imgIndex.value = 0
    }
}, props.autoItem);


</script>


<style lang="scss" scoped>
.swipe {
    margin: 20px auto;
    overflow: hidden;
    position: relative;

    &:hover {

        .leftBtn,
        .rightBtn {
            opacity: 1;
        }
    }

    .leftBtn,
    .rightBtn {
        width: 36px;
        height: 36px;
        z-index: 5;
        border-radius: 50%;
        background: rgba(31, 45, 61, .11);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;

        &:hover {
            background: rgba(31, 45, 61, .23);
        }
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
        transition: 1s;

        &-item {

            float: left;
        }
    }
}

.pointer {
    position: absolute;
    bottom: 10px;

    div {
        float: left;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        margin: 5px;
        background: rgba(255, 255, 255, .3);

    }
}

.pointerActive {
    background: rgba(255, 255, 255, .8) !important;
}

.icon-arrow-left,
.icon-arrow-right {
    color: rgba(255, 255, 255, .8);
}
</style>