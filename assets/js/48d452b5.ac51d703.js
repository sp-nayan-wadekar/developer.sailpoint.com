"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80653],{97404:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294);const n={sidebar:"sidebar_hCur",toggleContainer:"toggleContainer_E6f3",title:"title_hpIF",tagHeader:"tagHeader_Ne2t",tagContainer:"tagContainer_r4x4",hidden:"hidden_iCv6",seeAll:"seeAll_yyVT",dropdownContainer:"dropdownContainer_p0Tz",buttonText:"buttonText_Ydg8",dropdownButton:"dropdownButton_CLtt",dropdownContent:"dropdownContent_cFC9",dropdownItem:"dropdownItem_DedU",toggleWrapper:"toggleWrapper_PUZL",toggleCheckbox:"toggleCheckbox_EZBx",toggleLabel:"toggleLabel_mody",toggleBackground:"toggleBackground_OJVR",toggleText:"toggleText_v8Ut",toggleTextLeft:"toggleTextLeft_kole",toggleTextRight:"toggleTextRight_BV8x"};var i=a(35012);function l(e){let{filterCallback:t,defaultValue:a}=e;const[l,c]=r.useState();let o="Identityiq"===a;const[s,d]=r.useState(o),u=()=>{d(!s),t(s?"identity-security-cloud":"Identityiq")};return r.useEffect((()=>{(async()=>{const e=await(0,i.NJ)(),t=[];for(const a of e.extras.tag_groups)if(45===a.id)for(const e of a.tags)t.push(e.text);c(t)})()}),[]),l?r.createElement("div",{className:n.toggleContainer},r.createElement("div",{className:n.toggleWrapper},r.createElement("input",{type:"checkbox",id:"product-toggle",className:n.toggleCheckbox,checked:s,onChange:u}),r.createElement("label",{htmlFor:"product-toggle",className:n.toggleLabel},r.createElement("div",{className:n.toggleBackground}),r.createElement("span",{className:n.toggleTextLeft},"Identity Security Cloud"),r.createElement("span",{className:n.toggleTextRight},"IdentityIQ")))):r.createElement("div",null)}},88657:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294);const n={container:"container_hkNt",line:"line_KXFO",pulse:"pulse_pBme"};function i(){return r.createElement(r.Fragment,null,r.createElement("div",{className:n.container},r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line}),r.createElement("div",{className:n.line})))}},73154:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(67294),n=a(39960),i=(a(52263),a(5060));const l={blogTitle:"blogTitle_R9wB",titleContainer:"titleContainer_nud_"};var c=a(44996);function o(){return r.createElement("div",{className:l.titleContainer})}const s={blogContainer:"blogContainer_Ubu4",mainCard:"mainCard_gHK6",featuredGettingStartedText:"featuredGettingStartedText_G7zt",gettingStartedText:"gettingStartedText_gM3f",gettingStartedOne:"gettingStartedOne_nWUf",gettingStartedTwo:"gettingStartedTwo_KtMe",gettingStartedThree:"gettingStartedThree_XxJO",bold:"bold_pkZu",gridContainer:"gridContainer_MGcE",video:"video_qPcm",blogSidbarContainer:"blogSidbarContainer_q0Dw",featuredBlogContainer:"featuredBlogContainer_zii9",contentContainer:"contentContainer_IwWe",carousel:"carousel_okJo"},d={featuredGridContainer:"featuredGridContainer_GfCO",gridContainer:"gridContainer_TBO5",center:"center_ZJiD",noFound:"noFound_amSq",featuredSpinnerCenter:"featuredSpinnerCenter_Qa_a",spinnerCenter:"spinnerCenter_pAIK",featuredCenter:"featuredCenter_e7xh"},u={card:"card_fiHq",featuredCard:"featuredCard_N1rp",featuredCardImage:"featuredCardImage_kTLJ",cardText:"cardText_Aec9",cardImage:"cardImage__aWv",featuredCardTitle:"featuredCardTitle_N5_I",cardTitle:"cardTitle_gvE0",cardUser:"cardUser_Tn7N",cardFace:"cardFace_l62T",featuredCardFace:"featuredCardFace_T1PZ",cardName:"cardName_vesf",cardCreatorTitle:"cardCreatorTitle_Lezm",featuredCardName:"featuredCardName_fV25",featuredCardCreatorTitle:"featuredCardCreatorTitle_Ep3D",split:"split_j8dz"};function g(e){let{featured:t,link:a,title:i,tags:l,creatorImage:o,creatorTitle:s,image:d,excerpt:g,name:m,views:f,replies:p,readTime:_}=e;return r.createElement(n.default,{to:a},r.createElement("div",{className:t?u.featuredCard:u.card},r.createElement("div",{className:u.cardText},r.createElement("img",{className:t?u.featuredCardImage:u.cardImage,src:(0,c.default)(d)}),r.createElement("div",{className:u.split}),r.createElement("div",{className:t?u.featuredCardTitle:u.cardTitle},i),r.createElement("div",{className:u.cardUser},r.createElement("img",{className:t?u.featuredCardFace:u.cardFace,src:(0,c.default)(o)}),r.createElement("div",{className:u.cardName},m),r.createElement("div",{className:u.cardCreatorTitle},s),r.createElement("div",null)))))}var m=a(88657),f=a(23625),p=a(35012);function _(e){let{filterCallback:t,limit:a,featured:n}=e;const[i,l]=r.useState(),[c,o]=r.useState(!0);return r.useEffect((()=>{(async()=>{t||(t=["identity-security-cloud"]),n&&(t=["featured"]);const e=await(0,p.u3)(t.join("+")),r=[],i=[];if(e.topic_list.topics){for(const t of e.topic_list.topics)if(t.tags.length>0){let a={};for(let r of t.posters)if(r.description.includes("Original Poster"))for(let t of e.users)if(t.id===r.user_id){if(i.find((e=>e.group===t.primary_group_name)))t.title=i.find((e=>e.group===t.primary_group_name)).title;else if(t.primary_group_name){let e=await(0,p.vw)(t.primary_group_name);i.push({group:t.primary_group_name,title:e.group.title}),t.title=e.group.title}a=t}57!==t.category_id&&(n||!n&&!t.tags.includes("featured"))&&r.push(await C(t,a))}l(a?r.slice(0,a):r)}else l(void 0);o(!1)})(),l(void 0),o(!0)}),[t]),r.createElement("div",{className:n?d.featuredCenter:d.center},c?r.createElement("div",{className:n?d.featuredSpinnerCenter:d.spinnerCenter},r.createElement(m.Z,null)):i&&i.length>0?r.createElement("div",{className:n?d.featuredGridContainer:d.gridContainer},i.map(((e,t)=>{return r.createElement(g,{featured:n,key:e.link,id:t+e.link,excerpt:e.excerpt,name:e.name,tags:e.tags,link:e.link,image:e.image,title:(a=e.title,a.length>63?a.substring(0,62)+"...":a),views:e.views,replies:e.replies,readTime:e.readTime,creatorImage:e.creatorImage,creatorTitle:e.creatorTitle});var a}))):r.createElement("div",{className:d.noFound},"No Blogposts Found with the Given Search Criteria"))}async function C(e,t){return{name:t.name,excerpt:h(e.excerpt),creatorImage:v(t.avatar_template),creatorTitle:t.title,tags:e.tags,image:e.image_url,link:(0,f.O$)()+"t/"+e.slug+"/"+e.id,title:e.title,views:e.views,liked:e.like_count,replies:e.posts_count,solution:e.has_accepted_answer,readTime:parseInt(2.5)}}function v(e){return e.includes((0,f.gK)())?"https://"+(0,f.gK)()+e.replace("{size}","120"):e.replace("{size}","120")}function h(e){return e.length>150?e.slice(0,150)+"...":e.replace("&hellip;","")}var E=a(97404);function y(){const[e,t]=r.useState(["identity-security-cloud"]);return r.createElement(i.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."},r.createElement("main",{className:s.main},r.createElement(o,null),r.createElement("div",null,r.createElement("div",{className:s.mainCard},r.createElement("div",{className:s.contentContainer},r.createElement("div",{className:s.gettingStartedText},r.createElement("div",{className:s.gettingStartedOne},"Community Blog"),r.createElement("div",{className:s.gettingStartedThree},r.createElement("span",null,"Our community blog is a collection of technical writings provided by members of our community\u2014your peers\u2014discussing detailed walkthroughs, challenges faced (and how they were overcome), and thoughts on managing identity in a meaningful way.")," ",r.createElement("br",null),r.createElement("br",null),r.createElement("a",{href:"https://developer.sailpoint.com/discuss/t/guide-for-writing-blog-posts/10277"},"Become an author \u2192")))),r.createElement("div",{className:s.featuredBlogContainer,title:"Featured Blog"},r.createElement("div",{className:s.featuredGettingStartedText},r.createElement("div",{className:s.gettingStartedOne},"Featured")),r.createElement(_,{filterCallback:e,limit:1,featured:!0})))),r.createElement("div",{className:s.blogContainer},r.createElement("div",{className:s.blogSidbarContainer},r.createElement(E.Z,{filterCallback:e=>{var a=[];const r=a.indexOf(e);-1!==r?a.splice(r,1):a.push(e),t(a)}})),r.createElement("div",{className:s.blogCardContainer},r.createElement(_,{filterCallback:e})))))}},35012:(e,t,a)=>{a.d(t,{F2:()=>o,FO:()=>g,IN:()=>l,KG:()=>i,NJ:()=>f,RS:()=>m,ZS:()=>c,cz:()=>u,u3:()=>s,vw:()=>d});var r=a(23625),n=a(25108);async function i(){try{const e=await fetch((0,r.O$)()+"top.json");return await e.json()}catch(e){return[]}}async function l(e,t,a){try{if(e){const e=await fetch((0,r.O$)()+"groups/expert_ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}{const e=await fetch((0,r.O$)()+"groups/ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}}catch(n){return[]}}async function c(e){try{const t=await fetch((0,r.O$)()+"user-cards.json?user_ids="+e.join(","));return await t.json()}catch(t){return[]}}async function o(){try{const e=await fetch((0,r.O$)()+"leaderboard/14.json");return await e.json()}catch(e){return[]}}async function s(e){let t="",a={users:[],topic_list:{topics:[]}};t=e.length<1?(0,r.O$)()+"c/content/community-blog/125.json":(0,r.O$)()+`tags/c/content/community-blog/${e}.json`;try{let r=0;for(;;){const n=0===r?t:`${t}${e.length>1?"&":"?"}page=${r}`,i=await fetch(n),l=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(l.topic_list.topics),a.users=a.users.concat(l.users),l.topic_list.topics.length<30)break;r++}return a}catch(n){return[]}}async function d(e){let t=(0,r.O$)()+"g/"+e+".json";try{const e=await fetch(t);return await e.json()}catch(a){return n.log(a),[]}}async function u(e){let t="",a={users:[],topic_list:{topics:[]}};e?(e.length<1&&(t=(0,r.O$)()+"c/content/video-library/127.json"),1===e.length&&(t=(0,r.O$)()+`/tags/c/content/video-library/127/${e}.json`),2===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}`),3===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}%2B${e[2]}`)):t=(0,r.O$)()+"c/content/video-library/l/latest.json";try{let r=0;for(;;){const n=0===r?t:`${t}${e.length>1?"&":"?"}page=${r}`,i=await fetch(n),l=await i.json();if(a.topic_list.topics=a.topic_list.topics.concat(l.topic_list.topics),a.users=a.users.concat(l.users),l.topic_list.topics.length<30)break;r++}return a}catch(n){return[]}}async function g(e,t){let a="colab";t&&"colab"!=t&&(a=a+"/"+t);let n="";n=e?(0,r.O$)()+"c/"+a+"/l/latest.json?tags="+e:(0,r.O$)()+"c/"+a+"/l/latest.json";try{const e=await fetch(n);return await e.json()}catch(i){return[]}}async function m(e){try{const t=await fetch((0,r.O$)()+"raw/"+e+".json");return await t.text()}catch(t){return[]}}async function f(){try{const e=await fetch((0,r.O$)()+"tags.json");return await e.json()}catch(e){return[]}}}}]);