<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

		 $db->beginTransaction();

		 $table_name=escape_string(filter_input(INPUT_POST,'table_name'));

     $stmt_str="select * from ".$table_name." limit 0;";

     $stmt = $db->prepare($stmt_str);
 
     $stmt->execute();
 
     $json_array=array();

     
     for ($i = 0; $i < $stmt->columnCount(); $i++) {
         $meta = $stmt->getColumnMeta($i);
         $json_array[]=$meta['name'];
     }
     
 
		header('Content-type: application/json');
		echo json_encode($json_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		
    $db->commit();

	}catch(PDOException $e) {
		$db->rollBack();
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
	}