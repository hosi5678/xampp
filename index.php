<?php

// phpinfo();

try {
  $pdo = new PDO('mysql:dbname=myapp;host=192.168.1.3','myapp_user','hosi3162');
	echo '<h1>myapp_userでpdo接続に成功。(dotinstall)</h1>';
} catch (PDOException $e) {
  exit('データベースに接続できませんでした。' . $e->getMessage());
}

?>

<!doctype html>
<html lang="ja">

<head>
</head>

<body>

<h1>
	for access test.
</h1>

</body>

</html>