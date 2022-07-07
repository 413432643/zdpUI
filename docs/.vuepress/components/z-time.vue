<template>
    <div class="container" v-down>
        <z-input class="input" leftIcon="icon-time" clearable @focus="focus"></z-input>
        <div class="time" v-if="timeShow">
            <div class="time-body">
                <div class="hour">
                    <div v-for="h in 24" :key="h">{{ h }}</div>
                </div>
                <div class="minute">
                    <div v-for="m in 60" :key="m">{{ m }}</div>
                </div>
                <div class="second">
                    <div v-for="s in 60" :key="s">{{ s }}</div>
                </div>
            </div>

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
        z-index: 999;


        &-body {

            width: 100%;
            max-height: 200px;

            display: flex;

            .hour,
            .minute,
            .second {
                width: 33.33%;
                overflow-y: scroll;
                
                div {
                    font-size: 12px;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    color: #606266;
                    cursor: pointer;
                }
                :hover{
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


            .hour {}

            .minute {}

            .second {}


        }


        &-foot {
            display: flex;
            font-size: 12px;
            justify-content: right;
            padding: 8px 10px;
            border-top: 1px solid #eee;
            .cancel,
            .ok {
                padding:0 5px;
                cursor: pointer;
            }

            .ok {
                color: #409eff;
            }
        }
    }
}
</style>