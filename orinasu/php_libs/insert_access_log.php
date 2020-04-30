<?php 

function insert_access_log($ip_address,$flag){
	try{
			$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);
			$stmt=$db->prepare("insert into index_access_log(date,ip_address,status) values(?,?,?);");
			$stmt->bindParam(1,$date,PDO::PARAM_STR);
			$stmt->bindParam(2,$ip_address_insert,PDO::PARAM_STR);
			$stmt->bindParam(3,$status,PDO::PARAM_STR);
			$date=new Datetime();
			$date=$date->format('Y-m-d H:i:s');
			$ip_address_insert=$ip_address;

			if($flag==0){
				$status="ng";
			}else{
				$status="ok";
			}

			$stmt->execute();

			if($flag==0){
				exit('許可されていないアクセスです。(this ip address is not allowed.)');
			}

	} catch (PDOException $e) {
			exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		$db=null;
		// exit();
	}
}
