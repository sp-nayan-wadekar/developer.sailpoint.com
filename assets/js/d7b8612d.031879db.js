"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99695],{6105:(e,t,i)=>{i.d(t,{Z:()=>b});var s=i(67294),o=i(86010),a=i(53438),r=i(39960),n=i(13919),c=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=i(99603),u=i(21702);function m(e){let{href:t,children:i}=e;return s.createElement(r.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},i)}function p(e){let{href:t,icon:i,title:a,description:r}=e;return s.createElement(m,{href:t},s.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:a},i,a),r&&s.createElement("p",{className:l.cardDescription,title:r},r))}function g(e){let{item:t}=e;const i=(0,a.Wl)(t);return i?s.createElement(p,{href:i,icon:s.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,n.Z)(t.href)?s.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):s.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),o=(0,a.xz)(t.docId??void 0);return s.createElement(p,{href:t.href,icon:i,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(h,{item:t});case"category":return s.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const i=(0,a.jA)();return s.createElement(b,{items:i.items,className:t})}function b(e){const{items:t,className:i}=e;if(!t)return s.createElement(v,e);const r=(0,a.MN)(t);return s.createElement("section",{className:(0,o.default)("row",i)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(f,{item:e})))))}},65467:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=i(87462),o=(i(67294),i(3905)),a=i(6105),r=i(53438);const n={id:"guides",title:"Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_position:1,sidebar_class_name:"guides",keywords:["guides"],description:"ISC guides.",slug:"/guides",tags:["guides"]},c=void 0,l={unversionedId:"guides",id:"guides",title:"Guides",description:"ISC guides.",source:"@site/docs/guides.md",sourceDirName:".",slug:"/guides",permalink:"/docs/guides",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/guides.md",tags:[{label:"guides",permalink:"/docs/tags/guides"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:1,frontMatter:{id:"guides",title:"Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_position:1,sidebar_class_name:"guides",keywords:["guides"],description:"ISC guides.",slug:"/guides",tags:["guides"]},sidebar:"openApiSidebar",previous:{title:"Secure Data Share Audit ER Diagram",permalink:"/docs/reporting/sds-audit-er-diagram"},next:{title:"Disable Access Profile Requests",permalink:"/docs/guides/disable-access-profile-requests"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],m={toc:u},p="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,s.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Identity Security Cloud (ISC) has all sorts of potential specific solutions you can implement as long as you know how. These specific solutions may either not fall into one of the extensibility, connectivity, tools, or reporting categories, or they may fall into multiple categories. Read these guides to learn how to implement these specific solutions. "),(0,o.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"discuss"},"Discuss"),(0,o.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,o.kt)("p",null,"To learn more about these ISC topics and discuss them with SailPoint Developer Community members, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/c/isc/6"},"SailPoint Developer Community Forum"),"."))}g.isMDXComponent=!0}}]);