parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=[],t=0,r=4,n=4,o=!1,a=document.querySelector(".game-field"),i=document.querySelector(".game-score"),c=document.querySelector(".button"),s=document.querySelector(".message-start"),d=document.querySelector(".message-win"),l=document.querySelector(".message-lose");function f(){e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var t=0;t<r;t++)for(var o=0;o<n;o++){var i=document.createElement("div"),c=e[t][o];i.id=t.toString()+"-"+o.toString(),m(i,c),a.append(i)}}function u(){for(var t=0;t<r;t++)for(var o=0;o<n;o++)if(0===e[t][o])return!0;return!1}function v(){if(u())for(var t=!1;!t;){var o=Math.floor(Math.random()*r),a=Math.floor(Math.random()*n),i=[2,2,2,2,2,2,2,2,2,4],c=Math.floor(10*Math.random());if(0===e[o][a]){e[o][a]=i[c];var s=document.getElementById(o.toString()+"-"+a.toString());s.innerText=i[c],s.classList.add("field-cell--"+i[c].toString()),t=!0}}}function m(e,t){e.innerText="",e.classList.value="",e.classList.add("field-cell"),t>0&&(e.innerText=t,t<=2048&&e.classList.add("field-cell--"+t.toString()))}function g(){for(var e=0;e<r;e++)for(var t=0;t<n;t++){"2048"===document.getElementById("".concat(e,"-").concat(t)).innerText&&(o=!0,d.classList.remove("hidden"))}}function S(e){return e.filter(function(e){return 0!==e})}function L(e){var r=e;r=S(r);for(var o=0;o<r.length;o++)r[o]===r[o+1]&&(r[o]*=2,r[o+1]=0,t+=r[o]);for(r=S(r);r.length<n;)r.push(0);return r}function h(){for(var t=0;t<r;t++){var o=e[t];o=L(o),e[t]=o;for(var a=0;a<n;a++){m(document.getElementById(t.toString()+"-"+a.toString()),e[t][a])}}}function y(){for(var t=0;t<r;t++){var o=e[t];o.reverse(),(o=L(o)).reverse(),e[t]=o;for(var a=0;a<n;a++){m(document.getElementById(t.toString()+"-"+a.toString()),e[t][a])}}}function E(){for(var t=0;t<n;t++){var r=[e[0][t],e[1][t],e[2][t],e[3][t]];r=L(r);for(var o=0;o<n;o++){e[o][t]=r[o],m(document.getElementById(o.toString()+"-"+t.toString()),e[o][t])}}}function x(){for(var t=0;t<n;t++){var r=[e[0][t],e[1][t],e[2][t],e[3][t]];r.reverse(),(r=L(r)).reverse();for(var o=0;o<n;o++){e[o][t]=r[o],m(document.getElementById(o.toString()+"-"+t.toString()),e[o][t])}}}function T(){for(var t=0;t<r;t++)for(var o=1;o<n;o++)if(e[t][o-1]===e[t][o])return!0;for(var a=0;a<n;a++)for(var i=1;i<r;i++)if(e[i-1][a]===e[i][a])return!0;return!1}window.onload=function(){f()},c.addEventListener("click",function(o){if(c.classList.contains("start"))c.classList.replace("start","restart"),c.innerText="Restart",s.classList.add("hidden"),v(),v();else{c.classList.replace("restart","start"),c.innerText="Start",s.classList.remove("hidden"),l.classList.add("hidden"),e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var a=0;a<r;a++)for(var f=0;f<n;f++){var u=document.getElementById("".concat(a,"-").concat(f));u.innerText="",u.classList.value="",u.classList.add("field-cell"),d.classList.add("hidden")}t=0,i.innerText=t}}),document.addEventListener("keyup",function(e){o||("ArrowLeft"===e.code?(h(),v()):"ArrowRight"===e.code?(y(),v()):"ArrowUp"===e.code?(E(),v()):"ArrowDown"===e.code&&(x(),v()),i.innerText=t,g(),T()||l.classList.remove("hidden"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3c4fa3ce.js.map