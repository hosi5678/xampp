// 列名を得る tableの表記に使う。

'use strict';
function ajax_get_label(table_name){

  var defer = new $.Deferred;

  $.ajax({
    type:'POST',
    url: '../php_libs/ajax_get_label.php',
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