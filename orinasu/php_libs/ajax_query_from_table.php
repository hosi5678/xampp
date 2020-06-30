<?php
ini_set('display_errors',"On");
require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

// 素通しでqueryを実行する。

	try{
     $db= new PDO(pdo_dsn,db_username,db_password);
     $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    $db->beginTransaction();
    
    $query=filter_input(INPUT_POST,'query');

    $stmt=$db->prepare($query);

		$stmt->execute();

    $results=$stmt->fetchAll();
    $json_array=array();

    foreach($results as $elem ){        
        $json_array[]=$elem;
    }

    header('Content-type: application/json');
    echo json_encode($json_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

    $db->commit();

	}catch(PDOException $e) {
		$db->rollBack();
    echo $e->getMessage();
    
	}finally{
    $db=null;
	}