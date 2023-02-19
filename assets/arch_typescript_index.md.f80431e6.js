import{_ as s,c as n,o as a,a as l}from"./app.635588ff.js";const A=JSON.parse('{"title":"TypeScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"01. \u7C7B\u578B\u7684\u91CD\u8981\u6027","slug":"_01-\u7C7B\u578B\u7684\u91CD\u8981\u6027","link":"#_01-\u7C7B\u578B\u7684\u91CD\u8981\u6027","children":[{"level":3,"title":"\u5173\u4E8E\u7C7B\u578B\u7684\u601D\u8003","slug":"\u5173\u4E8E\u7C7B\u578B\u7684\u601D\u8003","link":"#\u5173\u4E8E\u7C7B\u578B\u7684\u601D\u8003","children":[]},{"level":3,"title":"\u7C7B\u578B\u662F\u68C0\u67E5\u5229\u5668","slug":"\u7C7B\u578B\u662F\u68C0\u67E5\u5229\u5668","link":"#\u7C7B\u578B\u662F\u68C0\u67E5\u5229\u5668","children":[]},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}]},{"level":2,"title":"02. TS \u4ECB\u7ECD","slug":"_02-ts-\u4ECB\u7ECD","link":"#_02-ts-\u4ECB\u7ECD","children":[]},{"level":2,"title":"03. \u73AF\u5883\u914D\u7F6E","slug":"_03-\u73AF\u5883\u914D\u7F6E","link":"#_03-\u73AF\u5883\u914D\u7F6E","children":[{"level":3,"title":"\u57FA\u7840\u914D\u7F6E","slug":"\u57FA\u7840\u914D\u7F6E","link":"#\u57FA\u7840\u914D\u7F6E","children":[]},{"level":3,"title":"\u8FDB\u9636\u914D\u7F6E","slug":"\u8FDB\u9636\u914D\u7F6E","link":"#\u8FDB\u9636\u914D\u7F6E","children":[]}]}],"relativePath":"arch/typescript/index.md"}'),p={name:"arch/typescript/index.md"},o=l(`<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h1><h2 id="_01-\u7C7B\u578B\u7684\u91CD\u8981\u6027" tabindex="-1">01. \u7C7B\u578B\u7684\u91CD\u8981\u6027 <a class="header-anchor" href="#_01-\u7C7B\u578B\u7684\u91CD\u8981\u6027" aria-hidden="true">#</a></h2><p>\u7C7B\u578B\u7684\u601D\u7EF4\u65B9\u5F0F\u5728\u51FD\u6570\u5F0F\u548C\u9762\u5411\u5BF9\u8C61\u662F\u9AD8\u5EA6\u7EDF\u4E00\u7684\u3002</p><h3 id="\u5173\u4E8E\u7C7B\u578B\u7684\u601D\u8003" tabindex="-1">\u5173\u4E8E\u7C7B\u578B\u7684\u601D\u8003 <a class="header-anchor" href="#\u5173\u4E8E\u7C7B\u578B\u7684\u601D\u8003" aria-hidden="true">#</a></h3><p><strong>1. \u5206\u7C7B\u601D\u7EF4\uFF1A\u4EC0\u4E48\u662F\u4EC0\u4E48\uFF1F</strong></p><ul><li>Integer/Strings is Comparable</li><li>Array is Enumerable</li><li>React.ComponentType is not React.ComponentClass</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">P</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ComponentClass</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FunctionComponent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><p><strong>2. \u7C7B\u578B\u6620\u5C04</strong></p><ul><li>\u53EF\u4EE5\u8F6C\u6362\uFF1AComponentClass =&gt; Component</li><li>\u56E0\u6B64\uFF1A <code>Array&lt;ComponentClass&gt;</code> =&gt; <code>Array&lt;Component /&gt;</code></li></ul><p><strong>3. \u7C7B\u578B\u6F14\u5316</strong></p><ul><li>\u5F00\u59CB\u65F6\uFF1AReact \u7EC4\u5EFA\u662F ComponentClass\uFF0C\u73B0\u5728\u662F ElementType\uFF0C\u56E0\u4E3A ElementType \u4E0D\u4EC5\u4EC5\u6709 ComponentClass</li><li>\u5F00\u59CB\u65F6\uFF1ASkedo \u6E32\u67D3\u7684\u57FA\u672C\u5355\u4F4D\u662F Node\uFF0C\u540E\u6765\u662F Node | LinkedNode\uFF0C\u518D\u540E\u6765\u662F NodeType</li></ul><p><strong>\u901A\u8FC7\u7C7B\u578B\u7684\u6F14\u8FDB\u4E0D\u65AD\u8BA9\u7CFB\u7EDF\u8FDB\u5316\uFF08\u9886\u57DF\u9A71\u52A8\u5F00\u53D1\u6700\u6838\u5FC3\u7684\u7406\u5FF5\uFF09\u3002</strong></p><h3 id="\u7C7B\u578B\u662F\u68C0\u67E5\u5229\u5668" tabindex="-1">\u7C7B\u578B\u662F\u68C0\u67E5\u5229\u5668 <a class="header-anchor" href="#\u7C7B\u578B\u662F\u68C0\u67E5\u5229\u5668" aria-hidden="true">#</a></h3><p>\u6BCF\u6B21\u7C7B\u578B\u68C0\u67E5\u90FD\u53EF\u4EE5\u5E2E\u52A9\u51CF\u5C11\u7A0B\u5E8F\u9519\u8BEF\u3002</p><p>\u8BBE\u8BA1\u7684\u597D\u7684\u7C7B\u578B\u7CFB\u7EDF\u53EF\u4EE5\u505A\u5230\u7F16\u8BD1\u65F6\u68C0\u67E5\u901A\u8FC7\u65E2\u53EF\u4E0A\u7EBF\uFF0C\u867D\u7136\u53EF\u80FD\u4ECD\u5B58\u5728\u4E00\u4E9B\u5C0F\u95EE\u9898\u3002</p><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><ul><li>\u7C7B\u578B\u662F\u4EBA\u7684\u601D\u8003\u65B9\u5F0F\uFF0C\u7C7B\u578B\u53EF\u4EE5\u5E2E\u52A9\u4EBA\u601D\u8003\uFF08\u597D\u7684\u7A0B\u5E8F\u8BBE\u8BA1\u53EF\u4EE5\u5E2E\u52A9\u4EBA\u66F4\u597D\u7684\u601D\u8003\uFF09\uFF1B</li><li>\u7C7B\u578B\u53EF\u4EE5\u5E2E\u52A9\u68C0\u67E5\u9519\u8BEF\uFF08\u51CF\u5C11 90% \u4EE5\u4E0A\u7684\u8FD0\u884C\u65F6 bug\uFF0C\u7F16\u5199\u5B8C\u5373\u4E0A\u7EBF\uFF09\uFF1B</li><li>\u7C7B\u578B\u53EF\u4EE5\u5E2E\u52A9\u7CFB\u7EDF\u6F14\u8FDB\u3002</li></ul><h2 id="_02-ts-\u4ECB\u7ECD" tabindex="-1">02. TS \u4ECB\u7ECD <a class="header-anchor" href="#_02-ts-\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>2012 \u5E74\u5FAE\u8F6F\u53D1\u5E03\u7684\u4E00\u95E8\u7F16\u7A0B\u8BED\u8A00\u3002\u53D1\u5E03\u65F6\u5C31\u63D0\u4F9B\u4E86\u5C06 TypeScript \u7FFB\u8BD1\u5230 JS \u7684\u7FFB\u8BD1\u7F16\u8BD1\u5668\uFF08transcompiler\uFF09\u3002</p><ul><li>TypeScript \u662F JS \u7684\u4E00\u4E2A\u8D85\u96C6\uFF1B</li><li>TS \u540C\u65F6\u652F\u6301 Client Side \u548C Server Side\uFF1B</li><li>TS \u662F\u4E00\u4E2A\u591A\u8303\u5F0F\u8BED\u8A00\uFF1B</li><li>TS \u540C\u65F6\u652F\u6301 Duck Typing\uFF0CGradual Typing \u548C Strict Typing\u3002</li></ul><p>\u5B66\u4E60\u76EE\u6807</p><ul><li>\u7406\u89E3 TS \u7684\u539F\u7406\uFF08\u7F16\u8BD1\u65F6\u3001\u8FD0\u884C\u65F6\uFF09</li><li>\u638C\u63E1\u5E38\u89C1\u7528\u6CD5 <ul><li>\u9605\u8BFB\u6E90\u7801\u6C34\u5E73</li><li>\u7F16\u5199 TS \u7A0B\u5E8F</li></ul></li><li>\u80FD\u591F\u5E2E\u52A9\u56E2\u961F\u6210\u5458\u914D\u7F6E TS</li><li>\u719F\u6089 TS \u751F\u6001</li></ul><blockquote><p>\u5982\u679C\u4F60\u4E0D\u80FD\u7ED9\u56E2\u961F\u6210\u5458\u8BB2 TS\uFF0C\u90A3\u5C31\u662F\u6CA1\u6709\u5B66\u4F1A\u3002</p></blockquote><h2 id="_03-\u73AF\u5883\u914D\u7F6E" tabindex="-1">03. \u73AF\u5883\u914D\u7F6E <a class="header-anchor" href="#_03-\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1">\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h3><h4 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h4><ul><li>ts-node</li><li>tsc</li><li>t s config.json</li><li>vscode</li><li>\u548C webpack \u642D\u914D\u4F7F\u7528</li></ul><h4 id="ts-node" tabindex="-1">ts-node <a class="header-anchor" href="#ts-node" aria-hidden="true">#</a></h4><p>Node \u73AF\u5883\u7684 typescript \u89E3\u91CA\u6267\u884C\u5668\u3002REPL\uFF08Read eval print loop\uFF09\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -g ts-node</span></span>
<span class="line"><span style="color:#676E95;"># yarn global add ts-node</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528 ts-node \u6267\u884C\u6587\u4EF6</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ts-node smoe.ts</span></span>
<span class="line"></span></code></pre></div><h4 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h4><p>tsconfig.json</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="tsc" tabindex="-1">tsc <a class="header-anchor" href="#tsc" aria-hidden="true">#</a></h4><p>\u4E00\u4E2A ts \u7684\u7F16\u8BD1\u5668\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -g tsc</span></span>
<span class="line"><span style="color:#676E95;"># yarn global add tsc</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u6307\u5B9A\u7F16\u8BD1\u67D0\u4E2A ts \u6587\u4EF6\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">tsc hello.ts</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 tsconfig.json \u914D\u7F6E\u3002</p><ul><li>\u53EF\u4EE5\u7528 outDir \u914D\u7F6E\u9879\u914D\u7F6E js \u6587\u4EF6\u8F93\u51FA\u7684\u4F4D\u7F6E\uFF1B</li><li>tsc \u4F5C\u4E3A\u4E00\u4E2A\u6307\u4EE4\uFF0C\u53EF\u4EE5\u7528 --help \u67E5\u770B\u7528\u6CD5\uFF1B</li><li>\u53EF\u4EE5\u7528 module \u6307\u5B9A\u751F\u6210\u6A21\u5757\u7684\u7C7B\u578B\u3002</li></ul><p>\u5F53\u5B58\u5728 tsconfig.json \u65F6\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C tsc \u547D\u4EE4\u5BF9\u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1\u3002</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptoins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">outDir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="\u4E0E-webpack-\u642D\u914D\u4F7F\u7528" tabindex="-1">\u4E0E webpack \u642D\u914D\u4F7F\u7528 <a class="header-anchor" href="#\u4E0E-webpack-\u642D\u914D\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u521D\u59CB\u5316\u9879\u76EE</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir ts-webpack</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ts-webpack</span></span>
<span class="line"><span style="color:#A6ACCD;">npm init -y</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u4F9D\u8D56</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install webpack webpack-cli ts-loader typescript --save-dev</span></span>
<span class="line"><span style="color:#676E95;"># yarn add webpack webpack-cli ts-loader typescript </span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u5199\u6D4B\u8BD5\u6587\u4EF6</p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#676E95;">// src/index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data)</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u5199 webpack \u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// webpack.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/index.ts</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ts-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extensions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.tsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bundle.[name].js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u5199 npm \u811A\u672C</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts-webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">start:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">license</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ISC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ts-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^9.4.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">typescript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.9.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^5.75.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">webpack-cli</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^5.0.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u6D4B\u8BD5\u811A\u672C</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn start:dev</span></span>
<span class="line"><span style="color:#A6ACCD;">node dist/bundle.index.js</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8FDB\u9636\u914D\u7F6E" tabindex="-1">\u8FDB\u9636\u914D\u7F6E <a class="header-anchor" href="#\u8FDB\u9636\u914D\u7F6E" aria-hidden="true">#</a></h3><h4 id="\u6982\u8981-1" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981-1" aria-hidden="true">#</a></h4><ul><li>react + ts-loader \u914D\u7F6E</li><li>react + babel \u914D\u7F6E</li><li>vue + vue-loader \u914D\u7F6E</li><li>vue + babel \u914D\u7F6E</li></ul><p>\u6838\u5FC3\u95EE\u9898\uFF1Apreset \u7684\u987A\u5E8F\u6709\u5173\u7CFB\u5417\uFF1Fpreset \u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F</p><h4 id="react-ts-loader" tabindex="-1">react + ts-loader <a class="header-anchor" href="#react-ts-loader" aria-hidden="true">#</a></h4>`,62),e=[o];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
