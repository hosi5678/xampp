<?php

// –½—ß‚Ì–³Œø‰»
function escape_string($str){
	$escape_str=htmlspecialchars($str,ENT_QUOTES,'UTF-8');
	$escape_str=addslashes($escape_str);
	return $escape_str;
}