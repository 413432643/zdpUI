# radio 单选
在一组备选项中进行单选

### 基础用法

通过`<z-radio>`使用组件，设置`v-model`绑定变量, 在`options`对象中使用`value`指定值，`title`指定显示文本。

<z-row>
    <z-col>
        <z-radio v-model="radioVal" :options="options" @change="radioChange"></z-radio>
    </z-col>
</z-row>

<script setup>
import { reactive, ref } from 'vue'

const state = reactive({
    options: [
        {
            value: '1',
            title: '选项1',
        },
        {
            value: '2',
            title: '选项2'
        },
        {
            value: '3',
            title: '选项3'
        },
        {
            value: '4',
            title: '选项4',
        },
    ]
})
const { options } = state
const radioVal = ref("1");

const radioChange = (e) => {
  console.log(e.value, e.index);
};

const state1 = reactive({
    options: [
        {
            value: '1',
            title: '选项1',
            disabled: true
        },
        {
            value: '2',
            title: '选项2',
            disabled: true
        },
        {
            value: '3',
            title: '选项3',
            disabled: true
        },
        {
            value: '4',
            title: '选项4',
            disabled: true
        },
    ]
})

const radioVal1 = ref("1");

const { options: options1 } = state1


const state2 = reactive({
    options: [
        {
            num: '1',
            name: '选项1',
        },
        {
            num: '2',
            name: '选项2'
        },
        {
            num: '3',
            name: '选项3'
        },
        {
            num: '4',
            name: '选项4',
        },
    ]
})

const { options: options2 } = state2
const radioVal2 = ref("1");

</script>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio v-model="radioVal" :options="options" @change="radioChange"></z-radio>
    </z-col>
</z-row>

<script setup>
import { reactive,ref } from 'vue'

const state = reactive({
    options: [
        {
            value: '1',
            title: '选项1',
        },
        {
            value: '2',
            title: '选项2'
        },
        {
            value: '3',
            title: '选项3'
        },
        {
            value: '4',
            title: '选项4',
        },
    ]
})
const { options } = state
const radioVal = ref("1");

const radioChange = (e) => {
  console.log(e.value, e.index);
};

</script>
```
:::


### 禁用
在`options`添加`disabled`属性，将禁用该选项

<z-row>
    <z-col>
        <z-radio v-model="radioVal1" :options="options1"></z-radio>
    </z-col>
</z-row>



::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio v-model="radioVal" :options="options"></z-radio>
    </z-col>
</z-row>


<script setup>
import { reactive,ref } from 'vue'

const state1 = reactive({
    options: [
        {
            value: '1',
            title: '选项1',
            disabled: true
        },
        {
            value: '2',
            title: '选项2',
            disabled: true
        },
        {
            value: '3',
            title: '选项3',
            disabled: true
        },
        {
            value: '4',
            title: '选项4',
            disabled: true
        },
    ]
})

const { options: options1 } = state1
const radioVal = ref("1");
</script>

```
:::


### 垂直排列
添加`inline`改变排列方式为垂直排列

<z-row>
    <z-col>
        <z-radio :options="options" inline v-model="radioVal"></z-radio>
    </z-col>
</z-row>


::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio :options="options" inline v-model="radioVal"></z-radio>
    </z-col>
</z-row>


<script setup>
import { reactive,ref } from 'vue'

const state = reactive({
    options: [
        {
            value: '1',
            title: '选项1',

        },
        {
            value: '2',
            title: '选项2',

        },
        {
            value: '3',
            title: '选项3',
        },
        {
            value: '4',
            title: '选项4',
        },
    ]
})

const { options } = state

const radioVal = ref("1");
</script>

```
:::


### 按钮尺寸
设置`size`属性调整按钮尺寸

<z-row>
    <z-col>
        <z-radio :options="options" size="small" v-model="radioVal"></z-radio>
        <z-radio :options="options" v-model="radioVal"></z-radio>
        <z-radio :options="options" size="large" v-model="radioVal"></z-radio>
    </z-col>
</z-row>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio :options="options" size="small" v-model="radioVal"></z-radio>
        <z-radio :options="options" v-model="radioVal"></z-radio>
        <z-radio :options="options" size="large" v-model="radioVal"></z-radio>
    </z-col>
</z-row>


<script setup>
import { reactive,ref } from 'vue'

const state = reactive({
    options: [
        {
            value: '1',
            title: '选项1',
        },
        {
            label: '2',
            title: '选项2',

        },
        {
            value: '3',
            title: '选项3',
        },
        {
            value: '4',
            title: '选项4',
        },
    ]
})

const { options } = state
const radioVal = ref("1");
</script>

```
:::

### 自定义value和title属性名
设置`valueKey`和`titleKey`属性改变value和title的属性名

<z-row>
    <z-col>
        <z-radio v-model="radioVal2" :options="options2" valueFiled="num" titleFiled="name"></z-radio>
    </z-col>
</z-row>


::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-radio :options="options" v-model="radioVal" labelFiled="num" titleFiled="name"></z-radio>
    </z-col>
</z-row>


<script setup>
import { reactive,ref } from 'vue'

const state = reactive({
    options: [
        {
            num: '1',
            name: '选项1',
        },
        {
            num: '2',
            name: '选项2',

        },
        {
            num: '3',
            name: '选项3',
        },
        {
            num: '4',
            name: '选项4',
        },
    ]
})

const { options } = state
const radioVal = ref("1");
</script>

```
:::


### Radio 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
| v-model   | 单选绑定值  | string/number         | -                    | -                 |
| valueFiled   | 自定义替换value的字段名  | string         | -                    |value                 |
| titleFiled   | 自定义替换title的字段名  | string         | -                    |title                 |
|     options     |  Object  | 	单选数据配置，具体见下方 options API    |   -                |   -              |
|     inline     |  	Boolean  | 	是否垂直排列    |   true/false               |   false            |
|     size     |  	尺寸  | 	String   |   small/large             |   -              |



### Options API


|    参数      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|     value     |  单选框对应的值     | 	string / number     |   -                |  -             |
|     title     |  标签标题     | 	string    |   -              |   -             |
|     disabled     |  是否禁用     | 	boolean    |   -               |   false            |

### Event 事件

|    事件      |       说明      |     参数       | 
|:------------:|:--------------:|:--------------:|
| change     | 单选框选中事件     | 	选中的 Radio label 值 和 index值   | 