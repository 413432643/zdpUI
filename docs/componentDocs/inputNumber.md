# InputNumber 计数器

### 基础用法

<z-input-number v-model="num" :min="1" :max="10" @change="change"></z-input-number>


<script setup>
import { ref } from "vue";
const num = ref(1)
const num1 = ref(1)
const num2 = ref(1)
const num3 = ref(1)
const num4 = ref(1)
const num5 = ref(1)
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

<z-input-number v-model="num4"></z-input-number>


::: details 点击查看代码
```vue

```
:::


### 不同的输入框尺寸


<z-input-number v-model="num5"></z-input-number>


::: details 点击查看代码
```vue

```
:::


### 按钮位置



<z-input-number v-model="num6"></z-input-number>


::: details 点击查看代码
```vue

```
:::



### InputNumber 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
| v-model        | 绑定InputNumber值       | number      | -             | -             | -            |
| min          | 最小值       | number      | -             | -             | -Infinity             |
| max          | 最大值       | number      | -             | -             | Infinity             |
| step         | 步进值       | number      | -             | -             | 1             |
| disabled     | 禁用       | boolean     | false         | -             | false             |


### InputNumber 方法
|    事件名      |       说明      |     回调参数       | 
|:------------:|:--------------:|:------------------:|
| change       | 值改变时触发       | number      |




