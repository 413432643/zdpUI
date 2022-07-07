<template>
    <div class="container" v-down>
        <z-input class="input" leftIcon="icon-time" clearable @focus="focus"></z-input>
        <div class="time" v-if="timeShow">
            <div class="time-body">
                <div class="hour" @scroll="itemScroll">
                    <div v-for="h in 24" :key="h" :class="hClass(h)" @click="timeClick(h, $event)">{{ (h < 11 ? "0" : "")
                            + (h - 1)
                    }} </div>
                    </div>
                    <div class="minute" @scroll="itemScroll">
                        <div v-for="m in 60" :key="m" :class="mClass(m)" @click="timeClick(m, $event)">{{ (m < 11 ? "0"
                                : "") + (m - 1)
                        }} </div>
                        </div>
                        <div class="second" @scroll="itemScroll">
                            <div v-for="s in 60" :key="s" :class="sClass(s)" @click="timeClick(s, $event)">{{ (s < 11 ? "0"
                                    : "") + (s - 1)
                            }} </div>
                            </div>
                        </div>
                        <div class="selectRegion"></div>
                        <div class="time-foot">
                            <div class="cancel" @click="cancel">取消</div>
                            <div class="ok" @click="ok">完成</div>
                        </div>
                    </div>
                </div>
</template>


<script>
export default {
    components: { ZInput },
    name: 'ZTime',
};

</script>

<script setup>
import { ref, computed } from 'vue';
import ZInput from './z-input.vue';
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({

})

const timeShow = ref(false)

const hSelect = ref(1)
const mSelect = ref(1)
const sSelect = ref(1)

const focus = () => {
    timeShow.value = true
}

const vDown = { //元素外收起
    beforeMount(el) {
        let hander = (e) => {
            if (props.disabled) return
            if (!el.contains(e.target)) {
                timeShow.value = false
            }
        }
        document.addEventListener('click', hander)
    }
}

const hClass = computed(() => (num) => {
    return [
        hSelect.value == num ? 'select' : '',
    ]
})
const mClass = computed(() => (num) => {
    return [
        mSelect.value == num ? 'select' : '',
    ]
})
const sClass = computed(() => (num) => {
    return [
        sSelect.value == num ? 'select' : '',
    ]
})



const itemScroll = (e) => {
    let t = null
    return function () {
        if (t != null) clearTimeout(t)
        t = setTimeout(() => {
            // 滚动30的倍数
            let top = e.target.scrollTop
            e.target.scrollTop = top - top % 30
            // 到指定高度的元素
            let className = e.path[0].className
            let length = e.path[0].children.length
            for (let i = 0; i < length; i++) {
                let childrenTop = e.path[0].children[0].offsetTop - 90 + 30 * i
                if (top == childrenTop) {
                    if (className == 'hour') hSelect.value = i + 1
                    if (className == 'minute') mSelect.value = i + 1
                    if (className == 'second') sSelect.value = i + 1
                }
            }
        }, 500)
    }()
}

const timeClick = (h, e) => {
    let parentTop = e.path[1].scrollTop
    e.path[1].scrollTop += ((h - 1) * 30 - parentTop)
}


const cancel = () => {

}

const ok = () => {

}
</script>


<style lang="scss" scoped>
.container {
    width: 160px;

    .input {
        margin-bottom: 10px;
    }

    .time {
        position: absolute;
        width: 180px;
        border: 1px solid #d4d3d3;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        z-index: 9;

        &-body {
            width: 100%;
            max-height: 200px;
            display: flex;

            .hour,
            .minute,
            .second {
                width: 33.33%;
                overflow-y: scroll;
                padding: 90px 0;

                div {
                    font-size: 12px;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    color: #606266;
                    cursor: pointer;
                }

                :hover {
                    background: #eee;
                }

                &::-webkit-scrollbar {
                    width: 5px;
                    height: 1px;
                }

                &::-webkit-scrollbar-track {
                    /*滚动条里面轨道*/
                    background: #ffffff;
                }

                &:hover {
                    &::-webkit-scrollbar-thumb {
                        /*滚动条里面小方块*/
                        border-radius: 4px;
                        background: #E5E5E5;
                    }
                }
            }

            // .hour {}

            // .minute {}

            // .second {}

        }

        &-foot {
            display: flex;
            font-size: 12px;
            justify-content: right;
            padding: 8px 10px;
            border-top: 1px solid #eee;

            .cancel,
            .ok {
                padding: 0 5px;
                cursor: pointer;
            }

            .ok {
                color: #409eff;
            }
        }
    }
}

.select {
    font-weight: 900
}

.selectRegion {
    top: 90px;
    position: absolute;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    z-index: 999;
    height: 30px;
    width: 150px;
    margin: 0 15px;
}
</style>