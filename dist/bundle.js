!function(t){var e={};function l(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=e,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l(l.s=0)}([function(t,e,l){"use strict";l.r(e);l(1),l(2)},function(t,e){let l=[];const n=document.querySelector(".app"),a=document.querySelector(".js-ball"),r=document.querySelector(".js-turn");let o=[0,0];function i(){let t="";for(let e=0;e<l.length;e+=1){let n=l[e];for(let e=0;e<n.length;e+=1)cacheClass="",cacheText="",1===n[e][0]&&(cacheClass="block"),2===n[e][0]&&(cacheText="start"),3===n[e][0]&&(cacheText="finish"),t+=`<span class="item ${cacheClass}" data-pos="${e}" data-state="${n[e][0]}">${cacheText}</span>`}n.innerHTML=null,n.innerHTML=t,t=null}function c(){l=[];let t=[];for(let e=0;e<6;e+=1){t[e]=[];for(let l=0;l<10;l+=1){t[e][l]=[];let n=parseInt(10*Math.random());t[e][l][0]=n<=4?0:1,t[e][l][1]=""}}(l=t)[0][0][0]=2,l[0][0][1]="ball";let e=parseInt(10*Math.random()),n=parseInt(10*Math.random()),r=0,c=0;c=n>=9?9:0===n?1:n,l[r=e>=5?5:0===r?0:e][c][0]=3,l[r][c][1]="",o=[0,0],a.style.left="0px",a.style.top="0px",i()}r.addEventListener("click",function(){this.classList.contains("active")?(n.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active")):(n.classList.add("active"),a.classList.add("active"),r.classList.add("active"))},!0),window.addEventListener("keydown",function(t){"ArrowUp"===t.key&&ballUp(),"ArrowLeft"===t.key&&ballLeft(),"ArrowRight"===t.key&&ballRight(),"ArrowDown"===t.key&&ballDown()},!0),ballLeft=(()=>{let t=o[0],e=o[1],n=e-1;return 0===o[1]?(alert("You can’t go there"),!1):1===l[t][n][0]?(alert("There is a block, think again"),!1):void(3===l[t][n][0]?(l[t][e][1]="",l[t][n][1]="ball",o[1]=n,a.style.left=`${100*n}px`,c(),alert("Congratulations you won!")):(l[t][e][1]="",l[t][n][1]="ball",o[1]=n,a.style.left=`${100*n}px`,i()))}),ballRight=(()=>{let t=o[0],e=o[1],n=e+1;return 9===o[1]?(alert("You can’t go there"),!1):1===l[t][n][0]?(alert("There is a block, think again"),!1):void(3===l[t][n][0]?(l[t][e][1]="",l[t][n][1]="ball",o[1]=n,a.style.left=`${100*n}px`,c(),alert("Congratulations you won!")):(l[t][e][1]="",l[t][n][1]="ball",o[1]=n,a.style.left=`${100*n}px`,i()))}),ballUp=(()=>{let t=o[0],e=o[1],n=t-1;return 0===o[0]?(alert("You can’t go there"),!1):1===l[n][e][0]?(alert("There is a block, think again"),!1):void(3===l[n][e][0]?(l[t][e][1]="",l[t][n][1]="ball",o[1]=n,a.style.top=`${100*n}px`,c(),alert("Congratulations you won!")):(l[t][e][1]="",l[n][e][1]="ball",o[0]=n,a.style.top=`${100*n}px`,i()))}),ballDown=(()=>{let t=o[0],e=o[1],n=t+1;return 5===o[0]?(alert("You can’t go there"),!1):1===l[n][e][0]?(alert("There is a block, think again"),!1):void(3===l[n][e][0]?(l[t][e][1]="",l[t][n][1]="ball",o[1]=n,a.style.top=`${100*n}px`,c(),alert("Congratulations you won!")):(l[t][e][1]="",l[n][e][1]="ball",o[0]=n,a.style.top=`${100*n}px`,i()))}),document.addEventListener("DOMContentLoaded",function(t){c()})},function(t,e,l){}]);