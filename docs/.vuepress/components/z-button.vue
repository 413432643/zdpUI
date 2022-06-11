<template>
    <div>
        <button :class="zClass">
            <slot></slot>
            <span>
                <!-- <slot></slot> -->
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "zButton",
};
</script>
<script setup>
import { computed } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    size: {
        type: String,
        default: 'default'
    },
    disabled: {//禁用
        type: Boolean,
        default: false
    },
    circle: {//圆形
        type: Boolean,
        default: false
    },
    round: {//圆角
        type: Boolean,
        default: false
    },

})
const zClass = computed(() => {
    return [
        "btn",
        `btn-${props.type}`
    ]
})
</script>

<style lang="scss" scoped>
.btn {
    border: 0;
    padding: 12px 24px;
    outline: none;
    background: none;
    line-height: 1;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    color: #333;
    border: 1px solid #dcdfe6;
}

.btn-primary {
    background: #409EFF;
    border: 1px solid #409EFF;
}

.btn-success {
    background: #67C23A;
    border: 1px solid #67C23A;
}

.btn-warning {
    background: #E6A23C;
    border: 1px solid #E6A23C;
}

.btn-danger {
    background: #F56C6C;
    border: 1px solid #F56C6C;
}

.btn-Info {
    background: #909399;
    border: 1px solid #909399;
}
.btn-large {
    background: #909399;
    border: 1px solid #909399;
}
.btn-small {
    background: #909399;
    border: 1px solid #909399;
}
.btn-round {
    background: #909399;
    border: 1px solid #909399;
}
.btn-circle {
    background: #909399;
    border: 1px solid #909399;
}
.btn-disabled {
    background: #909399;
    border: 1px solid #909399;
}


</style>
    
