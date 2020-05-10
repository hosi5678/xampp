<?php

function ip_address_check($ip_address_ext){

	try{

		 $db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);
		 
		 $db->beginTransaction();

		$stmt=$db->prepare("select ip_address from ip_address;");
		$stmt->execute();
		$ip_addresses=$stmt->fetchAll(PDO::FETCH_CLASS,'ip_address');

		$flag=0;

		foreach($ip_addresses as $ip_address_int){
			if(($ip_address_int->get_ip_address())===$ip_address_ext){
				$flag++;
			}
		}

		if($flag==0){
			exit('許可されていないアクセスです。(this ip address is not allowed.)');
		}

		return $flag;

		$db->commit();

	}catch(PDOException $e) {
		$db->rollBack();
		exit('データベースに接続できませんでした。'.$e->getMessage());
	}finally{
		// ここにexitをいれると消える。
		$db=null;
	}
}
