// 簡単な(単純な(taxとかcategoryとか))テーブルから1次元データを取得する
'use strict';

function ajax_select_from_table(table_name){

  var defer = new $.Deferred;

  $.ajax({
    type:'post',
    url: '../php_libs/ajax_select_from_table.php',
      data:{
       'table_name':table_name,
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