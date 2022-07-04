# pagination 分页
当数据量过多时，使用分页分解数据。
### 基础用法
当总页数超过 5 页时，pagination 会折叠多余的页码按钮，并且通过 `jump` 属性传入步进数点击 `···` 可进行步进
<z-pagination  v-model="current" :total="50" ></z-pagination>  
<br />

<z-pagination  v-model="current" :total="600" :pagesize="20"  :jump="3"></z-pagination>  



<script setup>
import { ref, reactive } from 'vue';
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
```vue
<z-pagination  v-model="current" :total="50"  ></z-pagination>  

<z-pagination  v-model="current" :total="600"  ></z-pagination>

```
:::

### 指定页跳转
通过 `customPage` 属性打开一个可输入页码的input框，输入页码可直达该页
<z-pagination  v-model="current" :total="600"  customPage></z-pagination>



::: details 点击查看代码
```vue
<z-pagination  v-model="current" :total="600"  customPage></z-pagination>
```
:::

### 指定每页条数
通过 `pagesizeOption` 属性传入预设页面条数可让用户自主切换页面条数
<z-pagination :pagesizeOption="options" v-model="current" :total="600" :pagesize="20" :jump="3" ></z-pagination>




::: details 点击查看代码
```vue
<z-pagination :pagesizeOption="options" v-model="current" :total="600" :pagesize="20" :jump="3" ></z-pagination>

<script setup>
import { ref, reactive } from 'vue';
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


```
:::


### 分页样式
通过 `selectColor` `bgColor` `bgActive` `borderRadius` 等属性可自定义组件按钮样式

<z-pagination  v-model="current" :total="200"  selectColor="#fff" bgColor="#dcdfe6" bgActive="#409eff" :borderRadius="4" ></z-pagination>  


::: details 点击查看代码
```vue
<z-pagination  v-model="current" :total="200"  selectColor="#fff" bgColor="#dcdfe6" bgActive="#409eff" :borderRadius="4" ></z-pagination>  

```
:::

### pagination属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    total      |       数据总条数      |     Number       |  -               |     0     |
|    pagesize      |       每页总条数      |     Number       |  -               |     10     |
|    v-model      |       当前选中项      |     Number       |  -               |     1     |
|    pagesizeOption      |       页面条数配置项      |     array      |  -               |     -     |
|    jump      |       步进数      |     Number       |  -               |     1     |
|    customPage      |       显示input框输入数值直达页码      |     Boolean       |  -               |     false     |
|    borderRadius      |       按钮圆角      |     Number       |  -               |     ''     |
|    bgActive      |       选中背景色      |     String       |  -             |     ''     |
|    bgColor      |       按钮背景色      |     String       |  -               |     ''     |
|    selectColor      |       选中字体颜色      |     String       |  -               |     '#409eff'     |


### pagination事件
|    事件名      |       说明      |     返回值       |
|:------------:|:--------------:|:--------------:|
|    change      |       分页按钮被选中时触发      |     当前页码       |
|    change-input      |       input框输入值时触发      |     当前输入值       |