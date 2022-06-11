<template>
    <button :class="zClass" :disabled="disabled" :circle="circle" :round="round">
        <slot></slot>
        <span :icon="icon" v-if="icon" />
    </button>
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
    disabled: Boolean,
    circle: Boolean,
    round: Boolean,
    icon: Boolean

})
const zClass = computed(() => {
    return [
        "btn",
        `btn-${props.type}`,
        `btn-${props.size}`,
        props.disabled ? 'btn-disabled' : '',
        props.circle ? 'btn-circle' : '',
        props.round ? 'btn-round' : '',
        props.icon ? 'btn-icon' : ''
    ]
})


</script>

<style lang="scss" scoped>
.btn {
    border: 0;
    padding: 8px 15px;
    outline: none;
    background: none;
    line-height: 1;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    color: #333;
    border: 1px solid #dcdfe6;


    &:hover,
    &:focus {
        opacity: .8;
    }
}

.btn-primary {
    color: #fff;
    background: #409EFF;
    border: 1px solid #409EFF;


}

.btn-success {
    color: #fff;
    background: #67C23A;
    border: 1px solid #67C23A;
}

.btn-warning {
    color: #fff;
    background: #E6A23C;
    border: 1px solid #E6A23C;
}

.btn-danger {
    color: #fff;
    background: #F56C6C;
    border: 1px solid #F56C6C;
}

.btn-info {
    color: #fff;
    background: #909399;
    border: 1px solid #909399;
}

.btn-large {
    padding: 12px 20px;
}

.btn-small {
    font-size: 12px;
    padding: 5px 10px;
}

.btn-round {
    border-radius: 1000px;
}

.btn-circle {
    border-radius: 50%;
}

.btn-disabled {
    opacity: .4;
    cursor: no-drop;

    &:hover,
    &:focus {
        opacity: .4;
    }

}

.btn-icon {
    padding: 10px;

}
</style>
    
