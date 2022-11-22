import{_ as n,o as s,c as a,e}from"./app.678d7e92.js";const t={},i=e(`<h1 id="\u8F93\u51FA\u5F69\u8272\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u5F69\u8272\u6587\u5B57" aria-hidden="true">#</a> \u8F93\u51FA\u5F69\u8272\u6587\u5B57</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">colorLog</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> styles <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">white</span><span class="token operator">:</span> <span class="token string">&quot;\\x1B[37m%s\\x1B[39m&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">blue</span><span class="token operator">:</span> <span class="token string">&quot;\\x1B[34m%s\\x1B[39m&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cyan</span><span class="token operator">:</span> <span class="token string">&quot;\\x1B[36m%s\\x1B[0m&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">green</span><span class="token operator">:</span> <span class="token string">&quot;\\x1B[32m%s\\x1B[39m&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">red</span><span class="token operator">:</span> <span class="token string">&quot;\\x1B[31m%s\\x1B[39m&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yellow</span><span class="token operator">:</span> <span class="token string">&quot;\\x1B[33m%s\\x1b[0m&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>color <span class="token operator">||</span> <span class="token operator">!</span>styles<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    color <span class="token operator">=</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>styles<span class="token punctuation">[</span>color<span class="token punctuation">]</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//cyan</span>
<span class="token punctuation">}</span>

<span class="token function">colorLog</span><span class="token punctuation">(</span><span class="token string">&quot;Test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">colorLog</span><span class="token punctuation">(</span><span class="token string">&quot;Test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fuck&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">colorLog</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u63A7\u5236\u53F0\u5728\u4E00\u884C\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53F0\u5728\u4E00\u884C\u8F93\u51FA" aria-hidden="true">#</a> \u63A7\u5236\u53F0\u5728\u4E00\u884C\u8F93\u51FA</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const readline = require(&#39;readline&#39;);

setInterval(()=&gt;{
    //\u5220\u9664\u5149\u6807\u6240\u5728\u884C
    readline.clearLine(process.stdout, 0);
    //\u79FB\u52A8\u5149\u6807\u5230\u884C\u9996
    readline.cursorTo(process.stdout, 0,0)

    process.stdout.write(new Date().toLocaleString(),&#39;utf-8&#39;);
}, 1000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u8FD9\u4E2A\u539F\u7406\uFF0C\u6211\u81EA\u5DF1\u9020\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u5C0F\u8F6E\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const readline = require(&#39;readline&#39;);

let blank = &#39;                        &#39;;
let blocks = &#39;&#39;;
let bBank = false;
let step = 0;  
function progress(current, total) {
  let progress = 100 * current/total;
  progress = parseInt(progress);  
  let countBlock = parseInt(progress/4);
  
  if(countBlock&gt;step) {
    if(!bBank) {            
      blocks += &#39;=&#39;;
      blank = blank.substring(1);
      bBank = true;
      step = countBlock;            
    } else {
      bBank = false;
    }
  }
  if(progress&lt;10) {
    progress = &#39;0&#39;+progress;
  }
  
  let out = &#39;[&#39; + blocks + &#39;&gt;&#39; +blank +&#39;] &#39; + progress.toString()+ &#39;%&#39;;
  readline.clearLine(process.stdout);
  readline.cursorTo(process.stdout, 0)
  process.stdout.write(out ,&#39;utf-8&#39;);   
}

module.exports.progress = progress;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[i];function o(p,c){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","\u63A7\u5236\u53F0\u7684\u5C0F\u6280\u5DE7.html.vue"]]);export{u as default};
