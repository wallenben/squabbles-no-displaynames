// ==UserScript==
// @name         Remove Display Names
// @namespace     https://squabbles.io/
// @version      0.2
// @description  Removes all display names from squabbles.
// @author       rayquaza
// @match        https://squabbles.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'; 
    function removeElements(elements) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
    function checkForElements() {
        let elements = document.getElementsByClassName('text-decoration-none text-muted');
        if(elements.length > 0){
            removeElements(elements);
        }
    }
    setInterval(checkForElements, 1000);
})();
