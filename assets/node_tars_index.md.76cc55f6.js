import{_ as s,c as a,o as n,a as l}from"./app.c8d289c3.js";var p="/assets/design.daeb18c6.png";const d=JSON.parse('{"title":"\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"\u5F00\u53D1\u76F8\u5173","slug":"\u5F00\u53D1\u76F8\u5173"},{"level":3,"title":"\u811A\u624B\u67B6","slug":"\u811A\u624B\u67B6"},{"level":3,"title":"@tars/deploy","slug":"tars-deploy"},{"level":3,"title":"tars2node","slug":"tars2node"},{"level":3,"title":"\u5185\u7F51\u7A7F\u900F\u5DE5\u5177","slug":"\u5185\u7F51\u7A7F\u900F\u5DE5\u5177"},{"level":2,"title":"\u672C\u5730\u73AF\u5883\u5B89\u88C5\u90E8\u7F72","slug":"\u672C\u5730\u73AF\u5883\u5B89\u88C5\u90E8\u7F72"},{"level":3,"title":"\u521B\u5EFA\u865A\u62DF\u7F51\u7EDC","slug":"\u521B\u5EFA\u865A\u62DF\u7F51\u7EDC"},{"level":3,"title":"\u5B89\u88C5 MySQL","slug":"\u5B89\u88C5-mysql"},{"level":3,"title":"\u6846\u67B6\u90E8\u7F72","slug":"\u6846\u67B6\u90E8\u7F72"}],"relativePath":"node/tars/index.md"}'),o={name:"node/tars/index.md"},e=l(`<h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p><a href="https://tarscloud.github.io/TarsDocs/" target="_blank" rel="noopener noreferrer">https://tarscloud.github.io/TarsDocs/</a></p><h2 id="\u5F00\u53D1\u76F8\u5173" tabindex="-1">\u5F00\u53D1\u76F8\u5173 <a class="header-anchor" href="#\u5F00\u53D1\u76F8\u5173" aria-hidden="true">#</a></h2><h3 id="\u811A\u624B\u67B6" tabindex="-1">\u811A\u624B\u67B6 <a class="header-anchor" href="#\u811A\u624B\u67B6" aria-hidden="true">#</a></h3><p><a href="https://tarscloud.github.io/TarsDocs/dev/tars.js/nodetools-cli.html" target="_blank" rel="noopener noreferrer">https://tarscloud.github.io/TarsDocs/dev/tars.js/nodetools-cli.html</a></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">tars</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nodetools</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cli</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">nodetools init</span></span>
<span class="line"></span></code></pre></div><p>tars rpc \u670D\u52A1\u9009\u62E9 <code>tars\u534F\u8BAE</code>\uFF0C http\u670D\u52A1\u9009\u62E9 <code>\u975Etars\u534F\u8BAE</code></p><h3 id="tars-deploy" tabindex="-1">@tars/deploy <a class="header-anchor" href="#tars-deploy" aria-hidden="true">#</a></h3><p>\u6253\u5305\u672C\u5730 tars \u5E94\u7528\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u811A\u624B\u67B6\u5B8C\u6210\u4E00\u952E\u90E8\u7F72\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">tars</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">deploy </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tars</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">deploy name [options]</span></span>
<span class="line"></span></code></pre></div><h3 id="tars2node" tabindex="-1">tars2node <a class="header-anchor" href="#tars2node" aria-hidden="true">#</a></h3><p><a href="https://tarscloud.github.io/TarsDocs/dev/tars.js/tars2node.html" target="_blank" rel="noopener noreferrer">https://tarscloud.github.io/TarsDocs/dev/tars.js/tars2node.html</a></p><p>\u8F6C\u6362 tars \u6587\u4EF6\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tars2node Protocol</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tars </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">client</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">tars2node Protocol</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tars </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">client </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5185\u7F51\u7A7F\u900F\u5DE5\u5177" tabindex="-1">\u5185\u7F51\u7A7F\u900F\u5DE5\u5177 <a class="header-anchor" href="#\u5185\u7F51\u7A7F\u900F\u5DE5\u5177" aria-hidden="true">#</a></h3><p>chisel_1.7.6_windows_amd64\u3002</p><p><a href="https://github.com/jpillora/chisel/releases" target="_blank" rel="noopener noreferrer">https://github.com/jpillora/chisel/releases</a></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">chisel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">exe client </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">auth </span><span style="color:#FFCB6B;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">Eetai2uchohsha6o </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//chisel.cuntutu.com 17892:192.168.0.216:17890 192.168.0.216:18193 192.168.1.140:10101 192.168.1.140:10102 192.168.1.140:10103 192.168.1.140:10104 192.168.1.140:10105 192.168.1.140:10106 192.168.1.140:10107 192.168.1.140:10108 192.168.1.140:10109 192.168.1.140:10110 192.168.1.140:10111 192.168.1.140:10113 192.168.1.140:10114 192.168.1.140:10116 192.168.1.140:10122 192.168.1.140:10201 192.168.1.140:10202 192.168.1.140:10203 192.168.1.140:1020 192.168.1.140:10130 192.168.1.140:18130</span></span>
<span class="line"></span></code></pre></div><p>\u81EA\u5EFA\u67E5\u8BE2\u670D\u52A1\uFF0C\u66FF\u4EE3 tars \u539F\u6709\u7684\u6CE8\u518C\u4E2D\u5FC3\u3002</p><p><a href="https://github.com/yw0525/tars-registry-proxy" target="_blank" rel="noopener noreferrer">https://github.com/yw0525/tars-registry-proxy</a></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> registry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@tars/registry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLocator</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tars.tarsregistry.QueryObj@tcp -h 10.1.1.204 -p 17890</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findObjectById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">winwin.tars_file_registry.TarsFileRegistryObj</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">return</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><img src="`+p+`"><h2 id="\u672C\u5730\u73AF\u5883\u5B89\u88C5\u90E8\u7F72" tabindex="-1">\u672C\u5730\u73AF\u5883\u5B89\u88C5\u90E8\u7F72 <a class="header-anchor" href="#\u672C\u5730\u73AF\u5883\u5B89\u88C5\u90E8\u7F72" aria-hidden="true">#</a></h2><p><a href="https://tarscloud.github.io/TarsDocs/installation/docker-install.html" target="_blank" rel="noopener noreferrer">https://tarscloud.github.io/TarsDocs/installation/docker-install.html</a></p><p><a href="https://tarscloud.github.io/TarsDocs/installation/docker.html" target="_blank" rel="noopener noreferrer">https://tarscloud.github.io/TarsDocs/installation/docker.html</a></p><h3 id="\u521B\u5EFA\u865A\u62DF\u7F51\u7EDC" tabindex="-1">\u521B\u5EFA\u865A\u62DF\u7F51\u7EDC <a class="header-anchor" href="#\u521B\u5EFA\u865A\u62DF\u7F51\u7EDC" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker network create </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d bridge </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">subnet</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">172.25</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0.0</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">gateway</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">172.25</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> tars</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B89\u88C5-mysql" tabindex="-1">\u5B89\u88C5 MySQL <a class="header-anchor" href="#\u5B89\u88C5-mysql" aria-hidden="true">#</a></h3><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">net</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">tars \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">ip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">172.25.0.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">tars</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">mysql</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">5.6</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6846\u67B6\u90E8\u7F72" tabindex="-1">\u6846\u67B6\u90E8\u7F72 <a class="header-anchor" href="#\u6846\u67B6\u90E8\u7F72" aria-hidden="true">#</a></h3><p>tarscloud/framework \u6846\u67B6\u90E8\u7F72\u3002</p><p><strong>\u83B7\u53D6\u6700\u65B0\u955C\u50CF</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull tarscloud</span><span style="color:#89DDFF;">/</span><span style="color:#FFCB6B;">framework</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">latest</span></span>
<span class="line"></span></code></pre></div><p><strong>\u521B\u5EFA\u5BB9\u5668</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">tars</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">framework \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">net</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">tars \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">172.25.0.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_USER</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">root \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e REBUILD</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e INET</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">eth0 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e SLAVE</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">ip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">172.25.0.3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">3001</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">3001</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4000</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4000</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4100</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4100</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4200</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4200</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">17890</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">17890</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">17891</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">17891</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    tarscloud</span><span style="color:#89DDFF;">/</span><span style="color:#FFCB6B;">framework</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">latest</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">tars</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">framework </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">net</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">tars </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">172.25.0.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_USER</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e REBUILD</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e INET</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">eth0 </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e SLAVE</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">ip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">172.25.0.3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">3001</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">3001</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4000</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4100</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4100</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4200</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4200</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4300</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4300</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">17890</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">17890</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">17891</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">17891</span><span style="color:#A6ACCD;"> tarscloud</span><span style="color:#89DDFF;">/</span><span style="color:#FFCB6B;">framework</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">latest</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u5B8C\u6BD5\u8BBF\u95EE <a href="http://127.0.0.1:3000" target="_blank" rel="noopener noreferrer">http://127.0.0.1:3000</a>\u3002</p>`,40),t=[e];function r(c,D,C,y,A,F){return n(),a("div",null,t)}var h=s(o,[["render",r]]);export{d as __pageData,h as default};