import{_ as e,o as t,c as a,e as d}from"./app.678d7e92.js";const r={},s=d(`<p>insert into test_aa values (to_date(&#39;2018-06-05 19:55:44&#39; ,&#39;yyyy-mm-dd hh24:mi:ss&#39;));</p><p>select date_trunc(&#39;day&#39;,now())=date_trunc(&#39;day&#39;,date(&#39;20200615&#39;)) --true select date_trunc(&#39;day&#39;,date(&#39;20200611&#39;)) --2020-06-11 00:00:00+00 select * from users where date_trunc(&#39;day&#39;,birthday)=date_trunc(&#39;day&#39;,date(&#39;20200401&#39;))</p><p>\u4F7F\u7528timestamp\u8FDB\u884C\u6BD4\u8F83 \u5982\u679C\u5B57\u6BB5\u662Fvarchar\u7C7B\u578B\uFF0C\u5C06\u5176\u5148\u8F6C\u5316\u4E3Atimestamp\u7C7B\u578B\uFF0C\u8F6C\u5316\u65B9\u6CD5\uFF1A</p><p>to_timestamp(\u5B57\u6BB5\u540D,&#39;YYYY-MM-DD&#39;) 1 \u6BD4\u8F83\u65F6\uFF0C\u76F4\u63A5\u4F7F\u7528\uFF1E\u6216\u8005\uFF1C\u8FDB\u884C\u6BD4\u8F83\u3002</p><p>\u5C06\u666E\u901A\u7684\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3Atimestamp\u7684\u65B9\u6CD5\uFF1A</p><p>timestamp &#39;2020-06-28&#39;</p><h1 id="date\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#date\u7C7B\u578B" aria-hidden="true">#</a> Date\u7C7B\u578B</h1><p>\u8868\u793A\u65E5\u671F\uFF0C\u8868\u793A\u8303\u56F4<code>4713 BC</code> ~ <code>5874897 AD</code>\uFF0C\u7CBE\u786E\u81F3<code>\u5929</code>\u3002\u5F53\u524D\u65E5\u671F<code>current_date</code>\uFF0C\u53E6\u5916\u8FD8\u6709\u51E0\u4E2A\u5173\u952E\u8BCD\uFF1A</p><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code>select current_date::date, &#39;yesterday&#39;::date,&#39;today&#39;::date,&#39;tomorrow&#39;::date;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> TimeStamp</h1><p>\u8868\u793A<code>\u4E0D\u5E26\u65F6\u533A</code>\u7684<code>\u65E5\u671F\u65F6\u95F4</code>\uFF0C\u8868\u793A\u8303\u56F44713 BC ~ 294276 AD\uFF0C\u7CBE\u786E\u81F3<code>\u6BEB\u79D2</code>\u3002\u5F53\u524D\u65F6\u95F4 NOW \u6216 CURRENT_TIMESTAMP\uFF1B\u56E0\u4E3A\u4E0D\u5E26\u65F6\u533A\uFF0C\u6545\u5207\u6362\u65F6\u533A\u5BF9\u5E94\u65F6\u95F4\u6570\u636E\u503C\u4E0D\u53D8\u3002\u5E26\u65F6\u533A\u4F7F\u7528timestamptz\u7C7B\u578B\uFF0C\u5207\u6362\u65F6\u533A\u5BF9\u5E94\u65F6\u95F4\u6570\u636E\u4F1A\u968F\u4E4B\u53D8\u5316\u3002\u5982\u679Ctimestamp\u65F6\u95F4\u80FD\u6EE1\u8DB3\u4E1A\u52A1\u9700\u8981\uFF0C\u4F7F\u7528timestamp\u6548\u7387\u66F4\u9AD8\u3002</p><h1 id="interval" tabindex="-1"><a class="header-anchor" href="#interval" aria-hidden="true">#</a> interval</h1><p>\u4E3A\u4E86\u8868\u793A\u65E5\u671F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u56FA\u5B9A\u65F6\u95F4\u95F4\u9694 interval\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8E\u5206\u6790\u82B1\u4E86\u591A\u957F\u65F6\u95F4\u3002\u4F8B\u5982\uFF0C\u5206\u6790\u5BA2\u6237\u8D2D\u7269\u6240\u82B1\u7684\u65F6\u95F4\u3002</p><p>test=# select interval &#39;5 day&#39;;</p><p>interval\u7C7B\u578B\u8FD8\u53EF\u7528\u4E8E\u65E5\u671F\u52A0\u51CF\u8BA1\u7B97\uFF1A</p><p>test=# select timestamp&#39;2016-03-01 00:00:00&#39; - timestamp&#39;2016-02-01 00:00:00&#39; as day_in_feb;</p><p>\u589E\u52A07\u5929\uFF1A</p><p>test=# select &#39;2016-03-01 00:00:00&#39;::timestamp + interval &#39;7 day&#39; as new_date;</p><p>\u5B8C\u6574\u7684\u53C2\u8003\u793A\u4F8B\uFF1A</p><p>test=# SELECT now();</p><p>test=# SELECT now() + &#39;3 decades 2 hours 5 centuries 20 minutes 90 days 12 months&#39;::interval;</p><h2 id="column" tabindex="-1"><a class="header-anchor" href="#column" aria-hidden="true">#</a> ?column?</h2><p>2544-11-04 13:01:42.298739+01 1 2 3 4 5 interval \u4E2D\u63CF\u8FF0\u56FA\u5B9A\u65F6\u95F4\u4E0E\u4E66\u5199\u987A\u5E8F\u65E0\u5173\u3002interval\u20197 day\u2019 \u7B49\u4EF7 \u20187 day\u2019::interval\u3002</p><p>\u751F\u6210\u65F6\u95F4\u5E8F\u5217\uFF1A</p><h2 id="test-select-from-pg-catalog-generate-series-date-2020-01-01-date-2020-01-07-interval-1-day-generate-series" tabindex="-1"><a class="header-anchor" href="#test-select-from-pg-catalog-generate-series-date-2020-01-01-date-2020-01-07-interval-1-day-generate-series" aria-hidden="true">#</a> test=# select * from pg_catalog.generate_series(Date&#39;2020-01-01&#39;,Date&#39;2020-01-07&#39;, interval&#39;1 day&#39;); generate_series</h2><p>2020-01-01 00:00:00+08 2020-01-02 00:00:00+08 2020-01-03 00:00:00+08 2020-01-04 00:00:00+08 2020-01-05 00:00:00+08 2020-01-06 00:00:00+08 2020-01-07 00:00:00+08 (7 \u884C\u8BB0\u5F55) 1 2 3 4 5 6 7 8 9 10 11 2. \u8F6C\u6362\u65E5\u671F\u7C7B\u578B extract() \u51FD\u6570 extract(component from date)</p><p>component \u53EF\u4EE5\u4E3A\uFF1A year(\u7B49\u540Cy) ,month(\u7B49\u540Cmon), day(\u7B49\u540Cd) dow(day of week\u7684\u7B80\u5199\uFF0C1\u4E3A\u661F\u671F\u5929), isodow(1\u4E3A\u661F\u671F\u4E00) week(\u5468), quarter(\u5B63\u5EA6)</p><p>date_trunc() \u51FD\u6570 test=# select now(), date_trunc(&#39;month&#39;,now()); now | date_trunc -------------------------------+------------------------ 2021-04-28 11:04:17.935142+08 | 2021-04-01 00:00:00+08 (1 \u884C\u8BB0\u5F55) 1 2 3 4 5 \u6CE8\u610F\uFF0CDATE_TRUNC(\u2026)\u51FD\u6570\u6CA1\u6709\u5BF9\u503C\u8FDB\u884C\u56DB\u820D\u4E94\u5165\u3002\u76F8\u53CD\u5B83\u8F93\u51FA\u5C0F\u4E8E\u6216\u7B49\u4E8E\u8F93\u5165\u65E5\u671F\u503C\u7684\u6700\u5927\u56DB\u820D\u4E94\u5165\u503C\u3002</p><p>DATE_TRUNC(\u2026)\u51FD\u6570\u7C7B\u4F3C\u6570\u5B66\u51FD\u6570\u4E2D\u7684flooring\u51FD\u6570\uFF0C\u5373\u8F93\u51FA\u8F83\u8F93\u5165\u6700\u5C0F\u6216\u76F8\u7B49\u7684\u6570\uFF085.6\u8FD4\u56DE5\uFF09\uFF1B\u5B83\u5BF9Group by \u5B50\u53E5\u5F88\u6709\u7528\u3002\u5982\u53EF\u4EE5\u6309\u7167\u5B63\u5EA6\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1\u3002</p><p>DATE_TRUNC(\u2026) \u9700\u8981\u5B57\u7B26\u4E32\u8868\u793A\u622A\u65AD\u7684\u65F6\u95F4\u90E8\u5206\uFF1B\u800CEXTRACT(\u2026)\u63A5\u53D7\u7684\u5B57\u7B26\u4E32\u4E0D\u9700\u8981\u5F15\u53F7\u3002</p>`,30),n=[s];function i(c,o){return t(),a("div",null,n)}const m=e(r,[["render",i],["__file","\u5173\u4E8E\u65F6\u95F4\u7684\u64CD\u4F5C.html.vue"]]);export{m as default};
