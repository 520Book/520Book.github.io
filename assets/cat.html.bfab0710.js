import{_ as e,r as n,o as s,c as d,a as t,b as o,d as c,e as r}from"./app.678d7e92.js";const i={},l=r(`<h1 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h1><h1 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h1><p>\u8FDE\u63A5\u591A\u4E2A\u6587\u4EF6\u5E76\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a> \u4E3B\u8981\u7528\u9014</h2><ul><li>\u663E\u793A\u6587\u4EF6\u5185\u5BB9\uFF0C\u5982\u679C\u6CA1\u6709\u6587\u4EF6\u6216\u6587\u4EF6\u4E3A<code>-</code>\u5219\u8BFB\u53D6\u6807\u51C6\u8F93\u5165\u3002</li><li>\u5C06\u591A\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u8FDB\u884C\u8FDE\u63A5\u5E76\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\u3002</li><li>\u663E\u793A\u6587\u4EF6\u5185\u5BB9\u4E2D\u7684\u4E0D\u53EF\u89C1\u5B57\u7B26\uFF08\u63A7\u5236\u5B57\u7B26\u3001\u6362\u884C\u7B26\u3001\u5236\u8868\u7B26\u7B49\uFF09\u3002</li></ul><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>FILE\uFF08\u53EF\u9009\uFF09\uFF1A\u8981\u5904\u7406\u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4E3A\u4E00\u6216\u591A\u4E2A\u3002</p><h2 id="options\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#options\u8BF4\u660E" aria-hidden="true">#</a> options\u8BF4\u660E</h2><table><thead><tr><th>\u77ED\u9009\u9879</th><th>\u957F\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-A</td><td>--show-all</td><td>\u7B49\u4EF7\u4E8E<code>-vET</code>\u7EC4\u5408\u9009\u9879</td></tr><tr><td>-b</td><td>--number-nonblank</td><td>\u53EA\u5BF9\u975E\u7A7A\u884C\u7F16\u53F7\uFF0C\u4ECE1\u5F00\u59CB\u7F16\u53F7\uFF0C\u8986\u76D6&quot;-n&quot;\u9009\u9879</td></tr><tr><td>-e</td><td></td><td>\u7B49\u4EF7\u4E8E&quot;-vE&quot;\u7EC4\u5408\u9009\u9879</td></tr><tr><td>-E</td><td>--show-ends</td><td>\u5728\u6BCF\u884C\u7684\u7ED3\u5C3E\u663E\u793A<code>$</code>\u5B57\u7B26</td></tr><tr><td>-n</td><td>--number</td><td>\u5BF9\u6240\u6709\u884C\u7F16\u53F7\uFF0C\u4ECE1\u5F00\u59CB\u7F16\u53F7</td></tr><tr><td>-s</td><td>--squeeze-blank</td><td>\u538B\u7F29\u8FDE\u7EED\u7684\u7A7A\u884C\u5230\u4E00\u884C</td></tr><tr><td>-t</td><td></td><td>\u7B49\u4EF7\u4E8E&quot;-vT&quot;\u7EC4\u5408\u9009\u9879</td></tr><tr><td>-T</td><td>--show-tabs</td><td>\u4F7F\u7528&quot;^I&quot;\u8868\u793ATAB\uFF08\u5236\u8868\u7B26\uFF09</td></tr><tr><td>-u</td><td></td><td>POSIX\u517C\u5BB9\u6027\u9009\u9879\uFF0C\u65E0\u610F\u4E49\u3002</td></tr><tr><td>-v</td><td>--show-nonprinting</td><td>\u4F7F\u7528&quot;^&quot;\u548C&quot;M-&quot;\u7B26\u53F7\u663E\u793A\u63A7\u5236\u5B57\u7B26\uFF0C\u9664\u4E86LFD\uFF08line feed\uFF0C\u5373\u6362\u884C\u7B26&#39;\\n&#39;\uFF09\u548CTAB\uFF08\u5236\u8868\u7B26\uFF09</td></tr><tr><td></td><td>--help</td><td>\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA</td></tr><tr><td></td><td>--version</td><td>\u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u8FD4\u56DE\u72B6\u6001\u4E3A\u6210\u529F\uFF0C\u9664\u975E\u7ED9\u51FA\u4E86\u975E\u6CD5\u9009\u9879\u6216\u975E\u6CD5\u53C2\u6570\u3002</p><h2 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5408\u5E76\u663E\u793A\u591A\u4E2A\u6587\u4EF6</span>
<span class="token function">cat</span> ./1.log ./2.log ./3.log
<span class="token comment"># \u663E\u793A\u6587\u4EF6\u4E2D\u7684\u975E\u6253\u5370\u5B57\u7B26\u3001tab\u3001\u6362\u884C\u7B26</span>
<span class="token function">cat</span> <span class="token parameter variable">-A</span> test.log
<span class="token comment"># \u538B\u7F29\u6587\u4EF6\u7684\u7A7A\u884C</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> test.log
<span class="token comment"># \u663E\u793A\u6587\u4EF6\u5E76\u5728\u6240\u6709\u884C\u5F00\u5934\u9644\u52A0\u884C\u53F7</span>
<span class="token function">cat</span> <span class="token parameter variable">-n</span> test.log
<span class="token comment"># \u663E\u793A\u6587\u4EF6\u5E76\u5728\u6240\u6709\u975E\u7A7A\u884C\u5F00\u5934\u9644\u52A0\u884C\u53F7</span>
<span class="token function">cat</span> <span class="token parameter variable">-b</span> test.log
<span class="token comment"># \u5C06\u6807\u51C6\u8F93\u5165\u7684\u5185\u5BB9\u548C\u6587\u4EF6\u5185\u5BB9\u4E00\u5E76\u663E\u793A</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;######&#39;</span> <span class="token operator">|</span><span class="token function">cat</span> - test.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><ol><li>\u8BE5\u547D\u4EE4\u662F<code>GNU coreutils</code>\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>man -s 1 cat</code>\u6216<code>info coreutils &#39;cat invocation&#39;</code>\u3002</li><li>\u5F53\u4F7F\u7528<code>cat</code>\u547D\u4EE4\u67E5\u770B<strong>\u4F53\u79EF\u8F83\u5927\u7684\u6587\u4EF6</strong>\u65F6\uFF0C\u6587\u672C\u5728\u5C4F\u5E55\u4E0A\u8FC5\u901F\u95EA\u8FC7\uFF08\u6EDA\u5C4F\uFF09\uFF0C\u7528\u6237\u5F80\u5F80\u770B\u4E0D\u6E05\u6240\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4E3A\u4E86\u63A7\u5236\u6EDA\u5C4F\uFF0C\u53EF\u4EE5\u6309<code>Ctrl+s</code>\u952E\u505C\u6B62\u6EDA\u5C4F\uFF1B\u6309<code>Ctrl+q</code>\u952E\u6062\u590D\u6EDA\u5C4F\uFF1B\u6309<code>Ctrl+c</code>\uFF08\u4E2D\u65AD\uFF09\u952E\u53EF\u4EE5\u7EC8\u6B62\u8BE5\u547D\u4EE4\u7684\u6267\u884C\uFF0C\u8FD4\u56DEShell\u63D0\u793A\u7B26\u72B6\u6001\u3002</li><li>\u5EFA\u8BAE\u60A8\u67E5\u770B<strong>\u4F53\u79EF\u8F83\u5927\u7684\u6587\u4EF6</strong>\u65F6\u4F7F\u7528<code>less</code>\u3001<code>more</code>\u547D\u4EE4\u6216<code>emacs</code>\u3001<code>vi</code>\u7B49\u6587\u672C\u7F16\u8F91\u5668\u3002</li></ol><h3 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h3>`,18),h={href:"https://superuser.com/questions/328054/is-there-an-lfd-key-on-my-keyboard",target:"_blank",rel:"noopener noreferrer"};function p(u,b){const a=n("ExternalLinkIcon");return s(),d("div",null,[l,t("ol",null,[t("li",null,[t("a",h,[o("Question about LFD key"),c(a)])])])])}const v=e(i,[["render",p],["__file","cat.html.vue"]]);export{v as default};
