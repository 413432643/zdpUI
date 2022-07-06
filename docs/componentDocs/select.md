# select 选择器
当选项过多时，使用下拉菜单展示并选择内容。
### 基础用法


<z-select v-model='value' :options="options" placeholder='select'></z-select>

<script setup>
import { ref, reactive } from 'vue'

const state = reactive({
    options: [
        {
            label: '选项1',
            value: 1
        },
        {
            label: '选项2',
            value: 2
        },
        {
            label: '选项3',
            value: 3
        },
        {
            label: '选项4',
            value: 4
        },
        {
            label: '选项5',
            value: 5
        },
    ]
})
const value = ref('test')
const { options } = state

const state1 = reactive({
    options: [
        {
            label: '选项1',
            value: 1
        },
        {
            label: '选项2',
            value: 2
        },
        {
            label: '选项3',
            value: 3,
            disabled: true
        },
        {
            label: '选项4',
            value: 4
        },
        {
            label: '选项5',
            value: 5,
            disabled: true
        },
    ]
})
const value1 = ref('')
const { options: options1 } = state1


const state2 = reactive({
    options: [
        {
            text: '选项1',
            num: 1
        },
        {
            text: '选项2',
            num: 2
        },
        {
            text: '选项3',
            value: 3,
        },
        {
            text: '选项4',
            num: 4
        },
        {
            text: '选项5',
            num: 5,
        },
    ]
})
const value2 = ref('')
const { options: options2 } = state2


const state3 = reactive({
    options: [
        {
            label: '选项1',
            value: 1
        },
        {
            label: '选项2',
            value: 2
        },
        {
            label: '选项3',
            value: 3,
        },
        {
            label: '选项4',
            value: 4
        },
        {
            label: '选项5',
            value: 5,
        },
    ]
})

const { options: options3 } = state3
const value3 = ref('')

const state4 = reactive({
    options: [
        {
            label: '选项1555',
            value: 1
        },
        {
            label: '选项2111',
            value: 2
        },
        {
            label: '选项3444',
            value: 3,
        },
        {
            label: '选项4111',
            value: 4
        },
        {
            label: '选项5333',
            value: 5,
        },
        {
            label: '选项6222',
            value: 6
        },
        {
            label: '选项7111',
            value: 7,
        },
        {
            label: '选项822',
            value: 8
        },
        {
            label: '选项911',
            value: 9,
        },
    ]
})

const { options: options4 } = state4
const value4 = ref('')

const input = (e) => {
    console.log(e)
}

const change = (e) => {
    console.log(e)
}

</script>

::: details 点击查看代码
```vue
<z-select v-model='value' :options="options" placeholder='select'></z-select>

<script setup>
import {ref, reactive } from 'vue'
const value = ref('test')
const state = reactive({
    options: [
        {
            label: '选项1',
            value: 1
        },
        {
            label: '选项2',
            value: 2
        },
        {
            label: '选项3',
            value: 3
        },
        {
            label: '选项4',
            value: 4
        },
        {
            label: '选项5',
            value: 5
        },
    ]
})

const { options } = state

</script>
```
:::

### 禁用状态
使用 `disabled` 属性禁用整个选择器
<z-select v-model='value' :options="options" disabled placeholder='select'></z-select>

::: details 点击查看代码
```vue
<z-select v-model='value' :options="options" disabled placeholder='select'></z-select>
<script setup>
import {ref, reactive } from 'vue'
const value = ref('')
const state = reactive({
    options: [
        {
            label: '选项1',
            value: 1
        },
        {
            label: '选项2',
            value: 2
        },
        {
            label: '选项3',
            value: 3
        },
        {
            label: '选项4',
            value: 4
        },
        {
            label: '选项5',
            value: 5
        },
    ]
})

const { options } = state
</script>

```
:::



### 禁用选项
在 `options` 中设置 `disable` 属性可禁止使用对应的选项
<z-select v-model='value1' :options="options1" placeholder='select'></z-select>

::: details 点击查看代码
```vue
<z-select v-model='value' :options="options"  placeholder='select'></z-select>

<script setup>
import {ref, reactive } from 'vue'
const value = ref('')

const state = reactive({
    options: [
        {
            label: '选项1',
            value: 1
        },
        {
            label: '选项2',
            value: 2
        },
        {
            label: '选项3',
            value: 3
            disable:true
        },
        {
            label: '选项4',
            value: 4
        },
        {
            label: '选项5',
            value: 5
            disable:true
        },
    ]
})

const { options } = state

</script>
```
:::

### 匹配不同格式的数据
使用 `labelF` 和 `valueF` 可替换默认的数据名，默认值为 `label` 和 `value` 
<z-select v-model='value2' :options="options2"  placeholder='select' labelF="text" valueF="num"></z-select>

::: details 点击查看代码
```vue
<z-select v-model='value' :options="options"  placeholder='select' labelF="text" valueF="num"></z-select>

<script setup>
import {ref, reactive } from 'vue'
const value = ref('')

const state = reactive({
    options: [
        {
            text: '选项1',
            num: 1
        },
        {
            text: '选项2',
            num: 2
        },
        {
            text: '选项3',
            num: 3
        },
        {
            text: '选项4',
            num: 4
        },
        {
            text: '选项5',
            num: 5
        },
    ]
})

const { options } = state

</script>
```
:::


### 可清空单选
为 `z-select` 设置 `clearable` 属性，可将选择器清空,仅适用于单选。
<z-select v-model='value3' :options="options3"  placeholder='select' clearable></z-select>

::: details 点击查看代码
```vue
<z-select v-model='value' :options="options"  placeholder='select' clearable></z-select>

<script setup>
import {ref, reactive } from 'vue'
const value = ref('')
const state = reactive({
    options: [
        {
            label: '选项1',
            value: 1
        },
        {
            label: '选项2',
            value: 2
        },
        {
            label: '选项3',
            value: 3
        },
        {
            label: '选项4',
            value: 4
        },
        {
            label: '选项5',
            value: 5
        },
    ]
})

const { options } = state

</script>
```
:::



### 搜索选项
为 `z-select` 添加 `filterable` 属性即可启用筛选功能

<z-select v-model='value4' :options="options4" placeholder='select' filterable @input="input" @change="change"></z-select>

::: details 点击查看代码
```vue
<z-select v-model='value' :options="options"  placeholder='select' filterable @input="input" @change="change"></z-select>

<script setup>
import {ref, reactive } from 'vue'
const value = ref('')
const state = reactive({
    options: [
        {
            label: '选项1555',
            value: 1
        },
        {
            label: '选项2111',
            value: 2
        },
        {
            label: '选项3444',
            value: 3,
        },
        {
            label: '选项4111',
            value: 4
        },
        {
            label: '选项5333',
            value: 5,
        },
        {
            label: '选项6222',
            value: 6
        },
        {
            label: '选项7111',
            value: 7,
        },
        {
            label: '选项822',
            value: 8
        },
        {
            label: '选项9123',
            value: 9,
        },
    ]
})

const { options } = state

const input = (val) => {
    console.log(val)
}

const change = (item) => {
    console.log(item)
}
</script>
```
:::


<!-- 
### 多选 

<z-select v-model='value4' :options="options4" placeholder='select'>111</z-select> -->


### Select 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    v-model      |       选中项绑定值     |     string / number / boolean / object       |     -      |      -    |
|    disabled      |       是否禁用      |     Boolean       |           |     false     |
|    labelF      |       选项标签的名称        |     String       |           |     label     |
|    valueF      |       选项值的名称      |     String       |           |     value     |
|    placeholder      |       占位文本      |     String       |           |     -     |
|    clearable       |       	是否可以清空选项      |     boolean       |           |     false     |
|    filterable       |       	Select 组件是否可筛选      |     boolean       |           |     false     |


### Select 事件
|    事件名      |       说明      |     回调参数       |
|:------------:|:--------------:|:--------------:|
|    input      |     input值发生变化时触发    |     	val,当前值      |
|    click      |     选中值发生变化时触发    |     	当前选中项      |

### Options 配置项 
|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    label      |       选项的标签   |     String       |  -             |     label     |
|    value   |       选项的值      |     String       |  -              |     value   |
|    disabled      |       是否禁用      |     Boolean       |           |     false     |


