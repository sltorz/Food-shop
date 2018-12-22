function headEffect(){
    var search = document.querySelector(".tabs-container");
    var banner  = document.querySelector(".t_banner");
    var bannerHeight = banner.offsetHeight;

    window.onscroll = function(e){
        var scrollTop =  getScroll().scrollTop;
        if(scrollTop <= bannerHeight){
            var opacity = scrollTop/bannerHeight;
            search.style.backgroundColor = "rgba(233,35,34,"+opacity+")";
        }
    }
}

function toggleImageZepto() {
    var index=1;
    var $banner= $(".t_banner");
    var $ul=$(".t_bannerImg");
    var $ullis=$(".t_bannerImg li");
    var $count=$ullis.size();
    var bannerWidth=$banner.width();

    var timeId=null;
    function startTimer() {
        timeId=setInterval(function(){
            index++;

        },1000);
    }
    startTimer();
}

window.onload = function(){
 /*   headEffect();*/
    toggleImageZepto();
}



function scrollchange(message,height) {

    var tt= $(".swiper-container .swiper-wrapper img")[0].height;
    var tabs_container=$("#"+message).length? $("#" + message) : $("." + message);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop < height) {
        tabs_container.css("position", "relative");
        $("#btn1").css({"background-color":"#d9d9d9","cursor":"not-allowed"});
    } else {
        tabs_container.css({"position":"fixed","top":"0px","z-index":"998"});
    }
}
$(window).bind("scroll", function() {
    var tt= $(".swiper-container .swiper-wrapper img")[0].height;
    scrollchange("tabs_container", tt);

});
$(window).bind("touchmove", function() {
    var tt= $(".swiper-container .swiper-wrapper img")[0].height;
    scrollchange("tabs_container",tt);
})