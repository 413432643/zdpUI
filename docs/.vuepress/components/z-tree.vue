<template>
    <div>
        <div v-for="(item, index) in newOptions" :key="item.id" @click.stop="isOpen(item, index)">
            <div class="z-tree-label">
                <div v-if="item[childrenF] && item[childrenF].length"
                    :class="[{ 'icon-youjiantou-click': item.isOpen }, 'iconfont', 'icon-youjiantou']"></div>
                <div style="padding-left:10px">{{ item[labelF] }}</div>
            </div>
            <z-tree v-if="item.isOpen && item[childrenF] && item[childrenF].length" :options="item[childrenF]"
                style="padding-left:20px" :childrenF="childrenF" :labelF="labelF"></z-tree>
        </div>
    </div>

</template>


<script>
import { ref, computed } from 'vue'
export default {
    name: 'ZTree',
};

</script>


<script setup>
const props = defineProps({
    modelValue: {
        type: Array,
        default: () => {
            return []
        }
    },
    options: {
        type: Array,
        default: () => {
            return []
        }
    },
    childrenF: {
        type: String,
        default: 'children'
    },
    labelF: {
        type: String,
        default: 'label'
    },
})


const newOptions = ref(props.options || [])


const isOpen = (item, index) => {
    item.isOpen = !item.isOpen
}
const contentClass = computed(() => {
    return [
        'content',
        props.type != '' ? `z-row-${props.type}` : '',
        props.type != '' ? `z-row-${props.justify}` : ''
    ]
});

</script>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.z-tree-label {
    padding-left: 10px;
    display: inline-block;
    width: 95%;

    div {
        display: inline-block;
    }

    &:hover {
        background-color: #f5f5f5;
    }
}



// icon
.icon-youjiantou {
    color: #a8abb2;
    font-size: 10px;
    transition: transform .3s;
    display: inline-block;
}

.icon-youjiantou-click {
    font-size: 10px;
    transform: rotate(90deg);
}
</style>
