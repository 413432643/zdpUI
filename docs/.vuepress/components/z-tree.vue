<template>
    <div>
        <div v-for="(item, index) in newOptions" :key="item.id" @click.stop="isOpen(item, index)" >
            <span v-if="item[childrenF] && item[childrenF].length" :class="iconClass"></span>{{ item[labelF] }}
            <z-tree  v-if="item.isOpen && item[childrenF] && item[childrenF].length" class="z-tree-label" 
                :options="item[childrenF]" :childrenF="childrenF" :labelF="labelF"></z-tree>
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



const iconClass = computed(() => {
    return [
        'iconfont',
        'icon-arrow_right_fat'
        // props.type != '' ? `z-row-${props.type}` : '',
        // props.type != '' ? `z-row-${props.justify}` : ''
    ]
});

const isOpen = (item, index) => {
    item.isOpen = !item.isOpen
    console.log(props.labelF,props.childrenF)
}
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


.rotate-enter-active,
.rotate-leave-active {
    transition: all .5s;
}

.rotate-enter-from,
.rotate-leave-to {
    transform: rotateZ(90deg);
}


.z-tree-label {
    padding-left: 20px;
}


// icon
.icon-arrow_right_fat {
    color: #a8abb2;
}
</style>
