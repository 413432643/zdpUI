<template><div><h1 id="pagination-分页" tabindex="-1"><a class="header-anchor" href="#pagination-分页" aria-hidden="true">#</a> pagination 分页</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<z-pagination :pagesizeOption="options" v-model="current" :total="600" :pagesize="20" :jump="3"></z-pagination>
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
import { ref ,reactive} from 'vue';
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
