# message 消息提示
用于主动操作后的反馈提示。

### 基础用法
从顶部出现，3 秒后自动消失,可以通过`duration`属性控制显示时间

<z-button  @click='open' style='margin:10px'>message</z-button>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const open=()=>{
    instance.proxy.$message({type:"message",message:"message",duration:5000})
}

const openMessage =()=>{
    instance.proxy.$message({type:"message",message:"message"})
}
const openSuccess =()=>{
    instance.proxy.$message({type:"success",message:"success"})
}
const openWarning =()=>{
    instance.proxy.$message({type:"warning",message:"warning"})
}
const openError =()=>{
    instance.proxy.$message({type:"error",message:"error"})
}

const openMessage1 =()=>{
    instance.proxy.$message({type:"message",message:"message",isClose:true})
}
const openSuccess1 =()=>{
    instance.proxy.$message({type:"success",message:"success",isClose:true})
}
const openWarning1 =()=>{
    instance.proxy.$message({type:"warning",message:"warning",isClose:true})
}
const openError1 =()=>{
    instance.proxy.$message({type:"error",message:"error",isClose:true})
}
</script>


::: details 点击查看代码
```vue
<z-button  @click='open' style='margin:10px'>message</z-button>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const open=()=>{
    instance.proxy.$message({type:"message",message:"message",duration:5000})
}
</script>

```
:::


### 不同状态
<z-button  @click='openMessage' style='margin:10px'>message</z-button>
<z-button @click='openSuccess' type='success' style='margin:10px'>success</z-button>
<z-button @click='openWarning' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='openError' type='danger' style='margin:10px'>error</z-button>


::: details 点击查看代码
```vue
<z-button  @click='openMessage' style='margin:10px'>message</z-button>
<z-button @click='openSuccess' type='success' style='margin:10px'>success</z-button>
<z-button @click='openWarning' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='openError' type='danger' style='margin:10px'>error</z-button>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const openMessage =()=>{
    instance.proxy.$message({type:"message",message:"message"})
}
const openSuccess =()=>{
    instance.proxy.$message({type:"success",message:"success"})
}
const openWarning =()=>{
    instance.proxy.$message({type:"warning",message:"warning"})
}
const openError =()=>{
    instance.proxy.$message({type:"error",message:"error"})
}

</script>
```
:::

### 可关闭的消息提示

<z-button  @click='openMessage1' style='margin:10px'>message</z-button>
<z-button @click='openSuccess1' type='success' style='margin:10px'>success</z-button>
<z-button @click='openWarning1' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='openError1' type='danger' style='margin:10px'>error</z-button>



::: details 点击查看代码
```vue
<z-button  @click='openMessage' style='margin:10px'>message</z-button>
<z-button @click='openSuccess' type='success' style='margin:10px'>success</z-button>
<z-button @click='openWarning' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='openError' type='danger' style='margin:10px'>error</z-button>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const openMessage =()=>{
    instance.proxy.$message({type:"message",message:"message",isClose:true})
}
const openSuccess =()=>{
    instance.proxy.$message({type:"success",message:"success",isClose:true})
}
const openWarning =()=>{
    instance.proxy.$message({type:"warning",message:"warning",isClose:true})
}
const openError =()=>{
    instance.proxy.$message({type:"error",message:"error",isClose:true})
}
</script>
```
:::




|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|
|    type      |       	消息类型      |     string       |  'success' / 'warning' / 'message' / 'error'               |     'message'     |
|    message      |       	消息文字      |     string        |  -               |     message     |
|    isClose      |       是否显示关闭按钮      |     boolean       |  -               |     false     |
|    leftIcon      |       自定义图标，该属性会覆盖 type 的图标      |     string       |  -               |     -     |
|    duration      |       	显示时间，单位为毫秒   |     number	       |  -               |     3000     |

