function ajax_select_like(table_name,col_name,key){

  var defer = new $.Deferred;

  $.ajax({
    type:'POST',
    url: '../php_libs/ajax_select_like.php',
      data:{
       'table_name':table_name,
       'col_name':col_name,
       'key':key,
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