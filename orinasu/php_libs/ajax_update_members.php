<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);

		 $id=escape_string(filter_input(INPUT_POST,'id'));

		 $myouji=escape_string(filter_input(INPUT_POST,'myouji'));
		 $namae=escape_string(filter_input(INPUT_POST,'namae'));
 
		 $sun=escape_string(filter_input(INPUT_POST,'sun'));
		 $mon=escape_string(filter_input(INPUT_POST,'mon'));
		 $tue=escape_string(filter_input(INPUT_POST,'tue'));
		 $wed=escape_string(filter_input(INPUT_POST,'wed'));
		 $thu=escape_string(filter_input(INPUT_POST,'thu'));
		 $fri=escape_string(filter_input(INPUT_POST,'fri'));
		 $sat=escape_string(filter_input(INPUT_POST,'sat'));

		$stmt=$db->prepare("update members set myouji=? where id=?;");

		$stmt->bindParam(1,$myouji,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set namae=? where id=?;");

		$stmt->bindParam(1,$namae,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set sun=? where id=?;");

		$stmt->bindParam(1,$sun,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set mon=? where id=?;");

		$stmt->bindParam(1,$mon,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set tue=? where id=?;");

		$stmt->bindParam(1,$tue,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set wed=? where id=?;");

		$stmt->bindParam(1,$wed,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set thu=? where id=?;");

		$stmt->bindParam(1,$thu,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set fri=? where id=?;");

		$stmt->bindParam(1,$fri,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

		$stmt->execute();

		$stmt=$db->prepare("update members set sat=? where id=?;");

		$stmt->bindParam(1,$sat,PDO::PARAM_STR);
		$stmt->bindParam(2,$id,PDO::PARAM_INT);

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
		
	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
		exit();
	}