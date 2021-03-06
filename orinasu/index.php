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
	<link rel="stylesheet" heres='./css/datatables.min.css'>
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.css">
  
	<!-- <link res='stylesheet' href='./css/tablesorter/theme.blue.css'> -->
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.0/css/theme.default.min.css"> -->
	<!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/jq-3.3.1/datatables.min.css"/> -->
	<script src='./js/jquery-3.4.1.min.js'></script>
	<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<!-- <script src="https://code.highcharts.com/highcharts.js"></script> -->
	<script src="https://code.highcharts.com/stock/highstock.js"></script>

  <!-- <script src='./js/hightcharts.js'></script> -->
  <script src="https://code.highcharts.com/modules/exporting.js"></script>

	<!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/highstock/6.0.3/highstock.js'></script> -->
	<!-- <script src='./js/japanese-holidays.js'></script> -->
	<!-- <script src='./js/japanese-holidays.min.js'></script> -->
	<script src="https://cdn.rawgit.com/osamutake/japanese-holidays-js/v1.0.9/lib/japanese-holidays.min.js"></script>
	<!-- <script defer src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" integrity="sha384-ujbKXb9V3HdK7jcWL6kHL1c+2Lj4MR4Gkjl7UtwpSHg/ClpViddK9TI7yU53frPN" crossorigin="anonymous"></script> -->
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/highstock/6.0.3/highstock.js"></script> -->
	<!-- <script src="./js/call_hightchart.js"></script> -->
	<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.js"></script>
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
	<script src='./js/uriage_graph_func.js'></script>
	<script src='./js/create_graph_input_form.js'></script>
	<script src='./js/anime.min.js'></script>
	<script src='./js/create_csv.js'></script>
	<script src='./js/setCalendarDay.js'></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.5.1/pixi.min.js"></script>
	<script src='./js/create_exec.js'></script>
	<script src="https://unpkg.com/popper.js@1"></script>
	<script src="https://unpkg.com/tippy.js@5"></script>	
	<script src='./js/ajax_query_from_table.js'></script>
	<script src='./js/create_graph.js'></script>
	<script src='./js/call_stockChart.js'></script>
	<script src='./js/arrayNum_to_String.js'></script>
	<script src='./js/utc2dateString.js'></script>
	<script src='./js/dotinstall.js'></script>
	<script src='./js/call_barChart.js'></script>
	<script src='./js/call_lineChart.js'></script>
	<script src='./js/create_elements.js'></script>
	<script src='./js/create_members_box.js'></script>
	<script src='./js/create_members_content.js'></script>
	<script src='./js/create_container.js'></script>
	<script src='./js/gantt_func.js'></script>
	<script src='./js/create_gantt_input_form.js'></script>
	<script src='./js/create_h_calendar.js'></script>
	<script src='./js/getHolidays.js'></script>
	<!-- <script type="text/javascript" src="https://cdn.datatables.net/v/dt/jq-3.3.1/datatables.min.js"></script> -->

	<!-- <script src='./js/jquery.tablesorter.js'></script>
 	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.1/js/extras/jquery.metadata.min.js"></script> -->
	 <!-- <script src='./js/jquery.tablesorter.combined.js'></script> -->
		<!-- <script src='./js/jquery.tablesorter.widgets.js'></script> -->
</head>

<body>

<div id="wrapper">
	<div class='logo-container'>
		<img class='logo-img' src='./images/orinasu_logo.png' alt='orinasu database'>
		<p class='logo-txt'>おりなすデータベース</p>
	</div>

	<div class='line'></div>
						
	<div id='contents'>

	<div class='content'>
			<div class='pack'>
			<img class='img' src='./images/gantt.png' alt='gantt'>
				<a id='gantt_mark' href='#wrapper' onclick='gantt_func()' class='a-link txt'>作業の登録▼</a>
			</div>

			<div id='gantt' class='shori'>
				<div id='gantt_hyou'></div>
				<div id='gantt_params'></div>
				<div id='gantt_exec'></div>
				<div id='gantt_results'></div>
			</div>

		</div>

		<div class='line'></div>

		<div class='content'>
			<div class='pack'>
			<img class='img' src='./images/graph.png' alt='graph'>
				<a id='uriage_graph_mark' href='#wrapper' onclick='uriage_graph_func()' class='a-link txt'>売上グラフの表示▼</a>
			</div>

			<div id='uriage_graph' class='shori'>
				<div id='uriage_graph_params'></div>
				<div id='uriage_graph_container'></div>
			</div>

		</div>
	
		<div class='line'></div>

		<div class='content'>
			<div class='pack'>
				<img class='img' src='./images/calendar.png' alt='calendar'>
				<a id='calendar_mark' href='#wrapper' onclick='calender_func()' class='a-link txt'>カレンダー▼</a>
			</div>
			<div id="calendar" class='shori'>
				<div id='calendar_message'></div>
				<div id='calendar_hyou'></div>
				<div id='calendar_title'></div>

				<div id='calendar_params'></div>

				<div id='calendar_status' class='status'></div>
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
			<div id="products" class='shori'>
				<p id='products_title'></p>
				<div id='products_message'></div>
				<div id="products_params"></div>
				<div id='products_status' class='status'></div>
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
			<div id="members" class='shori'>
				<p id='members_title'></p>
				<div id='members_message'></div>
				<div id="members_params"></div>
				<div id='members_status' class='status'></div>
				<div id='members_exec' class='exec'></div>
				<div id="members_like"></div>
				<div id="members_results"></div>
			</div>
		</div>

		<div class='line'></div>

		<div id='test'></div>

	</div>

</div>

<script>
	dotinstall();
</script>

	<noscript>
		<p>JavaScriptを有効にしてください。</p>
	</noscript>

</body>

</html>

