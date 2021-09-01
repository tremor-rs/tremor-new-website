(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9391],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4482:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],i={},l="HTTP Server",p={unversionedId:"Workshop/examples/servers_lt_http/README",id:"Workshop/examples/servers_lt_http/README",isDocsHomePage:!1,title:"HTTP Server",description:"Example HTTP server application built on top of Tremor and meant to be a demonstration of linked transports.",source:"@site/docs/Workshop/examples/30_servers_lt_http/README.md",sourceDirName:"Workshop/examples/30_servers_lt_http",slug:"/Workshop/examples/servers_lt_http/README",permalink:"/tremor-new-website/docs/Workshop/examples/servers_lt_http/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Workshop/examples/30_servers_lt_http/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kafka delivery guarantees",permalink:"/tremor-new-website/docs/Workshop/examples/kafka_gd/README"},next:{title:"Websocket Server",permalink:"/tremor-new-website/docs/Workshop/examples/servers_lt_ws/README"}},c=[{value:"Setup",id:"setup",children:[{value:"Sources",id:"sources",children:[]},{value:"Request flow",id:"request-flow",children:[]},{value:"Processing logic",id:"processing-logic",children:[]},{value:"Error handling",id:"error-handling",children:[]}]},{value:"Testing",id:"testing",children:[{value:"Status checks",id:"status-checks",children:[]},{value:"HTML pages",id:"html-pages",children:[]},{value:"Request body decoding",id:"request-body-decoding",children:[]},{value:"Stateful logic",id:"stateful-logic",children:[]},{value:"Error handling",id:"error-handling-1",children:[]}]}],u={toc:c};function h(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"http-server"},"HTTP Server"),(0,s.kt)("p",null,"Example HTTP server application built on top of Tremor and meant to be a demonstration of ",(0,s.kt)("a",{parentName:"p",href:"../../../operations/linked-transports.md"},"linked transports"),"."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"!!! tip\nAll the code here is available in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/30_servers_lt_http"},"git repository")," as well."),(0,s.kt)("h3",{id:"sources"},"Sources"),(0,s.kt)("p",null,"We configure a rest onramp listening on port 8139:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"onramp:\n  - id: http\n    type: rest\n    linked: true\n    codec: string\n    config:\n      host: 0.0.0.0\n      port: 8139\n")),(0,s.kt)("h3",{id:"request-flow"},"Request flow"),(0,s.kt)("p",null,"Incoming requests from clients are directed to the pipeline named ",(0,s.kt)("a",{target:"_blank",href:n(4732).Z},"request_processing")," pipeline, and the output of the pipeline is fed back again to the onramp -- this now becomes the server response to the incoming request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'binding:\n  - id: main\n    links:\n      "/onramp/http/{instance}/out":\n        ["/pipeline/request_processing/{instance}/in"]\n\n      # process incoming requests and send back the response\n      "/pipeline/request_processing/{instance}/out":\n        ["/onramp/http/{instance}/in"]\n')),(0,s.kt)("h3",{id:"processing-logic"},"Processing logic"),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline, we are free to process the incoming request using tremor-script/tremor-query, and leveraging the various request and response metadata variables for the ",(0,s.kt)("a",{parentName:"p",href:"../../../artefacts/onramps.md#rest"},"rest onramp"),". The event flow within the pipeline is captured below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-trickle"},"create script process;\n\n# main request processing\nselect event from in into process;\nselect event from process into out;\n\n# our defined app errors (still succesful processing from tremor's perspective)\n# useful to track these from different port (app_error) for metrics\nselect event from process/app_error into out;\n\n# tremor runtime errors from the processing script\nselect event from process/err into err;\n")),(0,s.kt)("p",null,"Example section of the ",(0,s.kt)("inlineCode",{parentName:"p"},"process")," script here, demonstrating how the index page for the HTTP server is implemented (also parses the url query params to demonstrate dynamic responses based on provided user input):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'    case "/index" =>\n      let request_data = {\n        "body": event,\n        "meta": $request,\n      },\n\n      # determine the name to greet\n      let name = match $request.url of\n        case %{present query} =>\n          let query_parsed = utils::parse_query($request.url.query),\n          let request_data.url_query_parsed = query_parsed,\n          match query_parsed of\n            case %{present name} => query_parsed.name\n            default => "world"\n          end\n        default => "world"\n      end,\n\n      # serve html!\n      let $response.headers["content-type"] = "text/html",\n      emit """\n      <h1>Hello, #{name}!</h1>\n      <p>Your request:</p>\n      <pre>\n        #{json::encode_pretty(request_data)}\n      </pre>\n      """\n')),(0,s.kt)("p",null,"We don't include the whole pipeline logic here for brevity, but you can view it in full ",(0,s.kt)("a",{target:"_blank",href:n(4732).Z},"here"),"."),(0,s.kt)("h3",{id:"error-handling"},"Error handling"),(0,s.kt)("p",null,"Of special interest is the binding specific for error handling -- we make sure to link the ",(0,s.kt)("inlineCode",{parentName:"p"},"err")," ports from all the involved onramp/pipeline aretefacts and also ensure that the error events from those artefacts are bubbled up to the client appropriately, with proper HTTP status code (the latter is done via routing them all to the central ",(0,s.kt)("a",{target:"_blank",href:n(92).Z},"internal_error_processing")," pipeline)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'  - id: error\n    links:\n      "/onramp/http/{instance}/err":\n        ["/pipeline/internal_error_processing/{instance}/in"]\n\n      "/pipeline/request_processing/{instance}/err":\n        ["/pipeline/internal_error_processing/{instance}/in"]\n\n      # send back errors as response as well\n      "/pipeline/internal_error_processing/{instance}/out":\n        ["/onramp/http/{instance}/in"]\n\n      # respond on errors during error processing too\n      "/pipeline/internal_error_processing/{instance}/err":\n        ["/onramp/http/{instance}/in"]\n')),(0,s.kt)("h2",{id:"testing"},"Testing"),(0,s.kt)("p",null,"Assuming you have all the code from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples/30_servers_lt_http"},"git repository"),", run the following to start our application:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,s.kt)("h3",{id:"status-checks"},"Status checks"),(0,s.kt)("p",null,"To verify that the server is up and running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -v http://localhost:8139/snot\n"badger"\n\n# or a traditional ping path\n$ curl -s -o /dev/null -w ""%{http_code} http://localhost:8139/ping\n200\n')),(0,s.kt)("h3",{id:"html-pages"},"HTML pages"),(0,s.kt)("p",null,"If you navigate to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8139/"},"http://localhost:8139/")," from your browser, you should be redirected to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8139/index"},"http://localhost:8139/index")," first (part of the ",(0,s.kt)("inlineCode",{parentName:"p"},"request_processing")," pipeline logic), and then you should be able to see all the request attributes that your browser sent to the server, pretty-printed."),(0,s.kt)("p",null,"Also try something like ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8139/index?name=badger"},"http://localhost:8139/index?name=badger")," -- we have a very simple dynamic web application now!"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("img",{alt:"HTTP Server Application",src:n(3461).Z}))),(0,s.kt)("h3",{id:"request-body-decoding"},"Request body decoding"),(0,s.kt)("p",null,"The default codec for the onramp is ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," but if we set the ",(0,s.kt)("inlineCode",{parentName:"p"},"Content-Type")," header at request time, the rest onramp uses it to decode the request body instead."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -v -XPOST -H\'Content-Type:application/json\' http://localhost:8139/echo -d\'{"snot": "badger"}\'\nNote: Unnecessary use of -X or --request, POST is already inferred.\n*   Trying 127.0.0.1:8139...\n* TCP_NODELAY set\n* Connected to localhost (127.0.0.1) port 8139 (#0)\n> POST /echo HTTP/1.1\n> Host: localhost:8139\n> User-Agent: curl/7.65.3\n> Accept: */*\n> Content-Type:application/json\n> Content-Length: 18\n>\n* upload completely sent off: 18 out of 18 bytes\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< content-length: 265\n< date: Thu, 15 Oct 2020 03:11:09 GMT\n< content-type: application/json\n< x-powered-by: Tremor\n<\n* Connection #0 to host localhost left intact\n{"body":{"snot":"badger"},"meta":{"method":"POST","headers":{"content-length":["18"],"content-type":["application/json"],"accept":["*/*"],"host":["\nlocalhost:8139"],"user-agent":["curl/7.65.3"]},"url":{"scheme":"http","host":"localhost","port":8139,"path":"/echo"}}}\n\n# without the content-type header, `body` in the output would be an escaped json string here\n$ curl -XPOST http://localhost:8139/echo -d\'{"snot": "badger"}\'\n{"body":"{\\"snot\\": \\"badger\\"}","meta":{"method":"POST","headers":{"content-length":["18"],"content-type":["application/x-www-form-urlencoded"],"accept":["*/*"],"host":["localhost:8139"],"user-agent":["curl/7.65.3"]},"url":{"scheme":"http","host":"localhost","port":8139,"path":"/echo"}}}\n')),(0,s.kt)("h3",{id:"stateful-logic"},"Stateful logic"),(0,s.kt)("p",null,"To see the no of requests processed so far:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl http://localhost:8139/stats\n{"requests_processed":7}\n')),(0,s.kt)("p",null,"This is utilizing the pipeline ",(0,s.kt)("a",{parentName:"p",href:"/tremor-new-website/docs/tremor-script/index#state"},"state mechanism")," under the hood -- a simple yet powerful way to build stateful applications."),(0,s.kt)("h3",{id:"error-handling-1"},"Error handling"),(0,s.kt)("p",null,"For the application-layer errors, the server allows for defining custom error responses and bubbling them up with proper HTTP status error code. Example with non-existent paths:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -i http://localhost:8139/non-existent-path\nHTTP/1.1 404 Not Found\ncontent-length: 57\ndate: Thu, 15 Oct 2020 03:00:05 GMT\ncontent-type: application/json\nx-powered-by: Tremor\n\n{"error":"Path not found: /non-existent-path","event":""}\n')),(0,s.kt)("p",null,"Internal tremor errors are also handled gracefully (via the ",(0,s.kt)("a",{target:"_blank",href:n(92).Z},"internal_error_processing")," pipeline):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# testing an endpoint that intentionally uses an undefined var: throws a runtime error\n$ curl -i http://localhost:8139/error-test\nHTTP/1.1 500 Internal Server Error\ncontent-length: 202\ndate: Thu, 15 Oct 2020 03:06:09 GMT\ncontent-type: application/json\n\n{"error":"Oh no, we ran into something unexpected :(\\n Error: \\n   73 |       emit \\"\\"\\n      |            ^^^^^^^^^^^^^^^^ Trying to access a non existing local key `non_existent_var`\\n\\n","event":""}\n\n# similarly, for onramp-level error when invalid data is sent (non-json here when the request content-type header is set to be json)\n$ curl -H\'Content-Type:application/json\' http://localhost:8139/echo -d\'{\'\n{"error":"Oh no, we ran into something unexpected :(\\n SIMD JSON error: Syntax at character 0 (\'{\')","event_id":9,"source_id":"tremor://localhost/onramp/http/01/in"}\n')))}h.isMDXComponent=!0},92:function(e,t,n){"use strict";t.Z=n.p+"assets/files/internal_error_processing-2f253aa1e9e43390bd200a388048240c.trickle"},4732:function(e,t,n){"use strict";t.Z=n.p+"assets/files/request_processing-d941a84617fac162147a24dd8afb9bdd.trickle"},3461:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tremor_web_server-1362e6045394dfa8f92d877b832f1d16.png"}}]);