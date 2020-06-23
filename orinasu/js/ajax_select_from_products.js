// productsテーブルからさまざまな条件でレコードを抽出する。
'use strict';

function ajax_select_from_producs(query){

  var defer = new $.Deferred;

  $.ajax({
    type:'post',
    url: '../php_libs/ajax_select_from_products.php',
      data:{
       'query':query,
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