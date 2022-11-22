import{_ as e,o as s,c as a,e as n}from"./app.678d7e92.js";const d={},t=n(`<h1 id="usermod" tabindex="-1"><a class="header-anchor" href="#usermod" aria-hidden="true">#</a> usermod</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>usermod</code>\u7528\u4E8E\u4FEE\u6539\u7528\u6237\u7684\u57FA\u672C\u4FE1\u606F\u3002 usermod</p><p>\u547D\u4EE4\u4E0D\u5141\u8BB8\u4F60\u6539\u53D8\u6B63\u5728\u7EBF\u4E0A\u7684\u4F7F\u7528\u8005\u5E10\u53F7\u540D\u79F0\u3002\u5F53 usermod \u547D\u4EE4\u7528\u6765\u6539\u53D8user id\uFF0C\u5FC5\u987B\u786E\u8BA4\u8FD9\u540Duser\u6CA1\u5728\u7535\u8111\u4E0A\u6267\u884C\u4EFB\u4F55\u7A0B\u5E8F\u3002\u4F60\u9700\u624B\u52A8\u66F4\u6539\u4F7F\u7528\u8005\u7684 crontab \u6863\u3002\u4E5F\u9700\u624B\u52A8\u66F4\u6539\u4F7F\u7528\u8005\u7684 at \u5DE5\u4F5C\u6863\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usermod<span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9009\u9879\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u8BF4\u660E" aria-hidden="true">#</a> \u9009\u9879\u8BF4\u660E</h2><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-c, --comment COMMENT</td><td>\u4FEE\u6539\u7528\u6237\u5E10\u53F7\u7684\u5907\u6CE8\u6587\u5B57</td></tr><tr><td>-d, --home HOME_DIR</td><td>\u4FEE\u6539\u7528\u6237\u767B\u5165\u65F6\u7684\u76EE\u5F55\uFF0C\u53EA\u662F\u4FEE\u6539/etc/passwd\u4E2D\u7528\u6237\u7684\u5BB6\u76EE\u5F55\u914D\u7F6E\u4FE1\u606F\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\u65B0\u7684\u5BB6\u76EE\u5F55\uFF0C\u901A\u5E38\u548C-m\u4E00\u8D77\u4F7F\u7528\uFF1B</td></tr><tr><td>-e, --expiredate EXPIRE_DATE</td><td>\u4FEE\u6539\u5E10\u53F7\u7684\u6709\u6548\u671F\u9650</td></tr><tr><td>-f, --inactive INACTIVE</td><td>\u4FEE\u6539\u5728\u5BC6\u7801\u8FC7\u671F\u540E\u591A\u5C11\u5929\u5373\u5173\u95ED\u8BE5\u5E10\u53F7</td></tr><tr><td>-g, --gid GROUP</td><td>\u4FEE\u6539\u7528\u6237\u6240\u5C5E\u7684\u7FA4\u7EC4</td></tr><tr><td>-G, --groups GROUPS</td><td>\u4FEE\u6539\u7528\u6237\u6240\u5C5E\u7684\u9644\u52A0\u7FA4\u7EC4</td></tr><tr><td>-l, --login NEW_LOGIN</td><td>\u4FEE\u6539\u5E10\u53F7\u540D\u79F0</td></tr><tr><td>-m, --move-home</td><td>\u79FB\u52A8\u7528\u6237\u5BB6\u76EE\u5F55\u5230\u65B0\u7684\u4F4D\u7F6E\uFF0C\u4E0D\u80FD\u5355\u72EC\u4F7F\u7528\uFF0C\u4E00\u822C\u4E0E-d\u4E00\u8D77\u4F7F\u7528\u3002</td></tr><tr><td>-L</td><td>\u9501\u5B9A\u7528\u6237\u5BC6\u7801\uFF0C\u4F7F\u5BC6\u7801\u65E0\u6548</td></tr><tr><td>-s, --shell SHELL</td><td>\u4FEE\u6539\u7528\u6237\u767B\u5165\u540E\u6240\u4F7F\u7528\u7684shell</td></tr><tr><td>-u, --uid UID</td><td>\u4FEE\u6539\u7528\u6237ID</td></tr><tr><td>-U</td><td>\u89E3\u9664\u5BC6\u7801\u9501\u5B9A</td></tr></tbody></table><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FEE\u6539\u7528\u6237\u540D</span>
$ <span class="token function">usermod</span> <span class="token parameter variable">-l</span> oldname newname 

<span class="token comment"># \u4FEE\u6539\u5BB6\u76EE\u5F55</span>
$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-d</span> /home/\u65B0\u7528\u6237\u540D <span class="token parameter variable">-m</span> \u65B0\u7528\u6237\u540D

<span class="token comment"># \u4FEE\u6539\u7EC4\u540D</span>
$ <span class="token function">groupmod</span> <span class="token parameter variable">-n</span> \u65B0\u7528\u6237\u540D \u65E7\u7528\u6237\u540D

<span class="token comment"># \u4FEE\u6539UID</span>
$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-u</span> <span class="token number">1000</span> \u65B0\u7528\u6237\u540D

<span class="token comment"># \u68C0\u67E5</span>
$ <span class="token function">id</span> \u65B0\u7528\u6237\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>usermod -l</code>\u53EA\u4F1A\u66F4\u6539\u7528\u6237\u540D\uFF0C\u800C\u5176\u4ED6\u7684\u4E1C\u897F\uFF0C\u6BD4\u5982\u7528\u6237\u7EC4\u3001\u5BB6\u76EE\u5F55\u3001ID \u7B49\u90FD\u4FDD\u6301\u4E0D\u53D8\uFF0C\u6240\u4EE5\u9700\u8981\u540E\u7EED\u547D\u4EE4\u4E00\u8D77\u6765\u914D\u5408\u3002</p></blockquote><p>\u5982\u679C\u4F60\u5728\u5F53\u524D\u8D26\u53F7\u64CD\u4F5C\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u4ECE\u8981\u6539\u540D\u7684\u5E10\u53F7\u4E2D\u767B\u51FA\u5E76\u6740\u6389\u8BE5\u7528\u6237\u7684\u6240\u6709\u8FDB\u7A0B\uFF0C\u8981\u6740\u6389\u8BE5\u7528\u6237\u7684\u6240\u6709\u8FDB\u7A0B\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u547D\u4EE4</p><p>$ sudo pkill -u \u65E7\u7528\u6237\u540D $ sudo pkill -9 -u \u65E7\u7528\u6237\u540D</p><p>\u5C06 newuser2 \u6DFB\u52A0\u5230\u7EC4 staff \u4E2D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-G</span> staff newuser2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539newuser\u7684\u7528\u6237\u540D\u4E3Anewuser1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-l</span> newuser1 newuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9501\u5B9A\u8D26\u53F7newuser1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-L</span> newuser1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89E3\u9664\u5BF9newuser1\u7684\u9501\u5B9A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-U</span> newuser1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u589E\u52A0\u7528\u6237\u5230\u7528\u6237\u7EC4\u4E2D:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apk <span class="token function">add</span> shadow <span class="token comment"># \u5B89\u88C5 shadow \u5305, usermod \u547D\u4EE4\u5305\u542B\u5728 usermod \u4E2D</span>
<span class="token function">usermod</span> <span class="token parameter variable">-aG</span> group user <span class="token comment"># \u6DFB\u52A0\u7528\u6237\u5230\u7528\u6237\u7EC4\u4E2D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-a</code> \u53C2\u6570\u8868\u793A\u9644\u52A0\uFF0C\u53EA\u548C <code>-G</code> \u53C2\u6570\u4E00\u540C\u4F7F\u7528\uFF0C\u8868\u793A\u5C06\u7528\u6237\u589E\u52A0\u5230\u7EC4\u4E2D\u3002</p><p>\u4FEE\u6539\u7528\u6237\u5BB6\u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@node-1 ~]# useradd lutixiaya
[root@node-1 ~]# ls /home
lutixiaya
[root@node-1 ~]# usermod -md /data/new_home lutixiaya
[root@node-1 ~]# ls /home/
[root@node-1 ~]# ls /data/
new_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),i=[t];function r(l,o){return s(),a("div",null,i)}const u=e(d,[["render",r],["__file","usermod.html.vue"]]);export{u as default};