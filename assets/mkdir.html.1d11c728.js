import{_ as e,o as a,c as n,e as t}from"./app.678d7e92.js";const s={},d=t(`<h1 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p><code>mkdir</code>\u7528\u6765\u521B\u5EFA\u76EE\u5F55\uFF0C\u591A\u4E2A\u76EE\u5F55\u4E4B\u95F4\u7528\u7A7A\u683C\u9694\u5F00\u3002</p><p>\u8BE5\u547D\u4EE4\u521B\u5EFA\u7531dirname\u547D\u540D\u7684\u76EE\u5F55\u3002\u5982\u679C\u5728\u76EE\u5F55\u540D\u7684\u524D\u9762\u6CA1\u6709\u52A0\u4EFB\u4F55\u8DEF\u5F84\u540D\uFF0C\u5219\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u7531dirname\u6307\u5B9A\u7684\u76EE\u5F55\uFF1B\u5982\u679C\u7ED9\u51FA\u4E86\u4E00\u4E2A\u5DF2\u7ECF\u5B58\u5728\u7684\u8DEF\u5F84\uFF0C\u5C06\u4F1A\u5728\u8BE5\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u6307\u5B9A\u7684\u76EE\u5F55\u3002\u5728\u521B\u5EFA\u76EE\u5F55\u65F6\uFF0C\u5E94\u4FDD\u8BC1\u65B0\u5EFA\u7684\u76EE\u5F55\u4E0E\u5B83\u6240\u5728\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6CA1\u6709\u91CD\u540D\u3002</p><p>\u6CE8\u610F\uFF1A\u5728\u521B\u5EFA\u6587\u4EF6\u65F6\uFF0C\u4E0D\u8981\u628A\u6240\u6709\u7684\u6587\u4EF6\u90FD\u5B58\u653E\u5728\u4E3B\u76EE\u5F55\u4E2D\uFF0C\u53EF\u4EE5\u521B\u5EFA\u5B50\u76EE\u5F55\uFF0C\u901A\u8FC7\u5B83\u4EEC\u6765\u66F4\u6709\u6548\u5730\u7EC4\u7EC7\u6587\u4EF6\u3002\u6700\u597D\u91C7\u7528\u524D\u540E\u4E00\u81F4\u7684\u547D\u540D\u65B9\u5F0F\u6765\u533A\u5206\u6587\u4EF6\u548C\u76EE\u5F55\u3002\u4F8B\u5982\uFF0C\u76EE\u5F55\u540D\u53EF\u4EE5\u4EE5\u5927\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u8FD9\u6837\uFF0C\u5728\u76EE\u5F55\u5217\u8868\u4E2D\u76EE\u5F55\u540D\u5C31\u51FA\u73B0\u5728\u524D\u9762\u3002</p><p>\u5728\u4E00\u4E2A\u5B50\u76EE\u5F55\u4E2D\u5E94\u5305\u542B\u7C7B\u578B\u76F8\u4F3C\u6216\u7528\u9014\u76F8\u8FD1\u7684\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u5E94\u5EFA\u7ACB\u4E00\u4E2A\u5B50\u76EE\u5F55\uFF0C\u5B83\u5305\u542B\u6240\u6709\u7684\u6570\u636E\u5E93\u6587\u4EF6\uFF0C\u53E6\u6709\u4E00\u4E2A\u5B50\u76EE\u5F55\u5E94\u5305\u542B\u7535\u5B50\u8868\u683C\u6587\u4EF6\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5B50\u76EE\u5F55\u5E94\u5305\u542B\u6587\u5B57\u5904\u7406\u6587\u6863\uFF0C\u7B49\u7B49\u3002\u76EE\u5F55\u4E5F\u662F\u6587\u4EF6\uFF0C\u5B83\u4EEC\u548C\u666E\u901A\u6587\u4EF6\u4E00\u6837\u9075\u5FAA\u76F8\u540C\u7684\u547D\u540D\u89C4\u5219\uFF0C\u5E76\u4E14\u5229\u7528\u5168\u8DEF\u5F84\u53EF\u4EE5\u552F\u4E00\u5730\u6307\u5B9A\u4E00\u4E2A\u76EE\u5F55\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#options\u8BF4\u660E" aria-hidden="true">#</a> options\u8BF4\u660E</h2><table><thead><tr><th>\u77ED\u9009\u9879</th><th>\u957F\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-Z</td><td></td><td>\u8BBE\u7F6E\u5B89\u5168\u4E0A\u4E0B\u6587\uFF0C\u5F53\u4F7F\u7528SELinux\u65F6\u6709\u6548\uFF1B</td></tr><tr><td>-m&lt;\u76EE\u6807\u5C5E\u6027&gt;</td><td>--mode&lt;\u76EE\u6807\u5C5E\u6027&gt;</td><td>\u5EFA\u7ACB\u76EE\u5F55\u7684\u540C\u65F6\u8BBE\u7F6E\u76EE\u5F55\u7684\u6743\u9650\uFF1B</td></tr><tr><td><code>-p</code></td><td>--parents</td><td>\u82E5\u6240\u8981\u5EFA\u7ACB\u76EE\u5F55\u7684\u4E0A\u5C42\u76EE\u5F55\u5C1A\u672A\u5EFA\u7ACB\u5219\u4E00\u5E76\u5EFA\u7ACB</td></tr><tr><td></td><td>--version</td><td>\u663E\u793A\u7248\u672C\u4FE1\u606F</td></tr></tbody></table><h3 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h3><p>\u5728\u76EE\u5F55<code>/usr/meng</code>\u4E0B\u5EFA\u7ACB\u5B50\u76EE\u5F55test\uFF0C\u5E76\u4E14\u53EA\u6709\u6587\u4EF6\u4E3B\u6709\u8BFB\u3001\u5199\u548C\u6267\u884C\u6743\u9650\uFF0C\u5176\u4ED6\u4EBA\u65E0\u6743\u8BBF\u95EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-m</span> <span class="token number">700</span> /usr/meng/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u5EFA\u7ACBbin\u548Cbin\u4E0B\u7684os_1\u76EE\u5F55\uFF0C\u6743\u9650\u8BBE\u7F6E\u4E3A\u6587\u4EF6\u4E3B\u53EF\u8BFB\u3001\u5199\u3001\u6267\u884C\uFF0C\u540C\u7EC4\u7528\u6237\u53EF\u8BFB\u548C\u6267\u884C\uFF0C\u5176\u4ED6\u7528\u6237\u65E0\u6743\u8BBF\u95EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p-m <span class="token number">750</span> bin/os_1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),i=[d];function r(c,o){return a(),n("div",null,i)}const h=e(s,[["render",r],["__file","mkdir.html.vue"]]);export{h as default};
