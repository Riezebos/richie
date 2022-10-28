"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[11690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),s=["components"],o={id:"accessibility-testing",title:"Automated accessibility checks",sidebar_label:"Accessibility testing"},l=void 0,c={unversionedId:"accessibility-testing",id:"version-2.0.1/accessibility-testing",title:"Automated accessibility checks",description:"Richie includes automated accessibility checks built through a Cypress end-to-end testing infrastructure.",source:"@site/versioned_docs/version-2.0.1/accessibility-testing.md",sourceDirName:".",slug:"/accessibility-testing",permalink:"/docs/2.0.1/accessibility-testing",draft:!1,tags:[],version:"2.0.1",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"accessibility-testing",title:"Automated accessibility checks",sidebar_label:"Accessibility testing"},sidebar:"version-2.0.1/docs",previous:{title:"Contributing guide",permalink:"/docs/2.0.1/contributing-guide"},next:{title:"CSS Guidelines",permalink:"/docs/2.0.1/css-guidelines"}},p={},u=[{value:"Testing environment setup",id:"testing-environment-setup",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Documentation reference",id:"documentation-reference",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Richie includes automated accessibility checks built through a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cypress")," end-to-end testing infrastructure."),(0,a.kt)("p",null,"Automated accessibility checks can only surface around 30% of possible problems in any given page. This does not mean they are not useful, but they cannot replace human audits and developer proficiency."),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"axe")," to run these checks. You can find more about axe on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core"},(0,a.kt)("inlineCode",{parentName:"a"},"axe-core")," GitHub repository"),"."),(0,a.kt)("h2",{id:"testing-environment-setup"},"Testing environment setup"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"Cypress")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"axe")," are used through their respective NPM packages. This means everything goes through ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," commands. You need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," installed locally to run the tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd tests_e2e\nyarn install\n")),(0,a.kt)("p",null,"This should install everything you need."),(0,a.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,a.kt)("p",null,"There are two way to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cypress")," tests: through a terminal-based runner and through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cypress")," UI. Both are started through ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," but they have different use cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cypress run\n")),(0,a.kt)("p",null,"You can start by running the tests directly from the terminal. This is the quickest way to make sure all views pass checks (or find out which ones do not). This is also the starting point for work on running ",(0,a.kt)("inlineCode",{parentName:"p"},"Cypress")," in the CI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cypress open\n")),(0,a.kt)("p",null,"This command simply opens the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cypress")," UI. From there, you can run all or some of the test suites with live reloading. This is a great way to understand why some tests are failing, especially when it comes to a11y violations."),(0,a.kt)("p",null,"When there are a11y violations, an assertion fails and prints out a list in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cypress")," UI. You can then click on a violation to print more information in the browser console."),(0,a.kt)("h2",{id:"documentation-reference"},"Documentation reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dequeuniversity.com/rules/axe/3.4"},"List of all possible violations covered by ",(0,a.kt)("inlineCode",{parentName:"a"},"axe"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cypress.io"},(0,a.kt)("inlineCode",{parentName:"a"},"Cypress")," documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/avanslaars/cypress-axe"},(0,a.kt)("inlineCode",{parentName:"a"},"axe")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"Cypress")," integration"))))}m.isMDXComponent=!0}}]);