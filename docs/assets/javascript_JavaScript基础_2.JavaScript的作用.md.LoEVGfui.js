import{_ as a,c as t,o as e,a3 as r}from"./chunks/framework.aC9gkKXW.js";const v=JSON.parse('{"title":"JavaScript的作用","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/JavaScript基础/2.JavaScript的作用.md","filePath":"javascript/JavaScript基础/2.JavaScript的作用.md","lastUpdated":1635257528000}'),o={name:"javascript/JavaScript基础/2.JavaScript的作用.md"},i=r('<h1 id="javascript的作用" tabindex="-1">JavaScript的作用 <a class="header-anchor" href="#javascript的作用" aria-label="Permalink to &quot;JavaScript的作用&quot;">​</a></h1><h4 id="_1-什么是javascript" tabindex="-1">1. 什么是JavaScript <a class="header-anchor" href="#_1-什么是javascript" aria-label="Permalink to &quot;1. 什么是JavaScript&quot;">​</a></h4><blockquote><p>JavaScript 是一种轻量级的脚本语言。<br> 所谓“脚本语言”（script language），指的是它不具备开发操作系统的能力， 而是只用来编写控制其他大型应用程序（比如浏览器）的“脚本”。<br> JavaScript 也是一种嵌入式（embedded）语言。它本身提供的核心语法不算很多， 只能用来做一些数学和逻辑运算。<br> JavaScript 本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供， 所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。<br> 目前，已经嵌入 JavaScript 的宿主环境有多种，最常见的环境就是浏览器，另外还有服务器环境，也就是 Node 项目。<br> JavaScript 的核心语法部分相当精简，只包括两个部分： 基本的语法构造（比如操作符、控制结构、语句）和标准库（就是一系列具有各种功能的对象比如Array、Date、Math等） 除此之外，各种宿主环境提供额外的 API（即只能在该环境使用的接口），以便 JavaScript 调用。以浏览器为例，它提供的额外 API 可以分成三大类。<br> 浏览器控制类：操作浏览器<br> DOM 类：操作网页的各种元素<br> Web 类：实现互联网的各种功能<br> 如果宿主环境是服务器，则会提供各种操作系统的 API，比如文件操作 API、网络通信 API等等。这些你都可以在 Node 环境中找到。</p></blockquote><h4 id="_2-javascript的使用领域" tabindex="-1">2. JavaScript的使用领域 <a class="header-anchor" href="#_2-javascript的使用领域" aria-label="Permalink to &quot;2. JavaScript的使用领域&quot;">​</a></h4><h6 id="_1-浏览器的平台化" tabindex="-1">（1）浏览器的平台化 <a class="header-anchor" href="#_1-浏览器的平台化" aria-label="Permalink to &quot;（1）浏览器的平台化&quot;">​</a></h6><blockquote><p>随着 HTML5 的出现，浏览器本身的功能越来越强，不再仅仅能浏览网页，而是越来越像一个平台，JavaScript 因此得以调用许多系统功能，比如操作本地文件、操作图片、调用摄像头和麦克风等等。这使得 JavaScript 可以完成许多以前无法想象的事情。</p></blockquote><h6 id="_2-node" tabindex="-1">（2）Node <a class="header-anchor" href="#_2-node" aria-label="Permalink to &quot;（2）Node&quot;">​</a></h6><blockquote><p>Node 项目使得 JavaScript 可以用于开发服务器端的大型项目，网站的前后端都用 JavaScript 开发已经成为了现实。有些嵌入式平台（Raspberry Pi）能够安装 Node，于是 JavaScript 就能为这些平台开发应用程序。</p></blockquote><h6 id="_3-数据库操作" tabindex="-1">（3）数据库操作 <a class="header-anchor" href="#_3-数据库操作" aria-label="Permalink to &quot;（3）数据库操作&quot;">​</a></h6><blockquote><p>JavaScript 甚至也可以用来操作数据库。NoSQL 数据库这个概念，本身就是在 JSON（JavaScript Object Notation）格式的基础上诞生的，大部分 NoSQL 数据库允许 JavaScript 直接操作。基于 SQL 语言的开源数据库 PostgreSQL 支持 JavaScript 作为操作语言，可以部分取代 SQL 查询语言。</p></blockquote><h6 id="_4-移动平台开发" tabindex="-1">（4）移动平台开发 <a class="header-anchor" href="#_4-移动平台开发" aria-label="Permalink to &quot;（4）移动平台开发&quot;">​</a></h6><blockquote><p>JavaScript 也正在成为手机应用的开发语言。一般来说，安卓平台使用 Java 语言开发，iOS 平台使用 Objective-C 或 Swift 语言开发。许多人正在努力，让 JavaScript 成为各个平台的通用开发语言。 PhoneGap 项目就是将 JavaScript 和 HTML5 打包在一个容器之中，使得它能同时在 iOS 和安卓上运行。Facebook 公司的 React Native 项目则是将 JavaScript 写的组件，编译成原生组件，从而使它们具备优秀的性能。 Mozilla 基金会的手机操作系统 Firefox OS，更是直接将 JavaScript 作为操作系统的平台语言，但是很可惜这个项目没有成功。</p></blockquote><h6 id="_5-内嵌脚本语言" tabindex="-1">（5）内嵌脚本语言 <a class="header-anchor" href="#_5-内嵌脚本语言" aria-label="Permalink to &quot;（5）内嵌脚本语言&quot;">​</a></h6><blockquote><p>越来越多的应用程序，将 JavaScript 作为内嵌的脚本语言，比如 Adobe 公司的著名 PDF 阅读器 Acrobat、Linux 桌面环境 GNOME 3。</p></blockquote><h6 id="_6-跨平台的桌面应用程序" tabindex="-1">（6）跨平台的桌面应用程序 <a class="header-anchor" href="#_6-跨平台的桌面应用程序" aria-label="Permalink to &quot;（6）跨平台的桌面应用程序&quot;">​</a></h6><blockquote><p>Chromium OS、Windows 8 等操作系统直接支持 JavaScript 编写应用程序。Mozilla 的 Open Web Apps 项目、Google 的 Chrome App 项目、GitHub 的 Electron 项目、以及 TideSDK 项目，都可以用来编写运行于 Windows、Mac OS 和 Android 等多个桌面平台的程序，不依赖浏览器。</p></blockquote>',16),c=[i];function p(l,d,h,n,s,S){return e(),t("div",null,c)}const _=a(o,[["render",p]]);export{v as __pageData,_ as default};
