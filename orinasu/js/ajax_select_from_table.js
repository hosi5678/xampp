function ajax_select_from_table(table_name,column){

  var defer = new $.Deferred;

        $.post({
          url: '../php_libs/ajax_select_from_table.php',
            data:{
             // 'table_name':table_name,
              'stmt':'select '+column+' from '+table_name+';',
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