import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.BvVpiGod.js";const g=JSON.parse('{"title":"css 变量","description":"","frontmatter":{},"headers":[],"relativePath":"css/css属性/6.css变量.md","filePath":"css/css属性/6.css变量.md","lastUpdated":1653037794000}'),l={name:"css/css属性/6.css变量.md"},p=n(`<h1 id="css-变量" tabindex="-1">css 变量 <a class="header-anchor" href="#css-变量" aria-label="Permalink to &quot;css 变量&quot;">​</a></h1><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS 变量:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS 变量并不是某个框架的产物，而是 CSS 作者定义的一个标准规范</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS 变量又称为 CSS 自定义属性，它包含的值可以在整个文档中重复使用。由自</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">定义属性标记设定值（比如： --main-color: black;），由 var() 函数来获</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">取值（比如： color:  var(--main-color);）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">为什么选择两根连词线（--）表示？因为变量 $ 被 Sass 用掉了，@ 被 Less 用掉了。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">为了不产生冲突，官方的 CSS 变量就改用两根连词线了</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">简单例子</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /*  变量的作用域就是它所在的选择器的有效范围，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 所以.parent 读取不到 child 中声明的变量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--body-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /*  定义变量  */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --parent-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*  通过 var 读取变量  */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--parent-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如果希望能够在 </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">HTML</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 文档中都能访问到，则可以定义在类 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src/styles/index</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.scss写入并且在main.ts引入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --textColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">组件</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">--textColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用需要注意一下几点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS 变量的命名是对大小写敏感的，也就是</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--myColor 和 --mycolor 是不一样的</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var() 参数可以使用第二个参数设置默认值，当该变量无效的时候，就会使用这个默认值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">background:var(--bgColor,red);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS 变量提供了 JavaScript 与 CSS 通信的一种途径，在 JS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">中我们可以操作 CSS，跟操作普通的 CSS 属性是一样的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 获取一个 Dom 节点上的 CSS 变量</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.getPropertyValue(&quot;--my-var&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 获取任意 Dom 节点上的 CSS 变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getComputedStyle(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">.getPropertyValue(&quot;--my-var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 修改一个 Dom 节点上的 CSS 变量</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.setProperty(&quot;--my-var&quot;, jsVar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 4);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当 vars 和 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scoped</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 一起使用时，所应用的 CSS 变量将以组件的 Scoped id 作为前缀，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">访问的时候也会自动加上 Scoped id,假如我们这种情况下想访问的是全局的 CSS 变量呢？也就</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">是我们不希望加上 Scoped Id,那么要书写类似如下</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: var(--global:textFontSize);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS变量和sass,less的区别</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sass和less是预编译的,也就是说预处理器在向浏览器输出前已经解析完毕</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">浏览器对 CSS 变量解析是运行时的</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sass和less使用全局变量需要引入或者使用vue-cli属性在vue</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.config.js里面引入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">全局变量文件,而css变量只要编入项目入口,那么所有组件都可以直接引用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//sass和less变量在线上时不可以改变,css变量在线上时可以改变</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">预处理器和 CSS 变量并不冲突</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS 变量变量只能作为属性值，不能作为属性名</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">兼容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CSS 变量目前的支持度并非特别好，IE,QQ,baidu,目前不支持</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">其他浏览器新版本支持</span></span></code></pre></div>`,2),h=[p];function k(t,E,e,r,d,c){return a(),i("div",null,h)}const o=s(l,[["render",k]]);export{g as __pageData,o as default};
