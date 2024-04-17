"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[44008],{662:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=s(87462),a=(s(67294),s(3905));const n={id:"access-request-postapproval",title:"Access Request Decision",pagination_label:"Access Request Decision",sidebar_label:"Access Request Decision",sidebar_class_name:"accessRequestDecision",keywords:["event","trigger","access","request","postapproval","decision","post","approval","available"],description:"Fires after an access request is approved.",slug:"/extensibility/event-triggers/triggers/access-request-decision",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},r=void 0,o={unversionedId:"extensibility/event-triggers/available/access-request-postapproval",id:"extensibility/event-triggers/available/access-request-postapproval",title:"Access Request Decision",description:"Fires after an access request is approved.",source:"@site/docs/extensibility/event-triggers/available/access-request-decision.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/access-request-decision",permalink:"/docs/extensibility/event-triggers/triggers/access-request-decision",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/access-request-decision.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"access-request-postapproval",title:"Access Request Decision",pagination_label:"Access Request Decision",sidebar_label:"Access Request Decision",sidebar_class_name:"accessRequestDecision",keywords:["event","trigger","access","request","postapproval","decision","post","approval","available"],description:"Fires after an access request is approved.",slug:"/extensibility/event-triggers/triggers/access-request-decision",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Available Event Triggers",permalink:"/docs/extensibility/event-triggers/available"},next:{title:"Access Request Dynamic Approval",permalink:"/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval"}},c={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],p={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-context"},"Event Context"),(0,a.kt)("p",null,"The SailPoint Identity Security Cloud platform now includes event triggers within the access request approval workflow. The 'Access Request Decision' event trigger provides more proactive governance and ensures users can quickly obtain needed access."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow",src:s(14361).Z,width:"1170",height:"183"})),(0,a.kt)("p",null,"When an access request is approved, some uses cases for this trigger include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notify the requester that the access request has been approved or denied."),(0,a.kt)("li",{parentName:"ul"},"Notify the administrator or system to take the appropriate provisioning actions for the requested access."),(0,a.kt)("li",{parentName:"ul"},"Notify a third party system to trigger another action (e.g. customer feedback survey, initiate another business process), or it can be used for auditing once an access request decision has been made.")),(0,a.kt)("p",null,"The 'Access Request Decision' event trigger is a flexible way to extend the access request workflow after access is approved for the requester."),(0,a.kt)("p",null,"This is an example input from this trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n  "requestedFor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requestedItemsStatus": [\n    {\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "description": "Access to engineering database",\n      "type": "ACCESS_PROFILE",\n      "operation": "Add",\n      "comment": "William needs this access to do his job.",\n      "clientMetadata": {\n        "applicationName": "My application"\n      },\n      "approvalInfo": [\n        {\n          "approvalComment": "This access looks good.  Approved.",\n          "approvalDecision": "APPROVED",\n          "approverName": "Stephen.Austin",\n          "approver": {\n            "type": "IDENTITY",\n            "id": "2c91808568c529c60168cca6f90c1313",\n            "name": "William Wilson"\n          }\n        }\n      ]\n    }\n  ],\n  "requestedBy": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n')),(0,a.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}g.isMDXComponent=!0},14361:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/access-request-postapproval-path-03f63e35625b518eb7d82fe91480af3d.png"}}]);