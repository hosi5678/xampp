<?php
ini_set('display_errors',1);
require_once("./php_libs/db_define.php");
require_once("./php_libs/session.php");
require_once("./php_libs/ip_address.php");
require_once("./php_libs/escape_string.php");
require_once("./php_libs/ip_address.php");
require_once("./php_libs/ip_address_check.php");
require_once("./php_libs/insert_access_log.php");

// 外部からの命令を無効化
$ip_address_ext=escape_string($_SERVER["REMOTE_ADDR"]);

// ipアドレスをチェック
 $flag=ip_address_check($ip_address_ext);

// アクセスログ(簡易版)テーブルに書き込み
 insert_access_log($ip_address_ext,$flag);

?>

<!doctype html>

<html lang="ja">

<head>
<meta charset="utf-8">
<title>おりなすデータベース</title>
	<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="./css/index.css">
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.19/themes/redmond/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://cdn.rawgit.com/osamutake/japanese-holidays-js/v1.0.9/lib/japanese-holidays.min.js"></script>
	<script src="./js/call_hightchart.js"></script>
	<script src="./js/ajax_create_calendar.js"></script>
	<script src="./js/getWeekNum.js"></script>
	<script src="./js/create_calendar.js"></script>
	<script src="./js/ajax_stmt_exec.js"></script>
	<script src="./js/select_from_table.js"></script>
	<script src="./js/create_members_input_form.js"></script>
	<script src="./js/create_products_input_form.js"></script>
	<script src="./js/create_members_update_form.js"></script>
	<script src="./js/create_members_delete_confirm.js"></script>
	<script src="./js/create_table.js"></script>
	<script src="./js/update_table.js"></script>
	<script src="./js/delete_table.js"></script>
	<script src="./js/insert_table.js"></script>
	<script src="./js/reject_str.js"></script>
	<script src="./js/members_func.js"></script>
	<script src="./js/products_func.js"></script>
	<script src="./js/product_price_calc.js"></script>
	<script src="./js/test.js"></script>

</head>

<body>

<div id="wrapper">
	<div id="title">
		<h1>おりなすデータベース</h1>
	</div>
	
	<div id="calendar"></div>

	<a id='products_mark' href='#' onclick='products_func()'>販売記録の登録・削除▼</a>
	<div id="products">
		<p id='products_title'></p>
		<div id='products_message'></div>
		<div id="products_params"></div>
		<div id="products_results"></div>
	</div>

	<a id='members_mark' href='#' onclick='members_func();'>利用者の登録・削除▼</a>
	<div id="members">
		<p id='members_title'></p>
		<div id='members_message'></div>
		<div id="members_params"></div>
		<div id="members_results"></div>
	</div>

	<!-- <script>
  // call_hightchart();
		// ajax_create_calendar("calendar");
		document.getElementById('members').style.visibility='visible';
	//	members_func();

	</script> -->

	<script>
				
		document.getElementById('members').style.visibility='visible';
		members_func();
    //.accordion1の中のp要素がクリックされたら
    // $('#members_mark').click(function(){
		// 		//クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
		// 		members_func();
		// 		$(this).next('div').slideToggle();

    // });


	</script>

<noscript>
	<p>JavaScriptを有効にしてください。</p>
</noscript>

</div>

</body>

</html>

