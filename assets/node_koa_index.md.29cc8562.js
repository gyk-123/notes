import{_ as s,c as n,o as a,a as l}from"./app.1737b1d8.js";const i=JSON.parse('{"title":"Koa","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001 Kao\u3001MVC\u3001Node\u4E2D\u95F4\u5C42\u3001\u4E0A\u5C42\u8BBE\u8BA1","slug":"\u4E00\u3001-kao\u3001mvc\u3001node\u4E2D\u95F4\u5C42\u3001\u4E0A\u5C42\u8BBE\u8BA1"},{"level":3,"title":"1. Koa \u7B80\u4ECB","slug":"_1-koa-\u7B80\u4ECB"},{"level":3,"title":"2. MVC","slug":"_2-mvc"},{"level":2,"title":"\u4E8C\u3001Koa\u7528\u6CD5\u3001Node\u4E2D\u95F4\u5C42\u4E0E\u524D\u7AEF\u6E32\u67D3\u7684\u533A\u522B","slug":"\u4E8C\u3001koa\u7528\u6CD5\u3001node\u4E2D\u95F4\u5C42\u4E0E\u524D\u7AEF\u6E32\u67D3\u7684\u533A\u522B"},{"level":2,"title":"\u4E09\u3001\u4E86\u89E3Koa\u7684\u8BBE\u8BA1\u3001\u642D\u5EFAKoa\u6E90\u7801\u67B6\u5B50","slug":"\u4E09\u3001\u4E86\u89E3koa\u7684\u8BBE\u8BA1\u3001\u642D\u5EFAkoa\u6E90\u7801\u67B6\u5B50"},{"level":2,"title":"\u56DB\u3001\u8BF7\u6C42\u62E6\u622A\u4E0E\u4E0A\u4E0B\u6587\u4EE3\u7406\u65B9\u6848","slug":"\u56DB\u3001\u8BF7\u6C42\u62E6\u622A\u4E0E\u4E0A\u4E0B\u6587\u4EE3\u7406\u65B9\u6848"},{"level":2,"title":"\u4E94\u3001\u54CD\u5E94\u62E6\u622A\u3001\u54CD\u5E94\u4EE3\u7406\u3001\u5904\u7406\u54CD\u5E94\u5185\u5BB9","slug":"\u4E94\u3001\u54CD\u5E94\u62E6\u622A\u3001\u54CD\u5E94\u4EE3\u7406\u3001\u5904\u7406\u54CD\u5E94\u5185\u5BB9"}],"relativePath":"node/koa/index.md"}'),p={name:"node/koa/index.md"},o=l(`<h1 id="koa" tabindex="-1">Koa <a class="header-anchor" href="#koa" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001-kao\u3001mvc\u3001node\u4E2D\u95F4\u5C42\u3001\u4E0A\u5C42\u8BBE\u8BA1" tabindex="-1">\u4E00\u3001 Kao\u3001MVC\u3001Node\u4E2D\u95F4\u5C42\u3001\u4E0A\u5C42\u8BBE\u8BA1 <a class="header-anchor" href="#\u4E00\u3001-kao\u3001mvc\u3001node\u4E2D\u95F4\u5C42\u3001\u4E0A\u5C42\u8BBE\u8BA1" aria-hidden="true">#</a></h2><p>Koa \u57FA\u4E8E Node.js \u5E73\u53F0\u7684\u4E0B\u4E00\u4EE3 web \u5F00\u53D1\u6846\u67B6\u3002</p><h3 id="_1-koa-\u7B80\u4ECB" tabindex="-1">1. Koa \u7B80\u4ECB <a class="header-anchor" href="#_1-koa-\u7B80\u4ECB" aria-hidden="true">#</a></h3><p>Kao \u662F\u4E00\u4E2A\u65B0\u7684 web \u6846\u67B6\uFF0C\u7531 Express \u5E55\u540E\u7684\u539F\u73ED\u4EBA\u9A6C\u6253\u9020\uFF0C\u81F4\u529B\u4E8E\u6210\u4E3A web \u5E94\u7528\u548C API \u5F00\u53D1\u9886\u57DF\u4E2D\u4E00\u4E2A\u66F4\u5C0F\u3001\u66F4\u5BCC\u6709\u8868\u73B0\u529B\u3001\u66F4\u5065\u58EE\u7684\u57FA\u77F3\u3002 \u901A\u8FC7\u5229\u7528 async \u51FD\u6570\uFF0CKoa \u5E2E\u4F60\u4E22\u5F03\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u6709\u529B\u5730\u589E\u5F3A\u9519\u8BEF\u5904\u7406\u3002 Koa \u5E76\u6CA1\u6709\u6346\u7ED1\u4EFB\u4F55\u4E2D\u95F4\u4EF6\uFF0C\u800C\u662F\u63D0\u4F9B\u4E86\u4E00\u5957\u4F18\u96C5\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5E2E\u52A9\u60A8\u5FEB\u901F\u800C\u6109\u5FEB\u5730\u7F16\u5199\u670D\u52A1\u7AEF\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>Kao \u662F\u65E0\u4E0A\u5C42\u8BBE\u8BA1\u7684\u6846\u67B6\u3002 EggJS \u662F\u57FA\u4E8E Koa \u5F00\u53D1\u7684\u4E0A\u5C42\u6846\u67B6\uFF08MVC \u5F00\u53D1\u6A21\u5F0F\u7684\u4E0A\u5C42\u8BBE\u8BA1\uFF09\u3002</p><h3 id="_2-mvc" tabindex="-1">2. MVC <a class="header-anchor" href="#_2-mvc" aria-hidden="true">#</a></h3><h4 id="_2-1-m\uFF08model\uFF09-\u6A21\u578B" tabindex="-1">2.1 M\uFF08model\uFF09 \u6A21\u578B <a class="header-anchor" href="#_2-1-m\uFF08model\uFF09-\u6A21\u578B" aria-hidden="true">#</a></h4><p>\u64CD\u4F5C\u6570\u636E\u8868/\u8BF7\u6C42\u6570\u636E \uFF08JAVA PHP PYTHON\uFF09 \u524D\u7AEF\u5411 NODE\uFF08\u4E2D\u95F4\u5C42\uFF09 \u5C42\u8BF7\u6C42\u6570\u636E\uFF0CNODE \u518D\u5411\u7EAF\u540E\u7AEF\u8BF7\u6C42\u6570\u636E\u3002</p><p>\u4E3A\u4EC0\u4E48\u9700\u8981 NODE \u505A\u4E2D\u95F4\u5C42\uFF1F</p><ul><li><p>\u9996\u5C4F\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08server side rendering\uFF09\u3002 \u524D\u7AEF\u9875\u9762\u662F\u4E00\u4E2A\u5B8C\u6574\u9875\u9762\uFF08\u975EJS\u5728\u524D\u7AEF\u83B7\u53D6\u6570\u636E\u518D\u7EC4\u88C5\u9875\u9762\uFF09SEO\u4E0D\u597D\u3002 Node \u4F5C\u4E3A\u540E\u7AEF\u53EF\u4EE5\u7EC4\u88C5\u9875\u9762\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5C06\u9875\u9762\u8FD4\u56DE\u524D\u7AEF\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u64CD\u4F5C\u3002</p></li><li><p>Node \u53D1\u5C55\u8F83\u665A\u3001\u6570\u636E\u63A5\u53E3\u57FA\u672C\u90FD\u662F\u4F20\u7EDF\u540E\u7AEF\u8BED\u8A00\u7F16\u5199\uFF0C\u6CA1\u6709\u5FC5\u8981\u7528 Node \u91CD\u6784\u3002 Node \u4E0D\u9002\u7528\u9AD8\u6027\u80FD\u8FD0\u7B97\u3001\u6570\u636E\u5206\u6790\u3001\u8BBF\u95EE\u91CF\u5927\u7684\u573A\u666F\uFF08\u76F8\u6BD4\u8F83Java\u3001\u4F18\u52BF\u4E0D\u5927\uFF09\u3002</p></li></ul><p>\u4E3A\u4EC0\u4E48\u4E0D\u7528 JAVA \u7EC4\u88C5\u9875\u9762\uFF1F</p><ul><li>\u672C\u8EAB\u5E0C\u671B\u524D\u540E\u7AEF\u662F\u5206\u79BB\u7684\uFF0C\u5982\u679C\u4F7F\u7528 JAVA \u7EC4\u88C5\u9875\u9762\uFF0C\u8FD8\u9700\u8981\u8D1F\u8D23\u6837\u5F0F\u3001JS\u3002</li><li>Node \u4F7F\u7528 JS\u3001TS \u7F16\u5199\u7684\uFF0C\u5B8C\u5168\u53EF\u4EE5\u7531\u524D\u7AEF\u6765\u7EC4\u88C5\u9875\u9762\u3002 \u540E\u7AEF\u53EA\u8D1F\u8D23\u63A5\u53E3\u5F00\u53D1\uFF0C\u53EA\u8D1F\u8D23\u6570\u636E\u90E8\u5206\u3002 \u524D\u7AEF\u8D1F\u8D23\u4EA4\u4E92\u3001\u540E\u7AEF\u8D1F\u8D23\u6570\u636E\u3002</li></ul><h4 id="_2-2-v\uFF08view\uFF09\u89C6\u56FE" tabindex="-1">2.2 V\uFF08view\uFF09\u89C6\u56FE <a class="header-anchor" href="#_2-2-v\uFF08view\uFF09\u89C6\u56FE" aria-hidden="true">#</a></h4><p>HTML\u3001\u89C6\u56FE\u6A21\u677F\u3002</p><h4 id="_2-3-c\uFF08controller\uFF09\u63A7\u5236\u5668" tabindex="-1">2.3 C\uFF08controller\uFF09\u63A7\u5236\u5668 <a class="header-anchor" href="#_2-3-c\uFF08controller\uFF09\u63A7\u5236\u5668" aria-hidden="true">#</a></h4><p>\u6570\u636E\u63A5\u53E3\u3001\u63D0\u4F9B\u89C6\u56FE\u6570\u636E\u3002</p><h2 id="\u4E8C\u3001koa\u7528\u6CD5\u3001node\u4E2D\u95F4\u5C42\u4E0E\u524D\u7AEF\u6E32\u67D3\u7684\u533A\u522B" tabindex="-1">\u4E8C\u3001Koa\u7528\u6CD5\u3001Node\u4E2D\u95F4\u5C42\u4E0E\u524D\u7AEF\u6E32\u67D3\u7684\u533A\u522B <a class="header-anchor" href="#\u4E8C\u3001koa\u7528\u6CD5\u3001node\u4E2D\u95F4\u5C42\u4E0E\u524D\u7AEF\u6E32\u67D3\u7684\u533A\u522B" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i koa </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D</span></span>
<span class="line"></span></code></pre></div><p>listen \u76D1\u542C\u670D\u52A1 use \u6CE8\u518C\u4E2D\u95F4\u4EF6\u51FD\u6570 on \u76D1\u542C\u4E8B\u4EF6</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Kao </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">koa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Kao</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello Koa.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>ctx \u662F Koa \u7684\u6267\u884C\u671F\u4E0A\u4E0B\u6587\u3002 req res \u90FD\u5728 ctx \u4E2D\u3002\u539F\u751F\u3002 ctx.request ctx.response\u3002\u5C01\u88C5\u3002 ctx.body === ctx.response.body</p><h2 id="\u4E09\u3001\u4E86\u89E3koa\u7684\u8BBE\u8BA1\u3001\u642D\u5EFAkoa\u6E90\u7801\u67B6\u5B50" tabindex="-1">\u4E09\u3001\u4E86\u89E3Koa\u7684\u8BBE\u8BA1\u3001\u642D\u5EFAKoa\u6E90\u7801\u67B6\u5B50 <a class="header-anchor" href="#\u4E09\u3001\u4E86\u89E3koa\u7684\u8BBE\u8BA1\u3001\u642D\u5EFAkoa\u6E90\u7801\u67B6\u5B50" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// main - lib - application.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Koa </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">koa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// class Application \u5B9E\u4F8B\u5316</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Koa</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \u4E09\u4E2A\u91CD\u8981\u7684app\u5BF9\u8C61\u4E0B\u7684API</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * listen \u76D1\u542C\u670D\u52A1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * use\uFF1A\u6CE8\u518C\u4E2D\u95F4\u4EF6\u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * on\uFF1A\u76D1\u542C\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">object</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#676E95;font-style:italic;"> - \u6267\u884C\u671F\u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  \u5305\u542B\u6267\u884C\u671F\u6240\u9700\u8981\u7684\u6240\u6709\u65B9\u6CD5\u548C\u5C5E\u6027</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  \u4F8B\u5982\uFF1Arequest\u3001response</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5C01\u88C5 \u4EE3\u7406\u5230 ctx.request.path</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5C01\u88C5</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u539F\u751F</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u539F\u751F</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./context</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> request </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./response</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Application</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">httpService</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">handleHttpRequest</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">httpService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">handleHttpRequest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">createContext</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">callback</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">createContext</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">req</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">req</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Application</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u56DB\u3001\u8BF7\u6C42\u62E6\u622A\u4E0E\u4E0A\u4E0B\u6587\u4EE3\u7406\u65B9\u6848" tabindex="-1">\u56DB\u3001\u8BF7\u6C42\u62E6\u622A\u4E0E\u4E0A\u4E0B\u6587\u4EE3\u7406\u65B9\u6848 <a class="header-anchor" href="#\u56DB\u3001\u8BF7\u6C42\u62E6\u622A\u4E0E\u4E0A\u4E0B\u6587\u4EE3\u7406\u65B9\u6848" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> defineGetter </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> PROXY_REQUEST_GETTER_KEYS </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./config</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> proto </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> defineRequestGetter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineGetter</span><span style="color:#A6ACCD;">(proto</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">PROXY_REQUEST_GETTER_KEYS</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(key </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">defineRequestGetter</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> proto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ctx.path -&gt; ctx.request.path</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ctx.url -&gt; ctx.request.url</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Object.defineProperty</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  Object.__defineGetter__ \u62E6\u622A\u83B7\u53D6\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  Object.__defineSetter__ \u62E6\u622A\u8BBE\u7F6E\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pathname</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">url</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E94\u3001\u54CD\u5E94\u62E6\u622A\u3001\u54CD\u5E94\u4EE3\u7406\u3001\u5904\u7406\u54CD\u5E94\u5185\u5BB9" tabindex="-1">\u4E94\u3001\u54CD\u5E94\u62E6\u622A\u3001\u54CD\u5E94\u4EE3\u7406\u3001\u5904\u7406\u54CD\u5E94\u5185\u5BB9 <a class="header-anchor" href="#\u4E94\u3001\u54CD\u5E94\u62E6\u622A\u3001\u54CD\u5E94\u4EE3\u7406\u3001\u5904\u7406\u54CD\u5E94\u5185\u5BB9" aria-hidden="true">#</a></h2>`,29),e=[o];function t(c,r,y,D,F,A){return a(),n("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};
