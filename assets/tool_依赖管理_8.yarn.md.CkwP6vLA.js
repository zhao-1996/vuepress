import{_ as a,c as r,o as e,a3 as n}from"./chunks/framework.BvVpiGod.js";const t="/vuepress/assets/yarn1.D3ne1hPY.webp",o="/vuepress/assets/yarn2.D6d1AuUv.webp",k=JSON.parse('{"title":"yarn","description":"","frontmatter":{},"headers":[],"relativePath":"tool/依赖管理/8.yarn.md","filePath":"tool/依赖管理/8.yarn.md","lastUpdated":1716962640000}'),s={name:"tool/依赖管理/8.yarn.md"},c=n('<h1 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h1><p>yarn 是在 2016 年发布的，那时 npm 还处于 V3 时期，那时候还没有 package-lock.json 文件，就像上面我们提到的：不稳定性、安装速度慢等缺点经常会受到广大开发者吐槽。<br> 此时，yarn 诞生：<br><img src="'+t+'" alt="RUNOOB 图标"><br> yarn 也是采用的是 npm v3 的扁平结构来管理依赖，安装依赖后默认会生成一个 yarn.lock 文件<br> yarn.lock 使用的是一种自定义格式<br> yarn.lock 中子依赖的版本号不是固定的，意味着单独又一个 yarn.lock 确定不了 node_modules 目录结构，还需要和 package.json 文件进行配合。而 package-lock.<br>json 只需要一个文件即可确定。<br> yarn 的缓策略看起来和 npm v5 之前的很像，每个缓存的模块被存放在独立的文件夹，文件夹名称包含了模块名称、版本号等信息。使用命令 yarn cache dir 可以查看缓存数据的目录：<br><img src="'+o+'" alt="RUNOOB 图标"><br> yarn 默认使用 prefer-online 模式，即优先使用网络数据，如果网络数据请求失败，再去请求缓存数据。</p>',2),_=[c];function l(p,i,d,y,m,b){return e(),r("div",null,_)}const u=a(s,[["render",l]]);export{k as __pageData,u as default};
