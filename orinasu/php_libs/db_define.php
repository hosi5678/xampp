<?php

define('db_name','orinasu_db');
define('db_username','root');
define('db_password','orinasu_admin');
define('pdo_dsn','mysql:dbhost=localhost;dbname='.db_name);


//		$db= new PDO(pdo_dsn,db_username,db_password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,]);
//    or
// 		$db=new PDO(pdo_dsn,db_username,db_password);
//		$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

/*

	try{
	

		    

	}catch(PDOException $e){
		$e->getMessage();
		exit();
	}finally{
		$db=null;
	}

*/