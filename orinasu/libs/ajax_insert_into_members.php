<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
         		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC)
		);

		$stmt=$db->prepare("insert into members(surname,name,start_date) values(?,?,?);");

		$stmt->bindParam(1,$surname,PDO::PARAM_STR);
		$surname=escape_string(filter_input(INPUT_POST,'surname'));
		
		$stmt->bindParam(2,$name,PDO::PARAM_STR);
		$name=escape_string(filter_input(INPUT_POST,'name'));
		
		$stmt->bindParam(3,$start_date,PDO::PARAM_STR);
		$start_date=escape_string(filter_input(INPUT_POST,'start_date'));

		$stmt->execute();
		
		$stmt=$db->prepare("select * from members order by id asc;");

		$stmt->execute();

		$results=$stmt->fetchAll(PDO::FETCH_ASSOC);

		$json_array=array();

		foreach($results as $elem){
			$json_array[]=array("id"=>$elem["id"],
								"surname"=>$elem["surname"],
								'name'=>$elem['name'],
								'start_date'=>$elem['start_date']
								);
		}

		echo json_encode($json_array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

		exit();

	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
	}