function ajax_stmt_exec(table_name,query,fetch_mode){

  var defer = new $.Deferred;

  $.post({
    url: '../php_libs/ajax_stmt_exec.php',
      data:{
       'table_name':table_name,
       'query':query,
       'fetch_mode':fetch_mode,
      },

      dataType:'json', 

  }).done(function(res){

    defer.resolve(res);

  }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
  })

  return defer.promise();

}