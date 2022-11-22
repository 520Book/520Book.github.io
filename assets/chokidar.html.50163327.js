import{_ as n,o as s,c as a,e as t}from"./app.678d7e92.js";const e={},o=t(`<p>chokidar \u6A21\u5757\u53EF\u4EE5\u66F4\u597D\u7684\u5BF9\u6587\u4EF6\u8FDB\u884C\u76D1\u63A7</p><h1 id="\u57FA\u672C\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u5B9E\u4F8B" aria-hidden="true">#</a> \u57FA\u672C\u5B9E\u4F8B</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> chokidar <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;chokidar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// One-liner for current directory</span>
chokidar<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function p(i,u){return s(),a("div",null,c)}const r=n(e,[["render",p],["__file","chokidar.html.vue"]]);export{r as default};
