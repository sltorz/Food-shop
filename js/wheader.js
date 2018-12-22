/**
 * Created by student on 2018/11/16.
 */
$(function(){
    var $wheader = $(".w_header");
    var $wfenlei  = $(".w_header .fenlei span");
    var $wfaxian = $(".w_header .faxian span");
    var $wmain = $(".w_layout .w_category");
    var $wfoot = $(".w_layout .w_foot");
    var $wwfaxian = $(".w_layout .w_faxian");

    $wfenlei.addClass("headerActive");
    $wwfaxian.css("display","none");
    $wfenlei.on("click",function(){
        $wmain.css("display","block");
        $wfenlei.addClass("headerActive");
        $wfaxian.removeClass("headerActive");

    })
    $wfaxian.on("click",function(){
        $wmain.css("display","none");
        $wfaxian.addClass("headerActive");
        $wfenlei.removeClass("headerActive");
        $wwfaxian.css("display","block");
    })
})