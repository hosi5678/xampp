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

		// $table_name='members';

		// $stmt_str="select * from ".$table_name.";";

		// $stmt = $db->prepare($stmt_str);

		// $stmt->execute();

		// $columns = array();
		
		// for ($i = 0; $i < $stmt->columnCount(); $i++) {
		// 		$meta = $stmt->getColumnMeta($i);
		// 		$columns[] = $meta['name'];
		// 		echo $meta['name'].'<br>';
		// }
		
		// var_dump($columns);

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
