"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28199],{6105:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(67294),r=s(86010),n=s(53438),a=s(39960),o=s(13919),d=s(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var l=s(99603),m=s(21702);function u(e){let{href:t,children:s}=e;return i.createElement(a.default,{href:t,className:(0,r.default)("card padding--lg",c.cardContainer)},s)}function f(e){let{href:t,icon:s,title:n,description:a}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,r.default)("text--truncate",c.cardTitle),title:n},s,n),a&&i.createElement("p",{className:c.cardDescription,title:a},a))}function p(e){let{item:t}=e;const s=(0,n.Wl)(t);return s?i.createElement(f,{href:s,icon:i.createElement(l.G,{icon:m.cC_,className:c.docCardIcon}),title:t.label,description:t.customProps?.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const s=(0,o.Z)(t.href)?i.createElement(l.G,{icon:m.FL8,className:c.docCardIcon}):i.createElement(l.G,{icon:m.wlW,className:c.docCardIcon}),r=(0,n.xz)(t.docId??void 0);return i.createElement(f,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(g,{item:t});case"category":return i.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const s=(0,n.jA)();return i.createElement(h,{items:s.items,className:t})}function h(e){const{items:t,className:s}=e;if(!t)return i.createElement(y,e);const a=(0,n.MN)(t);return i.createElement("section",{className:(0,r.default)("row",s)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},36691:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var i=s(87462),r=(s(67294),s(3905)),n=s(6105),a=s(53438);const o={id:"guides",title:"Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_class_name:"transforms",keywords:["transforms","guides"],description:"Transform Guides",slug:"/extensibility/transforms/guides",tags:["Transforms","Guides"]},d="Transform Guides",c={unversionedId:"extensibility/transforms/guides/guides",id:"extensibility/transforms/guides/guides",title:"Guides",description:"Transform Guides",source:"@site/docs/extensibility/transforms/guides/index.md",sourceDirName:"extensibility/transforms/guides",slug:"/extensibility/transforms/guides",permalink:"/docs/extensibility/transforms/guides",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/guides/index.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Guides",permalink:"/docs/tags/guides"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"guides",title:"Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_class_name:"transforms",keywords:["transforms","guides"],description:"Transform Guides",slug:"/extensibility/transforms/guides",tags:["Transforms","Guides"]},sidebar:"openApiSidebar",previous:{title:"Transforms",permalink:"/docs/extensibility/transforms"},next:{title:"Your First Transform",permalink:"/docs/extensibility/transforms/guides/your-first-transform"}},l={},m=[],u={toc:m},f="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(f,(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transform-guides"},"Transform Guides"),(0,r.kt)("p",null,"Not sure how to use transforms yet? Read these guides to see how you can use transforms and learn how to get started!"),(0,r.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);