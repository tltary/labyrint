!function(e){var t={};function l(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);l(1),l(2)},function(e,t){let l=[];const n=document.querySelector(".app"),a=document.querySelector(".js-ball"),r=document.querySelector(".js-turn"),o=document.querySelector(".js-restart");let i=[0,0];function c(){let e="";for(let t=0;t<l.length;t+=1){let n=l[t];for(let t=0;t<n.length;t+=1)cacheClass="",cacheText="",1===n[t][0]&&(cacheClass="block"),2===n[t][0]&&(cacheText="start"),3===n[t][0]&&(cacheText="finish"),e+=`<span class="item ${cacheClass}" data-pos="${t}" data-state="${n[t][0]}">${cacheText}</span>`}n.innerHTML=null,n.innerHTML=e,e=null}function s(){l=[];let e=[];for(let t=0;t<6;t+=1){e[t]=[];for(let l=0;l<10;l+=1){e[t][l]=[];let n=parseInt(10*Math.random());e[t][l][0]=n<=4?0:1,e[t][l][1]=""}}(l=e)[0][0][0]=2,l[0][0][1]="ball",l[0][1][0]=0,l[0][1][1]="",l[1][0][0]=0,l[1][0][1]="";let t=parseInt(10*Math.random()),n=parseInt(10*Math.random()),r=0,o=0;o=n>=9?9:0===n?2:n,l[r=t>=5?5:0===r?2:t][o][0]=3,l[r][o][1]="",l[r-1][o][0]=0,l[r-1][o][1]="",l[r][o-1][0]=0,l[r][o-1][1]="",i=[0,0],a.style.left="0px",a.style.top="0px",c()}o.addEventListener("click",function(){s()},!0),r.addEventListener("click",function(){this.classList.contains("active")?(n.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active")):(n.classList.add("active"),a.classList.add("active"),r.classList.add("active"))},!0),window.addEventListener("keydown",function(e){"ArrowUp"===e.key&&ballUp(),"ArrowLeft"===e.key&&ballLeft(),"ArrowRight"===e.key&&ballRight(),"ArrowDown"===e.key&&ballDown()},!0),ballLeft=(()=>{let e=i[0],t=i[1],n=t-1;return 0===i[1]?(alert("You can’t go there"),!1):1===l[e][n][0]?(alert("There is a block, think again"),!1):void(3===l[e][n][0]?(l[e][t][1]="",l[e][n][1]="ball",i[1]=n,a.style.left=`${100*n}px`,s(),alert("Congratulations you won!")):(l[e][t][1]="",l[e][n][1]="ball",i[1]=n,a.style.left=`${100*n}px`,c()))}),ballRight=(()=>{let e=i[0],t=i[1],n=t+1;return 9===i[1]?(alert("You can’t go there"),!1):1===l[e][n][0]?(alert("There is a block, think again"),!1):void(3===l[e][n][0]?(l[e][t][1]="",l[e][n][1]="ball",i[1]=n,a.style.left=`${100*n}px`,s(),alert("Congratulations you won!")):(l[e][t][1]="",l[e][n][1]="ball",i[1]=n,a.style.left=`${100*n}px`,c()))}),ballUp=(()=>{let e=i[0],t=i[1],n=e-1;return 0===i[0]?(alert("You can’t go there"),!1):1===l[n][t][0]?(alert("There is a block, think again"),!1):void(3===l[n][t][0]?(l[e][t][1]="",l[e][n][1]="ball",i[1]=n,a.style.top=`${100*n}px`,s(),alert("Congratulations you won!")):(l[e][t][1]="",l[n][t][1]="ball",i[0]=n,a.style.top=`${100*n}px`,c()))}),ballDown=(()=>{let e=i[0],t=i[1],n=e+1;return 5===i[0]?(alert("You can’t go there"),!1):1===l[n][t][0]?(alert("There is a block, think again"),!1):void(3===l[n][t][0]?(l[e][t][1]="",l[e][n][1]="ball",i[1]=n,a.style.top=`${100*n}px`,s(),alert("Congratulations you won!")):(l[e][t][1]="",l[n][t][1]="ball",i[0]=n,a.style.top=`${100*n}px`,c()))}),document.addEventListener("DOMContentLoaded",function(e){s()})},function(e,t,l){}]);