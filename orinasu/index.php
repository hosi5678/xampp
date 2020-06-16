<?php
ini_set('display_errors',1);
require_once("./php_libs/db_define.php");
require_once("./php_libs/session.php");
require_once("./php_libs/ip_address.php");
require_once("./php_libs/escape_string.php");
require_once("./php_libs/ip_address.php");
require_once("./php_libs/ip_address_check.php");
require_once("./php_libs/insert_access_log.php");

// // 外部からの命令を無効化
// $ip_address_ext=escape_string($_SERVER["REMOTE_ADDR"]);

// // ipアドレスをチェック
//  $flag=ip_address_check($ip_address_ext);

// // アクセスログ(簡易版)テーブルに書き込み
//  insert_access_log($ip_address_ext,$flag);

?>

<!doctype html>

<html lang="ja">

<head>
<meta charset="utf-8">
<title>おりなすデータベース</title>
	<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="./favicon.ico">
	<link rel="stylesheet" type="text/css" href="./css/index.css">
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.19/themes/redmond/jquery-ui.css">
	<script src='./js/jquery-3.4.1.min.js'></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script> -->
	<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
	<!-- <script src="https://code.highcharts.com/highcharts.js"></script> -->
	<!-- <script src="https://code.highcharts.com/modules/exporting.js"></script> -->
	<script src='https://cdnjs.cloudflare.com/ajax/libs/highstock/6.0.3/highstock.js'></script>
	<!-- <script src='./js/japanese-holidays.js'></script>
	<script src='./js/japanese-holidays.min.js'></script> -->
	<script src="https://cdn.rawgit.com/osamutake/japanese-holidays-js/v1.0.9/lib/japanese-holidays.min.js"></script>
	<!-- <script defer src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" integrity="sha384-ujbKXb9V3HdK7jcWL6kHL1c+2Lj4MR4Gkjl7UtwpSHg/ClpViddK9TI7yU53frPN" crossorigin="anonymous"></script> -->
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/highstock/6.0.3/highstock.js"></script> -->
	<script src="./js/call_hightchart.js"></script>
	<script src="./js/getWeekNum.js"></script>
	<script src="./js/create_calendar.js"></script>
	<script src="./js/ajax_stmt_exec.js"></script>
	<script src="./js/select_from_table.js"></script>
	<script src="./js/select_from_like.js"></script>
	<script src="./js/create_members_input_form.js"></script>
	<script src="./js/create_products_input_form.js"></script>
	<script src="./js/create_members_update_form.js"></script>
	<script src="./js/create_members_delete_confirm.js"></script>
	<script src="./js/create_products_delete_confirm.js"></script>
	<script src="./js/create_products_update_form.js"></script>
	<script src="./js/create_table.js"></script>
	<script src="./js/update_table.js"></script>
	<script src="./js/delete_table.js"></script>
	<script src="./js/insert_table.js"></script>
	<script src="./js/reject_str.js"></script>
	<script src="./js/members_func.js"></script>
	<script src="./js/products_func.js"></script>
	<script src="./js/product_price_calc.js"></script>
	<script src="./js/ajax_select_like.js"></script>
	<script src="./js/test.js"></script>
	<script src='./js/ajax_get_col.js'></script>
	<script src='./js/ajax_select_from_table.js'></script>
	<script src='./js/calender_func.js'></script>
	<script src='./js/create_calendar_input_form.js'></script>
	<script src='./js/getArrayFromRows.js'></script>
	<script src='./js/create_calendar_input_form.js'></script>
	<script src='./js/childNodeClear.js'></script>
	<script src='./js/show_yotei.js'></script>
	<script src='./js/ajax_select_from_where.js'></script>
	<script src='./js/ajax_select_from_memo.js'></script>
	<script src='./js/toDoubleDigits.js'></script>
	<script src='./js/get_input_value.js'></script>
  <script src='./js/create_calendar_update_form.js'></script>
  <script src='./js/remove_zero.js'></script>
	<script src='./js/delete_confirm.js'></script>
	<script src='./js/select_equal.js'></script>
	<script src='./js/ajax_select_equal_key.js'></script>

</head>

<body>

<div id="wrapper">
	<div class='logo'>
		<img class='logo-img' src='./images/orinasu_logo.png' alt='orinasu database'>
		<p class='logo-txt'>おりなすデータベース</p>
	</div>

	<div class='line'></div>
						
	<div id='contents'>
	
		<div class='content'>
			<div class='pack'>
				<img class='img' src='./images/calendar.png' alt='calendar'>
				<a id='calendar_mark' href='#wrapper' onclick='calender_func()' class='a-link txt'>カレンダー▼</a>
			</div>
			<div id="calendar">
				<div id='calendar_message'></div>
				<div id='calendar_hyou'></div>
				<div id='calendar_title'></div>

				<div id='calendar_params'></div>

				<div id='calendar_exec' class='exec'></div>
				<div id="calendar_like"></div>
				<div id="calendar_results"></div>
			</div>
		</div>

		<div class='line'></div>

		<div class='content'>
			<div class='pack'>
				<img class='img' src='./images/coin.png' alt='sales'>
				<a id='products_mark' href='#wrapper' onclick='products_func()' class='a-link txt'>売上データの登録・削除／検索▼</a>
			</div>
			<div id="products">
				<p id='products_title'></p>
				<div id='products_message'></div>
				<div id="products_params"></div>
				<div id='products_exec' class='exec'></div>
				<div id="products_like"></div>
				<div id="products_results"></div>
			</div>
		</div>

		<div class='line'></div>

		<div class='content'>
			<div class='pack'>
			<img src='./images/person.jpg' class='img' alt='persons'> 
			<a id='members_mark' href='#wrapper' onclick='members_func()' class='a-link txt'>利用者の登録・削除／検索▼</a>
			</div>
			<div id="members">
				<p id='members_title'></p>
				<div id='members_message'></div>
				<div id="members_params"></div>
				<div id='members_exec' class='exec'></div>
				<div id="members_like"></div>
				<div id="members_results"></div>
			</div>
		</div>

		<div class='line'></div>

	</div>

</div>

	<noscript>
		<p>JavaScriptを有効にしてください。</p>
	</noscript>

</body>

</html>

