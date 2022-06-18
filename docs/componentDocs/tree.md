# tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

### 基础用法

树形结构展示

<z-tree v-model="treeVal" :options="options"></z-tree>


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

const treeVal1 = ref([]);

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


const { options:options1 } = state1
</script>

::: details 点击查看代码
```vue

<z-tree v-model="treeVal" :options="options"></z-tree>


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


### 自定义属性名

通过`childrenF`，`labelF`属性，自定义`label`，`children`属性名

<z-tree v-model="treeVal1" :options="options1" childrenF="son" labelF="title"></z-tree>


::: details 点击查看代码
```vue

<z-tree v-model="treeVal" :options="options" childrenF="son" labelF="title"></z-tree>


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

### tree 属性   

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    options   | 数据源         | Array           | -                   | -               |
|    v-model   | 当前选中的值    | Array          | -                  | -                |
|    childrenF | 自定义children属性名 | String | -                 | children           |
|    labelF    | 自定义label属性名 | String    |  -                | label               |