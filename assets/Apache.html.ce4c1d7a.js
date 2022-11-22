import{_ as n,o as s,c as e,e as a}from"./app.678d7e92.js";const t={},i=a(`<h1 id="\u57FA\u7840\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5Apache</span>
yum <span class="token function">install</span> httpd* <span class="token parameter variable">-y</span>

<span class="token comment"># \u67E5\u770B\u8FD0\u884C\u72B6\u6001</span>
systemctl status httpd.service

<span class="token comment"># \u4FEE\u6539\u4E3B\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vim</span> /etc/httpd/conf/httpd.conf     
\u884C  <span class="token number">119</span>   DocumentRoot <span class="token string">&quot;/data/ar&quot;</span>
    <span class="token number">124</span>   <span class="token operator">&lt;</span>Directory <span class="token string">&quot;/data/ar&quot;</span><span class="token operator">&gt;</span>
    <span class="token number">164</span>   Directory index.html lql.html

<span class="token comment"># \u9632\u706B\u5899\u5141\u8BB8http\u901A\u8FC7</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-service<span class="token operator">=</span>http  

<span class="token comment"># \u91CD\u542F\u670D\u52A1\u5668</span>
systemctl restart httpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1>`,3),c=[i];function l(r,d){return s(),e("div",null,c)}const p=n(t,[["render",l],["__file","Apache.html.vue"]]);export{p as default};
