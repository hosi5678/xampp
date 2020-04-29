<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

     $stmt_str=escape_string(filter_input(INPUT_POST,'stmt'));
//     $table_name=escape_string(filter_input(INPUT_POST,'table_name'));

    // 余計なechoはできない
    //echo $stmt_str; 等 不可
    // parameter 素通し確認

		 $stmt=$db->prepare($stmt_str);
		
		 $stmt->execute();
		
		// //$stmt=$db->prepare("select * from members order by id asc;");

		// //$stmt->execute();

		$results=$stmt->fetchAll(PDO::FETCH_ASSOC);

		$json_array=array();

		 foreach($results as $elem){
		 	$json_array[]=array(
         // parameterはsql consoleで確認して記述
									//	"id"=>$elem["id"],
										"content"=>$elem["content"]			
										);
		 }

		 header('Content-type: application/json');
		 echo json_encode($json_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		
	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
  }finally{
    $db=null;
    exit();
  }
  