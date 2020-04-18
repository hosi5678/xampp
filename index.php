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
	<script>
		
$(function () {
    $('#container').highcharts({
      chart: {
        width:900,
        height:400
      },
      title: {
        text: '売上状況',
        x: -20 //center
      },
      subtitle: {
        text: '',
        x: -20
      },
      xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月',
          '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        title: {
          text: '売上(円)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: '大丸',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
      }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
      }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    });
  });
		
	</script>
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

</div>

</body>

</html>