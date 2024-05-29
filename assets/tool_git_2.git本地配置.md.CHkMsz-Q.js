import{_ as t,c as e,o as a,a3 as i}from"./chunks/framework.aC9gkKXW.js";const u=JSON.parse('{"title":"git本地配置","description":"","frontmatter":{},"headers":[],"relativePath":"tool/git/2.git本地配置.md","filePath":"tool/git/2.git本地配置.md","lastUpdated":1636360869000}'),o={name:"tool/git/2.git本地配置.md"},d=i('<h1 id="git本地配置" tabindex="-1">git本地配置 <a class="header-anchor" href="#git本地配置" aria-label="Permalink to &quot;git本地配置&quot;">​</a></h1><h4 id="git分四个区域" tabindex="-1">Git分四个区域 <a class="header-anchor" href="#git分四个区域" aria-label="Permalink to &quot;Git分四个区域&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">区域</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">代码开发区</td><td style="text-align:left;">即你的代码的编辑区域</td></tr><tr><td style="text-align:left;">代码暂存区(git add .)</td><td style="text-align:left;">提交到远程仓库的代码，需要先提交到暂存区，然后提交到本地仓库，然后才能提交到远程仓库</td></tr><tr><td style="text-align:left;">本地仓库(git commit -m &quot;&quot;)</td><td style="text-align:left;">将暂存区修改的代码提交到本地仓库，才能提交到远程仓库， 本地仓库是唯一能与远程仓库建立代码连接的方式</td></tr><tr><td style="text-align:left;">远程仓库(git push)</td><td style="text-align:left;">这里保存所有开发者的代码版本</td></tr></tbody></table><h4 id="绑定账户" tabindex="-1">绑定账户 <a class="header-anchor" href="#绑定账户" aria-label="Permalink to &quot;绑定账户&quot;">​</a></h4><p><code>git config --global user.name &quot;zhao&quot;</code> <br><code>git config --global user.email &quot;1062848999@qq.com&quot;</code></p><h4 id="项目使用git管理初始化-目录中会出现隐藏的git文件夹" tabindex="-1">项目使用git管理初始化(目录中会出现隐藏的git文件夹) <a class="header-anchor" href="#项目使用git管理初始化-目录中会出现隐藏的git文件夹" aria-label="Permalink to &quot;项目使用git管理初始化(目录中会出现隐藏的git文件夹)&quot;">​</a></h4><p><code>git init</code></p><h4 id="远程拉取项目-这个时候项目已经自动初始化git管理" tabindex="-1">远程拉取项目(这个时候项目已经自动初始化git管理) <a class="header-anchor" href="#远程拉取项目-这个时候项目已经自动初始化git管理" aria-label="Permalink to &quot;远程拉取项目(这个时候项目已经自动初始化git管理)&quot;">​</a></h4><p><code>git clone url</code></p><h4 id="git基本使用命令" tabindex="-1">git基本使用命令 <a class="header-anchor" href="#git基本使用命令" aria-label="Permalink to &quot;git基本使用命令&quot;">​</a></h4><h5 id="git-add" tabindex="-1">git add <a class="header-anchor" href="#git-add" aria-label="Permalink to &quot;git add&quot;">​</a></h5><p>将所修改的文件提交到暂存区，只有提交到暂存区， 才能提交到本地仓库，而后才能提交到远程仓库<br><code>git add hellow.vue</code> 将<code>hello.vue</code>提交到暂存区<br><code>git add .</code> 将所有修改的文件提交到暂存区</p><h5 id="git-status-s" tabindex="-1">git status -s <a class="header-anchor" href="#git-status-s" aria-label="Permalink to &quot;git status -s&quot;">​</a></h5><p>查看你的文件在工作目录与缓存的状态</p><h5 id="git-diff" tabindex="-1">git diff <a class="header-anchor" href="#git-diff" aria-label="Permalink to &quot;git diff&quot;">​</a></h5><p>对照修改文件具体修改了什么，建议在修改文件较少的时候使用这个命令查看,否则git窗口将会很乱<br> （例如<code>hello.vue</code>文件的修改）<br><code>- puts &quot;hello world&quot;</code><br><code>+ puts &quot;hola mundo&quot;</code><br><code>git diff --cached</code> #查看已缓存的改动<br><code>git diff fileName</code> 查看已缓存的与未缓存的所有改动<br><code>git diff --stat</code> 显示摘要而非整个 diff</p><h5 id="git-commit-m-本次提交备注" tabindex="-1">git commit -m &#39;本次提交备注&#39; <a class="header-anchor" href="#git-commit-m-本次提交备注" aria-label="Permalink to &quot;git commit -m &#39;本次提交备注&#39;&quot;">​</a></h5><p>将暂存区内容添加到本地仓库中,本地仓库是能与远程仓库代码连接的唯一方式</p><h5 id="git-reset-filename" tabindex="-1">git reset fileName <a class="header-anchor" href="#git-reset-filename" aria-label="Permalink to &quot;git reset fileName&quot;">​</a></h5><p>取消缓存已缓存的内容</p><h5 id="git-rm" tabindex="-1">git rm <a class="header-anchor" href="#git-rm" aria-label="Permalink to &quot;git rm&quot;">​</a></h5><p>将文件从缓存区移除<br><code>git rm file</code> 会将文件从缓存区和你的硬盘中（工作目录）删除。<br> 如果要在工作目录中留着该文件，可以使用 <code>git rm --cached</code></p><h5 id="git-mv" tabindex="-1">git mv <a class="header-anchor" href="#git-mv" aria-label="Permalink to &quot;git mv&quot;">​</a></h5><p>不像绝大多数其他版本控制系统，Git 并不记录记录文件重命名。它反而只记录快照， 并对比快照以找到有啥文件可能被重命名了。 如果一个文件从更新中删除了，而在下 次快照中新添加的另一个文件的内容与它很相似，Git 就知道这极有可能是个重命名 此，虽然有 git mv 命令，但它有点多余 —— 它做得所有事情就是 git rm --cached， 重命名磁盘上的文件，然后再执行 git add 把新文件添加到缓存区。 一般来说，开发者都会直接从闪盘中删除文件，而非通过git命令</p>',24),l=[d];function r(g,c,h,s,n,m){return a(),e("div",null,l)}const b=t(o,[["render",r]]);export{u as __pageData,b as default};
