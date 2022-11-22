import{_ as p,r as t,o,c as l,a as s,b as n,d as i,e as a}from"./app.678d7e92.js";const c={},r=a(`<p>\u5148\u5EFA\u7ACB\u4E00\u4E2A\u7A7A\u767D\u9879\u76EE\u76EE\u5F55\uFF0C\u6BD4\u5982\u5728D\u76D8\u65B0\u5EFA\u4E00\u4E2A<code>VuePress</code>\uFF0C\u8FDB\u5165\u76EE\u5F55\u3002</p><h1 id="\u4E00\u3001\u5B89\u88C5vuepress" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5vuepress" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5VuePress</h1><h2 id="_1\u3001\u672C\u5730\u5B89\u88C5-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u672C\u5730\u5B89\u88C5-\u63A8\u8350" aria-hidden="true">#</a> 1\u3001\u672C\u5730\u5B89\u88C5\uFF08\u63A8\u8350\uFF09</h2><p>\u540E\u7EED\u793A\u8303\u90FD\u4EE5\u672C\u5730\u5B89\u88C5\u4E3A\u524D\u63D0\u8FDB\u884C\u8BF4\u660E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2\u3001\u5168\u5C40\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5168\u5C40\u5B89\u88C5" aria-hidden="true">#</a> 2\u3001\u5168\u5C40\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u4E8C\u3001\u8FDB\u5165\u6B63\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u8FDB\u5165\u6B63\u9898" aria-hidden="true">#</a> \u4E8C\u3001\u8FDB\u5165\u6B63\u9898</h1><p>\u672C\u5730\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u4F1A\u751F\u6210<code>package.json</code>\u9879\u76EE\u914D\u7F6E\u6587\u4EF6\u548C<code>node_modules</code>\u76EE\u5F55\u3002\u7136\u540E\u6211\u4EEC\u624B\u52A8\u5EFA\u7ACB\u4E00\u4E2A<code>docs</code>\u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VuePress
\u251C\u2500package.json
\u251C\u2500docs
|  \u251C\u2500README.md
|  \u251C\u2500.vuepress
|  |     \u251C\u2500config.js
|  |     \u251C\u2500public
|  |     |   \u2514favicon.ico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC<code>favicon.ico</code>\u56FE\u6807\u968F\u4FBF\u4E0B\u4E00\u4E2A\u5C31\u53EF\u4EE5\u4E86\u3002\u9700\u8981\u6CE8\u610F\u4E00\u70B9\uFF0C<code>.vuepress</code>\u8FD9\u4E2A\u76EE\u5F55\u662F\u4EE5\u70B9\u5F00\u5934\u7684\uFF0C\u522B\u641E\u9519\u4E86\u3002\u5728Windows\u4E0B\u5EFA\u7ACB\u8FD9\u4E2A\u76EE\u5F55\u9700\u8981\u4E00\u70B9\u5C0F\u6280\u5DE7\u3002\u65B0\u5EFA\u76EE\u5F55\u65F6\uFF0C\u76EE\u5F55\u540D\u5B57\u8F93\u4E3A<code>.vuepress.</code>\u5373\u53EF\u3002</p><p>\u5176\u4E2D<code>docs</code>\u76EE\u5F55\u4E0B<code>README.md</code>\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /favicon.ico
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> \u6B22\u8FCE\u5149\u4E34 \u2192
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /guide/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u7231\u5B66\u4E60\u7684\u597D\u5B69\u5B50
  <span class="token key atrule">details</span><span class="token punctuation">:</span> \u76F8\u4FE1\u6EF4\u6C34\u7A7F\u77F3\u7684\u529B\u91CF\uFF0C\u5949\u884C\u811A\u8E0F\u5B9E\u5730\u7684\u4F5C\u98CE\uFF0C\u575A\u6301\u4E00\u6B65\u4E00\u4E2A\u811A\u5370\u7684\u6210\u957F\u3002
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u5173\u4E8E\u60C6\u6005\u54E5
  <span class="token key atrule">details</span><span class="token punctuation">:</span> \u6211\u662F\u4EBA\u95F4\u60C6\u6005\u5BA2\uFF0C\u77E5\u541B\u4F55\u4E8B\u6CEA\u7EB5\u6A2A\u3002
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u8054\u7CFB\u6211\u4EEC
  <span class="token key atrule">details</span><span class="token punctuation">:</span> Emai\uFF1AiStudyBoy@163.com
<span class="token key atrule">footer</span><span class="token punctuation">:</span> Copyright \xA9 2020<span class="token punctuation">-</span>iStudyBoy.com \u7231\u5B66\u4E60\u7684\u597D\u5B69\u5B50</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=s("code",null,"YAML front matter",-1),u=s("code",null,"VuePress",-1),k={href:"https://jekyllrb.com/docs/front-matter/",target:"_blank",rel:"noopener noreferrer"},v=a(`<blockquote><p>README\u662F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\uFF0C\u4F46\u662F\u7EA6\u5B9A\u4FD7\u6210\u5927\u5BB6\u90FD\u7528\u5927\u5199\u3002</p></blockquote><p><code>.vuepress</code>\u76EE\u5F55\u4E0B<code>config.js</code>\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u7231\u5B66\u4E60\u7684\u597D\u5B69\u5B50&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Hello, my friend!&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&quot;icon&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ga</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">evergreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token comment">// \u7AEF\u53E3\u53F7</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728\u9879\u76EE<strong>\u6839\u76EE\u5F55</strong>\u4E0B\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u6548\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vuepress dev docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u5751\u5C31\u662F\uFF0C\u5982\u679C\u4F60\u4FEE\u6539\u4E86<code>README.md</code>\u7684\u5185\u5BB9\uFF0C\u54EA\u6015\u5237\u65B0\u9875\u9762\u4E5F\u662F\u770B\u4E0D\u5230\u6548\u679C\u7684\uFF0C\u5FC5\u987B<code>\u91CD\u542F\u670D\u52A1\u5668</code>\u3002</p></blockquote><p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u5728<code>http://localhost:8080/</code>\u770B\u5230\u9875\u9762\u6548\u679C\u4E86\u3002</p><h1 id="\u4E09\u3001\u6DF1\u5165\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6DF1\u5165\u4E86\u89E3" aria-hidden="true">#</a> \u4E09\u3001\u6DF1\u5165\u4E86\u89E3</h1><p>\u6211\u4EEC\u73B0\u5728\u9875\u9762\u4E0A<code>\u6B22\u8FCE\u5149\u4E34</code>\u7684\u6309\u94AE\u70B9\u51FB\u540E\u51FA\u73B0404\uFF0C\u627E\u4E0D\u5230\u9875\u9762\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8FD8\u6CA1\u6709\u5EFA\u7ACB\u76F8\u5E94\u5BFC\u822A\u3002 \u6211\u4EEC\u4E4B\u524D\u5728<code>docs</code>\u76EE\u5F55\u4E0B<code>README.md</code>\u4E2D\u6709\u4E00\u53E5\u8BDD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">actionLink</span><span class="token operator">:</span>
<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">guide</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u8BF4<code>\u6B22\u8FCE\u5149\u4E34</code>\u662F\u94FE\u63A5\u5230\u5730\u5740<code>/guide</code>\u7684\u3002\u73B0\u5728\u6211\u4EEC\u7ED9config.js\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Languages&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Chinese&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/language/chinese&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/language/english&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;External&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Guide&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u5EFA\u7ACB\u4E00\u4E2A<code>guide</code>\u76EE\u5F55\uFF0C<code>guide</code>\u76EE\u5F55\u4E0B\u5EFA\u7ACB\u4E00\u4E2A<code>README.md</code>\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5185\u5BB9\u968F\u610F\uFF0C\u4E5F\u5C31\u662F\u4F60\u5C06\u6765\u770B\u5230\u7684\u9875\u9762\u3002\u6BD4\u5982\u6211\u4EEC\u8F93\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> \u7B2C\u4E00\u7AE0\uFF1A\u603B\u5219</span>

<span class="token title important"><span class="token punctuation">##</span> \u4E00\u3001\u725B\u987F\u662F\u8C01\uFF1F</span>

\u53D1\u660E\u4E86\u4E07\u6709\u5F15\u529B

<span class="token title important"><span class="token punctuation">###</span> \u725B\u987F\u7684\u8F76\u4E8B</span>

\u5C0F\u65F6\u5019\u88AB\u82F9\u679C\u7838\u4E86\u2026\u2026

<span class="token title important"><span class="token punctuation">###</span> \u725B\u987F\u7092\u80A1</span>

<span class="token title important"><span class="token punctuation">##</span> \u4E8C\u3001\u725B\u987F\u641E\u5C0F\u4E09\u5417\uFF1F</span>

\u6CA1\u542C\u8BF4\u8FC7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>themeConfig.sidebarDepth</code>\u7528\u6765\u63A7\u5236\u4FA7\u8FB9\u680F\u884C\u4E3A\u3002\u9ED8\u8BA4\u7684\u6DF1\u5EA6\u662F 1\uFF0C\u5B83\u5C06\u63D0\u53D6\u5230<code>h2</code>\u7684\u6807\u9898\uFF0C\u8BBE\u7F6E\u6210<code>0</code>\u5C06\u4F1A\u7981\u7528\u6807\u9898\uFF08headers\uFF09\u94FE\u63A5\u3002\u6700\u5927\u7684\u6DF1\u5EA6\u4E3A<code>2</code>\uFF0C\u5B83\u5C06\u540C\u65F6\u63D0\u53D6<code>h2</code>\u548C<code>h3</code>\u6807\u9898\u3002</p><blockquote><p>\u6211\u4EEC\u4FEE\u6539README\u7684\u5185\u5BB9\u540E\uFF0C\u9875\u9762\u4F1A\u53CA\u65F6\u66F4\u65B0\uFF0C\u4F46\u662F\uFF0C\u4FA7\u8FB9\u680F\u4E0D\u4F1A\u52A8\u6001\u66F4\u65B0\uFF01</p></blockquote>`,16);function m(b,g){const e=t("ExternalLinkIcon");return o(),l("div",null,[r,s("p",null,[n("\u8FD9\u662F\u4E00\u79CD"),d,n("\u683C\u5F0F\u6587\u672C\uFF0C"),u,n("\u9ED8\u8BA4\u652F\u6301\u7684\u3002\u5177\u4F53\u5185\u5BB9\u53EF\u4EE5\u53BB"),s("a",k,[n("\u5B98\u7F51\u4E86\u89E3"),i(e)]),n("\u3002")]),v])}const h=p(c,[["render",m],["__file","VuePress\u600E\u4E48\u7528\uFF1F.html.vue"]]);export{h as default};
