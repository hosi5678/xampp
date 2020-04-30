<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

		$stmt=$db->prepare("select password from ip_address;");

		$stmt->execute();

		$ipaddresses=$stmt->fetchAll(PDO::FETCH_ASSOC);

		echo json_encode($ipaddresses, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
	}