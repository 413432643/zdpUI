<template>
    <div class="pagination">
        <div><i class="iconfont icon-L2"></i></div>
        <div><i class="iconfont icon-L"></i></div>
        <span>...</span>
        <div>{{ i }}</div>
        <span>...</span>
        <div><i class="iconfont icon-R"></i></div>
        <div><i class="iconfont icon-R2"></i></div>
    </div>
</template>


<script>
export default {
    name: 'ZPagination',
};

</script>

<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['update:modelValue', 'change'])
</script>


<style lang="scss" scoped>
.pagination{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

