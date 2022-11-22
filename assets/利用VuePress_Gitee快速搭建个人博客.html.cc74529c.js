import{_ as n,o as s,c as a,e}from"./app.678d7e92.js";const i={},l=e(`<h2 id="\u5229\u7528vuepress\u642D\u5EFA\u672C\u5730\u535A\u5BA2" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528vuepress\u642D\u5EFA\u672C\u5730\u535A\u5BA2" aria-hidden="true">#</a> \u5229\u7528VuePress\u642D\u5EFA\u672C\u5730\u535A\u5BA2</h2><h3 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> \u521D\u59CB\u5316\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u65B0\u76EE\u5F55</span>
<span class="token function">mkdir</span> blog
<span class="token builtin class-name">cd</span> blog

<span class="token comment"># \u521D\u59CB\u5316\u9879\u76EE</span>
<span class="token function">git</span> init
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> <span class="token string">&#39;main&#39;</span>
<span class="token function">yarn</span> init

<span class="token comment"># \u5C06VuePress\u5B89\u88C5\u4E3A\u672C\u5730\u4F9D\u8D56</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u9879\u76EE\u8FDB\u884C\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u9879\u76EE\u8FDB\u884C\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u5BF9\u9879\u76EE\u8FDB\u884C\u57FA\u672C\u914D\u7F6E</h3><ul><li>\u5728<code>package.json</code>\u4E2D\u6DFB\u52A0\u4E00\u4E9B<code>scripts</code></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5C06\u9ED8\u8BA4\u7684\u4E34\u65F6\u76EE\u5F55\u548C\u7F13\u5B58\u76EE\u5F55\u6DFB\u52A0\u5230<code>.gitignore</code>\u6587\u4EF6\u4E2D</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u7BC7\u6587\u6863</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md

<span class="token comment"># \u542F\u52A8\u672C\u5730\u670D\u52A1\u5668\u6765\u6D4F\u89C8\u7F51\u7AD9</span>
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u4E2A\u65F6\u5019\u663E\u793A\u51FA\u6765\u6709\u53EF\u80FD\u662F\u4E71\u7801\uFF01\u8FD9\u662F\u7531\u4E8E<code>Windows</code>\u7684<code>CMD</code>\u9ED8\u8BA4<code>\u7F16\u7801</code>\u4E0D\u662F<code>UTF-8</code>\u5BFC\u81F4\u7684\uFF0C\u53EF\u4EE5\u624B\u52A8\u5C06<code>README.md</code>\u7684\u7F16\u7801\u4FEE\u6539\u8FC7\u6765\u5373\u53EF\u3002</p></div><h2 id="\u7EBF\u4E0A\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u4E0A\u90E8\u7F72" aria-hidden="true">#</a> \u7EBF\u4E0A\u90E8\u7F72</h2><h3 id="\u90E8\u7F72\u5230github" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5230github" aria-hidden="true">#</a> \u90E8\u7F72\u5230GitHub</h3><p>\u9996\u5148\u5728GitHub\u521B\u5EFA\u4E00\u4E2A\u53EB<code>&lt;youname&gt;.github.io</code>\u7684\u4ED3\u5E93\u3002\u7136\u540E\u5728\u535A\u5BA2\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>deploy.sh</code>\u7684\u811A\u672C\u6587\u4EF6\uFF0C\u8FD0\u884C\u5373\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
<span class="token function">yarn</span> build

<span class="token comment"># \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># \u53D1\u5E03\u5230\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> myGitHubBlog git@github.com:520Book/520Book.github.io.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> myGitHubBlog main

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[l];function t(d,o){return s(),a("div",null,c)}const p=n(i,[["render",t],["__file","\u5229\u7528VuePress+Gitee\u5FEB\u901F\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2.html.vue"]]);export{p as default};
