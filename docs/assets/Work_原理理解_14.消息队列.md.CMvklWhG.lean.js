import{_ as a,c as r,o,j as e,a as t}from"./chunks/framework.aC9gkKXW.js";const k=JSON.parse('{"title":"消息队列","description":"","frontmatter":{},"headers":[],"relativePath":"Work/原理理解/14.消息队列.md","filePath":"Work/原理理解/14.消息队列.md","lastUpdated":1653226610000}'),s={name:"Work/原理理解/14.消息队列.md"},n=e("h1",{id:"消息队列",tabindex:"-1"},[t("消息队列 "),e("a",{class:"header-anchor",href:"#消息队列","aria-label":'Permalink to "消息队列"'},"​")],-1),_=e("p",null,[t("消息队列：当一大批客户端同时产生大量的网络请求(消息)时，由于服务器的峰值处理能力受限，"),e("br"),t(" 这时候在消息传到服务器之前，要有个容器，先让这些消息排队，这样就会有个队列的数据结构，"),e("br"),t(" 然后后台按照逻辑约定将消息按照先进先出的原则将消息传到服务器，这样服务器的压力就会减小许多，"),e("br"),t(" 这个容器就是消息队列。"),e("br"),t(" 可将客户端称为生产者(生产消息)，服务器称为消费者(把消息处理掉)，容器就是他们中间的过渡期，"),e("br"),t(" 保证 生产者--消费者 模式有序的进行。"),e("br")],-1),c=[n,_];function d(i,l,p,h,m,f){return o(),r("div",null,c)}const u=a(s,[["render",d]]);export{k as __pageData,u as default};
