<template>
    <div :class="zClass" ref="col">
        <slot><div style="height:30px;"></div></slot>
    </div>
</template>

<script>
export default {
    name: "zCol",
};
</script>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    span: {
        type: Number,
        default: 24
    }
})
const zClass = computed(() => {
    return [
        "z-col",
        `z-col-${props.span}`,
    ]
});


</script>

<style lang="scss">
.z-col {
    border-radius: 2px;
    display: inline-block;
    box-sizing: border-box;
}

@for $i from 1 through 24 {
    .z-col-#{$i} {
        width: 100%/24*$i;
    }
}
</style>