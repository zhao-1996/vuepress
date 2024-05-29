import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.aC9gkKXW.js";const y=JSON.parse('{"title":"Blob","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/browser/15.Blob.md","filePath":"javascript/browser/15.Blob.md","lastUpdated":1716973501000}'),h={name:"javascript/browser/15.Blob.md"},l=t(`<h1 id="blob" tabindex="-1">Blob <a class="header-anchor" href="#blob" aria-label="Permalink to &quot;Blob&quot;">​</a></h1><p><code>Blob 对象表示一个二进制文件的数据内容，比如一个图片文件的内容就可以通过 Blob 对象读写。 它通常用来读写文件，它的名字是 Binary Large Object （二进制大型对象）的缩写。它 与 ArrayBuffer 的区别在于，它用于操作二进制文件，而 ArrayBuffer 用于操作内存。 浏览器原生提供Blob()构造函数，用来生成实例对象。 Blob构造函数接受两个参数。第一个参数是数组，成员是字符串或二进制对象， 表示新生成的Blob实例对象的内容；第二个参数是可选的，是一个配置对象， 目前只有一个属性type，它的值是一个字符串，表示数据的 MIME 类型，默认是空字符串。</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> htmlFragment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;a id=&quot;a&quot;&gt;&lt;b id=&quot;b&quot;&gt;hey!&lt;/b&gt;&lt;/a&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myBlob</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(htmlFragment, {type : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text/html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h3><p><code>Blob具有两个实例属性size和type，分别返回数据的大小和类型。</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> htmlFragment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;a id=&quot;a&quot;&gt;&lt;b id=&quot;b&quot;&gt;hey!&lt;/b&gt;&lt;/a&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myBlob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(htmlFragment, {type : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text/html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myBlob.size </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 32</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myBlob.type </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;text/html&quot;</span></span></code></pre></div><h3 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h3><p><code>Blob具有一个实例方法slice，用来拷贝原来的数据，返回的也是一个Blob实例。</code><br><code>slice方法有三个参数，都是可选的。它们依次是:</code></p><ul><li><code>起始的字节位置（默认为0）、</code></li><li><code>结束的字节位置（默认为size属性的值，该位置本身将不包含在拷贝的数据之中）、</code></li><li><code>新实例的数据类型（默认为空字符串）</code></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myBlob.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start, end, contentType)</span></span></code></pre></div><h3 id="使用实例" tabindex="-1">使用实例 <a class="header-anchor" href="#使用实例" aria-label="Permalink to &quot;使用实例&quot;">​</a></h3><h4 id="ajax-请求时" tabindex="-1">AJAX 请求时 <a class="header-anchor" href="#ajax-请求时" aria-label="Permalink to &quot;AJAX 请求时&quot;">​</a></h4><p><code>如果指定responseType属性为blob，请求到的就是一个 Blob 对象</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getBlob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xhr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XMLHttpRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GET&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	xhr.responseType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;blob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	  callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.response); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//此时返回是数据为blob实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="生成-url" tabindex="-1">生成 URL <a class="header-anchor" href="#生成-url" aria-label="Permalink to &quot;生成 URL&quot;">​</a></h4><p><code>浏览器允许使用URL.createObjectURL()方法，针对 Blob 对象生成一个临时 URL， 以便于某些 API 使用。这个 URL 以blob://开头，表明对应一个 Blob 对象， 协议头后面是一个识别符，用来唯一对应内存里面的 Blob 对象。这一点 与data://URL（URL 包含实际数据）和file://URL（本地文件系统里面的文件）都不一样。</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//type属性为空，自动识别类型，否则，下载指定类型文件（推荐不加）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> blob</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zhao&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).files,{type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> downloadElement </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createObjectURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(blob); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//创建下载的链接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">downloadElement.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> href;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">downloadElement.download </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zhao&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).files[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].name; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//下载后文件名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(downloadElement);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">downloadElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//点击下载</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(downloadElement); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//下载完成移除元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">revokeObjectURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(href); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//释放掉blob对象</span></span></code></pre></div>`,17),n=[l];function k(e,p,d,E,r,o){return a(),i("div",null,n)}const c=s(h,[["render",k]]);export{y as __pageData,c as default};
