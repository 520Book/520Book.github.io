import{_ as n,o as s,c as e,e as a}from"./app.678d7e92.js";const i={},t=a(`<h1 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><strong>yum</strong>\u662F<code>Fedora</code>\u548C<code>RedHat</code>\u4EE5\u53CA<code>SUSE</code>\u4E2D\u57FA\u4E8E<code>rpm</code>\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF0C\u5B83\u53EF\u4EE5\u81EA\u52A8\u5904\u7406\u4F9D\u8D56\u6027\u5173\u7CFB\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum<span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#options\u8BF4\u660E" aria-hidden="true">#</a> options\u8BF4\u660E</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-h</td><td>\u663E\u793A\u5E2E\u52A9\u4FE1\u606F</td></tr><tr><td>-y</td><td>\u5BF9\u6240\u6709\u7684\u63D0\u95EE\u90FD\u56DE\u7B54<code>yes</code></td></tr><tr><td>-c</td><td>\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6</td></tr><tr><td>-q</td><td>\u5B89\u9759\u6A21\u5F0F</td></tr><tr><td>-v</td><td>\u8BE6\u7EC6\u6A21\u5F0F</td></tr><tr><td>-d</td><td>\u8BBE\u7F6E\u8C03\u8BD5\u7B49\u7EA7\uFF080-10\uFF09</td></tr><tr><td>-e</td><td>\u8BBE\u7F6E\u9519\u8BEF\u7B49\u7EA7\uFF080-10\uFF09</td></tr><tr><td>-R</td><td>\u8BBE\u7F6Eyum\u5904\u7406\u4E00\u4E2A\u547D\u4EE4\u7684\u6700\u5927\u7B49\u5F85\u65F6\u95F4</td></tr><tr><td>-C</td><td>\u5B8C\u5168\u4ECE\u7F13\u5B58\u4E2D\u8FD0\u884C\uFF0C\u800C\u4E0D\u53BB\u4E0B\u8F7D\u6216\u8005\u66F4\u65B0\u4EFB\u4F55\u5934\u6587\u4EF6</td></tr></tbody></table><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>install\uFF1A\u5B89\u88C5rpm\u8F6F\u4EF6\u5305\uFF1B update\uFF1A\u66F4\u65B0rpm\u8F6F\u4EF6\u5305\uFF1B check-update\uFF1A\u68C0\u67E5\u662F\u5426\u6709\u53EF\u7528\u7684\u66F4\u65B0rpm\u8F6F\u4EF6\u5305\uFF1B remove\uFF1A\u5220\u9664\u6307\u5B9A\u7684rpm\u8F6F\u4EF6\u5305\uFF1B list\uFF1A\u663E\u793A\u8F6F\u4EF6\u5305\u7684\u4FE1\u606F\uFF1B search\uFF1A\u68C0\u67E5\u8F6F\u4EF6\u5305\u7684\u4FE1\u606F\uFF1B info\uFF1A\u663E\u793A\u6307\u5B9A\u7684rpm\u8F6F\u4EF6\u5305\u7684\u63CF\u8FF0\u4FE1\u606F\u548C\u6982\u8981\u4FE1\u606F\uFF1B clean\uFF1A\u6E05\u7406yum\u8FC7\u671F\u7684\u7F13\u5B58\uFF1B shell\uFF1A\u8FDB\u5165yum\u7684shell\u63D0\u793A\u7B26\uFF1B resolvedep\uFF1A\u663E\u793Arpm\u8F6F\u4EF6\u5305\u7684\u4F9D\u8D56\u5173\u7CFB\uFF1B localinstall\uFF1A\u5B89\u88C5\u672C\u5730\u7684rpm\u8F6F\u4EF6\u5305\uFF1B localupdate\uFF1A\u663E\u793A\u672C\u5730rpm\u8F6F\u4EF6\u5305\u8FDB\u884C\u66F4\u65B0\uFF1B deplist\uFF1A\u663E\u793Arpm\u8F6F\u4EF6\u5305\u7684\u6240\u6709\u4F9D\u8D56\u5173\u7CFB\u3002</p><h1 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h1><h2 id="\u67E5\u8BE2-\u54EA\u4E9B\u8F6F\u4EF6\u5305\u4E2D\u6709\u6307\u5B9A\u547D\u4EE4-\u7684\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2-\u54EA\u4E9B\u8F6F\u4EF6\u5305\u4E2D\u6709\u6307\u5B9A\u547D\u4EE4-\u7684\u529F\u80FD" aria-hidden="true">#</a> \u67E5\u8BE2\u201C\u54EA\u4E9B\u8F6F\u4EF6\u5305\u4E2D\u6709\u6307\u5B9A\u547D\u4EE4\u201D\u7684\u529F\u80FD</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># net-tools\u8F6F\u4EF6\u5305\u4E2D\u6709ifconfig\u547D\u4EE4</span>
<span class="token comment"># \u53EF\u4EE5\u4F7F\u7528 yum -y install net-tools \u5B89\u88C5\u540E\u4F7F\u7528</span>
<span class="token punctuation">[</span>root@dog ~<span class="token punctuation">]</span><span class="token comment"># yum provides */ifconfig</span>
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: mirrors.bfsu.edu.cn
 * extras: mirrors.bfsu.edu.cn
 * updates: mirrors.bfsu.edu.cn
net-tools-2.0-0.25.20131004git.el7.x86_64 <span class="token builtin class-name">:</span> Basic networking tools
Repo        <span class="token builtin class-name">:</span> base
Matched from:
Filename    <span class="token builtin class-name">:</span> /sbin/ifconfig

<span class="token comment"># bind-utils \u8F6F\u4EF6\u5305\u4E2D\u6709 nslookup \u547D\u4EE4</span>
<span class="token comment"># \u53EF\u4EE5\u4F7F\u7528 yum -y install bind-utils \u5B89\u88C5\u540E\u4F7F\u7528</span>
<span class="token punctuation">[</span>root@dog ~<span class="token punctuation">]</span><span class="token comment"># yum provides */nslookup</span>
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: mirrors.bfsu.edu.cn
 * extras: mirrors.bfsu.edu.cn
 * updates: mirrors.bfsu.edu.cn
<span class="token number">32</span>:bind-utils-9.11.4-26.P2.el7.x86_64 <span class="token builtin class-name">:</span> Utilities <span class="token keyword">for</span> querying DNS name servers
Repo        <span class="token builtin class-name">:</span> base
Matched from:
Filename    <span class="token builtin class-name">:</span> /usr/bin/nslookup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u66F4\u65B0\u548C\u5347\u7EA7</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum update               <span class="token comment">#\u5168\u90E8\u66F4\u65B0</span>
yum update package1      <span class="token comment">#\u66F4\u65B0\u6307\u5B9A\u7A0B\u5E8F\u5305package1</span>
yum check-update         <span class="token comment">#\u68C0\u67E5\u53EF\u66F4\u65B0\u7684\u7A0B\u5E8F</span>
yum upgrade package1     <span class="token comment">#\u5347\u7EA7\u6307\u5B9A\u7A0B\u5E8F\u5305package1</span>
yum groupupdate group1   <span class="token comment">#\u5347\u7EA7\u7A0B\u5E8F\u7EC4group1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u67E5\u627E\u548C\u663E\u793A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5 MySQL \u662F\u5426\u5DF2\u5B89\u88C5</span>
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> mysql
yum list installed mysql*

yum info package1      <span class="token comment">#\u663E\u793A\u5B89\u88C5\u5305\u4FE1\u606Fpackage1</span>
yum list               <span class="token comment">#\u663E\u793A\u6240\u6709\u5DF2\u7ECF\u5B89\u88C5\u548C\u53EF\u4EE5\u5B89\u88C5\u7684\u7A0B\u5E8F\u5305</span>
yum list package1      <span class="token comment">#\u663E\u793A\u6307\u5B9A\u7A0B\u5E8F\u5305\u5B89\u88C5\u60C5\u51B5package1</span>
yum groupinfo group1   <span class="token comment">#\u663E\u793A\u7A0B\u5E8F\u7EC4group1\u4FE1\u606Fyum search string \u6839\u636E\u5173\u952E\u5B57string\u67E5\u627E\u5B89\u88C5\u5305</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5220\u9664\u7A0B\u5E8F</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum remove <span class="token operator">&amp;</span><span class="token comment">#124; erase package1   #\u5220\u9664\u7A0B\u5E8F\u5305package1</span>
yum groupremove group1             <span class="token comment">#\u5220\u9664\u7A0B\u5E8F\u7EC4group1</span>
yum deplist package1               <span class="token comment">#\u67E5\u770B\u7A0B\u5E8Fpackage1\u4F9D\u8D56\u60C5\u51B5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6E05\u9664\u7F13\u5B58</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum clean packages       <span class="token comment"># \u6E05\u9664\u7F13\u5B58\u76EE\u5F55\u4E0B\u7684\u8F6F\u4EF6\u5305</span>
yum clean headers        <span class="token comment"># \u6E05\u9664\u7F13\u5B58\u76EE\u5F55\u4E0B\u7684 headers</span>
yum clean oldheaders     <span class="token comment"># \u6E05\u9664\u7F13\u5B58\u76EE\u5F55\u4E0B\u65E7\u7684 headers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u66F4\u591A\u5B9E\u4F8B</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yum</span>
/etc/yum.repos.d/       <span class="token comment"># yum \u6E90\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">vi</span> /etc/yum.repos.d/nginx.repo <span class="token comment"># \u4E3E\u4E2A\u6817\u5B50: nginx yum\u6E90</span>
<span class="token punctuation">[</span>nginx<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/centos/6/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># yum mirror</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
<span class="token function">wget</span> https://mirror.tuna.tsinghua.edu.cn/help/centos/
yum makecache

<span class="token comment"># \u6DFB\u52A0\u4E2D\u6587\u8BED\u8A00\u652F\u6301</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C <span class="token comment"># \u539F\u59CB\u8BED\u8A00</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.utf8 <span class="token comment"># \u5207\u6362\u5230\u4E2D\u6587</span>
yum groupinstall <span class="token string">&quot;Chinese Support&quot;</span> <span class="token comment"># \u6DFB\u52A0\u4E2D\u6587\u8BED\u8A00\u652F\u6301</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[t];function d(c,r){return s(),e("div",null,l)}const p=n(i,[["render",d],["__file","yum.html.vue"]]);export{p as default};
