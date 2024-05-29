import{_ as s,c as a,o as n,a3 as i}from"./chunks/framework.aC9gkKXW.js";const E=JSON.parse('{"title":"js 错误类型","description":"","frontmatter":{},"headers":[],"relativePath":"Work/原理理解/9.js错误类型.md","filePath":"Work/原理理解/9.js错误类型.md","lastUpdated":1716973501000}'),l={name:"Work/原理理解/9.js错误类型.md"},p=i(`<h1 id="js-错误类型" tabindex="-1">js 错误类型 <a class="header-anchor" href="#js-错误类型" aria-label="Permalink to &quot;js 错误类型&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//SyntaxError对象是解析代码时发生的语法错误。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 变量名错误</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 1a;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Uncaught SyntaxError: Invalid or unexpected token</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缺少括号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.log </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Uncaught SyntaxError: Unexpected string</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//ReferenceError对象是引用一个不存在的变量时发生的错误。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用一个不存在的变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unknownVariable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Uncaught ReferenceError: unknownVariable is not defined</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//RangeError对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 数组长度不得为负数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Uncaught RangeError: Invalid array length</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//TypeError对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Uncaught TypeError: 123 is not a constructor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unknownMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Uncaught TypeError: obj.unknownMethod is not a function</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">URIError对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decodeURI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// URIError: URI malformed</span></span></code></pre></div>`,2),e=[p];function t(h,k,r,c,d,o){return n(),a("div",null,e)}const y=s(l,[["render",t]]);export{E as __pageData,y as default};
