<template>
    <div :class="zClass" ref="row">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: "zRow",
};
</script>


<script setup>
import { computed } from 'vue';

const props = defineProps({
    // 分栏间隔
    gutter: {
        type: Number,
        default: 0
    },
    // 布局方式
    type: {
        type: String,
        default: "",
        validator: function (value) {
            return ["", "flex"].indexOf(value) !== -1;
        },
    },
    // flex下的水平排列方式
    justify: {
        type: String,
        default: "center",
        validator: function (value) {
            return (
                ["start", "end", "center", "space-around", "space-between"].indexOf(
                    value
                ) !== -1
            );
        },
    },
    // flex下的垂直排列方式
    align: {
        type: String,
        default: "middle",
        validator: function (value) {
            return ["top", "middle", "bottom"].indexOf(value) !== -1;
        },
    },
})

const zClass = computed(() => {
	const isFlex = props.type === "flex";
	const prefix = isFlex ? "bp-row-flex" : "bp-row";
	const name = [prefix];

	if(isFlex){
		name.push(`bp-row-flex-justify-${props.justify}`)
		name.push(`bp-row-flex-align-${props.align}`)
	}
	return name;
});

</script>

<style lang="scss">
</style>