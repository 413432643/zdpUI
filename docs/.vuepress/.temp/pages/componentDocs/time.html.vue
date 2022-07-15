<template><div><h1 id="time-时间选择器" tabindex="-1"><a class="header-anchor" href="#time-时间选择器" aria-hidden="true">#</a> time 时间选择器</h1>
<p>用于选择或输入日期</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>可以选择任意时间</p>
<z-time  placeholder="选择时间" clearable></z-time>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-time</span>  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>选择时间<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-time</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="限制选择范围" tabindex="-1"><a class="header-anchor" href="#限制选择范围" aria-hidden="true">#</a> 限制选择范围</h3>
<z-time id='1' v-model="time" placeholder="限制选择范围" clearable :disabledHour="disabledHour" :disabledMinute='disabledMinute' :disabledSecond="disabledSecond"></z-time>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-time</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>1<span class="token punctuation">'</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>time<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>限制选择范围<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span> <span class="token attr-name">:disabledHour</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabledHour<span class="token punctuation">"</span></span> <span class="token attr-name">:disabledMinute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>disabledMinute<span class="token punctuation">'</span></span> <span class="token attr-name">:disabledSecond</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabledSecond<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-time</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'20:40:59'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">makeRange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">disabledHour</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">makeRange</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">makeRange</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">disabledMinute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">hour</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hour <span class="token operator">==</span> <span class="token number">17</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">makeRange</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hour <span class="token operator">==</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">makeRange</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">disabledSecond</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">hour<span class="token punctuation">,</span> minute</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hour <span class="token operator">==</span> <span class="token number">18</span> <span class="token operator">&amp;&amp;</span> minute <span class="token operator">==</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">makeRange</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="time属性" tabindex="-1"><a class="header-anchor" href="#time属性" aria-hidden="true">#</a> time属性</h3>
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
<td style="text-align:center">保持唯一性</td>
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
<td style="text-align:center">leftIcon</td>
<td style="text-align:center">左侧图标</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">icon-time</td>
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
<td style="text-align:center">300</td>
</tr>
<tr>
<td style="text-align:center">disabledHour</td>
<td style="text-align:center">限制小时范围</td>
<td style="text-align:center">function</td>
<td style="text-align:center">-</td>
<td style="text-align:center">function(){}</td>
</tr>
<tr>
<td style="text-align:center">disabledMinute</td>
<td style="text-align:center">限制分钟范围</td>
<td style="text-align:center">function</td>
<td style="text-align:center">-</td>
<td style="text-align:center">function(){}</td>
</tr>
<tr>
<td style="text-align:center">disabledSecond</td>
<td style="text-align:center">限制秒范围</td>
<td style="text-align:center">function</td>
<td style="text-align:center">-</td>
<td style="text-align:center">function(){}</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref, reactive } from "vue";
const time = ref('20:40:59')

const makeRange = (start, end) => {
    const result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}
const disabledHour = () => {
    return makeRange(5, 10).concat(makeRange(19, 23))
}
const disabledMinute = (hour) => {
    if (hour == 17) {
        return makeRange(0, 29)
    }
    if (hour == 18) {
        return makeRange(31, 59)
    }
}
const disabledSecond = (hour, minute) => {
    if (hour == 18 && minute == 30) {
        return makeRange(0, 30)
    }
}

</script>
