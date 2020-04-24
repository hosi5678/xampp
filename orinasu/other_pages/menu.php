<?php

require("../libs/session.php");
require("../libs/escape_string.php");
require("../libs/is_empty.php");

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
	<link rel="stylesheet" type="text/css" href="./css/menu.css">
	<link rel="stylesheet" type="text/css" href="../css/jquery-ui.min.css">
	<script type="text/javascript" src="../js/jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="../js/jquery-ui.min.js"></script>
	<script src="./js/ajax_insert_into_members.js"></script>
	<script src="./js/ajax_select_from_members.js"></script>
	<script src="./js/ajax_select_from_staffs.js"></script>
	<script src="./js/ajax_delete_from_members_where_id.js"></script>
	<script src="./js/ajax_update_members_set_where.js"></script>
	
	<script src="./js/about_members.js"></script>
	<script src="./js/about_staffs.js"></script>
	<script src="./js/common_change_borders.js"></script>
	<script src="./js/create_members_table.js"></script>
	<script src="./js/create_members_box.js"></script>
	<script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>

	<script>
		console.log("fns check.");
		console.log(dateFns.isToday(new Date()));
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
		<a href="../index.php">ログイン画面へ戻る</a>
	</article>

	<article class='menu'>
		<form action="#" method="post" name="form1" class='menu'>
			<input type="hidden" name="id" value=<?php echo $id; ?>  class='menu' >
			<a href="javascript:form1.submit()"><?php echo $move_title; ?>へ移る</a>
		</form>
	</article>

	<article class='menu'>
		<form action="../index.php" method="post" name="form2" class='menu'>
			<input type="hidden" name="logout" value="1"  class='menu' >
			<a href="javascript:form2.submit()">ログアウトする</a>
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