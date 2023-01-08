import { dogs } from './data.js'
import Tin from './Tin.js'
import { rener,khatam } from './utils.js'
const contentEl = document.getElementById('content')
const wholeEl = document.getElementById('container')


function getNewProfile(){
    const newg = dogs.shift()
    return newg ? new Tin(newg) : {}
}
let pp = getNewProfile()

function choice(p){
    if(p.target.dataset.no){
        pp.hasBeenSwiped = true
        document.querySelector(".choice").classList.add("nopee");
    }else if (p.target.dataset.yes){
        pp.hasBeenSwiped = true 
        pp.hasBeenLiked = true
        document.querySelector(".choice").classList.add("likee");
    }
    if(pp.hasBeenSwiped || pp.hasBeenLiked){
        callback()
    }
}
function callback(){
    if(dogs.length>0){
    setTimeout(function(){
        pp = getNewProfile() 
        rener()
    },2000)
}
else{
    setTimeout(function(){
        khatam()
    },2000)
}

}
wholeEl.addEventListener('click' ,function(e){
    choice(e)
})
rener()
export {pp,contentEl}