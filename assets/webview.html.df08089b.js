import{_ as n,o as s,c as a,e as t}from"./app.678d7e92.js";const e={},p=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// deno run -A --unstable web.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Webview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/webview/mod.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello from deno v</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Deno<span class="token punctuation">.</span>version<span class="token punctuation">.</span>deno<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1&gt;
  &lt;/body&gt;
  &lt;/html&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> webview <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Webview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

webview<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">data:text/html, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webview<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","webview.html.vue"]]);export{r as default};
