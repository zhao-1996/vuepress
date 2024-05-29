import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.BvVpiGod.js";const g=JSON.parse('{"title":"前端实现","description":"","frontmatter":{},"headers":[],"relativePath":"Work/单点登录/3.前端实现.md","filePath":"Work/单点登录/3.前端实现.md","lastUpdated":1716973501000}'),n={name:"Work/单点登录/3.前端实现.md"},e=t(`<h1 id="前端实现" tabindex="-1">前端实现 <a class="header-anchor" href="#前端实现" aria-label="Permalink to &quot;前端实现&quot;">​</a></h1><h5 id="应用a" tabindex="-1">应用A <a class="header-anchor" href="#应用a" aria-label="Permalink to &quot;应用A&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*1.判断是否存在ticket，存在，则判断是否过期，过期，则清掉缓存重定向到登录页并携带请求 url，进行单点登录，登录成功重定向回来时携带ticket回来</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  使用接口校验ticket是否合法，合法，则将ticket存入localStorage*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 从子应用过去</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.baidu.com?redirect=https://gitee.com?id=10010&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_seft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 从登录页过来</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://gitee.com?id=10010&amp;ticket=gahsgha&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_seft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*12.判断是否存在ticket,不存在，则清掉缓存重定向到登录页并携带请求 url，进行单点登录，登录成功重定向回来时携带ticket回来</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  使用接口校验ticket是否合法，合法，则将ticket存入localStorage*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 从子应用过去</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.baidu.com?redirect=https://gitee.com?id=10010&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_seft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 从登录页过来</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://gitee.com?id=10010&amp;ticket=gahsgha&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_seft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*13.判断是否存在ticket，存在，则判断是否过期，没过期，使用接口校验ticket是否合法，合法，则将ticket存入localStorage，*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">注：1.以上三种情况若校验ticket不合法，则清掉缓存重定向到登录页并携带请求 url，进行单点登录</span></span></code></pre></div>`,3),h=[e];function l(p,k,r,d,E,c){return a(),i("div",null,h)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
