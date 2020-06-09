'use strict';

function ajax_select_from_memo({
  table_name:table_name,
  start_date:start_date,
  end_date:end_date
}){

  var defer = new $.Deferred;

  var query='select * from calendar where date>="'+start_date+'"'+' and date<="'+end_date+'";';

  console.log(query);

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