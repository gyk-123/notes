import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.9bc09dc8.js";const p="/assets/design.daeb18c6.png",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"node/tars/index.md","filePath":"node/tars/index.md"}'),o={name:"node/tars/index.md"},e=l(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><a href="https://tarscloud.github.io/TarsDocs/" target="_blank" rel="noreferrer">https://tarscloud.github.io/TarsDocs/</a></p><h2 id="开发相关" tabindex="-1">开发相关 <a class="header-anchor" href="#开发相关" aria-label="Permalink to &quot;开发相关&quot;">​</a></h2><h3 id="脚手架" tabindex="-1">脚手架 <a class="header-anchor" href="#脚手架" aria-label="Permalink to &quot;脚手架&quot;">​</a></h3><p><a href="https://tarscloud.github.io/TarsDocs/dev/tars.js/nodetools-cli.html" target="_blank" rel="noreferrer">https://tarscloud.github.io/TarsDocs/dev/tars.js/nodetools-cli.html</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm install </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">g @tars</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">nodetools</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm install </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">g @tars</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">nodetools</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cli</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">nodetools init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">nodetools init</span></span></code></pre></div><p>tars rpc 服务选择 <code>tars协议</code>， http服务选择 <code>非tars协议</code></p><h3 id="tars-deploy" tabindex="-1">@tars/deploy <a class="header-anchor" href="#tars-deploy" aria-label="Permalink to &quot;@tars/deploy&quot;">​</a></h3><p>打包本地 tars 应用。也可以使用脚手架完成一键部署。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm i @tars</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">deploy </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm i @tars</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">deploy </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">g</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">tars</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">deploy name [options]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">tars</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">deploy name [options]</span></span></code></pre></div><h3 id="tars2node" tabindex="-1">tars2node <a class="header-anchor" href="#tars2node" aria-label="Permalink to &quot;tars2node&quot;">​</a></h3><p><a href="https://tarscloud.github.io/TarsDocs/dev/tars.js/tars2node.html" target="_blank" rel="noreferrer">https://tarscloud.github.io/TarsDocs/dev/tars.js/tars2node.html</a></p><p>转换 tars 文件。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">tars2node Protocol.tars </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">client</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">tars2node Protocol.tars </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">client</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">tars2node Protocol.tars </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">client </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">tars2node Protocol.tars </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">client </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">ts</span></span></code></pre></div><h3 id="内网穿透工具" tabindex="-1">内网穿透工具 <a class="header-anchor" href="#内网穿透工具" aria-label="Permalink to &quot;内网穿透工具&quot;">​</a></h3><p>chisel_1.7.6_windows_amd64。</p><p><a href="https://github.com/jpillora/chisel/releases" target="_blank" rel="noreferrer">https://github.com/jpillora/chisel/releases</a></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> .</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">chisel.exe client </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">auth </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">:Eetai2uchohsha6o </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//chisel.cuntutu.com 17892:192.168.0.216:17890 192.168.0.216:18193 192.168.1.140:10101 192.168.1.140:10102 192.168.1.140:10103 192.168.1.140:10104 192.168.1.140:10105 192.168.1.140:10106 192.168.1.140:10107 192.168.1.140:10108 192.168.1.140:10109 192.168.1.140:10110 192.168.1.140:10111 192.168.1.140:10113 192.168.1.140:10114 192.168.1.140:10116 192.168.1.140:10122 192.168.1.140:10201 192.168.1.140:10202 192.168.1.140:10203 192.168.1.140:1020 192.168.1.140:10130 192.168.1.140:18130</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> .</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">chisel.exe client </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">auth </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">:Eetai2uchohsha6o </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//chisel.cuntutu.com 17892:192.168.0.216:17890 192.168.0.216:18193 192.168.1.140:10101 192.168.1.140:10102 192.168.1.140:10103 192.168.1.140:10104 192.168.1.140:10105 192.168.1.140:10106 192.168.1.140:10107 192.168.1.140:10108 192.168.1.140:10109 192.168.1.140:10110 192.168.1.140:10111 192.168.1.140:10113 192.168.1.140:10114 192.168.1.140:10116 192.168.1.140:10122 192.168.1.140:10201 192.168.1.140:10202 192.168.1.140:10203 192.168.1.140:1020 192.168.1.140:10130 192.168.1.140:18130</span></span></code></pre></div><p>自建查询服务，替代 tars 原有的注册中心。</p><p><a href="https://github.com/yw0525/tars-registry-proxy" target="_blank" rel="noreferrer">https://github.com/yw0525/tars-registry-proxy</a></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@tars/registry&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">registry.</span><span style="color:#B392F0;">setLocator</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;tars.tarsregistry.QueryObj@tcp -h 10.1.1.204 -p 17890&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">registry.</span><span style="color:#B392F0;">findObjectById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;winwin.tars_file_registry.TarsFileRegistryObj&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result.response.return.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">registry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@tars/registry&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">registry.</span><span style="color:#6F42C1;">setLocator</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;tars.tarsregistry.QueryObj@tcp -h 10.1.1.204 -p 17890&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">registry.</span><span style="color:#6F42C1;">findObjectById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;winwin.tars_file_registry.TarsFileRegistryObj&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">result</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result.response.return.value);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span></code></pre></div><img src="`+p+`"><h2 id="本地环境安装部署" tabindex="-1">本地环境安装部署 <a class="header-anchor" href="#本地环境安装部署" aria-label="Permalink to &quot;本地环境安装部署&quot;">​</a></h2><p><a href="https://tarscloud.github.io/TarsDocs/installation/docker-install.html" target="_blank" rel="noreferrer">https://tarscloud.github.io/TarsDocs/installation/docker-install.html</a></p><p><a href="https://tarscloud.github.io/TarsDocs/installation/docker.html" target="_blank" rel="noreferrer">https://tarscloud.github.io/TarsDocs/installation/docker.html</a></p><h3 id="创建虚拟网络" tabindex="-1">创建虚拟网络 <a class="header-anchor" href="#创建虚拟网络" aria-label="Permalink to &quot;创建虚拟网络&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker network create </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d bridge </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">subnet</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">172.25</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">0.0</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">gateway</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">172.25</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;"> tars</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker network create </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d bridge </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">subnet</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">172.25</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">0.0</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">16</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">gateway</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">172.25</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;"> tars</span></span></code></pre></div><h3 id="安装-mysql" tabindex="-1">安装 MySQL <a class="header-anchor" href="#安装-mysql" aria-label="Permalink to &quot;安装 MySQL&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">3306</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3306</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">net</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">tars \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_ROOT_PASSWORD</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;123456&quot;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">ip</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;172.25.0.2&quot;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">tars</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">mysql \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mysql</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">5.6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">3306</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3306</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">net</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">tars \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_ROOT_PASSWORD</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;123456&quot;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">ip</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;172.25.0.2&quot;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">tars</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">mysql \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mysql</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">5.6</span></span></code></pre></div><h3 id="框架部署" tabindex="-1">框架部署 <a class="header-anchor" href="#框架部署" aria-label="Permalink to &quot;框架部署&quot;">​</a></h3><p>tarscloud/framework 框架部署。</p><p><strong>获取最新镜像</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker pull tarscloud</span><span style="color:#F97583;">/</span><span style="color:#B392F0;">framework</span><span style="color:#E1E4E8;">:latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker pull tarscloud</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">framework</span><span style="color:#24292E;">:latest</span></span></code></pre></div><p><strong>创建容器</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">tars</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">framework \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">net</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">tars \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_HOST</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;172.25.0.2&quot;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_ROOT_PASSWORD</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;123456&quot;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_USER</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">root \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_PORT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3306</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">REBUILD</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">INET</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">eth0 \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">SLAVE</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">ip</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;172.25.0.3&quot;</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">3001</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3001</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">4000</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">4000</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">4100</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">4100</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">4200</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">4200</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">17890</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">17890</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">17891</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">17891</span><span style="color:#E1E4E8;"> \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    tarscloud</span><span style="color:#F97583;">/</span><span style="color:#B392F0;">framework</span><span style="color:#E1E4E8;">:latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">tars</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">framework \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">net</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">tars \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_HOST</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;172.25.0.2&quot;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_ROOT_PASSWORD</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;123456&quot;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_USER</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">root \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_PORT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3306</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">REBUILD</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">INET</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">eth0 \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">SLAVE</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">ip</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;172.25.0.3&quot;</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">3001</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3001</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">4000</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">4000</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">4100</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">4100</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">4200</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">4200</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">17890</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">17890</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">17891</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">17891</span><span style="color:#24292E;"> \\</span></span>
<span class="line"><span style="color:#24292E;">    tarscloud</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">framework</span><span style="color:#24292E;">:latest</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docker run </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">tars</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">framework </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">net</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">tars </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_HOST</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;172.25.0.2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_ROOT_PASSWORD</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;123456&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_USER</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">root </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">MYSQL_PORT</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3306</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">REBUILD</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">INET</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">eth0 </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">e </span><span style="color:#79B8FF;">SLAVE</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">ip</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;172.25.0.3&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">3001</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">3001</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">4000</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">4000</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">4100</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">4100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">4200</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">4200</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">4300</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">4300</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">17890</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">17890</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p </span><span style="color:#79B8FF;">17891</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">17891</span><span style="color:#E1E4E8;"> tarscloud</span><span style="color:#F97583;">/</span><span style="color:#B392F0;">framework</span><span style="color:#E1E4E8;">:latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docker run </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">tars</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">framework </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">net</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">tars </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_HOST</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;172.25.0.2&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_ROOT_PASSWORD</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;123456&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_USER</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">root </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">MYSQL_PORT</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3306</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">REBUILD</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">INET</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">eth0 </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">e </span><span style="color:#005CC5;">SLAVE</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">ip</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;172.25.0.3&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">3001</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">3001</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">4000</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">4000</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">4100</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">4100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">4200</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">4200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">4300</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">4300</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">17890</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">17890</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p </span><span style="color:#005CC5;">17891</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">17891</span><span style="color:#24292E;"> tarscloud</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">framework</span><span style="color:#24292E;">:latest</span></span></code></pre></div><p>运行完毕访问 <a href="http://127.0.0.1:3000" target="_blank" rel="noreferrer">http://127.0.0.1:3000</a>。</p>`,40),t=[e];function r(c,y,E,i,d,F){return a(),n("div",null,t)}const C=s(o,[["render",r]]);export{u as __pageData,C as default};