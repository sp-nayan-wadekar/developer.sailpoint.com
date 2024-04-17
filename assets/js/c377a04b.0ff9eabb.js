"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[46971],{6105:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),i=n(86010),o=n(53438),r=n(39960),s=n(13919),l=n(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=n(99603),u=n(21702);function m(e){let{href:t,children:n}=e;return a.createElement(r.default,{href:t,className:(0,i.default)("card padding--lg",c.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:r}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,i.default)("text--truncate",c.cardTitle),title:o},n,o),r&&a.createElement("p",{className:c.cardDescription,title:r},r))}function h(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(p,{href:n,icon:a.createElement(d.G,{icon:u.cC_,className:c.docCardIcon}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?a.createElement(d.G,{icon:u.FL8,className:c.docCardIcon}):a.createElement(d.G,{icon:u.wlW,className:c.docCardIcon}),i=(0,o.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return a.createElement(b,e);const r=(0,o.MN)(t);return a.createElement("section",{className:(0,i.default)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(y,{item:e})))))}},97986:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),i=n(67294),o=n(86010),r=n(12466),s=n(70989),l=n(72389);const c={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};function d(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==s&&(m(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},r,{className:(0,o.default)("tabs__item",c.tabItem,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function u(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,s.Y)(e);return i.createElement("div",{className:(0,o.default)("tabs-container",c.tabList)},i.createElement(d,(0,a.Z)({},e,t)),i.createElement(u,(0,a.Z)({},e,t)))}function p(e){const t=(0,l.default)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},99622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(6105),r=n(53438);n(97986),n(42425);const s={id:"docs",title:"Identity Security Cloud",pagination_label:"Docs",sidebar_label:"Docs",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"The Identity Security Cloud Developer Documentation.",slug:"/",tags:["docs"]},l=void 0,c={unversionedId:"docs",id:"docs",title:"Identity Security Cloud",description:"The Identity Security Cloud Developer Documentation.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/index.md",tags:[{label:"docs",permalink:"/docs/tags/docs"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:1,frontMatter:{id:"docs",title:"Identity Security Cloud",pagination_label:"Docs",sidebar_label:"Docs",sidebar_position:1,sidebar_class_name:"docs",keywords:["docs"],description:"The Identity Security Cloud Developer Documentation.",slug:"/",tags:["docs"]},sidebar:"openApiSidebar",next:{title:"API Specifications",permalink:"/docs/api/api-specifications"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],m={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("admonition",{title:"What about IdentityNow?",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Looking for IdentityNow? You're in the right place! IdentityNow has an updated brand in Identity Security Cloud. ")),(0,i.kt)("p",null,"Identity Security Cloud (ISC) is a unified, multi-tenant identity governance and security platform. ISC provides organizations with the ability to ensure that their users, known as identities in ISC, have secure access to different data sources, and it makes identity access management fast and easy. "),(0,i.kt)("p",null,"The ISC platform out of the box will often meet all your identity governance and security needs, but it's possible that it won't. The beauty of ISC is that even if it doesn't quite meet all your needs, you can extend the platform's functionality and build custom solutions that do! "),(0,i.kt)("p",null,"The SailPoint Developer Documentation provides developers with all the information they need to extend their platforms' functionality and build their desired solutions. The developer documentation is written for developers of all experience levels, from nontechnical users exploring what's possible to advanced developers who live and breathe code. "),(0,i.kt)("p",null,"Check out the developer documentation and see what's possible! "),(0,i.kt)("admonition",{title:"Are you a partner?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The developer documentation is written for customers and partners who already have access to ISC. If you're interested in becoming a partner, go ",(0,i.kt)("a",{parentName:"p",href:"https://www.sailpoint.com/partners/become-partner/"},"here"),".")),(0,i.kt)(o.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"discuss"},"Discuss"),(0,i.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,i.kt)("p",null,"To learn more about ISC and discuss it with SailPoint Developer Community members, go to the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/c/isc/6"},"SailPoint Developer Community Forum"),"."))}h.isMDXComponent=!0}}]);