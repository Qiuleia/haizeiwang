window.onload = function () {
    var rtext = window.document.querySelector('.rtext')
    var rimg = window.document.querySelector('.rimg img')
    var lis = document.querySelectorAll('.rname')
    var arr = Object.keys(suoLong2)
    var img = document.querySelectorAll('.banner-list div');
    var leftbtn =document.querySelector('.left')
    var rightbtn =document.querySelector('.right')
    var sname = document.querySelectorAll('.sname')

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
    

    var timer
    
    img.forEach((element, index) => {
        element.indey = index;
    })
    start()
   function start(){
    timer = setInterval(() => {
        img.forEach((element, index) => {
            element.style.transition = 'all,1s'
        })
        move()
    }, 2000)
   }
   
    leftbtn.onclick = function(){
        clearInterval(timer)
        img.forEach((element, index) => {
            element.style.transition = 'all,0s'
            })
                move()
                start()
    }
    rightbtn.onclick = function(){
        clearInterval(timer)
        img.forEach((element, index) => {
            element.style.transition = 'all,0s'
        if(element.indey >= 4){
            element.indey = -1
        }
        element.indey= element.indey+2
        })
            move()
            start()
    }
    function move() {
        img.forEach((element, index) => {
            // element.style.transition = 'all,1s'
            element.style.transform = `translateX(${100 * element.indey}px) translateZ(${-100 * element.indey}px)`
            // console.log(element.style.transform)

            if (element.indey <= 0) {
                element.indey = 5
                element.style.transform = `translateX(${100 * element.indey}px) translateZ(${-100 * element.indey}px)`
            }
            element.indey = element.indey - 1
        })

    }
    lis.forEach((element, index) => {
        element.onclick = function () {
            for(var i =0; i<10; i++){
                element.parentElement.children[i].className = "rname"
            }
            
            // console.log(element.parentElement.children.className)
            element.className =  element.className+" checked"
            // console.log( element.className+" checked")
            rtext.innerHTML = " "
            switch (index) {
                case 0:
                    fName1 = luFei1;
                    fName2 = lufei2;
                    break;
                case 1:
                    fName1 = suoLong1;
                    fName2 = suoLong2;
                    break;
                case 2:
                    fName1 = naMei1;
                    fName2 = naMei2;
                    break;
                case 3:
                    fName1 = wuSuoPu1;
                    fName2 = wuSuoPu2;
                    break;
                case 4:
                    fName1 = sanZhi1;
                    fName2 = sanZhi2;
                    break;
                case 5:
                    fName1 = qiaoBa1;
                    fName2 = qiaoBa2;
                    break;
                case 6:
                    fName1 = luoBing1;
                    fName2 = luoBing2;
                    break;
                case 7:
                    fName1 = fuLanQi1;
                    fName2 = fuLanQi2;
                    break;
                case 8:
                    fName1 = buLuKe1;
                    fName2 = buLuKe2;
                    break;
                case 9:
                    fName1 = shenPing1;
                    fName2 = shenPing2;
                    break;
            }
            for (var i = 0; i < 10; i++) {
                if (i == 8) {
                    for (var j = 0; j < fName1[arr[i]].length; j++) {
                        var text = `<p><span>${fName1[arr[i]][j]}：</span>${fName2[arr[i]][j]}</p>`
                        rtext.insertAdjacentHTML('beforeend', text)
                    }
                } else {
                    var text = `<p><span>${fName1[arr[i]]}：</span>${fName2[arr[i]]}</p>`
                    rtext.insertAdjacentHTML('beforeend', text)
                }
            }
            rimg.src = fName2.img
        }
    })
    sname.forEach((element)=>{
        element.onclick = function() {
            
        }
    })
}

class Item {
    constructor(other) {
        this.name = "姓名";
        this.time = "初次登场";
        this.age = "年龄";
        this.birthday = "生日";
        this.constellation = "星座";
        this.height = "身高";
        this.hometown = "故乡";
        this.identity = "身份";
        this.other = other;
        this.offer = "悬赏";
    }
}
class Info {
    constructor(name, time, age, birthday, constellation, height, hometown, identity, other, offer, img) {
        this.name = name;
        this.time = time;
        this.birthday = birthday;
        this.age = age;
        this.constellation = constellation;
        this.height = height;
        this.hometown = hometown;
        this.identity = identity;
        this.other = other;
        this.offer = offer;
        this.img = img;
    }

}
var luFei1 = new Item(["恶魔果实", "霸气"])
var lufei2 = new Info("草帽”蒙奇·D·路飞（モンキー・D・ルフィ/Monkey D. Luffy）"
    , "漫画第1话，动画第1集"
    , "17岁→19岁"
    , "5月5日（日本男孩节）"
    , "金牛座"
    , "172cm→174cm"
    , "东海-哥雅王国-风车村"
    , "草帽一伙船长/草帽大船团船长"
    , ["橡胶果实"
        , "霸王色霸气、武装色霸气、见闻色霸气"]
    , "3000万贝里（可可亚西村事件）→1亿贝里（阿拉巴斯坦事件）→3亿贝里（司法岛事件)→4亿贝里（顶上战争后）→5亿贝里（德雷斯罗萨后）→15亿贝里（蛋糕岛事件）"
    , '../img/roleinfo/role/80.jpeg')
var suoLong1 = new Item(["霸气", "武器"])
var suoLong2 = new Info("罗罗诺亚·索隆（ロロノア・ゾロ/Roronoa Zoro）"
    , "漫画第3话，动画第2集"
    , "19岁→21岁"
    , "11月11日"
    , "天蝎座"
    , "178cm→181cm（两年后）"
    , "东海-霜月村"
    , "东海赏金猎人→草帽一伙剑士"
    , ["武装色霸气、见闻色霸气"
        , "和道一文字、雪走（已断）、三代鬼彻、秋水（已归还和之国）、阎魔"]
    , "6000万贝里（阿拉巴斯坦事件）→1亿2000万贝里（司法岛事件）→3亿2000万贝里（德雷斯罗萨后）"
    , '../img/roleinfo/role/81.jpeg')
var naMei1 = new Item(["武器"])
var naMei2 = new Info("小贼猫”娜美（ナミ/Nami）"
    , "漫画第8话，动画第1集"
    , "18岁→20岁"
    , "7月3日"
    , "巨蟹座"
    , "169cm→170cm"
    , "东海-可可亚西村"
    , "阿龙海贼团测量员→草帽一伙航海士"
    , ["三截式长棍→天候棒（由乌索普发明）→完全版天候棒（由乌索普改良）→魔法天候棒（由气象岛学者改良）→大成版魔法天候棒（由乌索普、弗兰奇改良）"]
    , "1600万贝里（司法岛事件）→6600万贝里（德雷斯罗萨后）"
    , '../img/roleinfo/role/82.jpeg')
var wuSuoPu1 = new Item(["绰号", "武器", "霸气"])
var wuSuoPu2 = new Info("狙击之王”&“GOD”乌索普（ウソップ/Usopp）"
    , "漫画第23话，动画第9集"
    , "17岁→19岁"
    , "4月1日"
    ,
    "白羊座"
    , '174cm→176cm'
    , "东海-西罗普村"
    , "乌索普海贼团船长→草帽一伙狙击手"
    , ["狙击王、长鼻子"
        , "弹弓“银河小弹珠”、橡皮筋、铁锤、巨型弹弓“兜”、“狙击王”的面具 、弹弓“黑兜”、POP GREEN、弹弓“成长黑兜”+“吞食草”等"
        , "见闻色霸气"]
    , "3000万贝里（以“狙击王”的身份在司法岛事件中）→2亿贝里（德雷斯罗萨后）"
    , '../img/roleinfo/role/83.jpeg')
var sanZhi1 = new Item(["能力", "霸气"])
var sanZhi2 = new Info("黑足”文斯莫克·山治（ヴィンスモーク・サンジ/Vinsmoke Sanji）"
    , "漫画第43话，动画第20集"
    , "19岁→21岁"
    , "3月2日 （TV版为3月4日）"
    , "双鱼座"
    , "177cm→180cm"
    , "北海-杰尔马王国"
    , "杰尔马66成员→海上餐厅巴拉蒂副料理长→草帽一伙厨师/草帽团三主力之一"
    , ["脚技、刀法、烹饪、月步、战斗服"
        , "见闻色霸气、武装色霸气"]
    , "7700万贝里（司法岛事件）→1亿7700万贝里（德雷斯罗萨后）→3亿3000万贝里（蛋糕岛事件）"
    , '../img/roleinfo/role/84.jpeg')
var qiaoBa1 = new Item(['喜欢的食物', "恶魔果实", "能力"])
var qiaoBa2 = new Info("爱吃棉花糖的”托尼托尼·乔巴（トニートニー・チョッパー/Tony Tony Chopper）",
    '漫画第134话，动画第81集',
    '15岁→17岁',
    '12月24日',
    '摩羯座',
    '50cm-380cm',
    '伟大航路-磁鼓王国（路飞赶走瓦波尔国王后改名樱花王国）',
    '磁鼓王国医生→草帽一伙船医',
    ['喜欢的棉花糖，巧克力，所有甜的食物',
        '恶魔人人果实',
        '8段变形，现能控制暴走形态需食用蓝波球'],
    '50贝里（司法岛事件）→100贝里（德雷斯罗萨后）'
    , '../img/roleinfo/role/85.jpeg')
var luoBing1 = new Item(["三围", "恶魔果实"])
var luoBing2 = new Info("恶魔之子”妮可·罗宾（ニコ・ロビン/Nico Robin）",
    '初次登场：漫画第114话，动画第67集'
    , '28岁→30岁'
    , '2月6日'
    , '水瓶座'
    , '188cm'
    , '西海-考古之岛奥哈拉'
    , '奥哈拉岛考古学家→巴洛克工作社副社长Miss. All Sunday→草帽一伙考古学家'
    , ['B99 W59 H89'
        , '花花果实']
    , '7900万贝里（奥哈拉事件）→8000万贝里（司法岛事件）→1亿3000万贝里（德雷斯罗萨后）'
    , '../img/roleinfo/role/86.jpeg')
var fuLanQi1 = new Item(['现住', '武器'])
var fuLanQi2 = new Info("改造人（铁人）”弗兰奇（フランキー/Franky）"
    , '漫画第329话，动画第233集'
    , '34岁→36岁'
    , '3月9日'
    , '双鱼座'
    , '226cm→240cm'
    , '南海'
    , '水之七都汤姆工作室学徒→水之都“弗兰奇之家”老大→草帽一伙船匠'
    , ['伟大航路-水之都', '除了后背外浑身都是武器']
    , '4400万贝里（司法岛事件）→9400万贝里（德雷斯罗萨后）'
    , '../img/roleinfo/role/87.jpeg')
var buLuKe1 = new Item(["恶魔果实", "武器"])
var buLuKe2 = new Info("鼻歌”&“灵魂之王”布鲁克（ブルック/Brook）",
    '漫画第442话，动画第337集'
    , '88岁→90岁'
    , '4月3日'
    , '白羊座'
    , '266cm→277cm'
    , '西海'
    , '某国护卫战团团长→伦巴海贼团代理船长&剑士&音乐家→草帽一伙音乐家&剑士'
    , ['黄泉果实'
        , '拐杖剑（丧魂之剑）']
    , '3300万贝里（50年前）→8300万贝里（德雷斯罗萨后）'
    , '../img/roleinfo/role/88.jpeg')
var shenPing1 = new Item(['能力', '霸气'])
var shenPing2 = new Info("海侠”甚平（ジンベエ/Jinbei）"
    , '漫画第528话，动画第423集'
    , '44岁→46岁'
    , '4月2日'
    , '白羊座'
    , '301cm'
    , '鱼人岛'
    , '尼普顿军队士兵→太阳海贼团副船长→太阳海贼团船长→草帽一伙舵手'
    , ['鱼人柔术、鱼人空手道'
        , '武装色霸气，见闻色霸气']
    , '7600万贝里（太阳海贼团时期）→2亿5000万贝里（七武海时期） →4亿3800万贝里（顶上战战争后）'
    , '../img/roleinfo/role/89.jpeg')