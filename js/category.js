$(function(){
    //1.获取页面元素
    var $tabscontainer = $(".tabs_container");
    var $tabscontainer = $(".tabs_container");
    
    var $tabscontainerul = $(".tabs_container ul");
    var $tabscontainerullis = $(".tabs_container ul li");
    //2.获取宽度
    var tabscontainerwidth = $tabscontainer.width();
    var tabscontainerulwidth = $tabscontainerul.width();
    var liwidth = $tabscontainerullis.width();


    var maxstaticX = 0;
    var minstaticX = tabscontainerwidth - tabscontainerulwidth;
    //4.确定动态情况下最大拖动范围
    var maxdXnamicX = 100;
    var mindXnamicX = minstaticX - 100;

    var startx = 0;
    var moveX = 0;
    var distanceX = 0;
    var currentX = 0;

    $tabscontainerul.on("touchstart",function(e){
        var touch = e.targetTouches[0];
        startX = touch.clientX;
    })
    $tabscontainerul.on("touchmove",function(e){
        var touch = e.targetTouches[0];
        moveX = touch.clientX;
        distanceX = moveX - startX;
        //超出范围
        if(distanceX+currentX > maxdXnamicX){
            console.log("哎呀超出拖动范围了");
            return;
        }
        if(distanceX+currentX < mindXnamicX){
            console.log("你妹啊！超出拖动范围了");
            return;
        }
        $tabscontainerul.css("left",distanceX+currentX);
    })
    $tabscontainerul.on("touchend",function(e){
        //松开手指回弹效果
        if(distanceX+currentX > maxstaticX){
            currentX = maxstaticX;
            $tabscontainerul.css("transition","LEFT 0.5s");
            $tabscontainerul.css("left",0);
        }
        else if(distanceX+currentX < minstaticX){
            currentX = minstaticX;
            $tabscontainerul.css("transition","left 0.5s");
            $tabscontainerul.css("left",minstaticX);
        }
        else{
            currentX += distanceX;
        }
        //清0
        startX = 0;
        moveX = 0;
        distanceX = 0;
    })
    //5.实现li的点击事件
    $tabscontainerullis.each(function(idx,ele){
       ele.index = idx;
    })
    $tabscontainerullis.on("click",function(){
        $tabscontainerullis.removeClass("active");
        $(this).addClass("active");

        //获取当前所点击的li的索引
        var idx = this.index;
        $tabscontainerul.css("transition","left 0.5s");
        if(-idx*liwidth >= minstaticX){
            $tabscontainerul.css("left",-idx*liwidth);
            currentX = -idx*liwidth;
        }
        else{
            $tabscontainerul.css("left",minstaticX);
            currentX = minstaticX;
        }
    })
})

//添加fastclick
$(function() {
    FastClick.attach(document.bodX);
});