<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
         		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC)
		);

		$stmt=$db->prepare("insert into staffs(name) values(?);");

		$stmt->bindParam(1,$name,PDO::PARAM_STR);
		$name=escape_string(filter_input(INPUT_POST,'name'));

		$stmt->execute();

		$stmt=$db->prepare("select * from staffs order by id asc;");

		$stmt->execute();

		$results=$stmt->fetchAll(PDO::FETCH_ASSOC);

		$json_array=array();

		foreach($results as $elem){
			$json_array[]=array("name"=>$elem["name"]);
		}

		echo json_encode($json_array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

		// exit();

	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
	}