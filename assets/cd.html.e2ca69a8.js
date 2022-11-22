import{_ as a,o as s,c as n,e}from"./app.678d7e92.js";const d={},i=e(`<h1 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p><code>cd</code>\u4E3A<code>shell</code>\u5185\u7F6E\u547D\u4EE4\uFF0C\u7528\u4E8E\u5207\u6362\u7528\u6237\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>-L<span class="token operator">|</span><span class="token punctuation">[</span>-P <span class="token punctuation">[</span>-e<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#options\u8BF4\u660E" aria-hidden="true">#</a> options\u8BF4\u660E</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-L</td><td>\uFF08\u9ED8\u8BA4\u503C\uFF09\u5982\u679C\u8981\u5207\u6362\u5230\u7684\u76EE\u6807\u76EE\u5F55\u662F\u4E00\u4E2A\u7B26\u53F7\u8FDE\u63A5\uFF0C\u90A3\u4E48\u5207\u6362\u5230\u7B26\u53F7\u8FDE\u63A5\u7684\u76EE\u5F55\u3002</td></tr><tr><td>-P</td><td>\u5982\u679C\u8981\u5207\u6362\u5230\u7684\u76EE\u6807\u76EE\u5F55\u662F\u4E00\u4E2A\u7B26\u53F7\u8FDE\u63A5\uFF0C\u90A3\u4E48\u5207\u6362\u5230\u5B83\u6307\u5411\u7684\u7269\u7406\u4F4D\u7F6E\u76EE\u5F55\u3002</td></tr></tbody></table><h2 id="\u57FA\u7840\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BF4\u660E" aria-hidden="true">#</a> \u57FA\u7840\u8BF4\u660E</h2><ul><li>\u82E5\u7701\u7565<code>dir</code>\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528shell\u53D8\u91CF<code>HOME</code>\uFF0C\u548C<code>cd ~</code>\u7B49\u4EF7\u3002</li><li><code>dir</code>\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\uFF0C<code>.</code>\u8868\u793A\u5F53\u524D\u76EE\u5F55\uFF0C<code>..</code>\u8868\u793A\u5F53\u524D\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7\u76EE\u5F55\u3002</li><li><code>-</code>\u8868\u793A\u4E0A\u4E00\u4E2A\u76EE\u5F55\uFF0C\u7B49\u4EF7\u4E8E<code>$OLDPWD</code>\u3002</li></ul><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u8FD4\u56DE\u72B6\u6001\u4E3A\u6210\u529F\uFF0C\u9664\u975E\u65E0\u6CD5\u8FDB\u5165\u6307\u5B9A\u7684\u76EE\u5F55\u3002</p><h2 id="\u5173\u4E8E\u73AF\u5883\u53D8\u91CFcdpath" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u73AF\u5883\u53D8\u91CFcdpath" aria-hidden="true">#</a> \u5173\u4E8E\u73AF\u5883\u53D8\u91CFCDPATH</h2><p>\u73AF\u5883\u53D8\u91CF<code>CDPATH</code>\u662F\u7531\u5192\u53F7\u5206\u5272\u7684\u4E00\u5230\u591A\u4E2A\u76EE\u5F55\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5E38\u53BB\u7684\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7\u52A0\u5165\u5230<code>CDPATH</code>\u4EE5\u4FBF\u65B9\u4FBF\u8BBF\u95EE\u5B83\u4EEC\u3002</p><p>\u5982\u679C<code>CDPATH</code>\u5B58\u5728\u503C\uFF0C\u90A3\u4E48\u4F18\u5148\u5728<code>CDPATH</code>\u4E2D\u67E5\u627E\u5E76\u8FDB\u5165\u7B2C\u4E00\u4E2A\u5339\u914D\u6210\u529F\u7684\uFF0C\u5982\u679C\u5168\u90E8\u5931\u8D25\u5219\u5C1D\u8BD5\u5F53\u524D\u76EE\u5F55\u3002</p><p>\u5982\u679C<code>dir</code>\u5728<code>CDPATH</code>\u53CA\u5F53\u524D\u76EE\u5F55\u4E0B\u5747\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u4F1A\u628A\u5B83\u5F53\u4F5C\u53D8\u91CF\uFF0C\u8BFB\u53D6\u5B83\u7684\u503C\u4F5C\u4E3A\u8981\u8FDB\u5165\u7684\u76EE\u5F55\u3002</p><p>\u5982\u679C<code>dir</code>\u4EE5<code>/</code>\u5F00\u5934\uFF0C\u90A3\u4E48<code>CDPATH</code>\u4E0D\u4F1A\u88AB\u4F7F\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u4E0D\u540C\u76EE\u5F55\u4E0B\u65B0\u5EFA\u540C\u540D\u6587\u4EF6\u5939</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/Other/test
<span class="token function">mkdir</span> ~/test

<span class="token comment"># \u8BBE\u7F6ECDPATH\u4E3AOther\u6587\u4EF6\u5939</span>
<span class="token assign-left variable">CDPATH</span><span class="token operator">=</span><span class="token string">&#39;~/Other&#39;</span>

<span class="token builtin class-name">cd</span> ~
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token comment"># \u6267\u884C\u540E\u663E\u793A~/Other/test\u5E76\u8FDB\u5165\u8BE5\u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5173\u4E8Ecdable-vars" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Ecdable-vars" aria-hidden="true">#</a> \u5173\u4E8Ecdable_vars</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5F00\u9009\u9879\u3002</span>
<span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> cdable_vars
<span class="token comment"># \u5047\u8BBE\u5F53\u524D\u8DEF\u5F84\u4EE5\u53CACDPATH\u6CA1\u6709\u540D\u4E3Anew_var\u7684\u76EE\u5F55\u3002</span>
<span class="token assign-left variable">new_var</span><span class="token operator">=</span><span class="token string">&#39;~/Desktop&#39;</span>
<span class="token comment"># \u5C1D\u8BD5\u8FDB\u5165\u3002</span>
<span class="token builtin class-name">cd</span> new_var
<span class="token comment"># \u5173\u95ED\u9009\u9879\u3002</span>
<span class="token builtin class-name">shopt</span> <span class="token parameter variable">-u</span> cdable_vars
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u7528\u6237\u4E3B\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span>
<span class="token builtin class-name">cd</span> ~

<span class="token comment"># \u8FD4\u56DE\u4E0A\u7EA7\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment"># \u8FD4\u56DE\u4E0A\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[i];function l(t,o){return s(),n("div",null,c)}const p=a(d,[["render",l],["__file","cd.html.vue"]]);export{p as default};
