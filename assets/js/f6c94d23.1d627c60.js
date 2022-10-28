"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[67168],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],l={id:"displaying-connection-status",title:"Displaying OpenEdX connection status in Richie",sidebar_label:"Displaying connection status"},s=void 0,p={unversionedId:"displaying-connection-status",id:"version-2.14.0/displaying-connection-status",title:"Displaying OpenEdX connection status in Richie",description:"This guide explains how to configure Richie and OpenEdX to share the OpenEdX connection status",source:"@site/versioned_docs/version-2.14.0/displaying-connection-status.md",sourceDirName:".",slug:"/displaying-connection-status",permalink:"/docs/2.14.0/displaying-connection-status",draft:!1,tags:[],version:"2.14.0",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"displaying-connection-status",title:"Displaying OpenEdX connection status in Richie",sidebar_label:"Displaying connection status"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Allow redirects",id:"allow-redirects",level:2},{value:"Configure authentication delegation",id:"configure-authentication-delegation",level:2},{value:"BASE_URL",id:"base_url",level:3},{value:"BACKEND",id:"backend",level:3},{value:"PROFILE_URLS",id:"profile_urls",level:3}],d={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains how to configure Richie and OpenEdX to share the OpenEdX connection status\nand display profile information for the logged-in user in Richie."),(0,r.kt)("p",null,"In Richie, the only users that are actually authenticated on the DjangoCMS instance producing the\nsite, are editors and staff users. Your instructors and learners will not have user accounts on\nRichie, but authentication is delegated to a remote service that can be OpenEdX, KeyCloack, or\nyour own centralized identity management service."),(0,r.kt)("p",null,"In the following, we will explain how to use OpenEdX as your authentication delegation service."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Richie will need to make CORS requests to the OpenEdX instance. As a consequence, you need to\nactivate CORS requests on your OpenEdX instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'FEATURES = {\n    ...\n    "ENABLE_CORS_HEADERS": True,\n}\n')),(0,r.kt)("p",null,"Then, make sure the following settings are set as follows on your OpenEdX instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'CORS_ALLOW_CREDENTIALS = True\nCORS_ALLOW_INSECURE = False\nCORS_ORIGIN_ALLOW_ALL = False\nCORS_ORIGIN_WHITELIST: ["richie.example.com"]  # The domain on which Richie is hosted\n')),(0,r.kt)("h2",{id:"allow-redirects"},"Allow redirects"),(0,r.kt)("p",null,"When Richie sends the user to the OpenEdX instance for authentication, and wants OpenEdX to\nredirect the user back to Richie after a successful login or signup, it prefixes the path with\n",(0,r.kt)("inlineCode",{parentName:"p"},"/richie"),". Adding the following rule to your Nginx server (or equivalent) and replacing the\nrichie host by yours will allow this redirect to follow through to your Richie instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rewrite ^/richie/(.*)$ https://richie.example.com/$1 permanent;\n")),(0,r.kt)("h2",{id:"configure-authentication-delegation"},"Configure authentication delegation"),(0,r.kt)("p",null,"Now, on your Richie instance, you need to configure the service to which Richie will delegate\nauthentication using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RICHIE_AUTHENTICATION_DELEGATION")," setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'RICHIE_AUTHENTICATION_DELEGATION = {\n    "BASE_URL": "https://lms.example.com",\n    "BACKEND": "openedx-hawthorn",\n    "PROFILE_URLS": {\n        "dashboard": {\n            "label": _("Dashboard"),\n            "href": "{base_url:s}/dashboard",\n        },\n    },\n}\n')),(0,r.kt)("p",null,"The following should help you understand how to configure this setting:"),(0,r.kt)("h3",{id:"base_url"},"BASE_URL"),(0,r.kt)("p",null,"The base url on which the OpenEdX instance is hosted. This is used to construct the complete url\nof the login/signup pages to which the frontend application will send the user for authentication."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: string"),(0,r.kt)("li",{parentName:"ul"},"Required: Yes"),(0,r.kt)("li",{parentName:"ul"},"Value: for example ",(0,r.kt)("a",{parentName:"li",href:"https://lms.example.com"},"https://lms.example.com"))),(0,r.kt)("h3",{id:"backend"},"BACKEND"),(0,r.kt)("p",null,"The name of the ReactJS backend to use for the targeted LMS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: string"),(0,r.kt)("li",{parentName:"ul"},"Required: Yes"),(0,r.kt)("li",{parentName:"ul"},"Value: Richie ships with the following Javascript backends:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openedx-dogwood"),": backend for OpenEdX versions equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"dogwood")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"eucalyptus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openedx-hawthorn"),": backend for OpenEdX versions equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"hawthorn")," or higher"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openedx-fonzie"),": backend for OpenEdX via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openfun/fonzie"},"Fonzie"),"\n(extra user info and JWT tokens)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base"),": fake backend for development purposes")))),(0,r.kt)("h3",{id:"profile_urls"},"PROFILE_URLS"),(0,r.kt)("p",null,"Mapping definition of custom links presented to the logged-in user as a dropdown menu when he/she\nclicks on his/her username in Richie's page header."),(0,r.kt)("p",null,"Links order will be respected to build the dropdown menu."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: dictionary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Required: No")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Value: For example, to emulate the links proposed in OpenEdX, you can configure this setting\nas follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    {\n        "dashboard": {\n            "label": _("Dashboard"),\n            "href": "{base_url:s}/dashboard",\n        },\n        "profile": {\n            "label": _("Profile"),\n            "href": "{base_url:s}/u/(username)",\n        },\n        "account": {\n            "label": _("Account"),\n            "href": "{base_url:s}/account/settings",\n        }\n    }\n')),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"base_url")," variable is used as a Python format parameter and will be replaced by the value\nset for the above authentication delegation ",(0,r.kt)("inlineCode",{parentName:"p"},"BASE_URL")," setting."),(0,r.kt)("p",{parentName:"li"},"  If you need to bind user data into a url, wrap the property between brackets. For example, the\nlink configured above for the profile page ",(0,r.kt)("inlineCode",{parentName:"p"},"{base_url:s}/u/(username)")," would point to\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://lms.example.com/u/johndoe")," for a user carrying the username ",(0,r.kt)("inlineCode",{parentName:"p"},"johndoe"),"."))))}h.isMDXComponent=!0}}]);