"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21867],{60194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var c=n(87462),a=(n(67294),n(3905));const o={id:"account-delete-customizer",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","Account Delete"],description:"Intercept the account delete command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",tags:["Connectivity","Connector Command"]},i=void 0,l={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete-customizer",title:"Account Delete",description:"Intercept the account delete command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-delete.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"account-delete-customizer",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","Account Delete"],description:"Intercept the account delete command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-delete",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Create",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-create"},next:{title:"Account Disable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-disable"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountDeleteInput",id:"example-stdaccountdeleteinput",level:3},{value:"Example StdAccountDeleteOutput",id:"example-stdaccountdeleteoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-delete command",id:"before-account-delete-command",level:3},{value:"After account-delete command",id:"after-account-delete-command",level:3}],r={toc:d},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,c.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use these commands to intercept the ",(0,a.kt)("a",{parentName:"p",href:"../../commands/account-delete"},"account-delete")," command."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdAccountDeleteInput")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdAccountDeleteOutput")))),(0,a.kt)("h3",{id:"example-stdaccountdeleteinput"},"Example StdAccountDeleteInput"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"example-stdaccountdeleteoutput"},"Example StdAccountDeleteOutput"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n}\n")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("h3",{id:"before-account-delete-command"},"Before account-delete command"),(0,a.kt)("p",null,"Use this logic to implement the command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    .beforeStdAccountDelete(async (context: Context, input: StdAccountDeleteInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned. "),(0,a.kt)("h3",{id:"after-account-delete-command"},"After account-delete command"),(0,a.kt)("p",null,"Use this logic to implement the command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    .afterStdAccountDelete(async (context: Context, output: StdAccountDeleteOutput) => {\n        logger.info(`Running after account delete`)\n        return output\n    })\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}m.isMDXComponent=!0}}]);