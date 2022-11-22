import{_ as n,o as s,c as a,e}from"./app.678d7e92.js";const t={},c=e(`<p><code>url</code>\u6A21\u5757\u4E3B\u8981\u662F\u7528\u6765\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> urlStr <span class="token operator">=</span> <span class="token string">&quot;http://user:pass@host.com:8080/path/to/file?query=string#hash&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u8F93\u51FA</span>
<span class="token comment">// Url {</span>
<span class="token comment">//     protocol: &#39;http:&#39;,</span>
<span class="token comment">//     slashes: true,</span>
<span class="token comment">//     auth: &#39;user:pass&#39;,</span>
<span class="token comment">//     host: &#39;host.com:8080&#39;,</span>
<span class="token comment">//     port: &#39;8080&#39;,</span>
<span class="token comment">//     hostname: &#39;host.com&#39;,</span>
<span class="token comment">//     hash: &#39;#hash&#39;,</span>
<span class="token comment">//     search: &#39;?query=string&#39;,</span>
<span class="token comment">//     query: &#39;query=string&#39;,</span>
<span class="token comment">//     pathname: &#39;/path/to/file&#39;,</span>
<span class="token comment">//     path: &#39;/path/to/file?query=string&#39;,</span>
<span class="token comment">//     href: &#39;http://user:pass@host.com:8080/path/to/file?query=string#hash&#39;</span>
<span class="token comment">//  }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[c];function l(p,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","url.html.vue"]]);export{u as default};
