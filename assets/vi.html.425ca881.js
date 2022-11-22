import{_ as t,o as d,c as e,e as a}from"./app.678d7e92.js";const r={},n=a(`<h1 id="vi" tabindex="-1"><a class="header-anchor" href="#vi" aria-hidden="true">#</a> vi</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>vi</code>\u662FUNIX\u4E2D\u6700\u901A\u7528\u7684\u7EAF\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u7531\u4E8E\u662F\u5728\u5B57\u7B26\u754C\u9762\uFF0C\u5F88\u591A\u7528\u4E60\u60EF\u4E86<code>Windows</code>\u4F1A\u5F88\u5D29\u6E83\uFF0C\u5B8C\u5168\u6CA1\u6CD5\u64CD\u4F5C\u3002</p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>+&lt;num&gt;</code></td><td>\u4ECE\u6307\u5B9A\u884C\u5F00\u59CB\u663E\u793A\u6587\u672C\u5185\u5BB9</td></tr><tr><td>-b</td><td>\u4EE5\u4E8C\u8FDB\u5236\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6</td></tr><tr><td>-c&lt;\u6307\u4EE4&gt;</td><td>\u5728\u5B8C\u6210\u5BF9\u7B2C\u4E00\u4E2A\u6587\u4EF6\u7F16\u8F91\u4EFB\u52A1\u540E\uFF0C\u6267\u884C\u7ED9\u51FA\u7684\u6307\u4EE4</td></tr><tr><td>-d</td><td>\u4EE5diff\u6A21\u5F0F\u6253\u5F00\u6587\u4EF6\uFF0C\u5F53\u591A\u4E2A\u6587\u4EF6\u7F16\u8F91\u65F6\uFF0C\u663E\u793A\u6587\u4EF6\u5DEE\u5F02\u90E8\u5206</td></tr><tr><td>-l</td><td>\u4F7F\u7528lisp\u6A21\u5F0F\uFF0C\u6253\u5F00\u201Clisp\u201D\u548C\u201Cshowmatch\u201D</td></tr><tr><td>-m</td><td>\u53D6\u6D88\u5199\u6587\u4EF6\u529F\u80FD\uFF0C\u91CD\u8BBE\u201Cwrite\u201D\u9009\u9879</td></tr><tr><td>-M</td><td>\u5173\u95ED\u4FEE\u6539\u529F\u80FD</td></tr><tr><td>-n</td><td>\u4E0D\u5B9E\u7528\u7F13\u5B58\u529F\u80FD</td></tr><tr><td>-o&lt;\u6587\u4EF6\u6570\u76EE&gt;</td><td>\u6307\u5B9A\u540C\u65F6\u6253\u5F00\u6307\u5B9A\u6570\u76EE\u7684\u6587\u4EF6</td></tr><tr><td>-R</td><td>\u4EE5\u53EA\u8BFB\u65B9\u5F0F\u6253\u5F00\u6587\u4EF6</td></tr><tr><td>-s</td><td>\u5B89\u9759\u6A21\u5F0F\uFF0C\u4E0D\u73B0\u5B9E\u6307\u4EE4\u7684\u4EFB\u4F55\u9519\u8BEF\u4FE1\u606F\u3002</td></tr></tbody></table><p><code>vi</code>\u6709\u4E09\u79CD\u57FA\u672C\u7684\u5DE5\u4F5C\u72B6\u6001\uFF1A<code>\u547D\u4EE4\u6A21\u5F0F</code>\uFF08\u9ED8\u8BA4\uFF09\u3001<code>\u672B\u884C\u6A21\u5F0F</code>\uFF08\u4E5F\u79F0<code>ex\u8F6C\u4E49\u6A21\u5F0F</code>\uFF09\u548C<code>\u7F16\u8F91\u6A21\u5F0F</code>\u3002\u4ECE\u7F16\u8F91\u6A21\u5F0F\u5207\u6362\u5230\u547D\u4EE4\u6A21\u5F0F\u4F7F\u7528<code>Esc</code>\u3002</p><h2 id="\u4ECE\u547D\u4EE4\u6A21\u5F0F\u5207\u6362\u5230\u7F16\u8F91\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u547D\u4EE4\u6A21\u5F0F\u5207\u6362\u5230\u7F16\u8F91\u6A21\u5F0F" aria-hidden="true">#</a> \u4ECE\u547D\u4EE4\u6A21\u5F0F\u5207\u6362\u5230\u7F16\u8F91\u6A21\u5F0F</h2><p>\u8F93\u5165vi\u7684\u63D2\u5165\u547D\u4EE4\uFF08i\uFF09\u3001\u9644\u52A0\u547D\u4EE4\uFF08a\uFF09\u3001\u6253\u5F00\u547D\u4EE4\uFF08o\uFF09\u3001\u66FF\u6362\u547D\u4EE4\uFF08s\uFF09\u3001\u4FEE\u6539\u547D\u4EE4(c\uFF09\u6216\u53D6\u4EE3\u547D\u4EE4\uFF08r\uFF09\u53EF\u4EE5\u4ECE\u547D\u4EE4\u65B9\u5F0F\u8FDB\u5165\u8F93\u5165\u65B9\u5F0F\u3002</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>a</td><td>\u5F53\u524D\u5149\u6807\u540E\u63D2\u5165</td></tr><tr><td><code>A</code></td><td>\u5149\u6807\u79FB\u52A8\u5230\u884C\u5C3E</td></tr><tr><td>i</td><td>\u5F53\u524D\u5149\u6807\u5904\u63D2\u5165</td></tr><tr><td><code>I</code></td><td>\u5728\u884C\u9996\u63D2\u5165\u6587\u672C</td></tr><tr><td>o</td><td>\u5F53\u524D\u884C\u4E0B\u9762\u63D2\u5165\u65B0\u884C</td></tr><tr><td><code>O</code></td><td>\u5F53\u524D\u884C\u4E0A\u9762\u63D2\u5165\u65B0\u884C</td></tr></tbody></table><h2 id="\u7F16\u8F91\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6A21\u5F0F" aria-hidden="true">#</a> \u7F16\u8F91\u6A21\u5F0F</h2><h2 id="\u547D\u4EE4\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u6A21\u5F0F" aria-hidden="true">#</a> \u547D\u4EE4\u6A21\u5F0F</h2><p>\u5E38\u7528\u5185\u7F6E\u547D\u4EE4\u548C\u5FEB\u6377\u952E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>Ctrl + b</td><td>\u5411\u540E\u7FFB\u9875</td></tr><tr><td>Ctrl + d</td><td>\u5411\u540E\u7FFB\u534A\u9875</td></tr><tr><td>Ctrl + f</td><td>\u5411\u524D\u7FFB\u9875</td></tr><tr><td>Ctrl + u</td><td>\u5411\u524D\u7FFB\u534A\u9875</td></tr><tr><td>dd</td><td>\u5220\u9664\u5F53\u524D\u884C</td></tr><tr><td>ndd</td><td>\u5220\u9664\u5F53\u524D\u884C\u53CA\u5176\u540En-1\u884C</td></tr><tr><td>%d</td><td>\u5168\u90E8\u5220\u9664</td></tr><tr><td>D</td><td>\u5220\u9664\u4ECE\u5149\u6807\u5230\u884C\u5C3E</td></tr><tr><td>p</td><td>\u7C98\u8D34</td></tr><tr><td>u</td><td>\u8F99\u9500\u64CD\u4F5C</td></tr><tr><td>v</td><td>\u9009\u62E9\u6587\u672C</td></tr><tr><td>V</td><td>\u4EE5\u884C\u6A21\u5F0F\u5FEB\u901F\u9009\u62E9\u6587\u672C</td></tr><tr><td>x</td><td>\u5220\u9664\u5149\u6807\u540E\u7684\u4E00\u4E2A\u5B57\u7B26</td></tr><tr><td>X</td><td>\u5220\u9664\u5149\u6807\u524D\u7684\u4E00\u4E2A\u5B57\u7B26</td></tr><tr><td>yy</td><td>\u590D\u5236\u5F53\u524D\u884C</td></tr><tr><td>ZZ</td><td>\u4FDD\u5B58\u5E76\u9000\u51FA</td></tr></tbody></table><h2 id="\u672B\u884C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u672B\u884C\u6A21\u5F0F" aria-hidden="true">#</a> \u672B\u884C\u6A21\u5F0F</h2><p>\u5728\u547D\u4EE4\u6A21\u5F0F\u4E0B\u8F93\u5165\u5192\u53F7<code>:</code>\u8FDB\u5165\u3002\u6B64\u65F6<code>vi</code>\u4F1A\u5728\u663E\u793A\u7A97\u53E3\u7684\u6700\u540E\u4E00\u884C\u663E\u793A\u4E00\u4E2A<code>:</code>\u4F5C\u4E3A\u8BF4\u660E\u7B26\uFF0C\u7B49\u5F85\u7528\u6237\u8F93\u5165\u547D\u4EE4\uFF0C\u672B\u884C\u547D\u4EE4\u6267\u884C\u5B8C\u540E\uFF0Cvi\u81EA\u52A8\u56DE\u5230\u547D\u4EE4\u6A21\u5F0F\u3002</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>?\u5B57\u7B26\u4E32</td><td>\u4ECE\u5149\u6807\u6240\u5411\u6587\u4EF6\u5934\u90E8\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u4E32</td></tr><tr><td>/\u5B57\u7B26\u4E32</td><td>\u4ECE\u5149\u6807\u5411\u6587\u4EF6\u5C3E\u90E8\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u4E32</td></tr><tr><td>$</td><td>\u5149\u6807\u8DF3\u8F6C\u5230\u6700\u540E\u4E00\u884C\u7684\u884C\u9996</td></tr><tr><td>e!</td><td>\u64A4\u9500\u66F4\u6539</td></tr><tr><td>e</td><td>\u6253\u5F00\u5E76\u7F16\u8F91\u6307\u5B9A\u540D\u79F0\u7684\u6587\u4EF6</td></tr><tr><td>f</td><td>\u663E\u793A\u5F53\u524D\u7684\u6587\u4EF6\u540D\u3001\u5149\u6807\u6240\u5728\u884C\u7684\u884C\u53F7\u4EE5\u53CA\u663E\u793A\u6BD4\u4F8B</td></tr><tr><td>num</td><td>\u8DF3\u8F6C\u5230\u6307\u5B9Anum\u884C\u7684\u884C\u9996</td></tr><tr><td>q</td><td>\u9000\u51FA</td></tr><tr><td>q!</td><td><code>\u5F3A\u5236\u9000\u51FA</code></td></tr><tr><td>w</td><td>\u4FDD\u5B58</td></tr><tr><td>w filenme</td><td>\u53E6\u5B58\u4E3A</td></tr><tr><td>wq</td><td><code>\u4FDD\u5B58\u5E76\u9000\u51FA</code></td></tr><tr><td>set nu/number</td><td>\u663E\u793A\u884C\u53F7</td></tr><tr><td>set nonumber</td><td>\u4E0D\u663E\u793A\u884C\u53F7</td></tr></tbody></table><h2 id="\u4E8C\u8FDB\u5236\u7F16\u8F91" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u7F16\u8F91" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u7F16\u8F91</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u52A0\u4E0A-b\u53C2\u6570\uFF0C\u4EE5\u4E8C\u8FDB\u5236\u6253\u5F00</span>
<span class="token function">vim</span> <span class="token parameter variable">-b</span> 8_9_9_0/partition.dat

<span class="token comment"># \u5207\u6362\u5230\u5341\u516D\u8FDB\u5236\u6A21\u5F0F\u663E\u793A</span>
:%<span class="token operator">!</span>xxd <span class="token parameter variable">-g</span> <span class="token number">1</span>

<span class="token comment"># \u4F7F\u7528xxd\u8FD8\u539F\u4E8C\u8FDB\u5236</span>
:%<span class="token operator">!</span>xxd <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a> \u641C\u7D22</h2><p>\u5F53\u8F93\u5165\u7684\u641C\u7D22\u8BCD\u5168\u90E8\u662F\u5C0F\u5199\u65F6\uFF0C\u5FFD\u7565\u5927\u5C0F\u5199\uFF1B\u641C\u7D22\u8BCD\u81F3\u5C11\u6709\u4E00\u4E2A\u5927\u5199\u5B57\u6BCD\u65F6\uFF0C\u8FDB\u884C\u5927\u5C0F\u5199\u5339\u914D\u641C\u7D22\u3002 set ignorecase smartcase</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>/</td><td>\u524D\u5411\u641C\u7D22\u5339\u914D</td></tr><tr><td>?</td><td>\u53CD\u5411\u641C\u7D22\u5339\u914D</td></tr><tr><td>n</td><td>\u8DF3\u5230\u4E0B\u4E00\u4E2A\u5339\u914D\u7684\u4F4D\u7F6E</td></tr><tr><td>N</td><td>\u8DF3\u5230\u4E0A\u4E00\u4E2A\u5339\u914D\u7684\u4F4D\u7F6E</td></tr><tr><td>*</td><td>\u5BF9\u5149\u6807\u5F53\u524D\u6240\u5728\u7684\u5B8C\u6574\u5355\u8BCD\u8FDB\u884C\u524D\u5411\u641C\u7D22\u5339\u914D</td></tr><tr><td>#</td><td>\u5BF9\u5149\u6807\u5F53\u524D\u6240\u5728\u7684\u5B8C\u6574\u5355\u8BCD\u8FDB\u884C\u540E\u5411\u641C\u7D22\u5339\u914D</td></tr><tr><td>g*</td><td>\u524D\u5411\u641C\u7D22\u5149\u6807\u5F53\u524D\u6240\u5728\u5355\u8BCD</td></tr><tr><td>g#</td><td>\u53CD\u5411\u641C\u7D22\u5149\u6807\u5F53\u524D\u6240\u5728\u5355\u8BCD</td></tr></tbody></table><p>\u53EA\u641C\u7D22\u5C0F\u5199\u5B57\u7B26\u4E32\u65F6\uFF0C\u65E0\u6CD5\u533A\u5206\u5927\u5C0F\u5199\u3002 \u89E3\u51B3\u65B9\u6CD5\uFF1A\u5728\u641C\u7D22\u8BCD\u524D\u4F7F\u7528 \\C \u6307\u793AVim\u540E\u7EED\u641C\u7D22\u533A\u5206\u5927\u5C0F\u5199\u3002</p><p>\u91CD\u590D\u4E0A\u4E00\u6B21\u641C\u7D22//\u3002 \u67E5\u770B\u641C\u7D22\u5386\u53F2:history /\uFF1B\u641C\u7D22\u6A21\u5F0F\u4E0B\uFF0C\u7528ctrl-n\u548Cctrl-p\u5FEB\u901F\u5411\u524D\u548C\u5411\u540E\u904D\u5386\u641C\u7D22\u5386\u53F2\u3002 \u5E38\u7528\u6A21\u5F0F\u4E32\u7CFB\u7EDF \u641C\u7D22\u4EE5\u6307\u5B9A\u5B57\u7B26\u4E32\u5F00\u5934\u6216\u6307\u5B9A\u5B57\u7B26\u4E32\u7ED3\u5C3E\u7684\u884C \u7528\u884C\u9996\u4F4D\u7F6E^\u6307\u5B9A\u5F00\u5934\u5B57\u7B26\u4E32\uFF0C\u6BD4\u5982/^nice\u641C\u7D22\u4EE5nice\u5F00\u5934\u7684 \u7528\u884C\u5C3E\u4F4D\u7F6E$\u6307\u5B9A\u7ED3\u5C3E\u5B57\u7B26\u4E32\uFF0C\u6BD4\u5982/nice$\u641C\u7D22\u4EE5nice\u7ED3\u5C3E\u7684 \u540C\u65F6\u641C\u7D22\u591A\u4E2A\u5B57\u7B26\u4E32:\u7528|\u8868\u793A\u6216\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u7528\u8F6C\u4E49\u5B57\u7B26\u8F6C\u4E49,\u5373<code>\\|</code>\uFF0C\u4E5F\u53EF\u5728\u5F00\u5934\u4F7F\u7528\u9B54\u672F\u5173\u952E\u5B57\\v\u6765\u5B9E\u73B0\u4E0D\u52A0\u8F6C\u4E49\u5B57\u7B26\uFF0C\u5373/\\v\u3002 \u5B57\u7B26\u7EC4\u641C\u7D22:\u7528[]\u540C\u65F6\u5339\u914D\u591A\u4E2A\u5B57\u7B26\uFF0C\u6BD4\u5982/[0-9a-zA-Z]\u8868\u793A\u5339\u914D0-9\u3001a-z\u3001A-Z\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\uFF1B\u7528[^]\u53D6\u53CD\u5339\u914D\uFF0C\u6BD4\u5982[^0-9]\u8868\u793A\u6392\u96640-9\u4E2D\u7684\u4EFB\u610F\u5B57\u7B26\u3002 \u9884\u5B9A\u4E49\u7684\u5B57\u7B26\u7EC4\uFF1AVim\u4E3A\u5E38\u89C1\u5B57\u7B26\u7EC4\u63D0\u4F9B\u4E86\u7B80\u5199\u3002\u67E5\u770B\u6240\u6709\u9884\u5B9A\u4E49\u5B57\u7B26\u7EC4:h /character-classes\u3002 \\d # \u6570\u5B57[0-9] \\D # \u975E\u6570\u5B57[^0-9] \\w # \u5355\u8BCD\u5B57\u7B26[0-9a-zA-Z_] \\l # \u5C0F\u5199\u5B57\u6BCD[a-z] \\u # \u5927\u5199\u5B57\u6BCD[A-Z] \\S # \u975E\u7A7A\u767D\u5B57\u7B26(\u9664\u7A7A\u683C\u548C\u5236\u8868\u7B26\u5916\u7684\u6240\u6709\u5B57\u7B26) \\s # \u7A7A\u767D\u5B57\u7B26(\u7A7A\u683C\u548C\u5236\u8868\u7B26)</p><p>\u641C\u7D22\u91CD\u590D\u5B57\u7B26 \u91C7\u7528\u8BA1\u6570\u53C2\u6570\u6765\u5B9E\u73B0\u91CD\u590D\u641C\u7D22 {n}\u662F\u7CBE\u786E\u5339\u914D\u3002 /[0-9]{2}\u5339\u914D\u4E24\u4E2A\u6570\u5B57:&quot;11&quot;\uFF0C\u4EE5\u53CA&quot;111&quot;\u4E2D\u7684&quot;11&quot;\u3002 {n,m}\u662F\u8303\u56F4\u5339\u914D\u3002 /[0-9]{2,3}\u5339\u914D 2 \u5230 3 \u4F4D\u6570\u5B57:&quot;11&quot;\u548C&quot;111&quot;\u3002 {,m}\u662F\u4E0A\u9650\u5339\u914D\u3002 /[0-9]{,3}\u5339\u914D\u6700\u591A 3 \u4E2A\u6570\u5B57:&quot;1&quot;\uFF0C&quot;11&quot;\u548C&quot;111&quot;\u3002 {n,}\u662F\u4E0B\u9650\u5339\u914D\u3002 /[0-9]{2,}\u5339\u914D\u6700\u5C11 2 \u4E2A\u6216\u591A\u4E2A\u6570\u5B57:&quot;11&quot;\u548C&quot;111&quot;\u3002 1 2 3 4 \u8BA1\u6570\u53C2\u6570{0,}\uFF08\u96F6\u6216\u591A\u4E2A\uFF09\u548C{1,}\uFF08\u4E00\u4E2A\u6216\u591A\u4E2A\uFF09\u662F\u6700\u5E38\u89C1\u7684\u641C\u7D22\u6A21\u5F0F\uFF0CVim \u4E3A\u5B83\u4EEC\u63D0\u4F9B\u4E86\u7279\u6B8A\u7684\u64CD\u4F5C\u7B26:<em>\u548C+\uFF08 +\u9700\u8981\u88AB\u8F6C\u4E49\uFF0C\u800C</em> \u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u800C\u65E0\u9700\u8F6C\u4E49\uFF09\u3002 \u5982\u679C\u6267\u884C/[0-9]*\uFF0C\u529F\u80FD\u4E0E/[0-9]{0,}\u76F8\u540C\u3002 \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014 \u7248\u6743\u58F0\u660E\uFF1A\u672C\u6587\u4E3ACSDN\u535A\u4E3B\u300C\u563B\u563B\u4F5C\u8005\u54C8\u54C8\u300D\u7684\u539F\u521B\u6587\u7AE0\uFF0C\u9075\u5FAACC 4.0 BY-SA\u7248\u6743\u534F\u8BAE\uFF0C\u8F6C\u8F7D\u8BF7\u9644\u4E0A\u539F\u6587\u51FA\u5904\u94FE\u63A5\u53CA\u672C\u58F0\u660E\u3002 \u539F\u6587\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/weixin_43971252/article/details/123218023</p><h1 id="\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u9636" aria-hidden="true">#</a> \u8FDB\u9636</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u6307\u5B9A\u8303\u56F4\u7684\u884C</span>
:3,5d

<span class="token comment"># \u4ECE\u6587\u4EF6\u7B2C\u4E00\u884C\u81F3\u6587\u4EF6\u672B\u5C3E\uFF08$\uFF09\u5C06\u5927\u5199I\u5168\u90E8\u66FF\u6362\u6210\u5C0F\u5199i</span>
:1,<span class="token variable">$s</span>/I/i/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),s=[n];function i(c,o){return d(),e("div",null,s)}const h=t(r,[["render",i],["__file","vi.html.vue"]]);export{h as default};