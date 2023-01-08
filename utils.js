

import{pp,contentEl}from './script.js'

function khatam(){
    contentEl.innerHTML = `<div id = "bye"><p class = "bye" >So ja Bhai</p></div>`
}

function rener(){
    contentEl.innerHTML = pp.gethhtml()
}


export { khatam,rener}