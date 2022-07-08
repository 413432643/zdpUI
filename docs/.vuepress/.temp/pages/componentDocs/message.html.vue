<template><div><h1 id="message-消息提示" tabindex="-1"><a class="header-anchor" href="#message-消息提示" aria-hidden="true">#</a> message 消息提示</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<z-message v-model="time"></z-message>
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
const time = ref('2012/11/12 10:15:20')
</script>
