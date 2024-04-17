"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64463],{6105:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(67294),o=n(86010),a=n(53438),r=n(39960),c=n(13919),i=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=n(99603),p=n(21702);function m(e){let{href:t,children:n}=e;return s.createElement(r.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:a,description:r}=e;return s.createElement(m,{href:t},s.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:a},n,a),r&&s.createElement("p",{className:l.cardDescription,title:r},r))}function h(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?s.createElement(u,{href:n,icon:s.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?s.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):s.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),o=(0,a.xz)(t.docId??void 0);return s.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(f,{item:t});case"category":return s.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return s.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return s.createElement(g,e);const r=(0,a.MN)(t);return s.createElement("section",{className:(0,o.default)("row",n)},r.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(k,{item:e})))))}},53693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var s=n(87462),o=(n(67294),n(3905)),a=n(6105),r=n(53438);const c={id:"personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",custom_edit_url:null},i=void 0,l={unversionedId:"api/v3/personal-access-tokens",id:"api/v3/personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",source:"@site/docs/api/v3/personal-access-tokens.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/personal-access-tokens",permalink:"/docs/api/v3/personal-access-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete Password Sync Group by ID",permalink:"/docs/api/v3/delete-password-sync-group"},next:{title:"List Personal Access Tokens",permalink:"/docs/api/v3/list-personal-access-tokens"}},d={},p=[],m={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this API to implement personal access token (PAT) functionality.\nWith this functionality in place, users can use PATs as an alternative to passwords for authentication in Identity Security Cloud. "),(0,o.kt)("p",null,"PATs embed user information into the client ID and secret.\nThis replaces the API clients' need to store and provide a username and password to establish a connection, improving Identity Security Cloud organizations' integration security. "),(0,o.kt)("p",null,"In Identity Security Cloud, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens.\nThey must then provide a description about the token's purpose.\nThey can then select 'Create Token' at the bottom of the page to generate and view the Secret and Client ID. "),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/generate_tokens.html"},"Managing Personal Access Tokens")," for more information about PATs."),(0,o.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);