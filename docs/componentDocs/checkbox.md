# checkbox 多选

### 基础用法

<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal" :options="checkOptions" @change="checkChange"></z-checkbox>
    </z-col>
</z-row>


<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref(['1']);
const state = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const { checkOptions } = state;
const checkChange = (e) => {
    console.log(e.value, e.index);
};


// 自定义value和title属性名
const checkboxVal1 = ref(['1']);
const state1 = reactive({
    checkOptions: [
        { name: "选项1", num: "1" },
        { name: "选项2", num: "2" },
        { name: "选项3", num: "3" },
        { name: "选项4", num: "4" },
    ],
});
const { checkOptions: checkOptions1 } = state1;


// 垂直排列

const checkboxVal2 = ref(['1']);
const state2 = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const { checkOptions: checkOptions2 } = state2;


// 大小
const checkboxVal3 = ref(['1']);
const state3 = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const { checkOptions: checkOptions3 } = state3;

const checkboxVal4 = ref(['1']);
const state4 = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const { checkOptions: checkOptions4 } = state4;

const checkboxVal5 = ref(['1']);
const state5 = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const { checkOptions: checkOptions5 } = state5;


// 禁用
const checkboxVal6 = ref(['1']);
const state6 = reactive({
    checkOptions: [
        { title: "选项1", value: "1", disabled: true },
        { title: "选项2", value: "2", disabled: true },
        { title: "选项3", value: "3",disabled: true },
        { title: "选项4", value: "4" ,disabled: true},
    ],
});
const { checkOptions: checkOptions6 } = state6;

</script>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal" :options="checkOptions" @change="checkChange" ></z-checkbox>
    </z-col>
</z-row>


<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref(['1']);
const state = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const checkChange = (e) => {
    console.log(e.value, e.index);
};
const { checkOptions } = state;
</script>
```
:::

### 禁用
添加`disabled`属性，可以禁用选项

<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal6" :options="checkOptions6" @change="checkChange" ></z-checkbox>
    </z-col>
</z-row>


### 垂直排列
添加`inline`属性改变为垂直排列

<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal2" :options="checkOptions2" @change="checkChange" inline></z-checkbox>
    </z-col>
</z-row>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal" :options="checkOptions" inline></z-checkbox>
    </z-col>
</z-row>



<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref(['1']);
const state = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const { checkOptions } = state;
</script>
```
:::

### 尺寸大小
通过`size`属性设置尺寸大小

<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal3" :options="checkOptions3" @change="checkChange" size="small"></z-checkbox>
        <z-checkbox v-model="checkboxVal4" :options="checkOptions4" @change="checkChange" ></z-checkbox>
        <z-checkbox v-model="checkboxVal5" :options="checkOptions5" @change="checkChange" size="large"></z-checkbox>
    </z-col>
</z-row>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal" :options="checkOptions" size="small"></z-checkbox>
        <z-checkbox v-model="checkboxVal" :options="checkOptions"  ></z-checkbox>
        <z-checkbox v-model="checkboxVal" :options="checkOptions" size="large"></z-checkbox>
    </z-col>
</z-row>



<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref(['1']);
const state = reactive({
    checkOptions: [
        { title: "选项1", value: "1" },
        { title: "选项2", value: "2" },
        { title: "选项3", value: "3" },
        { title: "选项4", value: "4" },
    ],
});
const { checkOptions } = state;
</script>
```
:::



### 自定义value和title属性名
通过`valueFiled`和`titleFiled`可以自定义value和title属性名，默认为`value`和`title`。

<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal1" :options="checkOptions1" @change="checkChange"  valueFiled="num" titleFiled="name"></z-checkbox>
    </z-col>
</z-row>

::: details 点击查看代码
```vue
<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal" :options="checkOptions"  valueFiled="num" titleFiled="name"></z-checkbox>
    </z-col>
</z-row>

<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref(['1']);
const state = reactive({
    checkOptions: [
        { name: "选项1", num: "1" },
        { name: "选项2", num: "2" },
        { name: "选项3", num: "3" },
        { name: "选项4", num: "4" },
    ],
});
const { checkOptions } = state;
</script>
```
:::




### Checkbox 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
| v-model   | 默认值  | Array        | -                    | -                 |
| valueFiled   | 自定义替换value的字段名  | string         | -                    |value                 |
| titleFiled   | 自定义替换title的字段名  | string         | -                    |title                 |
|     options     |  Object  | 	复选数据配置，具体见下方 options API    |   -                |   -              |
|     inline     |  	Boolean  | 	是否垂直排列    |   true/false               |   false            |
|     size     |  	尺寸  | 	String   |   small/large             |   -              |

### Options 配置项


|    参数      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|     value     |  复选框对应的值     | 	string / number     |   -                |  -             |
|     title     |  标签标题     | 	string    |   -              |   -             |
|     disabled     |  是否禁用     | 	boolean    |   -               |   false            |


### Event 事件

|    事件      |       说明      |     参数       | 
|:------------:|:--------------:|:--------------:|
| change     | 复选框选中事件     | 	选中的 checkbox array 和 当前点击的index值   | 