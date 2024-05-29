import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.BvVpiGod.js";const t="/vuepress/assets/nginx41.BlLs81Ay.jpeg",e="/vuepress/assets/nginx42.CgA4KsiL.jpeg",u=JSON.parse('{"title":"反向代理负载均衡","description":"","frontmatter":{},"headers":[],"relativePath":"tool/nginx/4.反向代理负载均衡.md","filePath":"tool/nginx/4.反向代理负载均衡.md","lastUpdated":1716973501000}'),p={name:"tool/nginx/4.反向代理负载均衡.md"},l=n('<h1 id="反向代理负载均衡" tabindex="-1">反向代理负载均衡 <a class="header-anchor" href="#反向代理负载均衡" aria-label="Permalink to &quot;反向代理负载均衡&quot;">​</a></h1><p><img src="'+t+`" alt="RUNOOB 图标"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">传统代理服务器位于浏览器一端，代理浏览器将HTTP请求发送到互</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">联网上。而反向代理服务器则位于网站机房一侧，代理网站web服务器接收http请求。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">反向代理的作用是保护网站安全，所有互联网的请求都必须经</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">过代理服务器，相当于在web服务器和可能的网络攻击之间建立了一个屏障。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">除此之外，代理服务器也可以配置缓存加速web请求。当用户第一</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">次访问静态内容的时候，静态内存就被缓存在反向代理服务器上，这</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">样当其他用户访问该静态内容时，就可以直接从反向代理服务器返回，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">加速web请求响应速度，减轻web服务器负载压力。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">另外，反向代理服务器也可以实现负载均衡的功能</span></span></code></pre></div><p><img src="`+e+'" alt="RUNOOB 图标"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">由于反向代理服务器转发请求在HTTP协议层面，因此也叫应用层负载均衡。优点是部署简单，缺点是可能成为系统的瓶颈。</span></span></code></pre></div>',5),h=[l];function c(o,r,d,E,_,k){return i(),a("div",null,h)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
