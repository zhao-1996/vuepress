import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.aC9gkKXW.js";const o=JSON.parse('{"title":"flex","description":"","frontmatter":{},"headers":[],"relativePath":"css/css属性/2.flex.md","filePath":"css/css属性/2.flex.md","lastUpdated":1650114083000}'),n={name:"css/css属性/2.flex.md"},l=t(`<h1 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h1><p><code>优点：弹性布局，为盒子模型提供最大的灵活性</code><br><code>缺点：声明flex布局后，float,cleat,vertical-align失效</code><br><code>声明方式：display：flex；</code></p><h4 id="声明排列方向-flex-direction" tabindex="-1">声明排列方向: flex-direction: <a class="header-anchor" href="#声明排列方向-flex-direction" aria-label="Permalink to &quot;声明排列方向: flex-direction:&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">row默认横向 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">column纵向 </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">row-reverse横向反转</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">column-reverse纵向反转</span></span></code></pre></div><h4 id="主轴对齐方式-justify-content" tabindex="-1">主轴对齐方式:justify-content: <a class="header-anchor" href="#主轴对齐方式-justify-content" aria-label="Permalink to &quot;主轴对齐方式:justify-content:&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">space-around</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 每个项目两侧的间隔相等</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">space-between</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:两端对齐,项目间隔相等</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 居中</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 从flex布局的起始点开始</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 从flex布局的终点开始</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">主轴: 横向排列时,水平方向为主轴; 纵向排列时,垂直方向为主轴</span></span></code></pre></div><h4 id="交叉轴对齐方式-align-items" tabindex="-1">交叉轴对齐方式:align-items <a class="header-anchor" href="#交叉轴对齐方式-align-items" aria-label="Permalink to &quot;交叉轴对齐方式:align-items&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 居中</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 从flex布局的起始点开始</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 从flex布局的终点开始</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stretch 伸展撑满容器高度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseline 第一行文字的基线对齐</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">交叉轴: 横向排列时,垂直方向为交叉轴; 纵向排列时,水平方向为交叉轴</span></span></code></pre></div><h4 id="换行方式-flex-wrap" tabindex="-1">换行方式: flex-wrap <a class="header-anchor" href="#换行方式-flex-wrap" aria-label="Permalink to &quot;换行方式: flex-wrap&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wrap 换行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nowrap 不换行(默认)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wrap-reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 换行反转(往上换行)</span></span></code></pre></div><h4 id="堆叠伸缩的对齐方式-align-content" tabindex="-1">堆叠伸缩的对齐方式: align-content <a class="header-anchor" href="#堆叠伸缩的对齐方式-align-content" aria-label="Permalink to &quot;堆叠伸缩的对齐方式: align-content&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 居中</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flex-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 从flex布局的起始点开始</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 从flex布局的终点开始</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">space-around</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每个项目两侧的间隔相等</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">space-between</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 两端对齐,项目间隔相等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stretch 轴线占满整个交叉轴(默认)</span></span></code></pre></div><h4 id="flex布局的item属性" tabindex="-1">flex布局的item属性 <a class="header-anchor" href="#flex布局的item属性" aria-label="Permalink to &quot;flex布局的item属性&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">.order顺序(默认为0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,数值越大越靠后,值可为负数)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.flex-grow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	放大比例(默认为0,空间不足时,不生效)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			ul的剩余空间为: 1140, 平均分成3份</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			li1: 92</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">760=852		成长比例为2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			li2: 92</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">380=472		成长比例为1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		3</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.flex-shrink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	缩小比例(默认为1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					当值为0,不缩小</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						每个li的宽度为92,92</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">5=460px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						ul的宽度只有400px,不足空间为60px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						缩小比例为5, 60/5=12px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						li1,li2,li4的缩小比例都为1: 92-12=80px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						li3缩小比例为0,宽度为92</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						li5缩小比例为2, 92 - 12</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2 = 68px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.flex-basis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:	伸缩基准值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					li总宽度: 202</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">5 = 1010</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					ul宽度剩余: 1600-1010=590</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					每份: 590/3 = 196</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.67</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					li1: 202 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 196.67</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2 = 595</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.34</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					li2: 202 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 196</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.67</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 398</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.67</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(注意: 如果同时又flex-basis和width, width不生效,即flex-basis优先级更高)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		5.flex(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">flex-grow</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  flex-shrink</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  flex-basis的合写方式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					flex: 0 1 auto(后两个值可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		6</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.align-self单个项目对齐方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					单个项目的对齐方式(会覆盖align-item)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						center: 居中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						flex-start	从flex布局的起始点开始</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						flex-end	从flex布局的终点开始</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						stretch		伸展撑满容器高度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">						baseline	第一行文字的基线对齐</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">					]</span></span></code></pre></div>`,14),e=[l];function p(h,k,E,r,d,c){return a(),i("div",null,e)}const y=s(n,[["render",p]]);export{o as __pageData,y as default};
