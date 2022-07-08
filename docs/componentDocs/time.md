# time 时间选择器
用于选择或输入日期

### 基础用法

可以选择任意时间

<z-time v-model="time" ></z-time>

<script setup>
import { ref, reactive } from "vue";
const time = ref('11:59:59')
</script>

::: details 点击查看代码
```vue

```
:::


|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    v-model      |      绑定默认值(格式:hh:mm:ss)      |     String       |  -               |     当前时间     |



