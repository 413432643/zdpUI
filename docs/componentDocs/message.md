# message 消息提示

### 基础用法

<z-button  @click='Message({type:"message",message:"this is a message"})' style='margin:10px'>message</z-button>
<z-button  @click='instance.proxy.$message({type:"message",message:"this is a message"})' style='margin:10px'>message</z-button>
<z-button @click='instance.proxy.$message({type:"success",message:"this is a success"})' type='success' style='margin:10px'>success</z-button>
<z-button @click='instance.proxy.$message({type:"warning",message:"this is a warning"})' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='instance.proxy.$message({type:"error",message:"this is a error"})' type='danger' style='margin:10px'>error</z-button>
    
<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

</script>

::: details 点击查看代码
```

```
:::

|    属性      |       说明      |     类型       |  可选值               |     默认值     |
|:------------:|:--------------:|:--------------:|:------------------:|:----------------:|




