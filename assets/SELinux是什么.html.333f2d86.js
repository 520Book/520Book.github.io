import{_ as n,o as s,c as e,e as a}from"./app.678d7e92.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bselinux\u72B6\u6001\uFF0C\u5982\u679C\u4E3Aenable\u5219\u8868\u793A\u4E3A\u5F00\u542F</span>
sestatus <span class="token parameter variable">-v</span>

<span class="token comment"># \u67E5\u770Bselinux\u7684\u6A21\u5F0F</span>
getenforce

<span class="token comment"># \u6C38\u4E45\u6027\u5173\u95EDselinux\uFF08\u91CD\u542F\u670D\u52A1\u5668\u540E\u751F\u6548\uFF09</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SELINUX=enforcing/SELINUX=disabled/&#39;</span> /etc/selinux/config

<span class="token comment"># \u4E34\u65F6\u6027\u5173\u95ED\uFF08\u7ACB\u5373\u751F\u6548\uFF0C\u4F46\u662F\u91CD\u542F\u670D\u52A1\u5668\u540E\u5931\u6548\uFF09</span>
<span class="token comment">#\u8BBE\u7F6Eselinux\u4E3Apermissive\u6A21\u5F0F\uFF08\u5373\u5173\u95ED\uFF09</span>
setenforce <span class="token number">0</span>

<span class="token comment"># \u8BBE\u7F6Eselinux\u4E3Aenforcing\u6A21\u5F0F\uFF08\u5373\u5F00\u542F\uFF09</span>
setenforce <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(d,r){return s(),e("div",null,c)}const m=n(i,[["render",t],["__file","SELinux\u662F\u4EC0\u4E48.html.vue"]]);export{m as default};
