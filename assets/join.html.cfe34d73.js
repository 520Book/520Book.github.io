import{_ as n,o as a,c as s,e as t}from"./app.678d7e92.js";const e={},o=t(`<p><code>join()</code>\u65B9\u6CD5\u5C06\u4E00\u4E2A\u6570\u7EC4\uFF08\u6216\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF09\u7684\u6240\u6709\u5143\u7D20\u8FDE\u63A5\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5B57\u7B26\u4E32\u3002</p><blockquote><p>PS\uFF1A join() \u65B9\u6CD5\uFF0C<code>\u4E0D\u4F1A</code>\u6539\u53D8\u6570\u7EC4\uFF01</p></blockquote><h1 id="\u57FA\u672C\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u672C\u77E5\u8BC6</h1><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>separator</td><td>\u5426</td><td>\u5982\u679C\u7701\u7565\uFF0C\u6570\u7EC4\u5143\u7D20\u9ED8\u8BA4\u7528\u9017\u53F7\u5206\u9694\u3002</td></tr></tbody></table><blockquote><p>\u5982\u679C<code>separator</code>\u672C\u8EAB\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u4E5F\u4F1A\u5148\u5C06<code>separator</code>\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u3002</p></blockquote><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u4E00\u4E2A\u6240\u6709\u6570\u7EC4\u5143\u7D20\u8FDE\u63A5\u7684\u5B57\u7B26\u4E32\u3002\u5982\u679C<code>arr.length</code>\u4E3A<code>0</code>\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002</p><h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u6240\u6709\u7684\u6570\u7EC4\u5143\u7D20\u88AB\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u518D\u7528\u4E00\u4E2A\u5206\u9694\u7B26\u5C06\u8FD9\u4E9B\u5B57\u7B26\u4E32\u8FDE\u63A5\u8D77\u6765\u3002\u5982\u679C\u67D0\u4E2A\u5143\u7D20\u662F<code>undefined</code>\u6216\u8005<code>null</code>\uFF0C \u5219\u4F1A\u8F6C\u5316\u6210\u7A7A\u5B57\u7B26\u4E32\u3002</p><h1 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h1><h2 id="\u5B9E\u4F8B1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B1" aria-hidden="true">#</a> \u5B9E\u4F8B1</h2><p>\u4F7F\u7528\u56DB\u79CD\u4E0D\u540C\u7684\u5206\u9694\u7B26\u8FDE\u63A5\u6570\u7EC4\u5143\u7D20\u8282</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Wind&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Rain&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fire&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Wind,Rain,Fire</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// WindRainFire</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Wind88Rain88Fire</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Wind+Rain+Fire</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u4F8B2" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B2" aria-hidden="true">#</a> \u5B9E\u4F8B2</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> h<span class="token punctuation">;</span>
<span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Wind&quot;</span><span class="token punctuation">,</span> h<span class="token punctuation">,</span> g<span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Wind,,[object Object],NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=[o];function c(i,u){return a(),s("div",null,p)}const r=n(e,[["render",c],["__file","join.html.vue"]]);export{r as default};
