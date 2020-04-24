<?php

// セッション処理開始
session_start();
session_regenerate_id();

require("./libs/db_define.php");
require("./libs/ip_address.php");

// 外部からの命令を無効化
$ip_address_ext=htmlspecialchars($_SERVER["REMOTE_ADDR"],ENT_QUOTES,'UTF-8');
$ip_address_ext=addslashes($ip_address_ext);

try {
 	$db= new PDO(pdo_dsn,db_username,db_password,
		  [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
	);

	$stmt=$db->prepare("select ip_address from ip_address;");
	$stmt->execute();
	$ip_addresses=$stmt->fetchAll(PDO::FETCH_CLASS,'ip_address');

	foreach($ip_addresses as $ip_address_int){
		if(($ip_address_int->get_ip_address())===$ip_address_ext){
			$stmt=$db->prepare("select password from password;");
			$stmt->execute();
			$passwords=$stmt->fetchAll(PDO::FETCH_ASSOC);
		   $admin_password=$passwords[0]["password"];
			$user_password=$passwords[1]["password"];
			//var_dump($passwords);

			$stmt=$db->prepare("insert into index_access_log(date,ip_address,status) values(?,?,?)");
			$stmt->bindParam(1,$date,PDO::PARAM_STR);
			$stmt->bindParam(2,$ip_address_insert,PDO::PARAM_STR);
			$stmt->bindParam(3,$status,PDO::PARAM_STR);
			$date_origin=new Datetime();
			$date=$date_origin->format('Y-m-d H:i:s');
			$ip_address_insert=$ip_address_ext;
			$status="ok";
			$stmt->execute();
		}
	}

	if(!isset($passwords)||empty($passwords)){
			$stmt=$db->prepare("insert into index_access_log(date,ip_address,status) values(?,?,?)");
			$stmt->bindParam(1,$date,PDO::PARAM_STR);
			$stmt->bindParam(2,$ip_address_insert,PDO::PARAM_STR);
			$stmt->bindParam(3,$status,PDO::PARAM_STR);
			$date_origin=new Datetime();
			$date=$date_origin->format('Y-m-d H:i:s');
			$ip_address_insert=$ip_address_ext;
			$status="ng";
			$stmt->execute();
		throw new Exception("許可されていないIPアドレスです。(not be allowed this ip address, and recoreded.)");
	}

	$db=null;

} catch (PDOException $e) {
	exit('データベースに接続できませんでした。'.$e->getMessage());
}

?>

<!doctype html>

<html lang="ja">

<head>
<meta charset="utf-8">
<title>おりなすデータベースホームページ</title>
	<link rel="stylesheet" type="text/css" href="./css/index.css">
	<script type="text/javascript" src="./js/jquery-3.4.1.min.js"></script>
</head>

<script type="text/javascript">
/*
	function func(){

		var radios=document.getElementsByName("type");

		var result;

		for(var i=0;radios.length;i++){
			if(radios[i].checked){
				result=radios[i].value;
				break;
			}
		}

		if(result=='admin'){
			document.getElementsByName("password")[0].value=<?php echo $admin_password; ?> ;
			document.getElementsByName("password")[1].value='' ;
		}else if(result=='user'){
			document.getElementsByName("password")[0].value='' ;
			document.getElementsByName("password")[1].value=2 ;
		}

	}
*/
</script>

<body>

<h1>ユーザログイン</h1>

<hr>

<form action="./menu/menu.php" method="post">
<h2>管理者ログイン</h3>
<input type="text" placeholder="管理者パスワードを入力してください。" name="admin_password">
<button>ログイン</button>

<hr>

<h2>一般ユーザログイン</h3>
<input type="text" placeholder="一般ユーザパスワードを入力してください。" name="password">
<button>ログイン</button>
</form>

</body>

</html>