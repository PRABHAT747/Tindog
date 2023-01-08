
 class Tin
{
    
    constructor(data){
     Object.assign(this,data)
     const{hasBeenSwiped,hasBeenLiked} = this
     this.gethhtml = function(){
       return  `
       ${this.topHtml()}
       ${this.profileHtml()}
        <div class = "button-container">
            <div class = "dislike" >
                <img src ="icons/nope-icon.png" id = "dislike" data-no = "nolike">
            </div>

            <div class = "like" >
                <img src ="icons/like-icon.png" id ="like" data-yes = "ok">
            </div>
        </div>    
        `       
        
     }
     this.profileHtml = function(){
            return `<div id = profilecontent style = "background-image:url(${this.avatar});">
                        <div class = "choice">
                        </div>
                        <div id = info>
                                <p id = "name">${this.name},${this.age}</p>
                                <p id="bio" >${this.bio}</p>     
                        </div>
                    </div>`
        
     }
     this.topHtml = function(){
        return `
<div class="top" id="top">
    <div>
        <img src = "icons/profile.png" id = "profile">
    </div>

    <div>
        <img src = "icons/paw.png" id = "paw">
    </div>

    <div>
        <img src = "icons/chat.png" id ="chat">
    </div>

</div>
`
     }    
    }
}
export default Tin