import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.BvVpiGod.js";const g=JSON.parse('{"title":"tsconfig.json","description":"","frontmatter":{},"headers":[],"relativePath":"Work/typescript/9.tsconfig.json.md","filePath":"Work/typescript/9.tsconfig.json.md","lastUpdated":1716973501000}'),t={name:"Work/typescript/9.tsconfig.json.md"},e=n(`<h1 id="tsconfig-json" tabindex="-1">tsconfig.json <a class="header-anchor" href="#tsconfig-json" aria-label="Permalink to &quot;tsconfig.json&quot;">​</a></h1><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">tsconfig.json:ts的编译配置文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">作用：将ts文件编译成js文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">1.在终端输入：tsc -init 生成tsconfig.json文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">tsconfig.json 也可以为空文件，这种情况下会使用默认的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">编译选项来编译所有默认引入的文件。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">files 属性是一个数组，数组元素可以是相对文件路径和绝对文件路径。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">include 和 exclude 属性也是一个数组，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">exclude 只对 include 有效，对 files 无效。即 files 指定的文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">如果同时被 exclude 排除，那么该文件仍然会被编译器引入。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const ts = {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">.class.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//指定编译哪个文件，默认为all</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">.hello.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//指顶不编译哪个文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">.class.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//指定编译哪个文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Visit https://aka.ms/tsconfig.json to read more about this file */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Basic Options */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;incremental&quot;: true,                   /* Enable incremental compilation */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Specify ECMAScript target version: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ES2019&#39;, &#39;ES2020&#39;, or &#39;ESNEXT&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;commonjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Specify module code generation: &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es2015&#39;, &#39;es2020&#39;, or &#39;ESNext&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;lib&quot;: [],                             /* 要包含在编译中的库文件列表. 可能包含ES5、ES6、ES2015、ES2016、ES2017...*/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;allowJs&quot;: true,                       /*允许编译JavaScript文件.默认为false */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;checkJs&quot;: true,                       /* 报告.js文件中的错误。与结合使用--allowJs,默认false */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;jsx&quot;: &quot;preserve&quot;,                     /* 支持JSX的.tsx文件: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;declaration&quot;: true,                   /* Generates corresponding &#39;.d.ts&#39; file. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;declarationMap&quot;: true,                /* Generates a sourcemap for each corresponding &#39;.d.ts&#39; file. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;sourceMap&quot;: true,                     /* Generates corresponding &#39;.map&#39; file. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*开启后编译只生成一个js文件，开启这个后，module的属性值要改成amd*/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;outFile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Concatenate and emit output to single file. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;outDir&quot;: &quot;./&quot;,                        /* Redirect output structure to the directory. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;rootDir&quot;: &quot;./&quot;,                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;composite&quot;: true,                     /* Enable project compilation */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;tsBuildInfoFile&quot;: &quot;./&quot;,               /* Specify file to store incremental compilation information */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*编译之后是否去掉注释，默认否*/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;removeComments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Do not emit comments to output. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noEmit&quot;: true,                        /* Do not emit outputs. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;importHelpers&quot;: true,                 /* Import emit helpers from &#39;tslib&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;downlevelIteration&quot;: true,            /* Provide full support for iterables in &#39;for-of&#39;, spread, and destructuring when targeting &#39;ES5&#39; or &#39;ES3&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;isolatedModules&quot;: true,               /* Transpile each file as a separate module (similar to &#39;ts.transpileModule&#39;). */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Strict Type-Checking Options */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*是否开启严格模式，默认是*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;strict&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Enable all strict type-checking options. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noImplicitAny&quot;: true,                 /* Raise error on expressions and declarations with an implied &#39;any&#39; type. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;strictNullChecks&quot;: true,              /* Enable strict null checks. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;strictFunctionTypes&quot;: true,           /* Enable strict checking of function types. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;strictBindCallApply&quot;: true,           /* Enable strict &#39;bind&#39;, &#39;call&#39;, and &#39;apply&#39; methods on functions. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;strictPropertyInitialization&quot;: true,  /* Enable strict checking of property initialization in classes. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noImplicitThis&quot;: true,                /* Raise error on &#39;this&#39; expressions with an implied &#39;any&#39; type. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;alwaysStrict&quot;: true,                  /* Parse in strict mode and emit &quot;use strict&quot; for each source file. */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Additional Checks */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noUnusedLocals&quot;: true,                /* Report errors on unused locals. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noUnusedParameters&quot;: true,            /* Report errors on unused parameters. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noImplicitReturns&quot;: true,             /* Report error when not all code paths in function return a value. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noFallthroughCasesInSwitch&quot;: true,    /* Report errors for fallthrough cases in switch statement. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;noUncheckedIndexedAccess&quot;: true,      /* Include &#39;undefined&#39; in index signature results */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Module Resolution Options */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;moduleResolution&quot;: &quot;node&quot;,            /* Specify module resolution strategy: &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6). */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;baseUrl&quot;: &quot;./&quot;,                       /* Base directory to resolve non-absolute module names. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;paths&quot;: {},                           /* A series of entries which re-map imports to lookup locations relative to the &#39;baseUrl&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;rootDirs&quot;: [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;typeRoots&quot;: [],                       /* List of folders to include type definitions from. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;types&quot;: [],                           /* Type declaration files to be included in compilation. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;allowSyntheticDefaultImports&quot;: true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*是否开启模块化编程，默认是fasle*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;esModuleInterop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies &#39;allowSyntheticDefaultImports&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;preserveSymlinks&quot;: true,              /* Do not resolve the real path of symlinks. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;allowUmdGlobalAccess&quot;: true,          /* Allow accessing UMD globals from modules. */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Source Map Options */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;sourceRoot&quot;: &quot;&quot;,                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;mapRoot&quot;: &quot;&quot;,                         /* Specify the location where debugger should locate map files instead of generated locations. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;inlineSourceMap&quot;: true,               /* Emit a single file with source maps instead of having a separate file. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;inlineSources&quot;: true,                 /* Emit the source alongside the sourcemaps within a single file; requires &#39;--inlineSourceMap&#39; or &#39;--sourceMap&#39; to be set. */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Experimental Options */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;experimentalDecorators&quot;: true,        /* Enables experimental support for ES7 decorators. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // &quot;emitDecoratorMetadata&quot;: true,         /* Enables experimental support for emitting type metadata for decorators. */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Advanced Options */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*跳过声明文件的类型检查*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;skipLibCheck&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Skip type checking of declaration files. */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*不允许不同变量来代表同一文件*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;forceConsistentCasingInFileNames&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* Disallow inconsistently-cased references to the same file. */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div>`,2),l=[e];function p(h,o,k,r,c,u){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};