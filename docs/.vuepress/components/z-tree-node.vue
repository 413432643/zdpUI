<template>
    <div>
        <div class="z-tree-label">
            <!-- 箭头 -->
            <div v-if="items[childrenF] && items[childrenF].length">
                <div @click.stop="isOpen(items)"
                    :class="[{ 'icon-youjiantou-click': items.isOpen }, 'iconfont', 'icon-youjiantou']">
                </div>
            </div>
            <!-- 多选框 -->
            <span v-if="checkbox" class="z-tree-checkbox iconfont" @click.stop="NodeClick(items)">
                <span v-if="items.checked" class="icon-dxxz"></span>
                <span v-else-if="items.partChecked" class="icon-dxbf"></span>
                <span v-else class="icon-dxwx"></span>
            </span>
            <!-- icon -->


            <!-- 文本 -->
            <div style="padding-left:10px">{{ items[labelF] }}</div>
        </div>
        <div v-if="items.isOpen && items[childrenF] && items[childrenF].length">
            <div v-for="(item, i) in items[childrenF]" :key="i.id">
                <z-tree-node :items="item" :options="options" :childrenF="childrenF" :labelF="labelF"
                    :checkbox="checkbox" :openAll="openAll" style="padding-left:20px"
                    :defaultOpenNodes="defaultOpenNodes" :defaultCheckedNodes="defaultCheckedNodes">
                </z-tree-node>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ZTreeNode',
};
</script>


<script setup>
import { ref, computed, onMounted, popScopeId } from 'vue'


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
    openAll: {
        type: Boolean,
        default: false
    },
    disabled: {
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
                item1.partChecked = false
                item1.checked = false
            }
            updateChild(item1);
        });
    }
}


// 部分选中
const updatePart = (parent) => {
    let i = 0, j = 0

    parent[props.childrenF].forEach(item => {
        if (item[props.childrenF]) {
            item[props.childrenF].forEach(item1 => {
                j++
                item1.checked ? i++ : i
            })
        }
        j++
        item.checked ? i++ : i
    })
    if (i < j && i > 0) {
        parent.partChecked = true
    } else {
        parent.partChecked = false
    }

}


// 当前勾选节点的父节点是否勾选
const updateParent = (nodeKey) => {
    const parentKey = props.options[nodeKey].parent;
    if (typeof parentKey == 'undefined') return;
    const parent = props.options[parentKey].node;
    const parentNode = parent[props.childrenF].every(item => {
        return item.checked == true
    })
    parentNode ? parent.checked = true : parent.checked = false

    // updatePart(parent)

    updateParent(parentKey)
}




// 勾选节点
const NodeClick = (item) => {
    const nodeKey = item.nodeKey
    item.checked = !item.checked

    updateParent(nodeKey)
    updateChild(item)
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

.z-tree-label {
    width: 100%;

    div {
        display: inline-block;
    }

    &:hover {
        background-color: #f5f5f5;
    }
}

.z-tree-checkbox {
    margin-left: 10px;

    span {
        color: #409eff;
    }

    &:last-child {
        color: #cdd0d6;
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

.icon-dxwx {
    color: #cdd0d6 !important;
}

.icon-dxwx:hover {
    color: #409eff !important;
}
</style>
