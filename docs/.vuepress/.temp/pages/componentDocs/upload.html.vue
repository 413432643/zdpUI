<template><div><h1 id="upload-上传" tabindex="-1"><a class="header-anchor" href="#upload-上传" aria-hidden="true">#</a> upload 上传</h1>
<p>通过点击或者拖拽上传文件</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<z-upload multiple name="上传文件" ></z-upload>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-upload</span> <span class="token attr-name">multiple</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上传文件<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-upload</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h3 id="预览图片上传" tabindex="-1"><a class="header-anchor" href="#预览图片上传" aria-hidden="true">#</a> 预览图片上传</h3>
<z-upload multiple pic></z-upload>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-upload</span> <span class="token attr-name">multiple</span> <span class="token attr-name">pic</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-upload</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="拖拽上传" tabindex="-1"><a class="header-anchor" href="#拖拽上传" aria-hidden="true">#</a> 拖拽上传</h3>
<p>通过 <code v-pre>drag</code> 属性可以将文件拖拽到特定区域以进行上传。</p>
<z-upload multiple drag></z-upload>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-upload</span> <span class="token attr-name">multiple</span> <span class="token attr-name">drag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-upload</span><span class="token punctuation">></span></span>
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
</tbody>
</table>
</div></template>
