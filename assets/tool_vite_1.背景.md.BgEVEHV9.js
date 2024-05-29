import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.aC9gkKXW.js";const c=JSON.parse('{"title":"产生背景","description":"","frontmatter":{},"headers":[],"relativePath":"tool/vite/1.背景.md","filePath":"tool/vite/1.背景.md","lastUpdated":1716973501000}'),l={name:"tool/vite/1.背景.md"},p=n(`<h1 id="产生背景" tabindex="-1">产生背景 <a class="header-anchor" href="#产生背景" aria-label="Permalink to &quot;产生背景&quot;">​</a></h1><p><code>ES模块:import和export</code></p><h3 id="问题所在" tabindex="-1">问题所在 <a class="header-anchor" href="#问题所在" aria-label="Permalink to &quot;问题所在&quot;">​</a></h3><p><code>在浏览器中使用ES模块之前，开发人员还没有用于以模块化方式编 写JavaScript的本机机制。这就是为什么我们都熟悉“捆绑”的概念 的原因：使用将我们的源模块爬网，处理和连接成可以在浏览器中 运行的文件的工具。 随着时间的流逝，我们已经看到了诸如webpack，Rollup和Parcel之 类的工具，这些工具极大地改善了前端开发人员的开发体验。 但是，随着我们开始构建越来越雄心勃勃的应用程序，我们正在处理 的JavaScript数量也呈指数增长。大型项目包含数千个模块的情况并 不少见。我们开始遇到基于JavaScript的工具的性能瓶颈：启动开发服 务器通常会花费不合理的长时间等待（有时可能长达数分钟！），即使使 用HMR，文件编辑也可能需要花费几秒钟的时间才能反映出来。在浏览器中。 缓慢的反馈循环会极大地影响开发人员的生产力和幸福感。 Vite旨在通过利用生态系统中的新进步来解决这些问题：浏览器中本机ES模块的可用性以及以本机语言编写的JavaScript工具的兴起。</code></p><h3 id="服务器启动缓慢" tabindex="-1">服务器启动缓慢 <a class="header-anchor" href="#服务器启动缓慢" aria-label="Permalink to &quot;服务器启动缓慢&quot;">​</a></h3><p><code>冷启动开发服务器时，基于捆绑程序的构建设置必须急于爬网并构建整 个应用程序，然后才能提供服务。 通过将应用程序中的模块首先分为两类，Vite缩短了开发服务器 的启动时间：依赖项和源代码。 依赖关系大多是普通的JavaScript，在开发过程中不会经常更改。 一些较大的依赖项（例如具有数百个模块的组件库）的处理成本也很高。 依赖项也可能以各种模块格式（例如ESM或CommonJS）提供。 使用esbuild查看捆绑前的依赖关系。 Esbuild是用Go语言编写的， 并且与基于JavaScript的捆绑器相比，捆绑前的依赖关系要快10到100倍。 源代码通常包含需要转换的非普通JavaScript（例如JSX，CSS或Vue / Svelte组件） 并且会经常进行编辑。 另外，并非所有源代码都需要同时 加载（例如，使用基于路由的代码拆分）。 Vite通过本机ESM提供源代码。 这实质上是让浏览器接管捆绑器的部分工 作：Vite只需要根据浏览器的要求按需转换和提供源代码即可。 有条件动态导入后的代码只有在当前屏幕上实际使用时才被处理。</code></p><h3 id="更新缓慢" tabindex="-1">更新缓慢 <a class="header-anchor" href="#更新缓慢" aria-label="Permalink to &quot;更新缓慢&quot;">​</a></h3><p><code>在基于捆绑程序的构建设置中编辑文件时，由于显而易见的原因， 重建整个捆绑软件效率很低：更新速度会随着应用程序的大小线性降低。 某些捆绑程序开发服务器在内存中运行捆绑程序，因此仅在文件更改时 才需要使模块图的一部分无效，但仍需要重新构建整个捆绑程序并重新 加载网页。重建捆绑包可能会很昂贵，并且重新加载页面会破坏应用程 序的当前状态。这就是为什么某些捆绑软件支持热模块更换（HMR）的 原因：允许模块“热更换”自身而不影响页面的其余部分。这极大地改 善了DX-但是，实际上，我们发现，随着应用程序大小的增长，甚 至HMR更新速度也会大大降低。 在Vite中，HMR是在本机ESM上执行的。编辑文件时，Vite只需要 使已编辑模块与其最接近的HMR边界之间的链精确失效（大多数 情况下，仅是模块本身）即可使HMR持续快速更新，而不管 您的应用程序大小如何。 Vite还利用HTTP标头来加快整个页面的重新加载速度（再次，让浏 览器为我们做更多的工作）：通过304 Not Modified使源代码模块 请求成为有条件的，并且通过Cache-Control强烈地缓存依赖模块的 请求：max-年龄= 31536000，不可变，因此一旦缓存， 它们就不会再次击中服务器。 一旦您体验了Vite的速度，我们高度怀疑您是否愿意忍受捆绑开发。</code></p><h3 id="为什么捆绑生产" tabindex="-1">为什么捆绑生产 <a class="header-anchor" href="#为什么捆绑生产" aria-label="Permalink to &quot;为什么捆绑生产&quot;">​</a></h3><p><code>尽管现在已经广泛支持本机ESM，但是由于嵌套导入导致的额外网络往返， 在生产中运输未捆绑的ESM仍然效率低下（即使使用HTTP / 2）。 为了在 生产中获得最佳的加载性能，最好还是将代码与树状摇动，延迟加载和通 用块拆分捆绑在一起（以获得更好的缓存）。 确保开发服务器与生产构建之间的最佳输出和行为一致性并不容易。 这就是 为什么Vite附带了一个预先配置的build命令，该命令可以立即进行许多性能优化。</code></p><h3 id="为什么不与-esbuild-捆绑在一起" tabindex="-1">为什么不与 esbuild 捆绑在一起？ <a class="header-anchor" href="#为什么不与-esbuild-捆绑在一起" aria-label="Permalink to &quot;为什么不与 esbuild 捆绑在一起？&quot;">​</a></h3><p><code>尽管esbuild迅速发展，并且已经成为库的强大捆绑器，但是捆绑应用程序所 需的一些重要功能仍在开发中-尤其是代码拆分和CSS处理。 就目前而言，汇总 在这些方面更加成熟和灵活。 就是说，当将来在稳定这些功能时，我们不排除 使用esbuild进行生产构建的可能性。</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite1是配合vue3一起使用的前端构建工具</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite2适配了各种前端框架Vue,React,Preact</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">随着互联网的发展，前端项目越来越复杂,随着项目的复杂度升级</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代码规范和管理就必须要同步提升,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">于是，编程社区中提出了多种模块化规范，服务端选择了 CommonJS 规范，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">客户端选择 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 规范较多,但是，两种模块化规范也都存在一定的问题，都是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编程，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">有两个不同的模块化规范，在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 语言层面还是不够的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ES6中</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modules 规范,在目前的编程实践中，前端编程得益于构建工具的发展，编码过程中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modules 规范进行编码是非常广泛的，但是后端依然使用 CommonJS 规范较多</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不过 NodeJS 方面已经做出改变，逐渐趋向于 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modules 规范</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">但是我们我们所使用的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Modules 模块系统本身就存在环境兼容问题,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">尽管现如今主流浏览器的最新版本都支持这一特性，但是目前还无法保证</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.用户的浏览器使用情况。所以我们还需要解决兼容问题。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.其次，模块化的方式划分出来的模块文件过多，而前端应用又运行在浏览器中，每一个文件都需要单</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">独从服务器请求回来。零散的模块文件必然会导致浏览器的频繁发送网络请求，影响应用的工作效率。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">随着应用日益复杂.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.在前端应用开发过程中不仅仅只有 JavaScript 代码需要模块化，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTML</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 和 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这些资源文件也会面临需要被模块化的问题。而且从宏观角度来看，这些文件也都应该看作前端应用中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">的一个模块，只不过这些模块的种类和用途跟 JavaScript 不同。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">为了解决上面提出的三个问题,出现了一系列的前端构建工具,比如webpack,gup</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">本质上，webpack 是一个现代 JavaScript </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">应用程序的静态模块打包器</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bundler)。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue 脚手架工具 vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cli 使用 webpack 进行打包，开发时可以启动本地开发服务器，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">实时预览，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">问题1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:因为需要对整个项目文件进行打包，开发服务器启动缓慢,热更新慢</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">问题2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:Webpack 的热更新会以当前修改的文件为入口重将所有依赖重新加载一次</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite 则很好地解决了上面的两个问题。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">对于打包</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: vite 只启动一台静态页面的服务器，对文件代码不打包，服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">会根据客户端的请求，加载不同的模块处理，实现真正的按需加载；</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">对于热更新</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: vite 采用立即编译当前修改的文件，同时 vite </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">还会使用缓存机制</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">http缓存</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vite内置缓存 )，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">加载更新后的文件内容.vite 具有了 快速冷启动、按需编译、模块热更新 等优良特质</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">综上所述，vite 构建项目与 vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cli 构建的项目主要在于开发模式下，区别还是比较大的：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：Vite 在开发模式下不需要打包可以直接运行，使用的是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ES6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的模块化加载规则；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CLI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 开发模式下必须对项目打包才可以运行；</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：Vite 基于缓存的热更新，Vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CLI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 基于 Webpack 的热更新</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Rollup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:汇总,是一个 JavaScript 模块打包器,可以将小块代码编译成大块复杂的代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">即,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">将所有的模块打包成一个bundler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(束,即webpack的功能)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">关于Vite2的改进</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite2是Vite的第一个稳定版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">多框架支持</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite 2.0与框架无关,所有特定于框架的支持都委托给了插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">现在有 Vue、 React、 Preact、 Lit Element 和正在进行的 Svelte 的官方模板</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">全新插件机制和 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">API</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 受 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WMR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的启发采用了基于 Rollup 插件 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">API</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的设计。很多 Rollup 插</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">件可以跟 Vite 直接兼容。插件可以在使用 Rollup 插件钩子之外使用一些额外的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite 特有的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">API</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 来处理一些打包中不存在的需求，比如区分开发 vs 打包，或是自定义的热更新处理。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite 的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> API</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 也得到了大幅改进 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 已经有不少用户在开发基于 Vite 的上层框架，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Nuxt 团队也已经在 Nuxt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中验证了初步整合的可行性。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">基于 esbuild </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">的依赖预打包</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">由于 Vite 是一个基于原生 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ESM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的开发服务器，在启动时我们需要通过依赖预打包来达成两个目的：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 减少模块 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 请求数量；</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支持 CommonJS 依赖。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">预打包只有在依赖变动时才需要执行，但在有大量依赖的项目中，每次执行还是可能会需要很长时间。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite 之前是使用 Rollup 来执行这个过程，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中我们切换到了 esbuild，使这个过程加快了几十倍。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">冷启动一个之前需要将近 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 秒预打包的项目现在只需要不到两秒！从 webpack 或其它打包工具迁</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">移到 Vite 应该也会有类似的速度改善。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">更好的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支持</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite 将 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 看作模块系统中的一等公民，并且内置了以下支持</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">强化路径解析：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中的 @import 和 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() 路径都通过 Vite 的路径解析器来</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">解析，从而支持 alias 和 npm 依赖。自动 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 改写：所有 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() 路径都会被自</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">动改写从而确保在开发和构建中都指向正确的文件路径。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 代码分割：构建时每一个被分割的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 文件都会自动生成一个对应的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 文件，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">并且两个文件会被自动并行按需加载。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">服务端渲染</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SSR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 支持</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 提供实验性的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SSR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支持。Vite 提供一个灵活的 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">API</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 来在 Node.js 中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">高效率地直接加载 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ESM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 源码（并且同样有精准的更新而不需要打包）。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">提供 CommonJS 版本的依赖会在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SSR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 时自动被跳过转换直接加载。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生产环境下，服务器可以和 Vite 完全解耦。基于 Vite </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SSR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的架构也可以很方便的做静态预渲染（</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SSG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">旧浏览器支持</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vite 默认只支持原生支持 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ESM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的现代浏览器，但可以通过官方的 @vitejs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">legacy 来支持旧</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">浏览器。legacy 插件会自动额外生成一个针对旧浏览器的包，并且在 html 中插入根据浏览</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">器 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ESM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支持来选择性加载对应包的代码（类似 vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cli 的 modern mode）。</span></span></code></pre></div>`,13),h=[p];function k(t,E,e,d,r,g){return a(),i("div",null,h)}const F=s(l,[["render",k]]);export{c as __pageData,F as default};
