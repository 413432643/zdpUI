# time 时间选择器
用于选择或输入日期

### 基础用法

可以选择任意时间

<z-time  placeholder="选择时间" clearable></z-time>

<script setup>
import { ref, reactive } from "vue";
const time = ref('06:30:40')
</script>

::: details 点击查看代码
```vue

<z-time  placeholder="选择时间" clearable></z-time>

<script setup>
import { ref, reactive } from "vue";
const time = ref('06:30:40')
</script>

```
:::

### 限制选择范围

<z-time id='1' v-model="time" placeholder="限制选择范围" clearable></z-time>

::: details 点击查看代码
```vue

<z-time id='1' placeholder="限制选择范围" clearable></z-time>


```
:::


|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    v-model      |      绑定默认值(格式:hh:mm:ss)      |     String       |  -               |     当前时间     |
|    id      |       id保持唯一性      |     string       |  -               |     ''     |
|    clearable      |       是否显示清除按钮      |     boolean       |  -               |     false     |
|    placeholder      |       占位文本      |     string       |  -               |     ''     |
|    interval      |       输入框间隔时长(单位ms)      |     number       |  -               |     500     |
|    scrollInterval      |       滚动条间隔时长(单位ms)      |     number       |  -               |     700     |