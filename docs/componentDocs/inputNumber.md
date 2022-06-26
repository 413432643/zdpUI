# InputNumber 计数器

允许输入标准的数字值，可定义范围

### 基础用法

在 `<z-input-number>` 元素中使用   `v-model` 绑定变量即可，变量的初始值即为默认值,可通过 `min,max` 设置数字值的上下限。

<z-input-number v-model="num" :min="1" :max="10" @change="change"></z-input-number>


<script setup>
import { ref } from "vue";
const num = ref(1)
const num1 = ref(1)
const num2 = ref(1)
const num3 = ref(1)
const num4 = ref(1)
const num6 = ref(1)


const change = (value) => {
  console.log(value)
}

</script>



::: details 点击查看代码
```vue
<z-input-number v-model="num" :min="1" :max="10" @change="change"></z-input-number>

<script setup>
import { ref } from "vue";
const num = ref(1)
const change = (value) => {
  console.log(value)
}
</script>
```
:::





### 禁用状态


添加 `disabled` 属性可禁用整个组件。


<z-input-number v-model="num1" disabled></z-input-number>

::: details 点击查看代码
```vue
<z-input-number v-model="num" disabled></z-input-number>

<script setup>
import { ref } from "vue";
const num = ref(1)

</script>
```
:::




### 步进


设置 `step` 属性可以控制步长。

<z-input-number v-model="num2" :step="2"></z-input-number>

::: details 点击查看代码
```vue
<z-input-number v-model="num" :step="2"></z-input-number>

<script setup>
import { ref } from "vue";
const num = ref(1)

</script>
```
:::


### 严格步进

添加 `strict` 属性可让数值只能是步进的倍数


<z-input-number v-model="num3" :step="2" strict></z-input-number>


::: details 点击查看代码
```vue
<z-input-number v-model="num" :step="2" strict></z-input-number>

<script setup>
import { ref } from "vue";
const num = ref(1)

</script>
```
:::

### 精度

添加 `precision` 属性可控制数值精度。

<z-input-number v-model="num4" :precision="2" :step="0.1"></z-input-number>


::: details 点击查看代码
```vue
<z-input-number v-model="num" :precision="2" :step="0.1"></z-input-number>

<script setup>
import { ref } from "vue";
const num = ref(1)

</script>
```
:::



### 按钮位置

添加 `position` 属性可控制按钮的位置。

<z-input-number v-model="num6" position="right"></z-input-number>


::: details 点击查看代码
```vue
<z-input-number v-model="num" position="right"></z-input-number>
<script setup>
import { ref } from "vue";
const num = ref(1)

</script>
```
:::



### InputNumber 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
| v-model        | 绑定InputNumber值       | number      | -             | -             | -            |
| min          | 最小值       | number      | -             | -             | -Infinity             |
| max          | 最大值       | number      | -             | -             | Infinity             |
| step         | 步进值       | number      | -             | -             | 1             |
| disabled     | 禁用       | boolean     | false/true         | -             | false             |
| strict       | 严格步进       | boolean     | false/true          | -             | false             |
| precision    | 精度       | number      | -             | -             | -             |
| position     | 按钮位置       | string      | right         | -             | -       |


### InputNumber 事件
|    事件名      |       说明      |     回调参数       | 
|:------------:|:--------------:|:------------------:|
| change       | 绑定值被改变时触发       | number      |
| blur         | 失去焦点时触发       | (event: Event)      |
| focus        | 获得焦点时触发       | (event: Event)      |
| input      | input框输入值改变       | (event: Event)      |





