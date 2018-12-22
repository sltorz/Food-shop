$(function(){
   var $wleft = $(".w_Left");
   var $wleftul = $(".w_Left ul");
    var $wleftullis = $(".w_Left ul li");


   var wleftHeight = $wleft.height();
   var wleftulHeight = $wleftul.height();
    var liHeight = $wleftullis.height();
 

    // console.log(wleftHeight,wleftulHeight)

    // 静态情况下的拖动范围
    var maxstaticY = 0;
    // 盒子的高度减ul的高度就是能拖动的最大距离
    // var minstaticY = wleftHeight - wleftulHeight - 95;
    var minstaticY = wleftHeight - wleftulHeight-49;

    //动态情况下的拖动范围
    var maxdynamicY = 100;
    var mindynamicY = minstaticY - 100;

    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var currentY = 0;
    $wleftul.on("touchstart",function(e){
           var touch = e.targetTouches[0];
           startY = touch.clientY;

    })
    $wleftul.on("touchmove",function(e){
        var touch = e.targetTouches[0];
        moveY = touch.clientY;
        distanceY = moveY - startY;
        if(distanceY+currentY > maxdynamicY){
            return;
        }
        if(distanceY+currentY < mindynamicY){
            return;
        }
        $wleftul.css("top",distanceY+currentY);
    })
    $wleftul.on("touchend",function(e){
        if(distanceY+currentY > maxstaticY){
            currentY = maxstaticY;
            $wleftul.css("transition","top 0.5s");
            $wleftul.css("top",0);
        }
        else if(distanceY+currentY < minstaticY){
            currentY = minstaticY;
            $wleftul.css("transition","top 0.5s");
            $wleftul.css("top",minstaticY);
        }
        else{
            currentY += distanceY;
        }
        startY = 0;
        moveY = 0;
        distanceY = 0;
    })

    $wleftullis.each(function(idx,ele){
        ele.index = idx;
    })
    $wleftullis.on("click",function(){
         $wleftullis.removeClass("leftactive");
         $(this).addClass("leftactive");
         var idx = this.index;

        if(-idx*liHeight >= minstaticY){
            $wleftul.css("transition","top 0.5s");
            $wleftul.css("top",-idx*liHeight);
            currentY = -idx*liHeight;
        }
        else{
            $wleftul.css("transition","top 0.5s");
            $wleftul.css("top",minstaticY);
            currentY = minstaticY;
        }


    })
})

$(function(){
    FastClick.attach(document.body);
});
$(function(){
    var $youxiajiao = $(".youxiajiao");
    var $youxiajiaoa = $(".youixajiao a");
    $youxiajiaoa.on("click",function(){
        $youxiajiao.css("background-color","yellow");
    })
})