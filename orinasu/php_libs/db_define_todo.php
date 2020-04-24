<?php

define('db_name','dotinstall_todo_app');
define('db_username','dbuser');
define('db_password','hosi3162');
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