"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28367],{56405:(e,a,t)=>{t.d(a,{Z:()=>c});var r=t(67294),i=t(57273),s=t(44996);const n={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function c(e){let{children:a,diagram:t}=e;i.Z.contentLoaded();const[c,o]=r.useState(0),[d,u]=r.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[l,m]=r.useState({x:0,y:0}),[g,h]=r.useState(!1);function p(e){e.screenX?(u({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:l.x,offsetY:l.y}),m({x:l.x,y:l.y})):(u({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:l.x,offsetY:l.y}),m({x:l.x,y:l.y}))}function S(e){u({cursor:"grab",clickX:0,clickY:0})}function E(e){"grabbing"===d.cursor&&(e.screenX?m({x:d.clickX-e.screenX+d.offsetX,y:d.clickY-e.screenY+d.offsetY}):m({x:d.clickX-e.changedTouches[0].screenX+d.offsetX,y:d.clickY-e.changedTouches[0].screenY+d.offsetY}))}let f,A;return r.useEffect((()=>{let e=!1;return setTimeout((()=>{e||h(!0)}),100),()=>{e=!0}})),!0===g?(A=r.createElement("div",null),f=r.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-l.y+"px",left:-l.x+"px",width:"calc(100% + "+c+"px)",maxHeight:"1000px"}},t)):(A=r.createElement("div",null,"Diagram Loading ..."),f=r.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-l.y+"px",left:-l.x+"px",width:"calc(100% + "+c+"px)",maxHeight:"1000px"}},t)),r.createElement("div",null,r.createElement("img",{className:n.zoomIn,onClick:e=>{o(c+300)},src:(0,s.default)("/icons/magnifying-glass-plus-regular.svg")}),r.createElement("img",{className:n.zoomIn,onClick:e=>function(e){o(0),u({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),m({x:0,y:0})}(e),src:(0,s.default)("/icons/house-regular.svg")}),r.createElement("img",{className:n.zoomIn,onClick:e=>{o(c-300)},src:(0,s.default)("/icons/magnifying-glass-minus-regular.svg")}),r.createElement("div",{style:{cursor:d.cursor},className:n.mermaidContainer,onMouseMove:e=>E(e),onTouchMove:e=>E(e),onMouseDown:e=>p(e),onTouchStart:e=>p(e),onMouseUp:e=>S(),onTouchEnd:e=>S(),onMouseLeave:e=>S()},A,f))}},76261:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905)),s=t(56405);const n={id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/reporting/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},c="Secure Data Share Audit ER Diagram",o={unversionedId:"reporting/secure-data-share/secure-data-share-audit-er-diagram",id:"reporting/secure-data-share/secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",description:"Secure Data Share Audit ER Diagram",source:"@site/docs/reporting/secure-data-share/audit-er-diagram.md",sourceDirName:"reporting/secure-data-share",slug:"/reporting/sds-audit-er-diagram",permalink:"/docs/reporting/sds-audit-er-diagram",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/secure-data-share/audit-er-diagram.md",tags:[{label:"SecureDataShare",permalink:"/docs/tags/secure-data-share"},{label:"SDS",permalink:"/docs/tags/sds"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:2,frontMatter:{id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/reporting/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Secure Data Share ER Diagram",permalink:"/docs/reporting/sds-er-diagram"},next:{title:"Guides",permalink:"/docs/guides"}},d={},u=[],l={toc:u},m="wrapper";function g(e){let{components:a,...t}=e;return(0,i.kt)(m,(0,r.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"secure-data-share-audit-er-diagram"},"Secure Data Share Audit ER Diagram"),(0,i.kt)(s.Z,{diagram:'erDiagram AUDIT_EVENTS { text TENANT_ID "Unique Id for an Organization tenant" text ID PK "Unique Id of the event" timestamp_ntz CREATED "Date When the event happened" text ACTION "action taken related to the Audit Event" text TYPE "type of Audit Event,Ex: Auth, SSO, ROLE, ACCESS_REQUEST, PROVISIONING, USER_MANAGEMENT, etc." text ACTOR_NAME "Who/what performed the action, this can be an Identity or a Service name" text TARGET_NAME "Who/what the action was performed on, this can be an Identity or a Service name" text STACK "Which internal service was associated with the Audit Event" text SOURCE_NAME "Name of the Source associated with the Audit Event" text ACCOUNT_NAME "Name of Account associated with the Audit Event" text INFO "Any additional info that might be available" text SOURCE_ID "ID of the source associated with the Audit Event" text OPERATION "Operation happened examples include EMAIL, FORWARD, UPDATE, REQUEST, etc." text STATUS "What was the status of the Audit Event, examples include PASSED, FAILED, TERMINATED, etc." timestamp_ntz SYNC_DATE "Date Audit Event Synced" }',mdxType:"MermaidViewer"}))}g.isMDXComponent=!0}}]);