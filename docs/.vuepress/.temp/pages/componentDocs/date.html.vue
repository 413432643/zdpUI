<template><div><h1 id="date-日期" tabindex="-1"><a class="header-anchor" href="#date-日期" aria-hidden="true">#</a> date 日期</h1>
<p>用于选择或输入日期</p>
<h3 id="选择日期" tabindex="-1"><a class="header-anchor" href="#选择日期" aria-hidden="true">#</a> 选择日期</h3>
<z-date v-model="day" currentSign placeholder="选择日期" clearable @change="change"></z-date>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>day<span class="token punctuation">"</span></span>  <span class="token attr-name">currentSign</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择日期<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> day <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'2022-07-03'</span><span class="token punctuation">)</span>


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="选择月份" tabindex="-1"><a class="header-anchor" href="#选择月份" aria-hidden="true">#</a> 选择月份</h3>
<p>通过设置属性 <code v-pre>type</code> 为 <code v-pre>month</code> 选择月份</p>
<z-date  type="month" placeholder="选择月份" @change="change"></z-date>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>month<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择月份<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">></span></span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="选择年份" tabindex="-1"><a class="header-anchor" href="#选择年份" aria-hidden="true">#</a> 选择年份</h3>
<p>通过设置属性 <code v-pre>type</code> 为 <code v-pre>year</code> 选择年份</p>
<z-date  type="year" placeholder="选择年份" @change="change"></z-date>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择年份<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="选择多个日期" tabindex="-1"><a class="header-anchor" href="#选择多个日期" aria-hidden="true">#</a> 选择多个日期</h3>
<p>通过设置属性 <code v-pre>dates</code> 为 <code v-pre>dates</code> 选择多个日期</p>
<z-date type="dates" placeholder="选择多个日期" @change="change"></z-date>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dates<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择多个日期<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>change<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="data属性" tabindex="-1"><a class="header-anchor" href="#data属性" aria-hidden="true">#</a> Data属性</h3>
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
<td style="text-align:center">当前绑定值 (格式yyyy-mm-dd)</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">placeholder</td>
<td style="text-align:center">占位文本</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">currentSign</td>
<td style="text-align:center">标记当天</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">type</td>
<td style="text-align:center">显示类型</td>
<td style="text-align:center">String</td>
<td style="text-align:center">date/month/year/dates</td>
<td style="text-align:center">date</td>
</tr>
<tr>
<td style="text-align:center">clearable</td>
<td style="text-align:center">显示清除按钮</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<h3 id="data事件" tabindex="-1"><a class="header-anchor" href="#data事件" aria-hidden="true">#</a> Data事件</h3>
<table>
<thead>
<tr>
<th style="text-align:center">事件名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">change</td>
<td style="text-align:center">绑定值发生改变时触发</td>
<td style="text-align:center">返回值</td>
</tr>
</tbody>
</table>
<h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3>
<table>
<thead>
<tr>
<th style="text-align:center">事件名</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">dateTop</td>
<td style="text-align:center">data头部插槽</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref } from "vue";

const day = ref('2022-07-03')

const change = (e) => {
    console.log(e)
}

</script>
