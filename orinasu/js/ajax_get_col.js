// 列名を得る(英数字),dbの操作に使う

'use strict';

function ajax_get_col(table_name){

  var defer = new $.Deferred;

  $.ajax({
    type:'post',
    url: '../php_libs/ajax_get_col.php',
      data:{
       'table_name':table_name
      },

      dataType:'json', 
      chache:false,

  }).done(function(res){

    defer.resolve(res);

  }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
  })

  return defer.promise();

}