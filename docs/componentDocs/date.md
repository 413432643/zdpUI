# date 日期
用于选择或输入日期

### 基础用法


<z-date v-model="day"  currentSign placeholder="选择日期"></z-date>

<script setup>
import { ref } from "vue";

const day = ref('2022-07-03')



</script>

::: details 点击查看代码
```vue
<z-date v-model="day"  currentSign placeholder="选择日期"></z-date>

<script setup>
import { ref } from "vue";

const day = ref('2022-07-03')


</script>

```
:::

### 其他日期单位
通过扩展基础的日期选择，可以选择年、月或多个日期

<z-date  type="month" placeholder="选择月份"></z-date>

<z-date  type="year" placeholder="选择年份"></z-date>

<z-date type="dates" placeholder="选择多个日期"></z-date>

::: details 点击查看代码
```vue

<z-date  type="month" placeholder="选择月份"></z-date>

<z-date  type="year" placeholder="选择年份"></z-date>

<z-date type="dates" placeholder="选择多个日期"></z-date>

```
:::

### 选择一段时间



::: details 点击查看代码
```vue
<z-date v-model="day" ></z-date>

<script setup>
import { ref } from "vue";


const day = ref('2022-07-07')
</script>
```
:::


|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    v-model      |       当前绑定值 (格式yyyy-mm-dd)     |     String       |   -       |     -     |
|    placeholder      |       占位文本      |     String       |  -               |     -     |
|    currentSign      |       标记当天      |      Boolean     |  -               |     -     |
|    type      |       显示类型      |     String       |  date/month/year/dates     |     date     |
|    属性      |       说明      |     类型       |  可选值               |     默认值     |