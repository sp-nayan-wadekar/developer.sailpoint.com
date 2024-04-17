"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[10165],{97986:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(70989),r=n(72389);const d={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};function p(e){let{className:t,block:n,selectedValue:s,selectValue:r,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),l=p[n].value;l!==s&&(m(t),r(l))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:c},i,{className:(0,o.default)("tabs__item",d.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function u(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function m(e){const t=(0,s.Y)(e);return a.createElement("div",{className:(0,o.default)("tabs-container",d.tabList)},a.createElement(p,(0,l.Z)({},e,t)),a.createElement(u,(0,l.Z)({},e,t)))}function c(e){const t=(0,r.default)();return a.createElement(m,(0,l.Z)({key:String(t)},e))}},20984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var l=n(87462),a=(n(67294),n(3905)),o=n(97986),i=n(42425);const s={id:"powershell-sdk",title:"PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"PowerShell",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk"],description:"Easy ISC development in PowerShell.",slug:"/tools/sdk/powershell",tags:["SDK"]},r=void 0,d={unversionedId:"tools/sdk/powershell/powershell-sdk",id:"tools/sdk/powershell/powershell-sdk",title:"PowerShell SDK",description:"Easy ISC development in PowerShell.",source:"@site/docs/tools/sdk/powershell/index.mdx",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell",permalink:"/docs/tools/sdk/powershell",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/index.mdx",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:3,frontMatter:{id:"powershell-sdk",title:"PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"PowerShell",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk"],description:"Easy ISC development in PowerShell.",slug:"/tools/sdk/powershell",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/error-handling"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/getting-started"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Manually install the SDK",id:"manually-install-the-sdk",level:3},{value:"Configure",id:"configure",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Example <code>config.json</code>",id:"example-configjson",level:4},{value:"Example <code>config.json</code>",id:"example-configjson-1",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:3},{value:"Discuss",id:"discuss",level:2},{value:"Getting Started",id:"getting-started",level:2}],m={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Read this guide to learn how to use the PowerShell SDK. The PowerShell SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"You need the following to use the PowerShell SDK:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PowerShell 6.2 or greater. To learn how to install, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.4"},"Installing PowerShell"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Your tenant name in IdentityNow. To learn how to find it, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/getting-started#find-your-tenant-name"},"Getting Started"),". The SDK will use this tenant name to connect to your IdentityNow instance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A PAT with a client secret and ID. To learn how to create one in ISC, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/api_keys.html#generating-a-personal-access-token"},"Personal Access Tokens"),". The SDK will use this PAT to authenticate with the SailPoint APIs."))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CLI Assisted ",(0,a.kt)("em",null,"(Recommended)")),(0,a.kt)("p",null,"The SailPoint CLI offers a few commands that will allow you to quickly get started with the PowerShell SDK. To learn how to install and use the SailPoint CLI, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/tools/cli#get-the-cli"},"SailPoint CLI"),"."),(0,a.kt)("p",null,"Once the CLI is installed and configured, run this command to create a new PowerShell project with the PowerShell SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sail sdk init powershell\n")),(0,a.kt)("p",null,"Running the command create the structure for your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"|-- powershell-template\n|   |-- paginate.ps1\n|   |-- paginateAccounts.ps1\n|   |-- patchEntitlement.ps1\n|   |-- sdk.ps1\n|   |-- search.ps1\n|   |-- transform.ps1\n")),(0,a.kt)("p",null,"Run this command to install the required dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module -Name PSSailpoint\n")),(0,a.kt)("p",null,'The command installs the SailPoint PowerShell SDK module. You will be prompted to confirm that you want to install the module from \'PSGallery\'. Enter "A" to say "Yes to All".'),(0,a.kt)("p",null,"If you already have a version of the PowerShell SDK installed, you can install a new version side-by-side with it by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-Force")," parameter to the end of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Install-Module")," commmand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module -Name PSSailpoint -Force\n")),(0,a.kt)("p",null,"To validate that the module is installed, run this command, ",(0,a.kt)("inlineCode",{parentName:"p"},"Get-Module -ListAvailable PSSailpoint"),", and verify that the module is listed. Additionally, you can run this command, ",(0,a.kt)("inlineCode",{parentName:"p"},"Get-Command -Module PSSailpoint"),", to see the available commands included in the module."),(0,a.kt)("p",null,"The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,a.kt)("a",{parentName:"p",href:"#configure"},"Configure section"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Manual Installation"),(0,a.kt)("h3",{id:"manually-install-the-sdk"},"Manually install the SDK"),(0,a.kt)("p",null,"If access to the PowerShell Gallery isn't available, you can also install the PowerShell SDK manually. "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you manually install the module on a machine without access to the PowerShell Gallery, you will also need to manually install updates to the SDK.")),(0,a.kt)("p",null,"Follow these steps to manually install the PowerShell module:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the source code zip from the most recent release on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sailpoint-oss/powershell-sdk/releases"},"GitHub"),"."),(0,a.kt)("li",{parentName:"ol"},"Open the ZIP file, then open then folder labeled ",(0,a.kt)("inlineCode",{parentName:"li"},"powershell-sdk-x.x.x"),", with the ",(0,a.kt)("inlineCode",{parentName:"li"},"x.x.x")," representing the version you downloaded."),(0,a.kt)("li",{parentName:"ol"},"Extract the ",(0,a.kt)("inlineCode",{parentName:"li"},"PSSailpoint")," module folder inside to one of the following locations:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To install for the Current user: ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\Documents\\WindowsPowerShell\\Modules\\PSSailpoint")),(0,a.kt)("li",{parentName:"ul"},"To install for All users (requires Administrator privileges): ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\WindowsPowerShell\\Modules\\PSSailpoint")))),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"Import-Module PSSailpoint")," to import the module into the current session."),(0,a.kt)("li",{parentName:"ol"},"To validate that the module is installed, run ",(0,a.kt)("inlineCode",{parentName:"li"},"Get-Module -ListAvailable PSSailpoint")," and verify that the module is listed. Additionally, you can run ",(0,a.kt)("inlineCode",{parentName:"li"},"Get-Command -Module PSSailpoint")," to see the module's available commands.")),(0,a.kt)("p",null,"The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,a.kt)("a",{parentName:"p",href:"#configure"},"Configure section"),".")),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("p",null,"You must provide configuration to the SDK so that it can authenticate to your SailPoint tenant and make API calls. To do so, you can use a configuration file, ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),", or environment variables."),(0,a.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,a.kt)("p",null,'The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: ',(0,a.kt)("inlineCode",{parentName:"p"},"ClientID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientSecret"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseUrl"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CLI Assisted ",(0,a.kt)("em",null,"(Recommended)")),"The SailPoint CLI offers a command to generate the config.json file with your currently configured CLI credentials.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sail sdk init config\n")),(0,a.kt)("p",null,"If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," for. "),(0,a.kt)("p",null,"To pass an additional parameter that states the environment you want to configure, run this command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sail sdk init config --env devrel\n")),(0,a.kt)("h4",{id:"example-configjson"},"Example ",(0,a.kt)("inlineCode",{parentName:"h4"},"config.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ClientID": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseUrl": "https://[tenant].api.identitynow.com"\n}\n'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Manual Configuration"),(0,a.kt)("p",null,'Create a file named "config.json", and provide these key/value pairs: ',(0,a.kt)("inlineCode",{parentName:"p"},"ClientID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientSecret"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseUrl"),"."),(0,a.kt)("h4",{id:"example-configjson-1"},"Example ",(0,a.kt)("inlineCode",{parentName:"h4"},"config.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ClientID": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseUrl": "https://[tenant].api.identitynow.com"\n}\n'))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Please ensure this file is ignored in your version control system (ex. .gitignore for git)")),(0,a.kt)("h3",{id:"environment-variable-configuration"},"Environment variable configuration"),(0,a.kt)("p",null,"You can also store your configuration in environment variables."),(0,a.kt)("p",null,"To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.default,{value:"linux_mac",label:"Linux/Mac",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export SAIL_BASE_URL=https://[tenant].api.identitynow.com\nexport SAIL_CLIENT_ID=[clientID]\nexport SAIL_CLIENT_SECRET=[clientSecret]\n"))),(0,a.kt)(i.default,{value:"windows",label:"Windows PowerShell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$env:SAIL_BASE_URL=https://[tenant].api.identitynow.com\n$env:SAIL_CLIENT_ID=[clientID]\n$env:SAIL_CLIENT_SECRET=[clientSecret]\n")),(0,a.kt)("p",null,"To get your environment variables to persist across PowerShell sessions, run these commands instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://[tenant].api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','[clientID]')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','[clientSecret]')\n")))),(0,a.kt)("h2",{id:"discuss"},"Discuss"),(0,a.kt)("p",null,"You can use this SDK to build new tools that extend your ISC platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss"},"https://developer.sailpoint.com/discuss"),"! "),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started using the SDK, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/sdk/powershell/getting-started"},"Getting Started Guide"),"."))}h.isMDXComponent=!0}}]);