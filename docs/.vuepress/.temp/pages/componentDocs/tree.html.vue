<template><div><h1 id="tree-树形控件" tabindex="-1"><a class="header-anchor" href="#tree-树形控件" aria-hidden="true">#</a> tree 树形控件</h1>
<p>用清晰的层级结构展示信息，可展开或折叠。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>树形结构展示</p>
<z-tree v-model="treeVal" :options="options"></z-tree>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-tree</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>treeVal<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-tree</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeVal <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1-1-1'</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1-1-2'</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> state
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="自定义属性名" tabindex="-1"><a class="header-anchor" href="#自定义属性名" aria-hidden="true">#</a> 自定义属性名</h3>
<p>通过<code v-pre>childrenF</code>，<code v-pre>labelF</code>属性，自定义<code v-pre>label</code>，<code v-pre>children</code>属性名</p>
<z-tree v-model="treeVal1" :options="options1" childrenF="son" labelF="title"></z-tree>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-tree</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>treeVal<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">childrenF</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>son<span class="token punctuation">"</span></span> <span class="token attr-name">labelF</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-tree</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeVal <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">son</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">son</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'1-1-1'</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'1-1-2'</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">son</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">son</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> state
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="可选择" tabindex="-1"><a class="header-anchor" href="#可选择" aria-hidden="true">#</a> 可选择</h3>
<p>适用于需要选择层级时使用。</p>
<z-tree v-model="treeVal" :options="options" checkbox></z-tree>
<h3 id="tree-属性" tabindex="-1"><a class="header-anchor" href="#tree-属性" aria-hidden="true">#</a> tree 属性</h3>
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
<td style="text-align:center">options</td>
<td style="text-align:center">数据源</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">v-model</td>
<td style="text-align:center">当前选中的值</td>
<td style="text-align:center">Array</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">childrenF</td>
<td style="text-align:center">自定义children属性名</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">children</td>
</tr>
<tr>
<td style="text-align:center">labelF</td>
<td style="text-align:center">自定义label属性名</td>
<td style="text-align:center">String</td>
<td style="text-align:center">-</td>
<td style="text-align:center">label</td>
</tr>
<tr>
<td style="text-align:center">checkbox</td>
<td style="text-align:center">是否可选择</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">false</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref, reactive } from "vue";

const treeVal = ref(['']);

const state = reactive({
    options: [
        {
            id: 1,
            label: '1',
            children: [
                {
                    id: 4,
                    label: '1-1',
                    children: [
                        {
                            id: 9,
                            label: '1-1-1',
                        },
                        {
                            id: 10,
                            label: '1-1-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: '2',
            children: [
                {
                    id: 5,
                    label: '2-1',
                },
                {
                    id: 6,
                    label: '2-2',
                },
            ],
        },
        {
            id: 3,
            label: '3',
            children: [
                {
                    id: 7,
                    label: '3-1',
                },
                {
                    id: 8,
                    label: '3-2',
                },
            ],
        },
    ]

})

const { options } = state

const treeVal1 = ref([]);

const state1 = reactive({
    options: [
        {
            id: 1,
            title: '1',
            son: [
                {
                    id: 4,
                    title: '1-1',
                    son: [
                        {
                            id: 9,
                            title: '1-1-1',
                        },
                        {
                            id: 10,
                            title: '1-1-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: '2',
            son: [
                {
                    id: 5,
                    title: '2-1',
                },
                {
                    id: 6,
                    title: '2-2',
                },
            ],
        },
        {
            id: 3,
            title: '3',
            son: [
                {
                    id: 7,
                    title: '3-1',
                },
                {
                    id: 8,
                    title: '3-2',
                },
            ],
        },
    ]

})


const { options:options1 } = state1
</script>
