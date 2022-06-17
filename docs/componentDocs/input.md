# input 输入框

### 基本用法

<z-input v-model="input" placeholder="基本用法"></z-input>


<script setup>
import { ref } from "vue";
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const textarea = ref('')

</script>

::: details 点击查看代码
```vue
<z-input v-model="input" placeholder="基本用法"></z-input>


<script setup>
import { ref } from "vue";
const input = ref('')
</script>
```
:::


### 禁用状态

<z-input v-model="input2" placeholder="禁用状态" disabled></z-input>


::: details 点击查看代码
```vue
<z-input placeholder="禁止状态" disabled></z-input>

```
:::


### 一键清空

<z-input v-model="input3" placeholder="一键清空" clearable></z-input>


::: details 点击查看代码
```vue
<z-input placeholder="一键清空" clearable></z-input>

```
:::


### 密码框


<z-input v-model="input1" placeholder="密码框" type='password'></z-input>

::: details 点击查看代码
```vue
<z-input placeholder="密码框" clearable></z-input>

```
:::


### 带图标的输入框
<z-row>
    <z-col span="8">
        <z-input v-model="input" placeholder="带图标的输入框" leftIcon="icon-close"></z-input>
    </z-col>
</z-row>
<z-row>
    <z-col span="8">
        <z-input v-model="input" placeholder="带图标的输入框" rightIcon="icon-close"></z-input>
    </z-col>
</z-row>

### 文本域

<z-input v-model="textarea" placeholder="文本域" type='textarea' rows="2"></z-input>



::: details 点击查看代码
```vue
   <z-input v-model="textarea" placeholder="文本域" type='textarea' rows="2" ></z-input>

```
:::


### 自适应高度文本域

<z-input v-model="textarea" placeholder="文本域" type='textarea' rows="1" autosize></z-input>

::: details 点击查看代码
```vue
  <z-input v-model="textarea" placeholder="文本域" type='textarea' rows="1" autosize></z-input>
```
:::



### input 属性

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
| v-model   | 输入框绑定值  | string/number         | -                    | -                 |
| disabled   | 是否禁用  | boolean         | -                    |-                 |
| placeholder   | 占位文本  | string         | -                    |-                 |
| clearable   | 是否显示清除按钮  | boolean         | -                    |-                 |
| type   | 输入框类型  | string         | text/password/textarea        | text             |
| leftIcon   | 左侧图标  | string         | -                    |-                 |
| rightIcon   | 右侧图标  | string         | -                    |-                 |
| rows   | 文本域行数(只在type='textarea'生效)  | number         | -                    |-                 |
| autosize   | 文本域是否自适应高度(只在type='textarea'生效)  | boolean         | -                    |-                 |




### Input 事件
|    事件名      |       说明      |     参数       |
|:------------:|:--------------:|:--------------:|
| input   | 输入框输入事件  | 	(value: string /number)         |
| focus   | 输入框获得焦点事件  | -         |
| blur   | 输入框失去焦点事件  | -         |
| clear   | 清除按钮点击事件  | -         |
| change   | 仅在输入框失去焦点或用户按下回车时触发  | -         |
