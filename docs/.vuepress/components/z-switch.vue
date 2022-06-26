<template>
    <slot name="controlNodes"></slot>
</template>


<script>
export default {
    name: 'ZSelect',
};

</script>

<script setup>
    import { ref, computed } from 'vue';
    const emit = defineEmits(['update:modelValue', 'change'])
</script>


<style lang="scss" scoped>
    
</style>