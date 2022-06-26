# tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

### 基础用法

树形结构展示

<z-tree :options="options"></z-tree>


<script setup>
import { ref, reactive } from "vue";



const state = reactive({
    options: [
        {
            id: 1,
            label: '1',
            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 9,
                            label: '1-1-1',
                        },
                        {
                            id: 10,
                            label: '1-1-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 5,
                    label: '2-1',
                },
                {
                    id: 6,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 7,
                    label: '3-1',
                },
                {
                    id: 8,
                    label: '3-2',
                },
            ],
        },
    ]

})
const { options } = state




const state1 = reactive({
    options: [
        {
            id: 1,
            title: '1',
            son: [
                {
                    id: 4,
                    title: '1-1',
                    son: [
                        {
                            id: 9,
                            title: '1-1-1',
                        },
                        {
                            id: 10,
                            title: '1-1-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: '2',
            son: [
                {
                    id: 5,
                    title: '2-1',
                },
                {
                    id: 6,
                    title: '2-2',
                },
            ],
        },
        {
            id: 3,
            title: '3',
            son: [
                {
                    id: 7,
                    title: '3-1',
                },
                {
                    id: 8,
                    title: '3-2',
                },
            ],
        },
    ]

})
const { options: options1 } = state1




const state2 = reactive({
    options: [
        {
            id: 1,
            label: '1',
            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 10,
                            label: '1-1-1',

                        },
                        {
                            id: 11,
                            label: '1-1-2',
                        },

                    ],
                },

                {
                    id: 5,
                    label: '1-2',
                    children: [
                        {
                            id: 12,
                            label: '1-2-1',
                        },
                        {
                            id: 13,
                            label: '1-2-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 6,
                    label: '2-1',
                },
                {
                    id: 7,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 8,
                    label: '3-1',
                },
                {
                    id: 9,
                    label: '3-2',
                },
            ],
        },
    ]

})

const { options: options2 } = state2

const state3 = reactive({
    options: [
        {
            id: 1,
            label: '1',
            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 10,
                            label: '1-1-1',

                        },
                        {
                            id: 11,
                            label: '1-1-2',
                        },
                    ],
                },
                {
                    id: 5,
                    label: '1-2',
                    children: [
                        {
                            id: 12,
                            label: '1-2-1',
                        },
                        {
                            id: 13,
                            label: '1-2-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 6,
                    label: '2-1',
                },
                {
                    id: 7,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 8,
                    label: '3-1',
                },
                {
                    id: 9,
                    label: '3-2',
                },
            ],
        },
    ]

})

const { options: options3 } = state3


const state4 = reactive({
    options: [
        {
            id: 1,
            label: '1',

            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 10,
                            label: '1-1-1',
                        },
                        {
                            id: 11,
                            label: '1-1-2',
                        },
                    ],
                },
                {
                    id: 5,
                    label: '1-2',
                    children: [
                        {
                            id: 12,
                            label: '1-2-1',
                        },
                        {
                            id: 13,
                            label: '1-2-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 6,
                    label: '2-1',
                },
                {
                    id: 7,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 8,
                    label: '3-1',
                },
                {
                    id: 9,
                    label: '3-2',
                },
            ],
        },
    ]

})
// const input = ref('')
const { options: options4 } = state4
let id = 1000
const append = (data) => {
    const newChild = { id: id++, label: 'test', children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)
    // options4.value = [...options4.value]
}
const remove = (node, data) => {
    console.log(node)
    console.log(data)
    // const parent = node.parent
    // const children = parent.data.children || parent.data
    // const index = children.findIndex((d) => d.id === data.id)
    // children.splice(index, 1)
    // dataSource.value = [...dataSource.value]
}

</script>

::: details 点击查看代码
```vue

<z-tree v-model="treeVal" :options="options" ></z-tree>


<script setup>
import { ref, reactive } from "vue";

const treeVal = ref([]);

const state = reactive({
    options: [
        {
            id: 1,
            label: '1',
            
            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 9,
                            label: '1-1-1',
                        },
                        {
                            id: 10,
                            label: '1-1-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 5,
                    label: '2-1',
                },
                {
                    id: 6,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 7,
                    label: '3-1',
                },
                {
                    id: 8,
                    label: '3-2',
                },
            ],
        },
    ]

})

const { options } = state
</script>
```
:::


### 自定义节点名

通过`childrenF`，`labelF`属性，自定义`label`，`children`节点名

<z-tree :options="options1" childrenF="son" labelF="title"></z-tree>


::: details 点击查看代码
```vue

<z-tree  :options="options" childrenF="son" labelF="title"></z-tree>


<script setup>
import { ref, reactive } from "vue";

const treeVal = ref([]);

const state = reactive({
    options: [
        {
            id: 1,
            title: '1',
            son: [
                {
                    id: 4,
                    title: '1-1',
                    son: [
                        {
                            id: 9,
                            title: '1-1-1',
                        },
                        {
                            id: 10,
                            title: '1-1-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: '2',
            son: [
                {
                    id: 5,
                    title: '2-1',
                },
                {
                    id: 6,
                    title: '2-2',
                },
            ],
        },
        {
            id: 3,
            title: '3',
            son: [
                {
                    id: 7,
                    title: '3-1',
                },
                {
                    id: 8,
                    title: '3-2',
                },
            ],
        },
    ]
})

const { options } = state
</script>
```
:::


### 可选择

使用`checkbox`属性选择需要的节点,使用`openAll`属性可展开全部节点

<z-tree :options="options2" checkbox openAll ></z-tree>


::: details 点击查看代码
```vue
<z-tree :options="options" checkbox openAll></z-tree>

<script setup>
import { ref, reactive } from "vue";
const state = reactive({
    options: [
        {   
            id: 1,
            label: '1',
            children: [
                {   
                    id: 4,
                    label: '1-1',
                    children: [
                        {   
                            id: 10,
                            label: '1-1-1',
                            
                        },
                        {   
                            id: 11,
                            label: '1-1-2',
                        },
                    ],
                },
                {   
                    id: 5,
                    label: '1-2',
                    children: [
                        {   
                            id: 12,
                            label: '1-2-1',
                        },
                        {   
                            id: 13,
                            label: '1-2-2',
                        },
                    ],
                },
            ],
        },
        {   
            id: 2,
            label: '2',
            children: [
                {   
                    id: 6,
                    label: '2-1',
                },
                {   
                    id: 7,
                    label: '2-2',
                },
            ],
        },
        {   
            id: 2,
            label: '3',
            children: [
                {   
                    id: 8,
                    label: '3-1',
                },
                {   
                    id: 9,
                    label: '3-2',
                },
            ],
        },
    ]

})

const { options } = state
const treeVal = ref([]);


</script>

```
:::


### 默认展开和默认选中
通过`defaultOpenNodes`和`defaultCheckedNodes`设置默认展开和默认选中的节点，必须在`options`中设置`id`字段,且该字段在整棵树中是唯一的

<z-tree :options="options3" checkbox :defaultOpenNodes="[1, 3]" :defaultCheckedNodes="[8, 9, 11]"></z-tree>

::: details 点击查看代码
```vue

<z-tree :options="options" checkbox :defaultOpenNodes="[1,3]" :defaultCheckedNodes="[8,9,11]"></z-tree>

<script setup>
const state = reactive({
    options: [
        {
            id: 1,
            label: '1',
            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 10,
                            label: '1-1-1',

                        },
                        {
                            id: 11,
                            label: '1-1-2',
                        },
                    ],
                },
                {
                    id: 5,
                    label: '1-2',
                    children: [
                        {
                            id: 12,
                            label: '1-2-1',
                        },
                        {
                            id: 13,
                            label: '1-2-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 6,
                    label: '2-1',
                },
                {
                    id: 7,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 8,
                    label: '3-1',
                },
                {
                    id: 9,
                    label: '3-2',
                },
            ],
        },
    ]

})

const { options } = state

</script>

```
:::

### 树节点过滤

<!-- <z-input v-model="input" placeholder="树节点过滤"></z-input> -->

<z-tree :options="options4" checkbox openAll >
    <template #customNode="{node,data}" >
        <span class="custom-tree-node">
          <!-- <span>{{ node.label }}</span> -->
            <span @click="append(data)"> Append </span>
            <span @click="remove(node, data)"> Delete </span>
          </span>
      </template>
</z-tree>

<style>
.custom-tree-node {
    position: relative;
    left:450px
}
</style>

::: details 点击查看代码
```vue

<z-tree :options="options4" checkbox openAll></z-tree>

<script setup>
const state = reactive({
    options: [
        {
            id: 1,
            label: '1',
            
            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 10,
                            label: '1-1-1',

                        },
                        {
                            id: 11,
                            label: '1-1-2',
                        },
                    ],
                },
                {
                    id: 5,
                    label: '1-2',
                    children: [
                        {
                            id: 12,
                            label: '1-2-1',
                        },
                        {
                            id: 13,
                            label: '1-2-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 6,
                    label: '2-1',
                },
                {
                    id: 7,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 8,
                    label: '3-1',
                },
                {
                    id: 9,
                    label: '3-2',
                },
            ],
        },
    ]

})

const { options } = state

</script>

```
:::

### tree 属性   

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    options   | 数据源         | Array           | -                   | -               |
|    childrenF | 自定义children属性名 | String | -                 | children           |
|    labelF    | 自定义label属性名 | String    |  -                | label               |
|    checkbox  | 是否可选择      | Boolean    | -                | false              |
|    openAll      |       展开全部节点      |     Boolean       |  -       |     false     |


### Options API 
|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    label      |       节点内容      |     String       |  -             |     label     |
|    children   |       子节点      |     String       |  -              |     children   |
|    isOpen      |       展开子节点      |     Boolean       |  可选值     |     false     |
|    id      |       该字段在整棵树中是唯一的      |     String       |  -      |     -     |