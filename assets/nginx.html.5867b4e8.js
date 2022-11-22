import{_ as n,o as s,c as a,e}from"./app.678d7e92.js";const i={},c=e(`<p>centos7\u5B89\u88C5\u548C\u914D\u7F6Enginx</p><h1 id="\u4E00\u3001\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5nginx" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5nginx</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u628Anginx\u6E90\u52A0\u5165yum\u4E2D</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm</span>

<span class="token comment"># \u67E5\u770Bnginx\u4FE1\u606F</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># yum info nginx</span>

<span class="token comment"># \u5B89\u88C5ngnix</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># yum install nginx</span>

<span class="token comment"># \u67E5\u770Bnginx\u7248\u672C</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nginx -v</span>

<span class="token comment"># \u542F\u52A8nginx</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl start nginx.service</span>

<span class="token comment"># \u8BBF\u95EEnginx</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl -i localhost</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4E8C\u3001\u914D\u7F6Enginx" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u914D\u7F6Enginx" aria-hidden="true">#</a> \u4E8C\u3001\u914D\u7F6Enginx</h1><p><code>nginx</code>\u7684\u914D\u7F6E\u6587\u4EF6\u5728<code>/etc/nginx/</code>\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ll /etc/nginx/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-\u4FEE\u6539\u670D\u52A1\u540D" tabindex="-1"><a class="header-anchor" href="#_1-\u4FEE\u6539\u670D\u52A1\u540D" aria-hidden="true">#</a> 1. \u4FEE\u6539\u670D\u52A1\u540D</h2><p>\u4FEE\u6539<code>/etc/nginx/conf.d/default.conf</code>\u7684<code>server_name</code>\u90E8\u5206\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server_name  test.com;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5B8C\u540E\u8BB0\u5F97\u91CD\u8F7D\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost nginx<span class="token punctuation">]</span><span class="token comment"># /usr/sbin/nginx -s reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),t=[c];function o(l,d){return s(),a("div",null,t)}const r=n(i,[["render",o],["__file","nginx.html.vue"]]);export{r as default};
