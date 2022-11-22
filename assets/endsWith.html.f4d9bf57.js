import{_ as n,o as s,c as a,e as t}from"./app.678d7e92.js";const e={},o=t(`<h1 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h1><p><code>endsWith</code>\u65B9\u6CD5\u7528\u6765\u5224\u65AD\u5F53\u524D\u5B57\u7B26\u4E32\u662F\u5426\u662F\u4EE5\u53E6\u5916\u4E00\u4E2A\u7ED9\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32\u201C\u7ED3\u5C3E\u201D\u7684\uFF0C\u6839\u636E\u5224\u65AD\u7ED3\u679C\u8FD4\u56DE<code>true</code>\u6216<code>false</code>\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><blockquote><p>str.endsWith(searchString[, length])</p></blockquote><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><p><code>searchString</code>\u662F\u8981\u641C\u7D22\u7684\u5B50\u5B57\u7B26\u4E32\u3002 <code>length</code>\u53EF\u9009\uFF0C\u4F5C\u4E3A<code>str</code>\u7684\u957F\u5EA6\u3002\u9ED8\u8BA4\u503C\u4E3A<code>str.length</code>\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u5982\u679C\u4F20\u5165\u7684\u5B50\u5B57\u7B26\u4E32\u5728\u641C\u7D22\u5B57\u7B26\u4E32\u7684\u672B\u5C3E\u5219\u8FD4\u56DE<code>true</code>\uFF0C\u5426\u5219\u5C06\u8FD4\u56DE <code>false</code>\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A \u8FD9\u4E2A\u65B9\u6CD5\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002</p></blockquote><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><h2 id="\u4F8B\u5B501" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B501" aria-hidden="true">#</a> \u4F8B\u5B501</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&quot;To be, or not to be, that is the question.&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">&quot;\u6211\u7231\u5317\u4EAC\u5929\u5B89\u95E8\uFF01&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;question.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;to be&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;to be&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;to BE&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;\u5929\u5B89\u95E8\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;\u5929\u5B89\u95E8!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function c(u,i){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","endsWith.html.vue"]]);export{r as default};
