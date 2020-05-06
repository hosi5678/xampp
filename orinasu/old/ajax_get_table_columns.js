function ajax_get_table_columns(table_name){
 
  var defer = new $.Deferred;

  $.post({
    url: '../php_libs/ajax_get_table_columns.php',
      data:{
       'table_name':table_name,
      },

      dataType:'json', 

  }).done(function(result){
  
    defer.resolve(result);

  }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
  })

  return defer.promise();

}