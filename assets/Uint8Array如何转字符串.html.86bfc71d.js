import{_ as n,o as s,c as a,e as t}from"./app.678d7e92.js";const p={},e=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> unit8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token number">72</span><span class="token punctuation">,</span>
  <span class="token number">101</span><span class="token punctuation">,</span>
  <span class="token number">108</span><span class="token punctuation">,</span>
  <span class="token number">108</span><span class="token punctuation">,</span>
  <span class="token number">111</span><span class="token punctuation">,</span>
  <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token number">87</span><span class="token punctuation">,</span>
  <span class="token number">111</span><span class="token punctuation">,</span>
  <span class="token number">114</span><span class="token punctuation">,</span>
  <span class="token number">108</span><span class="token punctuation">,</span>
  <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> unit8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextDecoder</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>unit8<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[e];function o(l,u){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","Uint8Array\u5982\u4F55\u8F6C\u5B57\u7B26\u4E32.html.vue"]]);export{r as default};
