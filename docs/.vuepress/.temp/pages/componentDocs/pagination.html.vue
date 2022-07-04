<template><div><h1 id="pagination-分页" tabindex="-1"><a class="header-anchor" href="#pagination-分页" aria-hidden="true">#</a> pagination 分页</h1>
<p>当数据量过多时，使用分页分解数据。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>当总页数超过 5 页时，pagination 会折叠多余的页码按钮，并且通过 <code v-pre>jump</code> 属性传入步进数点击 <code v-pre>···</code> 可进行步进</p>
<z-pagination  v-model="current" :total="50" ></z-pagination>  
<br />
<z-pagination  v-model="current" :total="600" :pagesize="20"  :jump="3"></z-pagination>  
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-pagination</span>  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-pagination</span><span class="token punctuation">></span></span>  

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-pagination</span>  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-pagination</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="指定页跳转" tabindex="-1"><a class="header-anchor" href="#指定页跳转" aria-hidden="true">#</a> 指定页跳转</h3>
<p>通过 <code v-pre>customPage</code> 属性打开一个可输入页码的input框，输入页码可直达该页</p>
<z-pagination  v-model="current" :total="600"  customPage></z-pagination>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-pagination</span>  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span>  <span class="token attr-name">customPage</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-pagination</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="指定每页条数" tabindex="-1"><a class="header-anchor" href="#指定每页条数" aria-hidden="true">#</a> 指定每页条数</h3>
<p>通过 <code v-pre>pagesizeOption</code> 属性传入预设页面条数可让用户自主切换页面条数</p>
<z-pagination :pagesizeOption="options" v-model="current" :total="600" :pagesize="20" :jump="3" ></z-pagination>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-pagination</span> <span class="token attr-name">:pagesizeOption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">:pagesize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">:jump</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-pagination</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'10'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'20'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'30'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'50'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'100'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> state
<span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="分页样式" tabindex="-1"><a class="header-anchor" href="#分页样式" aria-hidden="true">#</a> 分页样式</h3>
<p>通过 <code v-pre>selectColor</code> <code v-pre>bgColor</code> <code v-pre>bgActive</code> <code v-pre>borderRadius</code> 等属性可自定义组件按钮样式</p>
<z-pagination  v-model="current" :total="200"  selectColor="#fff" bgColor="#dcdfe6" bgActive="#409eff" :borderRadius="4" ></z-pagination>  
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-pagination</span>  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>  <span class="token attr-name">selectColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span> <span class="token attr-name">bgColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#dcdfe6<span class="token punctuation">"</span></span> <span class="token attr-name">bgActive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#409eff<span class="token punctuation">"</span></span> <span class="token attr-name">:borderRadius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-pagination</span><span class="token punctuation">></span></span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="pagination属性" tabindex="-1"><a class="header-anchor" href="#pagination属性" aria-hidden="true">#</a> pagination属性</h3>
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
<td style="text-align:center">total</td>
<td style="text-align:center">数据总条数</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">0</td>
</tr>
<tr>
<td style="text-align:center">pagesize</td>
<td style="text-align:center">每页总条数</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">10</td>
</tr>
<tr>
<td style="text-align:center">v-model</td>
<td style="text-align:center">当前选中项</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">pagesizeOption</td>
<td style="text-align:center">页面条数配置项</td>
<td style="text-align:center">array</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">jump</td>
<td style="text-align:center">步进数</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">customPage</td>
<td style="text-align:center">显示input框输入数值直达页码</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">borderRadius</td>
<td style="text-align:center">按钮圆角</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">''</td>
</tr>
<tr>
<td style="text-align:center">bgActive</td>
<td style="text-align:center">选中背景色</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">''</td>
</tr>
<tr>
<td style="text-align:center">bgColor</td>
<td style="text-align:center">按钮背景色</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">''</td>
</tr>
<tr>
<td style="text-align:center">selectColor</td>
<td style="text-align:center">选中字体颜色</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">'#409eff'</td>
</tr>
</tbody>
</table>
<h3 id="pagination事件" tabindex="-1"><a class="header-anchor" href="#pagination事件" aria-hidden="true">#</a> pagination事件</h3>
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
<td style="text-align:center">分页按钮被选中时触发</td>
<td style="text-align:center">当前页码</td>
</tr>
<tr>
<td style="text-align:center">change-input</td>
<td style="text-align:center">input框输入值时触发</td>
<td style="text-align:center">当前输入值</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref, reactive } from 'vue';
const state = reactive({
    options: [
        {
            label: '10',
            value: 1
        },
        {
            label: '20',
            value: 2
        },
        {
            label: '30',
            value: 3
        },
        {
            label: '50',
            value: 4
        },
        {
            label: '100',
            value: 5
        },
    ]
})
const { options } = state
const current = ref(2)

</script>
