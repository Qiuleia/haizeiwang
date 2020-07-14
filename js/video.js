
window.onload =function() {
    var lis = document.querySelectorAll('li')
    var video = document.querySelector('video')
    var categroy =document.querySelectorAll('.category div')
    var totality = document.querySelector('.totality')
    var describe = document.querySelector('.describe')
    var movice = ['../video/1.mp4','../video/2.mp4','../video/3.mp4','../video/4.mp4','../video/5.mp4']


    var music = document.querySelector(".music")
    var musicstart = document.querySelector(".icon-yinle")
    var stop = document.querySelector(".icon-jinzhi")
    var song = document.querySelector("audio");
    music.onclick = function () {
    
        // console.log(musicstart.style.animation)
        if (song.paused) {
            musicstart.style.animation = "rotate 5s 0s linear infinite forwards"
            musicstart.style.animationPlayState = "running"
            stop.style.display = "none"
            song.play()
        } else {
            musicstart.style.animationPlayState = "paused"
            stop.style.display = "block"
            song.pause()
        }
    }

    categroy.forEach((element,index)=>{
        element.onclick = function(){
            if(index==0){
                element.nextElementSibling.className = ''
                element.className = 'chacked'
                totality.style.display = 'block'
                describe.style.display = 'none'
            }else if(index==1){
                element.previousElementSibling.className = ''
                element.className = 'chacked'
                totality.style.display = 'none'
                describe.style.display = 'block'
            }
            
        }
       
    })
    lis.forEach((element, index)=> {
    {
        index=index%5
        element.onclick =function(){
            // console.log(  video.currentSrc )
             video.src = movice[index]
             video.currentTime = 0
             video.play()
        }
    }
   });
   
}