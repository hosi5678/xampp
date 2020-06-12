'use strict';

function ajax_select_like(table_name,col,key){

  var defer = new $.Deferred;

  var query='select * from '+table_name+' where '+col+' like '+'"%'+key+'%" order by id asc;';

  console.log('-----in ajax select like -----');

  console.log('query:'+query);

  $.ajax({
    type:'post',
    url:'../php_libs/ajax_select_from.php',
      data:{
       'table_name':table_name,
       'query':query,
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