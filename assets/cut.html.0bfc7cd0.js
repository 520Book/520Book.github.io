import{_ as n,o as s,c as e,e as a}from"./app.678d7e92.js";const t={},i=a(`<h1 id="cut" tabindex="-1"><a class="header-anchor" href="#cut" aria-hidden="true">#</a> cut</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>cut</code>\u7528\u6765\u663E\u793A\u884C\u4E2D\u7684\u6307\u5B9A\u90E8\u5206\uFF0C\u5220\u9664\u6587\u4EF6\u4E2D\u6307\u5B9A\u5B57\u6BB5\uFF0C\u7C7B\u4F3C\u4E8E<code>type</code>\u547D\u4EE4\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cut</span> OPTION<span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9009\u9879\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u8BF4\u660E" aria-hidden="true">#</a> \u9009\u9879\u8BF4\u660E</h2><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-b, --bytes=LIST</td><td>\u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A<code>\u5B57\u8282</code></td></tr><tr><td>-c, --characters=LIST</td><td>\u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A<code>\u5B57\u7B26</code></td></tr><tr><td>-d, --delimiter=DELIM</td><td>\u6307\u5B9A\u5B57\u6BB5\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A<code>tab</code></td></tr><tr><td>-f, --fields=LIST</td><td>\u663E\u793A\u6307\u5B9A\u5B57\u6BB5\u7684\u5185\u5BB9\u3002also print any line that contains no delimiter character, unless the -s option is specified</td></tr><tr><td>-n</td><td>\u4E0E\u201C-b\u201D\u9009\u9879\u8FDE\u7528\uFF0C\u4E0D\u5206\u5272\u591A\u5B57\u8282\u5B57\u7B26</td></tr><tr><td>--complement</td><td>\u548C<code>-f</code>\u7684\u4F5C\u7528\u76F8\u53CD</td></tr><tr><td>--output-delimiter=STRING</td><td>\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5206\u9694\u7B26\u6765\u8F93\u51FA\u5185\u5BB9</td></tr><tr><td>--help</td><td>\u663E\u793A\u5E2E\u52A9</td></tr><tr><td>--version</td><td>\u663E\u793A\u7248\u672C</td></tr></tbody></table><blockquote><p>\u4E00\u4E2A\u7A7A\u683C\u7B97\u4E00\u4E2A\u5B57\u8282\uFF0C\u4E00\u4E2A\u6C49\u5B57\u7B97\u4E09\u4E2A\u5B57\u8282\u3002</p></blockquote><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><p>\u9996\u5148\u751F\u6210\u4E00\u4E2A\u4EE5tab\u95F4\u9694\u7684\u6587\u4EF6\u3002</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Num	Name	Age
01	john	19
02	mike	27
03	\u5218\u80E1\u5170	38
04 mary 29
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A 04\u90A3\u884C\u662F\u4EE5\u7A7A\u683C\u95F4\u9694\u7684\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dog ~<span class="token punctuation">]</span><span class="token comment"># cut -f 1 test.txt</span>
Num
01
02
03
04 mary <span class="token number">29</span>

<span class="token punctuation">[</span>root@dog ~<span class="token punctuation">]</span><span class="token comment"># cut -f2,3 test.txt</span>
Name	Age
john	<span class="token number">19</span>
mike	<span class="token number">27</span>
\u5218\u80E1\u5170	<span class="token number">38</span>
04 mary <span class="token number">29</span>

<span class="token comment"># \u81EA\u5B9A\u4E49\u8F93\u51FA\u95F4\u9694\u7B26</span>
<span class="token punctuation">[</span>root@dog test<span class="token punctuation">]</span><span class="token comment"># cut -f2,3 --output-delimiter=&#39;;&#39; test.txt</span>
Name<span class="token punctuation">;</span>Age
john<span class="token punctuation">;</span><span class="token number">19</span>
mike<span class="token punctuation">;</span><span class="token number">27</span>
\u5218\u80E1\u5170<span class="token punctuation">;</span><span class="token number">38</span>
04 mary <span class="token number">29</span>

<span class="token comment"># --complement \u63D0\u53D6\u6307\u5B9A\u5B57\u6BB5\u4E4B\u5916\u7684\u5217</span>
<span class="token punctuation">[</span>root@dog ~<span class="token punctuation">]</span><span class="token comment"># cut -f1 --complement test.txt</span>
Name	Age
john	<span class="token number">19</span>
mike	<span class="token number">27</span>
\u5218\u80E1\u5170	<span class="token number">38</span>
04 mary <span class="token number">29</span>

<span class="token comment"># \u4F7F\u7528-d\u6307\u5B9A\u5B57\u6BB5\u5206\u9694\u7B26</span>
<span class="token punctuation">[</span>root@dog ~<span class="token punctuation">]</span><span class="token comment"># cut -f2 -d&quot; &quot; test.txt</span>
Num	Name	Age
01	john	<span class="token number">19</span>
02	mike	<span class="token number">27</span>
03	\u5218\u80E1\u5170	<span class="token number">38</span>
mary

<span class="token punctuation">[</span>root@dog ~<span class="token punctuation">]</span><span class="token comment"># cut -c2-6 test.txt</span>
um	Na
<span class="token number">1</span>	joh
<span class="token number">2</span>	mik
<span class="token number">3</span>	\u5218\u80E1\u5170
<span class="token number">4</span> mar

<span class="token comment"># \u6CE8\u610F\u89C2\u5BDF\u548C\u4E0A\u4E00\u4E2A\u547D\u4EE4\u7684\u5DEE\u5F02</span>
<span class="token punctuation">[</span>root@dog test<span class="token punctuation">]</span><span class="token comment"># cut -b2-6 test.txt</span>
um	Na
<span class="token number">1</span>	joh
<span class="token number">2</span>	mik
<span class="token number">3</span>	\u5218
<span class="token number">4</span> mar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=[i];function c(l,o){return s(),e("div",null,d)}const u=n(t,[["render",c],["__file","cut.html.vue"]]);export{u as default};
