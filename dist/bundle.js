!function(e){var t={};function l(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);l(1),l(2)},function(e,t){let l=[[[2,"ball"],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[0,""]],[[1,""],[1,""],[0,""],[1,""],[1,""],[1,""],[1,""],[0,""],[1,""],[0,""]],[[0,""],[0,""],[0,""],[0,""],[0,""],[0,""],[1,""],[0,""],[1,""],[0,""]],[[1,""],[0,""],[1,""],[1,""],[1,""],[0,""],[1,""],[0,""],[0,""],[0,""]],[[0,""],[0,""],[1,""],[0,""],[0,""],[0,""],[0,""],[1,""],[1,""],[1,""]],[[1,""],[1,""],[1,""],[1,""],[1,""],[1,""],[0,""],[0,""],[0,""],[3,""]]];const n=document.querySelector(".app"),r=document.querySelector(".js-ball");let o=[0,0];function a(){let e="";for(let t=0;t<l.length;t+=1){let n=l[t];for(let t=0;t<n.length;t+=1)cacheClass="",cacheText="",1===n[t][0]&&(cacheClass="block"),2===n[t][0]&&(cacheText="start"),3===n[t][0]&&(cacheText="finish"),e+=`<span class="item ${cacheClass}">${cacheText}</span>`}n.innerHTML=null,n.innerHTML=e,e=null}window.addEventListener("keydown",function(e){"ArrowUp"===e.key&&ballUp(),"ArrowLeft"===e.key&&ballLeft(),"ArrowRight"===e.key&&ballRight(),"ArrowDown"===e.key&&ballDown()},!0),ballLeft=(()=>{let e=o[0],t=o[1],n=t-1;return 0===o[1]?(alert("You can’t go there"),!1):1===l[e][n][0]?(alert("There is a block, think again"),!1):void(3===l[e][n][0]?(l[e][t][1]="",l[e][n][1]="ball",o[1]=n,r.style.left=`${100*n}px`,a(),alert("Congratulations you won!")):(l[e][t][1]="",l[e][n][1]="ball",o[1]=n,r.style.left=`${100*n}px`,a()))}),ballRight=(()=>{let e=o[0],t=o[1],n=t+1;return 9===o[1]?(alert("You can’t go there"),!1):1===l[e][n][0]?(alert("There is a block, think again"),!1):void(3===l[e][n][0]?(l[e][t][1]="",l[e][n][1]="ball",o[1]=n,r.style.left=`${100*n}px`,a(),alert("Congratulations you won!")):(l[e][t][1]="",l[e][n][1]="ball",o[1]=n,r.style.left=`${100*n}px`,a()))}),ballUp=(()=>{let e=o[0],t=o[1],n=e-1;return 0===o[0]?(alert("You can’t go there"),!1):1===l[n][t][0]?(alert("There is a block, think again"),!1):void(3===l[n][t][0]?(l[e][t][1]="",l[e][n][1]="ball",o[1]=n,r.style.top=`${100*n}px`,a(),alert("Congratulations you won!")):(l[e][t][1]="",l[n][t][1]="ball",o[0]=n,r.style.top=`${100*n}px`,a()))}),ballDown=(()=>{let e=o[0],t=o[1],n=e+1;return 9===o[0]?(alert("You can’t go there"),!1):1===l[n][t][0]?(alert("There is a block, think again"),!1):void(3===l[n][t][0]?(l[e][t][1]="",l[e][n][1]="ball",o[1]=n,r.style.top=`${100*n}px`,a(),alert("Congratulations you won!")):(l[e][t][1]="",l[n][t][1]="ball",o[0]=n,r.style.top=`${100*n}px`,a()))}),document.addEventListener("DOMContentLoaded",function(e){a()})},function(e,t,l){}]);