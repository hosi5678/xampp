<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

		 $db->beginTransaction();

		 $id=escape_string(filter_input(INPUT_POST,'id'));

		$stmt=$db->prepare("delete from members where id=?;");
		$stmt->bindParam(1,$id,PDO::PARAM_INT);
		
		$stmt->execute();
		
		$stmt=$db->prepare("select * from members order by id asc;");

		$stmt->execute();

		$results=$stmt->fetchAll(PDO::FETCH_ASSOC);

		$json_array=array();

		foreach($results as $elem){
			$json_array[]=array(
							 'id'=>$elem['id'],
							 'myouji'=>$elem['myouji'],
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
		
		// exit();

	$db->commit();

	}catch(PDOException $e) {
		$db->rollBack();
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
		exit();
	}