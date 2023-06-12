// ==UserScript==
// @name         Remove Display Names
// @namespace     https://squabbles.io/
// @version      0.3
// @description  Removes all display names from squabbles.
// @author       rayquaza
// @match        https://squabbles.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function swapTextContentAndRemove() {
        let parentElements = document.getElementsByClassName('flex-grow-1 align-self-center');

        for (let parent of parentElements) {
            let element1 = parent.getElementsByClassName('text-decoration-none text-muted')[0];
            let element2 = parent.getElementsByClassName('me-1 fw-bold text-decoration-none text-danger')[0] ||
                           parent.getElementsByClassName('me-1 fw-bold text-decoration-none')[0];
            if (element1 && element2) {
                let temp = element1.textContent;
                element1.textContent = element2.textContent;
                element2.textContent = temp;
                element1.parentNode.removeChild(element1);
            }
        }
    }
    setInterval(swapTextContentAndRemove, 1000);
})();
