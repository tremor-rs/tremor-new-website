(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5400],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7559:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={title:"Google Cloud Storage and Pub/Sub Connectors",author:"Jigyasa Khaneja",author_title:"Tremor 2021 Spring Mentee",tags:["connectors","mentorship","cncf","gpc"],draft:!1,hide_table_of_contents:!1,description:"Jigyasa's LFX spring Mentorship experience report."},s=void 0,c={permalink:"/blog/2021/06/29/T17-LFX-Blog-Jigyasa-gcloud",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/blog/2021-06-29T17-LFX-Blog-Jigyasa-gcloud.md",source:"@site/blog/2021-06-29T17-LFX-Blog-Jigyasa-gcloud.md",title:"Google Cloud Storage and Pub/Sub Connectors",description:"Jigyasa's LFX spring Mentorship experience report.",date:"2021-06-29T00:00:00.000Z",formattedDate:"June 29, 2021",tags:[{label:"connectors",permalink:"/blog/tags/connectors"},{label:"mentorship",permalink:"/blog/tags/mentorship"},{label:"cncf",permalink:"/blog/tags/cncf"},{label:"gpc",permalink:"/blog/tags/gpc"}],readingTime:12.31,truncated:!0,prevItem:{title:"Support for the Syslog Protocol",permalink:"/blog/LFX-Blog-Nupur"},nextItem:{title:"Releasing Tremor v0.9!",permalink:"/blog/2020/10/16/v09-release"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Learning about Tremor",id:"learning-about-tremor",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Hello folks! I'm Jigyasa, a final-year computer science engineering student at Indira Gandhi Delhi Technical University for Women pursuing my bachelor's in Technology. This blog is about my experience contributing to ",(0,a.kt)("a",{parentName:"p",href:"https://www.tremor.rs/"},"Tremor")," as part of the LFX Mentorship program.\ni"),(0,a.kt)("h3",{id:"learning-about-tremor"},"Learning about Tremor"),(0,a.kt)("p",null,"Tremor is an event processing system for unstructured data with rich support for structural pattern matching, filtering, and transformation. It is built for users that have a high message volume to deal with and want to build pipelines to process, route, or limit this event stream. It has a scripting language called tremor-script and a query language as well called tremor-query or trickle."),(0,a.kt)("p",null,"I had never worked on an event processing system before this internship. In fact, my first major contribution to open-source was through this mentorship program. To get started with it, my mentor ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/darach-ennis-789866?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnRZIYeLfRAWJpWsDNlzweA%3D%3D"},"Darach Ennis"),", suggested me some documents that helped me learn more about it:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/overview/"},"https://docs.tremor.rs/overview/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/course/#/2"},"https://docs.tremor.rs/course")),(0,a.kt)("p",null,"Apart from that, learning more about the tremor-query, tremor-script, and going through the workshops in the docs can be really helpful."),(0,a.kt)("p",null,"The codebase of Tremor is in Rust, and since I had no prior experience with Rust, I started learning the language."))}m.isMDXComponent=!0}}]);