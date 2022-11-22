import{_ as a,o as e,c as s,e as n}from"./app.678d7e92.js";const i={},p=n(`<h1 id="ffmpeg\u63D0\u53D6\u89C6\u9891\u4E2D\u7684\u97F3\u9891" tabindex="-1"><a class="header-anchor" href="#ffmpeg\u63D0\u53D6\u89C6\u9891\u4E2D\u7684\u97F3\u9891" aria-hidden="true">#</a> FFmpeg\u63D0\u53D6\u89C6\u9891\u4E2D\u7684\u97F3\u9891</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u53D6\u5B8C\u6574\u97F3\u9891</span>
ffmpeg <span class="token parameter variable">-i</span> sample.mp4 sample.mp3

<span class="token comment"># \u63D0\u53D6\u6307\u5B9A\u65F6\u95F4\u6BB5\u7684\u97F3\u9891</span>
<span class="token comment"># ss\u6307\u5B9A\u5F00\u59CB\u65F6\u95F4\u6233\uFF0Ct\u6307\u5B9A\u7F16\u7801\u6301\u7EED\u65F6\u95F4</span>
ffmpeg <span class="token parameter variable">-i</span> sample.mp4 <span class="token parameter variable">-ss</span> 00:03:05 <span class="token parameter variable">-t</span> 00:00:45.0 <span class="token parameter variable">-q:a</span> <span class="token number">0</span> <span class="token parameter variable">-map</span> a sample.mp3

<span class="token comment"># \u91CD\u65B0\u7F16\u7801</span>
ffmpeg <span class="token parameter variable">-i</span> input-video.avi <span class="token parameter variable">-vn</span> <span class="token parameter variable">-acodec</span> copy output-audio.aac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function r(t,c){return e(),s("div",null,l)}const o=a(i,[["render",r],["__file","ffmpeg.html.vue"]]);export{o as default};
