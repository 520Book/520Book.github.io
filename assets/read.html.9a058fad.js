import{_ as n,o as a,c as s,e}from"./app.678d7e92.js";const t={},i=e(`<h1 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>read</code>\u4ECE\u952E\u76D8\u8BFB\u53D6\u53D8\u91CF\u7684\u503C\uFF0C\u901A\u5E38\u7528\u6765\u4E0E\u7528\u6237\u4EA4\u4E92\u3002</p><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728\u811A\u672C\u7684\u6700\u540E\u52A0\u5165<code>read -n 1</code>\u6765\u9632\u6B62\u811A\u672C\u95EA\u9000\u3002</p><p>\u8BE5\u547D\u4EE4\u53EF\u4EE5\u4E00\u6B21\u8BFB\u53D6\u591A\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u53D8\u91CF\u548C\u8F93\u5165\u7684\u503C\u90FD\u9700\u8981\u4F7F\u7528<code>\u7A7A\u683C</code>\u9694\u5F00\u3002</p><p>\u5728read\u547D\u4EE4\u540E\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u53D8\u91CF\u540D\uFF0C\u8BFB\u53D6\u7684\u6570\u636E\u5C06\u88AB\u81EA\u52A8\u8D4B\u503C\u7ED9\u7279\u5B9A\u7684\u53D8\u91CF<code>REPLY</code>\u3002</p><p>\u5F53\u4F7F\u7528\u91CD\u5B9A\u5411\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8BFB\u53D6\u6587\u4EF6\u4E2D\u7684\u4E00\u884C\u6570\u636E\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token punctuation">[</span>-ers<span class="token punctuation">]</span> <span class="token punctuation">[</span>-a aname<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d delim<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i text<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n nchars<span class="token punctuation">]</span> <span class="token punctuation">[</span>-N nchars<span class="token punctuation">]</span> 
     <span class="token punctuation">[</span>-p prompt<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t timeout<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u fd<span class="token punctuation">]</span> <span class="token punctuation">[</span>name <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-a</td><td>\u540E\u8DDF\u4E00\u4E2A\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u4F1A\u88AB\u8BA4\u4E3A\u662F\u4E2A<code>\u6570\u7EC4</code>\uFF0C\u7136\u540E\u7ED9\u5176\u8D4B\u503C\uFF0C\u9ED8\u8BA4\u662F\u4EE5<strong>\u7A7A\u683C</strong>\u4E3A\u5206\u5272\u7B26\u3002</td></tr><tr><td>-d</td><td>\u540E\u9762\u8DDF\u4E00\u4E2A\u6807\u5FD7\u7B26\uFF0C\u5176\u5B9E\u53EA\u6709\u5176\u540E\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u6709\u7528\uFF0C\u4F5C\u4E3A<strong>\u7ED3\u675F</strong>\u7684\u6807\u5FD7\u3002</td></tr><tr><td>-p</td><td>\u5728\u8F93\u5165\u524D\u6253\u5370<strong>\u63D0\u793A\u4FE1\u606F</strong></td></tr><tr><td>-e</td><td>\u5728\u8F93\u5165\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u8865\u5168\u529F\u80FD\u3002</td></tr><tr><td>-n</td><td>\u540E\u8DDF\u4E00\u4E2A\u6570\u5B57\uFF0C\u5B9A\u4E49<code>\u8F93\u5165\u6587\u672C\u7684\u957F\u5EA6</code>\uFF0C\u8FBE\u5230\u6307\u5B9A\u6570\u91CF\u5B57\u7B26\u540E\u547D\u4EE4\u81EA\u884C\u7ED3\u675F\u3002</td></tr><tr><td>-r</td><td>\u5141\u8BB8\u8F93\u5165\u53CD\u659C\u6760<code>\\</code>\uFF0C\u5426\u5219<code>\\</code>\u5C06\u88AB\u4F5C\u4E3A\u8F6C\u4E49\u5B57\u7B26\u3002</td></tr><tr><td>-s</td><td><strong>\u5B89\u9759\u6A21\u5F0F</strong>\uFF0C\u5728\u8F93\u5165\u5B57\u7B26\u65F6\u4E0D\u663E\u793A\uFF0C\u5E38\u7528\u4E8E\u8F93\u5165\u5BC6\u7801\u3002</td></tr><tr><td>-t</td><td>\u5B9A\u4E49\u8F93\u5165\u5B57\u7B26\u7684\u7B49\u5F85\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A<strong>\u79D2</strong>\uFF09</td></tr><tr><td>-u</td><td>\u540E\u9762\u8DDFfd\uFF0C\u4ECE\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E2D\u8BFB\u5165\uFF0C\u8BE5\u6587\u4EF6\u63CF\u8FF0\u7B26\u53EF\u4EE5\u662Fexec\u65B0\u5F00\u542F\u7684\u3002</td></tr></tbody></table><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE\u6807\u51C6\u8F93\u5165\u8BFB\u53D6\u4E00\u884C\u5E76\u8D4B\u503C\u7ED9\u53D8\u91CFREPLY</span>
<span class="token builtin class-name">read</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">REPLY</span>}</span>

<span class="token comment"># \u4ECE\u8F93\u5165\u4E2D\u8BFB\u53D6\u4E24\u4E2A\u5B57\u7B26\u5E76\u5B58\u5165\u53D8\u91CFvar\uFF0C\u4E0D\u9700\u8981\u6309\u56DE\u8F66\u3002</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-n</span> <span class="token number">2</span> var

<span class="token comment"># \u7528\u5B9A\u754C\u7B26\u201C:\u201D\u7ED3\u675F\u8F93\u5165\u884C</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;:&quot;</span> var

<span class="token comment"># \u8BFB\u53D6\u8F93\u5165\u5E76\u8D4B\u503C\u7ED9\u53D8\u91CFname</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&#39;Please input your name: &#39;</span> name
<span class="token builtin class-name">echo</span> <span class="token variable">\${name}</span>

<span class="token comment"># \u8F93\u5165\u5BC6\u7801</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;\u8F93\u5165\u5BC6\u7801\uFF1A&quot;</span> <span class="token parameter variable">-s</span> <span class="token builtin class-name">pwd</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${pwd}</span>

<span class="token comment"># \u4ECE\u6807\u51C6\u8F93\u5165\u8BFB\u53D6\u8F93\u5165\u5230\u7B2C\u4E00\u4E2A\`\u7A7A\u683C\`\u6216\u8005\`\u56DE\u8F66\`\uFF0C</span>
<span class="token comment"># \u5C06\u8F93\u5165\u7684\u7B2C\u4E00\u4E2A\u5355\u8BCD\u653E\u5230\u53D8\u91CFfirst\u4E2D\uFF0C\u5E76\u5C06\u8BE5\u884C\u5176\u4ED6\u7684\u8F93\u5165\u653E\u5728\u53D8\u91CFlast\u4E2D\u3002</span>
<span class="token builtin class-name">read</span> first last

<span class="token comment"># \u628A\u5355\u8BCD\u6E05\u5355\u8BFB\u5165arr\u6570\u7EC4</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-a</span> arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[i];function d(l,p){return a(),s("div",null,c)}const o=n(t,[["render",d],["__file","read.html.vue"]]);export{o as default};