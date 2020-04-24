function ajax_insert_into_members(){
//       var id = $('input[name="id"]:checked').val();

			surname=$('#member_surname').val();
			name=$('#member_name').val();
			start_date=$('#start_date').val();
			
			$.post({
				url: '../../libs/ajax_insert_into_members.php',
		      data:{
					'surname':surname,
					'name':name,
					'start_date':start_date
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
