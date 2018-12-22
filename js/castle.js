function headchange() {
    var head=document.getElementById("y_head");
    var aim=document.querySelector(".y_cb5");
    var aimheight=aim.offsetHeight;
    window.onscroll=function (e) {
        var scrollTop=getScroll().scrollTop;
        if(scrollTop<=aimheight){
            var opacity = scrollTop/aimheight;
            head.style.backgroundColor ="rgba(255,239,219,"+opacity+")";
        }
    }
}

function screenchange(){    
var screenwidth=document.body.offsetWidth;
var y_banxin=document.querySelector(".y_banxin");
var y_cb5=document.querySelector(".y_cb5");
var y_cb4=document.querySelector(".y_cb4");
var y_cb3=document.querySelector(".y_cb3");
var y_cb2=document.querySelector(".y_cb2");
var y_cb1=document.querySelector(".y_cb1");
var y_xhy=document.querySelector(".y_xhy");
var y_yun3=document.querySelector(".y_yun3");
var y_yun4=document.querySelector(".y_yun4");
var y_bt=document.querySelector(".y_bt");
var y_xbt=document.querySelector(".y_xbt");
var y_mouse=document.querySelector(".y_mouse");
if(screenwidth<=600){
 y_banxin.style.height="112%";
 y_cb5.style.top="-100px";
 y_cb4.style.top="60px";
 y_cb3.style.top="200px";
 y_cb2.style.top="350px";
 y_cb1.style.top="520px";
 y_xhy.style.top="20px";
 y_yun3.style.top="100px";
  y_yun4.style.top="160px";
  y_bt.style.top="-26%";
  y_xbt.style.top="-18%";
  y_mouse.style.left="-14%";
 y_mouse.style.width="115%";
}
}


function screenrover(){    
var screenwidth=document.body.offsetWidth;
var y_banxin=document.querySelector(".y_banxin");
var y_cb5=document.querySelector(".y_cb5");
var y_cb4=document.querySelector(".y_cb4");
var y_cb3=document.querySelector(".y_cb3");
var y_cb2=document.querySelector(".y_cb2");
var y_cb1=document.querySelector(".y_cb1");
var y_xhy=document.querySelector(".y_xhy");
var y_yun3=document.querySelector(".y_yun3");
var y_yun4=document.querySelector(".y_yun4");
var y_bt=document.querySelector(".y_bt");
var y_xbt=document.querySelector(".y_xbt");
var y_mouse=document.querySelector(".y_mouse");
if(screenwidth>600){
 y_banxin.style.height="150%";
 y_cb5.style.top="10%";
 y_cb4.style.top="50%";
 y_cb3.style.top="110%";
 y_cb2.style.top="190%";
 y_cb1.style.top="270%";
 y_xhy.style.top="300px";
 y_yun3.style.top="200px";
  y_yun4.style.top="50px";
  y_bt.style.top="-200px";
  y_xbt.style.top="-120px";
  y_mouse.style.left="30%";
 y_mouse.style.width="35%";
}
}



window.onload=function(){
        luxy.init({
        wrapper: '#luxy',
        targets : '.luxy-el',
        wrapperSpeed:  0.08
    });
  headchange();
  screenchange();
  screenrover();
}

window.onresize = function(){
    screenchange();
     screenrover();
}

