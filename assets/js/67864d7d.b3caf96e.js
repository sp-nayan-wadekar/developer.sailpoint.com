"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[10869],{6105:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),n=a(86010),i=a(53438),s=a(39960),c=a(13919),o=a(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=a(99603),u=a(21702);function h(e){let{href:t,children:a}=e;return r.createElement(s.default,{href:t,className:(0,n.default)("card padding--lg",l.cardContainer)},a)}function m(e){let{href:t,icon:a,title:i,description:s}=e;return r.createElement(h,{href:t},r.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:i},a,i),s&&r.createElement("p",{className:l.cardDescription,title:s},s))}function p(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?r.createElement(m,{href:a,icon:r.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,c.Z)(t.href)?r.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):r.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),n=(0,i.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:a,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const a=(0,i.jA)();return r.createElement(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return r.createElement(b,e);const s=(0,i.MN)(t);return r.createElement("section",{className:(0,n.default)("row",a)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},39850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),i=a(6105),s=a(53438);const c={id:"search",title:"Search",description:"Search",custom_edit_url:null},o=void 0,l={unversionedId:"api/v3/search",id:"api/v3/search",title:"Search",description:"Search",source:"@site/docs/api/v3/search.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/search",permalink:"/docs/api/v3/search",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"search",title:"Search",description:"Search",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Unsubscribe a recipient from Scheduled Search",permalink:"/docs/api/v3/unsubscribe-scheduled-search"},next:{title:"Perform Search",permalink:"/docs/api/v3/search-post"}},d={},u=[],h={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement search functionality.\nWith search functionality in place, users can search their tenants for nearly any information from throughout their organizations. "),(0,n.kt)("p",null,"Identity Security Cloud enables organizations to store user data from across all their connected sources and manage the users' access, so the ability to query and filter that data is essential.",(0,n.kt)("br",{parentName:"p"}),"\n","Its search goes through all those sources and finds the results quickly and specifically. "),(0,n.kt)("p",null,'The search query is flexible - it can be very broad or very narrow.\nThe search only returns results for searchable objects it is filtering for.\nThe following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities.\nBy default, no filter is applied, so a search for "Ad" returns both the identity "Adam.Archer" as well as the role "Administrator."'),(0,n.kt)("p",null,'Users can further narrow their results by using Identity Security Cloud\'s specific syntax and punctuation to structure their queries.\nFor example, the query "attributes.location:austin AND NOT manager.name:amanda.ross" returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.\nRefer to ',(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/building-query.html"},"Building a Search Query")," for more information about how to construct specific search queries. "),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/index.html"},"Using Search")," for more information about Identity Security Cloud's search and its different possibilities. "),(0,n.kt)("p",null,"The search feature uses Elasticsearch as a datastore and query engine.\nThe power of Elasticsearch makes this feature suitable for ad-hoc reporting.\nHowever, data from the operational databases (ex. identities, roles, events, etc) has to be ingested into Elasticsearch.\nThis ingestion process introduces a latency from when the operational data is created to when it is available in search.\nDepending on the system load, this can take a few seconds to a few minutes.\nPlease keep this latency in mind when you use search."),(0,n.kt)(i.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);