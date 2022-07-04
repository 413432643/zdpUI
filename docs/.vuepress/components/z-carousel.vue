<template>
    <div class="swipe" :style="swipeStyle" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <!-- 左按钮 -->
        <div class="leftBtn" :style="btnStyle" @click="leftBtn">
            <i class="iconfont icon-arrow-left"></i>
        </div>
        <!-- 容器 -->
        <div :class="boxClass" v-for="(item, index) in options" :key="item[valueF]">
            <transition>
                <img v-if="index === imgIndex" :src="item[urlF]">
            </transition>
        </div>
        <!-- 右按钮 -->
        <div class="rightBtn" :style="btnStyle" @click="rightBtn">
            <i class="iconfont icon-arrow-right"></i>
        </div>
        <!-- 小圆点 -->
        <div v-if="showPointer" class="pointer" :style="pointerStyle">
            <div v-for="(n, i) in options" :key="n[valueF]" @click="pointerClick(i)"
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
    modelValue: Number,
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
const imgIndex = ref(props.modelValue || 0);

// 方向
const direction = ref(false)

let t = null


// 样式
const swipeStyle = {
    width: props.width + 'px',
    height: props.height + 'px',
}

const btnStyle = {
    top: props.height / 2 - 18 + 'px',
}

const pointerStyle = {
    left: props.width / 2 - 10 * props.options.length + 'px'
}

const boxClass = computed(() => {
    return [
        'swipe-item',
        props.vertical ?
            (direction.value ? 'downActive' : 'topActive') :
            (direction.value ? 'leftActive' : 'rightActive'),
    ]
})




// 左按钮

const leftBtn = () => {
    let length = props.options.length
    imgIndex.value > 0 ?
        imgIndex.value-- :
        imgIndex.value = length - 1
    direction.value = true
    emit('change', imgIndex.value)
}



// 右按钮
const rightBtn = () => {
    let length = props.options.length
    imgIndex.value < length - 1 ?
        imgIndex.value++ :
        imgIndex.value = 0
    direction.value = false
    emit('change', imgIndex.value)
}


// 小圆点
const pointerClick = (i) => {
    imgIndex.value > i ?
        direction.value = true :
        direction.value = false
    imgIndex.value = i
    emit('change', imgIndex.value)
}

// 自动播放

const auto = () => {
    if (!props.auto) return
    t = setInterval(() => {
        let length = props.options.length
        imgIndex.value < length - 1 ?
            imgIndex.value++ :
            imgIndex.value = 0
    }, props.autoItem)
    direction.value = false
    emit('change', imgIndex.value)
}


const mouseEnter = () => {
    clearInterval(t)
    t = null
}
const mouseLeave = () => {
    auto()
}


onMounted(() => {
    auto()
})

onBeforeUnmount(() => {
    clearInterval(t)
    t = null
})
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

}


.swipe-item {
    position: absolute;
    top: 0;
    left: 0;

    .v-enter-active,
    .v-leave-active {
        transition: all .3s linear;
    }



}

.leftActive {
    .v-enter-active {
        transform: translateX(-100%);
    }

    .v-enter-to,
    .v-leave-active {
        transform: translateX(0);
    }

    .v-leave-to {
        transform: translateX(100%);
    }
}

.rightActive {
    .v-enter-active {
        transform: translateX(100%);
    }

    .v-enter-to,
    .v-leave-active {
        transform: translateX(0);
    }

    .v-leave-to {
        transform: translateX(-100%);
    }
}

.topActive {
    .v-enter-active {
        transform: translateY(-100%);
    }

    .v-enter-to,
    .v-leave-active {
        transform: translateY(0);
    }

    .v-leave-to {
        transform: translateY(100%);
    }
}

.downActive {
    .v-enter-active {
        transform: translateY(100%);
    }

    .v-enter-to,
    .v-leave-active {
        transform: translateY(0);
    }

    .v-leave-to {
        transform: translateY(-100%);
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