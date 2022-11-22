import{_ as s,o as e,c as a,e as n}from"./app.678d7e92.js";const i={},c=n(`<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>exit</code>\u662Fbash\u5185\u5EFA\u547D\u4EE4\uFF0C\u4F7F<code>shell</code>\u4EE5\u6307\u5B9A\u7684\u503C\u9000\u51FA\u3002\u82E5\u4E0D\u8BBE\u7F6E\u53C2\u6570\uFF0C\u5219\u4EE5<code>\u6700\u540E\u4E00\u6761\u547D\u4EE4\u7684\u8FD4\u56DE\u503C</code>\u4F5C\u4E3A\u8FD4\u56DE\u503C\u9000\u51FA\u3002</p><p>\u4F46\u662F\u6709\u65F6\u5019\u4F7F\u7528<code>exit</code>\u547D\u4EE4\u6211\u4EEC\u7684\u7A0B\u5E8F\u8FD8\u662F\u4F1A\u7EE7\u7EED\u8FD0\u884C\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u4F7F\u7528<code>exit</code>\u547D\u4EE4\u9000\u51FA\u7EC8\u7AEF\u65F6\u4E0D\u4F1A\u5411\u7EC8\u7AEF\u6240\u5C5E\u4EFB\u52A1\u53D1<code>SIGHUP</code>\u4FE1\u53F7\uFF0C\u8FD9\u662F<code>huponexit</code>\u914D\u7F6E\u9879\u63A7\u5236\u7684\uFF0C\u9ED8\u8BA4\u662F<code>off</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>shopt</code>\u547D\u4EE4\u67E5\u770B\u3002\u5C06<code>huponexit</code>\u914D\u7F6E\u6210<code>on</code>\uFF0C\u518D\u6B21\u4F7F\u7528<code>exit</code>\u547D\u4EE4\u9000\u51FA\uFF0C\u6240\u5C5E\u7684\u4EFB\u52A1\u5C31\u4F1A\u8DDF\u968F\u9000\u51FA\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">exit</span> <span class="token punctuation">[</span>n<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u4F60<code>n</code>\u5927\u4E8E255\u6216\u5C0F\u4E8E0\uFF0C\u90A3\u4E48\u4F1A\u901A\u8FC7\u52A0\u6216\u51CF<code>256</code>\u7684\u65B9\u5F0F\u4F7F\u5F97\u8FD4\u56DE\u503C\u603B\u662F\u5904\u4E8E<code>0\u5230255</code>\u4E4B\u95F4\u3002</p></blockquote><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u8FD4\u56DE\u503C\u4E3A\u4F60\u6307\u5B9A\u7684\u53C2\u6570n\u7684\u503C\u3002\u72B6\u6001\u503C0\u4EE3\u8868\u6267\u884C\u6210\u529F\uFF0C\u5176\u4ED6\u503C\u4EE3\u8868\u6267\u884C\u5931\u8D25\u3002</p><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u9636" aria-hidden="true">#</a> \u8FDB\u9636</h1><p>\u9664\u4E86\u4F7F\u7528<code>exit</code>\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>ctrl+d</code>\u9000\u51FA\u5F53\u524D\u7EC8\u7AEF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5F00ctrl+d</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> ignoreeof

<span class="token comment"># \u5173\u95EDctrl+d</span>
<span class="token builtin class-name">set</span> +o ignoreeof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u811A\u672C\u4E2D\uFF0C\u8FDB\u5165\u811A\u672C\u6240\u5728\u76EE\u5F55\uFF0C\u5426\u5219\u9000\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $0<span class="token variable">)</span></span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u811A\u672C\u4E2D\uFF0C\u5224\u65AD\u53C2\u6570\u6570\u91CF\uFF0C\u4E0D\u5339\u914D\u5C31\u6253\u5370\u4F7F\u7528\u65B9\u5F0F\uFF0C\u9000\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$#</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token string">&quot;2&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;usage: <span class="token variable">$0</span> &lt;area&gt; &lt;hours&gt;&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u811A\u672C\u4E2D\uFF0C\u9000\u51FA\u65F6\u5220\u9664\u4E34\u65F6\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">trap</span> <span class="token string">&quot;rm -f tmpfile; echo Bye.&quot;</span> EXIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),l=[c];function o(d,t){return e(),a("div",null,l)}const r=s(i,[["render",o],["__file","exit.html.vue"]]);export{r as default};
