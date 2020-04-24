<?php

session_start();

// require_once(__DIR__.'./php_libs/db_define_todo.php');
require_once(__DIR__.'./php_libs/config.php');
require_once(__DIR__.'./php_libs/function.php');
require_once(__DIR__.'./php_libs/Todo.php');

$todoApp=new \MyApp\Todo();
$todos=$todoApp->getAll();

//var_dump($todos);

// exit;

?>

<!doctype html>

<html lang="ja">

<head>
<meta charset="utf-8">
<title>おりなすデータベースホームページ</title>

<!--
	<link rel="stylesheet" type="text/css" href="./css/index.css">
-->
	<link rel='stylesheet' type='text/css' href='./css/todo.css'>
	<link href="./css/jquery-ui.min.css" rel="stylesheet">
	<script src="./js/jquery-3.4.1.min.js"></script>
	<script src="./js/jquery-ui.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>

<body>

	<div id='container'>
		<h1>todos</h1>

		<form action="">
			<input type='text' id='new_todo' placeholder='what needs to be done?'>
		</form>
		
		<ul id='todos'>
			<?php foreach ($todos as $todo): ?>
			<li id="todo_<?= h($todo->id);?>" data-id="<?= h($todo->id); ?>">
				<input type='checkbox' class='update_todo' <?php if($todo->state==='1') echo 'checked'; ?>>
				<span class="todo_title <?php if($todo->state==='1') echo 'done' ?>"><?= h($todo->title) ?></span>
				<div class='delete_todo'>x</div>
			</li>
			<?php endforeach; ?>

<!--
			<li>
				<input type='checkbox'>
				<span>Do something</span>
				<div class='delete_todo'>x</div>
			</li>
			
			<li>
				<input type='checkbox' checked>
				<span class='done'>Do something again?</span>
				<span class='delete_todo'>x</span>
			</li>
			-->
		</ul>
		
	</div>

	<input type='hidden' id='token' value='<?= h($_SESSION['token']); ?>'>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src='./js/todo.js'></script>

</body>

</html>