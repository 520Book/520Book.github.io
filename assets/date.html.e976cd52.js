import{_ as n,o as a,c as s,e as t}from"./app.678d7e92.js";const e={},d=t(`<p>date</p><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p>\u8BE5\u547D\u4EE4\u662F<code>GNU coreutils</code>\u5305\u4E2D\u7684\u547D\u4EE4\uFF0C\u7528\u6765\u663E\u793A\u6216\u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u95F4\u4E0E\u65E5\u671F\u3002</p><h2 id="\u547D\u4EE4\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u683C\u5F0F" aria-hidden="true">#</a> \u547D\u4EE4\u683C\u5F0F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">date</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>+FORMAT<span class="token punctuation">]</span>
<span class="token function">date</span> <span class="token punctuation">[</span>-u<span class="token operator">|</span>--utc<span class="token operator">|</span>--universal<span class="token punctuation">]</span> <span class="token punctuation">[</span>MMDDhhmm<span class="token punctuation">[</span><span class="token punctuation">[</span>CC<span class="token punctuation">]</span>YY<span class="token punctuation">]</span><span class="token punctuation">[</span>.ss<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u9879\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u8BF4\u660E" aria-hidden="true">#</a> \u9009\u9879\u8BF4\u660E</h2><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-d, --date=STRING</td><td>\u89E3\u6790\u5B57\u7B26\u4E32\u5E76\u6309\u7167\u6307\u5B9A\u683C\u5F0F\u8F93\u51FA\uFF0C\u5B57\u7B26\u4E32\u4E0D\u80FD\u662F&#39;now&#39;\u3002</td></tr><tr><td>--debug</td><td>\u6CE8\u91CA\u5DF2\u89E3\u6790\u7684\u65E5\u671F\uFF0C\u5E76\u5C06\u6709\u7591\u95EE\u7684\u7528\u6CD5\u53D1\u9001\u5230\u6807\u51C6\u9519\u8BEF\u3002</td></tr><tr><td>-f, --file=DATEFILE</td><td>\u7C7B\u4F3C\u4E8E--date; \u4E00\u6B21\u4ECEDATEFILE\u5904\u7406\u4E00\u884C\u3002</td></tr><tr><td>-I[FMT], --iso-8601[=FMT]</td><td>\u6309\u7167ISO 8601\u683C\u5F0F\u8F93\u51FA\uFF0CFMT\u53EF\u4EE5\u4E3A&#39;date&#39;(\u9ED8\u8BA4)\uFF0C&#39;hours&#39;\uFF0C&#39;minutes&#39;\uFF0C&#39;seconds&#39;\uFF0C&#39;ns&#39;\u3002\u4F8B\u5982\uFF1A2006-08-14T02:34:56-06:00</td></tr><tr><td><code>-R</code>, --rfc-email</td><td>\u6309\u7167RFC 5322\u683C\u5F0F\u8F93\u51FA\uFF0C\u4F8B\u5982: Mon, 14 Aug 2006 02:34:56 <code>-0600</code></td></tr><tr><td>--rfc-3339=FMT</td><td>\u6309\u7167RFC 3339\u683C\u5F0F\u8F93\u51FA\uFF0CFMT\u53EF\u4EE5\u4E3A&#39;date&#39;, &#39;seconds&#39;,&#39;ns&#39;\u4E2D\u7684\u4E00\u4E2A\uFF0C\u4F8B\u5982\uFF1A2006-08-14 02:34:56-06:00</td></tr><tr><td>-r, --reference=FILE</td><td>\u663E\u793A\u6587\u4EF6\u7684\u4E0A\u6B21\u4FEE\u6539\u65F6\u95F4\u3002</td></tr><tr><td>-s, --set=STRING</td><td>\u6839\u636E\u5B57\u7B26\u4E32\u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u95F4\u3002</td></tr><tr><td>-u, --utc, --universal</td><td>\u663E\u793A\u6216\u8BBE\u7F6E\u4E16\u754C\u534F\u8C03\u65F6(UTC)\u3002</td></tr><tr><td>--help</td><td>\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\u3002</td></tr><tr><td>--version</td><td>\u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA\u3002</td></tr></tbody></table><h2 id="format\u7684\u8F6C\u4E49\u5E8F\u5217" tabindex="-1"><a class="header-anchor" href="#format\u7684\u8F6C\u4E49\u5E8F\u5217" aria-hidden="true">#</a> format\u7684\u8F6C\u4E49\u5E8F\u5217</h2><table><thead><tr><th>\u683C\u5F0F</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>%%</td><td>\u767E\u5206\u53F7</td></tr><tr><td>%a</td><td>\u5F53\u5730\u7F29\u5199\u7684\u5DE5\u4F5C\u65E5\u540D\u79F0\uFF08\u4F8B\u5982\uFF0CSun\uFF09</td></tr><tr><td>%A</td><td>\u5F53\u5730\u5B8C\u6574\u7684\u5DE5\u4F5C\u65E5\u540D\u79F0\uFF08\u4F8B\u5982\uFF0CSunday\uFF09</td></tr><tr><td>%b</td><td>\u5F53\u5730\u7F29\u5199\u7684\u6708\u4EFD\u540D\u79F0\uFF08\u4F8B\u5982\uFF0CJan\uFF09</td></tr><tr><td>%B</td><td>\u5F53\u5730\u5B8C\u6574\u7684\u6708\u4EFD\u540D\u79F0\uFF08\u4F8B\u5982\uFF0CJanuary\uFF09</td></tr><tr><td>%c</td><td>\u5F53\u5730\u7684\u65E5\u671F\u548C\u65F6\u95F4\uFF08\u4F8B\u5982\uFF0CThu Mar 3 23:05:25 2005\uFF09</td></tr><tr><td>%C</td><td>\u4E16\u7EAA\uFF0C\u548C%Y\u7C7B\u4F3C\uFF0C\u4F46\u662F\u7701\u7565\u540E\u4E24\u4F4D\uFF08\u4F8B\u5982\uFF0C20\uFF09</td></tr><tr><td><code>%d</code></td><td>\u4E00\u6708\u4E2D\u7684\u4E00\u5929\uFF08\u4F8B\u5982\uFF0C01\uFF09</td></tr><tr><td>%D</td><td>\u65E5\u671F\uFF0C\u7B49\u4EF7\u4E8E%m/%d/%y</td></tr><tr><td>%e</td><td>\u4E00\u6708\u4E2D\u7684\u4E00\u5929\uFF0C\u683C\u5F0F\u4F7F\u7528\u7A7A\u683C\u586B\u5145\uFF0C\u7B49\u4EF7\u4E8E%_d</td></tr><tr><td>%F</td><td>\u5B8C\u6574\u7684\u65E5\u671F\uFF1B\u7B49\u4EF7\u4E8E%+4Y-%m-%d</td></tr><tr><td>%g</td><td>ISO\u6807\u51C6\u8BA1\u6570\u5468\u7684\u5E74\u4EFD\u7684\u6700\u540E\u4E24\u4F4D\u6570\u5B57</td></tr><tr><td>%G</td><td>ISO\u6807\u51C6\u8BA1\u6570\u5468\u7684\u5E74\u4EFD\uFF0C\u901A\u5E38\u53EA\u5BF9%V\u6709\u7528</td></tr><tr><td>%h</td><td>\u7B49\u4EF7\u4E8E%b</td></tr><tr><td><code>%H</code></td><td>\u5C0F\u65F6\uFF0C\u8303\u56F4\uFF0800..23\uFF09</td></tr><tr><td>%I</td><td>\u5C0F\u65F6\uFF0C\u8303\u56F4\uFF0800..23\uFF09</td></tr><tr><td>%j</td><td>\u4E00\u5E74\u4E2D\u7684\u4E00\u5929\uFF0C\u8303\u56F4\uFF08001..366\uFF09</td></tr><tr><td>%k</td><td>\u5C0F\u65F6\uFF0C\u4F7F\u7528\u7A7A\u683C\u586B\u5145\uFF0C\u8303\u56F4\uFF080..23\uFF09\uFF0C\u7B49\u4EF7\u4E8E%_H</td></tr><tr><td>%l</td><td>\u5C0F\u65F6\uFF0C\u4F7F\u7528\u7A7A\u683C\u586B\u5145\uFF0C\u8303\u56F4\uFF081..12\uFF09\uFF0C\u7B49\u4EF7\u4E8E%_I</td></tr><tr><td><code>%m</code></td><td>\u6708\uFF0C\u8303\u56F4\uFF0801..12\uFF09</td></tr><tr><td><code>%M</code></td><td>\u5206\u949F\uFF0C\u8303\u56F4\uFF0800..59\uFF09</td></tr><tr><td>%n</td><td>\u6362\u884C\u7B26</td></tr><tr><td>%N</td><td>\u7EB3\u79D2\uFF0C\u8303\u56F4\uFF08000000000..000000000\uFF09</td></tr><tr><td>%p</td><td>\u7528\u4E8E\u8868\u793A\u5F53\u5730\u7684AM\u6216PM\uFF0C\u5982\u679C\u672A\u77E5\u5219\u4E3A\u7A7A\u767D</td></tr><tr><td>%P</td><td>\u7C7B\u4F3C\u4E8E%p\uFF0C\u4F46\u7528\u5C0F\u5199\u8868\u793A</td></tr><tr><td>%q</td><td>\u5B63\u5EA6\uFF0C\u8303\u56F4\uFF081..4\uFF09</td></tr><tr><td>%r</td><td>\u5F53\u5730\u4EE512\u5C0F\u65F6\u8868\u793A\u7684\u65F6\u949F\u65F6\u95F4\uFF08\u4F8B\u5982\uFF0C11:11:04 PM\uFF09</td></tr><tr><td>%R</td><td>24\u5C0F\u65F6\u6BCF\u5206\u949F\uFF1B\u7B49\u4EF7\u4E8E%H:%M</td></tr><tr><td>%s</td><td>\u81EA\u534F\u8C03\u4E16\u754C\u65F61970\u5E7401\u670801\u65E500\u65F600\u5206\u4EE5\u6765\u7684\u79D2\u6570</td></tr><tr><td><code>%S</code></td><td>\u79D2\u6570\uFF0C\u8303\u56F4\uFF0800..60\uFF09</td></tr><tr><td>%t</td><td>\u6C34\u5E73\u5236\u8868\u7B26</td></tr><tr><td>%T</td><td>\u65F6\u95F4\uFF1B\u7B49\u4EF7\u4E8E%H:%M:%S</td></tr><tr><td>%u</td><td>\u4E00\u5468\u4E2D\u7684\u4E00\u5929\uFF081..7\uFF09\uFF0C1\u4EE3\u8868\u661F\u671F\u4E00</td></tr><tr><td>%U</td><td>\u4E00\u5E74\u4E2D\u7684\u7B2C\u51E0\u5468\uFF0C\u5468\u65E5\u4F5C\u4E3A\u4E00\u5468\u7684\u8D77\u59CB\uFF0800..53\uFF09</td></tr><tr><td>%V</td><td>ISO\u6807\u51C6\u8BA1\u6570\u5468\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u5468\u4E00\u4F5C\u4E3A\u4E00\u5468\u7684\u8D77\u59CB\uFF0801..53\uFF09</td></tr><tr><td>%w</td><td>\u4E00\u5468\u4E2D\u7684\u4E00\u5929\uFF080..6\uFF09\uFF0C0\u4EE3\u8868\u661F\u671F\u5929</td></tr><tr><td>%W</td><td>\u4E00\u5E74\u4E2D\u7684\u7B2C\u51E0\u5468\uFF0C\u5468\u4E00\u4F5C\u4E3A\u4E00\u5468\u7684\u8D77\u59CB\uFF0800..53\uFF09</td></tr><tr><td>%x</td><td>\u5F53\u5730\u7684\u65E5\u671F\u8868\u793A\uFF08\u4F8B\u5982\uFF0C12/31/99\uFF09</td></tr><tr><td>%X</td><td>\u5F53\u5730\u7684\u65F6\u95F4\u8868\u793A\uFF08\u4F8B\u5982\uFF0C23:13:48\uFF09</td></tr><tr><td><code>%y</code></td><td>\u5E74\u4EFD\u540E\u4E24\u4F4D\u6570\u5B57\uFF0C\u8303\u56F4\uFF0800..99\uFF09</td></tr><tr><td><code>%Y</code></td><td>\u5E74\u4EFD</td></tr><tr><td><code>%z</code></td><td>+hhmm\u683C\u5F0F\u7684\u6570\u503C\u5316\u65F6\u533A\u683C\u5F0F\uFF08\u4F8B\u5982\uFF0C-0400\uFF09</td></tr><tr><td><code>%:z</code></td><td>+hh:mm\u683C\u5F0F\u7684\u6570\u503C\u5316\u65F6\u533A\u683C\u5F0F\uFF08\u4F8B\u5982\uFF0C-04:00\uFF09</td></tr><tr><td><code>%::z</code></td><td>+hh:mm:ss\u683C\u5F0F\u7684\u6570\u503C\u5316\u65F6\u533A\u683C\u5F0F\uFF08\u4F8B\u5982\uFF0C-04:00:00\uFF09</td></tr><tr><td><code>%:::z</code></td><td>\u6570\u503C\u5316\u65F6\u533A\u683C\u5F0F\uFF0C\u76F8\u6BD4\u4E0A\u4E00\u4E2A\u683C\u5F0F\u589E\u52A0&#39;:&#39;\u4EE5\u663E\u793A\u5FC5\u8981\u7684\u7CBE\u5EA6\uFF08\u4F8B\u5982\uFF0C-04\uFF0C+05:30\uFF09</td></tr><tr><td><code>%Z</code></td><td>\u65F6\u533A\u7F29\u5199\uFF08\u5982EDT\uFF09</td></tr></tbody></table><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65E5\u671F\u7528<code>\u96F6</code>\u586B\u5145\u6570\u5B57\u5B57\u6BB5\uFF1B\u4EE5\u4E0B\u53EF\u9009\u7684\u7B26\u53F7\u53EF\u4EE5\u8DDF\u5728<code>%</code>\u540E\u9762:</p><table><thead><tr><th>\u7B26\u53F7</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>-</code></td><td>\u4E0D\u8981\u586B\u5145\u76F8\u5E94\u7684\u5B57\u6BB5\u3002</td></tr><tr><td><code>_</code></td><td>\u4F7F\u7528\u7A7A\u683C\u586B\u5145\u76F8\u5E94\u7684\u5B57\u6BB5\u3002</td></tr><tr><td><code>0</code></td><td>\u4F7F\u7528\u6570\u5B570\u586B\u5145\u76F8\u5E94\u7684\u5B57\u6BB5\u3002</td></tr><tr><td><code>+</code></td><td>\u7528\u6570\u5B570\u586B\u5145\uFF0C\u672A\u6765\u5E74\u4EFD\u5927\u4E8E4\u4F4D\u6570\u5B57\u5219\u5728\u524D\u9762\u52A0\u4E0A&#39;+&#39;\u53F7\u3002</td></tr><tr><td><code>^</code></td><td>\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u5927\u5199\u3002</td></tr><tr><td><code>#</code></td><td>\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\u5C06\u9ED8\u8BA4\u7684\u5927\u5199\u8F6C\u6362\u4E3A\u5C0F\u5199\uFF0C\u9ED8\u8BA4\u7684\u5C0F\u5199\u8F6C\u6362\u4E3A\u5927\u5199\u3002</td></tr></tbody></table><p>\u5728\u4EFB\u4F55\u6807\u5FD7\u4E4B\u540E\u90FD\u6709\u4E00\u4E2A\u53EF\u9009\u7684\u5B57\u6BB5\u5BBD\u5EA6\uFF0C\u5982\u5C0F\u6570\uFF1B\u7136\u540E\u662F\u4E00\u4E2A\u53EF\u9009\u7684\u4FEE\u9970\u7B26\uFF0C\u5728\u53EF\u7528\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528<code>E</code>\u6765\u4F7F\u7528\u5F53\u5730\u8BED\u8A00\u73AF\u5883\u7684\u66FF\u4EE3\u8868\u793A\uFF0C \u4F7F\u7528<code>O</code>\u6765\u4F7F\u7528\u5F53\u5730\u8BED\u8A00\u73AF\u5883\u7684\u66FF\u4EE3\u6570\u5B57\u7B26\u53F7\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u8FD4\u56DE\u72B6\u6001\u4E3A\u6210\u529F\u9664\u975E\u7ED9\u51FA\u4E86\u975E\u6CD5\u9009\u9879\u6216\u975E\u6CD5\u53C2\u6570\u3002</p><h1 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h1><h2 id="\u5E38\u7528\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u64CD\u4F5C" aria-hidden="true">#</a> \u5E38\u7528\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u65F6\u533A\uFF0C+0800\u4EE3\u8868\u4E1C\u516B\u533A</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-R</span>
Sat, <span class="token number">19</span> Nov <span class="token number">2022</span> <span class="token number">15</span>:35:58 +0800

<span class="token comment"># \u683C\u5F0F\u5316\u8F93\u51FA</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> +<span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
<span class="token number">2022</span>-11-19 <span class="token number">14</span>:57:22

<span class="token comment"># \u65F6\u95F4\u683C\u5F0F\u8F6C\u6362</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;2009-12-12&quot;</span> +<span class="token string">&quot;%Y/%m/%d %H:%M.%S&quot;</span>
<span class="token number">2009</span>/12/12 00:00.00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u5B9A\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5B9A\u65F6\u95F4" aria-hidden="true">#</a> \u8BBE\u5B9A\u65F6\u95F4</h2><p>\u53EA\u6709root\u6743\u9650\u624D\u80FD\u8BBE\u7F6E\uFF0C\u5176\u4ED6\u53EA\u80FD\u67E5\u770B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4EC5\u4FEE\u6539\u65E5\u671F\uFF0C\u8FD9\u6837\u4F1A\u628A\u5177\u4F53\u65F6\u95F4\u8BBE\u7F6E\u621000:00:00</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token number">20120523</span>

<span class="token comment"># \u8BBE\u7F6E\u5177\u4F53\u65F6\u95F4\uFF0C\u65E5\u671F\u4E0D\u505A\u66F4\u6539</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-s</span> 01:01:01 

<span class="token comment"># \u8BBE\u7F6E\u5168\u90E8\u65F6\u95F4</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;01:01:01 2012-05-23&quot;</span>   
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;01:01:01 20120523&quot;</span>     
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;2012-05-23 01:01:01&quot;</span>  
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;20120523 01:01:01&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65F6\u95F4\u52A0\u51CF\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u52A0\u51CF\u64CD\u4F5C" aria-hidden="true">#</a> \u65F6\u95F4\u52A0\u51CF\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u524D\u4E00\u5929\u7684\u65E5\u671F</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;+1 day&quot;</span> +%Y%m%d

<span class="token comment"># \u663E\u793A\u540E\u4E00\u5929\u7684\u65E5\u671F</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;-1 day&quot;</span> +%Y%m%d

<span class="token comment"># \u663E\u793A\u4E0A\u4E00\u6708\u7684\u65E5\u671F</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;-1 month&quot;</span> +%Y%m%d

<span class="token comment"># \u663E\u793A\u4E0B\u4E00\u6708\u7684\u65E5\u671F</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;+1 month&quot;</span> +%Y%m%d    

<span class="token comment"># \u663E\u793A\u524D\u4E00\u5E74\u7684\u65E5\u671F</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;-1 year&quot;</span> +%Y%m%d

<span class="token comment"># \u663E\u793A\u4E0B\u4E00\u5E74\u7684\u65E5\u671F</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;+1 year&quot;</span> +%Y%m%d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F20\u8BF4\u4E2D\u7684 1234567890 \u79D2</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;1970-01-01 1234567890 seconds&quot;</span> +<span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> -d@1234567890 +<span class="token string">&quot;%F %T&quot;</span>
<span class="token number">2009</span>-02-13 <span class="token number">23</span>:02:30



<span class="token comment"># apache\u683C\u5F0F\u8F6C\u6362\uFF1A</span>
<span class="token punctuation">[</span>adong@dog ~<span class="token punctuation">]</span>$ <span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;Dec 5, 2009 12:00:37 AM&quot;</span> +<span class="token string">&quot;%Y-%m-%d %H:%M.%S&quot;</span>
<span class="token number">2009</span>-12-05 00:00.37


<span class="token comment"># \u6709\u65F6\u9700\u8981\u68C0\u67E5\u4E00\u7EC4\u547D\u4EE4\u82B1\u8D39\u7684\u65F6\u95F4\uFF1A</span>
<span class="token assign-left variable">start</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
nmap wangchujiang.com <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token assign-left variable">end</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
<span class="token assign-left variable">difference</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> end <span class="token operator">-</span> start <span class="token variable">))</span></span>
<span class="token comment"># \u663E\u793A\u6267\u884C\u65F6\u95F4</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$difference</span> seconds.

<span class="token comment"># \u5F53\u4F60\u8003\u8651\u8F93\u51FA\u5E26\u6709\u65F6\u95F4\u7684\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F8B\u5982\uFF08Current time: 2019/05/19\uFF09\uFF1A</span>
<span class="token comment"># \u901A\u5E38\u4F7F\u7528\u7684\u65B9\u6CD5\uFF1A</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Current time: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&quot;%Y/%m/%d&quot;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># \u53E6\u4E00\u79CD\u65B9\u6CD5\uFF1A</span>
<span class="token assign-left variable">suffix</span><span class="token operator">=</span><span class="token string">&#39;Current time:&#39;</span>
<span class="token comment"># \u6CE8\u610F\u5982\u679C\u6362\u6210\u5355\u5F15\u53F7\u5C31\u4E0D\u80FD\u66FF\u6362\u53D8\u91CF\u4E86\u3002</span>
<span class="token function">date</span> +<span class="token string">&quot;<span class="token variable">\${suffix}</span> %Y/%m/%d&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[d];function c(p,i){return a(),s("div",null,o)}const l=n(e,[["render",c],["__file","date.html.vue"]]);export{l as default};
