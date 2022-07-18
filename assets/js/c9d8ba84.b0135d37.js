"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[6124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={id:"native-installation",title:"Installing Richie on your machine",sidebar_label:"Native installation"},s=void 0,p={unversionedId:"native-installation",id:"version-2.9.1/native-installation",title:"Installing Richie on your machine",description:"This document aims to list all needed steps to have a working Richie",source:"@site/versioned_docs/version-2.9.1/native-installation.md",sourceDirName:".",slug:"/native-installation",permalink:"/docs/2.9.1/native-installation",draft:!1,tags:[],version:"2.9.1",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"native-installation",title:"Installing Richie on your machine",sidebar_label:"Native installation"},sidebar:"version-2.9.1/docs",previous:{title:"Docker development",permalink:"/docs/2.9.1/docker-development"},next:{title:"Django & React",permalink:"/docs/2.9.1/django-react-interop"}},u={},d=[{value:"Installing a fresh server",id:"installing-a-fresh-server",level:2},{value:"Version",id:"version",level:3},{value:"System update",id:"system-update",level:3},{value:"Database part",id:"database-part",level:2},{value:"Elasticsearch",id:"elasticsearch",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"OS X",id:"os-x",level:3},{value:"Application part",id:"application-part",level:2},{value:"Python and other requirements",id:"python-and-other-requirements",level:3},{value:"The virtualenv",id:"the-virtualenv",level:3},{value:"Frontend build",id:"frontend-build",level:3},{value:"Run server",id:"run-server",level:3}],c={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document aims to list all needed steps to have a working ",(0,l.kt)("inlineCode",{parentName:"p"},"Richie"),"\ninstallation on your laptop."),(0,l.kt)("p",null,"A better approach is to use ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com"},(0,l.kt)("inlineCode",{parentName:"a"},"Docker"))," as explained in\nour guide for ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.9.1/discover"},"container-native")," instructions."),(0,l.kt)("h2",{id:"installing-a-fresh-server"},"Installing a fresh server"),(0,l.kt)("h3",{id:"version"},"Version"),(0,l.kt)("p",null,"You need a ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu 18.04 Bionic Beaver")," (the latest LTS version) fresh\ninstallation."),(0,l.kt)("p",null,"If you are using another operating system or distribution, you can use\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.vagrantup.com/v2/getting-started/index.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Vagrant"))," to get a\nrunning Ubuntu 18.04 server in seconds."),(0,l.kt)("h3",{id:"system-update"},"System update"),(0,l.kt)("p",null,"Be sure to have fresh packages on the server (kernel, libc, ssl patches...):\npost"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get -y update\nsudo apt-get -y dist-upgrade\n")),(0,l.kt)("h2",{id:"database-part"},"Database part"),(0,l.kt)("p",null,"You must first install ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"// On Linux\nsudo apt-get -y install postgresql\n\n// On OS X\nbrew install postgresql@10\nbrew services start postgresql@10\n// don't forget to add your new postgres install to the $PATH\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Postgresql")," is now running."),(0,l.kt)("p",null,"Then you can create the database owner and the database itself, using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"postgres")," user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -u postgres -i // skip this on OS X as the default install will use your local user\ncreateuser fun -sP\n")),(0,l.kt)("p",null,"Note: we created the user as a superuser. This should only be done in dev/test\nenvironments."),(0,l.kt)("p",null,"Now, create the database with this user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"createdb richie -O fun -W\nexit\n")),(0,l.kt)("h2",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,l.kt)("p",null,"Download and install the Public Signing Key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -\n")),(0,l.kt)("p",null,"You may need to install the apt-transport-https package on Debian before\nproceeding:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo apt-get install apt-transport-https\n")),(0,l.kt)("p",null,"Save the repository definition to /etc/apt/sources.list.d/elastic-6.3.1.list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ echo "deb https://artifacts.elastic.co/packages/6.3.1/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.3.1.list\n')),(0,l.kt)("p",null,"Update repository and install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo apt-get update\n$ sudo apt-get install elasticsearch\n$ sudo /etc/init.d/elasticsearch start\n")),(0,l.kt)("h3",{id:"os-x"},"OS X"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ brew install elasticsearch\n")),(0,l.kt)("h2",{id:"application-part"},"Application part"),(0,l.kt)("h3",{id:"python-and-other-requirements"},"Python and other requirements"),(0,l.kt)("p",null,"We use ",(0,l.kt)("inlineCode",{parentName:"p"},"Python 3.6")," which is the one installed by default in ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu 18.04"),"."),(0,l.kt)("p",null,"You can install it on OS X using the following commands. Make sure to always run\n",(0,l.kt)("inlineCode",{parentName:"p"},"python3")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"python")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pip3")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," to ensure the correct\nversion of Python (your homebrew install of 3) is used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install python3\nbrew postinstall python3\n")),(0,l.kt)("h3",{id:"the-virtualenv"},"The virtualenv"),(0,l.kt)("p",null,"Place yourself in the application directory ",(0,l.kt)("inlineCode",{parentName:"p"},"app"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd app\n")),(0,l.kt)("p",null,"We choose to run our application in a virtual environment."),(0,l.kt)("p",null,"For this, we'll install ",(0,l.kt)("inlineCode",{parentName:"p"},"virtualenvwrapper")," and add an environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install virtualenvwrapper\n")),(0,l.kt)("p",null,"You can open a new shell to activate the virtualenvwrapper commands, or simply\ndo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source $(which virtualenvwrapper.sh)\n")),(0,l.kt)("p",null,"Then create the virtual environment for ",(0,l.kt)("inlineCode",{parentName:"p"},"richie"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkvirtualenv richie --no-site-packages --python=python3\n")),(0,l.kt)("p",null,"The virtualenv should now be activated and you can install the Python\ndependencies for development:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install -e .[dev]\n")),(0,l.kt)("p",null,'The "dev.txt" requirement file installs packages specific to a dev environment\nand should not be used in production.'),(0,l.kt)("h3",{id:"frontend-build"},"Frontend build"),(0,l.kt)("p",null,"This project is a hybrid that uses both Django generated pages and frontend JS\ncode. As such, it includes a frontend build process that comes in two parts: JS\n& CSS."),(0,l.kt)("p",null,"We need NPM to install the dependencies and run the build, which depends on a\nversion of Nodejs specified in ",(0,l.kt)("inlineCode",{parentName:"p"},".nvmrc"),". See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm"},"the\nrepo")," for instructions on how to install NVM.\nTo take advantage of ",(0,l.kt)("inlineCode",{parentName:"p"},".nvmrc"),", run this in the context of the repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nvm install\nnvm use\n")),(0,l.kt)("p",null,"As a prerequisite to running the frontend build for either JS or CSS, you'll\nneed to ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/lang/en/docs/install/"},"install yarn")," and download\ndependencies ",(0,l.kt)("em",{parentName:"p"},"via"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JS build")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CSS build")),(0,l.kt)("p",null,"This will compile all our SCSS files into one bundle and put it in the static\nfolder we're serving."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run sass\n")),(0,l.kt)("h3",{id:"run-server"},"Run server"),(0,l.kt)("p",null,"Make sure your database is up-to-date before running the application the first\ntime and after each modification to your models:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"python sandbox/manage.py migrate\n")),(0,l.kt)("p",null,"You can create a superuser account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"python sandbox/manage.py createsuperuser\n")),(0,l.kt)("p",null,"Run the tests"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"python sandbox/manage.py test\n")),(0,l.kt)("p",null,"You should now be able to start Django and view the site at\n",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8000"},"localhost:8000")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"python sandbox/manage.py runserver\n")))}h.isMDXComponent=!0}}]);