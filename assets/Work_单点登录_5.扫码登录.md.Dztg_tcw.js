import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.aC9gkKXW.js";const p="/assets/640.D6_H5LTp.webp",g=JSON.parse('{"title":"扫码登录","description":"","frontmatter":{},"headers":[],"relativePath":"Work/单点登录/5.扫码登录.md","filePath":"Work/单点登录/5.扫码登录.md","lastUpdated":1716962640000}'),l={name:"Work/单点登录/5.扫码登录.md"},e=n(`<h1 id="扫码登录" tabindex="-1">扫码登录 <a class="header-anchor" href="#扫码登录" aria-label="Permalink to &quot;扫码登录&quot;">​</a></h1><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">扫码登陆</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">应用场景：微信、qq和淘宝这一类的软件。而这些app都有他们相对应的网页端。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">为了让用户在使用他们的网页时登录更加方便和安全，使用手机扫一扫就可以登录的服务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">一、网页端与服务器的配合逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.用户打开网站的登录页面的时候，向浏览器的服务器发送获取登录二维码的请求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.服务器收到请求后，随机生成一个uuid，将这个id作为key值存入redis服务器，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">同时设置一个过期时间，再过期后，用户登录二维码需要进行刷新重新获取</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.将这个key值和本公司的验证字符串合在一起，通过二维码生成接口，生成一个二维码的图片</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">然后，将二维码图片和uuid一起返回给用户浏览器。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4.浏览器拿到二维码和uuid后，会每隔一秒向浏览器端服务器发送一次，登录是否成功的请求。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请求中携带有uuid作为当前页面的标识符</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">二、手机端与服务器的配合逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.浏览器拿到二维码后，将二维码展示到网页上，并给用户一个提示：请掏出您的手机，打开扫一扫进行登录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.用户拿出手机扫描二维码，就可以得到一个验证信息和一个uuid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.手机端已经进行过了登录，在访问手机端的服务器的时候，参数中都会携带一个用户的token，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">手机端服务器可以从中解析到用户的userId（这里从token中取值而不是手机端直接传userid是为了安全，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">直接传userid可能会被截获和修改，token是加密的，被修改的风险会小很多）。手机端将解析到的数据和用户token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">一起作为参数，向服务器发送验证登录请求（这里的服务器是手机服务器，手机端的服务器跟网页端服务器不是同一台服务器）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4.服务器收到请求后，首先对比参数中的验证信息，确定是否为用户登录请求接口。如果是，返回一个确认信息给手机端</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">5.手机端收到返回后，将登录确认框显示给用户（防止用户误操作，同时使登录更加人性化）。用户确认是进行的登录操作后，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">手机再次发送请求。服务器拿到uuId和userId后，将用户的userid作为value值存入redis中以uuid作为key的键值对中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">三、登录成功时的逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.浏览器再次发送请求的时候，浏览器端的服务器就可以得到一个用户Id，并调用登录的方法，生成一个浏览器端的token</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.在浏览器再次发送请求的时候，将用户信息返回给浏览器，登录成功。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.这里存储用户id而不是直接存储用户信息是因为，手机端的用户信息，不一定是和浏览器端的用户信息完全一致。</span></span></code></pre></div><p><img src="`+p+'" alt="RUNOOB 图标"></p>',3),t=[e];function E(h,k,d,r,c,o){return i(),a("div",null,t)}const u=s(l,[["render",E]]);export{g as __pageData,u as default};
