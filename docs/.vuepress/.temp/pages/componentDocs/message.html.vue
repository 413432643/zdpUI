<template><div><h1 id="message-消息提示" tabindex="-1"><a class="header-anchor" href="#message-消息提示" aria-hidden="true">#</a> message 消息提示</h1>
<p>用于主动操作后的反馈提示。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>从顶部出现，3 秒后自动消失,可以通过<code v-pre>duration</code>属性控制显示时间</p>
<z-button  @click='open' style='margin:10px'>message</z-button>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>open<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">open</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"message"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"message"</span><span class="token punctuation">,</span><span class="token literal-property property">duration</span><span class="token operator">:</span><span class="token number">5000</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="不同状态" tabindex="-1"><a class="header-anchor" href="#不同状态" aria-hidden="true">#</a> 不同状态</h3>
<z-button  @click='openMessage' style='margin:10px'>message</z-button>
<z-button @click='openSuccess' type='success' style='margin:10px'>success</z-button>
<z-button @click='openWarning' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='openError' type='danger' style='margin:10px'>error</z-button>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openMessage<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openSuccess<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>success<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openWarning<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>warning<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openError<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>danger<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">openMessage</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"message"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"message"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">openSuccess</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">openWarning</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"warning"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"warning"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">openError</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"error"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"error"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="可关闭的消息提示" tabindex="-1"><a class="header-anchor" href="#可关闭的消息提示" aria-hidden="true">#</a> 可关闭的消息提示</h3>
<z-button  @click='openMessage1' style='margin:10px'>message</z-button>
<z-button @click='openSuccess1' type='success' style='margin:10px'>success</z-button>
<z-button @click='openWarning1' type='warning' style='margin:10px'>warning</z-button>
<z-button @click='openError1' type='danger' style='margin:10px'>error</z-button>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openMessage<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openSuccess<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>success<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openWarning<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>warning<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>openError<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>danger<span class="token punctuation">'</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">'</span></span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">openMessage</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"message"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"message"</span><span class="token punctuation">,</span><span class="token literal-property property">isClose</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">openSuccess</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"success"</span><span class="token punctuation">,</span><span class="token literal-property property">isClose</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">openWarning</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"warning"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"warning"</span><span class="token punctuation">,</span><span class="token literal-property property">isClose</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">openError</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">"error"</span><span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"error"</span><span class="token punctuation">,</span><span class="token literal-property property">isClose</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
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
<td style="text-align:center">type</td>
<td style="text-align:center">消息类型</td>
<td style="text-align:center">string</td>
<td style="text-align:center">'success' / 'warning' / 'message' / 'error'</td>
<td style="text-align:center">'message'</td>
</tr>
<tr>
<td style="text-align:center">message</td>
<td style="text-align:center">消息文字</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">message</td>
</tr>
<tr>
<td style="text-align:center">isClose</td>
<td style="text-align:center">是否显示关闭按钮</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">-</td>
<td style="text-align:center">false</td>
</tr>
<tr>
<td style="text-align:center">leftIcon</td>
<td style="text-align:center">自定义图标，该属性会覆盖 type 的图标</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">duration</td>
<td style="text-align:center">显示时间，单位为毫秒</td>
<td style="text-align:center">number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">3000</td>
</tr>
</tbody>
</table>
</div></template>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();

const open=()=>{
    instance.proxy.$message({type:"message",message:"message",duration:5000})
}

const openMessage =()=>{
    instance.proxy.$message({type:"message",message:"message"})
}
const openSuccess =()=>{
    instance.proxy.$message({type:"success",message:"success"})
}
const openWarning =()=>{
    instance.proxy.$message({type:"warning",message:"warning"})
}
const openError =()=>{
    instance.proxy.$message({type:"error",message:"error"})
}

const openMessage1 =()=>{
    instance.proxy.$message({type:"message",message:"message",isClose:true})
}
const openSuccess1 =()=>{
    instance.proxy.$message({type:"success",message:"success",isClose:true})
}
const openWarning1 =()=>{
    instance.proxy.$message({type:"warning",message:"warning",isClose:true})
}
const openError1 =()=>{
    instance.proxy.$message({type:"error",message:"error",isClose:true})
}
</script>
