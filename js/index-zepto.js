function headEffect(){
    //1.获取jd_search
    var search = document.querySelector(".jd_search");
    //2.获取图片轮播的高度
    var banner  = document.querySelector(".jd_banner");
    var bannerHeight = banner.offsetHeight;

    //3.获取滚动的距离
    window.onscroll = function(e){
        //如何获取滚动的距离呢
        var scrollTop =  getScroll().scrollTop;
       /* console.log(scrollTop);*/
        if(scrollTop <= bannerHeight){
            var opacity = scrollTop/bannerHeight;
            search.style.backgroundColor = "rgba(233,35,34,"+opacity+")";
        }
    }
}

function getTime(time){
    var hour = Math.floor(time/3600) ;   //12
    //分数
    var minute = Math.floor(time%3600/60);  //12
    //秒
    var second = Math.floor(time%60);  //12

    var hour1 = document.querySelector(".jd_sk_time span:first-of-type");
    hour1.innerText = Math.floor(hour/10);
    var hour2 = document.querySelector(".jd_sk_time span:nth-of-type(2)");
    hour2.innerText = Math.floor(hour%10);

    var minute1 = document.querySelector(".jd_sk_time span:nth-of-type(4)");
    minute1.innerText = Math.floor(minute/10);
    var minute2 = document.querySelector(".jd_sk_time span:nth-of-type(5)");
    minute2.innerText = Math.floor(minute%10);

    var second1 = document.querySelector(".jd_sk_time span:nth-of-type(7)");
    second1.innerText = Math.floor(second/10);
    var second2 = document.querySelector(".jd_sk_time span:nth-of-type(8)");
    second2.innerText = Math.floor(second%10);
}

function timeBack(){
    //设置倒计时的时间
    var time = 3700;
    getTime(time);

    setInterval(function(){
        time--;
        //小时数
        getTime(time);

    },1000)
}

function toggleImage(){
    var banner=$(".jd_banner");
    var bannerWidth=banner.width();
    /*获取图片盒子*/
    var imgBox=banner.find("ul:first-of-type");
    var lis=imgBox.find("li");
    var count=lis.length;
    var indicators=banner.find("ul:eq(1)").find("li");
    /*定义图片索引*/
    var index=1;

    /*图片轮播的动画效果  这边需要引入fx.js*/
    var imgAnimation=function(){
        clearInterval(timerId);
        imgBox.animate(
            {"left":-index*bannerWidth},
            500,
            "ease-in-out",
            function(){ //动画执行完毕之后的回调
                /*判断当前索引位置是否是最后一张或者第一张*/
                if(index>=count-1){ //最后张
                    index=1;
                    /*让它瞬间偏移到索引1的位置--非过渡*/
                    imgBox.css("left",-index*bannerWidth);
                }
                else if(index<=0){
                    index=count-2;
                    imgBox.css("left",-index*bannerWidth);
                }
                isEnd = true;
                /*设置点标记  removeClass() 会移除当前集合对象中所有的指定样式*/
                indicators.removeClass("active").eq(index-1).addClass("active");
                startTimer();
            }
        );
    }
    var timerId = null;
    function startTimer(){
        /*开启定时器*/
        timerId=setInterval(function(){
            index++;
            /*开启过渡*/
            /*设置定位*/
            /*在zepto中直接使用animate函数来实现
             * 1.需要添加动画效果的样式--对象
             * 2.动画的耗时
             * 3.动画的速度函数 animation-timing-function
             * 4.当前动画执行完毕之后的回调*/
            imgAnimation();
        },2000);
    }
    startTimer();


    var isEnd = true;
    imgBox.on("swipeLeft",function(){
        if(isEnd == true){
            isEnd = false;
            index++;
            imgAnimation();
        }
    });
    /*右滑动*/
    imgBox.on("swipeRight",function(){
        if(isEnd == true) {
            isEnd = false;
            index--;
            imgAnimation();
        }
    });
}

window.onload = function(){
    //1.添加头部滚动的效果
    headEffect();
    //2.添加倒计时效果
    timeBack();
    //3.添加图片轮播
    toggleImage();
}

