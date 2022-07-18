"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[9792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"discover",title:"Discover Richie",sidebar_label:"Discover Richie"},c=void 0,s={unversionedId:"discover",id:"discover",title:"Discover Richie",description:"Learning Management Systems (LMS) are great tools for hosting and playing interactive online",source:"@site/../docs/discover.md",sourceDirName:".",slug:"/discover",permalink:"/docs/next/discover",draft:!1,tags:[],version:"current",lastUpdatedBy:"Samuel Paccoud - France Universit\xe9 Num\xe9rique",lastUpdatedAt:1650036023,formattedLastUpdatedAt:"Apr 15, 2022",frontMatter:{id:"discover",title:"Discover Richie",sidebar_label:"Discover Richie"},sidebar:"docs",next:{title:"Start your own site",permalink:"/docs/next/cookiecutter"}},p={},u=[{value:"Quick preview",id:"quick-preview",level:2},{value:"Start your own site",id:"start-your-own-site",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Learning Management Systems")," (LMS) are great tools for hosting and playing interactive online\ncourses and MOOCs."),(0,o.kt)("p",null,"However, if you need to build a complete website with flexible content to aggregate your courses,\nin several languages and from different sources, ",(0,o.kt)("strong",{parentName:"p"},"you will soon need a CMS"),"."),(0,o.kt)("p",null,'At "France Universit\xe9 Num\xe9rique", we wanted to build an OpenSource portal with ',(0,o.kt)("inlineCode",{parentName:"p"},"Python")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Django"),". That's why we built ",(0,o.kt)("inlineCode",{parentName:"p"},"Richie")," on top of ",(0,o.kt)("a",{parentName:"p",href:"https://www.django-cms.org"},"DjangoCMS"),", one of\nthe best CMS on the market, as a toolbox to easily create full fledged websites with a catalog of\nonline courses."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of richie demo site",src:n(37013).Z,width:"2034",height:"1550"})),(0,o.kt)("p",null,"Among the features that ",(0,o.kt)("inlineCode",{parentName:"p"},"Richie")," offers out of the box:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"multi-lingual by default,"),(0,o.kt)("li",{parentName:"ul"},"advanced access rights and moderation,"),(0,o.kt)("li",{parentName:"ul"},"catalog of courses synchronized with one or more ",(0,o.kt)("inlineCode",{parentName:"li"},"LMS")," instances,"),(0,o.kt)("li",{parentName:"ul"},"search engine based on ",(0,o.kt)("inlineCode",{parentName:"li"},"Elasticsearch")," and pre-configured to offer full-text queries,\nmulti-facetting, auto-complete,..."),(0,o.kt)("li",{parentName:"ul"},"flexible custom pages for courses, organizations, categories, teachers, blog posts,\nprograms (and their inter-relations),"),(0,o.kt)("li",{parentName:"ul"},"Extensible with any third-party ",(0,o.kt)("inlineCode",{parentName:"li"},"DjangoCMS")," plugin or any third-party ",(0,o.kt)("inlineCode",{parentName:"li"},"Django")," application.")),(0,o.kt)("h2",{id:"quick-preview"},"Quick preview"),(0,o.kt)("p",null,"If you're looking for a quick preview of ",(0,o.kt)("inlineCode",{parentName:"p"},"Richie"),", you can take a look and have a tour of\n",(0,o.kt)("inlineCode",{parentName:"p"},"Richie")," on our dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://demo.richie.education"},"demo site"),"."),(0,o.kt)("p",null,"It is connected back-to-back with a demo of OpenEdX running on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfun/openedx-docker"},"OpenEdX Docker"),"."),(0,o.kt)("p",null,"Two users are available for testing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"admin: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin@example.com"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"admin")),(0,o.kt)("li",{parentName:"ul"},"student: ",(0,o.kt)("inlineCode",{parentName:"li"},"edx@example.com"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"edx"))),(0,o.kt)("p",null,"The database is regularly flushed."),(0,o.kt)("h2",{id:"start-your-own-site"},"Start your own site"),(0,o.kt)("p",null,"The next step after discovering Richie on the demo is to start your own project. We provide a\nproduction-ready template based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/audreyr/cookiecutter"},"Cookiecutter")," that\nallows you to generate your project in seconds."),(0,o.kt)("p",null,"Follow the guide on ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/cookiecutter"},"starting your own Richie site with Cookiecutter"),"."),(0,o.kt)("p",null,"Once you created a new site, you will be able to fully customize it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"override any Django template or portion of template,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/frontend-overrides"},"override ReactJS components"),","),(0,o.kt)("li",{parentName:"ul"},"override some css rules or rebuild the whole css with your own variables and customizations,"),(0,o.kt)("li",{parentName:"ul"},"add any ",(0,o.kt)("a",{parentName:"li",href:"https://www.django-cms.org"},"DjangoCMS")," plugin or feature,"),(0,o.kt)("li",{parentName:"ul"},"add any ",(0,o.kt)("a",{parentName:"li",href:"https://djangopackages.org"},"Django third-party application"),".")))}m.isMDXComponent=!0},37013:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demo-screenshot-53942dc373545f15ea8033f3f21f30a7.jpg"}}]);