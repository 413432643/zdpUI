# pagination 分页

### 基础用法

<z-pagination :pagesizeOption="options" v-model="current" :total="600" :pagesize="20" :jump="3"></z-pagination>

<script setup>
import { ref ,reactive} from 'vue';
const state = reactive({
    options: [
        {
            label: '10',
            value: 1
        },
        {
            label: '20',
            value: 2
        },
        {
            label: '30',
            value: 3
        },
        {
            label: '50',
            value: 4
        },
        {
            label: '100',
            value: 5
        },
    ]
})
const { options } = state
const current = ref(2)

</script>

::: details 点击查看代码
```

```
:::

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|




