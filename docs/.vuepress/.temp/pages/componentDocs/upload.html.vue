<template><div><h1 id="upload-上传" tabindex="-1"><a class="header-anchor" href="#upload-上传" aria-hidden="true">#</a> upload 上传</h1>
<p>通过点击或者拖拽上传文件</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>通过 <code v-pre>slot</code> 你可以传入自定义的文字提示.
通过 <code v-pre>multiple</code> 属性一次上传多个文件.
通过 <code v-pre>maxSize</code> 属性设置上传文件大小，单位为mb，默认10mb.
通过 <code v-pre>limit</code> 属性设置上传文件个数，默认10个.
通过 <code v-pre>accept</code> 属性可限制文件的格式.</p>
<z-upload name="上传文件" :maxSize="1" multiple :limit="3" accept="image/*" @change="change"> 
    <template #tip>
        <div style="font-size:12px">仅限上传3个＜1M的图片格式文件</div>
    </template>
</z-upload>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-upload</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上传文件<span class="token punctuation">"</span></span> <span class="token attr-name">:maxSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span> <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span> <span class="token attr-name">@change="change</span><span class="token punctuation">></span> 
    <span class="token attr-name">&lt;template</span> <span class="token attr-name">#tip</span><span class="token punctuation">></span>
        <span class="token attr-name">&lt;div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>12px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>仅限上传＜1M的图片格式文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-upload</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="图片预览上传" tabindex="-1"><a class="header-anchor" href="#图片预览上传" aria-hidden="true">#</a> 图片预览上传</h3>
<p>通过 <code v-pre>pic</code> 属性可以上传并预览图片。</p>
<z-upload multiple pic accept="image/*"></z-upload>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-upload</span> <span class="token attr-name">multiple</span> <span class="token attr-name">pic</span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-upload</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="图片列表缩略图" tabindex="-1"><a class="header-anchor" href="#图片列表缩略图" aria-hidden="true">#</a> 图片列表缩略图</h3>
<p>通过 <code v-pre>picture</code> 属性可以改变列表样式。</p>
<z-upload multiple picture accept="image/*"></z-upload>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-upload</span> <span class="token attr-name">multiple</span> <span class="token attr-name">picture</span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-upload</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="拖拽上传" tabindex="-1"><a class="header-anchor" href="#拖拽上传" aria-hidden="true">#</a> 拖拽上传</h3>
<p>通过 <code v-pre>drag</code> 属性可以将文件拖拽到特定区域以进行上传。</p>
<z-upload multiple drag></z-upload>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-upload</span> <span class="token attr-name">multiple</span> <span class="token attr-name">drag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-upload</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="upload属性" tabindex="-1"><a class="header-anchor" href="#upload属性" aria-hidden="true">#</a> upload属性</h3>
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
<td style="text-align:center">multiple</td>
<td style="text-align:center">是否支持多选文件</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true/false</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">name</td>
<td style="text-align:center">按钮名称</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">选择文件</td>
</tr>
<tr>
<td style="text-align:center">drag</td>
<td style="text-align:center">是否启用拖拽上传</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true/false</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">pic</td>
<td style="text-align:center">可预览上传图片</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true/false</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">picture</td>
<td style="text-align:center">图片列表缩略图</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">true/false</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">maxSize</td>
<td style="text-align:center">上传文件大小</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">10 (单位m)</td>
</tr>
<tr>
<td style="text-align:center">limit</td>
<td style="text-align:center">上传文件个数</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">10</td>
</tr>
<tr>
<td style="text-align:center">accept</td>
<td style="text-align:center">上传文件格式</td>
<td style="text-align:center">String</td>
<td style="text-align:center">image/*</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tip</td>
<td style="text-align:center">提示说明文字</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<table>
<thead>
<tr>
<th style="text-align:center">事件名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">change</td>
<td style="text-align:center">返回选择后的文件列表</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
const change = (list) => {
    console.log(list)
}

</script>
