"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38126],{6105:(e,t,i)=>{i.d(t,{Z:()=>v});var o=i(67294),n=i(86010),c=i(53438),a=i(39960),r=i(13919),l=i(95999);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=i(99603),m=i(21702);function p(e){let{href:t,children:i}=e;return o.createElement(a.default,{href:t,className:(0,n.default)("card padding--lg",s.cardContainer)},i)}function u(e){let{href:t,icon:i,title:c,description:a}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,n.default)("text--truncate",s.cardTitle),title:c},i,c),a&&o.createElement("p",{className:s.cardDescription,title:a},a))}function f(e){let{item:t}=e;const i=(0,c.Wl)(t);return i?o.createElement(u,{href:i,icon:o.createElement(d.G,{icon:m.cC_,className:s.docCardIcon}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const i=(0,r.Z)(t.href)?o.createElement(d.G,{icon:m.FL8,className:s.docCardIcon}):o.createElement(d.G,{icon:m.wlW,className:s.docCardIcon}),n=(0,c.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(y,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,c.jA)();return o.createElement(v,{items:i.items,className:t})}function v(e){const{items:t,className:i}=e;if(!t)return o.createElement(g,e);const a=(0,c.MN)(t);return o.createElement("section",{className:(0,n.default)("row",i)},a.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},14285:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=i(87462),n=(i(67294),i(3905)),c=i(6105),a=i(53438);const r={id:"policy-violations",title:"PolicyViolations",description:"PolicyViolations",custom_edit_url:null},l=void 0,s={unversionedId:"api/iiq/policy-violations",id:"api/iiq/policy-violations",title:"PolicyViolations",description:"PolicyViolations",source:"@site/docs/api/iiq/policy-violations.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/policy-violations",permalink:"/docs/api/iiq/policy-violations",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"policy-violations",title:"PolicyViolations",description:"PolicyViolations",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"Returns an ObjectConfig resource based on its name or id.",permalink:"/docs/api/iiq/get-object-config-by-id"},next:{title:"Returns all PolicyViolation resources.",permalink:"/docs/api/iiq/get-policy-violations"}},d={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);