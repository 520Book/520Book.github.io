import{_ as e,o as a,c as n,e as s}from"./app.678d7e92.js";const d={},t=s(`<h1 id="userdel" tabindex="-1"><a class="header-anchor" href="#userdel" aria-hidden="true">#</a> userdel</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><strong>userdel\u547D\u4EE4</strong> \u7528\u4E8E\u5220\u9664\u7ED9\u5B9A\u7684\u7528\u6237\uFF0C\u4EE5\u53CA\u4E0E\u7528\u6237\u76F8\u5173\u7684\u6587\u4EF6\u3002\u82E5\u4E0D\u52A0\u9009\u9879\uFF0C\u5219\u4EC5\u5220\u9664\u7528\u6237\u5E10\u53F7\uFF0C\u800C\u4E0D\u5220\u9664\u76F8\u5173\u6587\u4EF6\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>userdel<span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9009\u9879\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u8BF4\u660E" aria-hidden="true">#</a> \u9009\u9879\u8BF4\u660E</h2><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-f</td><td>\u5F3A\u5236\u5220\u9664\u7528\u6237\uFF0C\u5373\u4F7F\u7528\u6237\u5F53\u524D\u5DF2\u767B\u5F55\uFF1B</td></tr><tr><td>-r</td><td>\u5220\u9664\u7528\u6237\u7684\u540C\u65F6\uFF0C\u5220\u9664\u4E0E\u7528\u6237\u76F8\u5173\u7684\u6240\u6709\u6587\u4EF6\u3002</td></tr></tbody></table><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u7528\u6237linuxde\uFF0C\u4F46\u4E0D\u5220\u9664\u5176\u5BB6\u76EE\u5F55\u53CA\u6587\u4EF6</span>
<span class="token function">userdel</span> linuxde

<span class="token comment"># \u5220\u9664\u7528\u6237linuxde\uFF0C\u5176\u5BB6\u76EE\u5F55\u53CA\u6587\u4EF6\u4E00\u5E76\u5220\u9664</span>
<span class="token function">userdel</span> <span class="token parameter variable">-r</span> linuxde
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[t];function i(l,c){return a(),n("div",null,r)}const u=e(d,[["render",i],["__file","userdel.html.vue"]]);export{u as default};
