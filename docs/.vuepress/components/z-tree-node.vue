<template>
    <div>
        <div class="z-tree-label">
            <div>
                <!-- 箭头 -->
                <div v-if="items[childrenF] && items[childrenF].length">
                    <div @click.stop="isOpen(items)"
                        :class="[{ 'icon-youjiantou-click': items.isOpen }, 'iconfont', 'icon-youjiantou']">
                    </div>
                </div>
                <!-- 多选框 -->
                <span v-if="checkbox" :class="'z-tree-checkbox iconfont'" @click.stop="NodeClick(items)">
                    <span v-if="items.checked" class="icon-dxxz"></span>
                    <span v-else-if="items.partChecked" class="icon-dxbf"></span>
                    <span v-else class="icon-dxwx"></span>
                </span>
                <!-- icon -->
                

                <!-- 文本 -->
                <div style="padding-left:10px">{{ items[labelF] }}</div>
            </div>



            <!-- 自定义节点 -->
            <slot name="customNode" :data="items" :flatTree="options"></slot>
        </div>
        <div v-if="items.isOpen && items[childrenF] && items[childrenF].length" style="padding-left:20px">
            <z-tree-node v-for="item in items[childrenF]" :key="item.id" :items="item" :options="options"
                :childrenF="childrenF" :labelF="labelF" :checkbox="checkbox" :defaultOpenNodes="defaultOpenNodes"
                :defaultCheckedNodes="defaultCheckedNodes">
                <template #customNode="{ data: data, flatTree: flatTree }">
                    <slot name="customNode" :data="data" :flatTree="flatTree"></slot>
                </template>
            </z-tree-node>

        </div>


    </div>
</template>


<script>
export default {
    name: 'ZTreeNode',
};
</script>


<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    items: {
        type: Object,
        default: () => {
            return {}
        }
    },
    options: {
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
    defaultOpenNodes: {
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
    checkbox: {
        type: Boolean,
        default: false
    },
})


const isOpen = (item) => {
    item.isOpen = !item.isOpen
}


//当前勾选节点的子节点是否勾选
const updateChild = (item) => {
    if (item[props.childrenF] && item[props.childrenF].length) {
        item[props.childrenF].forEach((item1) => {
            if (item.checked) {
                item1.checked = true
            } else {
                item.partChecked = false
                item1.partChecked = false
                item1.checked = false
            }
            updateChild(item1);
        });
    }
}

// 当前勾选节点的父节点是否勾选
const updateParent = (nodeKey) => {
    const parentKey = props.options[nodeKey].parent;
    if (typeof parentKey == 'undefined') return;
    const parent = props.options[parentKey].node;
    const allL = parent[props.childrenF].length
    const selectedL = parent[props.childrenF].filter(item => item.checked).length
    if (selectedL == 0) {
        parent.checked = false

        // 选中子节点的父节点部分选中
        const _allL = parent.children.length
        const _selectedL = parent.children.filter(item => item.partChecked).length
        if (_selectedL > 0 && _selectedL <= _allL) {
            parent.partChecked = true
        } else {
            parent.partChecked = false
        }

    } else if (selectedL == allL) {
        parent.checked = true
        parent.partChecked = false

    } else {
        parent.checked = false
        parent.partChecked = true
    }

    updateParent(parentKey)

}


// 勾选节点
const NodeClick = (item) => {
    item.checked = !item.checked
    // if (item.nodeKey) {
    //     updateParent(item.nodeKey)
    // }else {
    //     updateParent(item.parent.nodeKey)
    // }
    updateParent(item.nodeKey)
    updateChild(item)
}

//默认选中
const defaultChecked = () => {
    if (!props.defaultCheckedNodes) return
    props.options.forEach(item => {
        props.defaultCheckedNodes.forEach(item1 => {
            if (item.node.id != item1) return
            item.node.checked = !item.node.checked
            updateParent(item.node.nodeKey)
            updateChild(item.node)
        })
    })
}
onMounted(() => {
    defaultChecked()
})




</script>


<style lang="scss" scoped>
.z-tree-label {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: inline-block;
    }

    &:hover {
        background-color: #f5f5f5;

    }
}


// 箭头 
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

// 多选框
.z-tree-checkbox {
    margin-left: 10px;

    span {
        color: #409eff;
    }

    .icon-dxwx {
        color: #cdd0d6;
    }

    .icon-dxwx:hover {
        color: #409eff;
    }


}
</style>
