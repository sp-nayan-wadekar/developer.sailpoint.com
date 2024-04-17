"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45134],{21799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var s=r(87462),o=(r(67294),r(3905));const n={id:"typescript-sdk-error-handling",title:"Error Handling with The TypeScript SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","error"],description:"Learn how to configure error handling when using the TypeScript SDK.",slug:"/tools/sdk/typescript/error-handling",tags:["SDK"]},i=void 0,a={unversionedId:"tools/sdk/typescript/typescript-sdk-error-handling",id:"tools/sdk/typescript/typescript-sdk-error-handling",title:"Error Handling with The TypeScript SDK",description:"Learn how to configure error handling when using the TypeScript SDK.",source:"@site/docs/tools/sdk/typescript/error-handling.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/error-handling",permalink:"/docs/tools/sdk/typescript/error-handling",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/error-handling.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:8,frontMatter:{id:"typescript-sdk-error-handling",title:"Error Handling with The TypeScript SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","error"],description:"Learn how to configure error handling when using the TypeScript SDK.",slug:"/tools/sdk/typescript/error-handling",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Retries",permalink:"/docs/tools/sdk/typescript/retries"},next:{title:"RDK",permalink:"/docs/tools/rule-development-kit"}},l={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The TypeScript SDK uses the Axios library to handle HTTP requests. Axios will throw an error for any response status that falls outside the range of 2xx. A non-2xx response will immediately halt the program and produce a stack trace. Axios provides two methods for gracefully handling error responses from an API."),(0,o.kt)("p",null,"The first method is to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," function to intercept any unsuccessful response and take actions on the results, such as logging the message or performing additional actions before exiting the program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},"// Catch any non 2xx response and log the error message and metadata\nlet transforms = await api.listTransforms().catch(function (error) {\n    console.log(error.response.data);\n    console.log(error.response.status);\n    console.log(error.response.headers);\n})\n")),(0,o.kt)("p",null,"The second method is to define which HTTP status codes should throw an error for a given request using the ",(0,o.kt)("inlineCode",{parentName:"p"},"validateStatus")," option. This gives you an opportunity to recover from a bad request without exiting the program."),(0,o.kt)("p",null,"If you don't want the program to exit for 4xx response codes, you can use this configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},"// Resolve only if the status code is less than 500\nlet transforms = await api.listTransforms({filters: 'id eq'}, {validateStatus: function (status) { return status < 500 }})\n\nif (transforms.status === 200) {\n    console.log(transforms)\n} else if (transforms.status === 400 ) {\n    console.log(\"The filter is invalid.  Continuing execution.\")\n}\n")),(0,o.kt)("p",null,"If you don't want the program to exit for any error response, you can use this configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"await api.listTransforms({}, {validateStatus: function (status) { return true }})\n")))}u.isMDXComponent=!0}}]);