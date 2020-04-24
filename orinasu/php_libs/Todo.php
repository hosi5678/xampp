<?php
namespace MyApp;

class Todo {

    private $_db;

    public function __construct(){

      $this->_createToken();

        try{
          $this->_db=new \PDO(pdo_dsn,db_username,db_password,[\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,]);
  
        }catch(\PDOException $e){
          echo $e->getMessage();
          exit();
        }

    }

    private function _createToken(){

      if(!isset($_SESSION['token'])){
        $_SESSION['token']=bin2hex(openssl_random_pseudo_bytes(16));
      }
    }

    public function getAll(){
      $stmt=$this->_db->query('select * from todos order by id desc;'); 
      return $stmt->fetchAll(\PDO::FETCH_OBJ);
    }

    public function _update(){
      if(!isset($_POST['id'])){
        throw new \Exception('id not set');
      }

      $this->_db->beginTransaction();
      $sql=sprintf('update todos set state=(state+1)%%2 where id=%id;',$_POST['id']);
      $stmt=$this->_db->prepare($sql);
      $stmt->execute();

      $sql=sprintf('select state from todos where id=%d',$_POST['id']);
      $stmt=$this->_db->query($sql);
      $state=$stmt->fetchCloumn();

      $this->_db->commit();

      return ['state'=>$state];
    }

    public function _create(){
      
    }

    public function _delete(){
      
    }

    public function post(){
      if(!isset($_POST['mode'])){
        throw new \Exception('mode not set');
      }

      switch($_POST['mode']){
        case 'update':
          return $this->_update();
        case 'create':
          return $this->_create();
        case 'delete':
          return $this->_delete();
      }

    }

}