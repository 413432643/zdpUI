# radio 单选


### 基础用法

<z-row>
    <z-col>
        <z-radio :options="options"></z-radio>
    </z-col>
</z-row>

<script setup>
import { reactive } from 'vue'

const state = reactive({
    options: [
        {
            label: '1',
            title: '选项1',
            
        },
        {
            label: '2',
            title: '选项2'
        },
        {
            label: '3',
            title: '选项3'
        },
        {
            label: '4',
            title: '选项4',
        },
    ]
})
const { options } = state


const state1 = reactive({
    options: [
        {
            label: '1',
            title: '选项1',
            disabled: true
        },
        {
            label: '2',
            title: '选项2',
            disabled: true
        },
        {
            label: '3',
            title: '选项3',
            disabled: true
        },
        {
            label: '4',
            title: '选项4',
            disabled: true
        },
    ]
})

const { options: options1 } = state1


</script>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio :options="options"></z-radio>
    </z-col>
</z-row>

<script setup>
import { reactive } from 'vue'

const state = reactive({
    options: [
        {
            label: '1',
            title: '选项1',
        },
        {
            label: '2',
            title: '选项2'
        },
        {
            label: '3',
            title: '选项3'
        },
        {
            label: '4',
            title: '选项4',
        },
    ]
})
const { options } = state

</script>
```
:::


### 禁用

<z-row>
    <z-col>
        <z-radio :options="options1"></z-radio>
    </z-col>
</z-row>



::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio :options="options"></z-radio>
    </z-col>
</z-row>


<script setup>
import { reactive } from 'vue'

const state1 = reactive({
    options: [
        {
            label: '1',
            title: '选项1',
            disabled: true
        },
        {
            label: '2',
            title: '选项2',
            disabled: true
        },
        {
            label: '3',
            title: '选项3',
            disabled: true
        },
        {
            label: '4',
            title: '选项4',
            disabled: true
        },
    ]
})

const { options: options1 } = state1

</script>

```
:::


### 垂直排列


<z-row>
    <z-col>
        <z-radio :options="options" inline></z-radio>
    </z-col>
</z-row>


::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio :options="options" inline></z-radio>
    </z-col>
</z-row>


<script setup>
import { reactive } from 'vue'

const state = reactive({
    options: [
        {
            label: '1',
            title: '选项1',

        },
        {
            label: '2',
            title: '选项2',

        },
        {
            label: '3',
            title: '选项3',
        },
        {
            label: '4',
            title: '选项4',
        },
    ]
})

const { options } = state

</script>

```
:::


### 大小

<z-row>
    <z-col>
        <z-radio :options="options" size="small"></z-radio>
        <z-radio :options="options" ></z-radio>
        <z-radio :options="options" size="large"></z-radio>
    </z-col>
</z-row>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio :options="options" size="small"></z-radio>
        <z-radio :options="options" ></z-radio>
        <z-radio :options="options" size="large"></z-radio>
    </z-col>
</z-row>


<script setup>
import { reactive } from 'vue'

const state = reactive({
    options: [
        {
            label: '1',
            title: '选项1',

        },
        {
            label: '2',
            title: '选项2',

        },
        {
            label: '3',
            title: '选项3',
        },
        {
            label: '4',
            title: '选项4',
        },
    ]
})

const { options } = state

</script>

```
:::


### Radio 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|     options     |  Object  | 	单选数据配置，具体见下方 options API    |   —                |   -              |
|     inline     |  	Boolean  | 	是否垂直排列    |   true/false               |   false            |
|     size     |  	尺寸  | 	String   |   small/large             |   -              |



### options API


|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|     label     |  单选框对应的值     | 	string / number     |   —                |   —              |
|     title     |  标签标题     | 	string    |   —                |   —              |
|     disabled     |  是否禁用     | 	boolean    |   —                |   false            |
