"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[10899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),l=["components"],r={id:"web-analytics",title:"Add web analytics to your site",sidebar_label:"Web Analytics"},s=void 0,c={unversionedId:"web-analytics",id:"version-2.14.1/web-analytics",title:"Add web analytics to your site",description:"Richie has native support to Google Analytics and Google Tag Manager Web Analytics solutions.",source:"@site/versioned_docs/version-2.14.1/web-analytics.md",sourceDirName:".",slug:"/web-analytics",permalink:"/docs/2.14.1/web-analytics",draft:!1,tags:[],version:"2.14.1",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"web-analytics",title:"Add web analytics to your site",sidebar_label:"Web Analytics"},sidebar:"version-2.14.1/docs",previous:{title:"LMS connection",permalink:"/docs/2.14.1/lms-connection"},next:{title:"Installation",permalink:"/docs/2.14.1/installation"}},p={},u=[{value:"Google Analytics",id:"google-analytics",level:2},{value:"Google Tag Manager",id:"google-tag-manager",level:2},{value:"Location of the web analytics javascript",id:"location-of-the-web-analytics-javascript",level:2},{value:"Add a new Web Analytics solution",id:"add-a-new-web-analytics-solution",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Richie has native support to ",(0,o.kt)("a",{parentName:"p",href:"#google-analytics"},"Google Analytics")," and ",(0,o.kt)("a",{parentName:"p",href:"#google-tag-manager"},"Google Tag Manager")," Web Analytics solutions.\nThe purpose of this file is to explain how you can enable one of the supported Web Analytics providers\nand how you can extend Richie with an alternative solution."),(0,o.kt)("h2",{id:"google-analytics"},"Google Analytics"),(0,o.kt)("p",null,"Next, it is described how you can configure the ",(0,o.kt)("strong",{parentName:"p"},"Google Analytics")," on your Richie site."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"WEB_ANALYTICS_ID")," setting, with your Google Analytics tracking id code.")),(0,o.kt)("p",null,"The current Google Analytics implementation also includes custom dimensions. Those dimensions permit you to create further analyses on Google Analytics or even use them to create custom reports.\nCustom dimensions with a value as example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Organizations codes - ",(0,o.kt)("inlineCode",{parentName:"li"},"UNIV_LISBON | UNIV_PORTO")),(0,o.kt)("li",{parentName:"ul"},"Course code - ",(0,o.kt)("inlineCode",{parentName:"li"},"COURSE_XPTO")),(0,o.kt)("li",{parentName:"ul"},"Course runs titles - ",(0,o.kt)("inlineCode",{parentName:"li"},"Summer edition | Winter edition")),(0,o.kt)("li",{parentName:"ul"},"Course runs resource links - ",(0,o.kt)("inlineCode",{parentName:"li"},"http://example.edx:8073/courses/course-v1:edX+DemoX+Demo_Course/info")),(0,o.kt)("li",{parentName:"ul"},"Page title - ",(0,o.kt)("inlineCode",{parentName:"li"},"Introduction to Programming"))),(0,o.kt)("h2",{id:"google-tag-manager"},"Google Tag Manager"),(0,o.kt)("p",null,"Next, it is described how you can configure the ",(0,o.kt)("strong",{parentName:"p"},"Google Tag Manager")," on your Richie site."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"WEB_ANALYTICS_ID")," setting, with your Google Tag Manager tracking id code."),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"WEB_ANALYTICS_PROVIDER")," setting with the ",(0,o.kt)("inlineCode",{parentName:"li"},"google_tag_manager")," value.")),(0,o.kt)("p",null,"The current Google Tag Manager implementation also defines a custom dimensions like the ",(0,o.kt)("a",{parentName:"p",href:"#google-analytics"},"Google Analytics"),"."),(0,o.kt)("h2",{id:"location-of-the-web-analytics-javascript"},"Location of the web analytics javascript"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"WEB_ANALYTICS_LOCATION")," settings to decide where do you want to put the Javascript code. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," (",(0,o.kt)("strong",{parentName:"p"},"default")," value), to put the Javascript on HTML header, or ",(0,o.kt)("inlineCode",{parentName:"p"},"footer"),", to put the Javascript code to the bottom of the body."),(0,o.kt)("h2",{id:"add-a-new-web-analytics-solution"},"Add a new Web Analytics solution"),(0,o.kt)("p",null,"In this section it's described how you can add support to a different Web Analytics solution."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"override the ",(0,o.kt)("inlineCode",{parentName:"li"},"richie/web_analytics.html")," template"),(0,o.kt)("li",{parentName:"ul"},"define the ",(0,o.kt)("inlineCode",{parentName:"li"},"WEB_ANALYTICS_ID")," setting with your tracking identification"),(0,o.kt)("li",{parentName:"ul"},"define the ",(0,o.kt)("inlineCode",{parentName:"li"},"WEB_ANALYTICS_PROVIDER")," setting with a value that represents your solution, eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"my-custom-web-analytics-software")),(0,o.kt)("li",{parentName:"ul"},"optionally change ",(0,o.kt)("inlineCode",{parentName:"li"},"WEB_ANALYTICS_LOCATION")," setting with ",(0,o.kt)("inlineCode",{parentName:"li"},"head")," (default) or ",(0,o.kt)("inlineCode",{parentName:"li"},"footer")," value")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of a ",(0,o.kt)("inlineCode",{parentName:"li"},"richie/web_analytics.html")," file customization that prints to the browser console log the dimension keys and values:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<script type=\"text/javascript\">\n    {% for dimension_key, dimension_value_list in WEB_ANALYTICS.DIMENSIONS.items %}\n        console.log(\"dimension: index '{{forloop.counter}}' with key '{{ dimension_key }}' with value '{{ dimension_value_list|join:\" | \" }}'\");\n    {% endfor %}\n<\/script>\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dimension: index '1' with key 'organizations_codes' with value 'COMPATIBLE-EVEN-KEELED-UTILIZATION-19 | FOCUSED-NEXT-GENERATION-FUNCTIONALITIES-22 | UNIVERSAL-MODULAR-LOCAL-AREA-NETWORK-23'\ndimension: index '2' with key 'course_code' with value '00017'\ndimension: index '3' with key 'course_runs_titles' with value 'Run 0'\ndimension: index '4' with key 'course_runs_resource_links' with value ''\ndimension: index '5' with key 'page_title' with value 'Business-focused zero-defect application'\n")),(0,o.kt)("p",null,"But you can also contribute to Richie by creating a pull request to add support for a different web analytics solution. In this last case, you have to edit directly the ",(0,o.kt)("inlineCode",{parentName:"p"},"richie/web_analytics.html")," template."),(0,o.kt)("p",null,"Example of an override of the ",(0,o.kt)("inlineCode",{parentName:"p"},"richie/web_analytics.html")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'{% block web_analytics %}\n    {% if WEB_ANALYTICS_ID %} \n        {% if WEB_ANALYTICS_PROVIDER == "my_custom_web_analytics_software" %}\n            <script type="text/javascript" src="{% static \'myapp/js/custom_web_analytics_software.js\' %}">\n            <script type="text/javascript">\n                // javascript code that startups the custom web analytics software\n            <\/script>\n        {% endif %}\n    {% endif %}\n{% endblock web_analytics %}\n')),(0,o.kt)("p",null,"The web analytics dimensions are being added to the django context using the ",(0,o.kt)("inlineCode",{parentName:"p"},"WEB_ANALYTICS.DIMENSIONS")," dictionary. Because each dimension value could have multiple values, then each dictionary value is a list. Web analytics dimensions dictionary keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"organizations_codes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"course_code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"course_runs_titles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"course_runs_resource_links")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"page_title"))),(0,o.kt)("p",null,"Example, if you only need the organization codes on your custom ",(0,o.kt)("inlineCode",{parentName:"p"},"richie/web_analytics.html")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'<script type="text/javascript">\n    console.log("organization codes: \'{{ WEB_ANALYTICS.DIMENSIONS.organizations_codes |join:" | " }}");\n<\/script>\n')),(0,o.kt)("p",null,"The frontend code also sends ",(0,o.kt)("strong",{parentName:"p"},"events")," to the web analytics provider.\nRichie sends events when the user is enrolled on a course run.\nTo support different providers, you need to create a similar file\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"src/frontend/js/utils/api/web-analytics/google_analytics.ts")," and change the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/frontend/js/utils/api/web-analytics/index.ts")," file to include that newer provider."))}m.isMDXComponent=!0}}]);