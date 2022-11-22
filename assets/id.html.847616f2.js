import{_ as a,o as n,c as s,e}from"./app.678d7e92.js";const p={},t=e(`<h1 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h1><p>\u8BE5\u547D\u4EE4\u662F<code>GNU coreutils</code>\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>man -s 1 id</code>\uFF0C<code>info coreutils &#39;id invocation&#39;</code>\u3002\u6253\u5370\u771F\u5B9E\u4EE5\u53CA\u6709\u6548\u7684\u7528\u6237\u548C\u6240\u5728\u7EC4\u7684\u4FE1\u606F</p><h2 id="\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a> \u6982\u8981</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">id</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span><span class="token environment constant">USER</span><span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a> \u4E3B\u8981\u7528\u9014</h2><ul><li>\u6CA1\u6709\u9009\u9879\u65F6\uFF0C\u6253\u5370\u6307\u5B9A\u7528\u6237ID\u4FE1\u606F\u3002</li></ul><h2 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-a</span>               \u517C\u5BB9\u6027\u9009\u9879\uFF0C\u6CA1\u6709\u5B9E\u9645\u4F5C\u7528\u3002
-Z, <span class="token parameter variable">--context</span>    \u53EA\u6253\u5370\u8FDB\u7A0B\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002
-g, <span class="token parameter variable">--group</span>      \u53EA\u6253\u5370\u6709\u6548\u7684\u7EC4ID\u3002
-G, <span class="token parameter variable">--groups</span>     \u6253\u5370\u5168\u90E8\u7EC4ID\u3002
-u, <span class="token parameter variable">--user</span>       \u53EA\u6253\u5370\u6709\u6548\u7684\u7528\u6237ID\u3002
-z, <span class="token parameter variable">--zero</span>       \u4F7F\u7528\u7A7A\u5B57\u7B26\u4EE3\u66FF\u9ED8\u8BA4\u7684\u7A7A\u683C\u6765\u5206\u9694\u6761\u76EE\u3002
<span class="token parameter variable">--help</span>           \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\u3002
<span class="token parameter variable">--version</span>        \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user\uFF08\u53EF\u9009\uFF09\uFF1A\u53EF\u4EE5\u4E3A\u4E00\u5230\u591A\u4E2A\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u7528\u6237\u3002</p><p>\u53EA\u6709\u5728\u4F7F\u7528 <code>-u</code> <code>-g</code> <code>-G</code> \u9009\u9879\u4E2D\u4E00\u5230\u591A\u4E2A\u65F6\uFF0C\u4EE5\u4E0B\u9009\u9879\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-n, <span class="token parameter variable">--name</span>    \u6253\u5370\u540D\u79F0\u800C\u4E0D\u662F\u6570\u5B57\u3002
-r, <span class="token parameter variable">--real</span>    \u6253\u5370\u771F\u5B9EID\u800C\u4E0D\u662F\u6709\u6548ID\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u8FD4\u56DE0\u8868\u793A\u6210\u529F\uFF0C\u8FD4\u56DE\u975E0\u503C\u8868\u793A\u5931\u8D25\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>,1<span class="token punctuation">(</span>bin<span class="token punctuation">)</span>,2<span class="token punctuation">(</span>daemon<span class="token punctuation">)</span>,3<span class="token punctuation">(</span>sys<span class="token punctuation">)</span>,4<span class="token punctuation">(</span>adm<span class="token punctuation">)</span>,6<span class="token punctuation">(</span>disk<span class="token punctuation">)</span>,10<span class="token punctuation">(</span>wheel<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u91CA\uFF1A\u7528\u6237root\u7684UID\u53F7\u7801 = 0\uFF0CGID\u53F7\u7801 = 0\u3002\u7528\u6237root\u662F\u4E0B\u9762\u7EC4\u7684\u6210\u5458\uFF1A</p><ul><li>root\u7EC4GID\u53F7\u662F\uFF1A0</li><li>bin\u7EC4GID\u53F7\u662F\uFF1A1</li><li>daemon\u7EC4GID\u53F7\u662F\uFF1A2</li><li>sys\u7EC4GID\u53F7\u662F\uFF1A3</li><li>adm\u7EC4GID\u53F7\u662F\uFF1A4</li><li>disk\u7EC4GID\u53F7\u662F\uFF1A6</li><li>wheel\u7EC4GID\u53F7\u662F\uFF1A10</li></ul><p>\u6253\u5370\u7528\u6237\u540D\u3001UID \u548C\u8BE5\u7528\u6237\u6240\u5C5E\u7684\u6240\u6709\u7EC4\uFF0C\u8981\u8FD9\u4E48\u505A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 -a \u9009\u9879\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># id -a</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>,1<span class="token punctuation">(</span>bin<span class="token punctuation">)</span>,2<span class="token punctuation">(</span>daemon<span class="token punctuation">)</span>,3<span class="token punctuation">(</span>sys<span class="token punctuation">)</span>,4<span class="token punctuation">(</span>adm<span class="token punctuation">)</span>,6<span class="token punctuation">(</span>disk<span class="token punctuation">)</span>,10<span class="token punctuation">(</span>wheel<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u6240\u6709\u4E0D\u540C\u7684\u7EC4ID \uFF0C\u6709\u6548\u7684\uFF0C\u771F\u5B9E\u7684\u548C\u8865\u5145\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 -G \u9009\u9879\u6765\u5B9E\u73B0\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># id -G</span>
<span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u53EA\u4F1A\u663E\u793AGID\u53F7\u3002\u4F60\u53EF\u4EE5\u548C<code>/etc/group</code>\u6587\u4EF6\u6BD4\u8F83\u3002\u4E0B\u9762\u662F<code>/etc/group</code>\u6587\u4EF6\u7684\u793A\u4F8B\u5185\u5BB9\uFF1A</p><p>\u53EA\u8F93\u51FA\u6709\u6548\u7684\u7EC4ID\uFF0C\u901A\u8FC7\u4F7F\u7528 -g \u9009\u9879\u6765\u53EA\u8F93\u51FA\u6709\u6548\u7EC4ID\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># id -g</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7279\u5B9A\u7528\u6237\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8F93\u51FA\u7279\u5B9A\u7684\u7528\u6237\u4FE1\u606F\u76F8\u5173\u7684UID\u548CGID\u3002\u53EA\u9700\u8981\u5728id\u547D\u4EE4\u540E\u8DDF\u4E0A\u7528\u6237\u540D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># id www</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>www<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>www<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>www<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><ol><li><p>\u8BE5\u547D\u4EE4\u53EF\u4EE5\u663E\u793A\u771F\u5B9E\u6709\u6548\u7684\u7528\u6237ID(UID)\u548C\u7EC4ID(GID)\u3002UID \u662F\u5BF9\u4E00\u4E2A\u7528\u6237\u7684\u5355\u4E00\u8EAB\u4EFD\u6807\u8BC6\u3002\u7EC4ID\uFF08GID\uFF09\u5219\u5BF9\u5E94\u591A\u4E2AUID\uFF1B\u4E00\u4E9B\u7A0B\u5E8F\u53EF\u80FD\u9700\u8981UID/GID\u6765\u8FD0\u884C\u3002<code>id</code> \u4F7F\u6211\u4EEC\u66F4\u52A0\u5BB9\u6613\u5730\u627E\u51FA\u7528\u6237\u7684UID\u4EE5\u53CAGID\uFF0C\u800C\u4E0D\u5FC5\u5728 <code>/etc/group</code> \u6587\u4EF6\u4E2D\u641C\u5BFB\u3002</p></li><li></li></ol>`,28),o=[t];function i(c,l){return n(),s("div",null,o)}const r=a(p,[["render",i],["__file","id.html.vue"]]);export{r as default};
