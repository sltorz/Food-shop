<?php 
	header( 'Content-Type:application/json;charset=utf-8');
	 $strs = file_get_contents("data.json");
  	if (!empty($strs)) {
   	 $datas = json_decode($strs,true);
  	}

 	echo json_encode($datas);
 ?>



