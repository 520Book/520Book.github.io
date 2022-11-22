import{_ as e,o,c as n,e as t}from"./app.678d7e92.js";const i={},s=t(`<h1 id="sort-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#sort-\u65B9\u6CD5" aria-hidden="true">#</a> sort()\u65B9\u6CD5</h1><p><strong>sort</strong>\u65B9\u6CD5\u662F\u6570\u7EC4\u5BF9\u8C61\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5BF9\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u8FDB\u884C\u6392\u5E8F\u3002\u5982\u679C\u8C03\u7528\u8BE5\u65B9\u6CD5\u65F6\u6CA1\u6709\u4F7F\u7528\u53C2\u6570\uFF0C\u5C06\u6309\u5B57\u6BCD\u987A\u5E8F\uFF08ASCII\u5B57\u7B26\u7F16\u7801\uFF09\u5BF9\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u8FDB\u884C\u6392\u5E8F\uFF0C\u9ED8\u8BA4\u662F<code>\u5347\u5E8F</code>\u6392\u5E8F\u3002\u6BD4\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [5,3,10,6,24,31,2];
console.log(arr.sort()); // [ 10, 2, 24, 3, 31, 5, 6 ]

arr = [&quot;A&quot;,&quot;89&quot;, &quot;cds&quot;,&quot;&gt;&quot;, &quot;ab&quot;, &quot;AC&quot;, &quot;}&quot;, &quot;esadf&quot;,&quot;As&quot;];
console.log(arr.sort()); // [ &#39;89&#39;, &#39;&gt;&#39;, &#39;A&#39;, &#39;AC&#39;, &#39;As&#39;, &#39;ab&#39;, &#39;cds&#39;, &#39;esadf&#39;, &#39;}&#39; ]

arr = [&quot;\u4E2D\u56FD&quot;,&quot;\u4E0A\u6D77&quot;, &quot;\u5317\u4EAC&quot;,&quot;\u6B66\u6C49&quot;, &quot;\u957F\u6C99&quot;, &quot;\u5F20\u5BB6\u754C&quot;, &quot;\u54C8\u5C14\u6EE8&quot;, &quot;\u5929\u6D25&quot;];
console.log(arr.sort()); // [ &#39;\u4E0A\u6D77&#39;, &#39;\u4E2D\u56FD&#39;, &#39;\u5317\u4EAC&#39;, &#39;\u54C8\u5C14\u6EE8&#39;, &#39;\u5929\u6D25&#39;, &#39;\u5F20\u5BB6\u754C&#39;, &#39;\u6B66\u6C49&#39;, &#39;\u957F\u6C99&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u7684\u7ED3\u679C\u53EF\u4EE5\u5F88\u660E\u663E\u770B\u51FA\u6765\uFF0C\u5B8C\u5168\u662F\u6309\u7167<code>ASCII\u5B57\u7B26\u7F16\u7801</code>\u7684\u987A\u5E8F\u6765\u6392\u5217\u7684\u3002\u5E76\u4E14\uFF0C\u5728\u6BD4\u8F83\u6570\u5B57\u65F6\uFF0C\u5E76\u4E0D\u662F\u6309\u7167\u6570\u5B57\u7684\u5927\u5C0F\u6765\u6392\u5217\uFF0C\u4E5F\u662F\u6309\u71670-9\uFF0C\u4F4D\u6570\u7531\u5C11\u81F3\u591A\u6392\u5E8F\uFF0C\u8FD9\u5C31\u5BFC\u81F4<code>10</code>\u6392\u5230<code>2</code>\u7684\u524D\u9762\u53BB\u4E86\u3002\u4E2D\u6587\u7684\u6392\u5217\u5219\u5B8C\u5168\u662F\u83AB\u540D\u5176\u5999\u7684\u3002\uFF08\u8FD9\u662F<code>nodejs</code>\u8FD0\u884C\u7684\u7ED3\u679C\uFF09</p><p><code>sort()</code>\u65B9\u6CD5\u5982\u679C\u60F3\u6309\u7167\u5176\u4ED6\u6807\u51C6\u8FDB\u884C\u6392\u5E8F\uFF0C\u5C31\u9700\u8981\u63D0\u4F9B\u6BD4\u8F83\u51FD\u6570\u3002\u8BE5\u51FD\u6570\u5177\u6709\u4E24\u4E2A\u53C2\u6570<code>a</code>\u548C<code>b</code>\uFF0C\u5982\u679C\u8FD4\u56DE\u503C\u5927\u4E8E<code>0</code>\uFF0C\u90A3\u4E48\u6392\u5E8F\u540E<code>a</code>\u548C<code>b</code>\u5C06\u4F1A\u4EA4\u6362\u4F4D\u7F6E\uFF0C\u5982\u679C\u7B49\u4E8E<code>0</code>\u6216\u8005\u5C0F\u4E8E0\uFF0C\u90A3\u4E48a\u548Cb\u7684\u4F4D\u7F6E\u4FDD\u6301\u4E0D\u53D8\u3002\u6240\u4EE5\uFF0C\u5F88\u663E\u7136\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u6392\u5E8F\u7684\u65F6\u5019\uFF0C\u91CD\u70B9\u4E0D\u662F\u653E\u5728\u8FD4\u56DE\u503C\u4E0A\uFF0C\u800C\u662F\u4E24\u4E2A\u5BF9\u8C61\u6BD4\u8F83\u7684\u6761\u4EF6\u4E0A\u3002\u8FD4\u56DE\u503C\u5FC5\u987B\u662F1\u7684\uFF01\uFF01\uFF01\uFF01\u5982\u679C\u8FD4\u56DEflase\u503C\u961F\u5217\u4F1A\u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\uFF0C\u5B8C\u5168\u6CA1\u6709\u610F\u4E49\uFF01</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arr = [5,3,10,6,24,31,2];
arr.sort(function(a,b){
  return 1;
});
console.log(arr); //[ 2, 31, 24, 6, 10, 3, 5 ]


arr = [5,3,10,6,24,31,2];
arr.sort(function(a,b){
  return -1;
});
console.log(arr); //[ 5, 3, 10, 6, 24, 31, 2 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u7ED3\u679C\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u6765\uFF0Csort\u65B9\u6CD5\u5728\u5B9E\u73B0\u6392\u5E8F\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u5C31\u662F\u5BF9\u6570\u7EC4\u7684\u5143\u7D20\u8FDB\u884C<code>2\u4E2A</code>\u9010\u4E00\u6392\u5E8F\uFF0C\u5E76\u4E14\u4F1A\u8FDB\u884C<code>N-1</code>\u8F6E\u6B21\u7684\u7C7B\u4F3C\u6392\u5E8F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arr = [&quot;A&quot;,&quot;cds&quot;,&quot;esadf&quot;,&quot;As&quot;];
arr.sort(function(a,b){
    if(a &gt; b){
        return 1;
    }
}); 
console.log(arr);// [&quot;A&quot;, &quot;As&quot;, &quot;cds&quot;, &quot;esadf&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7528sort()\u53BB\u7ED9json\u5BF9\u8C61\u6570\u7EC4\u6392\u5E8F\uFF0C\u751A\u81F3<code>\u591A\u91CD\u6392\u5E8F</code>\u3002\u5982\u4E0B\u4F8B\u5B50\uFF0C\u6211\u4EEC\u6309\u5B66\u751F\u7684\u603B\u5206\u6392\u5E8F\uFF0C\u5982\u679C<strong>\u603B\u5206</strong>\u76F8\u7B49\uFF0C\u6211\u4EEC\u518D\u6309\u7167<strong>\u8BED\u6587\u6210\u7EE9</strong>\u6392\u5E8F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var jsonStudents = [
    {name:&quot;Dawson&quot;, totalScore:&quot;197&quot;, Chinese:&quot;100&quot;,math:&quot;97&quot;},
    {name:&quot;HanMeiMei&quot;, totalScore:&quot;196&quot;,Chinese:&quot;99&quot;, math:&quot;97&quot;},
    {name:&quot;LiLei&quot;, totalScore:&quot;185&quot;, Chinese:&quot;88&quot;, math:&quot;97&quot;},
    {name:&quot;XiaoMing&quot;, totalScore:&quot;196&quot;, Chinese:&quot;96&quot;,math:&quot;100&quot;},
    {name:&quot;Jim&quot;, totalScore:&quot;196&quot;, Chinese:&quot;98&quot;,math:&quot;98&quot;},
    {name:&quot;Joy&quot;, totalScore:&quot;198&quot;, Chinese:&quot;99&quot;,math:&quot;99&quot;}];
jsonStudents.sort(function(a,b){
    var value1 = a.totalScore,
        value2 = b.totalScore;
    if(value1 === value2){
        return b.Chinese - a.Chinese;
    }
    return value2 - value1;
});

console.log(jsonStudents);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8BF7\u6CE8\u610F\uFF0Csort\u662F\u5BF9\u6570\u7EC4\u7684<code>\u5F15\u7528</code>\u3002\u6570\u7EC4\u5728\u539F\u6570\u7EC4\u4E0A\u8FDB\u884C\u6392\u5E8F\uFF0C<code>\u4E0D\u751F\u6210\u526F\u672C</code>\u3002</p></blockquote>`,11),u=[s];function d(a,l){return o(),n("div",null,u)}const c=e(i,[["render",d],["__file","sort.html.vue"]]);export{c as default};
