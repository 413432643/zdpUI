<template><div><h1 id="input-输入框" tabindex="-1"><a class="header-anchor" href="#input-输入框" aria-hidden="true">#</a> input 输入框</h1>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<z-input v-model="input" placeholder="基本用法"></z-input>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>基本用法<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-input</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h3>
<z-input v-model="input2" placeholder="禁用状态" disabled></z-input>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>禁止状态<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-input</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="一键清空" tabindex="-1"><a class="header-anchor" href="#一键清空" aria-hidden="true">#</a> 一键清空</h3>
<z-input v-model="input3" placeholder="一键清空" clearable></z-input>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>一键清空<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-input</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="密码框" tabindex="-1"><a class="header-anchor" href="#密码框" aria-hidden="true">#</a> 密码框</h3>
<z-input v-model="input1" placeholder="密码框" type='password'></z-input>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码框<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-input</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="带图标的输入框" tabindex="-1"><a class="header-anchor" href="#带图标的输入框" aria-hidden="true">#</a> 带图标的输入框</h3>
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
<h3 id="文本域" tabindex="-1"><a class="header-anchor" href="#文本域" aria-hidden="true">#</a> 文本域</h3>
<z-input v-model="textarea" placeholder="文本域" type='textarea' rows="2"></z-input>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文本域<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>textarea<span class="token punctuation">'</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-input</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="自适应高度文本域" tabindex="-1"><a class="header-anchor" href="#自适应高度文本域" aria-hidden="true">#</a> 自适应高度文本域</h3>
<z-input v-model="textarea" placeholder="文本域" type='textarea' rows="1" autosize></z-input>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textarea<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文本域<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>textarea<span class="token punctuation">'</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">autosize</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="input-属性" tabindex="-1"><a class="header-anchor" href="#input-属性" aria-hidden="true">#</a> input 属性</h3>
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
<td style="text-align:center">输入框绑定值</td>
<td style="text-align:center">string/number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">disabled</td>
<td style="text-align:center">是否禁用</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">placeholder</td>
<td style="text-align:center">占位文本</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">clearable</td>
<td style="text-align:center">是否显示清除按钮</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">type</td>
<td style="text-align:center">输入框类型</td>
<td style="text-align:center">string</td>
<td style="text-align:center">text/password/textarea</td>
<td style="text-align:center">text</td>
</tr>
<tr>
<td style="text-align:center">leftIcon</td>
<td style="text-align:center">左侧图标</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">rightIcon</td>
<td style="text-align:center">右侧图标</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">rows</td>
<td style="text-align:center">文本域行数(只在type='textarea'生效)</td>
<td style="text-align:center">number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">autosize</td>
<td style="text-align:center">文本域是否自适应高度(只在type='textarea'生效)</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<h3 id="input-事件" tabindex="-1"><a class="header-anchor" href="#input-事件" aria-hidden="true">#</a> Input 事件</h3>
<table>
<thead>
<tr>
<th style="text-align:center">事件名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">input</td>
<td style="text-align:center">输入框输入事件</td>
<td style="text-align:center">(value: string /number)</td>
</tr>
<tr>
<td style="text-align:center">focus</td>
<td style="text-align:center">输入框获得焦点事件</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">blur</td>
<td style="text-align:center">输入框失去焦点事件</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">clear</td>
<td style="text-align:center">清除按钮点击事件</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">change</td>
<td style="text-align:center">仅在输入框失去焦点或用户按下回车时触发</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref } from "vue";
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const textarea = ref('')

</script>
