import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.BvVpiGod.js";const e="/vuepress/assets/xiaoxiduilie.C7X5G5yi.webp",g=JSON.parse('{"title":"消息队列与事件循环","description":"","frontmatter":{},"headers":[],"relativePath":"Work/原理理解/20.消息队列与事件循环.md","filePath":"Work/原理理解/20.消息队列与事件循环.md","lastUpdated":1716973501000}'),t={name:"Work/原理理解/20.消息队列与事件循环.md"},p=n(`<h1 id="消息队列与事件循环" tabindex="-1">消息队列与事件循环 <a class="header-anchor" href="#消息队列与事件循环" aria-label="Permalink to &quot;消息队列与事件循环&quot;">​</a></h1><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">js事件循环和消息队列的规则一样,都是先进先出.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不同的时js事件循环有宏任务和微任务之分，不过</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">将一整个脚本作为一个宏任务，那么脚本第一次执</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">行下来，遇到同步代码会执行，遇到异步代码会按</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">照队列的原则分配到新的宏任务，Promise，process.nextTick</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">则会分配到微任务，同步代码执行之后会先执行微任务。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">此时微任务作为一个新的宏任务开始循环，先执行同步代码，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">然后在执行微任务，最后执行微任务里面的宏任务(即异步代码)。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">回到第一个宏任务,执行完所有的微任务后，开始一个新的宏任务，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">即第二个宏任务，第二个宏任务会执行异步代码，此时异步任务作为一个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">新的宏任务，先执行同步代码，然后执行微任务，在执行异步代码。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不管是执行同步代码，微任务代码，还是异步任务代码。都遵行先进先出的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">执行顺序(即前面的先进执行队列的先执行然后先出来)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这就是js的事件循环机制</span></span></code></pre></div><p><img src="`+e+'" alt="1"></p>',3),l=[p];function h(E,k,r,c,o,d){return i(),a("div",null,l)}const y=s(t,[["render",h]]);export{g as __pageData,y as default};
