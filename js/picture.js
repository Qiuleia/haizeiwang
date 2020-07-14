
 window.onload = function () {
    var items = document.querySelectorAll('.item');
    var bottom1 = document.querySelector('.item-bottom1');
    var bottom2 = document.querySelector('.item-bottom2');
    var right1 = document.querySelector('.item-right1')
    var right2 = document.querySelector('.item-right2')
    var lists1 = document.querySelectorAll('.lists1')
    var lists2 = document.querySelectorAll('.lists2')
    var lists3 = document.querySelectorAll('.lists3')
    var lists4 = document.querySelectorAll('.lists4')
    var contentImg = document.querySelector('.content img')

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

    
    var index = 0;
    var speed = 10;
    // console.log(bottom1.offsetLeft)
    lists1[0].style.top =
        items.forEach((item, index) => {
            item.onclick = function () {
                contentImg.src = item.children[0].src;
            }

        })
    // bottom1.style.transition = "all 10s linear"
    function move(element, direction, target, start, time = 30) {
        element.style.transition = `all ${time}s linear`
        // console.log(element.style.transition + 111)
        element.style[direction] = target + 'px'
        element.timer = setTimeout(() => {
            element.style.transition = 'all 0s'
            element.style[direction] = start + 'px'
            setTimeout(() => {
                move(element, direction, target, start, 60)
            }, 100);
            clearTimeout(element.timer)


        }, time * 1000)
    }

    move(bottom1, 'left', -680, 680);
    move(bottom2, 'left', -680, 680, 60)



// 编辑
    move(right1, 'top', 360, -360, 60)
    move(right2, 'top', 360, -360)




    move(lists1[0], 'top', -640, 640)
    move(lists2[0], 'top', -640, 640, 60)
    move(lists1[1], 'top', -640, 640)
    move(lists2[1], 'top', -640, 640, 60)


    move(lists3[1], 'top', 640, -640, 60)
    move(lists3[0], 'top', 640, -640, 60)
    move(lists4[0], 'top', 640, -640)
    move(lists4[1], 'top', 640, -640)
    
}