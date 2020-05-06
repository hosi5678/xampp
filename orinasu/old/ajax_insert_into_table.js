function ajax_insert_into_table(table_name,query){

  var defer = new $.Deferred;

  $.post({
    url: '../php_libs/ajax_stmt_exec.php',
      data:{
       'table_name':table_name,
       'query':query,
       'fetch_mode':'assoc',
      },

      dataType:'json', 

  }).done(function(res){

  }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
  })

  return defer.promise();

}