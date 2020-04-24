function ajax_select_from_members(){
//       var id = $('input[name="id"]:checked').val();
//			var member_surname=$('input[name="member_surname"]').val();
//			var member_name=$('input[name="member_name"]').val();

			var result=document.getElementById('result');

			while(result.firstChild){
  				result.removeChild(result.firstChild);
			} 

			$.post({
				url: '../../libs/ajax_select_from_members.php',
		      data:{
					},

			dataType:'json' //'json', 

        }).done(function(data){

			create_members_table(data);
				
        }).fail(function(XMLHttpRequest,textStatus,errorThrown){
        	console.log(XMLHttpRequest);
        	console.log(textStatus);
         	console.log(errorThrown);
        })
    
}