<template><div><h1 id="message-消息提示" tabindex="-1"><a class="header-anchor" href="#message-消息提示" aria-hidden="true">#</a> message 消息提示</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<!-- <z-button  @click='Message({type:"message",message:"this is a message"})' style='margin:10px'>message</z-button> -->
<z-button  @click='instance.proxy.$message({type:"message",message:"this is a message",isClose:true})' style='margin:10px'>message</z-button>
<z-button @click='instance.proxy.$message({type:"success",message:"this is a success"})' type='success' style='margin:10px'>success</z-button>
<z-button @click='instance.proxy.$message({type:"warning",message:"this is a warning"})' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='instance.proxy.$message({type:"error",message:"this is a error"})' type='danger' style='margin:10px'>error</z-button>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<table>
<thead>
<tr>
<th style="text-align:center">属性</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">可选值</th>
<th style="text-align:center">默认值</th>
</tr>
</thead>
</table>
</div></template>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

</script>
