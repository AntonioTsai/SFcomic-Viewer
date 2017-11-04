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
	tempTr.appendChild(document.createElement("td"));

	// Remove original image & social media icon
	imgTable.querySelector('tr').remove();

	// Render all images
	picAy.map((pic) => {
		const imgTr = tempTr.cloneNode(true);
		const img = document.createElement("img");

		img.src = hosts[getHost()] + pic;
		imgTr.querySelector('td').appendChild(img);
		imgTable.appendChild(imgTr);
	});
})();
