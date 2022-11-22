import{_ as e,o as a,c as n,e as s}from"./app.678d7e92.js";const d={},i=s(`<p>ldd</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><p><code>ldd\u547D\u4EE4</code>\u7528\u4E8E\u6253\u5370\u7A0B\u5E8F\u6216\u8005\u5E93\u6587\u4EF6\u6240\u4F9D\u8D56\u7684\u5171\u4EAB\u5E93\u5217\u8868\u7684<code>shell</code>\u811A\u672C\u3002\u5176\u539F\u7406\u662F\u901A\u8FC7\u8BBE\u7F6E\u4E00\u7CFB\u5217\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5982\u4E0B\uFF1A<code>LD_TRACE_LOADED_OBJECTS\u3001LD_WARN\u3001LD_BIND_NOW\u3001LD_LIBRARY_VERSION\u3001LD_VERBOSE</code>\u7B49\u3002\u5F53<code>LD_TRACE_LOADED_OBJECTS</code>\u73AF\u5883\u53D8\u91CF\u4E0D\u4E3A\u7A7A\u65F6\uFF0C\u4EFB\u4F55\u53EF\u6267\u884C\u7A0B\u5E8F\u5728\u8FD0\u884C\u65F6\uFF0C\u5B83\u90FD\u4F1A\u53EA\u663E\u793A\u6A21\u5757\u7684dependency\uFF0C\u800C\u7A0B\u5E8F\u5E76\u4E0D\u771F\u6B63\u6267\u884C\u3002</p><p>\u5176\u5B9E\u8D28\u662F\u901A\u8FC7ld-linux.so\uFF08elf\u52A8\u6001\u5E93\u7684\u88C5\u8F7D\u5668\uFF09\u6765\u5B9E\u73B0\u7684\u3002\u6211\u4EEC\u77E5\u9053\uFF0Cld-linux.so\u6A21\u5757\u4F1A\u5148\u4E8Eexecutable\u6A21\u5757\u7A0B\u5E8F\u5DE5\u4F5C\uFF0C\u5E76\u83B7\u5F97\u63A7\u5236\u6743\uFF0C\u56E0\u6B64\u5F53\u4E0A\u8FF0\u7684\u90A3\u4E9B\u73AF\u5883\u53D8\u91CF\u88AB\u8BBE\u7F6E\u65F6\uFF0Cld-linux.so\u9009\u62E9\u4E86\u663E\u793A\u53EF\u6267\u884C\u6A21\u5757\u7684dependency\u3002</p><p>\u5B9E\u9645\u4E0A\u53EF\u4EE5\u76F4\u63A5\u6267\u884Cld-linux.so\u6A21\u5757\uFF0C\u5982\uFF1A<code>/lib/ld-linux.so.2 --list program</code>\uFF08\u8FD9\u76F8\u5F53\u4E8Eldd program\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_TRACE_LOADED_OBJECTS</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ldd<span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--version\uFF1A\u6253\u5370\u6307\u4EE4\u7248\u672C\u53F7\uFF1B
-v\uFF1A\u8BE6\u7EC6\u4FE1\u606F\u6A21\u5F0F\uFF0C\u6253\u5370\u6240\u6709\u76F8\u5173\u4FE1\u606F\uFF1B
-u\uFF1A\u6253\u5370\u672A\u4F7F\u7528\u7684\u76F4\u63A5\u4F9D\u8D56\uFF1B
-d\uFF1A\u6267\u884C\u91CD\u5B9A\u4F4D\u548C\u62A5\u544A\u4EFB\u4F55\u4E22\u5931\u7684\u5BF9\u8C61\uFF1B
-r\uFF1A\u6267\u884C\u6570\u636E\u5BF9\u8C61\u548C\u51FD\u6570\u7684\u91CD\u5B9A\u4F4D\uFF0C\u5E76\u4E14\u62A5\u544A\u4EFB\u4F55\u4E22\u5931\u7684\u5BF9\u8C61\u548C\u51FD\u6570\uFF1B
--help\uFF1A\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[i];function c(r,o){return a(),n("div",null,l)}const u=e(d,[["render",c],["__file","ldd.html.vue"]]);export{u as default};