<?php

	require_once(__DIR__.'/libs/config.php');
	require_once(__DIR__.'/libs/Bingo.php');

	$bingo=new \MyApp\Bingo();
	$nums=$bingo->create();

//	var_dump($nums);

?>

<!doctype html>
<html lang="ja">

<head>
	<meta charset="utf-8">
	<title>Bingo!</title>

	<link rel="stylesheet" href="./css/styles.css">


</head>

<body>
	<div id="container">
		<table>
			<tr>
				<th>B</th>
				<th>I</th>
				<th>N</th>
				<th>G</th>
				<th>O</th>
			</tr>

			<?php for($i=0;$i<5;$i++): ?>
			<tr>
				<?php for($j=0;$j<5;$j++): ?>
					<td><?php h($nums[$j][$i]); ?></td>
				<?php endfor; ?>
			</tr>
			<?php endfor;?>
		</table>
	</div>

</body>

</html>