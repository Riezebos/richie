"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[8150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={id:"django-react-interop",title:"Connecting React components with Django",sidebar_label:"Django & React"},s=void 0,p={unversionedId:"django-react-interop",id:"version-1.13/django-react-interop",title:"Connecting React components with Django",description:"richie is a hybrid app, that relies on both HTML pages generated by the backend (Django/DjangoCMS) based on templates, and React components rendered on the frontend for parts of these HTML pages.",source:"@site/versioned_docs/version-1.13/django-react-interop.md",sourceDirName:".",slug:"/django-react-interop",permalink:"/docs/1.13/django-react-interop",draft:!1,tags:[],version:"1.13",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"django-react-interop",title:"Connecting React components with Django",sidebar_label:"Django & React"},sidebar:"version-1.13/docs",previous:{title:"Native installation",permalink:"/docs/1.13/native-installation"},next:{title:"Building the frontend",permalink:"/docs/1.13/building-the-frontend"}},c={},d=[{value:"Rendering components",id:"rendering-components",level:2},{value:"Example",id:"example",level:3},{value:"Passing properties to components",id:"passing-properties-to-components",level:2},{value:"Example",id:"example-1",level:3},{value:"Built-in components",id:"built-in-components",level:2},{value:"&lt;RootSearchSuggestField /&gt;",id:"rootsearchsuggestfield-",level:3},{value:"&lt;Search /&gt;",id:"search-",level:3},{value:"&lt;UserLogin /&gt;",id:"userlogin-",level:3},{value:"Context",id:"context",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"richie")," is a hybrid app, that relies on both HTML pages generated by the backend (Django/DjangoCMS) based on templates, and React components rendered on the frontend for parts of these HTML pages."),(0,r.kt)("h2",{id:"rendering-components"},"Rendering components"),(0,r.kt)("p",null,"We needed a convention that enables us to easily mark those areas of the page that React needs to take control of, and to tell React which component to load there."),(0,r.kt)("p",null,"We decided to use a specific CSS class name along with its modifiers. We reserve the ",(0,r.kt)("inlineCode",{parentName:"p"},"richie-react")," class and its modified children for this purpose."),(0,r.kt)("p",null,"Additionally, components including internationalized data or strings need to know which locale to use. All uses of this ",(0,r.kt)("inlineCode",{parentName:"p"},"richie-react")," class can be paired with a data-attribute specifying the locale. If not defined, ",(0,r.kt)("inlineCode",{parentName:"p"},"en")," is used as a default."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here is how we would call a ",(0,r.kt)("inlineCode",{parentName:"p"},"<FeaturedCourses />")," component from a template, a plugin or a snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div\n  class="richie-react richie-react--featured-courses"\n  data-locale="fr-ca"\n></div>\n')),(0,r.kt)("p",null,"When our JS is loaded, it will recognize this as an element it must take over, and render the FeaturedCourses component in this element."),(0,r.kt)("h2",{id:"passing-properties-to-components"},"Passing properties to components"),(0,r.kt)("p",null,'Some of Richie\'s React components, and some of those you might want to write, require arguments or "props" to be passed to them. We could work around that by adding API routes to fetch these props, but that would add complexity and reduce performance.'),(0,r.kt)("p",null,"Instead, we decided to normalize a simpler way for components in Richie to accept input from the Django template that is adding them to the DOM."),(0,r.kt)("p",null,"We can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"data-props")," attribute on the element with the ",(0,r.kt)("inlineCode",{parentName:"p"},"richie-react")," class and write a JSON object as the value for this attribute. Each key-value pair in this object will be passed as a ",(0,r.kt)("inlineCode",{parentName:"p"},"propName={propValue}")," to the React component."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"Here is how we would pass a ",(0,r.kt)("inlineCode",{parentName:"p"},'categories={[ "sociology", "anthropology" ]}')," prop to our ",(0,r.kt)("inlineCode",{parentName:"p"},"<FeaturedCourses />")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div\n  class="richie-react richie-react--featured-courses"\n  data-locale="fr-ca"\n  data-props=\'{"categories": ["sociology", "anthropology"]}\'\n></div>\n')),(0,r.kt)("p",null,"When the component is rendered, it will be passed a ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," prop with the relevant categories."),(0,r.kt)("h2",{id:"built-in-components"},"Built-in components"),(0,r.kt)("p",null,"Here are the React component that Richie comes with and uses out of the box."),(0,r.kt)("h3",{id:"rootsearchsuggestfield-"},"<","RootSearchSuggestField /",">"),(0,r.kt)("p",null,"Renders a course search bar, like the one that appears in the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Search")," page."),(0,r.kt)("p",null,"Interactions will send the user to the ",(0,r.kt)("inlineCode",{parentName:"p"},"courseSearchPageUrl")," url passed in the props, including the selected filter and/or search terms."),(0,r.kt)("p",null,"It also autocompletes user input with course names and allows users to go directly to the course page if they select a course name among the selected results."),(0,r.kt)("p",null,"Props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"courseSearchPageUrl")," ","[required]"," \u2014 URL for the course search page users should be sent to when they select a suggestion that is not a course, or launch a search with text terms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," ","[optional]"," \u2014 see ",(0,r.kt)("a",{parentName:"li",href:"#context"},"context"),".")),(0,r.kt)("h3",{id:"search-"},"<","Search /",">"),(0,r.kt)("p",null,"Renders the full-page course search engine interface, including the search bar, search results, and filters pane."),(0,r.kt)("p",null,"NB: the ",(0,r.kt)("inlineCode",{parentName:"p"},"Search")," Django template basically renders just this page. If you need this, use it instead. It is included here for completeness' sake."),(0,r.kt)("p",null,"Props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageTitle")," ","[required]"," \u2014 title for the page, will be used inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")," in the rendered component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," ","[required]"," \u2014 see ",(0,r.kt)("a",{parentName:"li",href:"#context"},"context"),".")),(0,r.kt)("h3",{id:"userlogin-"},"<","UserLogin /",">"),(0,r.kt)("p",null,"Renders a component that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"/users/whoami")," endpoint to determine if the user is logged in and show them the appropriate interface: Signup/Login buttons or their name along with a Logout button."),(0,r.kt)("p",null,"Props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loginUrl")," ","[required]",' \u2014 the URL where the user is sent when they click on "Log in";'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logoutUrl")," ","[required]"," \u2014 a link that logs the user out and redirects them (can be the standard django logout URL);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signupUrl")," ","[required]",' \u2014 the URL where the user is sent when they click on "Sign up".')),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"All built-in components for Richie accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," prop, that may be required or optional, depending on the component."),(0,r.kt)("p",null,"It is used to pass app-wide contextual information pertaining to the current instance, deployment or theme of Richie."),(0,r.kt)("p",null,"Here is the expected shape for this object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    assets: {\n        // SVG sprite used throughout Richie\n        icons: "/path/to/icons/sprite.svg"\n    }\n}\n')),(0,r.kt)("p",null,"Note that it might be expanded in further versions of Richie."))}h.isMDXComponent=!0}}]);