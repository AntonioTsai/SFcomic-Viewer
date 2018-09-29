// ==UserScript==
// @name         SFcomic Viewer
// @namespace
// @version      1.1.1
// @description  A userscript for convenient viewing SFcomic.
// @author       AntonioTsai
// @include      /^http[s]?\:\/\/comic.sfacg.com\/HTML\/.*\/$/
// @include      /^http[s]?\:\/\/manhua.sfacg.com\/mh\/.*\/$/
// @include      /^http[s]?\:\/\/www.acg456.com\/HTML\/.*\/$/
// @grant        none
// @downloadURL  https://github.com/AntonioTsai/SFcomic-Viewer/raw/master/SFcomicViewer.user.js
// ==/UserScript==

/* global picAy */
(() => {
  const imgTable = document.querySelector('table tbody')
  const tempTr = document.createElement('tr')
  tempTr.appendChild(document.createElement('td'))

  // Remove original image & social media icon
  imgTable.querySelector('tr').remove()

  // Render all images
  // picAy - global array defined by site
  picAy.map((pic) => {
    const imgTr = tempTr.cloneNode(true)
    const img = document.createElement('img')

    img.src = pic
    img.className = 'scalable'
    imgTr.querySelector('td').appendChild(img)
    imgTable.appendChild(imgTr)
  })

  // Add CSS style
  let link = document.createElement('link')
  const cssFileUrl = 'https://raw.githubusercontent.com/AntonioTsai/SFcomic-Viewer/master/css/style.css'
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', cssFileUrl)
  document.head.appendChild(link)

  const topPagination = document.querySelector('.Reduction_top + .wrap > .page_turning')

  // Remove tips
  topPagination.lastChild.remove()

  // Remove unnecessary NextPage & PrePage button
  // Select the button on the top
  const topButtons = topPagination.querySelectorAll(':not(:nth-child(n+6)):not(:nth-child(-n+2))')
  topButtons.forEach((current) => {
    current.remove()
  })

  // Select the button at the bottom
  const bottomButtons = document.querySelectorAll('table + .wrap > .page_turning > :not(:nth-child(n+5)):not(:nth-child(-n+1))')
  bottomButtons.forEach((current) => {
    current.remove()
  })
})()
