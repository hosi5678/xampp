<?php

require_once(__DIR__.'./php_libs/config.php');
require_once(__DIR__.'./php_libs/function.php');
require_once(__DIR__.'./php_libs/Todo.php');

$todoApp=new \MyApp\Todo();

if($_SERVER['REQUEST_METHOD']==='POST'){

  try{
    $res=$todoApp->post();
    header('Content-Type:application/json');
    echo json_encode($res);
    exit;
  }catch(Exception $e){
     echo $e->getMessage(); 
    exit;
  }

}