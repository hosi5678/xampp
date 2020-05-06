<?php

$date=new DateTime('2020-02-29');
$date->add(new DateInterval('P1D'));

$msg=$date->format('Y-m-d');

?>

<!doctype html>
<html lang="ja">

<head>
	<meta charset="utf-8">
	<title>Calender</title>

<!--
	<link rel="stylesheet" href="./css/styles.css">
-->

	<style type="text/css">
		select{width:250px;height:30px;font-size:20px}
	</style>

</head>

<body>

<label>好きな色
	<select height="100em">
		<option selected>選択してください</option>
		<option>色1</option>
		<option>色2</option>
		<option>色3</option>
		<option>色4</option>
		<option>色5</option>
	</select>
</label>

</body>

</html>