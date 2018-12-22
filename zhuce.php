<?php
$userInfo = $_POST;
$json = json_encode($userInfo);
$file = fopen('songshu.json','w+');
fwrite($file,$json);
fclose($file);
?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>三只松鼠之登陆注册2.</title>
    <script src="js/zepto.js"></script>
    <script src="js/fastclick.js"></script>
    <script src="js/iscroll.js"></script>
    <link rel="stylesheet" href="css/common.css" type="text/css">
    <link rel="stylesheet" href="js/common.js" type="application/javascript">
    <meta name="viewport"
          content="width=device-width, user-scalable=no,
           initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <style>
        .active{
            display: block;
            z-index: 999;
        }
        .w{
            width: 100%;
            max-width: 768px;
            text-align: center;
        }
        .t_head{
            width: 100%;
            max-width: 768px;
            min-width: 50px;
            height: 44px;
            border-bottom: none ;
            position: fixed;
            z-index: 0;
            overflow: hidden;
            border-bottom: 1px solid #666666;

        }
        h1{
            text-align: center;
            font-size: 19px;

        }
        .zhuce{
            width: 100%;
            height:100%;
            display: flex;
        }
        .zhuce .t_head{
            line-height: 44px;
            padding-right: 20px;
            background-color: transparent;
            flex: 1;

        }
        .zhuce .biaodan2{
            position: relative;
            width: 100%;
            height: 100px;
            top:80px;
            display: block;
            margin-left: 10px;
            flex: 1;
            background-color: white;
        }
        .zhuce .biaodan2 input{
            width: 80%;
            padding: 10px 10px 10px 36px;
            border: none;
            border-bottom: 1px solid lightgray;
        }
        .zhuce .biaodan2 #txtPhone{
            padding-left: 7px;
            margin-left: 10px;
            background-color: transparent;
          
        }
        .zhuce .biaodan2 #pwd{
            margin-left: 10px;
            padding-left: 6px;
        }
        .zhuce .biaodan2 #sub{
            width: 90%;
            margin-top: 20px;
            margin-left: 10px;
            padding-left: 6px;
            border-radius: 6px;
        }

    </style>
</head>
<body>
<div class="zhuce">
<h1 class="t_head">快速注册</h1>
    <div class="biaodan2">
        <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post" id="yycc">
            账号 <input type="text" name="name" id="txtPhone" placeholder="请输入账号" maxlength="11"><span></span><br>
            密码 <input type="password" placeholder="请输入密码" name="password" id="pwd" maxlength="16"><br>
           <a href="denglu.html"><input type="button" id="sub" value="立即注册" ></a><br>
        </form>
    </div>
</div>
</body>
<script>
     var sub=document.getElementById('sub');
    var pe=document.getElementById('txtPhone');
    var pd=document.getElementById('pwd');
    function changeColor() {
        var peval=pe.value;
        var pdval=pd.value;
        
        if(peval==null||pdval==null){
            $("#sub").css("background-color","gray");
        }
        else{
            $("#sub").css("background-color","green");
        }
    }
    pd.onchange=function () {
        changeColor();
    };

$("#sub").on("touchstart",function(){
$("#yycc")[0].submit();
})


</script>
</html>