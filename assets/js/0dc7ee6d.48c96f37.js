"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77814],{6105:(e,t,i)=>{i.d(t,{Z:()=>y});var a=i(67294),r=i(86010),n=i(53438),l=i(39960),s=i(13919),c=i(95999);const o={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var g=i(99603),d=i(21702);function v(e){let{href:t,children:i}=e;return a.createElement(l.default,{href:t,className:(0,r.default)("card padding--lg",o.cardContainer)},i)}function m(e){let{href:t,icon:i,title:n,description:l}=e;return a.createElement(v,{href:t},a.createElement("h2",{className:(0,r.default)("text--truncate",o.cardTitle),title:n},i,n),l&&a.createElement("p",{className:o.cardDescription,title:l},l))}function b(e){let{item:t}=e;const i=(0,n.Wl)(t);return i?a.createElement(m,{href:i,icon:a.createElement(g.G,{icon:d.cC_,className:o.docCardIcon}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const i=(0,s.Z)(t.href)?a.createElement(g.G,{icon:d.FL8,className:o.docCardIcon}):a.createElement(g.G,{icon:d.wlW,className:o.docCardIcon}),r=(0,n.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function u(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const i=(0,n.jA)();return a.createElement(y,{items:i.items,className:t})}function y(e){const{items:t,className:i}=e;if(!t)return a.createElement(E,e);const l=(0,n.MN)(t);return a.createElement("section",{className:(0,r.default)("row",i)},l.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(u,{item:e})))))}},37894:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=i(87462),r=(i(67294),i(3905)),n=i(6105),l=i(53438);const s={id:"available-event-triggers",title:"Available Event Triggers",pagination_label:"Available Event Triggers",sidebar_label:"Available Event Triggers",sidebar_class_name:"availableEventTriggers",keywords:["event","trigger","available"],description:"Event triggers that are generally available.",sidebar_position:7,slug:"/extensibility/event-triggers/available",tags:["Event Triggers","Available Event Triggers"]},c=void 0,o={unversionedId:"extensibility/event-triggers/available/available-event-triggers",id:"extensibility/event-triggers/available/available-event-triggers",title:"Available Event Triggers",description:"Event triggers that are generally available.",source:"@site/docs/extensibility/event-triggers/available/index.mdx",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/available",permalink:"/docs/extensibility/event-triggers/available",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/index.mdx",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:7,frontMatter:{id:"available-event-triggers",title:"Available Event Triggers",pagination_label:"Available Event Triggers",sidebar_label:"Available Event Triggers",sidebar_class_name:"availableEventTriggers",keywords:["event","trigger","available"],description:"Event triggers that are generally available.",sidebar_position:7,slug:"/extensibility/event-triggers/available",tags:["Event Triggers","Available Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Responding to Response Required Triggers",permalink:"/docs/extensibility/event-triggers/responding-request-response-trigger"},next:{title:"Access Request Decision",permalink:"/docs/extensibility/event-triggers/triggers/access-request-decision"}},g={},d=[],v={toc:d},m="wrapper";function b(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The event triggers in this section are generally available to all ISC tenants. Event triggers currently in development are considered ",(0,r.kt)("a",{parentName:"p",href:"/docs/extensibility/event-triggers/early-access"},"Early Access")," and require a support ticket to be enabled in a tenant."),(0,r.kt)(n.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);