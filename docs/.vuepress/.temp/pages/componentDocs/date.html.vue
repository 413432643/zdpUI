<template><div><h1 id="date-日期" tabindex="-1"><a class="header-anchor" href="#date-日期" aria-hidden="true">#</a> date 日期</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<z-date v-model="day" @change="change"></z-date>
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
<tbody>
<tr>
<td style="text-align:center">属性</td>
<td style="text-align:center">说明</td>
<td style="text-align:center">类型</td>
<td style="text-align:center">可选值</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center">属性</td>
<td style="text-align:center">说明</td>
<td style="text-align:center">类型</td>
<td style="text-align:center">可选值</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center">属性</td>
<td style="text-align:center">说明</td>
<td style="text-align:center">类型</td>
<td style="text-align:center">可选值</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center">属性</td>
<td style="text-align:center">说明</td>
<td style="text-align:center">类型</td>
<td style="text-align:center">可选值</td>
<td style="text-align:center">默认值</td>
</tr>
<tr>
<td style="text-align:center">属性</td>
<td style="text-align:center">说明</td>
<td style="text-align:center">类型</td>
<td style="text-align:center">可选值</td>
<td style="text-align:center">默认值</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref } from "vue";


const day = ref('2022-07-07')
const change = (...arg) => {
    console.log(arg)
}
</script>
