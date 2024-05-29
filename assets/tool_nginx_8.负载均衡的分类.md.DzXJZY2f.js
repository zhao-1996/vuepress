import{_ as s,c as a,o as n,a3 as i}from"./chunks/framework.BvVpiGod.js";const _=JSON.parse('{"title":"负载均衡的分类","description":"","frontmatter":{},"headers":[],"relativePath":"tool/nginx/8.负载均衡的分类.md","filePath":"tool/nginx/8.负载均衡的分类.md","lastUpdated":1716973501000}'),t={name:"tool/nginx/8.负载均衡的分类.md"},p=i(`<h1 id="负载均衡的分类" tabindex="-1">负载均衡的分类 <a class="header-anchor" href="#负载均衡的分类" aria-label="Permalink to &quot;负载均衡的分类&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">最常见的四层和七层负载均衡</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">实现四层负载均衡的软件有：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">F5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：硬件负载均衡器，功能很好，但是成本很高。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lvs：重量级的四层负载软件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx：轻量级的四层负载软件，带缓存功能，正则表达式较灵活</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">haproxy：模拟四层转发，较灵活</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">实现七层负载均衡的软件有：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">haproxy：天生负载均衡技能，全面支持七层代理，会话保持，标记，路径转移；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx：只在http协议和mail协议上功能比较好，性能与haproxy差不多；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apache：功能较差</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Mysql proxy：功能尚可。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">总的来说，一般是lvs做4层负载；nginx做7层负载；haproxy比较灵活，4层和7层负载均衡都能做。</span></span></code></pre></div>`,2),l=[p];function e(h,E,r,c,k,o){return n(),a("div",null,l)}const g=s(t,[["render",e]]);export{_ as __pageData,g as default};
