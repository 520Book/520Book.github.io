import{_ as a,r as e,o as t,c as o,a as n,b as p,d as c,e as i}from"./app.678d7e92.js";const l={},u={href:"https://vuex.vuejs.org/zh/installation.html",target:"_blank",rel:"noopener noreferrer"},d=i(`<p>\u6BCF\u4E00\u4E2A<code>Vuex</code>\u5E94\u7528\u7684\u6838\u5FC3\u5C31\u662F<code>store</code>\u3002<code>store</code>\u5C31\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5B83\u5305\u542B\u7740\u4F60\u7684\u5E94\u7528\u4E2D\u5927\u90E8\u5206\u7684\u72B6\u6001<code>state</code>\uFF0C\u6216\u8005\u7406\u89E3\u4E3A\u5168\u5C40\u7684\u6570\u636E\u3002\u4F46\u662F\uFF0C<code>Vuex</code>\u548C\u5355\u7EAF\u7684\u5168\u5C40\u5BF9\u8C61\u6709\u4EE5\u4E0B\u4E24\u70B9\u4E0D\u540C\uFF1A</p><ul><li><code>Vuex</code>\u7684\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\u3002\u5F53<code>Vue</code>\u7EC4\u4EF6\u4ECE<code>store</code>\u4E2D\u8BFB\u53D6\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u82E5<code>store</code>\u4E2D\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u76F8\u5E94\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u76F8\u5E94\u5730\u5F97\u5230\u9AD8\u6548\u66F4\u65B0\u3002</li><li>\u4F60\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8<code>store</code>\u4E2D\u7684\u72B6\u6001\u3002\u6539\u53D8<code>store</code>\u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u9014\u5F84\u5C31\u662F\u663E\u5F0F\u5730\u63D0\u4EA4<code>commit mutation</code>\u3002</li></ul><h1 id="\u5B89\u88C5vuex" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5vuex" aria-hidden="true">#</a> \u5B89\u88C5Vuex</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vuex <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u7B80\u5355\u7684\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u5B9E\u4F8B" aria-hidden="true">#</a> \u7B80\u5355\u7684\u5B9E\u4F8B</h1><p>\u5728<code>main.js</code>\u4E2D\u52A0\u5165\u4E0B\u9762\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">str</span><span class="token operator">:</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>str <span class="token operator">+=</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;adong&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>str <span class="token operator">=</span> <span class="token string">&quot;SB vue&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u6BCF\u4E2A<code>mutation</code>\u90FD\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684<code>\u4E8B\u4EF6\u7C7B\u578B(type)</code>\u548C \u4E00\u4E2A<code>\u56DE\u8C03\u51FD\u6570 handler</code>\u3002\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u5C31\u662F\u6211\u4EEC\u5B9E\u9645\u8FDB\u884C\u72B6\u6001\u66F4\u6539\u7684\u5730\u65B9\uFF0C\u5E76\u4E14\u5B83\u4F1A\u63A5\u53D7<code>state</code>\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</p><p>\u901A\u8FC7\u8FD9\u4E2A\u5B9E\u4F8B\u6211\u4EEC\u5927\u4F53\u53EF\u4EE5\u660E\u767D<code>store</code>\u5230\u5E95\u662F\u5E72\u561B\u7684\uFF0C\u8BF4\u767D\u4E86\u5C31\u662F\u4E2A\u5168\u5C40\u5BF9\u8C61\u7F62\u4E86\u3002<code>store.state</code> \u6765\u83B7\u53D6\u72B6\u6001\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u901A\u8FC7<code>store.commit</code>\u65B9\u6CD5\u89E6\u53D1\u72B6\u6001\u53D8\u66F4\uFF1A\u90A3\u4E3A\u4EC0\u4E48\u7B80\u5355\u7684\u4E8B\u60C5\u8981\u590D\u6742\u5316\uFF1F\u4E3B\u8981\u662F\u4E3A\u4E86\u54CD\u5E94\u5F0F\u3002</p><h1 id="\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6store" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6store" aria-hidden="true">#</a> \u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6store</h1><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u6211\u4EEC\u76F4\u63A5\u5728<code>main.js</code>\u4E2D\u64CD\u4F5C\uFF0C\u90A3\u5982\u4F55\u5728\u5176\u5B83\u7EC4\u4EF6\u4E2D\u5F15\u7528<code>store</code>\u5462\uFF1F\u9996\u5148\uFF0C\u6211\u4EEC\u5728\u6839<code>vue</code>\u5B9E\u4F8B\u5316\u4E2D\u8981\u52A0\u5165<code>store</code>\uFF0C\u6BD4\u5982\u5728<code>main.js</code>\u4E2D\u52A0\u5165\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  store<span class="token punctuation">,</span> <span class="token comment">// \u5C06store\u52A0\u5165\uFF0C\u8FD9\u4E2Astore\u5C31\u662F\u6211\u4EEC\u524D\u9762\u5B9A\u4E49\u7684</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6211\u4EEC\u5728\u5B50\u7EC4\u4EF6\u4E2D\u7684<code>computed</code>\u5C5E\u6027\u4E2D\u5C31\u53EF\u4EE5\u901A\u8FC7<code>this.$store</code>\u8BBF\u95EE\u5230<code>store</code>\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// view
&lt;label&gt;{{ str }}&lt;/label&gt;

// js
computed: {
  str () {
    return this.$store.state.str
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mapstate-\u8F85\u52A9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#mapstate-\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a> mapState \u8F85\u52A9\u51FD\u6570</h2><p>\u5F53\u4E00\u4E2A\u7EC4\u4EF6\u9700\u8981\u83B7\u53D6\u591A\u4E2A\u72B6\u6001\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>mapState</code>\u8F85\u52A9\u51FD\u6570\u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u8BA1\u7B97\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>

<span class="token literal-property property">computed</span><span class="token operator">:</span>
<span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u7BAD\u5934\u51FD\u6570\u53EF\u4F7F\u4EE3\u7801\u66F4\u7B80\u7EC3</span>
  <span class="token function-variable function">str</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>str<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6620\u5C04\u7684\u8BA1\u7B97\u5C5E\u6027\u7684\u540D\u79F0\u4E0E<code>state</code>\u7684\u5B50\u8282\u70B9\u540D\u79F0\u76F8\u540C\u65F6\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7ED9<code>mapState</code>\u4F20\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u6765\u8FDB\u4E00\u6B65\u7B80\u5316\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span>
<span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8FD8\u6709\u5176\u5B83\u672C\u5730\u5C5E\u6027\u9700\u8981\u8BA1\u7B97\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>...</code>\u6765\u5C55\u5F00<code>mapState</code>\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">localComputed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u4F7F\u7528\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26\u5C06\u6B64\u5BF9\u8C61\u6DF7\u5165\u5230\u5916\u90E8\u5BF9\u8C61\u4E2D</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">&#39;str&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="mutation" tabindex="-1"><a class="header-anchor" href="#mutation" aria-hidden="true">#</a> Mutation</h1><h1 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h1><p><code>Action</code>\u4E0E<code>Mutation</code>\u7684\u552F\u4E00\u533A\u522B\u5C31\u5728\u4E8E\uFF0C<code>Mutation</code>\u91CC\u9762\u53EA\u652F\u6301<code>\u540C\u6B65</code>\u64CD\u4F5C\uFF0C\u800C<code>Action</code>\u53EF\u4EE5\u652F\u6301<code>\u5F02\u6B65</code>\u64CD\u4F5C\u3002\u5E76\u4E14\uFF0C\u5F88\u91CD\u8981\u7684\u4E00\u70B9\uFF0C<code>Action</code>\u662F\u4F9D\u8D56\u4E8E<code>Mutation</code>\u800C\u751F\u5B58\u7684\uFF01\uFF01</p>`,24);function r(k,v){const s=e("ExternalLinkIcon");return t(),o("div",null,[n("p",null,[n("a",u,[p("Vuex\u5B98\u7F51"),c(s)])]),d])}const b=a(l,[["render",r],["__file","Vuex.html.vue"]]);export{b as default};