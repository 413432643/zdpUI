# time 时间选择器
用于选择或输入日期

### 基础用法

可以选择任意时间

<z-time  placeholder="选择时间" clearable></z-time>

<script setup>
import { ref, reactive } from "vue";
const time = ref('20:40:59')

const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}
const disabledHour = () => {
    return makeRange(5, 10).concat(makeRange(19, 23))
}
const disabledMinute = (hour) => {
    if (hour == 17) {
        return makeRange(0, 29)
    }
    if (hour == 18) {
        return makeRange(31, 59)
    }
}
const disabledSecond = (hour, minute) => {
    if (hour == 18 && minute == 30) {
        return makeRange(0, 30)
    }
}

</script>

::: details 点击查看代码
```vue

<z-time  placeholder="选择时间" clearable></z-time>


```
:::

### 限制选择范围

<z-time id='1' v-model="time" placeholder="限制选择范围" clearable :disabledHour="disabledHour" :disabledMinute='disabledMinute' :disabledSecond="disabledSecond"></z-time>

::: details 点击查看代码
```vue

<z-time id='1' v-model="time" placeholder="限制选择范围" clearable :disabledHour="disabledHour" :disabledMinute='disabledMinute' :disabledSecond="disabledSecond"></z-time>

<script setup>
import { ref, reactive } from "vue";
const time = ref('20:40:59')
const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}
const disabledHour = () => {
    return makeRange(5, 10).concat(makeRange(19, 23))
}
const disabledMinute = (hour) => {
    if (hour == 17) {
        return makeRange(0, 29)
    }
    if (hour == 18) {
        return makeRange(31, 59)
    }
}
const disabledSecond = (hour, minute) => {
    if (hour == 18 && minute == 30) {
        return makeRange(0, 30)
    }
}

</script>

```
:::

### time属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    v-model      |      绑定默认值(格式:hh:mm:ss)      |     String       |  -               |     当前时间     |
|    id      |       保持唯一性      |     string       |  -               |     ''     |
|    clearable      |       是否显示清除按钮      |     boolean       |  -               |     false     |
|    placeholder      |       占位文本      |     string       |  -               |     ''     |
|    leftIcon      |       左侧图标      |     string       |  -               |     icon-time     |
|    interval      |       输入框间隔时长(单位ms)      |     number       |  -               |     500     |
|    scrollInterval      |       滚动条间隔时长(单位ms)      |     number       |  -               |     300     |
|    disabledHour      |       限制小时范围      |     function       |  -               |     function(){}     |
|    disabledMinute      |       限制分钟范围     |     function       |  -               |     function(){}      |
|    disabledSecond      |       限制秒范围       |     function       |  -               |     function(){}      |

