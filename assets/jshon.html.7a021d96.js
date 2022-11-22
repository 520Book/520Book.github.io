import{_ as n,o as s,c as a,e}from"./app.678d7e92.js";const o={},t=e(`<p>\u5728<code>bash</code>\u4E2D\u5904\u7406<code>json</code>\u6570\u636E\u3002 \u5176\u4E2D<code>JSON.sh</code>\u662F\u5B8C\u5168\u7528<code>shell</code>\u5B9E\u73B0\u7684<code>json parser</code>\uFF0C\u4F3C\u4E4E\u4E0D\u80FD\u505A\u5230\u6DFB\u52A0/\u4FEE\u6539/\u5220\u9664\u539F\u6709json\u7684\u7ED3\u6784\u3002\u800C<code>jshon</code>\u662F\u7528<code>c</code>\u5B9E\u73B0\u7684\uFF0C\u4F9D\u8D56\u4E8E<code>jansson</code>\uFF0C\u4F7F\u7528MIT\u534F\u8BAE\uFF0C\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u66FF\u4EE3\u7531<code>grep/sed/awk</code>\u5199\u7684<code>fragile adhoc parsers</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5jansson</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># wget http://www.digip.org/jansson/releases/jansson-2.5.tar.gz</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># tar -zxvf jansson-2.5.tar.gz</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># cd jansson-2.5</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># ./configure  &amp;&amp; make &amp;&amp; make install</span>

<span class="token comment"># \u5B89\u88C5 jshon</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># wget http://kmkeen.com/jshon/jshon.tar.gz</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># tar -zxvf  jshon.tar.gz</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># cd jshon-2012091</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># make</span>

<span class="token comment"># \u6D4B\u8BD5</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># echo &#39;{&quot;40154&quot;:&quot;SND-VN-709&quot;, &quot;40163&quot;:&quot;SND-VN-710&quot;}&#39; | ./jshon</span>

<span class="token comment"># \u5C06jshon\u653E\u5165bin\u76EE\u5F55</span>
<span class="token punctuation">[</span>root@iStudyBoy<span class="token punctuation">]</span><span class="token comment"># mv /sbin/jshon /usr/bin/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u8BFB\u53D6json\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6json\u6587\u4EF6" aria-hidden="true">#</a> \u8BFB\u53D6json\u6587\u4EF6</h1><p><code>config.json</code>\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;adong&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BFB\u53D6\u952E\u503C</span>
jshon <span class="token parameter variable">-e</span> name <span class="token operator">&lt;</span> config.json

<span class="token comment"># \u6DFB\u52A0\u952E\u503C</span>
jshon <span class="token operator">&lt;</span> config.json <span class="token parameter variable">-s</span> one <span class="token parameter variable">-i</span> age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function i(p,l){return s(),a("div",null,c)}const u=n(o,[["render",i],["__file","jshon.html.vue"]]);export{u as default};
