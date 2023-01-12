"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[9758],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=t(83117),i=t(80102),r=(t(67294),t(3905)),a=["components"],l={id:"lms-connection",title:"Connecting Richie with one or more LMS",sidebar_label:"LMS connection"},s=void 0,c={unversionedId:"lms-connection",id:"version-2.17.0/lms-connection",title:"Connecting Richie with one or more LMS",description:"Connecting Richie to an LMS",source:"@site/versioned_docs/version-2.17.0/lms-connection.md",sourceDirName:".",slug:"/lms-connection",permalink:"/docs/2.17.0/lms-connection",draft:!1,tags:[],version:"2.17.0",lastUpdatedBy:"jbpenrath",lastUpdatedAt:1666962873,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"lms-connection",title:"Connecting Richie with one or more LMS",sidebar_label:"LMS connection"},sidebar:"docs",previous:{title:"I18n",permalink:"/docs/2.17.0/internationalization"},next:{title:"Web Analytics",permalink:"/docs/2.17.0/web-analytics"}},p={},u=[{value:"Connecting Richie to an LMS",id:"connecting-richie-to-an-lms",level:2},{value:"1. Displaying connection status",id:"1-displaying-connection-status",level:3},{value:"2. Seamless enrollment",id:"2-seamless-enrollment",level:3},{value:"3. Synchronizing course runs details",id:"3-synchronizing-course-runs-details",level:3},{value:"4. Joanie, the enrollment manager",id:"4-joanie-the-enrollment-manager",level:3},{value:"Development",id:"development",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"connecting-richie-to-an-lms"},"Connecting Richie to an LMS"),(0,r.kt)("p",null,"Richie can be connected to an LMS in several ways, ranging from SSO to a fully integrated\nseamless experience."),(0,r.kt)("p",null,"As of today, each approach has been implemented for OpenEdX but the same could be done for\nother LMSes like Moodle, at the cost of minor adaptations."),(0,r.kt)("h3",{id:"1-displaying-connection-status"},"1. Displaying connection status"),(0,r.kt)("p",null,"OpenEdX can be configured to allow CORS requests. Doing so allows Richie to retrieve a user's\nconnection status from OpenEdx and display the user's profile information directly on the Richie\nsite: username, dashboard url, etc."),(0,r.kt)("p",null,"In this approach, a user visiting your Richie site and trying to signup or login, is sent to the\nOpenEdX site for authentication and is redirected back to the Richie site upon successful login."),(0,r.kt)("p",null,"You can see this in action on ",(0,r.kt)("a",{parentName:"p",href:"https://www.fun-mooc.fr"},"https://www.fun-mooc.fr"),"."),(0,r.kt)("p",null,"We provide detailed instructions on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/2.17.0/displaying-connection-status"},"how to configure displaying OpenEdX connection status in Richie"),"."),(0,r.kt)("h3",{id:"2-seamless-enrollment"},"2. Seamless enrollment"),(0,r.kt)("p",null,"Thanks to OpenEdX's enrollment API, it is possible to let users enroll on course runs without\nleaving Richie."),(0,r.kt)("p",null,"You can see this in action on ",(0,r.kt)("a",{parentName:"p",href:"https://www.fun-mooc.fr"},"https://www.fun-mooc.fr"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature requires that Richie and OpenEdX be hosted on sibling domains i.e. domains that\nare both subdomains of the same root domain, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"richie.example.com")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lms.example.com"),".")),(0,r.kt)("p",null,"You should read our guide on ",(0,r.kt)("a",{parentName:"p",href:"lms-backends"},"how to use OpenEdX as LMS backend for Richie"),"."),(0,r.kt)("h3",{id:"3-synchronizing-course-runs-details"},"3. Synchronizing course runs details"),(0,r.kt)("p",null,"Course runs in Richie can be handled manually, filling all fields via the DjangoCMS front-end\nediting interface. But a better way to handle course runs is to synchronize them automatically\nfrom your LMS using the course run synchronization API."),(0,r.kt)("p",null,"Please refer to our guide on ",(0,r.kt)("a",{parentName:"p",href:"synchronizing-course-runs"},"how to synchronize course runs between Richie and OpenEdx")),(0,r.kt)("h3",{id:"4-joanie-the-enrollment-manager"},"4. Joanie, the enrollment manager"),(0,r.kt)("p",null,"For more advanced use cases, we have started a new project called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/joanie"},"Joanie")," which acts as an\nenrollment manager for Richie."),(0,r.kt)("p",null,"Authentication in Joanie is done via JWT Tokens for maximum flexibility and decoupling in\nidentity management."),(0,r.kt)("p",null,"The project started early 2021, but over time, Joanie will handle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"paid enrollments / certification"),(0,r.kt)("li",{parentName:"ul"},"micro-credentials"),(0,r.kt)("li",{parentName:"ul"},"user dashboard"),(0,r.kt)("li",{parentName:"ul"},"cohorts management (academic or B2B)"),(0,r.kt)("li",{parentName:"ul"},"multi-LMS catalogs"),(0,r.kt)("li",{parentName:"ul"},"time based enrollment")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"For development purposes, the docker-compose project provided on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie"},"Richie's code repository")," is pre-configured to connect\nwith an OpenEdx instance started with\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/openedx-docker"},"OpenEdx Docker"),", which provides a ready-to-use\ndocker-compose stack of OpenEdx in several flavors. Head over to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/openedx-docker#readme"},"OpenEdx Docker README")," for instructions on how to bootstrap an OpenEdX instance."),(0,r.kt)("p",null,"Now, start both the OpenEdX and Richie projects separately with ",(0,r.kt)("inlineCode",{parentName:"p"},"make run"),"."),(0,r.kt)("p",null,"Richie should respond on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8070"),", OpenEdx on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8073")," and both\napps should be able to communicate with each other via the network bridge defined in\ndocker-compose."),(0,r.kt)("p",null,"If you want to activate ",(0,r.kt)("a",{parentName:"p",href:"#2-seamless-enrollment"},"seamless enrollment")," locally for development,\nyou will need to set up TLS domains for both Richie and OpenEdX. To do this, head over to our\nguide on ",(0,r.kt)("a",{parentName:"p",href:"tls-connection"},"setting-up TLS connections for Richie and OpenEdX"),"."))}m.isMDXComponent=!0}}]);