import{_ as r,g as o,r as k,o as g,c as v,b as t,d as s,e as u,a as e}from"./app.eb02876e.js";const h=s("h1",{id:"date-\u65E5\u671F\u9009\u62E9\u5668",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#date-\u65E5\u671F\u9009\u62E9\u5668","aria-hidden":"true"},"#"),u(" date \u65E5\u671F\u9009\u62E9\u5668")],-1),m=s("p",null,"\u7528\u4E8E\u9009\u62E9\u6216\u8F93\u5165\u65E5\u671F",-1),y=s("h3",{id:"\u9009\u62E9\u65E5\u671F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u9009\u62E9\u65E5\u671F","aria-hidden":"true"},"#"),u(" \u9009\u62E9\u65E5\u671F")],-1),b=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>day<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">currentSign</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u62E9\u65E5\u671F<span class="token punctuation">&quot;</span></span> <span class="token attr-name">clearable</span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> day <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;2022-07-03&#39;</span><span class="token punctuation">)</span>


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u9009\u62E9\u6708\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u6708\u4EFD" aria-hidden="true">#</a> \u9009\u62E9\u6708\u4EFD</h3><p>\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027 <code>type</code> \u4E3A <code>month</code> \u9009\u62E9\u6708\u4EFD</p>`,3),x=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>month<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u62E9\u6708\u4EFD<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">&gt;</span></span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u9009\u62E9\u5E74\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5E74\u4EFD" aria-hidden="true">#</a> \u9009\u62E9\u5E74\u4EFD</h3><p>\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027 <code>type</code> \u4E3A <code>year</code> \u9009\u62E9\u5E74\u4EFD</p>`,3),q=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>year<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u62E9\u5E74\u4EFD<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u9009\u62E9\u591A\u4E2A\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u591A\u4E2A\u65E5\u671F" aria-hidden="true">#</a> \u9009\u62E9\u591A\u4E2A\u65E5\u671F</h3><p>\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027 <code>dates</code> \u4E3A <code>dates</code> \u9009\u62E9\u591A\u4E2A\u65E5\u671F</p>`,3),_=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dates<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9009\u62E9\u591A\u4E2A\u65E5\u671F<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u9650\u5236\u9009\u62E9\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u9009\u62E9\u8303\u56F4" aria-hidden="true">#</a> \u9650\u5236\u9009\u62E9\u8303\u56F4</h3><p>\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027 <code>disabledDate</code> \u4F20\u5165 <code>[\u8D77\u59CB\u65E5\u671F(\u683C\u5F0F:yyyy-mm-dd),\u7ED3\u675F\u65E5\u671F(\u683C\u5F0F:yyyy-mm-dd)]</code>\u9650\u5236\u9009\u62E9\u8303\u56F4</p>`,3),f=e(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>z-date</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dates<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9650\u5236\u9009\u62E9\u8303\u56F4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabledDate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabledDate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>z-date</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> disabledDate <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;2022-07-20&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2022-08-30&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="data\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#data\u5C5E\u6027" aria-hidden="true">#</a> Data\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">v-model</td><td style="text-align:center;">\u5F53\u524D\u7ED1\u5B9A\u503C (\u683C\u5F0F\uFF1Ayyyy-mm-dd)</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;">\u5360\u4F4D\u6587\u672C</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">currentSign</td><td style="text-align:center;">\u6807\u8BB0\u5F53\u5929</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">\u663E\u793A\u7C7B\u578B</td><td style="text-align:center;">String</td><td style="text-align:center;">date/month/year/dates</td><td style="text-align:center;">date</td></tr><tr><td style="text-align:center;">clearable</td><td style="text-align:center;">\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">disabledDate</td><td style="text-align:center;">\u9650\u5236\u9009\u62E9\u8303\u56F4(\u683C\u5F0F\uFF1A[yyyy-mm-dd,yyyy-mm-dd])</td><td style="text-align:center;">array</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table><h3 id="data\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#data\u4E8B\u4EF6" aria-hidden="true">#</a> Data\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td style="text-align:center;">\u8FD4\u56DE\u5F53\u524D\u9009\u4E2D\u65E5\u671F</td></tr></tbody></table><h3 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">dateTop</td><td style="text-align:center;">data\u5934\u90E8\u63D2\u69FD</td></tr></tbody></table>`,7),z={__name:"date.html",setup(D){const p=o("2022-07-03"),a=l=>{console.log(l)},i=o(["2022-07-20","2022-08-30"]);return(l,c)=>{const n=k("z-date");return g(),v("div",null,[h,m,y,t(n,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=d=>p.value=d),currentSign:"",placeholder:"\u9009\u62E9\u65E5\u671F",clearable:"",onChange:a},null,8,["modelValue"]),b,t(n,{type:"month",placeholder:"\u9009\u62E9\u6708\u4EFD",onChange:a}),x,t(n,{type:"year",placeholder:"\u9009\u62E9\u5E74\u4EFD",onChange:a}),q,t(n,{type:"dates",placeholder:"\u9009\u62E9\u591A\u4E2A\u65E5\u671F",onChange:a}),_,t(n,{type:"dates",placeholder:"\u9650\u5236\u9009\u62E9\u8303\u56F4",onChange:a,disabledDate:i.value},null,8,["disabledDate"]),f])}}};var S=r(z,[["__file","date.html.vue"]]);export{S as default};