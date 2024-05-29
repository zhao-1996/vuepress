import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.aC9gkKXW.js";const p="/assets/nginx31.vimxIrU8.jpeg",o=JSON.parse('{"title":"负载均衡","description":"","frontmatter":{},"headers":[],"relativePath":"tool/nginx/3.负载均衡.md","filePath":"tool/nginx/3.负载均衡.md","lastUpdated":1716973501000}'),l={name:"tool/nginx/3.负载均衡.md"},t=n(`<h1 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*负载均衡 (Load Balancer)*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">互联网早期，业务流量比较小并且业务逻辑比较简单，单台服</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">务器便可以满足基本的需求；但随着互联网的发展，业务流量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">越来越大并且业务逻辑也越来越复杂，单台服务器的性能问题以</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">及单点问题凸显了出来，因此需要多台服务器来进行性能的水平</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">扩展以及避免单点故障。但是要如何将不同的用户的流量分发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">到不同的服务器上面呢.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这个时候就出现了负载均衡</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">客户端的流量首先会到达负载均衡服务器，由负载均衡服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">通过一定的调度算法将流量分发到不同的应用服务器上面，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以此来保证应用的高可用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">负载均衡又分为四层负载均衡和七层负载均衡。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">四层负载均衡工作在OSI模</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">型的传输层，主要工作是转发，它在接收到客户端的流量以后通过修改数据包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">的地址信息将流量转发到应用服务器。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">七层负载均衡工作在OSI模型的应用层，因为它需要解析应用层流量，所以</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">七层负载均衡在接到客户端的流量以后，还需要一个完整的TCP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IP协议栈。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">七层负载均衡会与客户端建立一条完整的连接并将应用层的请求流量解析出来，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">再按照调度算法选择一个应用服务器，并与应用服务器建立另外一条连接将</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请求发送过去，因此七层负载均衡的主要工作就是代理。</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SYN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TCP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IP建立连接时使用的握手信号</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">所谓四层负载均衡，也就是主要通过报文中的目标地址和端口，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">再加上负载均衡设备设置的服务器选择方式，决定最终选择的内部服务器。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以常见的TCP为例，负载均衡设备在接收到第一个来自客户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">端的SYN 请求时，即通过上述方式选择一个最佳的服务器，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">并对报文中目标IP地址进行修改</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(改为后端服务器IP），</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">直接转发给该服务器。TCP的连接建立，即三次握手是客户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">端和服务器直接建立的，负载均衡设备只是起到一个类似路</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">由器的转发动作。在某些部署情况下，为保证服务器回包可</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以正确返回给负载均衡设备，在转发报文的同时可能还会对报文</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">原来的源地址进行修改。</span></span></code></pre></div><p><img src="`+p+`" alt="RUNOOB 图标"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">所谓七层负载均衡，也称为“内容交换”，也就是主要通过报文中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">的真正有意义的应用层内容，再加上负载均衡设备设置的服务器选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">择方式，决定最终选择的内部服务器。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以常见的TCP为例，负载均衡设备如果要根据真正的应用层内容再选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">择服务器，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">只能先代理最终的服务器和客户端建立连接</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(三次握手)后，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">才可能接受到客户端发送的真正应用层内容的报文，然后再根据该报</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">文中的特定字段，再加上负载均衡设备设置的服务器选择方式，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">决定最终选择的内部服务器。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">负载均衡设备在这种情况下，更类似于一个代理服务器。负载均衡和前</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">端的客户端以及后端的服务器会分别建立TCP连接。</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">七层应用负载的好处，是使得整个网络更</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;智能化&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, 参考</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我们之前的另外一篇专门针对HTTP应用的优化的介绍，就可</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以基本上了解这种方式的优势所在。例如访问一个网站的用户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">流量，可以通过七层的方式，将对图片类的请求转发到特定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">的图片服务器并可以使用缓存技术；将对文字类的请求可以</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">转发到特定的文字服务器并可以使用压缩技术。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当然这只是七层应用的一个小案例，从技术原理上，这种方式可以对</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">客户端的请求和服务器的响应进行任意意义上的修改，极大的提升了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">应用系统在网络层的灵活性。很多在后台，(例如Nginx或者Apache)上</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">部署的功能可以前移到负载均衡设备上，例如客户请求中的Header重写，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">服务器响应中的关键字过滤或者内容插入等功能。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">另外一个常常被提到功能就是安全性。网络中最常见的SYN Flood攻</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">击，即黑客控制众多源客户端，使用虚假IP地址对同一目标发送SYN攻</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">击，通常这种攻击会大量发送SYN报文，耗尽服务器上的相关资源，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以达到Denial </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(DoS:拒绝服务)的目的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">从技术原理上也可以看出，四层模式下这些SYN攻击都会被转发到后端的服务器上；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">而七层模式下这些SYN攻击自然在负载均衡设备上就截止，不会影响后台服务器的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">正常运营。另外负载均衡设备可以在七层层面设定多种策略，过滤特定报文，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">例如SQL注入等应用层面的特定攻击手段，从应用层面进一步提高系统整体安全。</span></span></code></pre></div>`,7),h=[t];function E(e,k,d,c,r,g){return i(),a("div",null,h)}const v=s(l,[["render",E]]);export{o as __pageData,v as default};
