function ajax_select_from_table(table_name,tag_name){

    console.log("ajax_select_from_table : "+ table_name);

        $.post({
          url: '../php_libs/ajax_select_from_table.php',
            data:{
             // 'table_name':table_name,
              'stmt':'select * from '+table_name+';',
            },

            dataType:'json', 

        }).done(function(result){
        
          put_option_tabs(result,tag_name);

        }).fail(function(XMLHttpRequest, textStatus, errorThrown){
              console.log(XMLHttpRequest);
              console.log(textStatus);
              console.log(errorThrown);
        })

}