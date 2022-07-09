<template><div><h1 id="time-时间选择器" tabindex="-1"><a class="header-anchor" href="#time-时间选择器" aria-hidden="true">#</a> time 时间选择器</h1>
<p>用于选择或输入日期</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>可以选择任意时间</p>
<z-time v-model="time" placeholder="选择时间" clearable></z-time>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-time</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择时间<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-time</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'06:30:59'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="限制选择范围" tabindex="-1"><a class="header-anchor" href="#限制选择范围" aria-hidden="true">#</a> 限制选择范围</h3>
<z-time id='1' placeholder="限制选择范围" clearable></z-time>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-time</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>1<span class="token punctuation">'</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>限制选择范围<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-time</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
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
<td style="text-align:center">v-model</td>
<td style="text-align:center">绑定默认值(格式:hh:mm:ss)</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">当前时间</td>
</tr>
<tr>
<td style="text-align:center">id</td>
<td style="text-align:center">id保持唯一性</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">''</td>
</tr>
<tr>
<td style="text-align:center">clearable</td>
<td style="text-align:center">是否显示清除按钮</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">placeholder</td>
<td style="text-align:center">占位文本</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">''</td>
</tr>
<tr>
<td style="text-align:center">interval</td>
<td style="text-align:center">输入框间隔时长(单位ms)</td>
<td style="text-align:center">number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">500</td>
</tr>
<tr>
<td style="text-align:center">scrollInterval</td>
<td style="text-align:center">滚动条间隔时长(单位ms)</td>
<td style="text-align:center">number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">700</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref, reactive } from "vue";
const time = ref('06:30:59')
</script>
