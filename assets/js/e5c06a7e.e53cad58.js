"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[82837],{9099:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={id:"go-sdk-paginate",title:"Paginate results with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Paginate Results",sidebar_position:5,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","paginate"],description:"Learn how to paginate results with the Golang SDK in this guide.",slug:"/tools/sdk/go/paginate",tags:["SDK","Software Development Kit"]},s=void 0,r={unversionedId:"tools/sdk/go/go-sdk-paginate",id:"tools/sdk/go/go-sdk-paginate",title:"Paginate results with the Go SDK",description:"Learn how to paginate results with the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/pagination.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/paginate",permalink:"/docs/tools/sdk/go/paginate",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/pagination.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"},{label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:5,frontMatter:{id:"go-sdk-paginate",title:"Paginate results with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Paginate Results",sidebar_position:5,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","paginate"],description:"Learn how to paginate results with the Golang SDK in this guide.",slug:"/tools/sdk/go/paginate",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/delete"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/search"}},l={},p=[],g={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,i.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/standard-collection-parameters/#paginating-results"},"Paginating Results"),"."),(0,o.kt)("p",null,"Pagination is implemented with the SDK in the following code block on line 18:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package main\n\nimport (\n "context"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n v3 "github.com/sailpoint-oss/golang-sdk/v3"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n resp, r, err := sailpoint.PaginateWithDefaults[v3.Account](apiClient.V3.AccountsApi.ListAccounts(ctx))\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `PaginateWithDefaults[v3.Account]``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n // response from `ListAccounts`: []Account\n fmt.Fprintf(os.Stdout, "First response from `PaginateWithDefaults[v3.Account]`: %v\\n", resp[0].Name)\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PaginateWithDefaults")," function takes a return type, ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.Account"),", and the list method to invoke, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"ListAccounts")," from the AccountsApi. By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"PaginateWithDefaults")," method gets 10000 results at an increment of 250."),(0,o.kt)("p",null,"To change the limit and increment, you can use the available 'Paginate' function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "context"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n v3 "github.com/sailpoint-oss/golang-sdk/v3"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n resp, r, err := sailpoint.Paginate[v3.Account](apiClient.V3.AccountsApi.ListAccounts(ctx), 0, 250, 150000)\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `Paginate[v3.Account]``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n // response from `ListAccounts`: []Account\n fmt.Fprintf(os.Stdout, "First response from `Paginate[v3.Account]`: %v\\n", resp[0].Name)\n}\n')),(0,o.kt)("p",null,"You must provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"Paginate")," function with the following: the return type, ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.Account"),", the list endpoint, ",(0,o.kt)("inlineCode",{parentName:"p"},"ListAccounts"),", the initial offset, ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", the increment, ",(0,o.kt)("inlineCode",{parentName:"p"},"250"),", and the limit, ",(0,o.kt)("inlineCode",{parentName:"p"},"150000"),"."))}d.isMDXComponent=!0}}]);