/*轮播图列表选项卡效果开始*/
{
    let li=document.querySelectorAll(".banner-item");
    let content=document.querySelectorAll(".banner-item-content");
    console.log(content);
    li.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for (let i=0;i<li.length;i++){
                content[i].classList.remove("active");
            }
            content[index].classList.add("active");
        }
        ele.onmouseleave=function () {
            for (let i=0;i<li.length;i++){
                content[i].classList.remove("active");
            }
        }
    })

/*$(".banner-item").hover(function (index,ele) {
    for (let i=0;i<$(".banner-item").length;i++){
        $(".banner-item-content")[i].classList.remove("active");
    }
    $(".banner-item-content")[index].classList.add("active");
},function () {
    
});
    console.log($(".banner-item"));*/
}
/*轮播图列表选项卡效果结束*/
/*小米轮播图部分开始*/
{
    let dot = document.querySelectorAll(".dots>ul>li");
    // console.log(dot);
    let img = document.querySelectorAll(".banner-img>ul>li");
    // console.log(img);
    let flag = false;
    let flag2 = true;
    dot.forEach(function (ele, index) {
        ele.onclick = function () {
            flag = true;
            now = index;
            clearInterval(ziDongLunBo);
            for (let i = 0; i < img.length; i++) {
                dot[i].classList.remove("active");
                img[i].classList.remove("active");
            }
            this.classList.add("active");
            img[index].classList.add("active");
        }

    });
    let now = 0;
    function move() {
        // console.log("点击之前" + now);
        now++;
        // console.log("点击之后" + now);
        // console.log("now的值" + now);
        if (now === img.length) {
            now = 0;
        }
        if (now === -1) {
            now = img.length - 1;
        }
        for (let i = 0; i < img.length; i++) {
            dot[i].classList.remove("active");
            img[i].classList.remove("active");
        }
        dot[now].classList.add("active");
        img[now].classList.add("active");
    }

    let ziDongLunBo = setInterval(move, 2000);

    let banner = document.querySelector(".banner-box");
    banner.onmouseenter = function () {
        clearInterval(ziDongLunBo);
    };
    banner.onmouseleave = function () {
        if (flag) {
            return;
        }
        ziDongLunBo = setInterval(move, 2000);
    };

    let prev = document.querySelector(".btn-left");
    let next = document.querySelector(".btn-right");
    // console.log(next);

    next.onclick = function () {
        if (flag2) {
            flag2 = false;
            flag = true;
            move();
        }
    };
    prev.onclick = function () {
        if (flag2) {
            flag2 = false;
            flag = true;
            now -= 2;
            move();
        }
    };
    img.forEach(function (ele) {
        ele.addEventListener("transitionend", function () {
            flag2 = true;
        })
    });
}
/*小米轮播图部分结束*/
/*内容开始*/
{
    function content(dots) {
        let contentDot = dots.querySelectorAll(".two-dot>li");
        let itemBox = dots.querySelector(".item-box");
        // console.log(itemBox);
        contentDot.forEach(function (ele, index) {
            ele.onclick = function () {
                for (let i = 0; i < contentDot.length; i++) {
                    contentDot[i].classList.remove("actives");
                }
                contentDot[index].classList.add("actives");
                itemBox.style.marginLeft = index * -296 + "px";
            };
        });

        let prevs = dots.querySelector(".LJianTou");
        let nexts = dots.querySelector(".Right");
        let nows = 0;
        nexts.onclick = function () {
            nows++;
            if (nows > contentDot.length - 1) {
                now--;
                return;
            }
            for (let i = 0; i < contentDot.length; i++) {
                contentDot[i].classList.remove("actives");
            }
            contentDot[nows].classList.add("actives");
            itemBox.style.marginLeft = nows * -296 + "px";
        };
        prevs.onclick = function () {
            nows--;
            if (nows < 0) {
                now = 0;
                return;
            }
            for (let i = 0; i < contentDot.length; i++) {
                contentDot[i].classList.remove("actives");
            }
            contentDot[nows].classList.add("actives");
            itemBox.style.marginLeft = nows * -296 + "px";
        }
    }

    let contentBox = document.querySelectorAll(".content-db");
// console.log(contentBox);
// console.log(contentBox);
    contentBox.forEach(function (ele) {
        content(ele);
    });
}
/*内容结束*/
/*为你推荐开始*/
{
    let prev = document.querySelectorAll(".prev");
    let next = document.querySelectorAll(".next");
    console.log(next);
    let foryouLoneBox = document.querySelector(".foryou-loneBox");
    let now = 0;
    next.forEach(function (ele, index) {
        ele.onclick = function () {
            if (now === 3) {
                return;
            }
            now++;
            foryouLoneBox.style.marginLeft = -1240 * now + "px";
        }
    });
    prev.forEach(function (ele, index) {
        ele.onclick = function () {
            if (now === 0) {
                return;
            }
            now--;
            foryouLoneBox.style.marginLeft = -1240 * now + "px";
        }
    });
}
/*为你推荐结束*/
/*返回顶部开始*/
{
    let fixed = document.querySelectorAll(".fixed>ul>li>img.smallPicture");
    let div = document.querySelectorAll(".fixed>ul>li>div.liWords");
    let fixeds = document.querySelector(".fixed>ul>li.ewmAdd>img.smallPicture");
    let sImg = document.querySelectorAll(".fixed>ul>li");
// console.log(sImg);
    let ewmAdd = document.querySelector(".ewmAdd");
    let ewm = document.querySelector(".ewm-box");

    sImg.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            // for (let i = 0; i < sImg.length; i ++){
            // }
            fixed[index].style.display = "block";
            div[index].style.display = "block";
        }
    });
    sImg.forEach(function (ele, index) {
        ele.onmouseleave = function () {
            // for (let i = 0; i < sImg.length; i ++){
            // }
            fixed[index].style.display = "none";
            div[index].style.display = "none";
        }
    });

    ewmAdd.onmouseenter = function () {
        ewm.style.display = "block";
        fixeds.style.display = "block";
    };
    ewmAdd.onmouseleave = function () {
        ewm.style.display = "none";
        fixeds.style.display = "none";
    };
    let back = document.querySelector(".back");
    back.onclick = function () {
        let lens = document.documentElement.scrollTop;
        let spd = lens / 500 * 25;  //500毫秒返回顶部   s是计算每隔25毫秒减少的时间
        let st = setInterval(function () {
            lens -= spd;
            if (lens <= 0) {
                lens = 0;
                clearInterval(st);
            }
            document.documentElement.scrollTop = lens;
        }, 25);
    }
}
/*返回顶部结束*/
<!--按需加载开始-->
{
    let back = document.querySelector(".back");
    let containers = document.querySelectorAll(".container");
    containers.forEach(function (ele) {
        if (ele.offsetTop < window.innerHeight) {
            let imgs = ele.querySelectorAll("img");
            imgs.forEach(function (img) {
                img.src = img.getAttribute("data-src");
            });
        }
    });
    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > window.innerHeight) {
            back.style.display = "block";
        } else {
            back.style.display = "none";
        }
        containers.forEach(function (ele) {
            if (st > ele.offsetTop - window.innerWidth) {
                let imgs = ele.querySelectorAll("img");
                imgs.forEach(function (img) {
                    img.src = img.getAttribute("data-src");
                });
            }
        })
    }
}
<!--按需加载结束-->