<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{

        $sleep_sec=escape_string(filter_input(INPUT_POST,'sleep_sec'));

 //       var_dump($sleep_sec);

        /*
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

         
		$stmt=$db->prepare("delete from members where id=?;");
		$stmt->bindParam(1,$id,PDO::PARAM_INT);
		
		$id=escape_string(filter_input(INPUT_POST,'id'));

		$stmt->execute();
		
		$stmt=$db->prepare("select * from members order by id asc;");

		$stmt->execute();

		$results=$stmt->fetchAll(PDO::FETCH_ASSOC);

		$json_array=array();

		foreach($results as $elem){
			$json_array[]=array(
										"id"=>$elem["id"],
										"surname"=>$elem["surname"],
										"name"=>$elem["name"],
										"start_date"=>$elem["start_date"]
										
										);
		}
*/
		header('Content-type: application/json');
		echo json_encode($sleep_sec,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		
		exit();

	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
	}