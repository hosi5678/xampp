'use strict';

function ajax_select_from_where({
  table_name:table_name,
  col:col,
  key:key
}){

  var defer = new $.Deferred;

  var query='select * from '+table_name+' where '+col+'="'+key+'";';

  console.log('key:'+key);

  $.ajax({
    type:'post',
    url: '../php_libs/ajax_select_from.php',
      data:{
       'table_name':table_name,
        'query':query
      },

      dataType:'json', 
      chache:false,

  }).done(function(res){

    defer.resolve(res);

  }).fail(function(XMLHttpRequest,textStatus,errorThrown){
    console.log(XMLHttpRequest);
    console.log(textStatus);
    console.log(errorThrown);
  })

  return defer.promise();

}