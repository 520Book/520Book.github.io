import{_ as e,o as n,c as a,e as s}from"./app.678d7e92.js";const d={},t=s(`<h1 id="dirname" tabindex="-1"><a class="header-anchor" href="#dirname" aria-hidden="true">#</a> dirname</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>dirname</code>\u4ECE\u6587\u4EF6\u8DEF\u5F84\u4E2D\u83B7\u53D6\u6587\u4EF6\u76EE\u5F55\uFF0C\u4F5C\u7528\u4E0E<code>basename</code>\u76F8\u53CD\uFF0C<code>basename</code>\u7528\u4E8E\u83B7\u53D6\u6587\u4EF6\u540D\u3002</p><p>\u5982\u679C\u6587\u4EF6\u8DEF\u5F84\u4E2D\u4E0D\u5305\u542B<code>/</code>\uFF0C\u90A3\u4E48\u8F93\u51FA<code>.</code>\u8868\u793A\u5F53\u524D\u76EE\u5F55\u3002\u5982\u679C\u6587\u4EF6\u8DEF\u5F84\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u662F<code>/</code>\uFF0C\u90A3\u4E48\u5265\u79BB\u5012\u6570\u7B2C\u4E8C\u4E2A<code>/</code>\u53CA\u5176\u540E\u7684\u5185\u5BB9\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">dirname</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span> NAME<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="option\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#option\u8BF4\u660E" aria-hidden="true">#</a> OPTION\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">--help</td><td>\u663E\u793A\u5E2E\u52A9</td></tr><tr><td style="text-align:center;">--version</td><td>\u663E\u793A\u7248\u672C\u53F7</td></tr></tbody></table><h3 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># /test</span>
<span class="token function">dirname</span> /test/a.sh

<span class="token comment"># /usr</span>
<span class="token function">dirname</span> /usr/bin/

<span class="token comment"># nodeJS</span>
<span class="token function">dirname</span> nodeJS/test.txt

<span class="token comment"># ./nodeJS</span>
<span class="token function">dirname</span> ./nodeJS/a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[t];function c(r,o){return n(),a("div",null,i)}const h=e(d,[["render",c],["__file","dirname.html.vue"]]);export{h as default};