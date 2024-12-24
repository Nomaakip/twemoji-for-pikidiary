// ==UserScript==
// @name         Twemoji for PikiDiary
// @namespace    http://pikidiary.lol
// @version      2024-12-24
// @description  Twemoji for PikiDiary
// @author       Wish
// @match        *://*.pikidiary.lol/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pikidiary.lol
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("Using Twemoji")
    twemoji.parse(document.body);
    // use https://userstyles.world/style/19984/twemoji-for-pikidiary-companion to make the size look good
})();