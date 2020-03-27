<?php

function getStats(...$numbers){
	// return $a+$b+$c;
	$total=0;
	foreach($numbers as $number){
		$total+=$number;
	}
	return [$total,$total/count($numbers)];
}

print_r(getStats(1,3,5));
list($sum,$average)=getStats(1,3,5);

echo $sum.':'.$average;