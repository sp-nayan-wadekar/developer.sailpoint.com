"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[4701],{30497:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),c=(n(67294),n(3905));const o={id:"account-read-customizer",title:"Account Read",pagination_label:"Account Read",sidebar_label:"Account Read",keywords:["connectivity","connectors","Account Read"],description:"Intercept the account read command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-read",tags:["Connectivity","Connector Command"]},i=void 0,d={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-read-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-read-customizer",title:"Account Read",description:"Intercept the account read command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-read.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-read",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-read.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{id:"account-read-customizer",title:"Account Read",pagination_label:"Account Read",sidebar_label:"Account Read",keywords:["connectivity","connectors","Account Read"],description:"Intercept the account read command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-read",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account List",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-list"},next:{title:"Account Unlock",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-unlock"}},r={},u=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountReadInput",id:"example-stdaccountreadinput",level:3},{value:"Example StdAccountReadOutput",id:"example-stdaccountreadoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-read command",id:"before-account-read-command",level:3},{value:"After account-read command",id:"after-account-read-command",level:3}],s={toc:u},m="wrapper";function l(t){let{components:e,...n}=t;return(0,c.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"overview"},"Overview"),(0,c.kt)("p",null,"Use these commands to intercept the ",(0,c.kt)("a",{parentName:"p",href:"../../commands/account-read"},"account-read")," command."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,c.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountReadInput")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountReadOutput")))),(0,c.kt)("h3",{id:"example-stdaccountreadinput"},"Example StdAccountReadInput"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,c.kt)("h3",{id:"example-stdaccountreadoutput"},"Example StdAccountReadOutput"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,c.kt)("h2",{id:"implementation"},"Implementation"),(0,c.kt)("h3",{id:"before-account-read-command"},"Before account-read command"),(0,c.kt)("p",null,"Use this logic to implement the command: "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"    .beforeStdAccountRead(async (context: Context, input: StdAccountReadInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,c.kt)("h3",{id:"after-account-read-command"},"After account-read command"),(0,c.kt)("p",null,"Use this logic to implement the command: "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"    .afterStdAccountRead(async (context: Context, output: StdAccountReadOutput) => {\n        logger.info(`Running after account read for account ${output.identity}`)\n        return output\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}l.isMDXComponent=!0}}]);