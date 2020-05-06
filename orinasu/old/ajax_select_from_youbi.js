function ajax_select_from_youbi(){

    console.log("in ajax_select_from_youbi");

    var defer = new $.Deferred;

        $.post({
          url: '../php_libs/ajax_select_from_youbi.php',
            data:{
               'stmt':'select * from youbi;',
            },
            dataType:'json', // in case of data type is array,dataType:'json'
        }).done(function(result){
        
          put_option_tabs(result);

          defer.resolve(result);

        }).fail(function(XMLHttpRequest, textStatus, errorThrown){
              console.log(XMLHttpRequest);
              console.log(textStatus);
              console.log(errorThrown);
        })

        return defer.promise();

}