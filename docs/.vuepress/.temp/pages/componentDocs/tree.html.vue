<template><div><h1 id="tree-树形控件" tabindex="-1"><a class="header-anchor" href="#tree-树形控件" aria-hidden="true">#</a> tree 树形控件</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<z-tree v-model="treeVal" :options="options"></z-tree>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>这是一个 details 标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
</div></template>

<script setup>
import { ref, reactive } from "vue";

const treeVal = ref([]);

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
</script>
