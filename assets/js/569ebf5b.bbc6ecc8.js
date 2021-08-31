(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7024],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},596:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={},c="Testing",l={unversionedId:"Development/testing",id:"Development/testing",isDocsHomePage:!1,title:"Testing",description:"This is a short canned synopsis of testing in the tremor project.",source:"@site/docs/Development/testing.md",sourceDirName:"Development",slug:"/Development/testing",permalink:"/docs/Development/testing",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Development/testing.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Usage Guide",permalink:"/docs/Development/quick-start"},next:{title:"Feature Comparison",permalink:"/docs/FeatureComparison"}},u=[{value:"Running Internal tests",id:"running-internal-tests",children:[]},{value:"EQC",id:"eqc",children:[{value:"Start tremor",id:"start-tremor",children:[]},{value:"Running EQC",id:"running-eqc",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("p",null,"This is a short canned synopsis of testing in the tremor project."),(0,i.kt)("h3",{id:"running-internal-tests"},"Running Internal tests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run -p tremor-cli -- test all tremor-cli/tests\n")),(0,i.kt)("h2",{id:"eqc"},"EQC"),(0,i.kt)("p",null,"EQC or 'QuickCheck' is a specification-based testing tool for Erlang supporting a test methodology called property-based testing. Programs are tested by writing properties - preconditions, postconditions and invariants. QuickCheck uses random generation to create constructive ( should pass ) and destructive ( should fail ) tests given the specified properties. This allows suitably defined specifications to cover a far greater set of use cases than would ordinarily be possible to write manually."),(0,i.kt)("p",null,"Further to this, QuickCheck can reduce a set of failing test cases to the minimal test case that forces any failing test to fail its specification. This drastically reduces the amount of QA and developer time required to verify or prove a piece of code works given a suitably defined specification."),(0,i.kt)("h3",{id:"start-tremor"},"Start tremor"),(0,i.kt)("p",null,"You need to start the tremor to run the tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run -p tremor -- server run\n")),(0,i.kt)("h3",{id:"running-eqc"},"Running EQC"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"tremor-runtime/tremor-erl")," run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rebar3 as eqc eqc\n")))}d.isMDXComponent=!0}}]);