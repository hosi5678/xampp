function ajax_select_from_members(){

  var defer = new $.Deferred;

  $.post({
    url: '../php_libs/ajax_select_from_members.php',
      data:{
         'stmt':'select * from members;',
      },
      dataType:'json', // in case of data type is array,dataType:'json'
  }).done(function(result){
  

    defer.resolve(result);

  }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
  })

  return defer.promise();

}