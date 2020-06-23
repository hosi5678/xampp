'use strict';

function ajax_query_from_table(query){

  var defer = new $.Deferred;

  console.log('-----in ajax query from table -----');

  console.log('query:'+query);

  $.ajax({
    type:'post',
    url:'../php_libs/ajax_query_from_table.php',
      data:{
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