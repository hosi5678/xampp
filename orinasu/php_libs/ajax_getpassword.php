<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

		$stmt=$db->prepare("select password from password where id=?;");
		$stmt->bindParam(1,$id,PDO::PARAM_STR);
		$id=escape_string(filter_input(INPUT_POST,'id'));

		$stmt->execute();

		$passwords=$stmt->fetchAll(PDO::FETCH_ASSOC);

		$i=0;

		$ret=array();

		foreach($passwords as $password){
			$ret[$i]=$password;
			$i++;
		}
			$str=$ret[0]["password"];

		echo json_encode($str, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
	}
