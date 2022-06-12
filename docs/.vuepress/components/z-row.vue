<template>
    <div :class="zClass" :style="getRowGutterStyle"  ref="row">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: "zRow",
};
</script>


<script setup>
import { computed, provide } from 'vue';

const props = defineProps({
    gutter: {
        type: [Number, String],
        default: 0
    }
})


const zClass = computed(() => {
    return [
        'z-row'
    ]
});
const getRowGutterStyle = computed(() => {
    const value = -(props.gutter / 2) + 'px'
    if (props.gutter == 0) {
        return
    }
    return {
        marginLsft: value,
        marginRight: value,
    }
});

provide('gutter',props.gutter)

</script>

<style lang="scss">
.z-row {
    margin-bottom: 10px;
}
</style>