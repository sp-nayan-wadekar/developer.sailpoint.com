"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9817],{52144:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(87462),r=a(67294),l=a(86010),i=a(35281),s=a(53438),c=a(48596),o=a(39960),m=a(95999),d=a(44996);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_JACu"};function p(){const e=(0,d.default)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:b.breadcrumbHomeIcon})))}const h={breadcrumbsContainer:"breadcrumbsContainer_k3Z9"};function f(e){let{children:t,href:a,isLast:n}=e;const l="breadcrumbs__link";return n?r.createElement("span",{className:l,itemProp:"name"},t):a?r.createElement(o.default,{className:l,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:l},t)}function v(e){let{children:t,active:a,index:i,addMicrodata:s}=e;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function E(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,l.default)(i.k.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(f,{href:t.href,isLast:n},t.label))})))):null}},6105:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(67294),r=a(86010),l=a(53438),i=a(39960),s=a(13919),c=a(95999);const o={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=a(99603),d=a(21702);function u(e){let{href:t,children:a}=e;return n.createElement(i.default,{href:t,className:(0,r.default)("card padding--lg",o.cardContainer)},a)}function b(e){let{href:t,icon:a,title:l,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.default)("text--truncate",o.cardTitle),title:l},a,l),i&&n.createElement("p",{className:o.cardDescription,title:i},i))}function p(e){let{item:t}=e;const a=(0,l.Wl)(t);return a?n.createElement(b,{href:a,icon:n.createElement(m.G,{icon:d.cC_,className:o.docCardIcon}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const a=(0,s.Z)(t.href)?n.createElement(m.G,{icon:d.FL8,className:o.docCardIcon}):n.createElement(m.G,{icon:d.wlW,className:o.docCardIcon}),r=(0,l.xz)(t.docId??void 0);return n.createElement(b,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const a=(0,l.jA)();return n.createElement(E,{items:a.items,className:t})}function E(e){const{items:t,className:a}=e;if(!t)return n.createElement(v,e);const i=(0,l.MN)(t);return n.createElement("section",{className:(0,r.default)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},62561:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(67294),r=a(10833),l=a(53438),i=a(44996),s=a(6105),c=a(8093),o=a(12651),m=a(34070),d=a(52144),u=a(62757);const b={generatedIndexPage:"generatedIndexPage_T6_4",list:"list_Rt8U",title:"title_xydH"};function p(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.default)(t.image)})}function h(e){let{categoryGeneratedIndex:t}=e;const a=(0,l.jA)();return n.createElement("div",{className:b.generatedIndexPage},n.createElement(o.default,null),n.createElement(d.default,null),n.createElement(m.default,null),n.createElement("header",null,n.createElement(u.Z,{as:"h1",className:b.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(s.Z,{items:a.items,className:b.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(c.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function f(e){return n.createElement(n.Fragment,null,n.createElement(p,e),n.createElement(h,e))}},8093:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(67294),l=a(95999),i=a(86010),s=a(39960);function c(e){const{permalink:t,title:a,subLabel:n,isNext:l}=e;return r.createElement(s.default,{className:(0,i.default)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},34070:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),r=a(86010),l=a(95999),i=a(35281),s=a(74477);function c(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.default)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},12651:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(67294),r=a(86010),l=a(52263),i=a(39960),s=a(95999),c=a(80143),o=a(35281),m=a(60373),d=a(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.default,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,l.default)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,c.Jo)(s),f=u??(v=h).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,r.default)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:f.path,onClick:()=>d(h.name)})))}function f(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}}}]);