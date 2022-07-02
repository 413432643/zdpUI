<template><div><h1 id="carousel-走马灯" tabindex="-1"><a class="header-anchor" href="#carousel-走马灯" aria-hidden="true">#</a> Carousel 走马灯</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<z-carousel :options="options" :width="300" :height="200"></z-carousel>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
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
</table>
</div></template>

<script setup>
import { ref, computed, reactive } from 'vue';


const state = reactive({
    options: [
        {
            url: 'https://img1.baidu.com/it/u=4109061742,2554968576&fm=253',
            value: 1
        },
        {
            url: 'https://img1.baidu.com/it/u=3942857154,2662308907&fm=253',
            value: 2
        },
        {
            url: 'https://img2.baidu.com/it/u=460488376,1260814254&fm=253',
            value: 3
        },
        {
            url: 'https://img2.baidu.com/it/u=3151809725,3550281418&fm=253',
            value: 4
        },
        {
            url: 'https://img2.baidu.com/it/u=2600419742,2480379272&fm=253',
            value: 5
        },
    ]
})
const { options } = state


</script>
