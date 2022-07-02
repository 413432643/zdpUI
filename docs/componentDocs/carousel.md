# Carousel 走马灯
循环播放同一类型的图片、文字等内容

### 基础用法
通过 `z-carousel` 标签就得到了一个走马灯。  
使用`urlF` `valueF`属性可以自定义options格式  
使用`width` `height` 属性可自定义容器的宽高   

<z-carousel v-model="initIndex"  :options="options" showPointer></z-carousel>

<script setup>
import { ref, computed, reactive } from 'vue';


const state = reactive({
    options: [
        {
            url: 'https://img1.baidu.com/it/u=4109061742,2554968576&fm=253',
            value: 0
        },
        {
            url: 'https://img1.baidu.com/it/u=3942857154,2662308907&fm=253',
            value: 1
        },
        {
            url: 'https://img2.baidu.com/it/u=460488376,1260814254&fm=253',
            value: 2
        },
        {
            url: 'https://img2.baidu.com/it/u=3151809725,3550281418&fm=253',
            value: 3
        },
        {
            url: 'https://img2.baidu.com/it/u=2600419742,2480379272&fm=253',
            value: 4
        },
    ]
})
const { options } = state

const initIndex=ref(2)
</script>

::: details 点击查看代码
```vue
<z-carousel :options="options"></z-carousel>


<script setup>


import { ref, computed, reactive } from 'vue';


const state = reactive({
    options: [
        {
            url: 'https://img1.baidu.com/it/u=4109061742,2554968576&fm=253',
            value: 0
        },
        {
            url: 'https://img1.baidu.com/it/u=3942857154,2662308907&fm=253',
            value: 1
        },
        {
            url: 'https://img2.baidu.com/it/u=460488376,1260814254&fm=253',
            value: 2
        },
        {
            url: 'https://img2.baidu.com/it/u=3151809725,3550281418&fm=253',
            value: 3
        },
        {
            url: 'https://img2.baidu.com/it/u=2600419742,2480379272&fm=253',
            value: 4
        },
    ]
})
const { options } = state
const initIndex=ref(2)
</script>
```
:::

### 自动播放
通过 `auto` 属性设置是否自动播放，通过 `autoItem` 属性设置时间间隔
<z-carousel :options="options" showPointer auto :autoItem="2000" ></z-carousel>


::: details 点击查看代码
```vue
<z-carousel :options="options" showPointer auto :autoItem="2000" ></z-carousel>
<script setup>
import { ref, computed, reactive } from 'vue';


const state = reactive({
    options: [
        {
            url: 'https://img1.baidu.com/it/u=4109061742,2554968576&fm=253',
            value: 0
        },
        {
            url: 'https://img1.baidu.com/it/u=3942857154,2662308907&fm=253',
            value: 1
        },
        {
            url: 'https://img2.baidu.com/it/u=460488376,1260814254&fm=253',
            value: 2
        },
        {
            url: 'https://img2.baidu.com/it/u=3151809725,3550281418&fm=253',
            value: 3
        },
        {
            url: 'https://img2.baidu.com/it/u=2600419742,2480379272&fm=253',
            value: 4
        },
    ]
})
const { options } = state

</script>
```
:::


### 垂直滚动
通过 `vertical` 属性设置垂直滚动
<z-carousel :options="options" showPointer auto :autoItem="3000" vertical></z-carousel>


::: details 点击查看代码
```vue
<z-carousel :options="options" showPointer auto :autoItem="3000" vertical></z-carousel>

<script setup>
import { ref, computed, reactive } from 'vue';


const state = reactive({
    options: [
        {
            url: 'https://img1.baidu.com/it/u=4109061742,2554968576&fm=253',
            value: 0
        },
        {
            url: 'https://img1.baidu.com/it/u=3942857154,2662308907&fm=253',
            value: 1
        },
        {
            url: 'https://img2.baidu.com/it/u=460488376,1260814254&fm=253',
            value: 2
        },
        {
            url: 'https://img2.baidu.com/it/u=3151809725,3550281418&fm=253',
            value: 3
        },
        {
            url: 'https://img2.baidu.com/it/u=2600419742,2480379272&fm=253',
            value: 4
        },
    ]
})
const { options } = state
</script>
```
:::

### carousel 属性
|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    v-model      |       当前绑定值     |     string       |  -               |     0     |
|    width      |       主体宽度     |     string       |  -               |     300     |
|    height      |       主体高度     |     string       |  -               |     200     |
|    urlF      |       自定义url的字段名      |     string       |  -               |     url     |
|    valueF      |       自定义value的字段名      |     string       |  -               |     value     |
|    auto      |       自动播放    |     Boolean       |  -               |     false     |
|    showPointer      |       是否显示圆点指示器    |     Boolean       |  -               |     false     |
|    valueF      |       播放时间间隔      |     Number       |  -               |     1000     |
|    vertical      |       垂直滚动      |     Boolean       |  -               |     false     |

### options

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    url     |       展示图片地址      |     string       |  -               |     url     |
|    value      |      默认值       |     string       |  -               |     value     |