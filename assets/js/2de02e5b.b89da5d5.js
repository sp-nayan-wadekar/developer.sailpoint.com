"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45850],{6105:(e,t,i)=>{i.d(t,{Z:()=>k});var n=i(67294),c=i(86010),r=i(53438),a=i(39960),s=i(13919),o=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=i(99603),d=i(21702);function u(e){let{href:t,children:i}=e;return n.createElement(a.default,{href:t,className:(0,c.default)("card padding--lg",l.cardContainer)},i)}function p(e){let{href:t,icon:i,title:r,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.default)("text--truncate",l.cardTitle),title:r},i,r),a&&n.createElement("p",{className:l.cardDescription,title:a},a))}function f(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?n.createElement(p,{href:i,icon:n.createElement(m.G,{icon:d.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,s.Z)(t.href)?n.createElement(m.G,{icon:d.FL8,className:l.docCardIcon}):n.createElement(m.G,{icon:d.wlW,className:l.docCardIcon}),c=(0,r.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:i,title:t.label,description:t.description??c?.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,r.jA)();return n.createElement(k,{items:i.items,className:t})}function k(e){const{items:t,className:i}=e;if(!t)return n.createElement(g,e);const a=(0,r.MN)(t);return n.createElement("section",{className:(0,c.default)("row",i)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e})))))}},72011:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(87462),c=(i(67294),i(3905)),r=i(6105),a=i(53438);const s={id:"entitlements",title:"Entitlements",description:"Entitlements",custom_edit_url:null},o=void 0,l={unversionedId:"api/iiq/entitlements",id:"api/iiq/entitlements",title:"Entitlements",description:"Entitlements",source:"@site/docs/api/iiq/entitlements.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/entitlements",permalink:"/docs/api/iiq/entitlements",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"entitlements",title:"Entitlements",description:"Entitlements",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"This endpoint simulates provisioning a set of access items, and then checks against a set of policies to determine if granting the access items would cause creation of new policy violations.",permalink:"/docs/api/iiq/check-policy-violations"},next:{title:"Returns all Entitlement resources.",permalink:"/docs/api/iiq/get-entitlements"}},m={},d=[],u={toc:d},p="wrapper";function f(e){let{components:t,...i}=e;return(0,c.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(r.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);