<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1>
<h3 id="安装组件库" tabindex="-1"><a class="header-anchor" href="#安装组件库" aria-hidden="true">#</a> 安装组件库</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i zdp-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引用组件库" tabindex="-1"><a class="header-anchor" href="#引用组件库" aria-hidden="true">#</a> 引用组件库</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全部引用</span>
<span class="token keyword">import</span> <span class="token string">'zdp-ui/dist/style.css'</span>
<span class="token keyword">import</span> <span class="token constant">ZUI</span> <span class="token keyword">from</span> <span class="token string">'zdp-ui'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">ZUI</span><span class="token punctuation">)</span>

<span class="token comment">// 按需引用</span>
<span class="token keyword">import</span> <span class="token string">'zdp-ui/dist/style.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'zdp-ui'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
