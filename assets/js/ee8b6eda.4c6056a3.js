"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77919],{16825:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=o(87462),r=(o(67294),o(3905));const n={id:"go-sdk-delete",title:"Delete resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","delete"],description:"Learn how to delete resources with the Golang SDK in this guide.",slug:"/tools/sdk/go/delete",tags:["SDK","Software Development Kit"]},i=void 0,a={unversionedId:"tools/sdk/go/go-sdk-delete",id:"tools/sdk/go/go-sdk-delete",title:"Delete resources with the Go SDK",description:"Learn how to delete resources with the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/deleting-resources.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/delete",permalink:"/docs/tools/sdk/go/delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/deleting-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"},{label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:4,frontMatter:{id:"go-sdk-delete",title:"Delete resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","delete"],description:"Learn how to delete resources with the Golang SDK in this guide.",slug:"/tools/sdk/go/delete",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/update"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/paginate"}},l={},d=[],p={toc:d},u="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is an example script that searches for the Workgroup created in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/sdk/go/create"},"Create a resource")," by name and calls the delete method to remove it from your environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "context"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n workgroup, r, err := apiClient.Beta.GovernanceGroupsApi.ListWorkgroups(ctx).Filters(`name eq "DB Access Governance Group"`).Execute()\n\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when retrieving workgroup`: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n\n response, errorMessage := apiClient.Beta.GovernanceGroupsApi.DeleteWorkgroup(ctx, *workgroup[0].Id).Execute()\n\n if errorMessage != nil {\n  fmt.Fprintf(os.Stderr, "Error when updating workgroup`: %v\\n", errorMessage)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", response)\n }\n\n fmt.Fprintf(os.Stdout, "Resource Deleted: %v\\n", response.StatusCode)\n\n}\n')),(0,r.kt)("p",null,"To run the code, run this command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"go run sdk.go\n")),(0,r.kt)("p",null,"The deletionStatus is returned by the SDK with a value of 204."))}g.isMDXComponent=!0}}]);