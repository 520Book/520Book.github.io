import{_ as n,o as a,c as s,e}from"./app.678d7e92.js";const i={},t=e(`<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p>Canvas API\uFF08\u753B\u5E03\uFF09\u7528\u4E8E\u5728\u7F51\u9875\u5B9E\u65F6\u751F\u6210\u56FE\u50CF\uFF0C\u5E76\u4E14\u53EF\u4EE5\u64CD\u4F5C\u56FE\u50CF\u5185\u5BB9\uFF0C\u57FA\u672C\u4E0A\u5B83\u662F\u4E00\u4E2A\u53EF\u4EE5\u7528JavaScript\u64CD\u4F5C\u7684\u4F4D\u56FE\uFF08bitmap\uFF09\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myCanvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas\uFF01
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u8FD9\u4E2AAPI\uFF0C\u5219\u5C31\u4F1A\u663E\u793A<code>&lt;canvas&gt;</code>\u6807\u7B7E\u4E2D\u95F4\u7684\u6587\u5B57\u2014\u2014\u201C\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas\uFF01\u201D\u3002</p><p>\u6BCF\u4E2Acanvas\u8282\u70B9\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684context\u5BF9\u8C61\uFF08\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF09\uFF0CCanvas API\u5B9A\u4E49\u5728\u8FD9\u4E2Acontext\u5BF9\u8C61\u4E0A\u9762\uFF0C\u6240\u4EE5\u9700\u8981\u83B7\u53D6\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u65B9\u6CD5\u662F\u4F7F\u7528getContext\u65B9\u6CD5\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>var canvas = document.getElementById(&#39;myCanvas&#39;);
 
if (canvas.getContext) {
  var ctx = canvas.getContext(&#39;2d&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CgetContext\u65B9\u6CD5\u6307\u5B9A\u53C2\u65702d\uFF0C\u8868\u793A\u8BE5canvas\u8282\u70B9\u7528\u4E8E\u751F\u62102D\u56FE\u6848\uFF08\u5373\u5E73\u9762\u56FE\u6848\uFF09\u3002\u5982\u679C\u53C2\u6570\u662Fwebgl\uFF0C\u5C31\u8868\u793A\u7528\u4E8E\u751F\u62103D\u56FE\u50CF\uFF08\u5373\u7ACB\u4F53\u56FE\u6848\uFF09\uFF0C\u8FD9\u90E8\u5206\u5B9E\u9645\u4E0A\u5355\u72EC\u53EB\u505AWebGL API\uFF08\u672C\u4E66\u4E0D\u6D89\u53CA\uFF09\u3002</p><p>\u7ED8\u56FE\u65B9\u6CD5 canvas\u753B\u5E03\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7528\u6765\u4F5C\u56FE\u7684\u5E73\u9762\u7A7A\u95F4\uFF0C\u8BE5\u7A7A\u95F4\u7684\u6BCF\u4E2A\u70B9\u90FD\u6709\u81EA\u5DF1\u7684\u5750\u6807\uFF0Cx\u8868\u793A\u6A2A\u5750\u6807\uFF0Cy\u8868\u793A\u7AD6\u5750\u6807\u3002\u539F\u70B9(0, 0)\u4F4D\u4E8E\u56FE\u50CF\u5DE6\u4E0A\u89D2\uFF0Cx\u8F74\u7684\u6B63\u5411\u662F\u539F\u70B9\u5411\u53F3\uFF0Cy\u8F74\u7684\u6B63\u5411\u662F\u539F\u70B9\u5411\u4E0B\u3002</p><h2 id="_1-\u7ED8\u5236\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_1-\u7ED8\u5236\u8DEF\u5F84" aria-hidden="true">#</a> \uFF081\uFF09\u7ED8\u5236\u8DEF\u5F84</h2><p>beginPath\u65B9\u6CD5\u8868\u793A\u5F00\u59CB\u7ED8\u5236\u8DEF\u5F84\uFF0CmoveTo(x, y)\u65B9\u6CD5\u8BBE\u7F6E\u7EBF\u6BB5\u7684\u8D77\u70B9\uFF0ClineTo(x, y)\u65B9\u6CD5\u8BBE\u7F6E\u7EBF\u6BB5\u7684\u7EC8\u70B9\uFF0Cstroke\u65B9\u6CD5\u7528\u6765\u7ED9\u900F\u660E\u7684\u7EBF\u6BB5\u7740\u8272\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>ctx.beginPath(); // \u5F00\u59CB\u8DEF\u5F84\u7ED8\u5236
ctx.moveTo(20, 20); // \u8BBE\u7F6E\u8DEF\u5F84\u8D77\u70B9\uFF0C\u5750\u6807\u4E3A(20,20)
ctx.lineTo(200, 20); // \u7ED8\u5236\u4E00\u6761\u5230(200,20)\u7684\u76F4\u7EBF
ctx.lineWidth = 1.0; // \u8BBE\u7F6E\u7EBF\u5BBD
ctx.strokeStyle = &#39;#CC0000&#39;; // \u8BBE\u7F6E\u7EBF\u7684\u989C\u8272
ctx.stroke(); // \u8FDB\u884C\u7EBF\u7684\u7740\u8272\uFF0C\u8FD9\u65F6\u6574\u6761\u7EBF\u624D\u53D8\u5F97\u53EF\u89C1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>moveto\u548Clineto\u65B9\u6CD5\u53EF\u4EE5\u591A\u6B21\u4F7F\u7528\u3002\u6700\u540E\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528closePath\u65B9\u6CD5\uFF0C\u81EA\u52A8\u7ED8\u5236\u4E00\u6761\u5F53\u524D\u70B9\u5230\u8D77\u70B9\u7684\u76F4\u7EBF\uFF0C\u5F62\u6210\u4E00\u4E2A\u5C01\u95ED\u56FE\u5F62\uFF0C\u7701\u5374\u4F7F\u7528\u4E00\u6B21lineto\u65B9\u6CD5\u3002</p><p>\uFF082\uFF09\u7ED8\u5236\u77E9\u5F62</p><p>fillRect(x, y, width, height)\u65B9\u6CD5\u7528\u6765\u7ED8\u5236\u77E9\u5F62\uFF0C\u5B83\u7684\u56DB\u4E2A\u53C2\u6570\u5206\u522B\u4E3A\u77E9\u5F62\u5DE6\u4E0A\u89D2\u9876\u70B9\u7684x\u5750\u6807\u3001y\u5750\u6807\uFF0C\u4EE5\u53CA\u77E9\u5F62\u7684\u5BBD\u548C\u9AD8\u3002fillStyle\u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u77E9\u5F62\u7684\u586B\u5145\u8272\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>ctx.fillStyle = &#39;yellow&#39;;
ctx.fillRect(50, 50, 200, 100); 
strokeRect\u65B9\u6CD5\u4E0EfillRect\u7C7B\u4F3C\uFF0C\u7528\u6765\u7ED8\u5236\u7A7A\u5FC3\u77E9\u5F62\u3002

ctx.strokeRect(10,10,200,100); 
clearRect\u65B9\u6CD5\u7528\u6765\u6E05\u9664\u67D0\u4E2A\u77E9\u5F62\u533A\u57DF\u7684\u5185\u5BB9\u3002

ctx.clearRect(100,50,50,50); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u7ED8\u5236\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#_3-\u7ED8\u5236\u6587\u672C" aria-hidden="true">#</a> \uFF083\uFF09\u7ED8\u5236\u6587\u672C</h2><p>fillText(string, x, y) \u7528\u6765\u7ED8\u5236\u6587\u672C\uFF0C\u5B83\u7684\u4E09\u4E2A\u53C2\u6570\u5206\u522B\u4E3A\u6587\u672C\u5185\u5BB9\u3001\u8D77\u70B9\u7684x\u5750\u6807\u3001y\u5750\u6807\u3002\u4F7F\u7528\u4E4B\u524D\uFF0C\u9700\u7528font\u8BBE\u7F6E\u5B57\u4F53\u3001\u5927\u5C0F\u3001\u6837\u5F0F\uFF08\u5199\u6CD5\u7C7B\u4F3C\u4E0ECSS\u7684font\u5C5E\u6027\uFF09\u3002\u4E0E\u6B64\u7C7B\u4F3C\u7684\u8FD8\u6709strokeText\u65B9\u6CD5\uFF0C\u7528\u6765\u6DFB\u52A0\u7A7A\u5FC3\u5B57\u3002</p><p>// \u8BBE\u7F6E\u5B57\u4F53 ctx.font = &quot;Bold 20px Arial&quot;; // \u8BBE\u7F6E\u5BF9\u9F50\u65B9\u5F0F ctx.textAlign = &quot;left&quot;; // \u8BBE\u7F6E\u586B\u5145\u989C\u8272 ctx.fillStyle = &quot;#008600&quot;; // \u8BBE\u7F6E\u5B57\u4F53\u5185\u5BB9\uFF0C\u4EE5\u53CA\u5728\u753B\u5E03\u4E0A\u7684\u4F4D\u7F6E ctx.fillText(&quot;Hello!&quot;, 10, 50); // \u7ED8\u5236\u7A7A\u5FC3\u5B57 ctx.strokeText(&quot;Hello!&quot;, 10, 100); fillText\u65B9\u6CD5\u4E0D\u652F\u6301\u6587\u672C\u65AD\u884C\uFF0C\u5373\u6240\u6709\u6587\u672C\u51FA\u73B0\u5728\u4E00\u884C\u5185\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u8981\u751F\u6210\u591A\u884C\u6587\u672C\uFF0C\u53EA\u6709\u8C03\u7528\u591A\u6B21fillText\u65B9\u6CD5\u3002</p><h2 id="_4-\u7ED8\u5236\u5706\u5F62\u548C\u6247\u5F62" tabindex="-1"><a class="header-anchor" href="#_4-\u7ED8\u5236\u5706\u5F62\u548C\u6247\u5F62" aria-hidden="true">#</a> \uFF084\uFF09\u7ED8\u5236\u5706\u5F62\u548C\u6247\u5F62</h2><p>arc\u65B9\u6CD5\u7528\u6765\u7ED8\u5236\u6247\u5F62\u3002</p><p>ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise); arc\u65B9\u6CD5\u7684x\u548Cy\u53C2\u6570\u662F\u5706\u5FC3\u5750\u6807\uFF0Cradius\u662F\u534A\u5F84\uFF0CstartAngle\u548CendAngle\u5219\u662F\u6247\u5F62\u7684\u8D77\u59CB\u89D2\u5EA6\u548C\u7EC8\u6B62\u89D2\u5EA6\uFF08\u4EE5\u5F27\u5EA6\u8868\u793A\uFF09\uFF0Canticlockwise\u8868\u793A\u505A\u56FE\u65F6\u5E94\u8BE5\u9006\u65F6\u9488\u753B\uFF08true\uFF09\u8FD8\u662F\u987A\u65F6\u9488\u753B\uFF08false\uFF09\u3002</p><p>\u4E0B\u9762\u662F\u5982\u4F55\u7ED8\u5236\u5B9E\u5FC3\u7684\u5706\u5F62\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED8\u5236\u7A7A\u5FC3\u5706\u5F62\u7684\u4F8B\u5B50\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">;</span> 
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u8BBE\u7F6E\u6E10\u53D8\u8272" tabindex="-1"><a class="header-anchor" href="#_5-\u8BBE\u7F6E\u6E10\u53D8\u8272" aria-hidden="true">#</a> \uFF085\uFF09\u8BBE\u7F6E\u6E10\u53D8\u8272</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>createLinearGradient\u65B9\u6CD5\u7528\u6765\u8BBE\u7F6E\u6E10\u53D8\u8272\u3002

var myGradient = ctx.createLinearGradient(0, 0, 0, 160); 
 
myGradient.addColorStop(0, &quot;#BABABA&quot;); 
 
myGradient.addColorStop(1, &quot;#636363&quot;);
createLinearGradient\u65B9\u6CD5\u7684\u53C2\u6570\u662F(x1, y1, x2, y2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2Dx1\u548Cy1\u662F\u8D77\u70B9\u5750\u6807\uFF0Cx2\u548Cy2\u662F\u7EC8\u70B9\u5750\u6807\u3002\u901A\u8FC7\u4E0D\u540C\u7684\u5750\u6807\u503C\uFF0C\u53EF\u4EE5\u751F\u6210\u4ECE\u4E0A\u81F3\u4E0B\u3001\u4ECE\u5DE6\u5230\u53F3\u7684\u6E10\u53D8\u7B49\u7B49\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>ctx.fillStyle = myGradient;
ctx.fillRect(10,10,200,100);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u8BBE\u7F6E\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#_6-\u8BBE\u7F6E\u9634\u5F71" aria-hidden="true">#</a> \uFF086\uFF09\u8BBE\u7F6E\u9634\u5F71</h2><p>\u4E00\u7CFB\u5217\u4E0E\u9634\u5F71\u76F8\u5173\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7528\u6765\u8BBE\u7F6E\u9634\u5F71\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>ctx.shadowOffsetX = 10; // \u8BBE\u7F6E\u6C34\u5E73\u4F4D\u79FB
ctx.shadowOffsetY = 10; // \u8BBE\u7F6E\u5782\u76F4\u4F4D\u79FB
ctx.shadowBlur = 5; // \u8BBE\u7F6E\u6A21\u7CCA\u5EA6
ctx.shadowColor = &quot;rgba(0,0,0,0.5)&quot;; // \u8BBE\u7F6E\u9634\u5F71\u989C\u8272
 
ctx.fillStyle = &quot;#CC0000&quot;; 
ctx.fillRect(10,10,200,100);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56FE\u50CF\u5904\u7406\u65B9\u6CD5 drawImage\u65B9\u6CD5 Canvas API \u5141\u8BB8\u5C06\u56FE\u50CF\u6587\u4EF6\u63D2\u5165\u753B\u5E03\uFF0C\u505A\u6CD5\u662F\u8BFB\u53D6\u56FE\u7247\u540E\uFF0C\u4F7F\u7528drawImage\u65B9\u6CD5\u5728\u753B\u5E03\u5185\u8FDB\u884C\u91CD\u7ED8\u3002</p><p>var img = new Image(); img.src = &#39;image.png&#39;; ctx.drawImage(img, 0, 0); // \u8BBE\u7F6E\u5BF9\u5E94\u7684\u56FE\u50CF\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u5B83\u5728\u753B\u5E03\u4E0A\u7684\u4F4D\u7F6E \u4E0A\u9762\u4EE3\u7801\u5C06\u4E00\u4E2APNG\u56FE\u50CF\u8F7D\u5165\u753B\u5E03\u3002drawImage()\u65B9\u6CD5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u56FE\u50CF\u6587\u4EF6\u7684DOM\u5143\u7D20\uFF08\u5373<img>\u8282\u70B9\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u56FE\u50CF\u5DE6\u4E0A\u89D2\u5728\u753B\u5E03\u4E2D\u7684\u5750\u6807\uFF0C\u4E0A\u4F8B\u4E2D\u7684(0, 0)\u5C31\u8868\u793A\u5C06\u56FE\u50CF\u5DE6\u4E0A\u89D2\u653E\u7F6E\u5728\u753B\u5E03\u7684\u5DE6\u4E0A\u89D2\u3002</p><p>\u7531\u4E8E\u56FE\u50CF\u7684\u8F7D\u5165\u9700\u8981\u65F6\u95F4\uFF0CdrawImage\u65B9\u6CD5\u53EA\u80FD\u5728\u56FE\u50CF\u5B8C\u5168\u8F7D\u5165\u540E\u624D\u80FD\u8C03\u7528\uFF0C\u56E0\u6B64\u4E0A\u9762\u7684\u4EE3\u7801\u9700\u8981\u6539\u5199\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
image<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> image<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> image<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u63D2\u5165\u9875\u9762\u5E95\u90E8</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> canvas<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
image<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;image.png&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getimagedata\u548Cputimagedata\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#getimagedata\u548Cputimagedata\u65B9\u6CD5" aria-hidden="true">#</a> getImageData\u548CputImageData\u65B9\u6CD5</h2><p><code>getImageData</code>\u7528\u6765\u8BFB\u53D6<code>Canvas</code>\u7684\u5185\u5BB9\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6BCF\u4E2A<code>\u50CF\u7D20</code>\u7684\u4FE1\u606F\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// x\u4E3A\u50CF\u7D20\u7684x\u5750\u6807\uFF0Cy\u4E3Ay\u5750\u6807\uFF0Cwidth\u4E3A\u50CF\u7D20\u7684\u5BBD\u5EA6\uFF0Cheight\u4E3A\u9AD8\u5EA6</span>
<span class="token keyword">let</span> imageData1 <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E00\u6B21\u6027\u5168\u90E8\u8BFB\u53D6</span>
<span class="token keyword">let</span> imageData2 <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
context<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>imageData</code>\u5BF9\u8C61\u6709\u4E00\u4E2A<code>data</code>\u5C5E\u6027\uFF0C\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4\u3002\u8BE5\u6570\u7EC4\u7684\u503C\uFF0C\u4F9D\u6B21\u662F\u6BCF\u4E2A\u50CF\u7D20\u7684<code>\u7EA2</code>\u3001<code>\u7EFF</code>\u3001<code>\u84DD</code>\u548C<code>alpha\u901A\u9053</code>\u503C\u3002</p><p>\u56E0\u6B64\u8BE5\u6570\u7EC4\u7684\u957F\u5EA6\u7B49\u4E8E<code>\u5BBD x \u9AD8 x 4</code>\uFF0C\u6BCF\u4E2A\u503C\u7684\u8303\u56F4\u662F<code>0\u2013255</code>\u3002\u8FD9\u4E2A\u6570\u7EC4\u4E0D\u4EC5\u53EF\u8BFB\uFF0C\u800C\u4E14<code>\u53EF\u5199</code>\u3002\u56E0\u6B64\u901A\u8FC7\u64CD\u4F5C\u8FD9\u4E2A\u6570\u7EC4\u7684\u503C\uFF0C\u5C31\u53EF\u4EE5\u8FBE\u5230\u64CD\u4F5C\u56FE\u50CF\u7684\u76EE\u7684\u3002\u4FEE\u6539\u6570\u7EC4\u4EE5\u540E\u4F7F\u7528<code>putImageData</code>\u65B9\u6CD5\u5C06\u6570\u7EC4\u5185\u5BB9\u91CD\u65B0\u7ED8\u5236\u5728Canvas\u4E0A\u3002</p><h2 id="todataurl\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#todataurl\u65B9\u6CD5" aria-hidden="true">#</a> toDataURL\u65B9\u6CD5</h2><p>\u5BF9\u56FE\u50CF\u6570\u636E\u505A\u51FA\u4FEE\u6539\u4EE5\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528toDataURL\u65B9\u6CD5\uFF0C\u5C06Canvas\u6570\u636E\u91CD\u65B0\u8F6C\u5316\u6210\u4E00\u822C\u7684\u56FE\u50CF\u6587\u4EF6\u5F62\u5F0F\u3002</p><p>function convertCanvasToImage(canvas) { var image = new Image(); image.src = canvas.toDataURL(&#39;image/png&#39;); return image; } \u4E0A\u9762\u7684\u4EE3\u7801\u5C06Canvas\u6570\u636E\uFF0C\u8F6C\u5316\u6210PNG data URI\u3002</p><p>save\u65B9\u6CD5\uFF0Crestore\u65B9\u6CD5 save\u65B9\u6CD5\u7528\u4E8E\u4FDD\u5B58\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0Crestore\u65B9\u6CD5\u7528\u4E8E\u6062\u590D\u5230\u4E0A\u4E00\u6B21\u4FDD\u5B58\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>ctx.save();
 
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.shadowColor = &#39;rgba(0,0,0,0.5)&#39;;
 
ctx.fillStyle = &#39;#CC0000&#39;;
ctx.fillRect(10,10,150,100);
 
ctx.restore();
 
ctx.fillStyle = &#39;#000000&#39;;
ctx.fillRect(180,10,150,100);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5148\u7528save\u65B9\u6CD5\uFF0C\u4FDD\u5B58\u4E86\u5F53\u524D\u8BBE\u7F6E\uFF0C\u7136\u540E\u7ED8\u5236\u4E86\u4E00\u4E2A\u6709\u9634\u5F71\u7684\u77E9\u5F62\u3002\u63A5\u7740\uFF0C\u4F7F\u7528restore\u65B9\u6CD5\uFF0C\u6062\u590D\u4E86\u4FDD\u5B58\u524D\u7684\u8BBE\u7F6E\uFF0C\u7ED8\u5236\u4E86\u4E00\u4E2A\u6CA1\u6709\u9634\u5F71\u7684\u77E9\u5F62\u3002</p><p>\u52A8\u753B \u5229\u7528JavaScript\uFF0C\u53EF\u4EE5\u5728canvas\u5143\u7D20\u4E0A\u5F88\u5BB9\u6613\u5730\u4EA7\u751F\u52A8\u753B\u6548\u679C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>var posX = 20,
    posY = 100;
 
setInterval(function() {
  context.fillStyle = &quot;black&quot;;
    context.fillRect(0,0,canvas.width, canvas.height);
 
  posX += 1;
  posY += 0.25;
 
  context.beginPath();
  context.fillStyle = &quot;white&quot;;
 
  context.arc(posX, posY, 10, 0, Math.PI*2, true); 
  context.closePath();
  context.fill();
}, 30);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5C0F\u5706\u70B9\uFF0C\u6BCF\u969430\u6BEB\u79D2\u5C31\u5411\u53F3\u4E0B\u65B9\u79FB\u52A8\u7684\u6548\u679C\u3002setInterval\u51FD\u6570\u7684\u4E00\u5F00\u59CB\uFF0C\u4E4B\u6240\u4EE5\u8981\u5C06\u753B\u5E03\u91CD\u65B0\u6E32\u67D3\u9ED1\u8272\u5E95\u8272\uFF0C\u662F\u4E3A\u4E86\u62B9\u53BB\u4E0A\u4E00\u6B65\u7684\u5C0F\u5706\u70B9\u3002</p><p>\u901A\u8FC7\u8BBE\u7F6E\u5706\u5FC3\u5750\u6807\uFF0C\u53EF\u4EE5\u4EA7\u751F\u5404\u79CD\u8FD0\u52A8\u8F68\u8FF9\u3002</p><p>\u5148\u4E0A\u5347\u540E\u4E0B\u964D\u3002</p><p>var vx = 10, vy = -10, gravity = 1;</p><p>setInterval(function() { posX += vx; posY += vy; vy += gravity; // ... });</p><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cx\u5750\u6807\u59CB\u7EC8\u589E\u5927\uFF0C\u8868\u793A\u6301\u7EED\u5411\u53F3\u8FD0\u52A8\u3002y\u5750\u6807\u5148\u53D8\u5C0F\uFF0C\u7136\u540E\u5728\u91CD\u529B\u4F5C\u7528\u4E0B\uFF0C\u4E0D\u65AD\u589E\u5927\uFF0C\u8868\u793A\u5148\u4E0A\u5347\u540E\u4E0B\u964D\u3002</p><p>\u5C0F\u7403\u4E0D\u65AD\u53CD\u5F39\u540E\uFF0C\u9010\u6B65\u8D8B\u4E8E\u9759\u6B62\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>var vx = 10,
    vy = -10,
    gravity = 1;
 
setInterval(function() {
    posX += vx;
    posY += vy;
 
  if (posY &gt; canvas.height * 0.75) {
          vy *= -0.6;
          vx *= 0.75;
          posY = canvas.height * 0.75;
    }
  
    vy += gravity;
  // ...
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C\u4E00\u65E6\u5C0F\u7403\u7684y\u5750\u6807\u5904\u4E8E\u5C4F\u5E55\u4E0B\u65B975%\u7684\u4F4D\u7F6E\uFF0C\u5411x\u8F74\u79FB\u52A8\u7684\u901F\u5EA6\u53D8\u4E3A\u539F\u6765\u768475%\uFF0C\u800C\u5411y\u8F74\u53CD\u5F39\u4E0A\u4E00\u6B21\u53CD\u5F39\u9AD8\u5EA6\u768440%\u3002</p><p>\u50CF\u7D20\u5904\u7406 \u901A\u8FC7getImageData\u65B9\u6CD5\u548CputImageData\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5904\u7406\u6BCF\u4E2A\u50CF\u7D20\uFF0C\u8FDB\u800C\u64CD\u4F5C\u56FE\u50CF\u5185\u5BB9\u3002</p><p>\u5047\u5B9Afilter\u662F\u4E00\u4E2A\u5904\u7406\u50CF\u7D20\u7684\u51FD\u6570\uFF0C\u90A3\u4E48\u6574\u4E2A\u5BF9Canvas\u7684\u5904\u7406\u6D41\u7A0B\uFF0C\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u8868\u793A\u3002</p><p>if (canvas.width &gt; 0 &amp;&amp; canvas.height &gt; 0) {</p><p>var imageData = context.getImageData(0, 0, canvas.width, canvas.height); filter(imageData); context.putImageData(imageData, 0, 0); } \u4EE5\u4E0B\u662F\u51E0\u79CD\u5E38\u89C1\u7684\u5904\u7406\u65B9\u6CD5\u3002</p><h2 id="\u7070\u5EA6\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u7070\u5EA6\u6548\u679C" aria-hidden="true">#</a> \u7070\u5EA6\u6548\u679C</h2><p>\u7070\u5EA6\u56FE\uFF08grayscale\uFF09\u5C31\u662F\u53D6\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u50CF\u7D20\u503C\u7684\u7B97\u672F\u5E73\u5747\u503C\uFF0C\u8FD9\u5B9E\u9645\u4E0A\u5C06\u56FE\u50CF\u8F6C\u6210\u4E86\u9ED1\u767D\u5F62\u5F0F\u3002\u5047\u5B9Ad[i]\u662F\u50CF\u7D20\u6570\u7EC4\u4E2D\u4E00\u4E2A\u8C61\u7D20\u7684\u7EA2\u8272\u503C\uFF0C\u5219d[i+1]\u4E3A\u7EFF\u8272\u503C\uFF0Cd[i+2]\u4E3A\u84DD\u8272\u503C\uFF0Cd[i+3]\u5C31\u662Falpha\u901A\u9053\u503C\u3002\u8F6C\u6210\u7070\u5EA6\u7684\u7B97\u6CD5\uFF0C\u5C31\u662F\u5C06\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u503C\u76F8\u52A0\u540E\u9664\u4EE53\uFF0C\u518D\u5C06\u7ED3\u679C\u5199\u56DE\u6570\u7EC4\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>grayscale = function (pixels) {
 
  var d = pixels.data;
 
    for (var i = 0; i &lt; d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      d[i] = d[i + 1] = d[i + 2] = (r+g+b)/3;
    }
 
    return pixels;
 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u590D\u53E4\u6548\u679C \u590D\u53E4\u6548\u679C\uFF08sepia\uFF09\u5219\u662F\u5C06\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u50CF\u7D20\uFF0C\u5206\u522B\u53D6\u8FD9\u4E09\u4E2A\u503C\u7684\u67D0\u79CD\u52A0\u6743\u5E73\u5747\u503C\uFF0C\u4F7F\u5F97\u56FE\u50CF\u6709\u4E00\u79CD\u53E4\u65E7\u7684\u6548\u679C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>sepia = function (pixels) {
 
    var d = pixels.data;
 
    for (var i = 0; i &lt; d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      d[i]     = (r * 0.393)+(g * 0.769)+(b * 0.189); // red
      d[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168); // green
      d[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131); // blue
    }
 
    return pixels;
 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EA2\u8272\u8499\u7248\u6548\u679C \u7EA2\u8272\u8499\u7248\u6307\u7684\u662F\uFF0C\u8BA9\u56FE\u50CF\u5448\u73B0\u4E00\u79CD\u504F\u7EA2\u7684\u6548\u679C\u3002\u7B97\u6CD5\u662F\u5C06\u7EA2\u8272\u901A\u9053\u8BBE\u4E3A\u7EA2\u3001\u7EFF\u3001\u84DD\u4E09\u4E2A\u503C\u7684\u5E73\u5747\u503C\uFF0C\u800C\u5C06\u7EFF\u8272\u901A\u9053\u548C\u84DD\u8272\u901A\u9053\u90FD\u8BBE\u4E3A0\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>red = function (pixels) {
  
    var d = pixels.data;
 
    for (var i = 0; i &lt; d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      d[i] = (r+g+b)/3;        // \u7EA2\u8272\u901A\u9053\u53D6\u5E73\u5747\u503C
      d[i + 1] = d[i + 2] = 0; // \u7EFF\u8272\u901A\u9053\u548C\u84DD\u8272\u901A\u9053\u90FD\u8BBE\u4E3A0
    }
 
    return pixels;
 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EAE\u5EA6\u6548\u679C \u4EAE\u5EA6\u6548\u679C\uFF08brightness\uFF09\u662F\u6307\u8BA9\u56FE\u50CF\u53D8\u5F97\u66F4\u4EAE\u6216\u66F4\u6697\u3002\u7B97\u6CD5\u5C06\u7EA2\u8272\u901A\u9053\u3001\u7EFF\u8272\u901A\u9053\u3001\u84DD\u8272\u901A\u9053\uFF0C\u540C\u65F6\u52A0\u4E0A\u4E00\u4E2A\u6B63\u503C\u6216\u8D1F\u503C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>brightness = function (pixels, delta) {
 
    var d = pixels.data;
 
    for (var i = 0; i &lt; d.length; i += 4) {
          d[i] += delta;     // red
          d[i + 1] += delta; // green
          d[i + 2] += delta; // blue   
    }
 
  return pixels;
 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53CD\u8F6C\u6548\u679C \u53CD\u8F6C\u6548\u679C\uFF08invert\uFF09\u662F\u6307\u56FE\u7247\u5448\u73B0\u4E00\u79CD\u8272\u5F69\u98A0\u5012\u7684\u6548\u679C\u3002\u7B97\u6CD5\u4E3A\u7EA2\u3001\u7EFF\u3001\u84DD\u901A\u9053\u90FD\u53D6\u5404\u81EA\u7684\u76F8\u53CD\u503C\uFF08255-\u539F\u503C\uFF09\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>invert = function (pixels) {
 
  var d = pixels.data;
 
  for (var i = 0; i &lt; d.length; i += 4) {
    d[i] = 255 - d[i];
    d[i+1] = 255 - d[i + 1];
    d[i+2] = 255 - d[i + 2];
  }
 
  return pixels;
 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),l=[t];function c(d,p){return a(),s("div",null,l)}const o=n(i,[["render",c],["__file","Canvas API\u8BE6\u89E3.html.vue"]]);export{o as default};
