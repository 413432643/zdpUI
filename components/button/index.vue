<template>
    <div>
        <button class="btn">
            <slot>cs</slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "zButton",
};
</script>
<script setup>

</script>

<style lang="scss" scoped>
.btn {
    background: #000;
    color: #fff;
}
</style>
    
