function ajax_get_youbi(){

    console.log("ajax load");

        $.post({
          url: '../libs/ajax_get_youbi.php',
            data:{
               'stmt':'select * from youbi;',
            },
            dataType:'json', // in case of data type is array,dataType:'json'
        }).done(function(data){
        
          put_option_tabs(data);

        }).fail(function(XMLHttpRequest, textStatus, errorThrown){
              console.log(XMLHttpRequest);
              console.log(textStatus);
              console.log(errorThrown);
        })

}