<template>
    <div :class="zClass" :style="getRowGutterStyle" ref="row">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: "ZRow",
};
</script>


<script setup>
import { computed, provide } from 'vue';

const props = defineProps({
    gutter: {
        type: [Number, String],
        default: 0
    },
    type: {
        type: String,
        default: "",
        validator: function (value) {
            return ["", "flex"].indexOf(value) !== -1;
        },
    },
    justify: {
        type: String,
        default: 'start',
        validator: function (value) {
            return ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'].indexOf(value) !== -1
        }
    }
})


const zClass = computed(() => {
    return [
        'z-row',
        props.type != '' ? `z-row-${props.type}` : '',
        props.type != '' ? `z-row-${props.justify}` : ''
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

provide('gutter', props.gutter)

</script>

<style lang="scss" scoped>
.z-row {
    margin-bottom: 10px;
}
.z-row-flex{
    display: flex;
}
.z-row-start {
  justify-content: flex-start;
}

.z-row-end {
  justify-content: flex-end;
}

.z-row-center {
  justify-content: center;
}

.z-row-space-around {
  justify-content: space-around;
}

.z-row-space-between {
  justify-content: space-between;
}

.z-row-space-evenly {
  justify-content: space-evenly;
}

</style>