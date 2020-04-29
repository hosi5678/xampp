<?php
require("./libs/session.php");
require("./libs/escape_string.php");
require("./libs/ip_address.php");
require("./libs/ip_address_check.php");
require("./libs/insert_access_log.php");

// 外部からの命令を無効化
$ip_address_ext=escape_string($_SERVER["REMOTE_ADDR"]);

// ipアドレスをチェック
$flag=ip_address_check($ip_address_ext);

// アクセスログ(簡易版)テーブルに書き込み
insert_access_log($ip_address_ext,$flag);

// ログアウトの処理
if(isset($_POST["logout"])|!empty($_POST["logout"])){

	if(escape_string($_POST["logout"])==1){
		$msg="ログアウトしました。";
		unset($_POST["id"]);
		unset($_POST["logout"]);
		session_destroy();
		$_SESSION=array();
	}
}else{
	$msg="";
}

?>

<!doctype html>

<html lang="ja">

<head>
<meta charset="utf-8">
<title>おりなすデータベースホームページ</title>
	<link rel="stylesheet" type="text/css" href="./css/index.css">
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.19/themes/redmond/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="./js/call_hightchart.js"></script>
	<script src="./js/ajax_select_from_table.js"></script>
	<script src="./js/ajax_create_Member_Form.js"></script>
	<script src="./js/ajax_insert_into_members.js"></script>
	<script src="./js/create_Member_Form.js"></script>
	<script src="./js/create_Members_Table.js"></script>
	<script src="./js/removeChild.js"></script>
	<script src="./js/ajax_create_Members_Table.js"></script>
	<script src="./js/ajax_select_from_members.js"></script>
	<script src="./js/num_to_riyou.js"></script>
	<script src="./js/ajax_update_members.js"></script>
	<script src="./js/update_Member_Form.js"></script>
	<script src="./js/create_td.js"></script>
	<script src="./js/ajax_delete_from_members.js"></script>

</head>

<body>

<div id="wrapper">
	<div id="title">
		<h1>おりなすデータベース</h1>
	</div>

	<div id="menu">
		<form action="./other_pages/menu.php" method="post" name="form1">	
			<input type="hidden" name="id" value="1">
			<a href="javascript:form1.submit()">管理用ログイン(アクセスログ等)</a>
		</form>

		<form action="./other_pages/menu.php" method="post" name="form2">	
			<input type="hidden" name="id" value="2">
			<a href="javascript:form2.submit()">一般用途ログイン(在庫閲覧等)</a>
		</form>
	</div>

	<div>
	    <div id="container"></div>
		<p id="message"><?php echo $msg;?></p>
  </div>

	
	<div id="create"></div>
	<div id="select"></div>

	<script>
	//call_hightchart();
		ajax_create_Member_Form("create");
		ajax_create_Members_Table("select");
	</script>

</div>

</body>

</html>

