import{_ as n,o as s,c as a,e as i}from"./app.678d7e92.js";const e={},l=i(`<p>\u6211\u4EEC\u5148\u7528<code>man strings</code>\u6765\u770B\u770B\uFF1A</p><p>strings - print the strings of printable characters in files.</p><p>\u610F\u601D\u662F\uFF0C\u6253\u5370\u6587\u4EF6\u4E2D\u53EF\u6253\u5370\u7684\u5B57\u7B26\u3002 \u8865\u5145\u4E00\u4E0B\uFF0C \u8FD9\u4E2A\u6587\u4EF6\u53EF\u4EE5\u662F\u6587\u672C\u6587\u4EF6\uFF08test.c\uFF09, \u53EF\u6267\u884C\u6587\u4EF6(test), \u52A8\u6001\u94FE\u63A5\u5E93(test.o), \u9759\u6001\u94FE\u63A5\u5E93(test.a)</p><p>\u8FD8\u662F\u641E\u70B9\u4EE3\u7801\u4E0B\u83DC\u5427\uFF08\u4EE3\u7801\u5B58\u5728test.c\u4E2D\uFF09\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
 
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;oh, my dear, sum is %d\\n&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u6765\u770B\u770B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>taoge@localhost learn_c<span class="token punctuation">]</span>$ strings test.c 
<span class="token comment">#include &lt;stdio.h&gt;</span>
int add<span class="token punctuation">(</span>int x, int y<span class="token punctuation">)</span>
  <span class="token builtin class-name">return</span> x + y<span class="token punctuation">;</span>
int main<span class="token punctuation">(</span><span class="token punctuation">)</span>
  int a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  int b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  int c <span class="token operator">=</span> add<span class="token punctuation">(</span>a, b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  printf<span class="token punctuation">(</span><span class="token string">&quot;oh, my dear, c is %d<span class="token entity" title="\\n">\\n</span>&quot;</span>, c<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>taoge@localhost learn_c<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u6211\u4EEC\u518D\u5BF9\u53EF\u6267\u884C\u6587\u4EF6\u8BD5\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>taoge@localhost learn_c<span class="token punctuation">]</span>$ gcc test.c 
<span class="token punctuation">[</span>taoge@localhost learn_c<span class="token punctuation">]</span>$ strings a.out 
/lib/ld-linux.so.2
<span class="token operator">=</span><span class="token variable">$TsU</span>
__gmon_start__
libc.so.6
_IO_stdin_used
<span class="token builtin class-name">printf</span>
__libc_start_main
GLIBC_2.0
PTRh 
<span class="token punctuation">[</span>^_<span class="token punctuation">]</span>
oh, my dear, c is %d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0C \u5982\u679C\u6709\u76EE\u6807\u6587\u4EF6\u3001\u9759\u6001\u5E93\u6216\u52A8\u6001\u5E93\uFF0C\u4E5F\u662F\u53EF\u4EE5\u7528strings\u547D\u4EE4\u8FDB\u884C\u6253\u5370\u64CD\u4F5C\u7684\u3002 \u6211\u4EEC\u6765\u770B\u770B\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>xxx.h\u6587\u4EF6\uFF1A

void print();
xxx.c\u6587\u4EF6\uFF1A

#include &lt;stdio.h&gt;
#include &quot;xxx.h&quot;
 
void print()
{
  printf(&quot;rainy days\\n&quot;);
}
\u7136\u540E\uFF0C \u6211\u4EEC\u6765\u770B\u770B\u600E\u4E48\u5236\u4F5C\u9759\u6001\u3001\u52A8\u6001\u5E93\u5427\uFF08\u5728\u540E\u7EED\u535A\u6587\u4E2D\u4F1A\u7EE7\u7EED\u8BE6\u7EC6\u4ECB\u7ECD\uFF09\uFF1A

[taoge@localhost learn_strings]$ ls
xxx.c  xxx.h
[taoge@localhost learn_strings]$ gcc -c xxx.c
[taoge@localhost learn_strings]$ ar rcs libxxx.a xxx.o
[taoge@localhost learn_strings]$ gcc -shared -fPIC -o libxxx.so xxx.o
[taoge@localhost learn_strings]$ ls
libxxx.a  libxxx.so  xxx.c  xxx.h  xxx.o
[taoge@localhost learn_strings]$ strings xxx.o
rainy days
[taoge@localhost learn_strings]$ strings libxxx.a
!&lt;arch&gt;
/               1437887339  0     0     0       14        \`
Rprint
xxx.o/          1437887333  501   502   100664  848       \`
rainy days
GCC: (GNU) 4.4.4 20100726 (Red Hat 4.4.4-13)
.symtab
.strtab
.shstrtab
.rel.text
.data
.bss
.rodata
.comment
.note.GNU-stack
xxx.c
print
puts
[taoge@localhost learn_strings]$ 
[taoge@localhost learn_strings]$ 
[taoge@localhost learn_strings]$ strings libxxx.so
__gmon_start__
_init
_fini
__cxa_finalize
_Jv_RegisterClasses
print
puts
libc.so.6
_edata
__bss_start
_end
GLIBC_2.1.3
GLIBC_2.0
rainy days
[taoge@localhost learn_strings]$ 
\u770B\u5230\u4E86\u5427\u3002strings\u547D\u4EE4\u5F88\u7B80\u5355\uFF0C \u770B\u8D77\u6765\u597D\u50CF\u6CA1\u4EC0\u4E48\uFF0C \u4F46\u5B9E\u9645\u6709\u5F88\u591A\u7528\u9014\u3002 \u4E0B\u9762\uFF0C \u6211\u6765\u4E3E\u4E00\u4E2A\u4F8B\u5B50\u3002 \u5728\u5927\u578B\u7684\u8F6F\u4EF6\u5F00\u53D1\u4E2D\uFF0C \u5047\u8BBE\u6709100\u4E2A.c/.cpp\u6587\u4EF6\uFF0C \u8FD9\u4E2A.cpp\u6587\u4EF6\u6700\u7EC8\u751F\u621010\u4E2A.so\u5E93\uFF0C \u90A3\u4E48\u600E\u6837\u624D\u80FD\u5FEB\u901F\u77E5\u9053\u67D0\u4E2A.c/.cpp\u6587\u4EF6\u7F16\u8BD1\u5230\u90A3\u4E2A.so\u5E93\u4E2D\u53BB\u4E86\u5462\uFF1F \u5F53\u7136\uFF0C \u4F60\u53EF\u80FD\u8981\u8BF4\uFF0C \u770Bmakefile\u4E0D\u5C31\u77E5\u9053\u4E86\u3002 \u5BF9\uFF0C \u770Bmakefile\u80AF\u5B9A\u53EF\u4EE5\uFF0C \u4F46\u5982\u4E0B\u65B9\u6CD5\u66F4\u597D\uFF0C \u76F4\u63A5\u7528\u547D\u4EE4\uFF1A

strings -f &quot;*.so&quot; | grep &quot;xxxxxx&quot;

\u5982\u679C\u8FD8\u4E0D\u660E\u767D\uFF0C \u90A3\u5C31\u5C31\u4EE5\u4E0A\u9762\u7684\u5C0F\u7A0B\u5E8F\u4E3A\u4F8B\u4E3A\u8BF4\u660E\uFF0C \u4E0D\u8FC7\uFF0C \u6B64\u5904\u6211\u4EEC\u8003\u8651\u6240\u6709\u7684\u6587\u4EF6\uFF0C \u5982\u4E0B\uFF1A

[taoge@localhost learn_c]$ strings -f * | grep &quot;my dear&quot;
a.out: oh, my dear, c is %d
test.c:   printf(&quot;oh, my dear, c is %d\\n&quot;, c);
[taoge@localhost learn_c]$ 
\u53EF\u4EE5\u770B\u5230\uFF0C \u6E90\u6587\u4EF6test.c\u548C\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u7686\u6709&quot;my dear&quot;\u4E32\uFF0C \u4E00\u4E0B\u5B50\u5C31\u627E\u5230\u4E86\u5BF9\u5E94\u7684\u6587\u4EF6\uFF0C\u6E05\u695A\u4E86\u5427\u3002\u5982\u679C\u67D0.c/.cpp\u6587\u4EF6\u7F16\u8BD1\u8FDB\u4E86.so\u5E93\uFF0C \u90A3\u4E48\uFF0Cstrings -f * | grep &quot;my dear&quot;\u5FC5\u5B9A\u53EF\u4EE5\u627E\u5230\u5BF9\u5E94\u7684.so\u6587\u4EF6\uFF0C \u5176\u4E2D&quot;my dear&quot;\u4E3A\u8BE5.c/.cpp\u6587\u4EF6\u4E2D\u7684\u67D0\u4E2A\u65E5\u5FD7\u4E32\uFF08\u6BD4\u5982\u4EE5printf\u4E3A\u6253\u5370\uFF09\u3002

strings\u7684\u4F5C\u7528\u5148\u4ECB\u7ECD\u5230\u6B64\uFF0C \u7B97\u662F\u629B\u7816\u5F15\u7389\u5730\u719F\u6089\u4E00\u4E0Bstrings\u5427\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function c(d,o){return s(),a("div",null,t)}const u=n(e,[["render",c],["__file","strings.html.vue"]]);export{u as default};
