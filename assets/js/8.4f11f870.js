(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{373:function(v,_,t){"use strict";t.r(_);var e=t(42),p=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"一次完整的http服务过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一次完整的http服务过程"}},[v._v("#")]),v._v(" 一次完整的HTTP服务过程")]),v._v(" "),t("h3",{attrs:{id:"题意分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题意分析"}},[v._v("#")]),v._v(" 题意分析")]),v._v(" "),t("p",[v._v("当我们在web浏览器的地址栏中输入："),t("code",[v._v("www.baidu.com")]),v._v("，具体发生了什么？")]),v._v(" "),t("ol",[t("li",[v._v("对"),t("code",[v._v("www.baidu.com")]),v._v("这个网址进行DNS域名解析，得到对应的IP地址")]),v._v(" "),t("li",[v._v("根据这个IP，找到对应的服务器，发起TCP的三次握手")]),v._v(" "),t("li",[v._v("建立TCP连接后发起HTTP请求")]),v._v(" "),t("li",[v._v("服务器响应HTTP请求，浏览器得到html代码")]),v._v(" "),t("li",[v._v("浏览器解析html代码，并请求html代码中的资源（如js、css、图片等）（先得到html代码，才能去找这些资源）")]),v._v(" "),t("li",[v._v("浏览器对页面进行渲染呈现给用户")]),v._v(" "),t("li",[v._v("服务器关闭关闭TCP连接")])]),v._v(" "),t("p",[v._v("注：")]),v._v(" "),t("p",[v._v("1.DNS怎么找到域名的？")]),v._v(" "),t("blockquote",[t("p",[v._v("DNS域名解析采用的是递归查询的方式，过程是，先去找DNS缓存->缓存找不到就去找根域名服务器->根域名又会去找下一级，这样递归查找之后，找到了，给我们的web浏览器")])]),v._v(" "),t("p",[v._v("2.为什么HTTP协议要基于TCP来实现？")]),v._v(" "),t("blockquote",[t("p",[v._v("TCP是一个端到端的可靠的面相连接的协议，HTTP基于传输层TCP协议不用担心数据传输的各种问题（当发生错误时，会重传）")])]),v._v(" "),t("p",[v._v("3.最后一步浏览器是如何对页面进行渲染的？")]),v._v(" "),t("blockquote",[t("p",[v._v("a）解析html文件构成 DOM树\nb）解析CSS文件构成渲染树\nc）边解析，边渲染\nd）JS 单线程运行，JS有可能修改DOM结构，意味着JS执行完成前，后续所有资源的下载是没有必要的，所以JS是单线程，会阻塞后续资源下载")])]),v._v(" "),t("p",[t("strong",[v._v("各个步骤具体细节")])]),v._v(" "),t("p",[t("strong",[v._v("DNS解析（域名解析服务器）")])]),v._v(" "),t("p",[v._v("a）首先会搜索浏览器自身的DNS缓存（缓存时间比较短，大概只有1分钟，且只能容纳1000条缓存）")]),v._v(" "),t("p",[v._v("b）如果浏览器自身的缓存里面没有找到，那么浏览器会搜索系统自身的DNS缓存")]),v._v(" "),t("p",[v._v("c）如果还没有找到，那么尝试从 hosts文件里面去找")]),v._v(" "),t("p",[v._v("d）在前面三个过程都没获取到的情况下，就递归地去域名服务器去查找，具体过程如下")]),v._v(" "),t("p",[t("img",{attrs:{src:"medias/5rxqugj8dh.png",alt:"dns域名解析"}})]),v._v(" "),t("p",[v._v("DNS优化两个方面：DNS缓存、DNS负载均衡")]),v._v(" "),t("p",[t("strong",[v._v("TCP连接建立（三次握手）")])]),v._v(" "),t("p",[v._v("拿到域名对应的IP地址之后，User-Agent（一般指浏览器）会以一个随机端口（1024<端口<65535）向服务器的WEB程序（常用的有httpd，nginx）等的80端口。这个连接请求（原始的http请求经过TCP/IP  4层模型的层层封包）到达服务器端后（这中间有各种路由设备，局域网内除外），进入到网卡，然后是进入到内核的TCP/IP协议栈（用于识别连接请求，解封包，一层一层的剥开），还有可能要经过Netfilter防火墙（属于内核的模块）的过滤，最终达到WEB程序，最终建立了TCP/IP的连接。")]),v._v(" "),t("p",[t("strong",[v._v("发起HTTP请求(建立连接后)")])]),v._v(" "),t("p",[v._v("HTTP请求报文由三部分组成：请求行，请求头、空行 / 请求正文")]),v._v(" "),t("p",[v._v("**请求行：**用于描述客户端的请求方式（GET/POST等），请求的资源名称(URL)以及使用的HTTP协议的版本号")]),v._v(" "),t("p",[v._v("**请求头：**用于描述客户端请求哪台主机及其端口，以及客户端的一些环境信息等")]),v._v(" "),t("p",[v._v("**空行：**空行就是\\r\\n (POST请求时候有)")]),v._v(" "),t("p",[v._v("**请求正文：**当使用POST等方法时，通常需要客户端向服务器传递数据。这些数据就储存在请求正文中（GET方式是保存在url地址后面，不会放到这里）")]),v._v(" "),t("p",[v._v("举例：")]),v._v(" "),t("p",[t("strong",[v._v("GET请求")])]),v._v(" "),t("p",[v._v("下面是浏览器对 http://localhost:8081/test?name=XXG&age=23的GET 请求时发送给服务器的数据：")]),v._v(" "),t("p",[t("img",{attrs:{src:"medias/y1rj7zwfal.png",alt:"GET请求"}})]),v._v(" "),t("p",[v._v("可以看出请求包含请求行和请求头两部分。其中请求行中包含 method（例如 GET、POST）、URI（通一资源标志符）和协议版本三部分，三个部分之间以空格分开。请求行和每个请求头各占一行，以换行符 CRLF（即 \\r\\n）分割。")]),v._v(" "),t("p",[t("strong",[v._v("POST请求")])]),v._v(" "),t("p",[v._v("下面是浏览器对 http://localhost:8081/test 的 POST 请求时发送给服务器的数据，消息体中带上参数 name=XXG&age=23")]),v._v(" "),t("p",[t("img",{attrs:{src:"medias/7x1vv3oqro.png",alt:"post请求"}})]),v._v(" "),t("p",[v._v("可以看出，上面的请求包含三个部分：请求行、请求头、空格/消息体，比之前的 GET 请求多了一个请求消息，其中 请求头和消息体之间用一个空行分割。POST 请求的参数不在 URL 中，而是在消息体中，请求头中多了一项 Content-Length 用于表示消息体的字节数，这样服务器才能知道请求是否发送结束。这也就是 GET 请求和 POST 请求的主要区别。")]),v._v(" "),t("p",[t("strong",[v._v("那么起始行中的请求方法有哪些种呢？")])]),v._v(" "),t("blockquote",[t("p",[v._v("GET: 完整请求一个资源 （常用）\nHEAD: 仅请求响应首部\nPOST：提交表单  （常用）\nPUT: (webdav) 上传文件（但是浏览器不支持该方法）\nDELETE：(webdav) 删除\nOPTIONS：返回请求的资源所支持的方法的方法\nTRACE: 追求一个资源请求中间所经过的代理（该方法不能由浏览器发出）")])]),v._v(" "),t("p",[t("strong",[v._v("那什么是URL、URI、URN？")])]),v._v(" "),t("blockquote",[t("p",[v._v("URI  Uniform Resource Identifier 统一资源标识符\nURL  Uniform Resource Locator 统一资源定位符\nURN  Uniform Resource Name 统一资源名称")])]),v._v(" "),t("p",[v._v("URL和URN 都属于 URI，为了方便就把URL和URI暂时都通指一个东西")]),v._v(" "),t("p",[t("strong",[v._v("服务器响应http请求，浏览器得到html代码")])]),v._v(" "),t("p",[v._v("HTTP响应也由三部分组成：状态行，响应头，空格，消息体")]),v._v(" "),t("p",[v._v("状态行包括：协议版本、状态码、状态码描述")]),v._v(" "),t("p",[v._v("**状态码：**状态码用于表示服务器对请求的处理结果")]),v._v(" "),t("blockquote",[t("p",[v._v("1xx：指示信息——表示请求已经接受，继续处理\n2xx：成功——表示请求已经被成功接收、理解、接受。\n3xx：重定向——要完成请求必须进行更进一步的操作\n4xx：客户端错误——请求有语法错误或请求无法实现\n5xx：服务器端错误——服务器未能实现合法的请求。")])]),v._v(" "),t("p",[v._v("列举几种常见的：")]),v._v(" "),t("blockquote",[t("p",[v._v("200（没有问题）\n302（要你去找别人）\n304（要你去拿缓存）\n307（要你去拿缓存）\n403（有这个资源，但是没有访问权限）\n404（服务器没有这个资源）\n500（服务器这边有问题）")])]),v._v(" "),t("p",[v._v("**响应头：**响应头用于描述服务器的基本信息，以及客户端如何处理数据")]),v._v(" "),t("p",[v._v("**空格：**CRLF（即 \\r\\n）分割")]),v._v(" "),t("p",[v._v("**消息体：**服务器返回给客户端的数据")]),v._v(" "),t("p",[v._v("响应格式如下图")]),v._v(" "),t("p",[t("img",{attrs:{src:"medias/vpa3scd2ea.png",alt:"相应格式"}})]),v._v(" "),t("p",[v._v("上面的 HTTP 响应中，响应头中的 Content-Length 同样用于表示消息体的字节数。Content-Type 表示消息体的类型，通常浏览网页其类型是HTML，当然还会有其他类型，比如图片、视频等。")]),v._v(" "),t("p",[t("strong",[v._v("浏览器解析html代码，并请求html代码中的资源")])]),v._v(" "),t("p",[v._v("浏览器拿到html文件后，就开始解析其中的html代码，遇到js/css/image等静态资源时，就向服务器端去请求下载（会使用多线程下载，每个浏览器的线程数不一样），这是时候就用上 keep-alive特性了，建立一次HTTP连接，可以请求多个资源，下载资源的顺序就是按照代码里面的顺序，但是由于每个资源大小不一样，而浏览器又是多线程请求请求资源，所以这里显示的顺序并不一定是代码里面的顺序。")]),v._v(" "),t("p",[t("strong",[v._v("浏览器对页面进行渲染呈现给用户")])]),v._v(" "),t("p",[v._v("最后，浏览器利用自己内部的工作机制，把请求的静态资源和html代码进行渲染，渲染之后呈现给用户，浏览器是一个边解析边渲染的过程。")]),v._v(" "),t("p",[v._v("首先浏览器解析HTML文件构建DOM树，然后解析CSS文件构建渲染树，等到渲染树构建完成后，浏览器开始布局渲染树并将其绘制到屏幕上。")]),v._v(" "),t("p",[v._v("这个过程比较复杂，涉及到两个概念: reflow(回流)和repain(重绘)。")]),v._v(" "),t("p",[v._v("DOM节点中的各个元素都是以盒模型的形式存在，这些都需要浏览器去计算其位置和大小等，这个过程称为relow;当盒模型的位置,大小以及其他属性，如颜色,字体,等确定下来之后，浏览器便开始绘制内容，这个过程称为repain。")]),v._v(" "),t("p",[v._v("页面在首次加载时必然会经历reflow和repain。")]),v._v(" "),t("p",[v._v("reflow和repain过程是非常消耗性能的，尤其是在移动设备上，它会破坏用户体验，有时会造成页面卡顿。所以我们应该尽可能少的减少reflow和repain。")]),v._v(" "),t("p",[v._v("JS的解析是由浏览器中的JS解析引擎完成的。")]),v._v(" "),t("p",[v._v("JS是单线程运行，JS有可能修改DOM结构，意味着JS执行完成前，后续所有资源的下载是没有必要的，所以JS是单线程，会阻塞后续资源下载。")]),v._v(" "),t("p",[t("strong",[v._v("服务器关闭关闭TCP连接")])]),v._v(" "),t("p",[v._v("一般情况下，一旦Web服务器向浏览器发送了请求数据，它就要关闭TCP连接，然后如果浏览器或者服务器在其头信息加入了这行代码：")]),v._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[v._v("Connection:keep-alive \n")])])]),t("p",[v._v("TCP连接在发送后将仍然保持打开状态，于是，浏览器可以继续通过相同的连接发送请求。保持连接节省了为每个请求建立新连接所需的时间，还节约了网络带宽。")]),v._v(" "),t("p",[v._v("自此一次完整的HTTP事务宣告完成.")]),v._v(" "),t("h3",{attrs:{id:"明确考察点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#明确考察点"}},[v._v("#")]),v._v(" 明确考察点")]),v._v(" "),t("ol",[t("li",[v._v("地址栏输入url开始， 域名到ip的过程")]),v._v(" "),t("li",[v._v("拿到ip， 开始建立http请求")]),v._v(" "),t("li",[v._v("拿到html之后的浏览器的渲染过程")])]),v._v(" "),t("h3",{attrs:{id:"回答思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回答思路"}},[v._v("#")]),v._v(" 回答思路")]),v._v(" "),t("p",[v._v("​\t先说从url到拿到html的过程，然后重点阐述html的渲染过程。之后面试官再次提问的侧重回答（如：重排，重绘、tcp 三次握手四次挥手）。")]),v._v(" "),t("h3",{attrs:{id:"相关扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关扩展"}},[v._v("#")]),v._v(" 相关扩展")]),v._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq_38950316/article/details/81087809",target:"_blank",rel:"noopener noreferrer"}},[v._v("tcp 三次握手四次挥手"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=p.exports}}]);