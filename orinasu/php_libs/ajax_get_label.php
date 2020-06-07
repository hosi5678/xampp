<?php
ini_set('display_errors', "On");
require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
     $db= new PDO(pdo_dsn,db_username,db_password);
     $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

		$db->beginTransaction();

    $table_name=filter_input(INPUT_POST,'table_name');
		
		$stmt="select * from ".$table_name."_join order by id asc limit 0;";

		$stmt = $db->prepare($stmt);

		$stmt->execute();

		$column_array=array();

		for ($i = 0; $i < $stmt->columnCount(); $i++) {
				$meta = $stmt->getColumnMeta($i);
				$column_array[]=$meta['name'];
    }
    
    header('Content-type: application/json');
    echo json_encode($column_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

    $db->commit();

	}catch(PDOException $e) {
		$db->rollBack();
		echo $e->getMessage();
	}finally{
		$db=null;
	}