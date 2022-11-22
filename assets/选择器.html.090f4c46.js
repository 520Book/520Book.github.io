import{_ as n,o as t,c as e,e as i}from"./app.678d7e92.js";const d={},s=i(`<h1 id="\u5E38\u7528\u7684display\u53EF\u80FD\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684display\u53EF\u80FD\u7684\u503C" aria-hidden="true">#</a> \u5E38\u7528\u7684display\u53EF\u80FD\u7684\u503C</h1><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>inline</td><td>\u4EE5\u884C\u5185\u5143\u7D20\u884C\u4E3A\u5C55\u793A</td></tr><tr><td>block</td><td>\u4EE5\u5757\u7EA7\u5143\u7D20\u884C\u4E3A\u5C55\u793A</td></tr><tr><td>inline-block</td><td>\u884C\u5185\u5143\u7D20\u548C\u5757\u7EA7\u5143\u7D20\u7279\u6027\u517C\u800C\u6709\u4E4B\uFF0C\u65E2\u4E0D\u4F1A\u5360\u6EE1\u7236\u5143\u7D20\uFF0C\u53C8\u53EF\u4EE5\u8BBE\u7F6Ewidth\u548Cheight\u5C5E\u6027</td></tr><tr><td>table</td><td>\u4EE5\u8868\u683C\u7684\u5F62\u5F0F\u5C55\u793A</td></tr><tr><td>table-cell</td><td>\u4EE5\u8868\u683C\u5355\u5143\u683C\u7684\u5F62\u5F0F\u5C55\u793A</td></tr><tr><td>table-row</td><td>\u4EE5\u8868\u683C\u884C\u7684\u5F62\u5F0F\u5C55\u793A</td></tr><tr><td>table-column</td><td>\u4EE5\u8868\u683C\u5217\u7684\u5F62\u5F0F\u5C55\u793A</td></tr><tr><td>flex</td><td>\u81EA\u9002\u5E94\u5E03\u5C40</td></tr><tr><td>inline-flex</td><td>\u7C7B\u4F3C\u884C\u5185\u5143\u7D20\uFF0C\u4F46\u662F\u53EF\u4EE5\u7528\u4E8E\u81EA\u9002\u5E94\u5E03\u5C40</td></tr></tbody></table><p>\u5757\u7EA7\u5143\u7D20\u7279\u70B9\uFF1A</p><ol><li>\u6BCF\u4E2A\u5757\u7EA7\u5143\u7D20\u90FD\u4ECE\u65B0\u7684\u4E00\u884C\u5F00\u59CB\uFF0C\u5E76\u4E14\u5176\u540E\u7684\u5143\u7D20\u4E5F\u53E6\u8D77\u4E00\u884C\u3002\uFF08\u5F88\u9738\u9053\uFF0C\u4E00\u4E2A\u5757\u7EA7\u5143\u7D20\u72EC\u5360\u4E00\u884C\uFF09</li><li>\u5143\u7D20\u7684\u9AD8\u5EA6\u3001\u5BBD\u5EA6\u3001\u884C\u9AD8\u4EE5\u53CA\u9876\u548C\u5E95\u8FB9\u8DDD\u90FD\u53EF\u8BBE\u7F6E\u3002</li><li>\u5143\u7D20\u5BBD\u5EA6\u5728\u4E0D\u8BBE\u7F6E\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5B83\u672C\u8EAB\u7236\u5BB9\u5668\u7684100%\uFF08\u548C\u7236\u5143\u7D20\u7684\u5BBD\u5EA6\u4E00\u81F4\uFF09\uFF0C\u9664\u975E\u8BBE\u5B9A\u4E00\u4E2A\u5BBD\u5EA6\u3002</li></ol><p>\u5185\u8054\u5143\u7D20\u7279\u70B9\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>1\u3001\u548C\u5176\u4ED6\u5143\u7D20\u90FD\u5728\u4E00\u884C\u4E0A\uFF1B

2\u3001\u5143\u7D20\u7684\u9AD8\u5EA6\u3001\u5BBD\u5EA6\u53CA\u9876\u90E8\u548C\u5E95\u90E8\u8FB9\u8DDD\u4E0D\u53EF\u8BBE\u7F6E\uFF1B

3\u3001\u5143\u7D20\u7684\u5BBD\u5EA6\u5C31\u662F\u5B83\u5305\u542B\u7684\u6587\u5B57\u6216\u56FE\u7247\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u53EF\u6539\u53D8\u3002

\u5185\u8054\u5757\u72B6\u5143\u7D20\uFF08inline-block\uFF09\u5C31\u662F\u540C\u65F6\u5177\u5907\u5185\u8054\u5143\u7D20\u3001\u5757\u72B6\u5143\u7D20\u7684\u7279\u70B9\u3002

inline-block \u5143\u7D20\u7279\u70B9\uFF1A

1\u3001\u548C\u5176\u4ED6\u5143\u7D20\u90FD\u5728\u4E00\u884C\u4E0A\uFF1B

2\u3001\u5143\u7D20\u7684\u9AD8\u5EA6\u3001\u5BBD\u5EA6\u3001\u884C\u9AD8\u4EE5\u53CA\u9876\u548C\u5E95\u8FB9\u8DDD\u90FD\u53EF\u8BBE\u7F6E\u3002

.text-align\u5C5E\u6027\u5BF9\u5757\u7EA7\u5143\u7D20\u8D77\u4F5C\u7528\uFF0C\u5BF9\u884C\u5185\u5143\u7D20\u4E0D\u8D77\u4F5C\u7528\uFF1A
\u539F\u56E0\u662F\u5757\u7EA7\u6807\u7B7E\u5982\u679C\u4E0D\u7ED9\u5BBD\u5EA6\uFF0C\u5757\u7EA7\u5143\u7D20\u5C31\u9ED8\u8BA4\u4E3A\u6D4F\u89C8\u5668\u7684\u5BBD\u5EA6\uFF0C\u5373\u5C31\u662F100%\u5BBD\uFF0C\u90A3\u4E48\u5728100%\u7684\u5BBD\u5EA6\u4E2D\u5C45\u4E2D\u751F\u6548\uFF1B\u4F46\u662F\u884C\u5185\u5143\u7D20\u7684\u5BBD\u5B8C\u5168\u662F\u9760\u5185\u5BB9\u6491\u5F00\uFF0C\u6240\u4EE5\u5BBD\u5EA6\u5C31\u662F\u5185\u5BB9\u6491\u5F00\u7684\u5BBD\uFF1A

clipboard.png

\u6240\u4EE5\u5757\u7EA7\u662F\u5728\u76D2\u5B50\u4E2D\u95F4\u5C45\u4E2D\u4E86\uFF0C\u4F46\u662F\u56E0\u4E3A\u884C\u5185\u5143\u7D20\u7684\u5BBD\u5C31\u662F\u5185\u5BB9\u5BBD\uFF0C\u6CA1\u6709\u53EF\u5C45\u4E2D\u7684\u7A7A\u95F4\uFF0C\u6240\u4EE5text-align:center;\u5C31\u6CA1\u6709\u4F5C\u7528\uFF1B\u4F46\u662F\u5982\u679C\u7ED9font\u8F6C\u6362\u4E3A\u5757\u7EA7\u5C31\u4E0D\u4E00\u6837\u4E86\uFF1A


\u540E\u4EE3\u9009\u62E9\u5668\uFF1A\u7528\u7A7A\u683C\u9694\u5F00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u7C7B\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u591A\u7C7B\u9009\u62E9\u5668" aria-hidden="true">#</a> \u591A\u7C7B\u9009\u62E9\u5668</h2><p>\u591A\u4E2A\u9009\u62E9\u5668\u540C\u65F6\u5B58\u5728\u4E8E\u67D0\u4E00\u5143\u7D20\u4E2D\uFF08\u7C7B\u540D\u987A\u5E8F\u4E0D\u9650\uFF09\u3002<code>id</code>+<code>\u7C7B</code>\u9009\u62E9\u5668\u7684\u6DF7\u5408\u7EC4\u5408\u6837\u5F0F\u4E5F\u53EF\u4EE5\u8FBE\u5230\u7C7B\u4F3C\u6548\u679C\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.class1.class2</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">#id.class1</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7C7B\u9009\u62E9\u5668\u95F4\u65E0\u7A7A\u683C</p></blockquote><p>\u5982\u679C\u4E00\u4E2A\u591A\u7C7B\u9009\u62E9\u5668\u5305\u542B\u7C7B\u540D\u5217\u8868\u4E2D\u6CA1\u6709\u7684\u4E00\u4E2A\u7C7B\u540D\uFF0C\u5339\u914D\u5C31\u4F1A\u5931\u8D25\u3002\u8BF7\u770B\u4E0B\u9762\u7684\u89C4\u5219\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.important.urgent</span> <span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>silver<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/* \u7C7B\u9009\u62E9\u5668\u95F4\u65E0\u7A7A\u683C\uFF0C\u5E76\u5217\u5173\u7CFB*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F2A\u7C7B\u9009\u62E9\u5668\uFF08\u5F85\u5B9A\uFF09</p><h1 id="a\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#a\u6807\u7B7E" aria-hidden="true">#</a> a\u6807\u7B7E</h1><p>\u5176\u5BF9\u5E94\u51E0\u79CD\u4E0D\u540C\u7684\u72B6\u6001\uFF1A</p><table><thead><tr><th>\u72B6\u6001</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>link</td><td>\u8D85\u94FE\u63A5\u70B9\u51FB\u4E4B\u524D</td></tr><tr><td>visited</td><td>\u8D85\u94FE\u63A5\u70B9\u51FB\u4E4B\u540E</td></tr><tr><td>focus</td><td>\u83B7\u5F97\u7126\u70B9\u7684\u65F6\u5019</td></tr><tr><td>hover</td><td>\u9F20\u6807\u653E\u5230\u6807\u7B7E\u4E0A\u7684\u65F6\u5019</td></tr><tr><td>active</td><td>\u70B9\u51FB\u6807\u7B7E\u6CA1\u6709\u677E\u5F00\u9F20\u6807\u65F6</td></tr></tbody></table><h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h2><p>transition\u5C5E\u6027\u662F\u4E00\u4E2A\u7B80\u5199\u5C5E\u6027\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u56DB\u4E2A\u8FC7\u6E21\u5C5E\u6027\uFF1A</p><p>transition-property transition-duration transition-timing-function transition-delay</p><p>\u6CE8\u91CA\uFF1A\u8BF7\u59CB\u7EC8\u8BBE\u7F6E transition-duration \u5C5E\u6027\uFF0C\u5426\u5219\u65F6\u957F\u4E3A 0\uFF0C\u5C31\u4E0D\u4F1A\u4EA7\u751F\u8FC7\u6E21\u6548\u679C\u3002</p>`,20),a=[s];function l(r,c){return t(),e("div",null,a)}const u=n(d,[["render",l],["__file","\u9009\u62E9\u5668.html.vue"]]);export{u as default};
