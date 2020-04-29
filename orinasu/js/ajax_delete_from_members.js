function ajax_delete_from_members(){

  var defer = new $.Deferred;

  id=$(this).closest('tr')[0].id

  $.post({
    url: '../php_libs/ajax_delete_from_members.php',
      data:{
       'id':id,

      },

      dataType:'json', 

  }).done(function(result){
  
    ajax_create_Members_Table("select");

    defer.resolve(result);

  }).fail(function(XMLHttpRequest, textStatus, errorThrown){
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
  })

  return defer.promise();

}