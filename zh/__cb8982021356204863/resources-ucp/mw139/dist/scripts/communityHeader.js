import{a as e}from"./dropdowns-DTtMfVlr.js";import{a as t}from"./tracking-Bcq7w0Z_.js";import{i as a,d as o}from"./WikiTools-n6SSzWIT.js";import{e as n}from"./events-D9QL1ZrV.js";import{E as i}from"./consts-eR6kglzq.js";import"./_create_class-qTAYELnC.js";import"./SearchModalInit-73dNp-ac.js";import"./tslib.es6-DQsD9AwJ.js";var r=".fandom-community-header__local-navigation > .wds-tabs > .wds-dropdown:nth-last-child(-n+2)",c=181;function m(){var t=document.querySelectorAll(r);e(t,c)}function d(){var e,a;e="community-header",(a=document.querySelector(".fandom-community-header"))&&t(a,[{name:"communityHeaderLogo",selector:".fandom-community-header__image",category:e,label:"logo"},{name:"communityHeaderCommunityName",selector:".fandom-community-header__community-name",category:e,label:"community-name"},{name:"communityHeaderWikiTools",selector:".wiki-tools [data-tracking]",category:"community-header-wiki-tools",label:function(e){return e.querySelector(".wds-spinner")?null:e.getAttribute("data-tracking")}},{name:"communityHeaderExploreMenu",selector:".fandom-community-header__local-navigation > .wds-tabs > .explore-menu [data-tracking]",category:"community-header-explore-menu",label:function(e){return e.getAttribute("data-tracking")}},{name:"communityHeaderCommunityLinks",selector:".fandom-community-header__local-navigation > .wds-tabs > :not(.explore-menu) [data-tracking]",category:"community-header-community-links",label:function(e){return e.getAttribute("data-tracking")}}]),function(){var e="sticky-header",a=document.querySelector(".fandom-sticky-header");a&&t(a,[{name:"stickyHeaderLogo",selector:".fandom-community-header__logo",category:e,label:"logo"},{name:"stickyHeaderSiteName",selector:".fandom-community-header__site-name",category:e,label:"site-name"},{name:"stickyHeaderWikiTools",selector:".wiki-tools [data-tracking]",category:"sticky-header-wiki-tools",label:function(e){return e.getAttribute("data-tracking")}},{name:"stickyHeaderExploreMenu",selector:".fandom-community-header__local-navigation > .wds-tabs > .explore-menu [data-tracking]",category:"sticky-header-explore-menu",label:function(e){return e.getAttribute("data-tracking")}},{name:"stickyHeaderCommunityLinks",selector:".fandom-community-header__local-navigation > .wds-tabs > :not(.explore-menu) [data-tracking]",category:"sticky-header-community-links",label:function(e){return e.getAttribute("data-tracking")}}])}()}n.on(i.communityHeaderRendered,(function(){document.querySelectorAll(".fandom-community-header__local-navigation").forEach((function(e){!function(e){e.addEventListener("mouseover",(function(e){var t=e.target.closest("li.wds-dropdown-level-nested"),a=null==t?void 0:t.querySelector(".wds-dropdown-level-nested__content");if(t&&a&&!a.classList.contains("is-calculated")){var o;if(t.classList.add("is-calculated"),t===(null===(o=t.parentNode)||void 0===o?void 0:o.firstElementChild))return;var n=t.getBoundingClientRect();a.getBoundingClientRect().bottom<n.bottom&&t.classList.add("wds-is-sticked-to-parent")}}))}(e)})),m(),window.addEventListener("resize",m),d(),a()})),n.on(i.communityHeaderDestroyed,(function(){window.removeEventListener("resize",m),o()}));
