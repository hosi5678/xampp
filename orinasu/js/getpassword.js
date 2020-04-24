function getpassword(){
        var id = $('input[name="id"]:checked').val();
     			
			$.post({
				url: '../libs/ajax_getpassword.php',
		      data:{
					'id':id
				},

			dataType:'json', // in case of data type is array,dataType:'json'

        }).done(function(data){
//				document.form1.password.value =data;
        }).fail(function(XMLHttpRequest, textStatus, errorThrown){
            alert(errorThrown);
        })
    
}

/* original
function getpassword(){
$(function(){
			let id;
		    $('input[name="id"]:checked').on('click',function(){
 		       id = $(this).val(); //選択したメニューの値
 			       $.post({
		            url: '../libs/ajax_getpassword.php',
		            data:{
 		               'id':id
 		           },
            dataType:'json', // in case of data type is array,dataType:'json'
        }).done(function(data){
  				 alert(data);
//				document.form1.password.value =data;
        }).fail(function(XMLHttpRequest, textStatus, errorThrown){
            alert(errorThrown);
        })
		})
})

}

*/