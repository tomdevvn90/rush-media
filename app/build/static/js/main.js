/*! For license information please see main.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=4)}([function(e,t){e.exports=React},function(e,t,r){e.exports=r(5)},function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=i.apply(null,n);a&&e.push(a)}else if("object"===o)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=ReactDOM},function(e,t,r){e.exports=r(8)},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r,n){var i=t&&t.prototype instanceof l?t:l,o=Object.create(i.prototype),a=new S(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=b(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var u={};function l(){}function p(){}function d(){}var f={};f[i]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(E([])));v&&v!==t&&r.call(v,i)&&(f=v);var m=d.prototype=l.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(i,o){function a(){return new t((function(n,a){!function n(i,o,a,s){var u=c(e[i],e,o);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"===typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(p).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}(i,o,n,a)}))}return n=n?n.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function E(e){if(e){var t=e[i];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=m.constructor=d,d.constructor=p,d[a]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new y(s(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(m),m[a]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(3),a=r.n(o);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return function(){var t,r=l(e);if(p()){var n=l(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return f(this,t)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){if(e){if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=r(1),x=r.n(w);function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){A(o,n,i,a,s,"next",e)}function s(e){A(o,n,i,a,s,"throw",e)}a(void 0)}))}}var P=function(){var e=k(x.a.mark((function e(t){var r,n,i=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:null,e.prev=1,e.next=4,fetch(t,T({},r&&{headers:{Authorization:"Bearer ".concat(r)}}));case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.error("Error while fetching PWS API:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){function e(t,r){s(this,e),this.token=null,this.baseUrl=void 0,this.baseUrl="//".concat(r,"/media/").concat(t)}return u(e,[{key:"getOnAirStatus",value:function(){return this.doMediaRequest("on-air-status")}},{key:"getOnAirVideo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.doMediaRequest("on-air?manifest=".concat(e))}},{key:"getVideoBySlug",value:function(e){return"live"===e?this.doMediaRequest("/on-air"):this.doMediaRequest("videos/slug/".concat(e))}},{key:"getVideoById",value:function(e){return"live"===e?this.doMediaRequest("/on-air"):this.doMediaRequest("videos/".concat(e))}},{key:"getNextVideo",value:function(e){return this.doMediaRequest("next/".concat(e))}},{key:"getConfig",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return this.doMediaRequest("config?includeVideos=".concat(e,"&perPage=").concat(t))}},{key:"getIsAudio",value:function(e,t){return this.doMediaRequest("is-audio/".concat(e,"?onAir=").concat(t))}},{key:"getVideos",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e)return this.doMediaRequest("videos?resume=".concat(e));var r=Object.entries(t).reduce((function(e,t){var r=b(t,2),n=r[0],i=r[1];return e+"&".concat(n,"=").concat(i)}),"");return r&&(r="?".concat(r.slice(1))),this.doMediaRequest("/videos/".concat(r))}},{key:"doMediaRequest",value:function(e){return P("".concat(this.baseUrl,"/").concat(e),this.token)}},{key:"accessToken",set:function(e){this.token=e}}]),e}();function C(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}for(var V=r(2),O=r.n(V),j=(r(6),function(e){var t=e.type,r=e.shape,i=void 0===r?"auto":r,o=e.pulse,a=void 0!==o&&o,s=e.width,c=void 0===s?"":s,u=e.height,l=void 0===u?"":u,p=e.size,d=void 0===p?0:p,f=e.name,h=void 0===f?"":f,v=O()("component-skeleton","type-".concat(t),"shape-".concat(i),[].concat(C("text"===t&&d?["size-".concat(d)]:[]),C(a?["with-pulse"]:[])));"square"!==i&&"circle"!==i||(l=c);var m={};return c&&(m.width=c),l&&(m.height=l),n.createElement("div",{className:v,style:m,"data-name":h||null})}),L=[],R=[],_=0;_<12;_++)L.push(n.createElement("figure",{className:"component-zype-video skeleton",key:_},n.createElement("div",{className:"thumb-container"},n.createElement(j,{pulse:!0,type:"image",name:"thumbnail",shape:"16x9"})),n.createElement("figcaption",null,n.createElement(j,{pulse:!0,type:"text",name:"thumbnail",size:5}))));for(var z=0;z<4;z++)R.push(n.createElement("div",{className:"zype-tab-header ".concat(0===z?"active":""),key:z,style:{width:"14rem"}},n.createElement(j,{pulse:!0,type:"text",name:"thumbnail",size:5})));function B(){return n.createElement("div",{className:"component-zype-tab active"},n.createElement("div",{className:"videos-container"},L))}function M(){return n.createElement("div",{className:"component-zype-tabs"},n.createElement("div",{className:"component-zype-nav-bar"},n.createElement("div",null),n.createElement("div",{className:"tab-headers-container"},R)),n.createElement("div",{className:"tabs-container"},n.createElement(B,null)))}var q=document.createElementNS("http://www.w3.org/2000/svg","svg");q.setAttribute("height","16"),q.setAttribute("width","24"),q.setAttribute("fill","none"),q.setAttribute("viewBox","0 0 28 20");var I=document.createElementNS("http://www.w3.org/2000/svg","polygon"),F=document.createElementNS("http://www.w3.org/2000/svg","polygon");I.setAttribute("points","0,0 12,8 0,16"),F.setAttribute("points","12,0 24,8 12,16"),I.setAttribute("fill","#fff"),F.setAttribute("fill","#fff"),q.appendChild(I),q.appendChild(F);var D=document.createElementNS("http://www.w3.org/2000/svg","svg");D.setAttribute("width","24"),D.setAttribute("height","16"),D.setAttribute("fill","none"),D.setAttribute("viewBox","0 0 28 20");var G=document.createElementNS("http://www.w3.org/2000/svg","polygon"),K=document.createElementNS("http://www.w3.org/2000/svg","polygon");function H(){return n.createElement("figure",{className:"component-zype-player-skeleton"},n.createElement("div",{className:"player-container"},n.createElement(j,{pulse:!0,type:"image",name:"main image",shape:"16x9"})),n.createElement("figcaption",null,n.createElement(j,{pulse:!0,type:"text",name:"Title",size:3})))}G.setAttribute("points","0,8 12,0 12,16"),K.setAttribute("points","12,8 24,0 24,16"),G.setAttribute("fill","#fff"),K.setAttribute("fill","#fff"),D.appendChild(G),D.appendChild(K);var U=function(e){m(r,e);var t=h(r);function r(e){var i;return s(this,r),(i=t.call(this,e)).intervalId=void 0,i.player=null,i.rewindButton=void 0,i.forwardButton=void 0,i.videoPlayerRef=void 0,i.loadPlayerScript=function(){var e=k(x.a.mark((function e(t,r){var n,o,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id){e.next=2;break}return e.abrupt("return",console.error("Couldn't initialize player - id is unavailable"));case 2:if(n="","boolean"!==typeof t.isAudio){e.next=7;break}t.isAudio&&(n="&audio=true"),e.next=11;break;case 7:return e.next=9,i.props.mediaService.getIsAudio(t.id,t.onAir);case 9:(o=e.sent)&&o.isAudio&&(n="&audio=true");case 11:(a=document.createElement("script")).src="https://player.zype.com/embed/".concat(t.id,".js")+"?api_key=".concat(r,"&autoplay=").concat(t.autoplay,"&controls=true").concat(n),a.async=!0,document.body.appendChild(a),i.getPlayerRef();case 16:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),i.getPlayerRef=function(){i.intervalId=setInterval(i.doGetPlayerRef,500)},i.doGetPlayerRef=function(){window.theoplayer&&(i.player=window.theoplayer,i.initPlayer(),clearInterval(i.intervalId))},i.handlePresentationChange=function(e){switch(e){case"fullscreen":i.setState({isFullScreen:!0});break;case"inline":i.setState({isFullScreen:!1})}},i.initPlayer=function(){i.setState({isLoading:!1}),i.scrollToVideoPlayer(),i.player.addEventListener("ended",i.props.playNextVideo),i.initAdditionalButtons(),i.player.addEventListener("presentationmodechange",(function(e){return i.handlePresentationChange(e.presentationMode)}))},i.initAdditionalButtons=function(){try{if(!i.rewindButton||!i.forwardButton){var e=window.THEOplayer.videojs.getComponent("Button");i.rewindButton=window.THEOplayer.videojs.extend(e,{constructor:function(){e.apply(this,arguments);var t=document.createElement("span");function r(){t.classList.toggle("vjs-hidden")}t.className="theo-button-tooltip vjs-hidden",t.innerText="-10 sec",this.el().addEventListener("mouseover",r),this.el().addEventListener("mouseout",r),this.el().appendChild(t),this.el().appendChild(D)},handleClick:function(){i.player.currentTime-=10},buildCSSClass:function(){return"vjs-button custom-player-button"}}),i.forwardButton=window.THEOplayer.videojs.extend(e,{constructor:function(){e.apply(this,arguments);var t=document.createElement("span");function r(){t.classList.toggle("vjs-hidden")}t.className="theo-button-tooltip vjs-hidden",t.innerText="+10 sec",this.el().addEventListener("mouseover",r),this.el().addEventListener("mouseout",r),this.el().appendChild(t),this.el().appendChild(q)},handleClick:function(){i.player.currentTime+=10},buildCSSClass:function(){return"vjs-button custom-player-button"}})}window.THEOplayer.videojs.registerComponent("RewindButton",i.rewindButton),i.player.ui.getChild("controlBar").addChild("RewindButton",{}),window.THEOplayer.videojs.registerComponent("ForwardButton",i.forwardButton),i.player.ui.getChild("controlBar").addChild("ForwardButton",{})}catch(t){console.warn("Error initializing additional player buttons",t)}},i.videoPlayerRef=n.createRef(),i.state={isFullScreen:!1,isLoading:!0},i}return u(r,[{key:"componentDidMount",value:function(){this.props.video&&this.props.apiKey&&(this.props.video.id?this.loadPlayerScript(this.props.video,this.props.apiKey):this.props.reFetchCurVideo())}},{key:"componentDidUpdate",value:function(e){var t;(!e.apiKey||!e.video||!e.video.id||this.props.video&&e.video.id!==this.props.video.id||(null===(t=this.props.video)||void 0===t?void 0:t.isAudio)!==e.video.isAudio)&&this.props.video&&this.props.apiKey&&(this.props.video.id?this.loadPlayerScript(this.props.video,this.props.apiKey):this.props.reFetchCurVideo())}},{key:"scrollToVideoPlayer",value:function(){this.videoPlayerRef.current&&window.scrollTo({left:0,top:this.videoPlayerRef.current.offsetTop,behavior:"smooth"})}},{key:"render",value:function(){var e=O()("component-zype-player",{"player-fullscreen":this.state.isFullScreen});return n.createElement("div",{className:e,ref:this.videoPlayerRef},this.state.isLoading&&n.createElement(H,null),n.createElement("figure",{style:{display:this.state.isLoading?"none":"block"}},n.createElement("div",{className:"player-container"},n.createElement("div",{id:"zype_player"})),this.props.video&&n.createElement("figcaption",null,n.createElement("div",{className:"title"},this.props.video.title),n.createElement("p",null,this.props.video.description))))}}]),r}(n.PureComponent),Y=function(e){m(r,e);var t=h(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).onChange=function(e){n.setState({query:e.currentTarget.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onSearch(n.state.query)},n.state={query:""},n}return u(r,[{key:"render",value:function(){var e=this;return n.createElement("div",{className:"component-zype-nav-bar"},n.createElement("form",{onSubmit:this.onSubmit},n.createElement("input",{type:"text",value:this.state.query,onChange:this.onChange,placeholder:"Search videos..."}),n.createElement("input",{type:"submit",value:"Search"})),n.createElement("div",{className:"tab-headers-container"},this.props.tabs&&this.props.tabs.map((function(t,r){return n.createElement("div",{onClick:function(){return e.props.setActiveTab(r)},className:"zype-tab-header ".concat(e.props.activeTab===r?"active":""),key:t.title},t.title)}))))}}]),r}(n.Component);function J(e){var t=e.video,r=e.nextVideo,i=e.setCurrentVideo,o=e.idx;return n.createElement("figure",{className:"component-zype-video"},n.createElement("div",{className:"thumb-container",onClick:function(){return i(t,r,o)}},n.createElement("img",{className:"thumbnail",alt:t.title,src:t.thumbnails[0]?t.thumbnails[0].url:"https://i.iheart.com/v3/re/new_assets/411c7846-6373-4de6-9c48-694c7692ceec"})),n.createElement("figcaption",null,n.createElement("div",{className:"title",onClick:function(){return i(t,r,o)}},t.title),n.createElement("p",{className:"description"},function(e,t){if(e.length<t)return e;var r="";return(r=(r=e.substr(0,t-4)).substr(0,Math.min(r.length,r.lastIndexOf(" "))))+" ..."}(t.description,55))))}function W(e){var t=e.currentPage,r=e.totalPages,i=e.goToPrevPage,o=e.goToNextPage,a=e.isLoadingNext;return n.createElement("div",{className:"component-zype-pagination"},n.createElement("button",{onClick:i,disabled:t<=1},"<"),n.createElement("span",null,"Page ",t," of ",r),n.createElement("button",{onClick:o,disabled:t>=r||a},">"))}var $=function(e){m(r,e);var t=h(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).getOnAirVideo=k(x.a.mark((function e(){var t,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.props.tab.hasLive){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.props.mediaService.getOnAirVideo();case 4:(t=e.sent)&&t.video?"dittocam"===n.props.tab.slug&&t.video.isAudio?console.debug("Skipped live stream on Dittocam tab - audio-only"):("audio"===n.props.tab.slug&&(t.video.isAudio=!0),r=n.state.pages.length?[t.video].concat(C(n.state.pages[0])):[t.video],n.setState({pages:[r].concat(C(n.state.pages.slice(1)))}),console.debug("Got live video",t)):console.debug("No live video available");case 6:case"end":return e.stop()}}),e)}))),n.goToNextPage=function(){n.setState({curPage:n.state.curPage+1},(function(){n.state.resume&&n.getNextPage()}))},n.goToPrevPage=function(){n.setState({curPage:n.state.curPage-1})},n.getNextPage=k(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!n.props.tab.videos||n.state.resume?n.setState({isLoadingNext:!0},n.doGetNextPage):console.error("Can't get next page for tab \"".concat(n.props.tab.title,'". No resume'));case 1:case"end":return e.stop()}}),e)}))),n.doGetNextPage=k(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.props.tab.videos){e.next=6;break}return e.next=3,n.props.mediaService.getVideos(null,{groupSlug:n.props.tab.slug});case 3:t=e.sent,e.next=9;break;case 6:return e.next=8,n.props.mediaService.getVideos(n.state.resume);case 8:t=e.sent;case 9:t?n.setState({pages:[].concat(C(n.state.pages),[t.videos||[]]),totalPages:t.pagination.pages,resume:t.resume,isLoadingNext:!1}):n.setState({isLoadingNext:!1});case 10:case"end":return e.stop()}}),e)}))),n.getNextVideo=function(e){var t=n.state.pages[n.state.curPage-1],r=n.state.pages[n.state.curPage];return t&&t[e+1]?t[e+1]:r&&r[0]?r[0]:null},n.state={isLoadingNext:!1,totalPages:1,resume:null,curPage:1,pages:[]},n}return u(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.tab;t.videos&&t.videos.length&&t.pagination?this.setState({totalPages:t.pagination.pages,pages:[t.videos]},this.getOnAirVideo):this.getOnAirVideo(),t.resume?this.setState({resume:t.resume},(function(){return e.getNextPage()})):"search"!==t.slug&&this.getNextPage()}},{key:"render",value:function(){var e=this,t=this.state.pages[this.state.curPage-1];return n.createElement("div",{className:"component-zype-tab ".concat(this.props.isActiveTab?"active":"")},n.createElement("div",{className:"tab-header ".concat("search"===this.props.tab.slug?"with-title":"")},"search"===this.props.tab.slug&&n.createElement("h3",{className:"tab-title"},this.props.tab.title),n.createElement(W,{isLoadingNext:this.state.isLoadingNext,totalPages:this.state.totalPages,currentPage:this.state.curPage,goToNextPage:this.goToNextPage,goToPrevPage:this.goToPrevPage})),n.createElement("div",{className:"videos-container"},t&&t.map((function(t,r){return n.createElement(J,{setCurrentVideo:e.props.setCurrentVideo,nextVideo:e.getNextVideo(r),key:t.slug,video:t,idx:r})}))))}}]),r}(n.Component),Q={categories:{},hasLive:!1,title:"Search results",slug:"search",resume:null},X=function(e){m(r,e);var t=h(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).setActiveTab=function(e){n.state.searchTabActive?n.setState({searchTabActive:!1},(function(){return n.props.setActiveTab(e)})):n.props.setActiveTab(e)},n.onSearch=function(){var e=k(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",console.info("Can't search with empty query param"));case 2:Q.title='Search results for "'.concat(t,'":'),n.setState({searchTabActive:!0,loadingSearchResults:!0,searchTab:Q},(function(){return n.doSearch(t)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.doSearch=function(){var e=k(x.a.mark((function e(t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.mediaService.getVideos(null,{query:t});case 2:(r=e.sent)?n.setState({searchTab:T({},Q,{},r),loadingSearchResults:!1}):(console.warn("Search failed!"),n.setState({searchTabActive:!1,loadingSearchResults:!1}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={loadingSearchResults:!0,searchTab:Q,searchTabActive:!1},n}return u(r,[{key:"render",value:function(){var e=this;return n.createElement("div",{className:"component-zype-tabs"},n.createElement(Y,{activeTab:this.state.searchTabActive?-1:this.props.activeTab,setActiveTab:this.setActiveTab,onSearch:this.onSearch,tabs:this.props.tabs}),n.createElement("div",{className:"tabs-container"},this.props.tabs&&this.props.tabs.map((function(t,r){return n.createElement($,{isActiveTab:!e.state.searchTabActive&&e.props.activeTab===r,setCurrentVideo:e.props.setCurrentVideo,mediaService:e.props.mediaService,key:t.title,tab:t})})),this.state.searchTabActive&&this.state.loadingSearchResults?n.createElement(B,null):n.createElement($,{isActiveTab:this.state.searchTabActive,setCurrentVideo:this.props.setCurrentVideo,mediaService:this.props.mediaService,tab:this.state.searchTab})))}}]),r}(n.Component),Z=function(e){return Object(n.useEffect)((function(){var t=window.gptadslots,r=window.googletag||{};r.cmd=r.cmd||[],function(){var e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="//www.googletagservices.com/tag/js/gpt.js";var t=document.getElementsByTagName("script")[0];t&&t.parentNode&&t.parentNode.insertBefore(e,t)}(),r.cmd.push((function(){t[4]||(t[4]=r.defineSlot(e.path,[e.size],e.id).setTargeting("prnpage",["videos"]).setTargeting("pos",["top"]).addService(r.pubads())),r.pubads().enableSingleRequest(),r.pubads().setTargeting("prntype",["web"]).setTargeting("prngenre",["conservative_talk"]),r.pubads().enableAsyncRendering(),r.enableServices()}))})),i.a.createElement("div",{id:e.id})},ee=(r(7),function(e){m(r,e);var t=h(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).loadVideo=function(){var e=k(x.a.mark((function e(t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",n.initializeTabs());case 2:return e.next=4,n.props.mediaService.getVideoBySlug(t);case 4:if((r=e.sent)&&r.video){e.next=7;break}return e.abrupt("return",n.initializeTabs());case 7:if(n.props.isAuthenticated||!r.video.subscriptionRequired){e.next=9;break}return e.abrupt("return",window.location.href="/wp-login.php?redirect_to="+window.location);case 9:n.pushVideoToHistory(r.video,n.props.groupSlug),n.setState({playerApiKey:r.playerApiKey,curVideo:r.video},n.initializeTabs);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.initializeTabs=k(x.a.mark((function e(){var t,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.mediaService.getConfig();case 2:t=e.sent,n.setState({loadingTabs:!1}),t&&(r=t.tabs.findIndex((function(e){return e.slug===n.props.groupSlug})),i=[],r>=0&&t.tabs[r].videos?i=t.tabs[r].videos:t.tabs[0]&&t.tabs[0].videos&&(i=t.tabs[0].videos),n.setState({loadingTabs:!1,tabs:t.tabs,nextVideo:i?i[0]:null,activeTab:r>=0?r:0,playerApiKey:t.playerApiKey}),!n.state.curVideo&&i&&n.setCurrentVideo(i[0]));case 5:case"end":return e.stop()}}),e)}))),n.setActiveTab=function(e){n.setState({activeTab:e})},n.setCurrentVideo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?!n.props.isAuthenticated&&e.subscriptionRequired?window.location.href="/wp-login.php?redirect_to="+window.location:(n.pushVideoToHistory(e),void n.setState({curVideo:e},(function(){return n.setNextVideo(t)}))):console.warn("Can't set curVideo to null")},n.reFetchCurVideo=k(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.curVideo){e.next=2;break}return e.abrupt("return",console.error("No current video to re-fetch"));case 2:return e.next=4,n.props.mediaService.getVideoBySlug(n.state.curVideo.slug);case 4:if(t=e.sent,n.props.isAuthenticated||!(null===t||void 0===t?void 0:t.video.subscriptionRequired)){e.next=7;break}return e.abrupt("return",window.location.href="/wp-login.php?redirect_to="+window.location);case 7:t&&n.setState({curVideo:t.video});case 8:case"end":return e.stop()}}),e)}))),n.getNextVideo=k(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.curVideo){e.next=3;break}return console.warn("Can't get next video - current video is not set"),e.abrupt("return",null);case 3:if(n.state.curVideo.id){e.next=6;break}return console.warn("Can't get next video - current video doesn't have an id"),e.abrupt("return",null);case 6:return e.next=8,n.props.mediaService.getNextVideo(n.state.curVideo.id);case 8:if(!(t=e.sent)){e.next=13;break}return e.abrupt("return",t.video);case 13:return console.warn("No next video found"),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e)}))),n.setNextVideo=function(){var e=k(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",n.setState({nextVideo:t}));case 2:return e.next=4,n.getNextVideo();case 4:(t=e.sent)&&n.setState({nextVideo:t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.playNextVideo=k(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.debug("Play next video"),!n.state.nextVideo){e.next=5;break}n.setCurrentVideo(n.state.nextVideo),e.next=10;break;case 5:return e.t0=n,e.next=8,n.getNextVideo();case 8:e.t1=e.sent,e.t0.setCurrentVideo.call(e.t0,e.t1);case 10:case"end":return e.stop()}}),e)}))),n.getTabByCategories=function(e){return n.state.tabs?n.state.tabs.find((function(t){return e.some((function(e){return!!t.categories[e.title]&&e.value.some((function(r){return t.categories[e.title]===r}))}))})):null},n.pushVideoToHistory=function(e,t){if(!t){var r=n.getTabByCategories(e.categories);t=r?r.slug:n.state.tabs?n.state.tabs[n.state.activeTab].slug:null}if(!t)return console.debug("Can't add video to history - couldn't figure out the tab");window.history.pushState({video:e},e.title,"/".concat(n.props.pageSlug,"/").concat(t,"/").concat(e.slug,"/"))},n.state={playerApiKey:null,loadingTabs:!0,nextVideo:null,curVideo:null,activeTab:0,tabs:null},n}return u(r,[{key:"componentDidMount",value:function(){this.loadVideo(this.props.episodeSlug),this.handleHistoryTravel()}},{key:"handleHistoryTravel",value:function(){var e=this;window.onpopstate=function(t){t.state&&t.state.video&&e.setState({curVideo:t.state.video,nextVideo:null})}}},{key:"render",value:function(){return n.createElement("div",{className:"component-zype-media"},n.createElement(U,{reFetchCurVideo:this.reFetchCurVideo,playNextVideo:this.playNextVideo,apiKey:this.state.playerApiKey,video:this.state.curVideo,mediaService:this.props.mediaService}),this.state.loadingTabs?n.createElement(M,null):n.createElement(X,{setCurrentVideo:this.setCurrentVideo,loadingTabs:this.state.loadingTabs,setActiveTab:this.setActiveTab,mediaService:this.props.mediaService,activeTab:this.state.activeTab,tabs:this.state.tabs}),n.createElement("section",{className:"ads"},n.createElement(Z,{path:"/6663/prnd/prn-rush",size:[300,250],id:"div-gpt-ad-Midrec_300x250_Top"})))}}]),r}(n.Component)),te=function(e){m(r,e);var t=h(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).mediaService=void 0,n.mediaService=new N(e.showSlug,e.pwsHost),n.state={isAuthenticated:n.props.isAuthenticated||document.cookie.includes("CTC_1")&&document.cookie.includes("CTC_2")&&document.cookie.includes("CTC_3")},n}return u(r,[{key:"render",value:function(){var e={authenticated:this.props.isAuthenticated,playerApiKey:"",video:{id:null,title:"",slug:"",description:"",shortDescription:"",thumbnails:[],categories:[],publishedAt:"",subscriptionRequired:!1,manifest:null,onAir:!1,isAudio:!1,duration:0,autoplay:!1}};return i.a.createElement(ee,{mediaService:this.mediaService,viewVideoResponse:e,groupSlug:this.props.groupSlug,episodeSlug:this.props.episodeSlug,pageSlug:this.props.pageSlug,isAuthenticated:this.state.isAuthenticated})}}]),r}(i.a.Component),re=document.getElementById("rush-media-app");if(re){var ne=re.getAttribute("data-props")||"{}",ie=JSON.parse(ne);a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(te,ie)),re)}}]);
//# sourceMappingURL=main.js.map