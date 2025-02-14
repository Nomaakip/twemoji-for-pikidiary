
// ==UserScript==
// @name         Twemoji for PikiDiary
// @namespace    http://pikidiary.lol
// @version      2024-12-24
// @description  Twemoji for PikiDiary
// @author       Wish
// @match        *://*.pikidiary.lol/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pikidiary.lol
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/@twemoji/api@15.1.0/dist/twemoji.min.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("Using Twemoji")
    twemoji.parse(document.body);

    var emojiSize = document.createElement('style');
    emojiSize.innerHTML = `
    img.emoji {
    height: 1em;
    width: 1em;
    margin: 0 .05em 0 .1em;
    vertical-align: -0.1em;
}`;
document.head.appendChild(emojiSize);
})();
