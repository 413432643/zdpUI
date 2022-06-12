<template><div><h1 id="layout-布局" tabindex="-1"><a class="header-anchor" href="#layout-布局" aria-hidden="true">#</a> layout 布局</h1>
<h3 id="基础布局" tabindex="-1"><a class="header-anchor" href="#基础布局" aria-hidden="true">#</a> 基础布局</h3>
<z-row>
    <z-col span=24><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row>
    <z-col span=12><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=12><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
</z-row>
<z-row>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
</z-row>
<z-row>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
</z-row>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;z-row>
    &lt;z-col span=24>&lt;/z-col>
&lt;/z-row>
&lt;z-row>
    &lt;z-col span=12>&lt;/z-col>
    &lt;z-col span=12>&lt;/z-col>
&lt;/z-row>
&lt;z-row>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
&lt;/z-row>
&lt;z-row>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
&lt;/z-row>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="分栏间隔" tabindex="-1"><a class="header-anchor" href="#分栏间隔" aria-hidden="true">#</a> 分栏间隔</h3>
<z-row gutter=20>
    <z-col span=24><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=12><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=12><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=3><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;z-row gutter=20>
    &lt;z-col span=24>&lt;/z-col>
&lt;/z-row>
&lt;z-row gutter=20>
    &lt;z-col span=12>&lt;/z-col>
    &lt;z-col span=12>&lt;/z-col>
&lt;/z-row>
&lt;z-row gutter=20>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
&lt;/z-row>
&lt;z-row gutter=20>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
    &lt;z-col span=3>&lt;/z-col>
&lt;/z-row>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="列偏移" tabindex="-1"><a class="header-anchor" href="#列偏移" aria-hidden="true">#</a> 列偏移</h3>
<z-row gutter=20>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6 offault=4><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 offault=4><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<z-row gutter=20>
    <z-col span=6 offault=6><div style="height:40px;background: #e5e9f2;border-radius: 4px;"></div></z-col>
    <z-col span=6 offault=6><div style="height:40px;background: #d3dce6;border-radius: 4px;"></div></z-col>
</z-row>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;z-row>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
&lt;/z-row>
&lt;z-row gutter=20>
    &lt;z-col span=6 offault=4>&lt;/z-col>
    &lt;z-col span=6 offault=4>&lt;/z-col>
&lt;/z-row>
&lt;z-row gutter=20>
    &lt;z-col span=6>&lt;/z-col>
    &lt;z-col span=6>&lt;/z-col>
&lt;/z-row>
&lt;z-row gutter=20>
    &lt;z-col span=6 offault=6>&lt;/z-col>
    &lt;z-col span=6 offault=6>&lt;/z-col>
&lt;/z-row>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="row-属性" tabindex="-1"><a class="header-anchor" href="#row-属性" aria-hidden="true">#</a> Row 属性</h3>
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
<td style="text-align:center">gutter</td>
<td style="text-align:center">栅格间隔</td>
<td style="text-align:center">number</td>
<td style="text-align:center">—</td>
<td style="text-align:center">0</td>
</tr>
</tbody>
</table>
<h3 id="col-属性" tabindex="-1"><a class="header-anchor" href="#col-属性" aria-hidden="true">#</a> Col 属性</h3>
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
<td style="text-align:center">span</td>
<td style="text-align:center">栅格占据的列数</td>
<td style="text-align:center">number</td>
<td style="text-align:center">—</td>
<td style="text-align:center">24</td>
</tr>
</tbody>
</table>
</div></template>
