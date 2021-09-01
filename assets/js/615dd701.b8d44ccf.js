(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[994],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,g=p["".concat(u,".").concat(b)]||p[b]||d[b]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1698:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={},u="Debugging Tremor",s={unversionedId:"Development/debugging",id:"Development/debugging",isDocsHomePage:!1,title:"Debugging Tremor",description:"This is a short canned synopsis of debugging tremor.",source:"@site/docs/Development/debugging.md",sourceDirName:"Development",slug:"/Development/debugging",permalink:"/tremor-new-website/docs/Development/debugging",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Development/debugging.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logstash Benchmark",permalink:"/tremor-new-website/docs/Development/benchmarks/LogstashBenchmark"},next:{title:"Investigations",permalink:"/tremor-new-website/docs/Development/issue-investigation"}},c=[{value:"rust-lldb",id:"rust-lldb",children:[{value:"Setup on Mac OS X",id:"setup-on-mac-os-x",children:[]},{value:"Preparing tremor for debugging",id:"preparing-tremor-for-debugging",children:[]},{value:"Run tremor under the debugger",id:"run-tremor-under-the-debugger",children:[]},{value:"Run to breakpoint for malloc related issues",id:"run-to-breakpoint-for-malloc-related-issues",children:[]},{value:"Take a backtrace ( stacktrace ) upon hitting a breakpoint",id:"take-a-backtrace--stacktrace--upon-hitting-a-breakpoint",children:[]},{value:"List breakpoints",id:"list-breakpoints",children:[]},{value:"Quit lldb",id:"quit-lldb",children:[]}]},{value:"References",id:"references",children:[]}],d={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging-tremor"},"Debugging Tremor"),(0,o.kt)("p",null,"This is a short canned synopsis of debugging tremor."),(0,o.kt)("h2",{id:"rust-lldb"},"rust-lldb"),(0,o.kt)("p",null,"We use rust-lldb, to drive breakpoint debugging in tremor."),(0,o.kt)("p",null,"Alternately, rust integration with IntelliJ CLION also offers interactive breakpoint debugging in an IDE environment."),(0,o.kt)("h3",{id:"setup-on-mac-os-x"},"Setup on Mac OS X"),(0,o.kt)("p",null,"rust-lldb ships with rust so no added tooling is required."),(0,o.kt)("h3",{id:"preparing-tremor-for-debugging"},"Preparing tremor for debugging"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ rust-lldb target/debug/tremor\n(lldb) command script import "/Users/dennis/.rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/etc/lldb_rust_formatters.py"\n(lldb) type summary add --no-value --python-function lldb_rust_formatters.print_val -x ".*" --category Rust\n(lldb) type category enable Rust\n(lldb) target create "target/debug/tremor"\nCurrent executable set to \'target/debug/tremor\' (x86_64).\n(lldb)\n')),(0,o.kt)("h3",{id:"run-tremor-under-the-debugger"},"Run tremor under the debugger"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(lldb) run\n")),(0,o.kt)("h3",{id:"run-to-breakpoint-for-malloc-related-issues"},"Run to breakpoint for malloc related issues"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(lldb) br set -n malloc_error_break\n(lldb) run\n")),(0,o.kt)("h3",{id:"take-a-backtrace--stacktrace--upon-hitting-a-breakpoint"},"Take a backtrace ( stacktrace ) upon hitting a breakpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(lldb) bt\n")),(0,o.kt)("h3",{id:"list-breakpoints"},"List breakpoints"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(lldb) br l\n")),(0,o.kt)("h3",{id:"quit-lldb"},"Quit lldb"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(lldb) quit\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"For a more detailed synopsis check out lldb project documentation or the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nesono.com/sites/default/files/lldb%20cheat%20sheet.pdf"},"lldb cheatsheet"),"."))}p.isMDXComponent=!0}}]);