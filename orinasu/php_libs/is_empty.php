<?php
function is_empty($s){
	if(empty($s)|!isset($s)){
		echo '値がセットされていません。<br>';
		echo '<a href=./index.php>先頭ページへ移動</a>';
		exit();
	}
}