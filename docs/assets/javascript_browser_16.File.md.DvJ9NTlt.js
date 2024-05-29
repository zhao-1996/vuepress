import{_ as i,c as s,o as a,a3 as e}from"./chunks/framework.aC9gkKXW.js";const g=JSON.parse('{"title":"File","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/browser/16.File.md","filePath":"javascript/browser/16.File.md","lastUpdated":1716973501000}'),t={name:"javascript/browser/16.File.md"},l=e(`<h1 id="file" tabindex="-1">File <a class="header-anchor" href="#file" aria-label="Permalink to &quot;File&quot;">​</a></h1><p><code> File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象， 或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。 最常见的使用场合是表单的文件上传控件（&lt;input type=&quot;file&quot;&gt;），用户选中文件以后， 浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fileItem&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).files[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h4 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><p><code>浏览器原生提供一个File()构造函数，用来生成 File 实例对象。File()构造函数接受三个参数。</code></p><ul><li><code>array：一个数组，成员可以是二进制对象或字符串，表示文件的内容。</code></li><li><code>name：字符串，表示文件名或文件路径。</code></li><li><code>options：配置对象，设置实例的属性。该参数可选。</code><ul><li><code>第三个参数配置对象，可以设置两个属性。</code></li><li><code>type：字符串，表示实例对象的 MIME 类型，默认值为空字符串。</code></li><li><code>lastModified：时间戳，表示上次修改的时间，默认为Date.now()。</code></li></ul></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(array, name, { type: String, lastModified: Date });</span></span></code></pre></div><h4 id="实例属性" tabindex="-1">实例属性 <a class="header-anchor" href="#实例属性" aria-label="Permalink to &quot;实例属性&quot;">​</a></h4><ul><li><code>File 对象有以下实例属性。</code></li><li><code>File.lastModified：最后修改时间</code></li><li><code>File.name：文件名或文件路径</code></li><li><code>File.size：文件大小（单位字节）</code></li><li><code>File.type：文件的 MIME 类型</code></li><li><code>File 对象没有自己的实例方法，由于继承了 Blob 对象，因此可以使用 Blob 的实例方法slice()。</code></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myFile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([], </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file.bin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lastModified: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2018</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myFile.lastModified; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1517414400000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myFile.name; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;file.bin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myFile.size; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myFile.type; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;&quot;</span></span></code></pre></div><h4 id="filelist-对象" tabindex="-1">FileList 对象 <a class="header-anchor" href="#filelist-对象" aria-label="Permalink to &quot;FileList 对象&quot;">​</a></h4><p><code>FileList对象是一个类似数组的对象，代表一组选中的文件，每个成员都是一个 File 实例。它主要出现在两个场合。 文件控件节点（&lt;input type=&quot;file&quot;&gt;）的files属性，返回一个 FileList 实例。 拖拉一组文件时，目标区的DataTransfer.files属性，返回一个 FileList 实例。 FileList 的实例属性主要是length，表示包含多少个文件。 FileList 的实例方法主要是item()，用来返回指定位置的实例。它接受一个整数作为参数， 表示位置的序号（从零开始）。但是，由于 FileList 的实例是一个类似数组的对象， 可以直接用方括号运算符，即files[0]等同于files.item(0)，所以一般用不到item()方法。</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;input id=&quot;fileItem&quot; type=&quot;file&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> files</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fileItem&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).files;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">files </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FileList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div>`,13),n=[l];function h(p,k,d,o,r,c){return a(),s("div",null,n)}const y=i(t,[["render",h]]);export{g as __pageData,y as default};
