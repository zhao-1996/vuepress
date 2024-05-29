import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.BvVpiGod.js";const o=JSON.parse('{"title":"代码演示","description":"","frontmatter":{},"headers":[],"relativePath":"Work/v8引擎/6.代码演示.md","filePath":"Work/v8引擎/6.代码演示.md","lastUpdated":1716973501000}'),t={name:"Work/v8引擎/6.代码演示.md"},l=n(`<h1 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h1><p>相信上面的东西已经让你们明白，V8的垃圾回收机制是如何运行的。但是你还需要知道我们的代码中是如何触发、影响垃圾回收的，这就不得不掏出老生常谈的作用域和闭包。 作用域 在javascript中作用域有全局作用域和局部作用域，在这里，我们着重关注作用域对垃圾回收的影响。<br> 假设一个函数调用产生的作用域：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> local </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这是一个函数表达式，foo()函数在每次调用时会创建一个作用域，同时也会在该作用域创建一个局部变量local。函数执行结束，该作用域也会随之销毁，同时该作用域中声明的局部变量也会随作用域销毁而销毁。在这个实例中，由于局部变量引用的对象存活周期较短，将会分配在新生代空间的From中。作用域销毁后，其中的变量也随之被释放，该对象所占用的空间在下次垃圾回收时将会被清理。<br> 作用域链</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> local </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(local)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个实例中，bar()中执行console，在当前函数作用于查找不到local变量，将会继续向上查找，查找上级最近的作用域，如果找到变量local，就会停止查找。如果找不到会一直查找到全局作用域，如果该变量在所有作用域都不存在，将会抛出未定义错误。<br> 变量的主动释放</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { sex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span></span></code></pre></div><p>如果变量是全局变量,需要注意的是全局作用域中的变量不会执行垃圾回收过程，此类对象将会常驻内存（在老生代空间）。如果需要释放该类对象空间，只能通过delete或重新赋值变量为undefind或者null来释放对象的引用。<br> 闭包<br> 什么叫闭包，历史争议问题啊。我们暂可以将能使外部作用域访问内部作用域中的变量的方法叫做闭包。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> local </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;局部变量&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> local</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baz </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">baz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>闭包对垃圾回收带来的影响也随之出现，一旦有变量引用中间函数，这个中间函数将无法被释放，同时也会使该作用域无法释放，自然作用域中的变量也不会被释放并回收，除非不在被引用，该函数才会被逐渐释放。 不得不说全局变量和闭包是项目中不可缺少的角色，但是需对该类变量谨慎使用，防止在你的项目中这种无法轻易被释放的变量所占内存越来越多，结果就是你不想看到的内存泄露</p>`,10),h=[l];function p(k,e,r,d,E,c){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{o as __pageData,y as default};
