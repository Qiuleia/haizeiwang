
var that =this

window.onload = function () {
    var flag = 0;
    var index = []
    var n;

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

    getElement = function () {
        this.banners = document.querySelectorAll('.banner-img')
        this.btnleft = document.querySelector('.btnleft');
        this.btnright = document.querySelector('.btnright')
        for (var i = 0; i < this.banners.length; i++) {
            this.banners[i].index = i
            this.banners[i].indey = i
            this.banners[i].onclick = function () {
                btnClick(this)
            }
        }
        this.btnleft.onclick =function() {   
            clearInterval(that.timer)
            flag=flag-1
            if(flag<0){
                flag=5
            }
            upMove(flag)
            setTimeout(()=>{
                clearInterval(that.timer)
                start()
            },500)  
           
        }
        this.btnright.onclick =function() {
            clearInterval(that.timer)
            flag++
            if(flag>6){
                flag=1
            }
            upMove(flag)
            setTimeout(()=>{
            clearInterval(that.timer)
                start()
            },300) 
        }
    }
    /* 点击图片切换 */
    btnClick = function (item) {

        if (item.index > 0 && item.index < 3) {
            clearInterval(this.timer)
            // 方式一
            flag = item.indey
            // 方式二
            // flag= flag +item.index
            // if(flag>6){
            //     flag=1
            // }
            upMove(flag)
            setTimeout(() => {
                start()
            }, 0)

        } else if (item.index > 3) {
            // 方式一
            //    console.log(111)
            clearInterval(this.timer)
            // 方式二
            flag = 6 - item.indey
            //    flag=flag-item.index+6
            //    if(flag>6){
            //     flag=1
            // }
            downMove(flag)
            setTimeout(() => {
                start()
            }, 0)
        }
    }
    /* 获取图片transform和图片当前位置编号 */
    position = function () {
        for (var j = 0; j < this.banners.length; j++) {
            this.position[j] = window.getComputedStyle(this.banners[j]).transform;
            index[j] = this.banners[j].index
            // console.log(index[j])
        }
    }
    /* 向右切换图片 */
    upMove = function (flag) {
        for (var i = 0; i < this.banners.length; i++) {
            if (i - flag >= 0) {
                this.banners[i].style.transform = this.position[i - flag]
                this.banners[i].index = index[i - flag]
            } else {
                this.banners[i].style.transform = this.position[6 - flag + i]
                this.banners[i].index = index[6 - flag + i]
            }
        }

    }
    /* 向左切换图片 */
    downMove = function (flag) {
        for (let i = 0; i < this.banners.length; i++) {
            if (i + flag < 6) {
                this.banners[i].style.transform = this.position[i + flag]
                this.banners[i].index = index[i + flag]
            } else {
                this.banners[i].style.transform = this.position[i + flag - 6]
                this.banners[i].index = index[i + flag - 6]
            }
        }
    }
    /* 开启图片transition */
    transition = function () {
        for (var i = 0; i < this.banners.length; i++) {
            this.banners[i].style.transition = `all,0.5s`

        }
    }
    /* 开始切换动画 */
    start = function () {
        this.timer = setInterval(() => {
            flag++
            if (flag > 6) {
                flag = 1
            }
            upMove(flag)
        }, 2000)
    }
    getElement()
    transition()
    position()
    start()
}
