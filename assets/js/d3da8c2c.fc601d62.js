"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[98117],{6105:(e,t,r)=>{r.d(t,{Z:()=>g});var i=r(67294),o=r(86010),n=r(53438),c=r(39960),a=r(13919),s=r(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),m=r(21702);function u(e){let{href:t,children:r}=e;return i.createElement(c.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:n,description:c}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:n},r,n),c&&i.createElement("p",{className:l.cardDescription,title:c},c))}function f(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?i.createElement(p,{href:r,icon:i.createElement(d.G,{icon:m.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){let{item:t}=e;const r=(0,a.Z)(t.href)?i.createElement(d.G,{icon:m.FL8,className:l.docCardIcon}):i.createElement(d.G,{icon:m.wlW,className:l.docCardIcon}),o=(0,n.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(w,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,n.jA)();return i.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return i.createElement(h,e);const c=(0,n.MN)(t);return i.createElement("section",{className:(0,o.default)("row",r)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(k,{item:e})))))}},65211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=r(87462),o=(r(67294),r(3905)),n=r(6105),c=r(53438);const a={id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},s=void 0,l={unversionedId:"api/iiq/workflows",id:"api/iiq/workflows",title:"Workflows",description:"Workflows",source:"@site/docs/api/iiq/workflows.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/workflows",permalink:"/docs/api/iiq/workflows",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"Deletes an existing User.",permalink:"/docs/api/iiq/delete-user"},next:{title:"Returns all Workflow resources.",permalink:"/docs/api/iiq/workflows-get"}},d={},m=[],u={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);