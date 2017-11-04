// ==UserScript==
// @name         SFcomic Viewer
// @namespace    
// @version      0.2.1
// @description  Auto load comic picture.
// @author       AntonioTsai
// @match        http://comic.sfacg.com/*
// @include      http://comic.sfacg.com/*
// @grant        none
// @downloadURL  https://github.com/AntonioTsai/SFcomic-Viewer/raw/master/SFcomicViewer.user.js
// ==/UserScript==


/**
 * picAy: The array store all image's url of the volume
 * hosts: The array store possible host
 * getHost(): Get the current host index
 */
(() => {
	const imgTable = document.querySelector("table tbody");
	const tempTr = document.createElement("tr");

	// remove original image & social media icon
	var tr = document.querySelector("tr");
	tr.parentElement.removeChild(tr);

	// generate all images
	for (var i = 0; i < picCount; i++) {
		var imgTr = tempTr.cloneNode(true);
		imgTr.appendChild(document.createElement("img"));
		imgTr.children[0].children[0].src = picAy[i];
		imgTable.appendChild(imgTr);
	}


})();
