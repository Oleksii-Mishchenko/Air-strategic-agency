parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=document.querySelectorAll("[data-theme-item]"),t=document.querySelector(".theme-switcher"),n=JSON.parse(localStorage.getItem("isLightThemeActive")),c=function(){e.forEach(function(e){var t=e.dataset.themeItem+"--light-theme";e.classList.toggle(t)})},o=function(){var e=!JSON.parse(localStorage.getItem("isLightThemeActive"));localStorage.setItem("isLightThemeActive",JSON.stringify(e))};t.addEventListener("click",function(){c(),o()}),null===n&&localStorage.setItem("isLightThemeActive",JSON.stringify(!1)),n&&c();var r=document.querySelector(".page__body"),i=document.querySelector(".header__menu-button"),l=document.querySelector(".header__nav"),a=function e(t){"nav__link"!==t.target.className&&"nav__menu-closer"!==t.target.className||(l.classList.remove("header__nav--mobile-visible"),r.classList.remove("page__body--no-scroll"),l.removeEventListener("click",e))},s=function(){l.classList.add("header__nav--mobile-visible"),r.classList.add("page__body--no-scroll"),l.addEventListener("click",a)};i.addEventListener("click",s);var u=document.querySelector(".slider__button--left"),d=document.querySelector(".slider__button--right"),m=document.querySelector(".slider__list"),v=m.children.length,_=1,g=function(e){(_+=e)<1?_=v:_>v&&(_=1);var t=100/v*(_-1);m.style.transform="translateX(-".concat(t,"%)")};d.addEventListener("click",function(){g(1)}),u.addEventListener("click",function(){g(-1)});var h=document.querySelector(".text-us__form"),f=document.querySelector(".header__button"),y=document.querySelectorAll(".service-card__button"),S=document.querySelector(".vision__button"),L=document.getElementById("page-top"),b=document.getElementById("about-us"),q=document.querySelector(".testimonials"),E=document.querySelector(".contact-us"),k=function(e){e.scrollIntoView()};f.addEventListener("click",function(){k(b)}),y.forEach(function(e){e.addEventListener("click",function(){k(q)})}),S.addEventListener("click",function(){k(E)}),h.addEventListener("submit",function(e){e.preventDefault(),h.reset(),k(L)});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.5e85ed49.js.map