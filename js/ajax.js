$(function(){
    var ajax=new XMLHttpRequest();
        ajax.open("GET","sanzhisongshu.php");
        ajax.send(null);
        ajax.onreadystatechange=function(){
	      if (this.readyState == 4)
	 {
	  // var data = JSON.parse(this.responseText);
	  console.log(this.responseText);
	 }
}
})