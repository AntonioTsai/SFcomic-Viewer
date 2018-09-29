// ==UserScript==
// @name         SFcomic Viewer
// @namespace
// @version      1.0.0
// @description  A userscript for convenient viewing SFcomic.
// @author       AntonioTsai
// @include      /^http[s]?\:\/\/comic.sfacg.com\/HTML\/.*\/$/
// @include      /^http[s]?\:\/\/manhua.sfacg.com\/mh\/.*\/$/
// @include      /^http[s]?\:\/\/www.acg456.com\/HTML\/.*\/$/
// @grant        none
// @downloadURL  https://github.com/AntonioTsai/SFcomic-Viewer/raw/master/SFcomicViewer.user.js
// ==/UserScript==

/**
 * picAy: The array store all image's url of the volume
 * hosts: The array store possible host
 * getHost(): Get the current host index
 */
(() => {
  const imgTable = document.querySelector('table tbody')
  const tempTr = document.createElement('tr')
  tempTr.appendChild(document.createElement('td'))

  // Remove original image & social media icon
  imgTable.querySelector('tr').remove()

  // Render all images
  picAy.map((pic) => {
    const imgTr = tempTr.cloneNode(true)
    const img = document.createElement('img')

    img.src = pic
    img.className = 'scalable'
    imgTr.querySelector('td').appendChild(img)
    imgTable.appendChild(imgTr)
  })

  // Add CSS style
  const customStyle = document.createElement('style')
  let styleSheet

  document.head.appendChild(customStyle)
  styleSheet = customStyle.sheet

  // Scale down image to fit screen size
  // Set max-width to a huge number to ensure img show as its original size
  styleSheet.insertRule(`img.scalable { 
    max-width: 100vw;
    width: auto;
    -webkit-transition: max-width .5s 1s;
    transition: transition: max-width .5s 1s; 
  }`)

  // Scale up to original size when hovering
  styleSheet.insertRule(`img.scalable:hover { 
    max-width: 5000px;
    -webkit-transition: max-width .25s 0.5s;
    transition: max-width .25s 0.5s; 
  }`)

  const topPagination = document.querySelector('.Reduction_top + .wrap > .page_turning')

  // Remove tips
  topPagination.lastChild.remove()

  //  Center top pagination
  styleSheet.insertRule(`.Reduction_top + .wrap > .page_turning
  {
    text-align: center !important;
  }`)

  // Remove unnecessary NextPage & PrePage button
  // Select the button on the top
  const topButtons = document.querySelectorAll('.Reduction_top + .wrap > .page_turning > :not(:nth-child(n+6)):not(:nth-child(-n+2))')
  topButtons.forEach((current) => {
    current.remove()
  })

  // Select the button at the bottom
  const bottomButtons = document.querySelectorAll('table + .wrap > .page_turning > :not(:nth-child(n+5)):not(:nth-child(-n+1))')
  bottomButtons.forEach((current) => {
    current.remove()
  })
})()
