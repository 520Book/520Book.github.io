import{_ as e,o as a,c as n,e as s}from"./app.678d7e92.js";const i={},t=s(`<h1 id="dpkg" tabindex="-1"><a class="header-anchor" href="#dpkg" aria-hidden="true">#</a> dpkg</h1><h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><p><code>dpkg</code>\u662F<code>Debian</code>\u4E0A\u7528\u6765\u5B89\u88C5\u3001\u521B\u5EFA\u548C\u7BA1\u7406\u8F6F\u4EF6\u5305\u7684\u5B9E\u7528\u5DE5\u5177\u3002</p><h1 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: dpkg <span class="token punctuation">[</span><span class="token operator">&lt;</span>option<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-i|--install</td><td>content</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;.deb file name&gt; ... | -R|--recursive &lt;directory&gt; ...

--unpack &lt;.deb file name&gt; ... | -R|--recursive &lt;directory&gt; ... -A|--record-avail
&lt;.deb file name&gt; ... | -R|--recursive &lt;directory&gt; ... --configure &lt;package&gt; ...
| -a|--pending --triggers-only &lt;package&gt; ... | -a|--pending -r|--remove
&lt;package&gt; ... | -a|--pending -P|--purge &lt;package&gt; ... | -a|--pending -V|--verify
&lt;package&gt; ... Verify the integrity of package(s). --get-selections [&lt;pattern&gt;
...] Get list of selections to stdout. --set-selections Set package selections
from stdin. --clear-selections Deselect every non-essential package.
--update-avail [&lt;Packages-file&gt;] Replace available packages info. --merge-avail
[&lt;Packages-file&gt;] Merge with info from file. --clear-avail Erase existing
available info. --forget-old-unavail Forget uninstalled unavailable pkgs.
-s|--status &lt;package&gt; ... Display package status details. -p|--print-avail
&lt;package&gt; ... Display available version details. -L|--listfiles &lt;package&gt; ...
List files &#39;owned&#39; by package(s). -l|--list [&lt;pattern&gt; ...] List packages
concisely. -S|--search &lt;pattern&gt; ... Find package(s) owning file(s). -C|--audit
[&lt;package&gt; ...] Check for broken package(s). --yet-to-unpack Print packages
selected for installation. --predep-package Print pre-dependencies to unpack.
--add-architecture &lt;arch&gt; Add &lt;arch&gt; to the list of architectures.
--remove-architecture &lt;arch&gt; Remove &lt;arch&gt; from the list of architectures.
--print-architecture Print dpkg architecture. --print-foreign-architectures
Print allowed foreign architectures. --assert-&lt;feature&gt; Assert support for the
specified feature. --validate-&lt;thing&gt; &lt;string&gt; Validate a &lt;thing&gt;&#39;s &lt;string&gt;.
--compare-versions &lt;a&gt; &lt;op&gt; &lt;b&gt; Compare version numbers - see below.
--force-help Show help on forcing. -Dh|--debug=help Show help on debugging.

-?, --help Show this help message. --version Show the version.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-i\uFF1A\u5B89\u88C5\u8F6F\u4EF6\u5305\uFF1B
-r\uFF1A\u5220\u9664\u8F6F\u4EF6\u5305\uFF1B
-P\uFF1A\u5220\u9664\u8F6F\u4EF6\u5305\u7684\u540C\u65F6\u5220\u9664\u5176\u914D\u7F6E\u6587\u4EF6\uFF1B
-L\uFF1A\u663E\u793A\u4E8E\u8F6F\u4EF6\u5305\u5173\u8054\u7684\u6587\u4EF6\uFF1B
-l\uFF1A\u663E\u793A\u5DF2\u5B89\u88C5\u8F6F\u4EF6\u5305\u5217\u8868\uFF1B
--unpack\uFF1A\u89E3\u5F00\u8F6F\u4EF6\u5305\uFF1B
-c\uFF1A\u663E\u793A\u8F6F\u4EF6\u5305\u5185\u6587\u4EF6\u5217\u8868\uFF1B
--confiugre\uFF1A\u914D\u7F6E\u8F6F\u4EF6\u5305\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><p>Deb\u8F6F\u4EF6\u5305\uFF1A\u6307\u5B9A\u8981\u64CD\u4F5C\u7684.deb\u8F6F\u4EF6\u5305\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dpkg <span class="token parameter variable">-i</span> package.deb     <span class="token comment"># \u5B89\u88C5\u5305</span>
dpkg <span class="token parameter variable">-r</span> package         <span class="token comment"># \u5220\u9664\u5305</span>
dpkg <span class="token parameter variable">-P</span> package         <span class="token comment"># \u5220\u9664\u5305\uFF08\u5305\u62EC\u914D\u7F6E\u6587\u4EF6\uFF09</span>
dpkg <span class="token parameter variable">-L</span> package         <span class="token comment"># \u5217\u51FA\u4E0E\u8BE5\u5305\u5173\u8054\u7684\u6587\u4EF6</span>
dpkg <span class="token parameter variable">-l</span> package         <span class="token comment"># \u663E\u793A\u8BE5\u5305\u7684\u7248\u672C</span>
dpkg <span class="token parameter variable">--unpack</span> package.deb  <span class="token comment"># \u89E3\u5F00deb\u5305\u7684\u5185\u5BB9</span>
dpkg <span class="token parameter variable">-S</span> keyword            <span class="token comment"># \u641C\u7D22\u6240\u5C5E\u7684\u5305\u5185\u5BB9</span>
dpkg <span class="token parameter variable">-l</span>                    <span class="token comment"># \u5217\u51FA\u5F53\u524D\u5DF2\u5B89\u88C5\u7684\u5305</span>
dpkg <span class="token parameter variable">-c</span> package.deb        <span class="token comment"># \u5217\u51FAdeb\u5305\u7684\u5185\u5BB9</span>
dpkg <span class="token parameter variable">--configure</span> package   <span class="token comment"># \u914D\u7F6E\u5305</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function r(d,c){return a(),n("div",null,l)}const o=e(i,[["render",r],["__file","dpkg.html.vue"]]);export{o as default};
