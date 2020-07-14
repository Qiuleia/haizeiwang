window.onload = function() {
    var music = document.querySelector(".music")
    var musicstart = document.querySelector(".icon-yinle")
    var stop = document.querySelector(".icon-jinzhi")
    var song = document.querySelector("audio");
    // song.play()
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
}
   
    


