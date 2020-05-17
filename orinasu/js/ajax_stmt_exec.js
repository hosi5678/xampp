function ajax_stmt_exec(table_name,query){

  var defer = new $.Deferred;

  $.ajax({
    type:'POST',
    url: '../php_libs/ajax_stmt_exec.php',
      data:{
       'table_name':table_name,
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