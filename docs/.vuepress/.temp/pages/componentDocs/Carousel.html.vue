<template><div><h1 id="carousel-走马灯" tabindex="-1"><a class="header-anchor" href="#carousel-走马灯" aria-hidden="true">#</a> Carousel 走马灯</h1>
<p>循环播放同一类型的图片、文字等内容</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<z-carousel :options="options" showPointer></z-carousel>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-carousel</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-carousel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="自动播放" tabindex="-1"><a class="header-anchor" href="#自动播放" aria-hidden="true">#</a> 自动播放</h3>
<z-carousel :options="options" showPointer auto :autoItem="2000" ></z-carousel>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-carousel</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">showPointer</span> <span class="token attr-name">auto</span> <span class="token attr-name">:autoItem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2000<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-carousel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="垂直滚动" tabindex="-1"><a class="header-anchor" href="#垂直滚动" aria-hidden="true">#</a> 垂直滚动</h3>
<z-carousel :options="options" showPointer auto :autoItem="2000" vertical></z-carousel>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-carousel</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">showPointer</span> <span class="token attr-name">auto</span> <span class="token attr-name">:autoItem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2000<span class="token punctuation">"</span></span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-carousel</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="carousel-属性" tabindex="-1"><a class="header-anchor" href="#carousel-属性" aria-hidden="true">#</a> carousel 属性</h3>
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
<td style="text-align:center">width</td>
<td style="text-align:center">主体宽度</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">300</td>
</tr>
<tr>
<td style="text-align:center">height</td>
<td style="text-align:center">主体高度</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">200</td>
</tr>
<tr>
<td style="text-align:center">urlF</td>
<td style="text-align:center">自定义url的字段名</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">url</td>
</tr>
<tr>
<td style="text-align:center">valueF</td>
<td style="text-align:center">自定义value的字段名</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">value</td>
</tr>
<tr>
<td style="text-align:center">auto</td>
<td style="text-align:center">自动播放</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">showPointer</td>
<td style="text-align:center">是否显示圆点指示器</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">valueF</td>
<td style="text-align:center">播放时间间隔</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">1000</td>
</tr>
<tr>
<td style="text-align:center">vertical</td>
<td style="text-align:center">垂直滚动</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">false</td>
</tr>
</tbody>
</table>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3>
<table>
<thead>
<tr>
<th style="text-align:center">url</th>
<th style="text-align:center">展示图片地址</th>
<th style="text-align:center">string</th>
<th style="text-align:center">-</th>
<th style="text-align:center">url</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">value</td>
<td style="text-align:center">默认值</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">value</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref, computed, reactive } from 'vue';


const state = reactive({
    options: [
        {
            url: 'https://img1.baidu.com/it/u=4109061742,2554968576&fm=253',
            value: 0
        },
        {
            url: 'https://img1.baidu.com/it/u=3942857154,2662308907&fm=253',
            value: 1
        },
        {
            url: 'https://img2.baidu.com/it/u=460488376,1260814254&fm=253',
            value: 2
        },
        {
            url: 'https://img2.baidu.com/it/u=3151809725,3550281418&fm=253',
            value: 3
        },
        {
            url: 'https://img2.baidu.com/it/u=2600419742,2480379272&fm=253',
            value: 4
        },
    ]
})
const { options } = state




</script>
