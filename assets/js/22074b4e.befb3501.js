"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[46492],{55711:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=i(87462),s=(i(67294),i(3905));const n={id:"plugin-xml-artifacts",title:"XML Artifacts",pagination_label:"XML Artifacts",sidebar_label:"XML Artifacts",sidebar_position:6,sidebar_class_name:"plugin_developer_guide_xml_artifacts",keywords:["plugin"],description:"IdentityIQ Plugin XML Artifacts",slug:"/iiq/plugin-developer-guide/xml-artifacts",tags:["plugin","guide","identityiq"]},r="XML Artifacts",l={unversionedId:"iiq/plugin-developer-guide/chapter-6/plugin-xml-artifacts",id:"iiq/plugin-developer-guide/chapter-6/plugin-xml-artifacts",title:"XML Artifacts",description:"IdentityIQ Plugin XML Artifacts",source:"@site/docs/iiq/plugin-developer-guide/chapter-6/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-6",slug:"/iiq/plugin-developer-guide/xml-artifacts",permalink:"/docs/iiq/plugin-developer-guide/xml-artifacts",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-6/index.md",tags:[{label:"plugin",permalink:"/docs/tags/plugin"},{label:"guide",permalink:"/docs/tags/guide"},{label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1713343659,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:6,frontMatter:{id:"plugin-xml-artifacts",title:"XML Artifacts",pagination_label:"XML Artifacts",sidebar_label:"XML Artifacts",sidebar_position:6,sidebar_class_name:"plugin_developer_guide_xml_artifacts",keywords:["plugin"],description:"IdentityIQ Plugin XML Artifacts",slug:"/iiq/plugin-developer-guide/xml-artifacts",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"UI Elements",permalink:"/docs/iiq/plugin-developer-guide/ui-elements"},next:{title:"Java Classes - Rest Resources",permalink:"/docs/iiq/plugin-developer-guide/java-classes-rest-resources"}},o={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,s.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"xml-artifacts"},"XML Artifacts"),(0,s.kt)("p",null,"Any IdentityIQ objects required as part of a plugin must be represented in XML artifacts. This can mean something as small as a single new SPRight object, such as the 'ViewTodoPluginIcon', or a complex workflow or rule. The mechanism used to import these artifacts during installation is the same as any other IdentityIQ object import, so the normal import actions are also available: merge, include, execute, logConfig."),(0,s.kt)("p",null,"You can directly develop these XML artifacts in the build folder or in the IdentityIQ UI. You can then export them either by using the console or by copying and pasting them from the build's debug. "),(0,s.kt)("p",null,"When you're developing in the UI and then migrating the artifacts to your build folder, it is important to strip out some of the metadata that IdentityIQ attaches to XML objects when they're first created. First and foremost, you should remove the 'id' attribute assigned by 'Hibernate'. Then remove any other hibernate ID value references. For this reason, it is preferable to export the artifacts by using the IdentityIQ console command: './iiq export -clean'"),(0,s.kt)("p",null,"Everything in the 'import' folder is imported - the SailPoint objects can be separated into individual files or combined into a single file. When a plugin is uninstalled, the imported XML artifacts remain in the IdentityIQ database (not deleted), but the .zip archive where the plugin files are loaded from is removed from the 'spt_file_bucket' and 'spt_persisted_file' tables."),(0,s.kt)("p",null,"The development of regular IdentityIQ objects is beyond the scope of this document, but many helpful resources are available:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/space/2068"},"Technical White Papers - IdentityIQ")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/docs/DOC-3375"},"BeanShell Developer's Guide for IdentityIQ")))}c.isMDXComponent=!0}}]);