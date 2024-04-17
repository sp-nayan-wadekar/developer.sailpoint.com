"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[87201],{6105:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(67294),r=s(86010),n=s(53438),c=s(39960),i=s(13919),o=s(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=s(99603),u=s(21702);function h(e){let{href:t,children:s}=e;return a.createElement(c.default,{href:t,className:(0,r.default)("card padding--lg",l.cardContainer)},s)}function m(e){let{href:t,icon:s,title:n,description:c}=e;return a.createElement(h,{href:t},a.createElement("h2",{className:(0,r.default)("text--truncate",l.cardTitle),title:n},s,n),c&&a.createElement("p",{className:l.cardDescription,title:c},c))}function p(e){let{item:t}=e;const s=(0,n.Wl)(t);return s?a.createElement(m,{href:s,icon:a.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const s=(0,i.Z)(t.href)?a.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):a.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),r=(0,n.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const s=(0,n.jA)();return a.createElement(v,{items:s.items,className:t})}function v(e){const{items:t,className:s}=e;if(!t)return a.createElement(y,e);const c=(0,n.MN)(t);return a.createElement("section",{className:(0,r.default)("row",s)},c.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},18272:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=s(87462),r=(s(67294),s(3905)),n=s(6105),c=s(53438);const i={id:"scheduled-search",title:"Scheduled Search",description:"Scheduled Search",custom_edit_url:null},o=void 0,l={unversionedId:"api/v3/scheduled-search",id:"api/v3/scheduled-search",title:"Scheduled Search",description:"Scheduled Search",source:"@site/docs/api/v3/scheduled-search.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/scheduled-search",permalink:"/docs/api/v3/scheduled-search",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scheduled-search",title:"Scheduled Search",description:"Scheduled Search",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Execute a saved search by ID",permalink:"/docs/api/v3/execute-saved-search"},next:{title:"Create a new scheduled search",permalink:"/docs/api/v3/create-scheduled-search"}},d={},u=[],h={toc:u},m="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement scheduled search functionality.\nWith scheduled search functionality in place, users can run saved search queries on their tenants on a schedule, and Identity Security Cloud emails them the search results.\nUsers can also share these search results with other users by email by adding those users as subscribers, or those users can subscribe themselves. "),(0,r.kt)("p",null,'One of the greatest benefits of saving searches is the ability to run those searches on a schedule.\nThis is essential for organizations to constantly detect any changes to user information or access throughout their tenants and across all their sources.\nFor example, the manager Amanda Ross can schedule a saved search "manager.name:amanda.ross AND attributes.location:austin" on a schedule to regularly stay aware of changes with the Austin employees reporting to her.\nIdentity Security Cloud emails her the search results when the search runs, so she can work on other tasks instead of actively running this search.'),(0,r.kt)("p",null,"In Identity Security Cloud, scheduling a search involves a subscription.\nUsers can create a subscription for a saved search and schedule it to run daily, weekly, or monthly (you can only use one schedule option at a time).\nThe user can add other identities as subscribers so when the scheduled search runs, the subscribers and the user all receive emails. "),(0,r.kt)("p",null,"By default, subscriptions exclude detailed results from the emails, for security purposes.\nIncluding detailed results about user access in an email may expose sensitive information.\nHowever, the subscription creator can choose to include the information in the emails.  "),(0,r.kt)("p",null,"By default, Identity Security Cloud sends emails to the subscribers even when the searches do not return new results.\nHowever, the subscription creator can choose to suppress these empty emails. "),(0,r.kt)("p",null,"Users can also subscribe to saved searches that already have existing subscriptions so they receive emails when the searches run.\nA saved search can have up to 10 subscriptions configured at a time. "),(0,r.kt)("p",null,"The subscription creator can enable, disable, or delete the subscription. "),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/saved-searches.html#subscribing-to-saved-searches"},"Subscribing to Saved Searches")," for more information about scheduling searches and subscribing to them."),(0,r.kt)(n.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);