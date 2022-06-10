<template>
    <div>
        <button class="btn">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "zButton",
};
</script>
<script setup lang="ts">
    
</script>

<style lang="scss" scoped>
.btn {
    background: #000;
    color: #fff;
}
</style>
    
