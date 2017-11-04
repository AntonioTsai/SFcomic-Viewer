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
		img.className = "scalable";
		imgTr.querySelector('td').appendChild(img);
		imgTable.appendChild(imgTr);
	});

	// Add CSS style
	const customStyle = document.createElement('style');
	let styleSheet;

	document.head.appendChild(customStyle);
	styleSheet = customStyle.sheet;
	// Set max-width to a huge number to ensure img show as its original size
	styleSheet.insertRule("img.scalable { max-width: 100vw; width: auto; -webkit-transition: max-width .5s 2s; transition: transition: max-width .5s 2s; }");
	styleSheet.insertRule("img.scalable:hover { max-width: 5000px; -webkit-transition: max-width .25s 0s; transition: max-width .25s 0s; }");
})();
