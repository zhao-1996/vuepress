import{_ as t,c as a,o,j as e,a as n}from"./chunks/framework.aC9gkKXW.js";const u=JSON.parse('{"title":"为什么需要负载均衡","description":"","frontmatter":{},"headers":[],"relativePath":"tool/nginx/5.为什么需要负载均衡.md","filePath":"tool/nginx/5.为什么需要负载均衡.md","lastUpdated":1655992001000}'),s={name:"tool/nginx/5.为什么需要负载均衡.md"},_=e("h1",{id:"为什么需要负载均衡",tabindex:"-1"},[n("为什么需要负载均衡 "),e("a",{class:"header-anchor",href:"#为什么需要负载均衡","aria-label":'Permalink to "为什么需要负载均衡"'},"​")],-1),r=e("p",null,"当系统面临大量用户访问，负载过高的时候，通常会使用增加服务器数量 来进行横向扩展，使用集群和负载均衡提高整个系统的处理能力。 从单机网站到分布式网站，很重要的区别是业务拆分和分布式部署，将应用拆 分后，部署到不同的机器上，实现大规模分布式系统。分布式和业务拆分解决了， 从集中到分布的问题，但是每个部署的独立业务还存在单点的问题和访问统一 入口问题，为解决单点故障，我们可以采取冗余的方式。将相同的应用部署到多 台机器上。解决访问统一入口问题，我们可以在集群前面增加负 载均衡设备，实现流量分发。",-1),c=[_,r];function d(i,l,p,h,m,f){return o(),a("div",null,c)}const g=t(s,[["render",d]]);export{u as __pageData,g as default};
