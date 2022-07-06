# date 日期
用于选择或输入日期

### 选择日期


<z-date v-model="day" currentSign placeholder="选择日期" clearable @change="change"></z-date>

<script setup>
import { ref } from "vue";

const day = ref('2022-07-03')

const change = (e) => {
    console.log(e)
}

</script>

::: details 点击查看代码
```vue
<z-date v-model="day"  currentSign placeholder="选择日期" clearable @change="change"></z-date>

<script setup>
import { ref } from "vue";

const day = ref('2022-07-03')


</script>

```
:::

### 选择月份
通过设置属性 `type` 为 `month` 选择月份

<z-date  type="month" placeholder="选择月份" @change="change"></z-date>


::: details 点击查看代码
```vue

<z-date  type="month" placeholder="选择月份" @change="change"></z-date>



```
:::

### 选择年份
通过设置属性 `type` 为 `year` 选择年份

<z-date  type="year" placeholder="选择年份" @change="change"></z-date>



::: details 点击查看代码
```vue

<z-date  type="year" placeholder="选择年份" @change="change"></z-date>
```
:::


### 选择多个日期
通过设置属性 `dates` 为 `dates` 选择多个日期

<z-date type="dates" placeholder="选择多个日期" @change="change"></z-date>

::: details 点击查看代码
```vue

<z-date type="dates" placeholder="选择多个日期" @change="change"></z-date>
```
:::


### Data属性
|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    v-model      |       当前绑定值 (格式yyyy-mm-dd)     |     String       |   -       |     -     |
|    placeholder      |       占位文本      |     String       |  -               |     -     |
|    currentSign      |       标记当天      |      Boolean     |  -               |     -     |
|    type      |       显示类型      |     String       |  date/month/year/dates     |     date     |
|    clearable      |       显示清除按钮      |     Boolean       |  -               |     -     |

### Data事件

|    事件名      |       说明      |     返回值       | 
|:------------:|:--------------:|:--------------:|
|    change      |       绑定值发生改变时触发      |     返回值       | 


### 插槽
|    事件名      |       说明      |
|:------------:|:--------------:|
|    dateTop      |       data头部插槽      |

