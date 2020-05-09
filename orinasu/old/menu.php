<?php
ini_set('display_errors',1);
require_once("./php_libs/session.php");
require_once("./php_libs/escape_string.php");
require_once("./php_libs/is_empty.php");

$id_ext=escape_string($_POST["id"]);
is_empty($id_ext);

$_SESSION["id"]=$id_ext;

	$move_title='';
	$title='';

	if($id_ext==='1'){

		$title='管理画面';
		$move_title='一般画面';
		$title.='<input type="hidden" name="id" value="2">';

		$links ='<a href="#" onclick="about_staffs();">スタッフ  一覧</a>';
		$links.='<br>';
		$links.='<a href="#" onclick="about_members();">メンバー  一覧</a>';
		$links.='<br>';

		$id=2;

	}else if($id_ext==='2'){
		$title='一般画面';
		$move_title='管理画面';
		$links='<a href="../other_pages/select_users.php">棚卸表</a>';

		$id=1;
	}

?>

<!doctype html>

<html lang="ja">

<head>
<meta charset="utf-8">
<title>おりなすデータベース</title>
	<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="./css/index.css">
	<link rel="stylesheet" type="text/css" href="./css/menu.css">
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
	<script src="./js/create_members_update_form.js"></script>
	<script src="./js/create_table.js"></script>
	<script src="./js/update_table.js"></script>
	<script src="./js/delete_table.js"></script>
	<script src="./js/insert_table.js"></script>
	<script src="./js/reject_str.js"></script>
	<script src="./js/test.js"></script>

	<script>

	</script>

</head>

<body>

<!--
<div id='resizable' class="ui-widget-content">
-->

<header>
	<article class='menu'>
		<?php echo $title; ?>
	</article>

	<article class='menu'>
		<a href="./index.php">ログイン画面へ戻る</a>
	</article>

	<article class='menu'>
		<form action="#" method="post" name="send1" class='menu'>
			<input type="hidden" name="id" value=<?php echo $id; ?>  class='menu' >
			<a href="javascript:send1.submit()"><?php echo $move_title; ?>へ移る</a>
		</form>
	</article>

	<article class='menu'>
		<form action="./index.php" method="post" name="send2" class='menu'>
			<input type="hidden" name="logout" value="1"  class='menu' >
			<a href="javascript:send2.submit()">ログアウトする</a>
		</form>
	</article>

</header>

	<nav id="nav">
		<article><?php echo $links ?></article>
	</nav>

	<main id="main">
		
		<div id="param">
		</div>

		<div id="result">
		</div>

	</main>

<!--
	<aside>
		<article>補足1</article>
		<article>補足2</article>
		<article>補足3</article>
	</aside>
-->

	<footer id="message">メッセージ</footer>

<!--
</div>
-->

</body>

</html>