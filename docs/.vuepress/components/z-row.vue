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
  
})

const zClass = computed(() => {
    return [
        'z-row'
    ]
});

</script>

<style lang="scss">
.z-row{
    margin-bottom: 10px;
}
</style>