var Client=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){(function(t){!function(t){"use strict";t.exports.is_uri=n,t.exports.is_http_uri=r,t.exports.is_https_uri=i,t.exports.is_web_uri=o,t.exports.isUri=n,t.exports.isHttpUri=r,t.exports.isHttpsUri=i,t.exports.isWebUri=o;var e=function(t){return t.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(t){if(t&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(t)&&!/%[^0-9a-f]/i.test(t)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(t)){var n,r,i,o,u,l="",d="";if(l=(n=e(t))[1],r=n[2],i=n[3],o=n[4],u=n[5],l&&l.length&&i.length>=0){if(r&&r.length){if(0!==i.length&&!/^\//.test(i))return}else if(/^\/\//.test(i))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(l.toLowerCase()))return d+=l+":",r&&r.length&&(d+="//"+r),d+=i,o&&o.length&&(d+="?"+o),u&&u.length&&(d+="#"+u),d}}}function r(t,r){if(n(t)){var i,o,u,l,d="",c="",a="",s="";if(d=(i=e(t))[1],c=i[2],o=i[3],u=i[4],l=i[5],d){if(r){if("https"!=d.toLowerCase())return}else if("http"!=d.toLowerCase())return;if(c)return/:(\d+)$/.test(c)&&(a=c.match(/:(\d+)$/)[0],c=c.replace(/:\d+$/,"")),s+=d+":",s+="//"+c,a&&(s+=a),s+=o,u&&u.length&&(s+="?"+u),l&&l.length&&(s+="#"+l),s}}}function i(t){return r(t,!0)}function o(t){return r(t)||i(t)}}(t)}).call(this,n(1)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"handleSubmit",(function(){return o}));var r=n(0);var i=function(t){return!!r.isUri(t)};var o=async()=>{let t=document.getElementById("article-url").value;i(t)?(async(t="",e={})=>{const n=await fetch(t,{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});try{return await n.json()}catch(t){}})("http://localhost:8081/add-url",{url:t}).then(t=>{document.getElementById("results").innerHTML=`<table>\n      <tr><td>Sentiment</td><td>Result</td></tr>\n      <tr><td>Text:</td><td>${t.text}</td></tr>\n      <tr><td>Agreement:</td><td>${t.agreement}</td></tr>\n      <tr><td>Subjectivity:</td><td>${t.subjectivity}</td></tr>\n      <tr><td>Confidence:</td><td>${t.confidence}</td></tr>\n      <tr><td>Irony:</td><td>${t.irony}</td></tr>\n      </table>`,submitBtn.disabled=!1}):(console.log("checker true"),alert("Please try with a valid Url !"))};n(2);window.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("btn-submit");t.addEventListener("click",(function(e){e.preventDefault();let n=document.getElementById("logger");console.log("::: Form Submitted :::"),t.disabled=!0,n.innerText="Working...",o()}))})}]);