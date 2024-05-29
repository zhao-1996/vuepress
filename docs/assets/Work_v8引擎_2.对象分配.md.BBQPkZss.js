import{_ as a,c as t,o as e,a3 as r}from"./chunks/framework.aC9gkKXW.js";const _="/assets/v821.vE8QLBRN.jpeg",v=JSON.parse('{"title":"对象分配","description":"","frontmatter":{},"headers":[],"relativePath":"Work/v8引擎/2.对象分配.md","filePath":"Work/v8引擎/2.对象分配.md","lastUpdated":1716962640000}'),s={name:"Work/v8引擎/2.对象分配.md"},o=r('<h1 id="对象分配" tabindex="-1">对象分配 <a class="header-anchor" href="#对象分配" aria-label="Permalink to &quot;对象分配&quot;">​</a></h1><p>V8的对象分配<br> 在javascript中我们的基本类型存储在栈中，所有对象都分配给了堆处理。<br> 我们每赋值一个对象，该对象的内存就会分配在堆中。如果已申请堆所剩内存不足以分配新的对象，将会继续申请新内存，直到堆的大小超过V8的内存大小限制为止。<br><img src="'+_+'" alt="1"><br> 至于V8的内存限制，起源于V8本身是chrome为浏览器设计而生，而浏览器中对于网页来说，V8控制的内存绰绰有余。还源于V8设计者对于V8的垃圾回收机制的限制，官方以1.5GB<br>的垃圾回收堆内存为例，V8执行一个小的垃圾回收要使用50毫秒以上，做一次常规非增量式垃圾回收要在1秒以上。<br> javascript的垃圾回收会对javascript执行线程形成阻塞，作为一个开发人员你应该能够清楚时长1秒的进程阻塞，对你的项目性能的影响，所以，为了解决JavaScript的垃圾<br>回收机制带来的线程阻塞 ,故此V8的设计者采用了对堆内存进行限制的策略。</p>',2),c=[o];function i(n,p,d,l,m,h){return e(),t("div",null,c)}const b=a(s,[["render",i]]);export{v as __pageData,b as default};
