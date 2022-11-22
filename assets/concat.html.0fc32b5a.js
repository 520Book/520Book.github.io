import{_ as n,o as a,c as s,e as t}from"./app.678d7e92.js";const e={},p=t(`<p><code>concat()</code>\u65B9\u6CD5\u7528\u4E8E\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\u3002\u8BE5\u65B9\u6CD5<code>\u4E0D\u4F1A\u6539\u53D8</code>\u73B0\u6709\u7684\u6570\u7EC4\uFF0C\u800C\u4EC5\u4EC5\u4F1A\u8FD4\u56DE\u88AB\u8FDE\u63A5\u6570\u7EC4\u7684\u4E00\u4E2A<code>\u526F\u672C</code>\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arrayObject<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>\u53C2\u6570</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>valueX</td><td>\u5FC5\u9700</td><td>\u8BE5\u53C2\u6570\u53EF\u4EE5\u662F\u5177\u4F53\u7684\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4\u5BF9\u8C61\u3002\u53EF\u4EE5\u662F\u4EFB\u610F\u591A\u4E2A\u3002</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u3002\u8BE5\u6570\u7EC4\u662F\u901A\u8FC7\u628A\u6240\u6709<code>arrayX</code>\u53C2\u6570\u6DFB\u52A0\u5230<code>arrayObject</code>\u4E2D\u751F\u6210\u7684\u3002\u5982\u679C\u8981\u8FDB\u884C<code>concat()</code>\u64CD\u4F5C\u7684\u53C2\u6570\u662F\u6570\u7EC4\uFF0C\u90A3\u4E48\u6DFB\u52A0\u7684\u662F\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\uFF0C\u800C\u4E0D\u662F\u6570\u7EC4\u3002</p><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><h3 id="\u4F8B\u5B50-1" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-1" aria-hidden="true">#</a> \u4F8B\u5B50 1</h3><p>\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u628A<code>concat()</code>\u4E2D\u7684\u53C2\u6570\u8FDE\u63A5\u5230\u6570\u7EC4<code>a</code>\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F8B\u5B50-2" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-2" aria-hidden="true">#</a> \u4F8B\u5B50 2</h3><p>\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E24\u4E2A\u6570\u7EC4\uFF0C\u7136\u540E\u4F7F\u7528 concat() \u628A\u5B83\u4EEC\u8FDE\u63A5\u8D77\u6765\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;George&quot;</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Thomas&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;James&quot;</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Adrew&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//[ &#39;George&#39;, &#39;John&#39;, &#39;Thomas&#39;, &#39;James&#39;, &#39;Adrew&#39;, ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u6570\u7EC4<code>arr2</code>\u662F\u6709\u4E09\u4E2A\u5143\u7D20\u7684\uFF01</p></blockquote><h3 id="\u4F8B\u5B50-3" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-3" aria-hidden="true">#</a> \u4F8B\u5B50 3</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;George&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token string">&quot;James&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;William&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// [ &#39;George&#39;, &#39;James&#39;, 9, &#39;William&#39;, { age: 6 } ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> arr3<span class="token punctuation">,</span> arr4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F8B\u5B504" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B504" aria-hidden="true">#</a> \u4F8B\u5B504</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;helloworld&quot;</span> <span class="token operator">===</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;yes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// yes</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C<code>concat</code>\u4E5F\u662F\u53EF\u4EE5\u4F5C\u7528\u4E8E<code>\u5B57\u7B26\u4E32</code>\u7684\uFF0C\u4F46\u662F\uFF0C<code>\u4E0D\u80FD</code>\u4F5C\u7528\u4E8E<code>\u6570\u5B57</code>\uFF01</p>`,19),o=[p];function c(l,u){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","concat.html.vue"]]);export{r as default};