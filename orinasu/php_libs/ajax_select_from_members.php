<?php

require_once("../libs/db_define.php");
require_once("../libs/escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

		$stmt=$db->prepare("select * from members order by id asc;");

		$stmt->execute();

		$results=$stmt->fetchAll(PDO::FETCH_ASSOC);

		$json_array=array();

		foreach($results as $elem){
			$json_array[]=array("id"=>$elem["id"],
													"myouji"=>$elem["myouji"],
													'namae'=>$elem['namae'],
													'sun'=>$elem['sun'],
													'mon'=>$elem['mon'],
													'tue'=>$elem['tue'],
													'wed'=>$elem['wed'],
													'thu'=>$elem['thu'],
													'fri'=>$elem['fri'],
													'sat'=>$elem['sat']

			);
		}

		header('Content-type: application/json');
		echo json_encode($json_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		
		exit();

	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
	}
