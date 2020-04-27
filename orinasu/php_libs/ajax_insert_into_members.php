<?php

require_once("./db_define.php");
require_once("./escape_string.php");

header("Content-Type:text/html;charset=UTF-8");

	try{
 		$db= new PDO(pdo_dsn,db_username,db_password,
			array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
         		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC)
		);

		$myouji=escape_string(filter_input(INPUT_POST,'myouji'));
		$namae=escape_string(filter_input(INPUT_POST,'namae'));

		//$sun=escape_string(filter_input(INPUT_POST,'sun'));
		$sun=escape_string(filter_input(INPUT_POST,'sun'));
		$mon=escape_string(filter_input(INPUT_POST,'mon'));
		$tue=escape_string(filter_input(INPUT_POST,'tue'));
		$wed=escape_string(filter_input(INPUT_POST,'wed'));
		$thu=escape_string(filter_input(INPUT_POST,'thu'));
		$fri=escape_string(filter_input(INPUT_POST,'fri'));
		$sat=escape_string(filter_input(INPUT_POST,'sat'));

		//echo $sun;

		// $myouji=escape_string(filter_input(INPUT_POST,'myouji'));
		// $namae=escape_string(filter_input(INPUT_POST,'namae'));

		// echo  $myouji;
		// echo $namae;

		 $stmt=$db->prepare("insert into members(myouji,namae,sun,mon,tue,wed,thu,fri,sat) values(?,?,?,?,?,?,?,?,?);");

		 $stmt->bindParam(1,$myouji,PDO::PARAM_STR);
		 $stmt->bindParam(2,$namae,PDO::PARAM_STR);
		 $stmt->bindParam(3,$sun,PDO::PARAM_INT);
		 $stmt->bindParam(4,$mon,PDO::PARAM_INT);
		 $stmt->bindParam(5,$tue,PDO::PARAM_INT);
		 $stmt->bindParam(6,$wed,PDO::PARAM_INT);
		 $stmt->bindParam(7,$thu,PDO::PARAM_INT);
		 $stmt->bindParam(8,$fri,PDO::PARAM_INT);
		 $stmt->bindParam(9,$sat,PDO::PARAM_INT);
		// $surname=escape_string(filter_input(INPUT_POST,'surname'));
		
		// $stmt->bindParam(2,$name,PDO::PARAM_STR);
		// $name=escape_string(filter_input(INPUT_POST,'name'));
		
		// $stmt->bindParam(3,$start_date,PDO::PARAM_STR);
		// $start_date=escape_string(filter_input(INPUT_POST,'start_date'));

			$stmt->execute();
		
		 $stmt=$db->prepare("select * from members order by id asc;");

		 $stmt->execute();

		 $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

		 $json_array=array();

		 foreach($results as $elem){
		 	$json_array[]=array("id"=>$elem["id"],
								"myouji"=>$elem["myouji"],
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

		 //echo json_encode([$myouji,$namae,$sun,$mon,$tue,$wed,$thu,$fri,$sat], JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		 echo json_encode($json_array, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

		// exit();

	}catch(PDOException $e) {
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
		exit();
	}