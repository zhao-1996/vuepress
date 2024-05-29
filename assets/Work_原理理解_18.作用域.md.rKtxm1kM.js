import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.BvVpiGod.js";const l="/vuepress/assets/zuoyongyu1.DUTvaCHp.webp",p="/vuepress/assets/zuoyongyu2.DAsPY1Au.webp",e="/vuepress/assets/zuoyongyu3.DyF-jqJd.webp",b=JSON.parse('{"title":"作用域","description":"","frontmatter":{},"headers":[],"relativePath":"Work/原理理解/18.作用域.md","filePath":"Work/原理理解/18.作用域.md","lastUpdated":1716973501000}'),t={name:"Work/原理理解/18.作用域.md"},h=n(`<h1 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h1><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作用域:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作用域（Scope）即代码执行过程中的变量、函数或者对象的可访问区域，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作用域决定了变量或者其他资源的可见性；计算机安全中一条基本原则即</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">是用户只应该访问他们需要的资源，而作用域就是在编程中遵循该原则来</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">保证代码的安全性。除此之外，作用域还能够帮助我们提升代码性能、追</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">踪错误并且修复它们。JavaScript 中的作用域主要分为全局作用域（Global Scope）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">与局部作用域（Local Scope）两大类，在 ES</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中定义在函数内的变量即</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">是属于某个局部作用域，而定义在函数外的变量即是属于全局作用域。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">全局作用域：当我们在浏览器控制台或者 Node.js 交互终端中开始编写 JavaScript 时，即进入了所谓的全局作用域。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">定义在全局作用域中的变量能够被任意的其他作用域中访问</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">函数作用域：定义在某个函数内的变量即从属于当前函数作用域，在每次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">函数调用中都会创建出新的上下文；换言之，我们可以在不同的函数中定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">义同名变量，这些变量会被绑定到各自的函数作用域中</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">块级作用域：类似于 if、switch 条件选择或者 for、while 这样的循环体即是所谓的块级作用域</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let创建的变量就是块级作用域变量。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">词法作用域：即程序编译时的上下文，下面的变量上面取不到。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">动态作用域：常见的 this 的用法，vue的this去变量就是动态作用域</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">执行上下文与提升:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作用域（Scope）与上下文（Context）常常被用来描述相同的概念，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不过上下文更多的关注于代码中 this 的使用，而作用域则与变量的可见性相关；而 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JavaScript 规范中的执行上下文（Execution Context）其实描述的是变量的作用域。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">众所周知，JavaScript 是单线程语言，同时刻仅有单任务在执行，而其他任务则会被压</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">入执行上下文队列中；每次函数调用时都会创建出新的上下文，并将其添加到执行上下文队列中。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">执行上下文：每个执行上下文又会分为内存创建（Creation Phase）与代码执行（Code Execution Phase）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">两个步骤，在创建步骤中会进行变量对象的创建（Variable Object）、作用域链的创建以及设置当前上</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">下文中的 this 对象。所谓的 Variable Object ，又称为 Activation Object，包含了当前执行上下文</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">中的所有变量、函数以及具体分支中的定义。当某个函数被执行时，解释器会先扫描所有的函数参数、</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">变量以及其他声明。在 Variable Object 创建之后，解释器会继续创建作用域链（Scope Chain）；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作用域链往往指向其副作用域，往往被用于解析变量。当需要解析某个具体的变量时，JavaScript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">解释器会在作用域链上递归查找，直到找到合适的变量或者任何其他需要的资源。作用域链可以被认为</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">是包含了其自身 Variable Object 引用以及所有的父 Variable Object 引用的对象</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">变量的生命周期与提升</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">变量的生命周期包含着变量声明（Declaration Phase）、变量初始化（Initialization Phase）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以及变量赋值（Assignment Phase）三个步骤；其中声明步骤会在作用域中注册变量，初始化步骤负</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">责为变量分配内存并且创建作用域绑定，此时变量会被初始化为 undefined，最后的分配步骤则会将开</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">发者指定的值分配给该变量。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在计算机编程中，全局变量指的是在所有作用域中都能访问的变量。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">全局变量是一种不好的实践，因为它会导致一些问题，比如一个已经存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在的方法和全局变量的覆盖，当我们不知道变量在哪里被定义的时候，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代码就变得很难理解和维护了</span></span></code></pre></div><h5 id="var-关键字声明的变量的生命周期如下" tabindex="-1">var 关键字声明的变量的生命周期如下 <a class="header-anchor" href="#var-关键字声明的变量的生命周期如下" aria-label="Permalink to &quot;var 关键字声明的变量的生命周期如下&quot;">​</a></h5><p><img src="`+l+'" alt="1"></p><h5 id="let-关键字声明的变量生命周期如下" tabindex="-1">let 关键字声明的变量生命周期如下 <a class="header-anchor" href="#let-关键字声明的变量生命周期如下" aria-label="Permalink to &quot;let 关键字声明的变量生命周期如下&quot;">​</a></h5><p><img src="'+p+`" alt="1"></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">函数的生命周期与提升：基础的函数提升同样会将声明提升至作用域头部，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不过不同于变量提升，函数同样会将其函数体定义提升至头部。所以在语法作用与的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">情况下，在上面执行代码还是可以调用到下面的函数。因为编译时会将函数自动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">放到头部。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">javaScript 中提供了两种函数的创建方式，函数声明（Function Declaration）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">与函数表达式（Function Expression）；函数声明即是以 function 关键字开始，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">跟随者函数名与函数体。而函数表达式则是先声明函数名，然后赋值匿名函数给它.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">匿名函数在编译时将提升至头部，而非匿名函数则会按顺序执行。</span></span></code></pre></div><h5 id="函数的生命周期则比较简单-声明、初始化与赋值三个步骤都被提升到了作用域头部" tabindex="-1">函数的生命周期则比较简单，声明、初始化与赋值三个步骤都被提升到了作用域头部： <a class="header-anchor" href="#函数的生命周期则比较简单-声明、初始化与赋值三个步骤都被提升到了作用域头部" aria-label="Permalink to &quot;函数的生命周期则比较简单，声明、初始化与赋值三个步骤都被提升到了作用域头部：&quot;">​</a></h5><p><img src="`+e+'" alt="1"></p>',11),E=[h];function k(c,r,d,o,g,y){return i(),a("div",null,E)}const v=s(t,[["render",k]]);export{b as __pageData,v as default};
