import{i as t,a as o,b as i,d as s,c as n}from"./GlobalNavigationOverflow-DyPWVyv_.js";import{_ as a,a as e}from"./tslib.es6-DQsD9AwJ.js";import{g as r}from"./getUnreadNotificationsTotal-enLNdzbr.js";import{U as c}from"./index-Bkrt5VNq.js";import{c as l,d as f}from"./SearchModalInit-DsVpnA2v.js";import{i as d}from"./GlobalNavigationTracking-C3IMExJz.js";import{e as u}from"./events-D9QL1ZrV.js";import{E as m}from"./consts-eR6kglzq.js";import"./tooltips-BBkwf25Y.js";import"./updateRedirectLinks-DvKM-9mj.js";import"./_create_class-qTAYELnC.js";import"./tracking-Bcq7w0Z_.js";import"./style-inject.es-DDA6_zrG.js";var p;function j(){return j=a((function(){var t,o,i,s;return e(this,(function(n){switch(n.label){case 0:return(t=document.querySelector(".notifications"))?(o=t.querySelector(".notifications__toggle"),i=t.querySelector(".notifications__counter"),[4,r()]):[2];case 1:return s=n.sent(),function(){if(s&&i){if(s>=c)return i.classList.add("notifications__counter-plus"),void(i.textContent="".concat(c,"+"));i.textContent="".concat(s)}}(),null==o||o.addEventListener("click",(function(o){var i;null===(i=o.target.closest(".wds-dropdown"))||void 0===i||i.classList.add("wds-is-active"),document.querySelector(".search-modal")&&l(),import("./initNotifications-D5Ln8alI.js").then((function(o){var i=o.default;p&&p(),p=i(t,s)}))})),[2]}}))})),j.apply(this,arguments)}u.on(m.globalNavRendered,(function(){t(),o(),i(),function(){j.apply(this,arguments)}(),d()})),u.on(m.globalNavDestroyed,(function(){s(),n(),f(),p&&p()}));
