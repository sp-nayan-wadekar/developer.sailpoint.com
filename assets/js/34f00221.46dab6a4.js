"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76454],{88657:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const r={container:"container_hkNt",line:"line_KXFO",pulse:"pulse_pBme"};function i(){return n.createElement(n.Fragment,null,n.createElement("div",{className:r.container},n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line}),n.createElement("div",{className:r.line})))}},75672:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(67294),r=a(5060),i=a(52263);const c={featuredGridContainer:"featuredGridContainer_TaPv",gridContainer:"gridContainer_WtV6",center:"center_i0Gw",space:"space_Pc2M",noFound:"noFound_CesU",modal:"modal_cW7P",cardExit:"cardExit_yIkJ",featuredSpinnerCenter:"featuredSpinnerCenter_OmsE",spinnerCenter:"spinnerCenter_VaYI"},o={card:"card_k70r",featuredCard:"featuredCard_j_w2",thumbContainer:"thumbContainer_Emzb",cardText:"cardText_N5Vz",featuredThumbContainer:"featuredThumbContainer_mgWV",featuredCardImage:"featuredCardImage_qwqp",cardImage:"cardImage_pGNb",avatarContainer:"avatarContainer_oOaW",avatar:"avatar_hWqC",featuredTitleContainer:"featuredTitleContainer_Lavl",titleContainer:"titleContainer_sIEZ",featuredCardTitle:"featuredCardTitle_q4ZH",cardTitle:"cardTitle_HIN4",cardBody:"cardBody_aWVp",tag:"tag_tNg2",tags:"tags_JeGd"};var l=a(39960),s=a(44996);function d(e){let{featured:t,videoURL:a,thumbnail:r,title:i,body:c,avatar:d,username:m,tags:u}=e;return n.createElement(l.default,{to:a},n.createElement("div",{title:m,className:t?o.featuredCard:o.card},n.createElement("div",{className:o.cardText},n.createElement("div",{className:t?o.featuredThumbContainer:o.thumbContainer},n.createElement("img",{className:t?o.featuredCardImage:o.cardImage,src:r})),n.createElement("div",{className:t?o.featuredCardTitle:o.cardTitle},n.createElement("div",{className:o.avatarContainer},n.createElement("img",{title:m,className:o.avatar,src:(0,s.default)(d)})),n.createElement("div",{className:t?o.featuredTitleContainer:o.titleContainer},i)),n.createElement("div",{className:o.tags},u?.map(((e,t)=>n.createElement("div",{key:e,className:o.tag},e)))))))}var m=a(23625),u=a(88657),g=a(35012);function p(e){let{filterCallback:t,limit:a,featured:r}=e;const[i,o]=n.useState(),[l,s]=n.useState(!0);function p(e){const t=e.split("\n\nDescription\n"),a=t[0].trim(),n=a.split("/").pop().replace(".html","");return{videoUrl:a,description:t.length>1?t[1].trim():"",page:n}}return n.useEffect((()=>{(async()=>{let e=r?["featured"]:t.tags;const n=await(0,g.cz)(e||""),i=[];if(n.topic_list){for(const t of n.topic_list.topics)if(t.tags.length>0){let{videoUrl:e,description:a}=p(t.excerpt),o=e.replace(".html",".jpg"),s="",u="",g="";for(const n of t.posters)if(n.description.includes("Original Poster")){g=n;break}for(const t of n.users)if(t.id===g.user_id){u=t.name,s=f(t.avatar_template);break}a||(o=t.image_url),(r||!r&&!t.tags.includes("featured"))&&i.push({key:t.id,title:(d=t.title,d.length>63?d.substring(0,62)+"...":d),tags:t.tags,body:a|t.excerpt,thumbnail:o,avatar:s,username:u,url:(c=t.slug,l=t.id,(0,m.O$)()+`t/${c}/${l}`)})}}else o(void 0);var c,l,d;o(a?i.slice(0,a):i),s(!1)})(),o(void 0),s(!0)}),[t]),n.createElement("div",{className:r?null:c.center},l?n.createElement("div",{className:r?c.featuredSpinnerCenter:c.spinnerCenter},n.createElement(u.Z,null)):i&&i.length>0?n.createElement("div",{className:r?c.featuredGridContainer:c.gridContainer},i.map((function(e,t){return n.createElement(d,{featured:r,key:e.key,videoURL:e.url,thumbnail:e.thumbnail,title:e.title,body:e.body,avatar:e.avatar,tags:e.tags})}))):n.createElement("div",null,n.createElement("div",{className:c.noFound}," ","Hey there, looks like no integrations match your search criteria. Check out our"," ",n.createElement("a",{href:"https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230"},"getting started guide"),", and consider being the first to contribute this integration!")))}function f(e){return e.includes((0,m.gK)())?"https://"+(0,m.gK)()+e.replace("{size}","120"):e.replace("{size}","120")}const v={sidebar:"sidebar_fkbc",filterBy:"filterBy_xYtu",tagHeader:"tagHeader_rw16",hidden:"hidden_M2Rp",seeAll:"seeAll_BCl0",tagContainer:"tagContainer_p5hB",dropdownContainer:"dropdownContainer_ReO6",videoTypeFilter:"videoTypeFilter_X1Ay",dropdownButton:"dropdownButton_GY6R",dropdownContent:"dropdownContent_BYMj",dropdownItem:"dropdownItem_YCuX"};var h=a(96486),C=a(25108);function y(e){let{filterCallback:t}=e;const[a,r]=n.useState(),[i,c]=n.useState(),[o,l]=n.useState(!1),[s,d]=n.useState("Filter by Product"),[m,u]=n.useState("Filter by Video Type"),[p,f]=n.useState({}),[y,E]=n.useState(null),_=()=>l(!o),b=e=>{f({...p,[e.target.name]:e.target.checked});let a="";e.target.checked?a=e.target.name:(C.log("productTags",s),C.log("event.target.name",e.target.name),a=s.replace(e.target.name,""),C.log("product",a));let n=[];e.target.checked&&n.push(e.target.name),(0,h.forEach)(p,((t,r)=>{r!==e.target.name&&!0===t&&(n.push(r),a.includes(r)||(a=a+" "+r))})),y&&n.push(y),e.target.checked,d(a),""!==a&&" "!==a||d("Filter by Product"),t({tag:n})},N=e=>{const a=e.target.checked?e.target.name:null;if(E(a),e.target.checked?u(e.target.name):u("Filter by Video Type"),p){let e=[];a&&e.push(a),(0,h.forEach)(p,((t,a)=>{!0===t&&e.push(a)})),t({tag:e})}else t({tag:a})};function w(e){return"identity-security-cloud"===e?"Identity Security Cloud":"access-intelligence-center"===e?"Access Intelligence Center":"developer-days-2023-iiq"===e?"Developer Days 2023 iiq":e}return n.useEffect((()=>{(async()=>{const e=new Set,t=new Set,a=await(0,g.NJ)();if(a.extras.tag_groups)for(const n of a.extras.tag_groups){if("Products"===n.name)for(const t of n.tags)e.add(t.name);if("Video Library"===n.name)for(const e of n.tags)t.add(e.name)}r(Array.from(e)),c(Array.from(t))})()}),[]),a?n.createElement("div",{className:v.tagContainer},n.createElement("div",null,n.createElement("div",{className:v.dropdownContainer},n.createElement("button",{onClick:_,className:v.dropdownButton},s),o&&n.createElement("div",{className:v.dropdownContent},a.map((function(e,t){return n.createElement("div",{className:v.dropdownItem,key:t},n.createElement("input",{type:"checkbox",id:e,name:e,checked:p[e]||!1,onChange:b}),n.createElement("label",{htmlFor:e},w(e)))}))))),n.createElement("div",{className:v.videoTypeFilter},n.createElement("div",{className:v.dropdownContainer},n.createElement("button",{onClick:_,className:v.dropdownButton},m),o&&n.createElement("div",{className:v.dropdownContent},i.map((function(e,t){return n.createElement("div",{className:v.dropdownItem,key:t},n.createElement("input",{type:"checkbox",id:e,name:e,checked:y===e,onChange:N}),n.createElement("label",{htmlFor:e},w(e)))})))))):n.createElement("div",null)}const E={videosCardContainer:"videosCardContainer_OZ04",featuredVideo:"featuredVideo_Xz5U",videosTitle:"videosTitle_lBaH",titleContainer:"titleContainer_o3Pt",mainCard:"mainCard_NWea",featuredGettingStartedText:"featuredGettingStartedText_Ky5Q",gettingStartedText:"gettingStartedText_FHen",gettingStartedOne:"gettingStartedOne_EX3w",gettingStartedTwo:"gettingStartedTwo_AhYF",gettingStartedThree:"gettingStartedThree_qCYC",bold:"bold_qMjr",video:"video_EhLl",contentContainer:"contentContainer_mcA2",carousel:"carousel_icEe",videoSideBar:"videoSideBar_iYib"};function _(){const[e,t]=n.useState({tags:[]}),{siteConfig:a}=(0,i.default)();return n.createElement(r.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."},n.createElement("main",null,n.createElement("div",null,n.createElement("div",{className:E.titleContainer}),n.createElement("div",null,n.createElement("div",{className:E.mainCard},n.createElement("div",{className:E.contentContainer},n.createElement("div",{className:E.gettingStartedText},n.createElement("div",{className:E.gettingStartedOne},"Video Library"),n.createElement("div",{className:E.gettingStartedThree},n.createElement("span",null,"Our video library is a collection of educational videos from our Developer Relations team, live streams, conferences, and other community members.")," ",n.createElement("br",null),n.createElement("br",null),n.createElement("a",{href:"https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations&title=Proposal%20for%20Developer%20Community%20Video&body=Write%20your%20request%20here."},"Contribute to our library \u2192"))),n.createElement("div",{className:E.featuredGettingStartedText},n.createElement("div",{className:E.gettingStartedOne},"Featured"))),n.createElement("div",{className:E.featuredVideo,title:"Featured Video"},n.createElement(p,{filterCallback:e,limit:1,featured:!0}))),n.createElement("div",{className:E.videosCardContainer},n.createElement("div",{className:E.videoSideBar},n.createElement(y,{selectedCategory:e,filterCallback:e=>{t({tags:e.tag})}})),n.createElement(p,{filterCallback:e}))))))}},35012:(e,t,a)=>{a.d(t,{F2:()=>l,FO:()=>u,IN:()=>c,KG:()=>i,NJ:()=>p,RS:()=>g,ZS:()=>o,cz:()=>m,u3:()=>s,vw:()=>d});var n=a(23625),r=a(25108);async function i(){try{const e=await fetch((0,n.O$)()+"top.json");return await e.json()}catch(e){return[]}}async function c(e,t,a){try{if(e){const e=await fetch((0,n.O$)()+"groups/expert_ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}{const e=await fetch((0,n.O$)()+"groups/ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}}catch(r){return[]}}async function o(e){try{const t=await fetch((0,n.O$)()+"user-cards.json?user_ids="+e.join(","));return await t.json()}catch(t){return[]}}async function l(){try{const e=await fetch((0,n.O$)()+"leaderboard/14.json");return await e.json()}catch(e){return[]}}async function s(e){let t="",a={users:[],topic_list:{topics:[]}};t=e.length<1?(0,n.O$)()+"c/content/community-blog/125.json":(0,n.O$)()+`tags/c/content/community-blog/${e}.json`;try{let n=0;for(;;){const r=0===n?t:`${t}${e.length>1?"&":"?"}page=${n}`,i=await fetch(r),c=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(c.topic_list.topics),a.users=a.users.concat(c.users),c.topic_list.topics.length<30)break;n++}return a}catch(r){return[]}}async function d(e){let t=(0,n.O$)()+"g/"+e+".json";try{const e=await fetch(t);return await e.json()}catch(a){return r.log(a),[]}}async function m(e){let t="",a={users:[],topic_list:{topics:[]}};e?(e.length<1&&(t=(0,n.O$)()+"c/content/video-library/127.json"),1===e.length&&(t=(0,n.O$)()+`/tags/c/content/video-library/127/${e}.json`),2===e.length&&(t=(0,n.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}`),3===e.length&&(t=(0,n.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}%2B${e[2]}`)):t=(0,n.O$)()+"c/content/video-library/l/latest.json";try{let n=0;for(;;){const r=0===n?t:`${t}${e.length>1?"&":"?"}page=${n}`,i=await fetch(r),c=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(c.topic_list.topics),a.users=a.users.concat(c.users),c.topic_list.topics.length<30)break;n++}return a}catch(r){return[]}}async function u(e,t){let a="colab";t&&"colab"!=t&&(a=a+"/"+t);let r="";r=e?(0,n.O$)()+"c/"+a+"/l/latest.json?tags="+e:(0,n.O$)()+"c/"+a+"/l/latest.json";try{const e=await fetch(r);return await e.json()}catch(i){return[]}}async function g(e){try{const t=await fetch((0,n.O$)()+"raw/"+e+".json");return await t.text()}catch(t){return[]}}async function p(){try{const e=await fetch((0,n.O$)()+"tags.json");return await e.json()}catch(e){return[]}}}}]);