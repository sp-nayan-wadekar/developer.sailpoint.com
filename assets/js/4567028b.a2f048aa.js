"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53341],{6105:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(67294),s=n(86010),a=n(53438),r=n(39960),o=n(13919),l=n(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=n(99603),u=n(21702);function p(e){let{href:t,children:n}=e;return i.createElement(r.default,{href:t,className:(0,s.default)("card padding--lg",c.cardContainer)},n)}function d(e){let{href:t,icon:n,title:a,description:r}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,s.default)("text--truncate",c.cardTitle),title:a},n,a),r&&i.createElement("p",{className:c.cardDescription,title:r},r))}function h(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?i.createElement(d,{href:n,icon:i.createElement(m.G,{icon:u.cC_,className:c.docCardIcon}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?i.createElement(m.G,{icon:u.FL8,className:c.docCardIcon}):i.createElement(m.G,{icon:u.wlW,className:c.docCardIcon}),s=(0,a.xz)(t.docId??void 0);return i.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return i.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return i.createElement(g,e);const r=(0,a.MN)(t);return i.createElement("section",{className:(0,s.default)("row",n)},r.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(y,{item:e})))))}},73776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=n(87462),s=(n(67294),n(3905)),a=n(6105),r=n(53438);const o={id:"entitlements",title:"Entitlements",description:"Entitlements",custom_edit_url:null},l=void 0,c={unversionedId:"api/beta/entitlements",id:"api/beta/entitlements",title:"Entitlements",description:"Entitlements",source:"@site/docs/api/beta/entitlements.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/entitlements",permalink:"/docs/api/beta/entitlements",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"entitlements",title:"Entitlements",description:"Entitlements",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Retrieve discovered applications for tenant",permalink:"/docs/api/beta/get-discovered-applications"},next:{title:"Gets a list of entitlements.",permalink:"/docs/api/beta/list-entitlements"}},m={},u=[],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Use this API to implement and customize entitlement functionality.\nWith this functionality in place, administrators can view entitlements and configure them for use throughout Identity Security Cloud in certifications, access profiles, and roles.\nAdministrators in Identity Security Cloud can then grant users access to the entitlements or configure them so users themselves can request access to the entitlements whenever they need them.\nWith a good approval process, this entitlement functionality allows users to gain the specific access they need on sources quickly and securely."),(0,s.kt)("p",null,"Entitlements represent access rights on sources.\nEntitlements are the most granular form of access in Identity Security Cloud.\nEntitlements are often grouped into access profiles, and access profiles themselves are often grouped into roles, the broadest form of access in Identity Security Cloud."),(0,s.kt)("p",null,"For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, 'Employees,' may represent the access all employees have at the organization, and a second, 'Developers,' may represent the access all developers have at the organization."),(0,s.kt)("p",null,"An administrator can then create a broader set of access in the form of an access profile, 'AD Developers' grouping the 'Employees' entitlement with the 'Developers' entitlement."),(0,s.kt)("p",null,"An administrator can then create an even broader set of access in the form of a role grouping the 'AD Developers' access profile with another profile, 'GitHub Developers,' grouping entitlements for the GitHub source."),(0,s.kt)("p",null,"When users only need Active Directory employee access, they can request access to the 'Employees' entitlement."),(0,s.kt)("p",null,"When users need both Active Directory employee and developer access, they can request access to the 'AD Developers' access profile."),(0,s.kt)("p",null,"When users need both the 'AD Developers' access profile and the 'GitHub Developers' access profile, they can request access to the role grouping both."),(0,s.kt)("p",null,"Administrators often use roles and access profiles within those roles to manage access so that users can gain access more quickly, but the hierarchy of access all starts with entitlements."),(0,s.kt)("p",null,"Anywhere entitlements appear, you can select them to find more information about the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Cloud Access Details: These provide details about the cloud access entitlements on cloud-enabled sources.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Permissions: Permissions represent individual units of read/write/admin access to a system.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Relationships: These list each entitlement's parent and child relationships.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Type: This is the entitlement's type. Some sources support multiple types, each with a different attribute schema."))),(0,s.kt)("p",null,"Identity Security Cloud uses entitlements in many features, including the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Certifications: Entitlements can be revoked from an identity that no longer needs them.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Roles: Roles can group access profiles which themselves group entitlements. You can grant and revoke access on a broad level with roles. Role membership criteria can grant roles to identities based on whether they have certain entitlements or attributes.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Access Profiles: Access profiles group entitlements.\nThey are the most important units of access in Identity Security Cloud.\nIdentity Security Cloud uses them in provisioning, certifications, and access requests, and administrators can configure them to grant very broad or very granular access."))),(0,s.kt)("p",null,"You cannot delete entitlements directly from Identity Security Cloud.\nEntitlements are deleted based on their inclusion in aggregations."),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/access/entitlements.html#deleting-entitlements"},"Deleting Entitlements")," more information about deleting entitlements."),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/access/entitlements.html"},"Entitlements")," for more information about entitlements."),(0,s.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);