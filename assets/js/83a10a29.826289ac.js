(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[4674],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},218:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={},l="syslog udp",p={unversionedId:"Workshop/examples/syslog_udp/README",id:"Workshop/examples/syslog_udp/README",isDocsHomePage:!1,title:"syslog udp",description:"The syslog udp example is demonstrate a number things:",source:"@site/docs/Workshop/examples/14_syslog_udp/README.md",sourceDirName:"Workshop/examples/14_syslog_udp",slug:"/Workshop/examples/syslog_udp/README",permalink:"/docs/Workshop/examples/syslog_udp/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/14_syslog_udp/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/docs/Workshop/examples/grafana/README"},next:{title:"syslog udp dns",permalink:"/docs/Workshop/examples/syslog_udp_dns/README"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Testing",id:"testing",children:[]}],c={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"syslog-udp"},"syslog udp"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog udp")," example is demonstrate a number things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Encoding data in the ",(0,o.kt)("inlineCode",{parentName:"li"},"syslog")," format."),(0,o.kt)("li",{parentName:"ol"},"Sending data over ",(0,o.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,o.kt)("li",{parentName:"ol"},"Receiving data over ",(0,o.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,o.kt)("li",{parentName:"ol"},"Decoding ",(0,o.kt)("inlineCode",{parentName:"li"},"syslog")," formated data.")),(0,o.kt)("p",null,"For easy digestion it is entirely selfcontained inside a singel tremor instance using multiple paralell pipelines, sinks and sources."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"!!! tip\nAll the code here is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/14_syslog_udp"},"git repository")," as well and can be run with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up"),"."),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(3797).Z},"sources and sinks")," we use are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"metronome")," source - to generate data in one second intervals."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"udp")," sink - to send the data over ",(0,o.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"udp")," source - to receive data via ",(0,o.kt)("inlineCode",{parentName:"li"},"UDP"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout")," sink - to display data decoded and re-formated as ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),".")),(0,o.kt)("p",null,"In addition we have two pipelines."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(1788).Z},"producer")," pipeline takes the tick from metronome and generates a syslog message. It is only handling message rewriting."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(1788).Z},"consumer")," pipeline takes the syslog message and forwards it. It is a passthrough pipeline."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:n(9048).Z},"binding")," expresses those relations and gives the graph of onramp, pipeline and offramp. We hare left with those two workflows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"metronome -> producer -> syslog-udp-out\n\nsyslog-udp-in -> consumer -> stdout-output\n")),(0,o.kt)("p",null,"Finally the ",(0,o.kt)("a",{target:"_blank",href:n(2335).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,o.kt)("h2",{id:"business-logic"},"Business Logic"),(0,o.kt)("p",null,"The only interesting part to look at is the event rewriting, this uses an example syslog message and adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"event.id")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"strucuted_data")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-trickle"},'select {\n  "severity": "notice",\n  "facility": "local4",\n  "hostname": "example.com",\n  "appname": "evntsog",\n  "msg": "BOMAn application event log entry...",\n  "procid": null,\n  "msgid": "ID47",\n  "protocol": "RFC5424",\n  "protocol_version": 1,\n  "structured_data": {\n              "exampleSDID@32473" :\n              [\n                {"eventSource": "Tremor"},\n                {"eventID": "#{ event.id }"}\n              ]\n            },\n  "timestamp": event.ingest_ns\n} from in into out\n')),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"from inside the docker container, custom syslog messages can be send with the ",(0,o.kt)("inlineCode",{parentName:"p"},"logger")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ logger -d -n 127.0.0.1 -P 12201 "Weeeeh. It works :D"\n')))}d.isMDXComponent=!0},3797:function(e,t,n){"use strict";t.Z=n.p+"assets/files/00_ramps-72ed696b0c532eaa1e332cac22297fac.yaml"},9048:function(e,t,n){"use strict";t.Z=n.p+"assets/files/01_binding-adf77a18b1e732d845e1593de9db6d2b.yaml"},2335:function(e,t,n){"use strict";t.Z=n.p+"assets/files/02_mapping-87bbf82480a24d4f084bf711805395d1.yaml"},1788:function(e,t,n){"use strict";t.Z=n.p+"assets/files/consumer-a5bc721242b579503e73a6e7cda4ec32.trickle"}}]);