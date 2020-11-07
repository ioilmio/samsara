(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(645),r=t.n(o),i=t(667),a=t.n(i),c=t(262),d=t(483),s=t(652),u=t(867),l=r()((function(n){return n[1]})),p=a()(c.Z),f=a()(d.Z),h=a()(s.Z),b=a()(u.Z);l.push([n.id,'@font-face {\n  font-family: "LibreFranklin";\n  src: url('+p+') format("ttf");\n  font-weight: 800;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  background-color: black;\n}\n\nnav ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  list-style: none;\n}\n\nnav ul li {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  color: white;\n  font-family: "LibreFranklin", sans-serif;\n}\n\n#contact {\n  height: 100vh;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  background-image: url('+f+");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#contact .hero-box .text {\n  font-size: 1rem;\n  color: red;\n  margin-top: 1rem;\n}\n\n#menu {\n  height: 100vh;\n  width: 100%;\n  background-size: contain;\n  background-image: url("+h+");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#about {\n  position: relative;\n  width: 100%;\n  background-size: contain;\n  background-image: url("+b+');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#about #about-box {\n  position: relative;\n  top: 10%;\n  font-size: 1em;\n  padding: 2em;\n}\n\n#about #about-box #about-text {\n  background-color: rgba(255, 255, 255, 0.6);\n  text-align: center;\n  font-family: "LibreFranklin", sans-serif;\n  font-weight: 100;\n  margin: 2em auto;\n  padding: 2em;\n  width: 50%;\n  color: #585858;\n}\n',""]);const m=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},262:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"79b6e141a9934744da5b4f422632a474.ttf"},867:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"020937b28c5fafb04962039498aa1358.jpg"},483:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"875cf4d30c844b6b38d95d70f08a16de.jpg"},652:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"59fd04fdeb15dbf06ca62e32ec8fc559.jpg"},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],d=e.base?c[0]+e.base:c[0],s=t[d]||0,u="".concat(d," ").concat(s);t[d]=s+1;var l=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:u,updater:b(p,e),references:1}),o.push(u)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function l(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,h=0;function b(n,e){var t,o,r;if(e.singleton){var i=h++;t=f||(f=d(e)),o=l.bind(null,t,i,!1),r=l.bind(null,t,i,!0)}else t=d(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=c(n,e),s=0;s<t.length;s++){var u=a(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=d}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),o=t(426);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=t.p+"5207d077dd041fc778156379d29c5306.png";function i(n,e,t,o){const r=document.createElement(""+n);return r.id=e,r.className+=" "+t,r.textContent=o,r}function a(n,e,t){const o=document.createElement("img");return o.setAttribute("src",n),o.id=e,o.className+=" "+t,o}const c=i("nav","nav","navbar"),d=i("ul","top-menu","tabs"),s=a(r,"homeTab","top-menu-item"),u=i("li","contactTab","top-menu-item"),l=i("li","menuTab","top-menu-item"),p=t.p+"901cb312f94966406fbc770803b30cf2.svg";l.textContent="MENU",u.textContent="CONTACT",document.body.appendChild(c),c.appendChild(d),d.appendChild(l),d.appendChild(s),d.appendChild(u),function(){const n=i("main","main","main");document.body.appendChild(n)}(),function(){const n=i("section","contact","page"),e=i("div","hero-logo-box","hero-box"),t=i("div","imgWrapper"),o=a(p,"hero-logo-contact","hero-box logo"),r=i("h2","hero-logo-text","hero-box text"),c=i("h2","hero-logo-text1","hero-box text"),d=i("h2","hero-logo-text2","hero-box text");r.textContent="Id quae quisquam incidunt dolorum nihil perspiciatis quasi.",c.textContent="Id quae quisquam incidunt dolorum nihil perspiciatis quasi.",d.textContent="Id quae quisquam incidunt dolorum nihil perspiciatis quasi.",document.body.appendChild(n),n.appendChild(e),e.appendChild(t),e.appendChild(r),t.appendChild(o),e.appendChild(c),e.appendChild(d)}()})()})();