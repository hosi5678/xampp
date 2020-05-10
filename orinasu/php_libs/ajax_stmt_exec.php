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
    $query=filter_input(INPUT_POST,'query');
		$fetch_mode=filter_input(INPUT_POST,'fetch_mode');
		
		$time=new Datetime();
		$time=$time->format('Y-m-d H:i:s');

		$stmt=$db->prepare('insert into table_access_log(ip_address,table_name,query,time) values(?,?,?,?);');

		$stmt->bindParam(1,$_SERVER["REMOTE_ADDR"],PDO::PARAM_STR);
		$stmt->bindParam(2,$table_name,PDO::PARAM_STR);
		$stmt->bindParam(3,$query,PDO::PARAM_STR);
		$stmt->bindParam(4,$time,PDO::PARAM_STR);

		$stmt->execute();

		$stmt="select * from ".$table_name." limit 0;";

		$stmt = $db->prepare($stmt);

		$stmt->execute();

		$column_array=array();

		for ($i = 0; $i < $stmt->columnCount(); $i++) {
				$meta = $stmt->getColumnMeta($i);
				$column_array[]=$meta['name'];
		}

		$stmt=$db->prepare($query);
		
		$stmt->execute();

		// insert,updatre時は必ずこのクエリが必要。
		$stmt=$db->prepare('select * from '.$table_name.';');

		$stmt->execute();

		if($fetch_mode=='assoc'||$fetch_mode==''){

			$results=$stmt->fetchAll();
			$json_array=array();
	
			foreach($results as $elem ){
	
											$i=0;
			
											$tmp_array=array();
			
											while($i<count($column_array)){
												$key=$column_array[$i];
												$temp_array[$key]=$elem[$key];
												$i++;
											}
	
									 $json_array[]=$temp_array;
	
			}
	
				header('Content-type: application/json');
				echo json_encode($json_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
				// echo json_encode($query,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

			}else if($fetch_mode=='column'){
				header('Content-type: application/json');
				echo json_encode($column_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
		}

    $db->commit();

	}catch(PDOException $e) {
		$db->rollBack();
		echo $e->getMessage();
	}finally{
		$db=null;
	}