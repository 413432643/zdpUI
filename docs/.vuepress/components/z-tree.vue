<template>
    <z-tree-node v-for="item in options" :key="item.id" :items="item" :options="flatTree" :childrenF="childrenF"
        :labelF="labelF" :checkbox="checkbox" :openAll="openAll" :defaultOpenNodes="defaultOpenNodes"
        :defaultCheckedNodes="defaultCheckedNodes">
        <template #customNode="{ data, flatTree }">
            <slot name="customNode" :data="data" :flatTree="flatTree"></slot>
        </template>
    </z-tree-node>
</template>


<script>
export default {
    components: { zTreeNode },
    name: 'ZTree',
};

</script>


<script setup>
import { ref, computed } from 'vue'
import zTreeNode from './z-tree-node.vue';
const props = defineProps({
    options: {
        type: Array,
        default: () => {
            return []
        }
    },
    defaultOpenNodes: {
        type: Array,
        default: () => {
            return []
        }
    },
    defaultCheckedNodes: {
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
    checkbox: Boolean,
    openAll: Boolean,
})
// 处理各节点对应关系
const compileFlatTree = (arr) => {
    let keyCounter = 0;
    const childrenKey = props.childrenF;
    const flatTree = [];
    const flatChildren = (node, parent) => {
        node.nodeKey = keyCounter++;
        flatTree[node.nodeKey] = {
            node: node,
            nodeKey: node.nodeKey
        };
        if (typeof parent != 'undefined') {
            flatTree[node.nodeKey].parent = parent.nodeKey;
            flatTree[parent.nodeKey][childrenKey].push(node.nodeKey);
        }
        if (node[childrenKey]) {
            flatTree[node.nodeKey][childrenKey] = [];
            node[childrenKey].forEach(item => {
                return flatChildren(item, node);
            });
        }
        
    }
    arr.forEach((item) => {
        flatChildren(item);
    });
    return flatTree;
}
const flatTree = compileFlatTree(props.options)



// 默认展开全部节点
const defaultOpenAll = (node) => {
    if (props.openAll) {
        node.isOpen = true
    }
}


// 默认展开节点
const defaultOpen = (node) => {
    if (props.defaultOpenNodes && props.defaultOpenNodes.length) {
        props.defaultOpenNodes.forEach(item => {
            if (item == node.id) {
                node.isOpen = true
            }
        })
    }
}

// 数据初始化
const compileTreeData = (arr) => {
    const newAttr = (node) => {
        defaultOpen(node)
        defaultOpenAll(node)
        node.checked = false
        if (node[props.childrenF]) {
            node[props.childrenF].forEach(item => {
                return newAttr(item, node);
            })
        }
    }
    arr.forEach(item => {
        newAttr(item);
    });
    return arr;
}

const treeDate = compileTreeData(props.options)



</script>


<style lang="scss" scoped>
    
</style>
