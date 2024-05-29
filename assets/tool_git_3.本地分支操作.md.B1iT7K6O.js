import{_ as a,c as e,o as i,a3 as t}from"./chunks/framework.BvVpiGod.js";const k=JSON.parse('{"title":"本地分支操作","description":"","frontmatter":{},"headers":[],"relativePath":"tool/git/3.本地分支操作.md","filePath":"tool/git/3.本地分支操作.md","lastUpdated":1716973501000}'),n={name:"tool/git/3.本地分支操作.md"},s=t(`<h1 id="本地分支操作" tabindex="-1">本地分支操作 <a class="header-anchor" href="#本地分支操作" aria-label="Permalink to &quot;本地分支操作&quot;">​</a></h1><h3 id="git本地合并分支" tabindex="-1">git本地合并分支 <a class="header-anchor" href="#git本地合并分支" aria-label="Permalink to &quot;git本地合并分支&quot;">​</a></h3><p>一、<code>git rebase</code><br><code>git rebase b</code> // 将b分支合并到当前分支<br> 二、<code>git merge</code><br><code>git merge b</code> // 将b分支合并到当前分支<br> merge直接将所有内容进行合并，<br> rebase是将差异内容进行合并(也称为变基，会产生新的历史记录) 合并也就是历史记录的合并，虽然rebase比merge执行过程简单 变基操作的 实质是丢弃一些现有的提交，然后相应地 新建一些内容一样但实际上不同的提交。因为历史记录不同了 如果你已经将提交推送至某个仓库，而其他人也已经从该仓库拉取提交并 进行了后续工作，此时，如果你用 git rebase 命令重新整理了提交并 再次推送，你的同伴因此将不得不再次将他们手头的工作与你的提交进行整合， 如果接下来你还要拉取并整合他们修改过的提交，事情就会变得一团糟。<br> 所以推荐使用merge。</p><p>你可以执行 <code>git branch (branchname)</code> 来创建分支， <br> 使用<code>git checkout (branchname)</code> 命令切换到该分支，在该分支的 上下文环境中， 提交快照等，之后可以很容易地来回切换。当你切 换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目 录的内容， 所以多个分支不需要多个目录。<br> 使用 <code>git merge</code> 来合并分 支。你可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。</p><h3 id="git本地分支操作常用命令" tabindex="-1">git本地分支操作常用命令 <a class="header-anchor" href="#git本地分支操作常用命令" aria-label="Permalink to &quot;git本地分支操作常用命令&quot;">​</a></h3><h4 id="git-branch" tabindex="-1">git branch <a class="header-anchor" href="#git-branch" aria-label="Permalink to &quot;git branch&quot;">​</a></h4><p>列出所有本地分支</p><h4 id="git-branch-branchname" tabindex="-1">git branch branchname <a class="header-anchor" href="#git-branch-branchname" aria-label="Permalink to &quot;git branch branchname&quot;">​</a></h4><p>创建名为branchname的本地分支</p><h4 id="git-checkout-branchname" tabindex="-1">git checkout branchname <a class="header-anchor" href="#git-checkout-branchname" aria-label="Permalink to &quot;git checkout branchname&quot;">​</a></h4><p>切换到名为branchname的本地分支</p><h4 id="git-checkout-b-branchname" tabindex="-1">git checkout -b branchname <a class="header-anchor" href="#git-checkout-b-branchname" aria-label="Permalink to &quot;git checkout -b branchname&quot;">​</a></h4><p>创建名为branchname的本地分支，并立即切换到它</p><h4 id="git-branch-d-branchname" tabindex="-1">git branch -d branchname <a class="header-anchor" href="#git-branch-d-branchname" aria-label="Permalink to &quot;git branch -d branchname&quot;">​</a></h4><p>删除名为branchaname的本地分支</p><h4 id="git-merge-branchname" tabindex="-1">git merge branchname <a class="header-anchor" href="#git-merge-branchname" aria-label="Permalink to &quot;git merge branchname&quot;">​</a></h4><p>将名为branchname的本地分支合并到你的当前分支<br> 如果a分支和b分支同时对c文件做了修改，比如文件的内容或者 文件名，那么合并的时候会将最后操作的内容为准。<br> 当产生冲突，上面是当前分支的，下面是被合并分支的</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">accept Current Change </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accept IncomIng Change </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Accept Both Changes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Compare Changes </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">接受当前更改 	       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 接受传入更改			  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">接受两个更改			 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 比较变化</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HEAD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Many Hello World Examples</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=======</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hello World Lang Examples</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fix_readme</span></span></code></pre></div><h4 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-label="Permalink to &quot;git log&quot;">​</a></h4><p>查看一个分支中提交的更改记录</p><h4 id="git-tag" tabindex="-1">git tag <a class="header-anchor" href="#git-tag" aria-label="Permalink to &quot;git tag&quot;">​</a></h4><p>给历史记录中的某个重要的一点打上标签<br> 当你执行 <code>git tag -a</code> 命令时，Git 会打开你的编辑器，让你写一句标签注解，<br> 就像你给提交写注解一样。<br><code>git tag -a</code><br> 执行 <code>git log --decorate</code> 时，我们可以看到我们的标签了<br></p>`,22),h=[s];function r(c,l,o,g,d,p){return i(),e("div",null,h)}const m=a(n,[["render",r]]);export{k as __pageData,m as default};
