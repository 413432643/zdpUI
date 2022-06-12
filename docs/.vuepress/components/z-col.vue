<template>
    <div :class="zClass" ref="col" :style='getColGutterStyle'>
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    name: "zCol",
};
</script>

<script setup>
import { computed, inject, ref } from 'vue';


const props = defineProps({
    span: {
        type: [Number, String],
        default: 24
    },
    offault: {
        type: [Number, String],
        default: 0
    }
})
const zClass = computed(() => {
    return [
        "z-col",
        `z-col-${props.span}`,
        props.offault != 0 ? `z-col-offault-${props.offault}` : ''
    ]
});
const getColGutterStyle = computed(() => {
    const gutter = inject('gutter')
    if (gutter == 0) {
        return
    }
    const value = gutter / 2 + 'px'
    return {
        paddingLeft: value,
        paddingRight: value
    }
});

</script>

<style lang="scss">
.z-col {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;

}


@for $i from 1 through 24 {
    .z-col-#{$i} {
        width: 100%/24*$i;
    }
}

@for $i from 1 through 24 {
    .z-col-offault-#{$i}{
        margin-left: 100%/24*$i;
    }
}
</style>