import{_ as n,o as s,c as a,e as t}from"./app.678d7e92.js";const e={},o=t(`<h1 id="configsync" tabindex="-1"><a class="header-anchor" href="#configsync" aria-hidden="true">#</a> configSync</h1><p>\u5C06\u5BF9\u8C61\u5199\u5165\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u5148\u51C6\u5907\u4E00\u4E2A<code>dev.env</code>\uFF0C\u5185\u5BB9\u4E3A<code>APP_NAME = testApp</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> configSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std/dotenv/mod.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> env<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">;</span>
<span class="token function">configSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./.env.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>env<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token keyword">export</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> appName <span class="token operator">=</span> Deno<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;APP_NAME&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> appName <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="parse\u7684\u89E3\u6790\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#parse\u7684\u89E3\u6790\u89C4\u5219" aria-hidden="true">#</a> Parse\u7684\u89E3\u6790\u89C4\u5219</h1><ul><li>BASIC=basic \u53D8\u6210 {BASIC: &#39;basic&#39;}</li><li>\u7A7A\u884C\u88AB\u8DF3\u8FC7</li><li>\u4EE5#\u5F00\u5934\u7684\u884C\u88AB\u89C6\u4E3A\u6CE8\u91CA</li><li>\u7A7A\u503C\u53D8\u6210\u7A7A\u5B57\u7B26\u4E32\uFF08EMPTY=\u6210\u4E3A{EMPTY: &#39;&#39;}\uFF09</li><li>\u4FDD\u6301\u5185\u90E8\u5F15\u53F7\uFF08\u8BA4\u4E3AJSON\uFF09\uFF08JSON={&quot;foo&quot;: &quot;bar&quot;}\u53D8\u4E3A{JSON:&quot;{&quot;foo&quot;: &quot;bar&quot;}&quot;\uFF09</li><li>\u7A7A\u683C\u4ECE\u672A\u52A0\u5F15\u53F7\u7684\u503C\u7684\u4E24\u7AEF\u5220\u9664\uFF08\u8BF7\u53C2\u9605\u4E0A\u7684\u66F4\u591A\u4FE1\u606Ftrim\uFF09\uFF08FOO= some value\u6210\u4E3A{FOO: &#39;some value&#39;}\uFF09</li><li>\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7\u88AB\u8F6C\u4E49\uFF08SINGLE_QUOTE=&#39;quoted&#39;\u6210\u4E3A{SINGLE_QUOTE: &quot;quoted&quot;}\uFF09</li><li>\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7\u7684\u503C\u5728\u4E24\u7AEF\u90FD\u4FDD\u6301\u7A7A\u767D\uFF08FOO=&quot; some value &quot;\u53D8\u4E3A{FOO: &#39; some value &#39;}\uFF09</li><li>\u53CC\u5F15\u53F7\u6269\u5C55\u65B0\u884C\uFF08MULTILINE=&quot;new\\nline&quot;\u6210\u4E3A</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>MULTILINE: <span class="token string">&#39;new
line&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[o];function i(c,l){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","dotenv.html.vue"]]);export{r as default};
