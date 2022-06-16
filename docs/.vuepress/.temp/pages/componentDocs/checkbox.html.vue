<template><div><h1 id="checkbox-多选" tabindex="-1"><a class="header-anchor" href="#checkbox-多选" aria-hidden="true">#</a> checkbox 多选</h1>
<z-row>
    <z-col>
        <z-checkbox v-model="checkboxVal" :options="checkOptions" @change="checkChange"></z-checkbox>
    </z-col>
</z-row>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
</div></template>

<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref([]);
const state = reactive({
    checkOptions: [
        { label: "中国", value: "zhongguo" },
        { label: "英国", value: "yingguo" },
        { label: "德国", value: "deguo" },
        { label: "法国", value: "faguo" },
    ],
});
const checkChange = (e) => {
    console.log(e.value, e.index);
};
const { checkOptions } = state;
</script>
