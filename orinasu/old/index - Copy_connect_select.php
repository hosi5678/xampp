<?php

define('db_name','dotinstall_db');
define('db_username','dbuser');
define('db_password','hosi3162');
define('pdo_dsn','mysql:dbhost=localhost;dbname='.db_name);

//echo(pdo_dsn);

try {
 	$db= new PDO(pdo_dsn,db_username,db_password,
		  [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
	);

//	$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

	$comment= '<h2>dbuserでdotinstall_dbにpdo接続に成功しました。(user権限)</h2>';


//	$stmt=$db->prepare("insert into users(name,score) values(?,?)");

	$stmt=$db->prepare("select score from users order by score desc limit ?");

	$limit=5;

//	$stmt->bindParam(1,$name,PDO::PARAM_STR);
	$stmt->bindParam(1,$limit,PDO::PARAM_INT);

	$name='%t%';
//	$score=55;
	$stmt->execute();

/*
	$name='sato';
	$score=55;
	$stmt->execute();

	$name='dotinstall';
	$score=65;
	$stmt->execute();

	echo 'inserted:'.$db->lastInsertId();

	$stmt=$db->query("select * from users");
*/

	$users=$stmt->fetchAll(PDO::FETCH_ASSOC);

	$i=1;

	foreach($users as $user){
//		echo $i.':'.$user['id'].':'.$user['name'].':'.$user['score'].'<br>';
		echo $i.':'.$user['score'].'<br>';
		$i++;
	}

	echo $stmt->rowCount().' records were found.';

	$db=null;

//	echo 'success.';

} catch (PDOException $e) {
  exit('データベースに接続できませんでした。'.$e->getMessage());
}

?>

<!doctype html>
<html lang="ja">

<head>
</head>

<body>

<?php echo $comment; ?>

</body>

</html>